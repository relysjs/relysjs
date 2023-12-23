/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
import { file_exists_ } from 'ctx-core/fs'
import { link } from 'fs/promises'
import { rm } from 'node:fs/promises'
import { join } from 'path'
import { app_ctx, app_path_ } from 'rebuildjs'
import { browser__build as _browser__build, server__build as _server__build } from 'rebuildjs/build'
import { app_, server_entry__output__link__path_, server_entry__output__path_ } from '../app/index.js'
/**
 * @param {relysjs__build_config_T}[config]
 */
export function browser__build(config) {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		relysjs,
	  ...rebuildjs__config
	} = config ?? {}
	return _browser__build(rebuildjs__config)
}
/**
 * @param {relysjs__build_config_T}[config]
 * @returns {Promise<void>}
 */
export function server__build(config) {
	const {
		relysjs,
		...rebuildjs__config
	} = config ?? {}
	const plugins = [relysjs_plugin_(relysjs), ...(config?.plugins ?? [])]
	const entryPoints = config?.entryPoints ?? []
	const server_entry = relysjs?.server_entry ?? join(app_path_(app_ctx), 'index.ts')
	entryPoints.push({ in: server_entry, out: 'index' })
	return _server__build({
		...rebuildjs__config,
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
				await link(server_entry__output__path_(app_ctx), server_entry__output__link__path_(app_ctx))
				const server_entry__output__map_path = `${server_entry__output__path_(app_ctx)}.map`
				if (await file_exists_(server_entry__output__map_path)) {
					await rm(`${server_entry__output__link__path_(app_ctx)}.map`, { force: true })
					await link(
						server_entry__output__map_path,
						`${server_entry__output__link__path_(app_ctx)}.map`)
				}
				if (config?.app__start ?? true) {
					const app__start = await import(server_entry__output__link__path_(app_ctx)).then(mod=>mod.default)
					let app = app_(app_ctx)
					if (app) await app.stop()
					await app__start()
				}
			})
		}
	}
}
