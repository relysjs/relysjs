import { expect, test } from 'bun:test'
import { extname, join } from 'node:path'
// Inline the function to avoid pulling in rebuildjs/server dependency
function static_export__file_path_(route:string, out_dir:string, content_type?:string) {
	const ext = extname(route)
	const is_html = content_type ? content_type.includes('text/html') : !ext || ext === '.html'
	if (ext && !is_html) {
		return join(out_dir, route)
	}
	if (route === '/') {
		return join(out_dir, 'index.html')
	}
	return join(out_dir, route, 'index.html')
}
test('/ returns index.html', ()=>{
	expect(static_export__file_path_('/', 'dist')).toBe('dist/index.html')
})
test('/about returns about/index.html', ()=>{
	expect(static_export__file_path_('/about', 'dist')).toBe('dist/about/index.html')
})
test('/nested/path returns nested/path/index.html', ()=>{
	expect(static_export__file_path_('/nested/path', 'dist')).toBe('dist/nested/path/index.html')
})
test('/robots.txt with text/plain content-type returns bare file', ()=>{
	expect(static_export__file_path_('/robots.txt', 'dist', 'text/plain')).toBe('dist/robots.txt')
})
test('/sitemap.xml with application/xml content-type returns bare file', ()=>{
	expect(static_export__file_path_('/sitemap.xml', 'dist', 'application/xml')).toBe('dist/sitemap.xml')
})
test('/protocol.love with text/html content-type returns index.html', ()=>{
	expect(
		static_export__file_path_('/protocol.love', 'dist', 'text/html;charset=UTF-8')
	).toBe('dist/protocol.love/index.html')
})
test('/protocol.love without content-type falls back to bare file (backward compat)', ()=>{
	expect(static_export__file_path_('/protocol.love', 'dist')).toBe('dist/protocol.love')
})
test('/rss.xml with application/xml returns bare file', ()=>{
	expect(static_export__file_path_('/rss.xml', 'dist', 'application/xml')).toBe('dist/rss.xml')
})
test('/feed.json with application/json returns bare file', ()=>{
	expect(static_export__file_path_('/feed.json', 'dist', 'application/json')).toBe('dist/feed.json')
})
test('/page.html with text/html returns page.html/index.html', ()=>{
	expect(
		static_export__file_path_('/page.html', 'dist', 'text/html')
	).toBe('dist/page.html/index.html')
})
test('/page with no extension and no content-type returns index.html', ()=>{
	expect(static_export__file_path_('/page', 'dist')).toBe('dist/page/index.html')
})
