import type { ctx__be_T, ctx__get_T, ctx__set_T, sig_T } from 'ctx-core/rmemo'
import type { BuildContext, Plugin } from 'esbuild'
import type { has_app_T } from 'rebuildjs'
import type { rebuildjs_build_config_T } from 'rebuildjs/build'
export {
	build_id$_,
	build_id_,
	build_id__set,
	build_id__refresh,
	persist__metafile__build_id$_,
	persist__metafile__build_id_,
	persist__metafile__ready$_,
	persist__metafile__ready_,
	rebuildjs__build_id$_,
	rebuildjs__build_id_,
	rebuildjs__build_id__set,
	rebuildjs__ready$_,
	rebuildjs__ready_,
	rebuildjs__ready__wait,
	server__external_,
	rebuildjs_plugin_,
} from 'rebuildjs/build'
export declare const relysjs__build_id$_:ctx__be_T<has_app_T, sig_T<string>, 'app'>
export declare const relysjs__build_id_:ctx__get_T<has_app_T, string>
export declare const relysjs__build_id__set:ctx__set_T<has_app_T, string>
export declare const relysjs__ready$_:ctx__be_T<has_app_T, sig_T<boolean>, 'app'>
export declare const relysjs__ready_:ctx__get_T<has_app_T, boolean>
export declare function relysjs__ready__wait(timeout?:number):Promise<void>
export declare function browser__build(
	config?:relysjs__build_config_T
):Promise<BuildContext>
export declare function server__build(
	config?:relysjs__build_config_T
):Promise<BuildContext>
export declare function relysjs_plugin_(config?:relysjs_plugin_config_T):Plugin
export type relysjs__build_config_T =
	&rebuildjs_build_config_T
	&{ relysjs?:relysjs_plugin_config_T }
export type relysjs_plugin_config_T = {
	server_entry?:string
	app__start?:boolean
}
