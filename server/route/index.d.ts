/// <reference lib="dom" />
import type { middleware_ctx_T, request_ctx_T } from 'rebuildjs/server'
export declare function html_route_(
	middleware_ctx:middleware_ctx_T,
	page_:($p:{ ctx:request_ctx_T })=>({ toString():string }|ReadableStream<string>),
	response_init?:ResponseInit
):(context:{
	request:Request
	store:{ [x:string]:unknown }
})=>Promise<Response>
export declare function request_ctx__ensure(
	middleware_ctx:middleware_ctx_T,
	context:{
		request:Request
		store:{ [x:string]:unknown }
	},
):request_ctx_T
export declare function html_response__new(
	html_OR_stream:string|ReadableStream,
	response_init?:ResponseInit
):Response
