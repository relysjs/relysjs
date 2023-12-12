import { be_memo_pair_, be_sig_triple_ } from 'ctx-core/rmemo'
import { route_ctx__be_config } from 'rebuildjs'
export const [
	elysia_context$_,
	elysia_context_,
	elysia_context__set,
] = be_sig_triple_(()=>
	undefined,
{ ...route_ctx__be_config, id: 'elysia_context' })
export const [
	request$_,
	request_,
] = be_memo_pair_(ctx=>
	elysia_context_(ctx)?.request,
{ ...route_ctx__be_config, id: 'request' })
export const [
	store$_,
	store_,
] = be_memo_pair_(ctx=>
	elysia_context_(ctx)?.store,
{ ...route_ctx__be_config, id: 'store' })
