

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a8fadd5c.js","_app/immutable/chunks/scheduler.c4efabc0.js","_app/immutable/chunks/index.65033d26.js","_app/immutable/chunks/singletons.a46cf620.js","_app/immutable/chunks/index.aff71f49.js"];
export const stylesheets = [];
export const fonts = [];
