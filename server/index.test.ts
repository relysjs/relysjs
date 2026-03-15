import { test } from 'uvu'
import { equal } from 'uvu/assert'
import * as server from './index.js'
// Adapter interface conformance: verify relysjs/server exports the expected API surface
// These are the functions/signals that both adapters must provide
const required_exports = [
	// From rebuildjs/server (re-exported)
	'app_ctx',
	'middleware_ctx__new',
	'request_ctx__new',
	'html_response__new',
	// html_route_ is intentionally excluded from barrel — ambiguous between rebuildjs and adapter versions.
	// Import from 'relysjs/server/route' or 'rebuildjs/server/route' instead.
	'static_middleware__routes_',
	'rebuildjs_browser__build',
	'rebuildjs_server__build',
	'build_id_',
	'cwd_',
	'port_',
	// From relysjs adapter modules
	'app$_',
	'app_',
	'app__set',
	'app__attach',
	'app__start',
	'server_entry__relative_path$_',
	'server_entry__relative_path_',
	'server_entry__output__relative_path$_',
	'server_entry__output__relative_path_',
	'server_entry__output__path$_',
	'server_entry__output__path_',
	'server_entry__output__link__path$_',
	'server_entry__output__link__path_',
	// Build
	'relysjs__build_id$_',
	'relysjs__build_id_',
	'relysjs__build_id__set',
	'relysjs__ready$_',
	'relysjs__ready_',
	'relysjs__ready__wait',
	'relysjs_browser__build',
	'relysjs_server__build',
	'relysjs_plugin_',
	// Compression
	'compression_middleware_',
	// Elysia context
	'elysia_context$_',
	'elysia_context_',
	'elysia_context__set',
	'request$_',
	'request_',
	'request_url$_',
	'request_url_',
	'store$_',
	'store_',
	// Route
	'request_ctx__ensure',
	// Static
	'static_middleware_',
]
for (const name of required_exports) {
	test(`exports|${name}`, ()=>{
		equal(name in server, true, `relysjs/server should export '${name}'`)
	})
}
test.run()
