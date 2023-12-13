import type { Plugin } from 'esbuild'
import { type rebuildjs__build_config_T, rebuildjs__plugin_ } from 'rebuildjs/build'
export { rebuildjs__plugin_ }
export declare function browser__build(
	config?:relysjs__build_config_T
):Promise<void>
export declare function server__build(
	config?:relysjs__build_config_T
):Promise<void>
export declare function relysjs_plugin_(config?:relysjs_plugin_config_T):Plugin
export type relysjs__build_config_T =
	&rebuildjs__build_config_T
	&{ relysjs?:relysjs_plugin_config_T }
export type relysjs_plugin_config_T = {
	server_entry?:string
	app__start?:boolean
}
