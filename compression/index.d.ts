/// <reference types="bun-types" />
// Fork of https://github.com/Gusb3ll/elysia-compression
import type { ZlibCompressionOptions } from 'bun'
import type { Elysia, RouteBase } from 'elysia'
export type compression_middleware_config_T = {
	type:'gzip'|'deflate';
	zlib_compression_options?:ZlibCompressionOptions;
	encoding?:BufferEncoding;
};
export declare const compression_middleware_:(config?:compression_middleware_config_T)=>Elysia<'', {
	request:{ [x:string]:unknown }
	store:{ [x:string]:unknown }
}, {
	type:{ [x:string]:unknown }
	error:{ [x:string]:Error }
}, object, RouteBase, false>
