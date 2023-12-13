import { staticPlugin } from '@elysiajs/static'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { Elysia } from 'elysia'
import { join } from 'path'
import {
	app_ctx,
	app_ctx__be_config,
	browser_path_,
	cwd_,
	middleware_ctx_,
	port_,
	server__input_path__set,
	server__metafile_,
	server__output_,
	server__output_path_
} from 'rebuildjs'
export * from 'rebuildjs/app'
export const [
	app$_,
	app_,
	app__set
] = be_sig_triple_(()=>
	undefined,
app_ctx__be_config)
export async function app__new() {
	const server__metafile = server__metafile_(app_ctx)
	const app =
		new Elysia().use(staticPlugin({
			assets: browser_path_(app_ctx),
			prefix: '',
		}))
	if (server__metafile) {
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
