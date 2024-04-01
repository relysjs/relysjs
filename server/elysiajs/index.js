import { ns_id_be_memo_pair_, ns_id_be_sig_triple_, nullish__none_ } from 'ctx-core/rmemo'
export const [
	elysia_context$_,
	elysia_context_,
	elysia_context__set,
] = ns_id_be_sig_triple_(
	'request',
	'elysia_context',
	()=>undefined)
export const [
	request$_,
	request_,
] = ns_id_be_memo_pair_(
	'request',
	'request',
	ctx=>
		elysia_context_(ctx)?.request)
export const [
	request_url$_,
	request_url_,
] = ns_id_be_memo_pair_(
	'request',
	'request_url',
	ctx=>
		nullish__none_([request_(ctx)],
			request=>new URL(request.url)))
export const [
	store$_,
	store_,
] = ns_id_be_memo_pair_(
	'request',
	'store',
	ctx=>
		elysia_context_(ctx)?.store)
