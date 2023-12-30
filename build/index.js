/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
import { file_exists_, file_exists__waitfor } from 'ctx-core/fs'
import { nullish__none_, run } from 'ctx-core/function'
import { link, rm } from 'node:fs/promises'
import { join } from 'path'
import { app_ctx, app_path_, be, memo_, RebuildjsInterrupt } from 'rebuildjs'
import { browser__build as rebuildjs__browser__build, server__build as rebuildjs__server__build } from 'rebuildjs/build'
import { app_, server_entry__output__link__path_, server_entry__output__path_ } from '../app/index.js'
/**
 * @param {relysjs__build_config_T}[config]
 */
export async function browser__build(config) {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		relysjs,
		...rebuildjs__config
	} = config ?? {}
	return await rebuildjs__browser__build(rebuildjs__config)
}
/**
 * @param {relysjs__build_config_T}[config]
 * @returns {Promise<void>}
 */
export async function server__build(config) {
	const {
		relysjs,
		...rebuildjs__config
	} = config ?? {}
	const plugins = [relysjs_plugin_(relysjs), ...(config?.plugins ?? [])]
	const entryPoints = config?.entryPoints ?? []
	const server_entry = relysjs?.server_entry ?? join(app_path_(app_ctx), 'index.ts')
	entryPoints.push({ in: server_entry, out: 'index' })
	return await rebuildjs__server__build({
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
	return { name: 'relysjs_plugin', setup: setup_() }
	function setup_() {
		/**
		 * @param {import('esbuild').PluginBuild}build
		 */
		const setup = build=>{
			build.onEnd(async result=>{
				if (result.errors.length) {
					throw new Error(`Build errors: ${result.errors.length} errors`)
				}
			})
		}
		setup.relysjs__link$ = relysjs__link$_()
		return setup
		function relysjs__link$_() {
			return be(app_ctx, ctx=>
				run(memo_(relysjs__link$=>{
					r()
					return relysjs__link$
					function r() {
						nullish__none_([
							server_entry__output__path_(ctx),
							server_entry__output__link__path_(ctx),
						], (
							server_entry__output__path,
							server_entry__output__link__path,
						)=>{
							run(async ()=>{
								await cmd(()=>
									rm(server_entry__output__link__path, { force: true }))
								await cmd(()=>
									file_exists__waitfor(server_entry__output__path))
								await cmd(()=>
									link(server_entry__output__path, server_entry__output__link__path))
								const server_entry__output__map_path = `${server_entry__output__path}.map`
								if (await cmd(()=>
									file_exists_(server_entry__output__map_path))
								) {
									await cmd(()=>
										rm(`${server_entry__output__link__path}.map`, { force: true }))
									await cmd(()=>
										file_exists__waitfor(server_entry__output__map_path))
									await cmd(()=>
										link(
											server_entry__output__map_path,
											`${server_entry__output__link__path}.map`))
								}
								if (config?.app__start ?? true) {
									await cmd(()=>
										file_exists__waitfor(server_entry__output__link__path))
									const app__start = await cmd(()=>
										import(server_entry__output__link__path)
											.then(mod=>mod.default))
									let app = app_(ctx)
									if (app) await app.stop()
									await cmd(app__start)
								}
							})
							async function cmd(fn) {
							  if (cancel_()) throw new RebuildjsInterrupt()
								const ret = await fn()
							  if (cancel_()) throw new RebuildjsInterrupt()
								return ret
							}
							function cancel_() {
								return (
									server_entry__output__path_(ctx) !== server_entry__output__path
									|| server_entry__output__link__path_(ctx) !== server_entry__output__link__path
								)
							}
						})
					}
					return relysjs__link$
				})),
			{ id: 'relysjs__link$', ns: 'app' })()
		}
	}
}
