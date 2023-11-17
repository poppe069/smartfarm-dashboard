import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.c49b0dc8.js","_app/immutable/chunks/scheduler.c4efabc0.js","_app/immutable/chunks/index.65033d26.js","_app/immutable/chunks/utils.7c1dc23b.js"];
export const stylesheets = [];
export const fonts = [];
