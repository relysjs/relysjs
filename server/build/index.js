/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
import { file_exists_, file_exists__waitfor } from 'ctx-core/fs'
import {
	calling,
	Cancel,
	ns_id_be,
	ns_id_be_memo_pair_,
	ns_id_be_sig_triple_,
	nullish__none_,
	promise__cancel,
	promise__cancel__throw,
	ref__bind,
	run
} from 'ctx-core/rmemo'
import { Elysia } from 'elysia'
import { link, rm } from 'node:fs/promises'
import { join } from 'node:path'
import {
	app_ctx,
	app_path_,
	build_id_,
	memo_,
	metafile__build_id_,
	off,
	port_,
	rebuildjs__esbuild__done_,
	rebuildjs__ready_,
	rebuildjs_browser__build,
	rebuildjs_server__build,
	rmemo__wait
} from 'rebuildjs/server'
import { app_, app__start, server_entry__output__link__path_, server_entry__output__path_ } from '../app/index.js'
export const [
	relysjs__build_id$_,
	relysjs__build_id_,
	relysjs__build_id__set,
] = ns_id_be_sig_triple_(
	'app',
	'relysjs_plugin__build_id',
	()=>undefined)
export const [
	relysjs__ready$_,
	relysjs__ready_,
] = ns_id_be_memo_pair_(
	'app',
	'relysjs__ready',
	ctx=>
		!!(
			build_id_(ctx)
			&& rebuildjs__ready_(ctx)
			&& build_id_(ctx) === metafile__build_id_(ctx)
			&& build_id_(ctx) === relysjs__build_id_(ctx)))
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
		ref__bind(setup, relysjs__link$_())
		return setup
		function relysjs__link$_() {
			return ns_id_be(
				app_ctx,
				'app',
				'relysjs__link$',
				ctx=>
					calling(memo_(()=>{
						if (!rebuildjs__esbuild__done_(ctx)) return
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
										let stall__resolve
										let stall = new Promise(resolve=>stall__resolve = resolve)
										let app = new Elysia()
										let stall_app = new Elysia()
											.onRequest(async ({ request })=>{
												await stall
												return app.handle(request)
											})
										await stall_app.listen(port_(app_ctx))
										const _app = app_(ctx)
										if (_app) {
											if (_app.server) {
												_app.stop().then()
											}
										}
										try {
											await cmd(relysjs__ready__wait(30_000))
											await cmd(file_exists__waitfor(server_entry__output__link__path))
											await cmd(file_exists__waitfor(async ()=>{
												if (!await file_exists_(server_entry__output__link__path)) {
													return false
												}
												app.use(
													await cmd(import(server_entry__output__link__path))
														.then(mod=>mod.default()))
												return true
											}))
											await cmd(app__start(app))
											stall__resolve()
										} finally {
											if (stall_app.server) {
												await stall_app.stop()
											}
										}
									}
								} catch (err) {
									if (err instanceof Cancel) return
									throw err
								}
							})
							async function cmd(promise) {
								if (cancel_()) promise__cancel__throw(promise)
								if (!promise) return promise
								ref__bind(promise, calling(memo_(relysjs_cancel$=>{
									if (cancel_()) {
										promise__cancel(promise)
										off(relysjs_cancel$)
									}
								})))
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
					})))
		}
	}
}
