/// <reference types="bun-types" />
import { file, Glob } from 'bun'
import { ext_R_mime } from 'ctx-core/http'
import { Elysia } from 'elysia'
import { extname, join } from 'path'
import { app_ctx, browser_path_ } from 'rebuildjs'
export async function static_middleware_() {
	const app = new Elysia()
	const glob = new Glob('**')
	for await (const relative_path of glob.scan(browser_path_(app_ctx))) {
		const url_path = join('/', relative_path)
		const content_type = ext_R_mime[extname(relative_path)] ?? 'text/plain'
		const path = join(browser_path_(app_ctx), relative_path)
		app.get(url_path, ()=>{
			return new Response(file(path).stream(), {
				headers: {
					'Content-Type': content_type
				}
			})
		})
	}
	return app
}
