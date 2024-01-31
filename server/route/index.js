/// <reference types="./index.d.ts" />
// TODO: use built-in TextEncoderStream when bunjs implements TextEncoderStream
// See https://github.com/oven-sh/bun/issues/5648
// See https://github.com/oven-sh/bun/issues/159
import { TextEncoderStream } from 'ctx-core/stream'
import { request_ctx__new } from 'rebuildjs/server'
import { elysia_context__set } from '../elysiajs/index.js'
/**
 * @param {middleware_ctx_T}middleware_ctx
 * @param {($p:{ ctx:request_ctx_T })=>(string|ReadableStream<string|Uint8Array>)}page_
 * @param {ResponseInit}[response_init]
 * @returns {(context:elysia_context_T)=>Promise<Response>}
 * @private
 */
export function html_route_(
	middleware_ctx,
	page_,
	response_init
) {
	return context=>
		html_response__new(
			page_({
				ctx: request_ctx__ensure(middleware_ctx, context)
			}),
			response_init)
}
/**
 * @param {string|ReadableStream}html_OR_stream
 * @param {ResponseInit}[response_init]
 * @returns {Response}
 * @private
 */
export function html_response__new(
	html_OR_stream,
	response_init
) {
	return new Response(
		html_OR_stream.pipeTo
			? html_OR_stream.pipeThrough(new TextEncoderStream())
			: new ReadableStream({
				start(controller) {
					controller.enqueue('' + html_OR_stream)
					controller.close()
				}
			}),
		{
			...(response_init ?? {}),
			headers: {
				'Content-Type': 'text/html;charset=UTF-8',
				...(response_init?.headers ?? {})
			}
		}
	)
}
/**
 * @param {middleware_ctx_T}middleware_ctx
 * @param {elysia_context_T}context
 */
export function request_ctx__ensure(
	middleware_ctx,
	context,
) {
	const request_ctx = context.request_ctx ??= request_ctx__new(middleware_ctx)
	elysia_context__set(request_ctx, context)
	return request_ctx
}
