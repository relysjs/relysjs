import { type Elysia } from 'elysia'
import { type middleware_ctx_T } from './ctx.js'
export function middleware_(fn:(middleware_ctx:middleware_ctx_T)=>Elysia) {
  return fn
}
