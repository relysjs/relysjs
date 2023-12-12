import type { Ctx } from 'ctx-core/be'
import type { be_memo_pair_T, be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	elysia_context$_,
	elysia_context_,
	elysia_context__set,
]:be_sig_triple_T<elysia_context_T|undefined>
export declare const [
	request$_,
	request_,
]:be_memo_pair_T<Request|undefined>
export declare const [
	store$_,
	store_,
]:be_memo_pair_T<elysia_context_T['store']|undefined>
export type elysia_context_T = {
	request:Request
	store:{
		ctx:Ctx
	}&{ [x:string]:unknown }
}
