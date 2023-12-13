import type { be_memo_pair_T, be_sig_triple_T } from 'ctx-core/rmemo'
import type { Elysia } from 'elysia'
export * from 'rebuildjs/app'
export declare const [
	app$_,
	app_,
	app__set
]:be_sig_triple_T<Elysia|undefined>
export declare const [
	server_entry_path$_,
	server_entry_path_,
]:be_memo_pair_T<string>
export declare const [
	server_entry__output__relative_path$_,
	server_entry__output__relative_path_,
]:be_memo_pair_T<string|undefined>
export const [
	server_entry__output__path$_,
	server_entry__output__path_,
]:be_memo_pair_T<string>
export const [
	server_entry__output__link__path$_,
	server_entry__output__link__path_,
]:be_memo_pair_T<string>
export declare function app__new():Promise<Elysia>
export declare function app__start():Promise<Elysia>
