import type { Ctx, ctx__be_T, ctx__get_T, ctx__set_T } from 'ctx-core/be'
import type { sig_T } from 'ctx-core/rmemo'
import type { has_route_T } from 'rebuildjs'
export declare const elysia_context$_:ctx__be_T<has_route_T, sig_T<elysia_context_T>, 'route'>
export declare const elysia_context_:ctx__get_T<has_route_T, elysia_context_T>
export declare const elysia_context__set:ctx__set_T<has_route_T, elysia_context_T>
export declare const request$_:ctx__be_T<has_route_T, sig_T<Request>, 'route'>
export declare const request_:ctx__get_T<has_route_T, Request>
export declare const store$_:ctx__be_T<has_route_T, sig_T<elysia_context_T['store']>, 'route'>
export declare const store_:ctx__get_T<has_route_T, elysia_context_T['store']>
export type elysia_context_T = {
	request:Request
	store:{
		ctx:Ctx<''|'app'|'middleware'|'route'>
	}&{ [x:string]:unknown }
}
