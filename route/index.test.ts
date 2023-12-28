import { app_ctx, middleware_ctx_ } from 'rebuildjs'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { html_route_ } from './index.js'
test.after.each(()=>{
	app_ctx.s.app.clear()
})
test('html_route_|string', async ()=>{
	const middlelware_ctx = middleware_ctx_()
	const html = `<!DOCTYPE html><html><head></head><body><div>Test</div></body></html>`
	const html_route = html_route_(middlelware_ctx, ()=>
		html)
	const request = new Request('http://localhost:3000')
	const response = await html_route({ request, store: {} })
	equal(await response.text(), html)
})
test('html_route_|ReadableStream', async ()=>{
	const middlelware_ctx = middleware_ctx_()
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
test.run()
