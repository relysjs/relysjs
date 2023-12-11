import { Glob } from 'bun'
import { spawn } from 'child_process'
import { BuildOptions, context, type Plugin } from 'esbuild'
import { link, mkdir } from 'fs/promises'
import { dirname, join } from 'path'
import { app_path_, browser_path_, server_path_, public_path_ } from './app.js'
import { app_ctx } from './ctx.js'
import { relysjs_esbuild_plugin_ } from './esbuild_plugin.js'
export async function server__build(config:Partial<BuildOptions> = {}) {
	const glob = new Glob('**/*.server.{ts,js,tsx,jsx}')
	const entryPoints:string[] = []
	for await (const path of glob.scan(app_path_(app_ctx))) {
		entryPoints.push(join(app_path_(app_ctx), path))
	}
	const plugins = [relysjs_esbuild_plugin_(), ...(config.plugins || [])]
	const external = ['/assets/*', 'bun', 'node_modules/*', ...(config.external || [])]
	const esbuild_ctx = await context({
		entryPoints,
		sourcemap: 'external',
		outdir: server_path_(app_ctx),
		bundle: true,
		metafile: true,
		format: 'esm',
		platform: 'node',
		...config,
		plugins,
		external,
		entryNames: '[name]-[hash]',
		assetNames: '[name]-[hash]',
		target: 'es2020',
		treeShaking: true,
	})
	await esbuild_ctx.watch()
}
export async function browser__build(config:Partial<BuildOptions> = {}) {
	await new Promise(resolve=>{
		const rm =
			spawn('rm', ['-rf', browser_path_(app_ctx), server_path_(app_ctx)])
		rm.stderr.on('error', err=>process.stderr.write(err.toString()))
		rm.on('exit', code=>resolve(code))
	})
	await new Promise(resolve=>{
		const mkdir =
			spawn('mkdir', ['-p', browser_path_(app_ctx)])
		mkdir.stderr.on('error', err=>process.stderr.write(err.toString()))
		mkdir.on('exit', code=>resolve(code))
	})
	const glob = new Glob('**/*.browser.{ts,js,tsx,jsx}')
	const entryPoints:string[] = []
	for await (const path of glob.scan(join(app_path_(app_ctx)))) {
		entryPoints.push(join(app_path_(app_ctx), path))
	}
	const plugins = [relysjs_esbuild_plugin_(), ...(config.plugins || [])]
	const esbuild_ctx = await context({
		entryPoints,
		sourcemap: 'external',
		outdir: browser_path_(app_ctx),
		entryNames: '[name]-[hash]',
		assetNames: '[name]-[hash]',
		bundle: true,
		external: [],
		target: 'es2020',
		format: 'esm',
		platform: 'browser',
		metafile: true,
		treeShaking: true,
		...config,
		plugins,
	})
	await esbuild_ctx.watch()
	await public__cp()
}
async function public__cp() {
	const public__glob = new Glob('**')
	const promise_a:Promise<unknown>[] = []
	for await (const path of public__glob.scan(public_path_(app_ctx))) {
		promise_a.push(
			(async ()=>{
				const out_path = join(browser_path_(app_ctx), path)
				await mkdir(dirname(out_path), { recursive: true })
				await link(join(public_path_(app_ctx), path), out_path)
			})(),
		)
	}
}
