import { is_entry_file_ } from 'ctx-core/fs'
import { relysjs_browser__build, relysjs_server__build } from '../../server/build/index.js'
is_entry_file_(import.meta.url, process.argv[1])
	.then(async is_entry_file=>{
		if (is_entry_file) {
			await relysjs_server__build()
			await relysjs_browser__build()
		}
	})
