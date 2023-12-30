import { gunzipSync } from 'bun'
import { file_exists_ } from 'ctx-core/fs'
import { sleep } from 'ctx-core/function'
import { rmemo__wait } from 'ctx-core/rmemo'
import { BuildContext } from 'esbuild'
import { rm } from 'node:fs/promises'
import { dirname, join } from 'path'
import {
	app_ctx,
	browser__metafile_, browser__script_,
	cwd__set,
	metafile__wait, server__css_,
	server__metafile_,
	server__output__relative_path_M_middleware_ctx_
} from 'rebuildjs'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { app$_, app_ } from '../app/index.js'
import { browser__build, server__build } from './index.js'
test.after.each(()=>{
	app_ctx.s.app.clear()
})
test('browser__build|server__build|relysjs_plugin_|metafile', async ()=>{
	const test_dir = dirname(new URL(import.meta.url).pathname)
	const cwd = join(test_dir, '../_fixtures')
	cwd__set(app_ctx, cwd)
	await rm(join(cwd, 'dist'), { recursive: true, force: true })
	let server__build_context:BuildContext|undefined = undefined
	let browser__build_context:BuildContext|undefined = undefined
	try {
		equal(app_(app_ctx), undefined)
		server__build_context = await server__build()
		browser__build_context = await browser__build()
		await metafile__wait()
		equal(await file_exists_(join(cwd, 'dist')), true)
		equal(await file_exists_(join(cwd, 'dist', 'browser--dev')), true)
		equal(await file_exists_(join(cwd, 'dist', 'server--dev')), true)
		const app = (await rmemo__wait(
			app$_(app_ctx),
			app=>app,
			1000))!
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
		equal(server__entryPoint__output.esbuild_cssBundle, server__entryPoint__output.cssBundle,
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
		equal(browser__entryPoint__output.esbuild_cssBundle, browser__entryPoint__output.cssBundle)
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
