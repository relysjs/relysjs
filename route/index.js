/// <reference types="./index.d.ts" />
// TODO: use built-in TextEncoderStream when bunjs implements TextEncoderStream
// See https://github.com/oven-sh/bun/issues/5648
// See https://github.com/oven-sh/bun/issues/159
import { TextEncoderStream } from "@stardazed/streams-text-encoding"
import { route_ctx__new } from 'rebuildjs'
import { elysia_context__set } from '../elysiajs/index.js'
/**
 * @param {middleware_ctx_T}middleware_ctx
 * @param {($p:{ ctx:route_ctx_T })=>(string|ReadableStream<string|Uint8Array>)}page_
 * @param {ResponseInit}[response_init]
 * @returns {(context:elysia_context_T)=>Promise<Response>}
 * @private
 */
export function html_route_(middleware_ctx, page_, response_init) {
	return context=>{
		const route_ctx = route_ctx__ensure(context, middleware_ctx)
		return new Response(
			new ReadableStream({
				start(controller) {
					const page = page_({ ctx: route_ctx })
					if (page.pipeTo) {
						page.pipeThrough(new TextEncoderStream()).pipeTo(new WritableStream({
							write(chunk) {
								controller.enqueue(chunk)
							},
							close() {
								controller.close()
							}
						}))
					} else {
						controller.enqueue(
							Uint8Array.from(
								('' + page)
									.split('')
									.map(x=>x.charCodeAt())))
						controller.close()
					}
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
}
/**
 * @param {elysia_context_T}context
 * @param {middleware_ctx_T}middleware_ctx
 */
export function route_ctx__ensure(context, middleware_ctx) {
	const route_ctx = context.store.route_ctx ??= route_ctx__new(middleware_ctx)
	elysia_context__set(route_ctx, context)
	return route_ctx
}
