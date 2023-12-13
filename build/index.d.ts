import { BuildOptions } from 'esbuild'
import type { Plugin } from 'esbuild'
import { browser__build, rebuildjs_plugin_ } from 'rebuildjs/build'
export { browser__build, rebuildjs_plugin_ }
export declare function server__build(
	config?:relysjs__server__build_config_T
):Promise<void>
export type relysjs__server__build_config_T = Partial<BuildOptions>&{ relysjs?:relysjs_plugin_config_T }
export declare function relysjs_plugin_(config?:relysjs_plugin_config_T):Plugin
export type relysjs_plugin_config_T = {
	app__start?:boolean
}
