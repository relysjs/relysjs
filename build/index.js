/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
import { browser__build, server__build as _server__build } from 'rebuildjs/build'
import { app__start } from '../app/index.js'
export { browser__build }
/**
 * @param {relysjs__server__build_config_T}[config]
 * @returns {Promise<void>}
 */
export function server__build(config) {
	const { relysjs, ...rest } = config ?? {}
	const plugins = [relysjs_plugin_(relysjs), ...(config?.plugins ?? [])]
	return _server__build({
		...rest,
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
					await app__start()
				}
			})
		}
	}
}
