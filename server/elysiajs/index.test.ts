import { app_ctx, ctx_, middleware_ctx__new, request_ctx__new } from 'rebuildjs/server'
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
	const request_ctx = request_ctx__new(middleware_ctx__new())
	equal(elysia_context$_(request_ctx)(), undefined)
	equal(elysia_context_(request_ctx), undefined)
	const elysia_context:elysia_context_T = {
		request: new Request('http://localhost:3000'),
		store: { request_ctx },
	}
	elysia_context__set(request_ctx, elysia_context)
	equal(elysia_context$_(request_ctx)(), elysia_context)
	equal(elysia_context_(request_ctx), elysia_context)
	// @ts-expect-error TS2345
	throws(()=>elysia_context$_(ctx_())())
	// @ts-expect-error TS2345
	throws(()=>elysia_context_(ctx_()))
	// @ts-expect-error TS2345
	throws(()=>elysia_context__set(ctx_(), elysia_context))
})
test('request', ()=>{
	const request_ctx = request_ctx__new(middleware_ctx__new())
	equal(request$_(request_ctx)(), undefined)
	equal(request_(request_ctx), undefined)
	const request = new Request('http://localhost:3000')
	const elysia_context:elysia_context_T = {
		request,
		store: { request_ctx },
	}
	elysia_context__set(request_ctx, elysia_context)
	equal(request$_(request_ctx)(), request)
	equal(request_(request_ctx), request)
	// @ts-expect-error TS2345
	throws(()=>request$_(ctx_())())
	// @ts-expect-error TS2345
	throws(()=>request_(ctx_()))
})
test('request_url', ()=>{
	const request_ctx = request_ctx__new(middleware_ctx__new())
	equal(request_url$_(request_ctx)(), undefined)
	equal(request_url_(request_ctx), undefined)
	const request = new Request('http://localhost:3000/foo/bar')
	const elysia_context:elysia_context_T = {
		request,
		store: { request_ctx },
	}
	elysia_context__set(request_ctx, elysia_context)
	equal(elysia_context_(request_ctx), elysia_context)
	equal(request_(request_ctx), request)
	equal(request_url$_(request_ctx)(), new URL('http://localhost:3000/foo/bar'))
	equal(request_url_(request_ctx), new URL('http://localhost:3000/foo/bar'))
	// @ts-expect-error TS2345
	throws(()=>request_url$_(ctx_())())
	// @ts-expect-error TS2345
	throws(()=>request_url_(ctx_()))
})
test('store', ()=>{
	const request_ctx = request_ctx__new(middleware_ctx__new())
	equal(store$_(request_ctx)(), undefined)
	equal(store_(request_ctx), undefined)
	const store = { request_ctx }
	const elysia_context:elysia_context_T = {
		request: new Request('http://localhost:3000'),
		store,
	}
	elysia_context__set(request_ctx, elysia_context)
	equal(store$_(request_ctx)(), store)
	equal(store_(request_ctx), store)
	// @ts-expect-error TS2345
	throws(()=>store$_(ctx_())())
	// @ts-expect-error TS2345
	throws(()=>store_(ctx_()))
})
test.run()
