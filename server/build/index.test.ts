import { file_exists_ } from 'ctx-core/fs'
import { sleep } from 'ctx-core/function'
import { ctx_, ns_be_sig_triple_, rmemo__wait } from 'ctx-core/rmemo'
import { BuildContext } from 'esbuild'
import { rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import {
	app_ctx,
	browser__metafile_,
	browser__metafile__set,
	browser__script_,
	build_id_,
	build_id__refresh,
	build_id__set,
	cwd__set,
	rebuildjs__build_id__set,
	rebuildjs__ready__add,
	server__css_,
	server__metafile_,
	server__metafile__set,
	server__output__relative_path_M_middleware_ctx_
} from 'rebuildjs/server'
import { test } from 'uvu'
import { equal, throws } from 'uvu/assert'
import { browser__metafile0, server__metafile0 } from '../../_fixtures/metafile.js'
import { app$_, app_ } from '../app/index.js'
import {
	relysjs__build_id$_,
	relysjs__build_id_,
	relysjs__build_id__set,
	relysjs__ready__wait,
	relysjs_browser__build,
	relysjs_server__build
} from './index.js'
test.after.each(()=>{
	app_ctx.s.app.clear()
})
test('relysjs__build_id', ()=>{
	equal(relysjs__build_id$_(app_ctx)(), undefined)
	equal(relysjs__build_id_(app_ctx), undefined)
	build_id__refresh()
	equal(typeof build_id_(app_ctx), 'string')
	relysjs__build_id__set(app_ctx, build_id_(app_ctx)!)
	equal(relysjs__build_id$_(app_ctx)(), build_id_(app_ctx)!)
	equal(relysjs__build_id_(app_ctx), build_id_(app_ctx)!)
	// @ts-expect-error TS2345
	throws(()=>relysjs__build_id$_(ctx_()))
	// @ts-expect-error TS2345
	throws(()=>relysjs__build_id_(ctx_()))
})
test('relysjs__ready__wait', async ()=>{
	let done = false
	const [
		,
		plugin__ready_,
		plugin__ready__set
	] = ns_be_sig_triple_(
		'app',
		()=>false)
	rebuildjs__ready__add(plugin__ready_)
	relysjs__ready__wait()
		.then(()=>done = true)
	equal(done, false)
	const build_id = server__metafile0.build_id!
	build_id__set(app_ctx, build_id)
	await sleep(0)
	equal(done, false)
	server__metafile__set(app_ctx, server__metafile0)
	await sleep(0)
	equal(done, false)
	browser__metafile__set(app_ctx, browser__metafile0)
	await sleep(0)
	equal(done, false)
	rebuildjs__build_id__set(app_ctx, build_id)
	await sleep(0)
	equal(done, false)
	relysjs__build_id__set(app_ctx, build_id)
	await sleep(0)
	equal(done, false)
	plugin__ready__set(app_ctx, true)
	await sleep(0)
	equal(done, true)
})
test('relysjs__ready__wait|timeout', async ()=>{
	let err:Error|undefined = undefined
	try {
		await relysjs__ready__wait(0)
	} catch (_err) {
		err = _err as Error
	}
	equal(err!.message, 'Timeout 0ms')
})
test('browser__build|server__build|relysjs_plugin_|metafile', async ()=>{
	const test_dir = dirname(new URL(import.meta.url).pathname)
	const cwd = join(test_dir, '../../_fixtures')
	cwd__set(app_ctx, cwd)
	await rm(join(cwd, 'dist'), { recursive: true, force: true })
	let server__build_context:BuildContext|undefined = undefined
	let browser__build_context:BuildContext|undefined = undefined
	try {
		equal(app_(app_ctx), undefined)
		server__build_context = await relysjs_server__build()
		browser__build_context = await relysjs_browser__build()
		await relysjs__ready__wait()
		equal(await file_exists_(join(cwd, 'dist')), true)
		equal(await file_exists_(join(cwd, 'dist', 'browser--dev')), true)
		equal(await file_exists_(join(cwd, 'dist', 'server--dev')), true)
		const app = (await rmemo__wait(
			app$_(app_ctx),
			app=>app,
			1000,
			Error('test|rmemo__wait|app')))!
		equal(typeof app, 'object')
		const server__metafile = server__metafile_(app_ctx)!
		equal(server__metafile.rebuildjs_target, 'server')
		const browser__metafile = browser__metafile_(app_ctx)!
		equal(browser__metafile.rebuildjs_target, 'browser')
		equal(server__metafile.build_id != null, true)
		equal(server__metafile.build_id, browser__metafile.build_id)
		const server__output__relative_path =
			Object.keys(server__metafile.outputs)
				.find(server__output__relative_path=>
					server__metafile.outputs[server__output__relative_path].entryPoint
					&& server__metafile.outputs[server__output__relative_path].cssBundle)!
		equal(typeof server__output__relative_path, 'string')
		const server__entryPoint__output =
			server__metafile.outputs[server__output__relative_path]
		equal(server__entryPoint__output != null, true, 'server__entryPoint__output != null')
		equal(server__entryPoint__output.cssBundle != null, true, 'server__entryPoint__output.cssBundle != null')
		equal(server__entryPoint__output.cssBundle, server__entryPoint__output.cssBundle,
			'server__entryPoint__output.cssBundle')
		equal(server__entryPoint__output.esbuild_cssBundle, server__entryPoint__output.esbuild_cssBundle,
			'server__entryPoint__output.esbuild_cssBundle')
		const browser__output__relative_path =
			Object.keys(browser__metafile.outputs)
				.find(browser__output__relative_path=>
					browser__metafile.outputs[browser__output__relative_path].entryPoint)!
		equal(typeof browser__output__relative_path, 'string', 'typeof browser__output__relative_path')
		const browser__entryPoint__output =
			browser__metafile.outputs[browser__output__relative_path]
		equal(browser__entryPoint__output != null, true)
		equal(browser__entryPoint__output.cssBundle != null, true)
		equal(browser__entryPoint__output.cssBundle, browser__entryPoint__output.cssBundle,
			'browser__entryPoint__output.cssBundle')
		equal(browser__entryPoint__output.esbuild_cssBundle, browser__entryPoint__output.esbuild_cssBundle,
			'browser__entryPoint__output.esbuild_cssBundle')
		equal(server__entryPoint__output.cssBundle_content, [
			server__output__relative_path,
			browser__output__relative_path
		])
		equal(browser__entryPoint__output.cssBundle_content, [
			browser__output__relative_path
		])
		await app.stop()
		const root_response =
			await app.handle(new Request('http://localhost:3000/'))
		// fixture uses gzip compression
		const root_html =
			String.fromCharCode(...gunzipSync(
				Buffer.from(await root_response.arrayBuffer())))
		const middleware_ctx =
			server__output__relative_path_M_middleware_ctx_(app_ctx)
				.get(server__output__relative_path)!
		equal(
			root_html.includes(
				'<link rel="stylesheet" type="text/css" ' +
				'href="' + server__css_(middleware_ctx) + '"></link>'),
			true)
		equal(
			root_html.includes(
				'<script type="module" ' +
				'src="' + browser__script_(middleware_ctx) + '"></script>'),
			true)
	} finally {
		await sleep(100)
		server__build_context?.dispose?.()
		browser__build_context?.dispose?.()
		await app_(app_ctx)?.stop?.()
	}
})
test.run()
