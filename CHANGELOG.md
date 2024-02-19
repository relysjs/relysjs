# relysjs

## 1.14.5

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.63.2

## 1.14.4

### Patch Changes

- esbuild: ^0.20.0 -> ^0.20.1
- Updated dependencies
  - ctx-core@6.4.3
  - rebuildjs@0.63.1

## 1.14.3

### Patch Changes

- bun-types: ^1.0.26 -> ^1.0.27

## 1.14.2

### Patch Changes

- ./: fix: export error

## 1.14.1

### Patch Changes

- fix: import error

## 1.14.0

### Minor Changes

- - ./any: use esbuild config publicPath instead:

    - asset*path*
    - asset*path_a*

  ./server: default config: + publicPath: /: overridable:

      rebuildjs_browser__build
      rebuildjs_server__build

### Patch Changes

- Updated dependencies
  - rebuildjs@0.63.0

## 1.13.2

### Patch Changes

- ctx-core: ^6.4.1 -> ^6.4.2
- Updated dependencies
  - rebuildjs@0.62.2

## 1.13.1

### Patch Changes

- ctx-core: ^6.3.0 -> ^6.4.0
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.62.1
  - ctx-core@6.4.1

## 1.13.0

### Minor Changes

- - rmemolike_T

  rmemo\_\_wait: argument: rmemolike_T<unknown> instead of rmemo_T<unknown>

### Patch Changes

- Updated dependencies
  - ctx-core@6.3.0
  - rebuildjs@0.62.0

## 1.12.2

### Patch Changes

- ctx-core: ^6.2.1 -> ^6.2.2
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.61.2
  - ctx-core@6.2.3

## 1.12.1

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.61.1
  - ctx-core@6.2.1

## 1.12.0

### Minor Changes

- timeout_promise: + handle Infinity ms argument: remove timeout from ∋ Promise.race

### Patch Changes

- persist**metafile**build_id: fix: crash due to async error:

      build_id__match__waitfor: ∋ file_exists__waitfor: Infinity ms

- Updated dependencies
- Updated dependencies
  - ctx-core@6.2.0
  - rebuildjs@0.61.0

## 1.11.8

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.60.6

## 1.11.7

### Patch Changes

- elysia: ^0.8.16 -> ^0.8.17
- Updated dependencies
  - rebuildjs@0.60.5

## 1.11.6

### Patch Changes

- ctx-core: ^6.1.2 -> ^6.1.3
- Updated dependencies
  - rebuildjs@0.60.4

## 1.11.5

### Patch Changes

- ./server: rebuildjs*plugin*: rebuildjs*plugin\_\_postprocess$*: rebuildjs**assets**link: fix: long timeout

## 1.11.4

### Patch Changes

- ./server: rebuildjs*plugin*: rebuildjs*plugin\_\_postprocess$*: rebuildjs**assets**link:

      file_exists__waitfor: Infinity timeout

- Updated dependencies
  - rebuildjs@0.60.3

## 1.11.3

### Patch Changes

- @sinclair/typebox: ^0.32.13 -> ^0.32.14

## 1.11.2

### Patch Changes

- tsx: ^4.7.0 -> ^4.7.1
- Updated dependencies
  - ctx-core@6.1.2
  - rebuildjs@0.60.2

## 1.11.1

### Patch Changes

- ctx-core: ^6.1.0 -> ^6.1.1
- Updated dependencies
  - rebuildjs@0.60.1

## 1.11.0

### Minor Changes

- wide_ctx_T<ns_union_T extends string = ''>: default ns_union_T to ''

### Patch Changes

- Updated dependencies
  - ctx-core@6.1.0
  - rebuildjs@0.60.0

## 1.10.0

### Minor Changes

- minor:

      app_wide_ctx_T→wide_app_ctx_T
      middleware_wide_ctx_T→wide_middleware_ctx_T
      request_wide_ctx_T→wide_request_ctx_T

### Patch Changes

- Updated dependencies
  - rebuildjs@0.59.0

## 1.9.0

### Minor Changes

- minor:

      app_ctx_wide_T→app_wide_ctx_T
      middleware_ctx_wide_T→middleware_wide_ctx_T
      request_ctx_wide_T→request_wide_ctx_T

### Patch Changes

- Updated dependencies
  - rebuildjs@0.58.0

## 1.8.0

### Minor Changes

- type rename:

      Ctx→ctx_T
      Ctx_wide_T→wide_ctx_T
      Ctx_s_T→ctx_s_T
      Ctx_s_wide_T→wide_ctx_s_T

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.57.0
  - ctx-core@6.0.0

## 1.7.3

### Patch Changes

- ctx-core: ^5.38.1 -> ^5.38.2
- Updated dependencies
  - rebuildjs@0.56.3

## 1.7.2

### Patch Changes

- Updated dependencies
  - rebuildjs@0.56.2

## 1.7.1

### Patch Changes

- rebuildjs_server\_\_build: fix: intermittent ENOENT:

      + mkdir(server_path_(app_ctx), { recursive: true }): immediately after rm(server_path_(app_ctx), { recursive: true, force: true })

- Updated dependencies
  - rebuildjs@0.56.1

## 1.7.0

### Minor Changes

- minor: fix: support copying .map.css for @rebuildjs/tailwindcss:

      + rebuildjs__esbuild__build_id:
      	+ rebuildjs__esbuild__build_id$_
      	+ rebuildjs__esbuild__build_id_
      	+ rebuildjs__esbuild__build_id__set
      rebuildjs_core__ready→rebuildjs__esbuild__done:
      	rebuildjs_core__ready$_→rebuildjs__esbuild__done$_
      	rebuildjs_core__ready_→rebuildjs__esbuild__done_
      rebuildjs_core__ready__wait→rebuildjs__esbuild__done__wait
      rebuildjs__ready__add__ready__a1→rebuildjs__ready__add__ready$__a1:
      	rebuildjs__ready__add__ready__a1$_→rebuildjs__ready__add__ready$__a1$_
      	rebuildjs__ready__add__ready__a1_→rebuildjs__ready__add__ready$__a1_
      	rebuildjs__ready__add__ready__a1__set→rebuildjs__ready__add__ready$__a1__set
      rebuildjs__ready__add(ready$_:rebuildjs__ready__add__ready$__T) instead of ready_:rebuildjs__ready__add__ready__T
      rebuildjs__ready__add__ready__T→rebuildjs__ready__add__ready$__T: ctx__be_T<rmemo_T<boolean>, 'app'>
      rebuildjs_plugin__build_id→rebuildjs__esbuild__build_id:
      	rebuildjs__build_id$_→rebuildjs__esbuild__build_id$_
      	rebuildjs__build_id_→rebuildjs__esbuild__build_id_
      	rebuildjs__build_id__set→rebuildjs__esbuild__build_id__set
      rebuildjs_core__ready→rebuildjs__esbuild__done:
      	rebuildjs_core__ready$_→rebuildjs__esbuild__done$_
      	rebuildjs_core__ready_→rebuildjs__esbuild__done_
      rebuildjs_core__ready__wait→rebuildjs__esbuild__done__wait
      Uc→rebuildjs__ready__add__ready__a1:
      	rebuildjs__ready__add__ready__a1$_→rebuildjs__ready__add__ready$__a1$_
      	rebuildjs__ready__add__ready__a1_→rebuildjs__ready__add__ready$__a1_
      	rebuildjs__ready__add__ready__a1__set→rebuildjs__ready__add__ready$__a1__set
      + rebuildjs__build_id:
      	+ rebuildjs__build_id$_
      	+ rebuildjs__build_id_
      	+ rebuildjs__build_id__set
      rebuildjs_plugin_: ∋ rebuildjs__esbuild__build_id__set

### Patch Changes

- patch:

      relysjs_plugin_: ∋ rebuildjs_core__ready_→rebuildjs__esbuild__done_

- Updated dependencies
  - rebuildjs@0.56.0

## 1.6.4

### Patch Changes

- elysia: ^0.8.15 -> ^0.8.16
- Updated dependencies
  - rebuildjs@0.55.2

## 1.6.3

### Patch Changes

- optimize imports

## 1.6.2

### Patch Changes

- ./server: relysjs*plugin*: relysjs**link$\_: app**start: fix: start the stall_app before stopping the previous app

## 1.6.1

### Patch Changes

- ./server: relysjs*plugin*: relysjs\__link$_: stall_app is stopped in a finally block

## 1.6.0

### Minor Changes

- relysjs*plugin*: relysjs\__link$_: - prebuild hook: + stall_app:

      fix: response glitches during rebuild:
      + stall_app: handle requests that originate before the app is started

  previous release should have been a minor release

## 1.5.3

### Patch Changes

- relysjs*plugin*: relysjs\__link$_: - prebuild hook: + stall_app:

      fix: response glitches during rebuild:
      + stall_app: handle requests that originate before the app is started

## 1.5.2

### Patch Changes

- bun-types: ^1.0.25 -> ^1.0.26

## 1.5.1

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.55.1

## 1.5.0

### Minor Changes

- minor: dev environments: on rebuild: immediately start server & hang request until build is complete:

      app entry file api updates: src/app/index.ts:
      	+ prebuild
      	default: returns Elysia middleware

### Patch Changes

- Updated dependencies
  - ctx-core@5.38.1

## 1.4.0

### Minor Changes

- - calling: calls & returns argument function

### Patch Changes

- Updated dependencies
  - ctx-core@5.38.0
  - rebuildjs@0.55.0

## 1.3.1

### Patch Changes

- rebuildjs*plugin*: rebuildjs*plugin\_\_postprocess$*: rebuildjs**assets**link:

      link asset *.map files into browser directory:
      	not *.js.map & *.mjs.map
      wait for linked files to exist on the file system

- Updated dependencies
  - rebuildjs@0.54.1

## 1.3.0

### Minor Changes

- minor: rebuildjs**ready**wait: enable rebuildjs plugins to complete by using rebuildjs**ready**add:

      + rebuildjs_core__ready:
      	+ rebuildjs_core__ready$_
      	+ rebuildjs_core__ready_
      + rebuildjs_core__ready__wait
      + rebuildjs__ready__add__ready__a1:
      	+ rebuildjs__ready__add__ready__a1$_
      	+ rebuildjs__ready__add__ready__a1_
      	+ rebuildjs__ready__add__ready__a1__set
      + rebuildjs__ready__add
      + rebuildjs__ready__add__ready__T

### Patch Changes

- ./server: relysjs*plugin*: ∋ rebuild*core\_\_ready*
- Updated dependencies
  - rebuildjs@0.54.0

## 1.2.0

### Minor Changes

- minor:

      - relysjs__ready: use relysjs__ready__wait

## 1.1.0

### Minor Changes

- minor:

      ./server:
      	+ cssBundle__annotate
      	+ server__metafile__update
      	+ browser__metafile__update
      	rebuildjs_plugin_: support plugins changing cssBundle: e.g. @rebuildjs/tailwindcss:
      		don't overwrite esbuild_cssBundle.css,esbuild_cssBundle.css.map when the files already exist

- minor:

      state is stored in globalThis.rmemo: fix: issue when multiple instances of rmemo is in the codebase: bundles
      rmemo__wait: fix: Garbage Collection prematurely collecting memo
      rmemo_f_T:
      	readonly l:number
      	readonly s:rmemo_T<unknown>[]
      	readonly t:rmemo_T<unknown>[]

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.37.0
  - rebuildjs@0.53.0

## 1.0.3

### Patch Changes

- ctx-core: ^5.36.3 -> ^5.36.4
- Updated dependencies
  - rebuildjs@0.52.9

## 1.0.2

### Patch Changes

- ctx-core: ^5.36.2 -> ^5.36.3
- Updated dependencies
  - rebuildjs@0.52.8

## 1.0.1

### Patch Changes

- ctx-core: ^5.36.1 -> ^5.36.2
- Updated dependencies
  - rebuildjs@0.52.7

## 1.0.0

### Major Changes

- html_response\_\_new: fix: utf-8 text

## 0.62.6

### Patch Changes

- ctx-core: ^5.36.0 -> ^5.36.1
- Updated dependencies
  - rebuildjs@0.52.6

## 0.62.5

### Patch Changes

- format + optimize imports
- Updated dependencies
  - rebuildjs@0.52.5

## 0.62.4

### Patch Changes

- ctx-core: ^5.35.2 -> ^5.36.0
- Updated dependencies
  - rebuildjs@0.52.4

## 0.62.3

### Patch Changes

- ctx-core: ^5.35.1 -> ^5.35.2
- Updated dependencies
  - rebuildjs@0.52.3

## 0.62.2

### Patch Changes

- elysia: ^0.8.14 -> ^0.8.15
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.52.2

## 0.62.1

### Patch Changes

- ctx-core: ^5.35.0 -> ^5.35.1
- Updated dependencies
  - rebuildjs@0.52.1

## 0.62.0

### Minor Changes

- - ctx\_\_get

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.35.0
  - rebuildjs@0.52.0

## 0.61.2

### Patch Changes

- ctx-core: ^5.33.0 -> ^5.34.0
- Updated dependencies
  - rebuildjs@0.51.1

## 0.61.1

### Patch Changes

- relysjs\_\_ready: fix: implementation

## 0.61.0

### Minor Changes

- - relysjs\_\_ready

## 0.60.0

### Minor Changes

- Cancel: name: 'Cancel'
- - promise\_\_cancel

### Patch Changes

- fix: intermittent unhandled ENOENT error
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.33.0
  - rebuildjs@0.51.0

## 0.59.3

### Patch Changes

- ctx-core: ^5.32.0 -> ^5.32.1
- Updated dependencies
  - rebuildjs@0.50.3

## 0.59.2

### Patch Changes

- ctx-core: ^5.31.2 -> ^5.32.0
- Updated dependencies
  - rebuildjs@0.50.2

## 0.59.1

### Patch Changes

- esbuild: ^0.19.12 -> ^0.20.0
- Updated dependencies
  - ctx-core@5.31.2
  - rebuildjs@0.50.1

## 0.59.0

### Minor Changes

- minor:

      request_ctx__ensure: fix: fresh request_ctx for each request
      ns:'route'→'request'
      route_ctx→request_ctx
      route_ctx__new→request_ctx__new
      route_ctx__ensure→request_ctx__ensure
      has_route_T→has_request_T

### Patch Changes

- Updated dependencies
  - rebuildjs@0.50.0

## 0.58.1

### Patch Changes

- be\_: argument type: ...config→...config_arg_a
- Updated dependencies
  - ctx-core@5.31.1
  - rebuildjs@0.49.1

## 0.58.0

### Minor Changes

- rmemo\_\_unset: delete rmemo.val

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.49.0
  - ctx-core@5.31.0

## 0.57.2

### Patch Changes

- elysia: ^0.8.10 -> ^0.8.14
- Updated dependencies
  - rebuildjs@0.48.1

## 0.57.1

### Patch Changes

- @sinclair/typebox: ^0.32.12 -> ^0.32.13

## 0.57.0

### Minor Changes

- - memo\_\_bind_T<A extends unknown[], R, E = unknown>

### Patch Changes

- Updated dependencies
  - ctx-core@5.30.0
  - rebuildjs@0.48.0

## 0.56.3

### Patch Changes

- ctx-core: ^5.28.1 -> ^5.29.0
- Updated dependencies
  - rebuildjs@0.47.3

## 0.56.2

### Patch Changes

- elysia: ^0.8.9 -> ^0.8.10
- Updated dependencies
  - rebuildjs@0.47.2

## 0.56.1

### Patch Changes

- Updated dependencies
  - ctx-core@5.28.1
  - rebuildjs@0.47.1

## 0.56.0

### Minor Changes

- - run*or_val*

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.28.0
  - rebuildjs@0.47.0

## 0.55.7

### Patch Changes

- ctx-core: ^5.27.1 -> ^5.27.2
- Updated dependencies
  - rebuildjs@0.46.6

## 0.55.6

### Patch Changes

- esbuild: ^0.19.11 -> ^0.19.12
- Updated dependencies
  - ctx-core@5.27.1
  - rebuildjs@0.46.5

## 0.55.5

### Patch Changes

- ctx-core: ^5.26.0 -> ^5.27.0
- Updated dependencies
  - rebuildjs@0.46.4

## 0.55.4

### Patch Changes

- ctx-core: ^5.25.5 -> ^5.26.0
- Updated dependencies
  - rebuildjs@0.46.3

## 0.55.3

### Patch Changes

- ctx-core: ^5.25.4 -> ^5.25.5
- Updated dependencies
  - rebuildjs@0.46.2

## 0.55.2

### Patch Changes

- ctx-core: ^5.25.3 -> ^5.25.4
- Updated dependencies
  - rebuildjs@0.46.1

## 0.55.1

### Patch Changes

- {compression*middleware*: fix: use http status code of the originating response

## 0.55.0

### Minor Changes

- minor: request_ctx\_\_ensure: arguments:

      middleware_ctx:middleware_ctx_T
      context:{
      	request:Request
      	store:{ [x:string]:unknown }
      }

## 0.54.0

### Minor Changes

- ./file_types→./types

### Patch Changes

- Updated dependencies
  - rebuildjs@0.46.0

## 0.53.0

### Minor Changes

- minor:

      ./server:
      	+ default_loader
      	rebuildjs_browser__build: loader: default_loader
      	rebuildjs_server__build: loader: default_loader
      + ./browser: export ./any

### Patch Changes

- Updated dependencies
  - rebuildjs@0.45.0

## 0.52.2

### Patch Changes

- ./server export: fix: export ./any
- Updated dependencies
  - rebuildjs@0.44.2

## 0.52.1

### Patch Changes

- ./file_types: declarations only: not a module
- Updated dependencies
  - rebuildjs@0.44.1

## 0.52.0

### Minor Changes

- import from 'relysjs': alias to import from 'relysjs/any'

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.44.0

## 0.51.1

### Patch Changes

- relysjs/server: types: fix: import

## 0.51.0

### Minor Changes

- minor:

      browser__build→relysjs_browser__build
      server__build→relysjs_server__build

- minor:

      exports: environment specific modules:
        any
        server
        types
      browser__build→rebuild_browser__build
      server__build→rebuild_server__build

### Patch Changes

- Updated dependencies
  - rebuildjs@0.43.0

## 0.50.0

### Minor Changes

- browser\_\_build: target: es2022

### Patch Changes

- Updated dependencies
  - rebuildjs@0.42.0

## 0.49.4

### Patch Changes

- bun-types: ^1.0.23 -> ^1.0.25
- @sinclair/typebox: ^0.32.10 -> ^0.32.12

## 0.49.3

### Patch Changes

- memo_T: fix: readonly a?:rmemo_a_T
- Updated dependencies
  - ctx-core@5.25.3
  - rebuildjs@0.41.3

## 0.49.2

### Patch Changes

- val\_\_new: + rmemo argument:

      be_sig_triple_
      ns_be_sig_triple_
      id_be_sig_triple_
      ns_id_be_sig_triple_
      ns_be_memo_pair_
      id_be_memo_pair_
      ns_id_be_memo_pair_
      ns_be_memosig_triple_
      id_be_memosig_triple_
      ns_id_be_memosig_triple_
      ns_be_lock_memosig_triple_
      id_be_lock_memosig_triple_
      ns_id_be_lock_memosig_triple_

- Updated dependencies
  - ctx-core@5.25.2
  - rebuildjs@0.41.2

## 0.49.1

### Patch Changes

- generics: ns_T extends string: remove default:

      ns_be_sig_triple_
      ns_id_be_sig_triple_
      ns_be_memo_pair_
      ns_id_be_memo_pair_
      ns_be_memosig_triple_
      ns_id_be_memosig_triple_
      ns_be_lock_memosig_triple_
      ns_id_be_lock_memosig_triple_

- Updated dependencies
  - ctx-core@5.25.1
  - rebuildjs@0.41.1

## 0.49.0

### Minor Changes

- - be_config_arg_a_T
- minor:

      + ns_be_sig_triple_
      + id_be_sig_triple_
      + ns_id_be_sig_triple_
      + ns_be_memo_pair_
      + id_be_memo_pair_
      + ns_id_be_memo_pair_
      + ns_be_memosig_triple_
      + id_be_memosig_triple_
      + ns_id_be_memosig_triple_
      + ns_be_lock_memosig_triple_
      + id_be_lock_memosig_triple_
      + ns_id_be_lock_memosig_triple_

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.25.0
  - rebuildjs@0.41.0

## 0.48.0

### Minor Changes

- minor:

      + ns_be_
      + id_be_
      + ns_id_be_
      be_: ns_T generic type specified: config:be_config_T is required
      be_memo_pair_: config?:be_config_T<ns_T> argument: fix: generic type

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.40.0
  - ctx-core@5.24.0

## 0.47.0

### Minor Changes

- minor:

      generics: + E = unknown:
      	memo_
      	sig_
      	memosig_
      	lock_memosig_
      	memo__bind
      	rmemo__on
      	rmemo__off
      	rmemo__off__add
      	rmemo__add
      	rmemo_T
      	circular_rmemo_T
      	memo_T
      	circular_memo_T
      	sig_T
      	circular_sig_T
      	lock_memosig_T
      	circular_lock_memosig_T
      	memo_def_T
      	rmemo_add_def_T
      be_lock_memosig_triple_:
      be_lock_memosig_triple_T:
      	generics: E = unknown instead of _sig_T extends lock_memosig_T<val_T> = lock_memosig_T<val_T>
      be_memo_pair_:
      be_memo_pair_T:
      	generics: E = unknown instead of _memo_T extends memo_T<val_T> = memo_T<val_T>
      be_sig_triple_:
      be_sig_triple_T:
      be_memosig_triple_:
      be_memosig_triple_T:
      	generics: E = unknown instead of _sig_T extends sig_T<val_T> = sig_T<val_T>

### Patch Changes

- Updated dependencies
  - ctx-core@5.23.0
  - rebuildjs@0.39.0

## 0.46.2

### Patch Changes

- fix: type errors:

      be_lock_memosig_triple
      be_memo_pair
      be_memosig_triple
      be_sig_triple

- Updated dependencies
  - ctx-core@5.22.1
  - rebuildjs@0.38.1

## 0.46.1

### Patch Changes

- @sinclair/typebox: ^0.32.9 -> ^0.32.10

## 0.46.0

### Minor Changes

- minor: make type generics more ergonomic:

      ctx__be_T: <be_val_T, ns_T extends string = '', ctx_T extends Ctx = Ctx_wide_T<ns_T>>
      ctx__get_T: <val_T, ns_T extends string = '', ctx_T extends Ctx = Ctx_wide_T<ns_T>>
      ctx__set_T: <val_T, ns_T extends string = '', ctx_T extends Ctx = Ctx_wide_T<ns_T>>

### Patch Changes

- Updated dependencies
  - ctx-core@5.22.0
  - rebuildjs@0.38.0

## 0.45.5

### Patch Changes

- ctx-core: ^5.20.0 -> ^5.21.0
- Updated dependencies
  - rebuildjs@0.37.13

## 0.45.4

### Patch Changes

- ctx-core: ^5.19.2 -> ^5.20.0
- Updated dependencies
  - rebuildjs@0.37.12

## 0.45.3

### Patch Changes

- ctx-core: ^5.19.1 -> ^5.19.2
- Updated dependencies
  - rebuildjs@0.37.11

## 0.45.2

### Patch Changes

- ctx-core: ^5.19.0 -> ^5.19.1
- Updated dependencies
  - rebuildjs@0.37.10

## 0.45.1

### Patch Changes

- html*response*→html_response\_\_new

## 0.45.0

### Minor Changes

- - html*response*

## 0.44.11

### Patch Changes

- bun-types: ^1.0.22 -> ^1.0.23

## 0.44.10

### Patch Changes

- browser**build,server**build: fix: dist directory is external to esbuild
- Updated dependencies
  - rebuildjs@0.37.9

## 0.44.9

### Patch Changes

- ctx-core: ^5.18.9 -> ^5.19.0
- Updated dependencies
  - rebuildjs@0.37.8

## 0.44.8

### Patch Changes

- ctx-core: ^5.18.8 -> ^5.18.9
- Updated dependencies
  - rebuildjs@0.37.7

## 0.44.7

### Patch Changes

- import nodejs core modules using node: prefix
- Updated dependencies
  - ctx-core@5.18.8
  - rebuildjs@0.37.6

## 0.44.6

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.37.5

## 0.44.5

### Patch Changes

- ./types: fix: <reference lib="dom" />
- Updated dependencies
  - rebuildjs@0.37.4

## 0.44.4

### Patch Changes

- ctx-core: ^5.18.6 -> ^5.18.7
- Updated dependencies
  - rebuildjs@0.37.3

## 0.44.3

### Patch Changes

- ctx-core: ^5.18.5 -> ^5.18.6
- Updated dependencies
  - rebuildjs@0.37.2

## 0.44.2

### Patch Changes

- ctx-core: ^5.18.4 -> ^5.18.5
- Updated dependencies
  - rebuildjs@0.37.1

## 0.44.1

### Patch Changes

- elysia_context_T: .store: .ctx→.request_ctx

## 0.44.0

### Minor Changes

- - request_ctx\_\_ensure
- minor:

      middleware_ctx_→middleware_ctx__new
      request_ctx_→request_ctx__new

### Patch Changes

- Updated dependencies
  - rebuildjs@0.37.0

## 0.43.4

### Patch Changes

- ctx-core: ^5.18.3 -> ^5.18.4
- Updated dependencies
  - rebuildjs@0.36.3

## 0.43.3

### Patch Changes

- ctx-core: ^5.18.1 -> ^5.18.2
- Updated dependencies
- Updated dependencies
  - rebuildjs@0.36.2
  - ctx-core@5.18.3

## 0.43.2

### Patch Changes

- ctx-core: ^5.18.0 -> ^5.18.1
- Updated dependencies
  - rebuildjs@0.36.1

## 0.43.1

### Patch Changes

- @sinclair/typebox: ^0.32.8 -> ^0.32.9

## 0.43.0

### Minor Changes

- minor:

      + memo__bind:
      	+ _
      	+ bind

### Patch Changes

- Updated dependencies
  - ctx-core@5.18.0

## 0.42.1

### Patch Changes

- memo\_: add: fix: error when return value is nullish
- ctx-core: ^5.17.0 -> ^5.17.1
- Updated dependencies
  - rebuildjs@0.35.1

## 0.42.0

### Minor Changes

- minor:

      memo_:
      	rename internals:
      		.r→.s
      		.memor→.t
      		.f.S→.f.t
      	+ .memo_: support limiting dependent library bundle sizes by not requiring the rmemo to be imported
      	.add: no longer wraps rmemo_add_def argument with a memo_: user can return a memo from the rmemo_add_def function
      + rmemo__off__add
      rmemo__on: arguments: + off_fn?:(rmemo:rmemo_T<val_T>)=>unknown
      rmemo__on:
      rmemo__off:
      	+ <val_T> generic type
      - rmemo__add_T
      rmemo_add_def_T: arguments: - old_val

### Patch Changes

- Updated dependencies
- Updated dependencies
  - rebuildjs@0.35.0
  - ctx-core@5.17.0

## 0.41.8

### Patch Changes

- @sinclair/typebox: ^0.32.6 -> ^0.32.8

## 0.41.7

### Patch Changes

- elysia: ^0.8.8 -> ^0.8.9
- Updated dependencies
  - rebuildjs@0.34.6

## 0.41.6

### Patch Changes

- rmemo\_\_add: fix: arguments match the .add method
- Updated dependencies
  - ctx-core@5.16.2
  - rebuildjs@0.34.5

## 0.41.5

### Patch Changes

- bun-types: ^1.0.21 -> ^1.0.22
- @sinclair/typebox: ^0.32.5 -> ^0.32.6

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

- request_ctx,request_ctx_T: ns: + ''

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
