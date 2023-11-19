<script lang="ts">
	import { onMount } from 'svelte';
	import { dateTime, numberFormat } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	let boardData = data.boards;

	const fetchData = async () => {
		const res = await fetch('/api/sensor');
		const newData = await res.json();
		boardData = newData;
	};

	onMount(() => {
		const interval = setInterval(() => {
			fetchData();
		}, 5000); // 5 seconds

		return () => clearInterval(interval);
	});
</script>

<main class="m-4">
	{#each boardData as board, i}
		<div class="pb-4"><h2 class="h2">{board.name}</h2></div>
		<section class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-token">
			{#each board.Result as res}
				<div class="card p-2 variant-filled-primary">
					<header class="card-header"><h4 class="h4">Air Humidity</h4></header>
					<section class="mb-4">
						<span class="text-4xl">{numberFormat(res.air_humid)}</span>
					</section>
				</div>
				<div class="card p-2 variant-filled-primary">
					<header class="card-header"><h4 class="h4">Light</h4></header>
					<section class="mb-4"><span class="text-4xl">{numberFormat(res.light)}</span></section>
				</div>
				<div class="card p-2 variant-filled-primary">
					<header class="card-header"><h4 class="h4">Soil Moisture</h4></header>
					<section class="mb-4">
						<span class="text-4xl">{numberFormat(res.soil_humid)}</span>
					</section>
				</div>
				<div class="card p-2 variant-filled-primary">
					<header class="card-header"><h4 class="h4">Temperature</h4></header>
					<section class="mb-4">
						<span class="text-4xl">{numberFormat(res.temperature)}</span>
					</section>
				</div>
				<div class="text-gray-600 dark:txt-gray-400e text-left">
					@{dateTime(res.createdAt.toString())}
				</div>
			{/each}
		</section>

		{#if boardData.length > 1 && boardData.length !== i + 1}
			<div class="pt-8 pb-8"><hr class="!border-t-8 !border-double" /></div>
		{/if}
	{:else}
		<div class="card font-semibold capitalize text-primary-500">Incoming...</div>
	{/each}
</main>
