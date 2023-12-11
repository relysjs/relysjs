import { be_memo_pair_, be_sig_triple_ } from 'ctx-core/all'
import { be_memosig_triple_ } from 'ctx-core/rmemo'
import { Elysia } from 'elysia'
import { join, resolve } from 'path'
import { app_ctx__be_config } from './ctx.js'
export const [
	port$_,
	port_,
	port__set
] = be_sig_triple_(()=>
		process.env.PORT
			? parseInt(process.env.PORT)
			: 3000,
	app_ctx__be_config)
export const [
	cwd$_,
	cwd_, cwd__set
] = be_sig_triple_<string>(
	()=>resolve('.'),
	app_ctx__be_config)
export const [
	dist_path$_,
	dist_path_, dist_path__set
] = be_memosig_triple_(ctx=>join(cwd_(ctx), 'dist'),
	app_ctx__be_config)
export const [
	public_path$_,
	public_path_,
	public_path__set
] = be_memosig_triple_(ctx=>
		join(cwd_(ctx), 'public'),
	app_ctx__be_config)
export const [
	src_path$_,
	src_path_,
	src_path__set
] = be_memosig_triple_(ctx=>
		join(cwd_(ctx), 'src'),
	app_ctx__be_config)
export const [
	app_path$_,
	app_path_, app_path__set
] = be_memosig_triple_(ctx=>
		join(src_path_(ctx), 'app'),
		app_ctx__be_config)
export const [
	browser_path$_,
	browser_path_
] = be_memo_pair_(ctx=>
		join(dist_path_(ctx), 'dev-browser'),
	app_ctx__be_config)
export const [
	server_path$_,
	server_path_
] = be_memo_pair_(ctx=>
		join(dist_path_(ctx), 'dev-server'),
	app_ctx__be_config)
export const [
	app$_,
	app_,
	app__set
] = be_sig_triple_<Elysia|undefined>(
	()=>undefined,
	app_ctx__be_config)
