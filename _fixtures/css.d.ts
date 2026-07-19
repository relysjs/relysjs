// The fixture apps import stylesheets for their side effect; the bundler
// resolves them, but tsc needs a declaration or it reports TS2882.
declare module '*.css' {}
