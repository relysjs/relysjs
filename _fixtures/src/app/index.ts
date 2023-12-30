import { Elysia } from 'elysia'
import { app_ctx, is_prod_, metafile__wait } from 'rebuildjs'
import { app__start } from '../../../app/index.js'
import { compression_middleware_ } from '../../../compression/index.js'
import { static_middleware_ } from '../../../static/index.js'
export default async ()=>{
	await metafile__wait(2000)
	const app =
		new Elysia()
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
				console.error(request.url, error)
			})
	return app__start(app)
}
