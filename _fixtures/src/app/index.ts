import { Elysia } from 'elysia'
import { app_ctx, is_prod_ } from 'rebuildjs/server'
import { compression_middleware_, static_middleware_ } from '../../../server/index.js'
export default async ()=>{
	return new Elysia()
		.use(await static_middleware_(
			is_prod_(app_ctx)
				? {
					headers_: ()=>({
						'Cache-Control': 'max-age=2592000, public'
					})
				}
				: {}
		))
		.use(compression_middleware_())
		.onError(({ error, request })=>{
			console.error(request.url)
			console.error(error)
		})
}
