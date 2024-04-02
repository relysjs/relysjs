# relysjs

Reactive web app server. Focuses on MPAs with simple server middleware &amp; browser build api. Uses a [rebuildjs](https://github.com/rebuildjs/rebuildjs) core with:

- [bunjs](https://bun.sh)
- [ElysiaJS](https://elysiajs.com/)
- [ESBuild](https://esbuild.github.io/)
- [rmemo (Reactive Memo)](https://github.com/ctx-core/rmemo)
- [ctx-core/be](https://github.com/ctx-core/be)

## ctx-core/be & rmemo

Relysjs uses rmemo to coordinate the build steps & state.

## How it works

relysjs is an app server that uses ElysiaJS middleware to create routes. Relysjs includes running the development production app server processes.

handles development & production builds. It uses esbuild under the hood. Providing helper functions to manage coordinate builds.

## build.ts

The build config is in `app-root/build.ts`. It can run the build if it's the entry file & export the `build` function to be used when starting the dev server. Here is the [build.ts file](https://github.com/btakita/briantakita.me/blob/main/build.ts) from my site [briantakita.me](https://briantakita.me)

| function               | description                                                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `relysjs_server__build`  | Run esbuild for the server logic. Includes web page assets generated over SSR.                                                     |
| `relysjs_browser__build` | Run esbuild for asset files served over http. Manages assets generated by `relysjs_server__build` & browser-side javascript logic. |

## start.ts

Used to start the production web app from the build output in the `dist` directory. Here is [start.ts](https://github.com/btakita/briantakita.me/blob/main/start.ts) from [briantakita.me](https://briantakita.me).

## app directory

The entry files for the middleware server + browser builds. There is a separate esbuild target for each defined `index.server.ts` & `index.browser.ts` file.

### app/index.ts

Starts the web server with site-wide middleware. Here is [app/index.ts](https://github.com/btakita/briantakita.me/blob/main/app/index.ts) from [briantakita.me](https://briantakita.me).

### app/**/index.server.ts

A `relysjs_server__build` build target for a middleware. Here is [app/index.server.ts](https://github.com/btakita/briantakita.me/blob/main/app/index.server.ts) from [briantakita.me](https://briantakita.me).

### app/**/index.browser.ts

A `relysjs_browser__build` build target for a middleware. Here is [app/index.server.ts](https://github.com/btakita/briantakita.me/blob/main/app/index.browser.ts) from [briantakita.me](https://briantakita.me).

## ctx namespaces (ns)

ctx-core/be organizes server side & build state into namespaces. By default, the state is in the `''` namespace. rebuildjs & by extension relysjs stores the state in 4 namespaces:

- `ns: 'app'`
- `ns: 'middleware'`
- `ns: 'request'`
- `ns: ''`

Relevant be functions are in the `relysjs/server` module.

### ctx ns: app

ctx state that lives during the lifetime of the build & the app. It stores:

- application info
- configuration
- application build state

Some important functions include:

| function               | description                                                                |
|------------------------|----------------------------------------------------------------------------|
| `app_`                 | Elysia middleware object                                                   |
| `relysjs__ready__wait` | Returns a promise that resolves when the relysjs part of the build is done |
| `relysjs__ready_`      | is true when the relysjs build step is complete                            |

### ctx ns: request

ctx state that lives in the lifetime of a HTTP request. It stores request-specific info:

Some of the state includes:

| function         | description                          |
|------------------|--------------------------------------|
| `elysia_context_` | The ElysiaJS context for the request |
| `request_`       | The Request object                   |
| `request_url_`   | The Request url                      |
| `store_`         | The ElysiaJS store object            |

## Name Convention

Relysjs uses the [tag vector name system](https://briantakita.me/posts/tag-vector-0-introduction). A terse name system to convey domain ontology as tag vectors.
