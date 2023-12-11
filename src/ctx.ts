import { type be_config_T, ctx_, type MapCtx } from 'ctx-core/be'
export const app_ctx = app_ctx_()
function app_ctx_() {
	const app_ctx = ctx_() as app_ctx_T
	app_ctx.is_app_ctx = true
	return app_ctx
}
export const app_ctx__be_config = Object.freeze({
	is_source: (ctx:MapCtx)=>'is_app_ctx' in ctx
} as be_config_T)
export function middlewre_ctx_() {
	const ctx = ctx_() as middleware_MapCtx_T
	ctx.is_middleware_ctx = true
	return [ctx_(), app_ctx] as middleware_ctx_T
}
export const middleware_ctx__be_config = Object.freeze({
	is_source: (ctx:MapCtx)=>'is_middleware_ctx' in ctx
} as be_config_T)
export function route__ctx_(app_input_ctx:middleware_ctx_T) {
	const ctx = ctx_() as route_MapCtx_T
	ctx.is_route_ctx = true
	return [ctx, ...app_input_ctx] as route_ctx_T
}
export const route_ctx__be_config = Object.freeze({
	is_source: (ctx:MapCtx)=>'is_route_ctx' in ctx
} as be_config_T)
export type app_ctx_T = MapCtx&{ is_app_ctx:true }
export type middleware_MapCtx_T = MapCtx&{ is_middleware_ctx:true }
export type middleware_ctx_T = [middleware_MapCtx_T, app_ctx_T]
export type route_MapCtx_T = MapCtx&{ is_route_ctx:true }
export type route_ctx_T = [route_MapCtx_T, ...middleware_ctx_T]
