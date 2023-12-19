import { be_memo_pair_, be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	elysia_context$_,
	elysia_context_,
	elysia_context__set,
] = be_sig_triple_(()=>
	undefined,
{ ns: 'route', id: 'elysia_context' })
export const [
	request$_,
	request_,
] = be_memo_pair_(ctx=>
	elysia_context_(ctx)?.request,
{ ns: 'route', id: 'request' })
export const [
	store$_,
	store_,
] = be_memo_pair_(ctx=>
	elysia_context_(ctx)?.store,
{ ns: 'route', id: 'store' })
