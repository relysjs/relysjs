import { be_memo_pair_ } from 'ctx-core/rmemo'
import { elysia_context_ } from './elysia_context.js'
export const [
	store$_,
	store_,
] = be_memo_pair_(ctx=>
	elysia_context_(ctx)?.store)
