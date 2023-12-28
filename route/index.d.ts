/// <reference lib="dom" />
import type { middleware_ctx_T, route_ctx_T } from 'rebuildjs'
export declare function html_route_(
	middleware_ctx:middleware_ctx_T,
	page_:($p:{ ctx:route_ctx_T })=>({ toString():string }|ReadableStream<string>)
):(context:{
	request:Request
	store:{ [x:string]:unknown }
})=>Promise<Response>
