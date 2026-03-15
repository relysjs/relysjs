/// <reference types="bun-types" />
/// <reference types="./index.d.ts" />
import { Elysia } from 'elysia'
import { static_middleware__routes_ } from 'rebuildjs/server'
/**
 * @param {static_middleware__config_T}[config]
 * @returns {Promise<Elysia>}
 * @private
 */
export async function static_middleware_(config) {
	const app = new Elysia()
	const routes = await static_middleware__routes_(config)
	for (const { url_path, handler } of routes) {
		app.get(url_path, ()=>handler())
	}
	return app
}
