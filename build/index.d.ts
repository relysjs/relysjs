import type { BuildContext, Plugin } from 'esbuild'
import type { rebuildjs_build_config_T, rebuildjs_plugin_ } from 'rebuildjs/build'
export { rebuildjs_plugin_ }
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
