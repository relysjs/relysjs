import type { Ctx } from 'ctx-core/be'
export type elysia_context_T = {
	request:Request
	store:{
		ctx:Ctx
	}&{ [x:string]:unknown }
}
