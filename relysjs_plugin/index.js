/// <reference types="esbuild" />
import { staticPlugin } from '@elysiajs/static'
import { Elysia } from 'elysia'
import { join } from 'path'
import {
	app_ctx,
	browser_path_,
	cwd_,
	middleware_ctx_,
	port_,
	server__input_path__set,
	server__metafile_,
	server__output_,
	server__output_path_
} from 'rebuildjs'
import { app_, app__set } from '../app/index.js'
/**
 * @returns {Plugin}
 * @private
 */
export function relysjs_rebuild_() {
	return {
		name: 'relysjs_rebuild',
		setup(build) {
			build.onEnd(async result=>{
				if (result.errors.length) {
					throw new Error(`Build errors: ${result.errors.length} errors`)
				}
				let app = app_(app_ctx)
				if (app) {
					await app.stop()
				}
				app = await app__new()
				app__set(app_ctx, app)
				app.listen(port_(app_ctx))
			})
		}
	}
}
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
