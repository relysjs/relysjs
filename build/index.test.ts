import { test } from 'uvu'
import { not } from 'uvu/assert'
import { relysjs_plugin_ } from './index.js'
import equal = not.equal
test('relysjs_plugin_', ()=>{
	const relys_plugin = relysjs_plugin_()
	equal(relys_plugin.name, 'relys_plugin')
})
test.run()
