import { be_memo_pair_ } from 'ctx-core/rmemo'
import { elysia_context_ } from './elysia_context.js'
export const [
	request$_,
	request_,
] = be_memo_pair_<Request|undefined>(ctx=>
	elysia_context_(ctx)?.request)
