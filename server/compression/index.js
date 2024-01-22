/// <reference types="./index.d.ts" />
// Fork of https://github.com/Gusb3ll/elysia-compression
import { deflateSync, gzipSync } from 'bun'
import compressible from 'compressible'
import { Elysia, mapResponse } from 'elysia'
import { createDeflate, createDeflateRaw, createGzip } from 'node:zlib'
/**
* @param {compression_middleware_config_T}[config]
 * @returns {Elysia<"", {request:{}, store:{}}, {type:{}, error:{}}, {}, {}, false>}
 */
export function compression_middleware_(config) {
	const type = config?.type ?? 'gzip'
	const encoding = config?.encoding ?? 'utf-8'
	const zlib_compression_options =
		config?.zlib_compression_options ?? {}
	const app = new Elysia({
		name: 'compression',
	})
	if (!['gzip', 'deflate'].includes(type)) {
		throw new Error('Invalid compression type. Use gzip or deflate.')
	}
	app.onAfterHandle(context=>{
		context.set.headers['Content-Encoding'] = type
		const res = mapResponse(context.response, {
			status: 200,
			headers: {},
		})
		if (!res.headers.get('Content-Type')) {
			res.headers.set('Content-Type', 'text/plain')
		}
		if (!should_compress_(res)) {
			delete context.set.headers['Content-Encoding']
			return context.response
		}
		const stream = context.response?.body
		const compressedBody =
			is_ReadableStream_(stream)
				? stream.pipeThrough(new CompressionStream(type))
				: type === 'gzip'
					? gzipSync(toBuffer(context.response, encoding), zlib_compression_options)
					: deflateSync(toBuffer(context.response, encoding), zlib_compression_options)
		context.response = new Response(compressedBody, {
			headers: res.headers,
		})
	})
	return app
}
class CompressionStream {
	readable
	writable
	constructor(format) {
		const handle = format === 'deflate'
			? createDeflate()
			: format === 'gzip'
				? createGzip()
				: createDeflateRaw()
		this.readable = new ReadableStream({
			start(controller) {
				handle.on('data', (chunk)=>controller.enqueue(chunk))
				handle.once('end', ()=>controller.close())
			},
		})
		this.writable = new WritableStream({
			write: (chunk)=>handle.write(chunk),
			close: ()=>handle.end(),
		})
	}
}
function is_ReadableStream_(value) {
	return value instanceof ReadableStream
}
function should_compress_(res) {
	const type = res.headers.get('Content-Type')
	if (!type) {
		return false
	}
	return compressible(type) ?? false
}
function toBuffer(data, encoding) {
	return Buffer.from(
		typeof data === 'object'
			? JSON.stringify(data)
			: data?.toString() ?? String(data), encoding)
}
