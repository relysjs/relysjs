import { browser__build, server__build as _server__build } from 'resbuild/build'
import { relysjs_plugin_ } from '../relysjs_plugin'
export { browser__build }
export function server__build(config = {}) {
	const plugins = [relysjs_plugin_(), ...(config.plugins ?? [])]
	return _server__build({
		...config,
		plugins,
	})
}
