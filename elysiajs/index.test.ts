import { app_ctx, ctx_, middleware_ctx__new, route_ctx__new } from 'rebuildjs'
import { test } from 'uvu'
import { equal, throws } from 'uvu/assert'
import {
	elysia_context$_,
	elysia_context_,
	elysia_context__set,
	type elysia_context_T,
	request$_,
	request_,
	request_url$_,
	request_url_,
	store$_,
	store_
} from './index.js'
test.after.each(()=>{
	app_ctx.s.app.clear()
})
test('elysia_context', ()=>{
	const route_ctx = route_ctx__new(middleware_ctx__new())
	equal(elysia_context$_(route_ctx)._, undefined)
	equal(elysia_context_(route_ctx), undefined)
	const elysia_context:elysia_context_T = {
		request: new Request('http://localhost:3000'),
		store: { route_ctx },
	}
	elysia_context__set(route_ctx, elysia_context)
	equal(elysia_context$_(route_ctx)._, elysia_context)
	equal(elysia_context_(route_ctx), elysia_context)
	// @ts-expect-error TS2345
	throws(()=>elysia_context$_(ctx_())._)
	// @ts-expect-error TS2345
	throws(()=>elysia_context_(ctx_()))
	// @ts-expect-error TS2345
	throws(()=>elysia_context__set(ctx_(), elysia_context))
})
test('request', ()=>{
	const route_ctx = route_ctx__new(middleware_ctx__new())
	equal(request$_(route_ctx)._, undefined)
	equal(request_(route_ctx), undefined)
	const request = new Request('http://localhost:3000')
	const elysia_context:elysia_context_T = {
		request,
		store: { route_ctx },
	}
	elysia_context__set(route_ctx, elysia_context)
	equal(request$_(route_ctx)._, request)
	equal(request_(route_ctx), request)
	// @ts-expect-error TS2345
	throws(()=>request$_(ctx_())._)
	// @ts-expect-error TS2345
	throws(()=>request_(ctx_()))
})
test('request_url', ()=>{
	const route_ctx = route_ctx__new(middleware_ctx__new())
	equal(request_url$_(route_ctx)._, undefined)
	equal(request_url_(route_ctx), undefined)
	const request = new Request('http://localhost:3000/foo/bar')
	const elysia_context:elysia_context_T = {
		request,
		store: { route_ctx },
	}
	elysia_context__set(route_ctx, elysia_context)
	equal(elysia_context_(route_ctx), elysia_context)
	equal(request_(route_ctx), request)
	equal(request_url$_(route_ctx)._, new URL('http://localhost:3000/foo/bar'))
	equal(request_url_(route_ctx), new URL('http://localhost:3000/foo/bar'))
	// @ts-expect-error TS2345
	throws(()=>request_url$_(ctx_())._)
	// @ts-expect-error TS2345
	throws(()=>request_url_(ctx_()))
})
test('store', ()=>{
	const route_ctx = route_ctx__new(middleware_ctx__new())
	equal(store$_(route_ctx)._, undefined)
	equal(store_(route_ctx), undefined)
	const store = { route_ctx }
	const elysia_context:elysia_context_T = {
		request: new Request('http://localhost:3000'),
		store,
	}
	elysia_context__set(route_ctx, elysia_context)
	equal(store$_(route_ctx)._, store)
	equal(store_(route_ctx), store)
	// @ts-expect-error TS2345
	throws(()=>store$_(ctx_())._)
	// @ts-expect-error TS2345
	throws(()=>store_(ctx_()))
})
test.run()
