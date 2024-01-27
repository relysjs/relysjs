import { app_ctx, middleware_ctx__new } from 'rebuildjs/server'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { elysia_context_, type elysia_context_T } from '../elysiajs/index.js'
import { html_route_, request_ctx__ensure } from './index.js'
test.after.each(()=>{
	app_ctx.s.app.clear()
})
test('html_route_|string', async ()=>{
	const middlelware_ctx = middleware_ctx__new()
	const html = `<!DOCTYPE html><html><head></head><body><div>Test</div></body></html>`
	const html_route = html_route_(middlelware_ctx, ()=>
		html)
	const request = new Request('http://localhost:3000')
	const response = await html_route({ request, store: {} })
	equal(await response.text(), html)
})
test('html_route_|toString', async ()=>{
	const middlelware_ctx = middleware_ctx__new()
	const html = `<!DOCTYPE html><html><head></head><body><div>Test</div></body></html>`
	const html_route = html_route_(middlelware_ctx, ()=>(
		{ toString: ()=>html }))
	const request = new Request('http://localhost:3000')
	const response = await html_route({ request, store: {} })
	equal(await response.text(), html)
})
test('html_route_|ReadableStream|string', async ()=>{
	const middlelware_ctx = middleware_ctx__new()
	const html = `<!DOCTYPE html><html><head></head><body><div>Test</div></body></html>`
	const html_route = html_route_(middlelware_ctx, ()=>
		new ReadableStream({
			start(controller) {
				let first = true
				for (const chunk of html.split('>')) {
					if (!first) controller.enqueue('>')
					first = false
					controller.enqueue(chunk)
				}
				controller.close()
			}
		}))
	const request = new Request('http://localhost:3000')
	const response = await html_route({ request, store: {} })
	equal(await response.text(), html)
})
test('html_route_|response_init|all', async ()=>{
	const middlelware_ctx = middleware_ctx__new()
	const html = `<!DOCTYPE html><html><head></head><body><div>Test</div></body></html>`
	const html_route = html_route_(middlelware_ctx, ()=>html, {
		status: 403,
		statusText: 'Forbidden',
		headers: {
			'Content-Type': 'application/json',
			'FOO': 'BAR',
		}
	})
	const request = new Request('http://localhost:3000')
	const response = await html_route({ request, store: {} })
	equal(response.status, 403)
	equal(response.statusText, 'Forbidden')
	equal(response.headers.get('Content-Type'), 'application/json')
	equal(response.headers.get('FOO'), 'BAR')
})
test('html_route_|response_init|addional headers', async ()=>{
	const middlelware_ctx = middleware_ctx__new()
	const html = `<!DOCTYPE html><html><head></head><body><div>Test</div></body></html>`
	const html_route = html_route_(middlelware_ctx, ()=>html, {
		headers: {
			'FOO': 'BAR'
		}
	})
	const request = new Request('http://localhost:3000')
	const response = await html_route({ request, store: {} })
	equal(response.status, 200)
	equal(response.statusText, '')
	equal(response.headers.get('Content-Type'), 'text/html;charset=UTF-8')
	equal(response.headers.get('FOO'), 'BAR')
})
test('request_ctx__ensure', ()=>{
	const middlelware_ctx = middleware_ctx__new()
	const request = new Request('http://localhost:3000')
	const elysia_context = { request, store: {} } as elysia_context_T
	const request_ctx =
		request_ctx__ensure(middlelware_ctx, elysia_context)
	equal(elysia_context.request_ctx, request_ctx)
	equal(elysia_context_(request_ctx), elysia_context)
})
test.run()
