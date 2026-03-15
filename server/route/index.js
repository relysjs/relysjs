/// <reference types="./index.d.ts" />
import { html_route_ as _html_route_, request_ctx__new } from 'rebuildjs/server'
import { elysia_context__set } from '../elysiajs/index.js'
export { html_response__new } from 'rebuildjs/server'
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
	return _html_route_(middleware_ctx, page_, request_ctx__ensure, response_init)
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
