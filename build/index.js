/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
import { join } from 'path'
import { app_ctx, app_path_ } from 'rebuildjs'
import { browser__build, server__build as _server__build } from 'rebuildjs/build'
import { server_entry_path_ } from '../app/index.js'
export { browser__build }
/**
 * @param {relysjs__server__build_config_T}[config]
 * @returns {Promise<void>}
 */
export function server__build(config) {
	const {
		relysjs,
		...esbuild_config
	} = config ?? {}
	const plugins = [relysjs_plugin_(relysjs), ...(config?.plugins ?? [])]
	const entryPoints = config?.entryPoints ?? []
	const server_entry = relysjs?.server_entry ?? join(app_path_(app_ctx), 'index.ts')
	entryPoints.push({ in: server_entry, out: 'index' })
	return _server__build({
		...esbuild_config,
		entryPoints,
		plugins,
	})
}
/**
 * @param {relysjs_plugin_config_T}[config]
 * @returns {Plugin}
 * @private
 */
export function relysjs_plugin_(config) {
	return {
		name: 'relysjs_plugin',
		setup(build) {
			build.onEnd(async result=>{
				if (result.errors.length) {
					throw new Error(`Build errors: ${result.errors.length} errors`)
				}
				if (config?.app__start ?? true) {
					const app__start = await import(server_entry_path_(app_ctx))
					await app__start()
				}
			})
		}
	}
}
