import { be_memo_pair_, be_sig_triple_, nullish__none_, rmemo__wait, tup } from 'ctx-core/rmemo'
import { Elysia } from 'elysia'
import { dirname, join } from 'node:path'
import {
	app__relative_path_,
	app_ctx,
	browser__metafile$_,
	cwd_,
	metafile__wait,
	port_,
	server__metafile_,
	server__output_,
	server__output__relative_path_,
	server__output__relative_path_M_middleware_ctx_
} from 'rebuildjs/server'
export const [
	app$_,
	app_,
	app__set
] = be_sig_triple_(()=>
	undefined,
{ ns: 'app', id: 'app' })
export const [
	server_entry__relative_path$_,
	server_entry__relative_path_,
] = be_memo_pair_(ctx=>
	join(app__relative_path_(ctx), 'index.ts'),
{ ns: 'app', id: 'server_entry__relative_path' })
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
{ ns: 'app', id: 'server_entry__output__relative_path' })
export const [
	server_entry__output__path$_,
	server_entry__output__path_,
] = be_memo_pair_(ctx=>
	nullish__none_(tup(cwd_(ctx), server_entry__output__relative_path_(ctx)),
		(cwd, server_entry__output__relative_path)=>
			join(cwd, server_entry__output__relative_path)),
{ ns: 'app', id: 'server_entry__output__path' })
export const [
	server_entry__output__link__path$_,
	server_entry__output__link__path_,
] = be_memo_pair_(ctx=>
	nullish__none_([server_entry__output__path_(ctx)],
		server_entry__output__path=>
			join(dirname(server_entry__output__path), 'index.js')),
{ ns: 'app', id: 'server_entry__output__link__path' })
/**
 * @param {Elysia}[app]
 * @returns {Promise<Elysia>}
 */
export async function app__attach(app) {
	await metafile__wait(app_ctx)
	const neq_undefined = val=>val !== undefined
	await rmemo__wait(browser__metafile$_(app_ctx), neq_undefined)
	app ??= new Elysia()
	app._relysjs = 1
	for (
		const middleware_ctx of server__output__relative_path_M_middleware_ctx_(app_ctx).values()
	) {
		const output = server__output_(middleware_ctx)
		if (output.entryPoint !== server_entry__relative_path_(app_ctx)) {
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
