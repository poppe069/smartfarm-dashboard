export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Quicksand.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.f2b1c530.js","app":"_app/immutable/entry/app.718ffca1.js","imports":["_app/immutable/entry/start.f2b1c530.js","_app/immutable/chunks/scheduler.c4efabc0.js","_app/immutable/chunks/singletons.a46cf620.js","_app/immutable/chunks/index.aff71f49.js","_app/immutable/entry/app.718ffca1.js","_app/immutable/chunks/scheduler.c4efabc0.js","_app/immutable/chunks/index.65033d26.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/sensor",
				pattern: /^\/api\/sensor\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/sensor/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
