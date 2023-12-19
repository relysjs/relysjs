import type { ctx__be_T, ctx__get_T, ctx__set_T, sig_T } from 'ctx-core/rmemo'
import type { Elysia } from 'elysia'
import type { has_app_T } from 'rebuildjs'
export * from 'rebuildjs/app'
export declare const app$_:ctx__be_T<has_app_T, sig_T<Elysia|undefined>, 'app'>
export declare const app_:ctx__get_T<has_app_T, Elysia|undefined>
export declare const app__set:ctx__set_T<has_app_T, Elysia|undefined>
export declare const server_entry__relative_path$_:ctx__be_T<has_app_T, sig_T<string|undefined>, 'app'>
export declare const server_entry__relative_path_:ctx__get_T<has_app_T, string|undefined>
export declare const server_entry__output__relative_path$_:ctx__be_T<has_app_T, sig_T<string|undefined>, 'app'>
export declare const server_entry__output__relative_path_:ctx__get_T<has_app_T, string|undefined>
export declare const server_entry__output__path$_:ctx__be_T<has_app_T, sig_T<string|undefined>, 'app'>
export declare const server_entry__output__path_:ctx__get_T<has_app_T, string|undefined>
export declare const server_entry__output__link__path$_:ctx__be_T<has_app_T, sig_T<string|undefined>, 'app'>
export declare const server_entry__output__link__path_:ctx__get_T<has_app_T, string|undefined>
export declare function app__attach(app?:Elysia):Promise<Elysia>
export declare function app__start(app?:Elysia):Promise<Elysia>
