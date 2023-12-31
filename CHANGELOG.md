# relysjs

## 0.41.4

### Patch Changes

- fix: rollback: rebuildjs*plugin*: rebuildjs*plugin\_\_postprocess$*: memo: void
- fix: rollback: relysjs*plugin*: relysjs\__link$_: memo: void
- Updated dependencies
  - rebuildjs@0.34.4

## 0.41.3

### Patch Changes

- rebuildjs*plugin*: rebuildjs*plugin\_\_postprocess$*: memo: void
- relysjs*plugin*: relysjs\__link$_: memo: void
- Updated dependencies
  - rebuildjs@0.34.3

## 0.41.2

### Patch Changes

- ctx-core: ^5.16.0 -> ^5.16.1
- Updated dependencies
  - rebuildjs@0.34.2

## 0.41.1

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.34.1

## 0.41.0

### Minor Changes

- minor:

      memo_T:
      sig_T:
      	+ .add<add_val_T>(add_def:(sig:sig_T<val_T>, prev_val:add_val_T|undefined)=>add_val_T):memo_T<val_T>
      memo_:
      sig_:
      memosig_:
      lock_memosig_:
      	arguments: - ...subscriber_a
      rmemo__subscribe→rmemo__add

  patch:

      rmemo__add: fix: add_def is not called until memo argument is called

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.16.0
  - rebuildjs@0.34.0

## 0.40.0

### Minor Changes

- minor:

      subscribers: + strong reference to return value: prevent GC
      memo_T:
      sig_T:
      	+ b?:[unknown, memo_T<unknown>][]

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.33.0
  - ctx-core@5.15.0

## 0.39.0

### Minor Changes

- ondelete*be*: .d: fix: clear ondelete callbacks when run

### Patch Changes

- Updated dependencies
  - ctx-core@5.14.0
  - rebuildjs@0.32.0

## 0.38.1

### Patch Changes

- @sinclair/typebox: ^0.32.4 -> ^0.32.5
- Updated dependencies
  - rebuildjs@0.31.1

## 0.38.0

### Minor Changes

- minor:

      Cancel
      nullish
      nullish__none_
      run
      sleep
      Timeout
      tup

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.31.0
  - ctx-core@5.13.0

## 0.37.1

### Patch Changes

- ctx-core: ^5.11.0 -> ^5.12.0
- Updated dependencies
  - rebuildjs@0.30.1

## 0.37.0

### Minor Changes

- minor:

      + rmemo__on: aliased by on
      + rmemo__off: aliased by off

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.30.0
  - ctx-core@5.11.0

## 0.36.0

### Minor Changes

- html*route*: arguments: + response_init?:ResponseInit

## 0.35.4

### Patch Changes

- assets\_\_assign: arguments: ...\_assets_a:Partial<assets_T>[]
- Updated dependencies
  - rebuildjs@0.29.3

## 0.35.3

### Patch Changes

- assets\_\_assign: fix: implementation
- Updated dependencies
  - rebuildjs@0.29.2

## 0.35.2

### Patch Changes

- bun-types: ^1.0.20 -> ^1.0.21

## 0.35.1

### Patch Changes

- browser\_\_output: fix: type
- Updated dependencies
  - rebuildjs@0.29.1

## 0.35.0

### Minor Changes

- minor:

      + browser__output:
      	+ browser__output$_
      	+ browser__output_
      + browser__cssBundle__relative_path:
      	+ browser__cssBundle__relative_path$_
      	+ browser__cssBundle__relative_path_
      + browser__cssBundle:
      	+ browser__cssBundle$_
      	+ browser__cssBundle_
      + browser__css:
      	+ browser__css$_
      	+ browser__css_

### Patch Changes

- Updated dependencies
  - rebuildjs@0.29.0

## 0.34.0

### Minor Changes

- minor:

      + circular_rmemo_T
      + circular_memo_T
      + circular_sig_T
      + circular_lock_memosig_T

### Patch Changes

- Updated dependencies
  - ctx-core@5.10.0
  - rebuildjs@0.28.0

## 0.33.4

### Patch Changes

- build: fix: exports from rebuildjs/build:

      build_id$_
      build_id_
      build_id__set
      build_id__refresh
      persist__metafile__build_id$_
      persist__metafile__build_id_
      persist__metafile__ready$_
      persist__metafile__ready_
      rebuildjs__build_id$_
      rebuildjs__build_id_
      rebuildjs__build_id__set
      rebuildjs__ready$_
      rebuildjs__ready_
      rebuildjs__ready__wait
      server__external_
      rebuildjs_plugin_

## 0.33.3

### Patch Changes

- fix: build exports:

      build_id$_
      build_id_
      build_id__set
      build_id__refresh
      persist__metafile__build_id$_
      persist__metafile__build_id_
      persist__metafile__ready$_
      persist__metafile__ready_
      rebuildjs__build_id$_
      rebuildjs__build_id_
      rebuildjs__build_id__set
      rebuildjs__ready$_
      rebuildjs__ready_
      rebuildjs__ready__wait
      server__external_
      rebuildjs_plugin_

## 0.33.2

### Patch Changes

- rebuildjs build: esbuild_cssBundle: fix: cp .map file
- Updated dependencies
  - rebuildjs@0.27.2

## 0.33.1

### Patch Changes

- elysia: ^0.8.6 -> ^0.8.8
- patch:

      browser__metafile:
      server__metafile:
      	esbuild_cssBundle:
      		fix: seperate file copied from cssBundle
      	fix: implement cancel logic

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.27.1

## 0.33.0

### Minor Changes

- minor:

      + persist__metafile__build_id:
      	+ persist__metafile__build_id$_
      	+ persist__metafile__build_id_
      + persist__metafile__build_id__ready:
      	+ persist__metafile__build_id__ready$_
      	+ persist__metafile__build_id__ready_
      rebuildjs__ready__wait: return value: rmemo__wait_ret_T<unknown>
      - RebuildjsInterrupt: use Cancel from ctx-core/function

- - RebuildInterrupt: use Cancel from ctx-core/function instead

### Patch Changes

- be*memo_pair*:
  be*sig_triple*:

      fix: jsdoc type

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.9.0
  - rebuildjs@0.27.0

## 0.32.2

### Patch Changes

- app\_\_attach: fix: remove old logic that was meant to be replaced

## 0.32.1

### Patch Changes

- RebuildjsInterrupt: fix: export type
- Updated dependencies
  - rebuildjs@0.26.1

## 0.32.0

### Minor Changes

- rmemo\_\_wait:

      always calls promise_timeout
      + .cancel(val:rmemo_val_T<_rmemo_T>)

### Patch Changes

- rebuildjs*plugin: cmd: + memo watching cancel*(): call .cancel() on promise when available
- relysjs*plugin: cmd: + memo watching cancel*(): call .cancel() on promise when available
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.8.0
  - rebuildjs@0.26.0

## 0.31.0

### Minor Changes

- rmemo\_\_wait: arguments: + error?:Error
- minor:

      + rebuildjs__build_id:
      	+ rebuildjs__build_id$_
      	+ rebuildjs__build_id_
      	+ rebuildjs__build_id__set
      + rebuildjs__ready:
      	+ rebuildjs__ready$_
      	+ rebuildjs__ready_
      	+ rebuildjs__ready__set
      + rebuildjs__ready__wait

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.7.0
  - rebuildjs@0.25.0

## 0.30.6

### Patch Changes

- minor: + RebuildjsInterrupt

  patch: rebuildjs**assets**link$: strengthen interrupt logic

- patch:

      browser__metafile__persist:
      server__metafile__persist:
      	+ mkdir recursive: true before writeFile

- patch: relysjs\_\_link$: strengthen interrupt logic
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.24.3

## 0.30.5

### Patch Changes

- relysjs_plugin: fix: + file_exists**waitfor(server_entry**output**link**path) before import

## 0.30.4

### Patch Changes

- app**attach: fix: wait for metafiles to sync: ∋ metafile**wait

## 0.30.3

### Patch Changes

- relysjs_plugin: fix: file_exists\_\_waitfor before link

## 0.30.2

### Patch Changes

- rebuildjs_plugin: assets**link$: fix: + file_exists**waitfor before link
- Updated dependencies
  - rebuildjs@0.24.2

## 0.30.1

### Patch Changes

- elysia: ^0.8.5 -> ^0.8.6
- esbuild: ^0.19.10 -> ^0.19.11
- @sinclair/typebox: ^0.32.3 -> ^0.32.4
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.24.1
  - ctx-core@5.6.1

## 0.30.0

### Minor Changes

- minor:

      exports: + ./metafile_l0
      app_ctx: assigned to globalThis.rebuildjs__app_ctx:
        fix: handle this module being bundled multiple times
      + rebuildjs_metafile_T
      	+ rebuildjs_target?:'browser'|'server'
      	+ build_id?:string
      	.outputs:
      		+ esbuild_cssBundle?:string
      		+ cssBundle_content?:string[]
      + browser__metafile__persist
      + build_id:
      	+ build_id$_
      	+ build_id_
      	+ build_id__set
      	+ build_id__refresh
      rebuildjs__plugin_→rebuildjs_plugin_
      rebuildjs__build_config_T→rebuildjs_plugin_config_T
      + metafile__build_id:
      	+ metafile__build_id$_
      	+ metafile__build_id_
      + server__metafile__persist
      + server__output__relative_path_M_middleware_ctx:
      	+ server__output__relative_path_M_middleware_ctx$_
      	+ server__output__relative_path_M_middleware_ctx_

- minor: rmemo: + be

  patch: be: arguments: fix: + config?:be_config_T<ns_T>

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.24.0
  - ctx-core@5.6.0

## 0.29.1

### Patch Changes

- html*route*: arguments: page\_: return value: { toString():string }|ReadableStream<string>

## 0.29.0

### Minor Changes

- - html*route*

## 0.28.0

### Minor Changes

- exports: + ./types

### Patch Changes

- Updated dependencies
  - rebuildjs@0.23.0

## 0.27.3

### Patch Changes

- elysia: ^0.8.3 -> ^0.8.5
- Updated dependencies
  - rebuildjs@0.22.2

## 0.27.2

### Patch Changes

- fix: export: - rebuildjs/css

## 0.27.1

### Patch Changes

- fix: text & comment occurrences of esmcss
- Updated dependencies
  - rebuildjs@0.22.1

## 0.27.0

### Minor Changes

- minor: extracted into esmcss package:

      esmcss supports:
      	esmcss_esbuild_plugin_
      	var__css__replace
      - esmcss_ebuild_plugin_
      - var__css__replace

### Patch Changes

- Updated dependencies
  - rebuildjs@0.22.0

## 0.26.0

### Minor Changes

- minor:

      + rmemo__subscribe
      + subscribe

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.5.0
  - rebuildjs@0.21.0

## 0.25.15

### Patch Changes

- @sinclair/typebox: ^0.32.1 -> ^0.32.3
- bun-types: ^1.0.19 -> ^1.0.20

## 0.25.14

### Patch Changes

- relysjs_plugin: server_entry**output**link link: fix: File or folder exists: + rm -f

## 0.25.13

### Patch Changes

- elysia: ^0.7.30 -> ^0.8.3
- Updated dependencies
  - rebuildjs@0.20.11

## 0.25.12

### Patch Changes

- rebuildjs\_\_plugin: asset lins: fix: "File or folder exists" error: rm -f before link
- relysjs_plugin: link dist/server/index.js.map: fix: "File or folder exists" error: rm -f before link
- Updated dependencies
  - rebuildjs@0.20.10

## 0.25.11

### Patch Changes

- @sinclair/typebox: ^0.32.0 -> ^0.32.1

## 0.25.10

### Patch Changes

- compression*middleware*: fix: return type

## 0.25.9

### Patch Changes

- import node:fs/promises instead of fs/promises
- Updated dependencies
  - rebuildjs@0.20.9

## 0.25.8

### Patch Changes

- fix: ∋ writeFile from 'node:fs/promises': instead of @ctx-core/monorepo
- Updated dependencies
  - rebuildjs@0.20.8

## 0.25.7

### Patch Changes

- fix: type errors
- Updated dependencies
  - rebuildjs@0.20.7

## 0.25.6

### Patch Changes

- bun-types: ^1.0.18 -> ^1.0.19

## 0.25.5

### Patch Changes

- route*ctx*: js implementation: ns: + ''
- Updated dependencies
  - rebuildjs@0.20.6

## 0.25.4

### Patch Changes

- patch:

      assets_T: required props: css_a,script_a
      assets__new: arguments: (..._assets_a:(Partial<assets_T>|undefined)[])

- Updated dependencies
  - rebuildjs@0.20.5

## 0.25.3

### Patch Changes

- assets\_\_new: arguments type: allow undefined
- Updated dependencies
  - rebuildjs@0.20.4

## 0.25.2

### Patch Changes

- request_url: fix: type: URL

## 0.25.1

### Patch Changes

- @sinclair/typebox: ^0.31.28 -> ^0.32.0

## 0.25.0

### Minor Changes

- minor:

      + request_url:
      	+ request_url$_
      	+ request_url_

## 0.24.3

### Patch Changes

- rmemo\_\_wait: fix: prevent early GC of internal memo
- Updated dependencies
  - ctx-core@5.4.1
  - rebuildjs@0.20.3

## 0.24.2

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.4.0
  - rebuildjs@0.20.2

## 0.24.1

### Patch Changes

- metafile**wait:
  server**metafile:
  browser\_\_metafile:

      wait for metafile to be written to disk: ∋ subscribe_wait

- Updated dependencies
  - rebuildjs@0.20.1

## 0.24.0

### Minor Changes

- minor:

      elysia_context$_:
      elysia_context_:
      elysia_context__set:
      request$_:
      request_:
      store$_:
      store_:
      	nx: route
      elysia_context_T: .store: Ctx<''|'app'|'middleware'|'route'>

- route_ctx,route_ctx_T: ns: + ''

### Patch Changes

- Updated dependencies
  - rebuildjs@0.20.0

## 0.23.8

### Patch Changes

- ctx-core: ^5.3.0 -> ^5.3.1
- Updated dependencies
  - rebuildjs@0.19.8

## 0.23.7

### Patch Changes

- ctx-core: ^5.2.3 -> ^5.3.0
- Updated dependencies
  - rebuildjs@0.19.7

## 0.23.6

### Patch Changes

- @ctx-core/fs: ^1.4.44 -> ^1.4.45
- Updated dependencies
  - rebuildjs@0.19.6

## 0.23.5

### Patch Changes

- rmemo: fix: imports
- Updated dependencies
  - ctx-core@5.2.3
  - rebuildjs@0.19.5

## 0.23.4

### Patch Changes

- @ctx-core/fs: ^1.4.43 -> ^1.4.44
- Updated dependencies
  - rebuildjs@0.19.4

## 0.23.3

### Patch Changes

- browser build: es2021
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.19.3
  - ctx-core@5.2.2

## 0.23.2

### Patch Changes

- ctx-core: ^5.2.0 -> ^5.2.1
- Updated dependencies
  - @ctx-core/fs@1.4.43
  - rebuildjs@0.19.2

## 0.23.1

### Patch Changes

- ctx-core: ^5.1.0 -> ^5.2.0
- Updated dependencies
  - @ctx-core/fs@1.4.42
  - rebuildjs@0.19.1

## 0.23.0

### Minor Changes

- minor:

      + ctx__clear
      + ondelete_be_
      + ondelete_be__val__new_T

### Patch Changes

- Updated dependencies
  - rebuildjs@0.19.0

## 0.22.6

### Patch Changes

- tsx: ^4.6.2 -> ^4.7.0
- @ctx-core/fs: ^1.4.39 -> ^1.4.40
- ctx-core: ^5.0.2 -> ^5.1.0
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/fs@1.4.41
  - rebuildjs@0.18.6

## 0.22.5

### Patch Changes

- @ctx-core/fs: ^1.4.38 -> ^1.4.39
- Updated dependencies
  - rebuildjs@0.18.5

## 0.22.4

### Patch Changes

- ctx-core: ^5.0.1 -> ^5.0.2
- Updated dependencies
  - rebuildjs@0.18.4

## 0.22.3

### Patch Changes

- @ctx-core/fs: ^1.4.37 -> ^1.4.38
- Updated dependencies
  - rebuildjs@0.18.3

## 0.22.2

### Patch Changes

- ctx-core: ^5.0.0 -> ^5.0.1
- Updated dependencies
  - rebuildjs@0.18.2

## 0.22.1

### Patch Changes

- esbuild: ^0.19.9 -> ^0.19.10
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.18.1
  - @ctx-core/fs@1.4.37

## 0.22.0

### Minor Changes

- minor: + Ctx ns (namespace):

      be_:
      Be:
      be_o_T:
      be_config_T
      Ctx:
      	generics: + ns_T
      	+ ns:ns_T
      	- is_source_
      be__has_:
      be_map__find:
      be__val_:
      be_lock_memosig_triple_:
      be_lock_memosig_triple_T:
      be_memo_pair_:
      be_memo_pair_T:
      be_memosig_triple_:
      be_memosig_triple_T:
      be_sig_triple_:
      be_sig_triple_T:
      	generics: + ns_T
      be: generics:
      	+ ns_T
      	+ ctx_T
      ctx__set:
      ctx__delete:
      	generics:
      		+ ns_T
      		+ ctx_T
      	arguments: + ns?:string
      ctx__new:
      ctx_:
      	returns Ctx<''>
      + BeMap
      + BeMapO
      + Ctx_wide_T
      + Ctx_s_T
      + Ctx_s_wide_T
      + ctx__be_T
      + ctx__get_T
      + ctx__set_T
      + ns_ctx__new
      rmemo: bundle size optimizations: .includes instead of .indexOf
      exports: + ./test
      + Expect
      + Equal
      TupleExclude: fix: type error
      + TupleMemberExtends
      + TupleValues
      + TupleConcat
      + TupleToUnion
      - be___T
      - be__return_T

  size-limit:

      memo_: - 4 B
      memo_ sig_: - 5 B
      memo_ sig_ be_ ctx_: - 34 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 35 B

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.18.0
  - ctx-core@5.0.0

## 0.21.0

### Minor Changes

- - assets\_

### Patch Changes

- Updated dependencies
  - rebuildjs@0.17.0

## 0.20.1

### Patch Changes

- static*middleware\_\_config_T: headers*: optional

## 0.20.0

### Minor Changes

- minor:

      static_middleware_: + config?:static_middleware__config_T
      	+ headers_(url_path:string, content_type:string, path:string)=>Record<string, string>
      static_middleware__config_T

## 0.19.0

### Minor Changes

- - var**css**replace

### Patch Changes

- Updated dependencies
  - rebuildjs@0.16.0

## 0.18.1

### Patch Changes

- asset*path_a*: fix: type
- Updated dependencies
  - rebuildjs@0.15.1

## 0.18.0

### Minor Changes

- - asset*path_a*

### Patch Changes

- Updated dependencies
  - rebuildjs@0.15.0

## 0.17.0

### Minor Changes

- - metafile\_\_wait

### Patch Changes

- Updated dependencies
  - rebuildjs@0.14.0

## 0.16.2

### Patch Changes

- @ctx-core/fs: ^1.4.35 -> ^1.4.36
- Updated dependencies
  - rebuildjs@0.13.2

## 0.16.1

### Patch Changes

- Updated dependencies
  - rebuildjs@0.13.1

## 0.16.0

### Minor Changes

- minor:

      + static_middleware_
      app__attach: no longer automatically attaching staticPlugin: must use a static middleware such as the provided static_middleware_
      - ∋ @elysiajs/static

### Patch Changes

- Updated dependencies
  - ctx-core@4.19.0

## 0.15.0

### Minor Changes

- - cssjs*esbuild_plugin*

### Patch Changes

- Updated dependencies
  - rebuildjs@0.13.0

## 0.14.0

### Minor Changes

- - asset*path*

### Patch Changes

- Updated dependencies
  - rebuildjs@0.12.0

## 0.13.4

### Patch Changes

- server\_\_css: fix: path
- Updated dependencies
  - rebuildjs@0.11.3

## 0.13.3

### Patch Changes

- server\_\_css: fix: path

## 0.13.2

### Patch Changes

- browser**output**relative_path: fix: lookup:

      fixes downstream browser__script

- Updated dependencies
  - rebuildjs@0.11.2

## 0.13.1

### Patch Changes

- app\_\_attach: fix: route middleware import conditional
- Updated dependencies
  - rebuildjs@0.11.1

## 0.13.0

### Minor Changes

- - minor:

    rebuildjs\*\*plugin\_:

    - link all non .js,.mjs,.js.map,.mjs.map server outputs to browser
    - public\*\*cp: going to rely on asset file imports using esbuild
    - server\_\_input_path:
      - server\__input_path$_
      - server\__input_path_
      - server**input_path**set

    * server**output**relative_path\_\_set

    - browser\_\_input_path:
      - browser\__input_path$_
      - browser\__input_path_

### Patch Changes

- Updated dependencies
  - rebuildjs@0.11.0

## 0.12.1

### Patch Changes

- rebuildjs\__plugin_: fix: link cssBundle map file
- Updated dependencies
  - rebuildjs@0.10.4

## 0.12.0

### Minor Changes

- minor: add compression middleware:

      + compression_middleware_
      + compression_middleware_config_T

## 0.11.2

### Patch Changes

- app**attach: fix: double start server issue by guarding middleware against server_entry**relative*path*(app_ctx)

## 0.11.1

### Patch Changes

- app**start: ensure that app**attach is called on optional app argument

## 0.11.0

### Minor Changes

- patch:

      adds opportunity to add middleware:
      	app__start: takes an optional app:Elysia argument
      	app__new→app__attach: tkes an optional app:Elysia argument

## 0.10.3

### Patch Changes

- browser\_\_relative_path: !is_prod: fix: path
- Updated dependencies
  - rebuildjs@0.10.3

## 0.10.2

### Patch Changes

- patch:

      browser__build: fix: omits config.relysjs before calling browser__build in rebuildjs: config:relysjs__build_config_T
      relysjs__server__build_config_T→relysjs__build_config_T

- patch:

      fix: watch config logic:
      	browser__build
      	server__build

- Updated dependencies
  - rebuildjs@0.10.2

## 0.10.1

### Patch Changes

- rebuildjs**build_config_T: fix: &{ rebuildjs?: rebuildjs**plugin_config_T }
- Updated dependencies
  - rebuildjs@0.10.1

## 0.10.0

### Minor Changes

- minor:

      + rebuildjs__build_config_T
      + relysjs__plugin_config_T
      arguments: config: &rebuildjs__build_config_T:
      	browser__build
      	server__build
      rebuildjs_plugin_→rebuildjs__plugin_
      rebuildjs__plugin_: arguments: config.rebuildjs: watch options:
        defaults to true when is_prod
        defaults to false when not is_prod

### Patch Changes

- Updated dependencies
  - rebuildjs@0.10.0

## 0.9.4

### Patch Changes

- relysjs*plugin*: fix: get server entry module .default function

## 0.9.3

### Patch Changes

- relysjs*plugin*: link server entry link map file

## 0.9.2

### Patch Changes

- app\_\_relative_path: fix: value
- Updated dependencies
  - rebuildjs@0.9.2

## 0.9.1

### Patch Changes

- fix: rmemo id:

      app_path
      browser__relative_path

- - server_entry_path:

    - server*entry_path$*
    - server*entry_path*

- add rmemos:

      + src__relative_path:
      	+ src__relative_path$_
      	+ src__relative_path_
      + app__relative_path:
      	+ app__relative_path$_
      	+ app__relative_path_

- server_entry\_\_relative_path: fix: value
- fix: rmemo names:

      browser_relative_path→browser__relative_path
      server_relative_path→server__relative_path

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.9.1

## 0.9.0

### Minor Changes

- minor:

      browser__output_path→browser__output__relative_path:
      	browser__output_path$_→browser__output__relative_path$_
      	browser__output_path_→browser__output__relative_path_
      server__output_path→server__output__relative_path:
      	server__output_path$_→server__output__relative_path$_
      	server__output_path_→server__output__relative_path_

- minor:

      +  server_entry__relative_path:
      	+ server_entry__relative_path$_
      	+ server_entry__relative_path_
      + server_entry__output__relative_path:
      	+ server_entry__output__relative_path$_
      	+ server_entry__output__relative_path_
      + server_entry__output__path:
      	+ server_entry__output__path$_
      	+ server_entry__output__path_
      + server_entry__output__link__path:
      	+ server_entry__output__link__path$_
      	+ server_entry__output__link__path_

### Patch Changes

- relysjs*plugin*: fix: import server entry file
- fix: type declarations: server_entry_path

      server_entry_path$_
      server_entry_path_

- Updated dependencies
  - rebuildjs@0.9.0

## 0.8.1

### Patch Changes

- @ctx-core/fs: ^1.4.34 -> ^1.4.35
- Updated dependencies
  - rebuildjs@0.8.1

## 0.8.0

### Minor Changes

- - server_entry_path:

    - server*entry_path$*
    - server*entry_path*

- relysjs*plugin*: imports server_entry_path & runs default function
- - server\__external_

### Patch Changes

- entryPoints: fix: always include route files:

      browser__build
      server__build

- fix: rmemo id: app
- fix: load server & browser metafile.json
- rmemo_T: fix: + |lock_memosig_T<val_T>
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.8.0
  - ctx-core@4.18.0

## 0.7.0

### Minor Changes

- minor:

      if metafile.json does not exist: ._ = is not called: remove setting null value:
      	browser__metafile$_
      	server__metafile$_
      + browser__metafile_path:
      	+ browser__metafile_path$_
      	+ browser__metafile_path_
      + server__metafile_path:
      	+ server__metafile_path$_
      	+ server__metafile_path_

### Patch Changes

- Updated dependencies
  - rebuildjs@0.7.0

## 0.6.0

### Minor Changes

- browser**metafile,server**metafile: initial load of metafile.json: if metafile.json does not exist: .\_ = null

### Patch Changes

- Updated dependencies
  - rebuildjs@0.6.0

## 0.5.1

### Patch Changes

- Updated dependencies
  - rebuildjs@0.5.1

## 0.5.0

### Minor Changes

- - app\_\_start
- - relysjs**server**build_config_T
- relysjs*plugin*: arguments: config?:relysjs_plugin_config_T
- server**build: arguments: config?:relysjs**server\_\_build_config_T
- lock*memosig*: \_=: sets .lock = 1 to prevent the memo_def from running
- relysjs*plugin*: automatic app**start can be deactivated with app**start: false configuration
- - relysjs_plugin_config_T

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.5.0
  - ctx-core@4.17.0

## 0.4.1

### Patch Changes

- ctx-core: ^4.15.0 -> ^4.16.0
- Updated dependencies
  - rebuildjs@0.4.1

## 0.4.0

### Minor Changes

- minor:

      + browser_relative_path
      	+ browser_relative_path$_
      	+ browser_relative_path_
      + server_relative_path
      	+ server_relative_path$_
      	+ server_relative_path_

### Patch Changes

- browser\_\_script: replace logic: fix: browser_relative_path instead of hard coded dist/dev-browser
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.4.0

## 0.3.6

### Patch Changes

- fix: import app\_\_new
- ∋ esbuild
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.3.3

## 0.3.5

### Patch Changes

- patch:

      package.json:
      	files: fix:
      		./elysiajs
      		- ./relysjs_plugin
      	dependencies: ∋ @elysiajs/static
      app__new: move from ./build to ./app

## 0.3.4

### Patch Changes

- Updated dependencies
  - rebuildjs@0.3.2

## 0.3.3

### Patch Changes

- ctx-core: ^4.14.1 -> ^4.15.0
- Updated dependencies
  - rebuildjs@0.3.1

## 0.3.2

### Patch Changes

- app**new: fix: + declare function app**new

## 0.3.1

### Patch Changes

- merge ./relysjs_plugin into ./build

## 0.3.0

### Minor Changes

- relysjs*rebuild*→relysjs*plugin*

### Patch Changes

- Updated dependencies
  - rebuildjs@0.3.0

## 0.2.0

### Minor Changes

- relysjs*plugin*→relysjs*rebuild*

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.2.0

## 0.1.3

### Patch Changes

- fix: package directories:

      ./elysia→./elysiajs

## 0.1.2

### Patch Changes

- Updated dependencies
  - rebuildjs@0.1.2

## 0.1.1

### Patch Changes

- Updated dependencies
  - rebuildjs@0.1.1

## 0.1.0

### Minor Changes

- minor: initial version:

      + dev server
      + production server
      + ctx-core/be
      + ctx-core/rmemo
      + rebuildjs
      + app:
      	+ app$_
      	+ app_
      	+ app__set
      + elysia_context:
      	+ elysia_context$_
      	+ elysia_context_
      	+ elysia_context__set
      + request:
      	+ request$_
      	+ request_
      + store:
      	+ store$_
      	+ store_
      + elysia_context_T
      + relysjs_plugin_

### Patch Changes

- Updated dependencies
  - rebuildjs@0.1.0
