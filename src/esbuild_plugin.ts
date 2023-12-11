import { staticPlugin } from '@elysiajs/static'
import { Elysia } from 'elysia'
import { join, resolve } from 'path'
import { app_, app__set, cwd_, browser_path_, server_path_, port_ } from './app.js'
import { browser__metafile__set } from './browser.js'
import { app_ctx, middlewre_ctx_ } from './ctx.js'
import {
	server__css_,
	server__cssBundle_,
	server__input_path__set,
	server__metafile_,
	server__metafile__set,
	server__output_,
	server__output_path_
} from './server.js'
export function relysjs_esbuild_plugin_() {
  return {
		name: 'rebuild-notify',
		setup(build) {
			build.onEnd(async result=>{
				if (result.errors.length) {
					throw new Error(`Build errors: ${result.errors.length} errors`)
				}
				if (result.metafile) {
					const { outdir } = build.initialOptions
					const resolve_outdir = resolve(outdir)
					if (resolve_outdir === server_path_(app_ctx)) {
						server__metafile__set(app_ctx, result.metafile)
					}
					else if (resolve_outdir === browser_path_(app_ctx)) {
						browser__metafile__set(app_ctx, result.metafile)
					}
					if (outdir) {
						Bun.write(
							join(outdir, 'metafile.json'),
							JSON.stringify(result.metafile, null, 2))
					}
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
		const {
			inputs,
			outputs
		} = server__metafile
		for (let input_path in inputs) {
			const middleware_ctx = middlewre_ctx_()
			server__input_path__set(middleware_ctx, input_path)
			const output = server__output_(middleware_ctx)
			if (output) {
				const server__middleware =
					await import(join(cwd_(app_ctx), server__output_path_(middleware_ctx)))
						.then(mod=>mod.default)
				app.use(server__middleware(middleware_ctx))
				const cssBundle = server__cssBundle_(middleware_ctx)
				const css = server__css_(middleware_ctx)
				if (css) {
					app.get(
						css,
						()=>new Response(Bun.file(cssBundle).stream(), {
							headers: {
								'Content-Type': 'text/css'
							}
						}))
				}
			}
		}
	}
	return app
}
