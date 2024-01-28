/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
import { file_exists_, file_exists__waitfor } from 'ctx-core/fs'
import { Cancel, nullish__none_, promise__cancel, promise__cancel__throw, run } from 'ctx-core/rmemo'
import { link, rm } from 'node:fs/promises'
import { join } from 'node:path'
import {
	app_ctx,
	app_path_,
	be,
	be_memo_pair_,
	be_sig_triple_,
	build_id_,
	memo_,
	metafile__build_id_,
	off,
	rebuildjs__ready_,
	rebuildjs_browser__build,
	rebuildjs_server__build,
	rmemo__wait
} from 'rebuildjs/server'
import { app_, server_entry__output__link__path_, server_entry__output__path_ } from '../app/index.js'
export const [
	relysjs__build_id$_,
	relysjs__build_id_,
	relysjs__build_id__set,
] = be_sig_triple_(()=>undefined,
	{ id: 'relysjs_plugin__build_id', ns: 'app' })
export const [
	relysjs__ready$_,
	relysjs__ready_,
] = be_memo_pair_(ctx=>
	!!(
		build_id_(ctx)
			&& rebuildjs__ready_(ctx)
			&& build_id_(ctx) === metafile__build_id_(ctx)
			&& build_id_(ctx) === relysjs__build_id_(ctx)),
{ id: 'relysjs__ready', ns: 'app' })
/**
 * @param {number}[timeout]
 * @returns {Promise<boolean>}
 */
export function relysjs__ready(timeout) {
	return rmemo__wait(
		relysjs__ready$_(app_ctx),
	  ready=>ready,
	  timeout ?? 10_000)
}
/**
 * @param {number}[timeout]
 * @returns {Promise<void>}}
 */
export function relysjs__ready__wait(timeout) {
	return rmemo__wait(
		relysjs__ready$_(app_ctx),
		ready=>ready,
		timeout ?? 5000)
}
/**
 * @param {relysjs__build_config_T}[config]
 */
export function relysjs_browser__build(config) {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		relysjs,
		...rebuildjs__config
	} = config ?? {}
	return rebuildjs_browser__build(rebuildjs__config)
}
/**
 * @param {relysjs__build_config_T}[config]
 * @returns {Promise<void>}
 */
export function relysjs_server__build(config) {
	const {
		relysjs,
		...rebuildjs__config
	} = config ?? {}
	const plugins = [relysjs_plugin_(relysjs), ...(config?.plugins ?? [])]
	const entryPoints = config?.entryPoints ?? []
	const server_entry = relysjs?.server_entry ?? join(app_path_(app_ctx), 'index.ts')
	entryPoints.push({ in: server_entry, out: 'index' })
	return rebuildjs_server__build({
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
						if (!rebuildjs__ready_(ctx)) return
						nullish__none_([
							build_id_(ctx),
							server_entry__output__path_(ctx),
							server_entry__output__link__path_(ctx),
						], (
							build_id,
							server_entry__output__path,
							server_entry__output__link__path,
						)=>{
							run(async ()=>{
								try {
									await Promise.all([
										file_exists__waitfor(async ()=>{
											await cmd(
												rm(server_entry__output__link__path, { force: true }))
											await cmd(
												link(server_entry__output__path, server_entry__output__link__path))
											return true
										}),
										file_exists__waitfor(async ()=>{
											await cmd(
												rm(
													server_entry__output__link__path + '.map',
													{ force: true }))
											await cmd(
												link(
													server_entry__output__path + '.map',
													server_entry__output__link__path + '.map'))
											return true
										})
									])
									relysjs__build_id__set(ctx, build_id)
									if (config?.app__start ?? true) {
										await cmd(
											file_exists__waitfor(server_entry__output__link__path))
										const app__start = await cmd(
											import(server_entry__output__link__path)
												.then(mod=>mod.default))
										let app = app_(ctx)
										if (app) await app.stop()
										await cmd(relysjs__ready__wait())
										await cmd(app__start())
									}
								} catch (err) {
									if (err instanceof Cancel) return
									throw err
								}
							})
							async function cmd(promise) {
								if (cancel_()) promise__cancel__throw(promise)
								promise.relysjs_cancel$ = run(memo_(relysjs_cancel$=>{
									if (cancel_()) {
										promise__cancel(promise)
										off(relysjs_cancel$)
									}
									return relysjs_cancel$
								}))
								const ret = await promise
								if (cancel_()) promise__cancel__throw(promise)
								return ret
							}
							function cancel_() {
								return (
									build_id_(ctx) !== build_id
										|| server_entry__output__path_(ctx) !== server_entry__output__path
										|| server_entry__output__link__path_(ctx) !== server_entry__output__link__path
								)
							}
						})
					}
				})),
			{ id: 'relysjs__link$', ns: 'app' })()
		}
	}
}
