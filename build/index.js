import { browser__build, server__build as _server__build } from 'rebuildjs/build'
import { relysjs_rebuild_ } from '../relysjs_plugin'
export { browser__build }
export function server__build(config = {}) {
	const plugins = [relysjs_rebuild_(), ...(config.plugins ?? [])]
	return _server__build({
		...config,
		plugins,
	})
}
