/// <reference types="esbuild" />
import { app_ctx, port_ } from 'rebuildjs'
import { browser__build, server__build as _server__build } from 'rebuildjs/build'
import { app_, app__new, app__set } from '../app/index.js'
export { browser__build }
export function server__build(config = {}) {
	const plugins = [relysjs_plugin_(), ...(config.plugins ?? [])]
	return _server__build({
		...config,
		plugins,
	})
}
/**
 * @returns {Plugin}
 * @private
 */
export function relysjs_plugin_() {
	return {
		name: 'relysjs_plugin',
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
