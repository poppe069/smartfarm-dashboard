

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1269d3d4.js","_app/immutable/chunks/scheduler.c4efabc0.js","_app/immutable/chunks/index.65033d26.js","_app/immutable/chunks/index.aff71f49.js","_app/immutable/chunks/utils.7c1dc23b.js"];
export const stylesheets = ["_app/immutable/assets/0.8b41ad48.css"];
export const fonts = [];
