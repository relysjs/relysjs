import type { be_sig_triple_T } from 'ctx-core/rmemo'
import type { Elysia } from 'elysia'
export * from 'rebuildjs/app'
export declare const [
	app$_,
	app_,
	app__set
]:be_sig_triple_T<Elysia|undefined>
export declare function app__new():Promise<Elysia>
export declare function app__start():Promise<Elysia>
