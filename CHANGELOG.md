# relysjs

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
