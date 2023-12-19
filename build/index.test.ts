import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { relysjs_plugin_ } from './index.js'
// TODO: tests
test('relysjs_plugin_', ()=>{
	const relys_plugin = relysjs_plugin_()
	equal(relys_plugin.name, 'relysjs_plugin')
})
test.run()
