/// <reference types="./index.d.ts" />
// TODO: use built-in TextEncoderStream when bunjs implements TextEncoderStream
// See https://github.com/oven-sh/bun/issues/5648
// See https://github.com/oven-sh/bun/issues/159
import { TextEncoderStream } from "@stardazed/streams-text-encoding"
import { route_ctx_ } from 'rebuildjs'
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
		const ctx = route_ctx_(middleware_ctx)
		context.store.ctx = ctx
		elysia_context__set(ctx, context)
		return new Response(
			new ReadableStream({
				start(controller) {
					const page = page_({ ctx })
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
