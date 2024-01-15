/// <reference types="bun-types" />
/// <reference types="./index.d.ts" />
import { file, Glob } from 'bun'
import { ext_R_mime } from 'ctx-core/http'
import { Elysia } from 'elysia'
import { extname, join } from 'node:path'
import { app_ctx, browser_path_ } from 'rebuildjs'
/**
 * @param {static_middleware__config_T}[config]
 * @returns {Promise<Elysia>}
 * @private
 */
export async function static_middleware_(config) {
	const app = new Elysia()
	const glob = new Glob('**')
	for await (const relative_path of glob.scan(browser_path_(app_ctx))) {
		const url_path = join('/', relative_path)
		const content_type = ext_R_mime[extname(relative_path)] ?? 'text/plain'
		const path = join(browser_path_(app_ctx), relative_path)
		const headers = (config?.headers_ ?? (()=>({})))(
			url_path,
			content_type,
			path)
		app.get(url_path, ()=>{
			return new Response(file(path).stream(), {
				headers: {
					'Content-Type': content_type,
					...headers,
				}
			})
		})
	}
	return app
}
