import { c as create_ssr_component, j as each, e as escape } from "../../chunks/ssr.js";
import { n as numberFormat, d as dateTime } from "../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let boardData = data.boards;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="m-4">${boardData.length ? each(boardData, (board, i) => {
    return `<div class="pb-4"><h2 class="h2">${escape(board.name)}</h2></div> <section class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-token">${each(board.Result, (res) => {
      return `<div class="card p-2 variant-filled-primary"><header class="card-header" data-svelte-h="svelte-1sowaz8"><h4 class="h4">Air Humidity</h4></header> <section class="mb-4"><span class="text-4xl">${escape(numberFormat(res.air_humid))}</span> </section></div> <div class="card p-2 variant-filled-primary"><header class="card-header" data-svelte-h="svelte-69441z"><h4 class="h4">Light</h4></header> <section class="mb-4"><span class="text-4xl">${escape(numberFormat(res.light))}</span></section></div> <div class="card p-2 variant-filled-primary"><header class="card-header" data-svelte-h="svelte-yoa43b"><h4 class="h4">Soil Humidity</h4></header> <section class="mb-4"><span class="text-4xl">${escape(numberFormat(res.soil_humid))}</span> </section></div> <div class="card p-2 variant-filled-primary"><header class="card-header" data-svelte-h="svelte-7at1qh"><h4 class="h4">Temperature</h4></header> <section class="mb-4"><span class="text-4xl">${escape(numberFormat(res.temperature))}</span> </section></div> <div class="text-gray-600 dark:txt-gray-400e text-left">@${escape(dateTime(res.createdAt.toString()))} </div>`;
    })}</section> ${boardData.length > 1 && boardData.length !== i + 1 ? `<div class="pt-8 pb-8" data-svelte-h="svelte-k1og6n"><hr class="!border-t-8 !border-double"></div>` : ``}`;
  }) : `<div class="card font-semibold capitalize text-primary-500" data-svelte-h="svelte-18ke0pw">Incoming...</div>`}</main>`;
});
export {
  Page as default
};
