import { file_exists_ } from '@ctx-core/fs'
import { staticPlugin } from '@elysiajs/static'
import { nullish__none_, tup } from 'ctx-core/all'
import { be_memo_pair_, be_sig_triple_, rmemo__wait } from 'ctx-core/rmemo'
import { Elysia } from 'elysia'
import { dirname, join } from 'path'
import {
	app__relative_path_,
	app_ctx,
	app_ctx__be_config,
	browser__metafile$_,
	browser__metafile_path_,
	browser_path_,
	cwd_,
	middleware_ctx_,
	port_,
	server__metafile$_,
	server__metafile_,
	server__metafile_path_,
	server__output_,
	server__output__relative_path_,
	server__output__relative_path__set
} from 'rebuildjs'
export * from 'rebuildjs/app'
export const [
	app$_,
	app_,
	app__set
] = be_sig_triple_(()=>
	undefined,
{ ...app_ctx__be_config, id: 'app' })
export const [
	server_entry__relative_path$_,
	server_entry__relative_path_,
] = be_memo_pair_(ctx=>
	join(app__relative_path_(ctx), 'index.ts'),
{ ...app_ctx__be_config, id: 'server_entry__relative_path' })
export const [
	server_entry__output__relative_path$_,
	server_entry__output__relative_path_,
] = be_memo_pair_(ctx=>
	nullish__none_(tup(server__metafile_(ctx), server_entry__relative_path_(ctx)),
		(server__metafile, server_entry__relative_path)=>{
			const { outputs } = server__metafile
			for (const output_path in outputs) {
				const output = outputs[output_path]
				if (output.entryPoint === server_entry__relative_path) return output_path
			}
		}),
{ ...app_ctx__be_config, id: 'server_entry__output__relative_path' })
export const [
	server_entry__output__path$_,
	server_entry__output__path_,
] = be_memo_pair_(ctx=>
	join(cwd_(ctx), server_entry__output__relative_path_(ctx)),
{ ...app_ctx__be_config, id: 'server_entry__output__path' })
export const [
	server_entry__output__link__path$_,
	server_entry__output__link__path_,
] = be_memo_pair_(ctx=>
	join(dirname(server_entry__output__path_(ctx)), 'index.js'),
{ ...app_ctx__be_config, id: 'server_entry__output__link__path' })
/**
 * @param {Elysia}[app]
 * @returns {Promise<Elysia>}
 */
export async function app__attach(app) {
	if (!await file_exists_(server__metafile_path_(app_ctx))) {
		throw new Error(`${server__metafile_path_(app_ctx)} does not exist`)
	}
	if (!await file_exists_(browser__metafile_path_(app_ctx))) {
		throw new Error(`${browser__metafile_path_(app_ctx)} does not exist`)
	}
	const neq_undefined = val=>val !== undefined
	const server__metafile = await rmemo__wait(
		server__metafile$_(app_ctx),
		neq_undefined)
	await rmemo__wait(browser__metafile$_(app_ctx), neq_undefined)
	app ??= new Elysia()
	app._relysjs = 1
	app.use(staticPlugin({
		assets: browser_path_(app_ctx),
		prefix: '',
	}))
	const { outputs } = server__metafile
	for (let server__output__relative_path in outputs) {
		const middleware_ctx = middleware_ctx_()
		server__output__relative_path__set(middleware_ctx, server__output__relative_path)
		const output = server__output_(middleware_ctx)
		if (output.entryPoint && output.entryPoint !== server_entry__relative_path_(app_ctx)) {
			const server__middleware =
				await import(join(cwd_(app_ctx), server__output__relative_path_(middleware_ctx)))
					.then(mod=>mod.default)
			app.use(server__middleware(middleware_ctx))
		}
	}
	return app
}
/**
 * @param {Elysia}[app]
 * @returns {Promise<Elysia>}
 */
export async function app__start(app) {
	if (!app?._relysjs) {
		app = await app__attach(app)
	}
	app__set(app_ctx, app)
	const port = port_(app_ctx)
	app.listen(port)
	console.info(`server started on port ${port}`)
	return app
}
