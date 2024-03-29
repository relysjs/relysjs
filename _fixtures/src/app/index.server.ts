import './index.server.css'
import { Elysia } from 'elysia'
import { assets_, type middleware_ctx_T, request_ctx__new } from 'rebuildjs/server'
export default (middleware_ctx:middleware_ctx_T)=>{
	return new Elysia()
		.get('/', ({ request })=>{
			const request_ctx = request_ctx__new(middleware_ctx)
			return new Response(
				'<!DOCTYPE html>' +
				'<html>' +
				'<head>' +
				assets_(request_ctx).css_a.map(css=>
					'<link rel="stylesheet" type="text/css" href="' + css + '"></link>'
				).join('') +
				assets_(request_ctx).script_a.map(script=>
					'<script type="module" src="' + script + '"></script>'
				).join('') +
				'</head>' +
				'<body>' +
				'<div>' +
				request.url +
				'</div>' +
				'</body>' +
				'</html>',
				{
					headers: {
						'Content-Type': 'text/html;charset=UTF-8'
					}
				})
		})
}
