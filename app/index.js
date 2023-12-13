import { file_exists_ } from '@ctx-core/fs'
import { staticPlugin } from '@elysiajs/static'
import { be_memo_pair_, be_sig_triple_, rmemo__wait } from 'ctx-core/rmemo'
import { Elysia } from 'elysia'
import { join } from 'path'
import {
	app_ctx,
	app_ctx__be_config,
	browser__metafile$_,
	browser__metafile_path_,
	browser_path_,
	cwd_,
	middleware_ctx_,
	port_,
	server__input_path__set,
	server__metafile$_,
	server__metafile_path_,
	server__output_,
	server__output_path_, server_path_
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
	server_entry_path$_,
	server_entry_path_,
] = be_memo_pair_(ctx=>
	join(server_path_(ctx), 'index.js'),
{ ...app_ctx__be_config, id: 'server_entry_path' })
export async function app__new() {
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
	const app =
		new Elysia().use(staticPlugin({
			assets: browser_path_(app_ctx),
			prefix: '',
		}))
	const { inputs } = server__metafile
	for (let input_path in inputs) {
		const middleware_ctx = middleware_ctx_()
		server__input_path__set(middleware_ctx, input_path)
		const output = server__output_(middleware_ctx)
		if (output) {
			const server__middleware =
				await import(join(cwd_(app_ctx), server__output_path_(middleware_ctx)))
					.then(mod=>mod.default)
			app.use(server__middleware(middleware_ctx))
		}
	}
	return app
}
export async function app__start() {
	let app = app_(app_ctx)
	if (app) {
		await app.stop()
	}
	app = await app__new()
	app__set(app_ctx, app)
	const port = port_(app_ctx)
	app.listen(port)
	console.info(`server started on port ${port}`)
	return app
}
