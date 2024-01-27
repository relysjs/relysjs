import type { ctx__be_T, ctx__get_T, ctx__set_T, sig_T } from 'ctx-core/rmemo'
import type { request_ctx_T } from 'rebuildjs/server'
export declare const elysia_context$_:ctx__be_T<sig_T<elysia_context_T>, 'request'>
export declare const elysia_context_:ctx__get_T<elysia_context_T, 'request'>
export declare const elysia_context__set:ctx__set_T<elysia_context_T, 'request'>
export declare const request$_:ctx__be_T<sig_T<Request>, 'request'>
export declare const request_:ctx__get_T<Request, 'request'>
export declare const request_url$_:ctx__be_T<sig_T<URL>, 'request'>
export declare const request_url_:ctx__get_T<URL, 'request'>
export declare const store$_:ctx__be_T<sig_T<elysia_context_T['store']>, 'request'>
export declare const store_:ctx__get_T<elysia_context_T['store'], 'request'>
export type elysia_context_T = {
	request:Request
	request_ctx?:request_ctx_T
	store:{ [x:string]:unknown }
}
