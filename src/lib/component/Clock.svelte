<script>
	import { onMount } from 'svelte';
	import { dateTime } from '$lib/utils';

	let date = new Date();
	let showDateTime = dateTime(date.toString());

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
			showDateTime = dateTime(date.toString());
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<section>
	<div id="" class="clockWrapper">
		<p class="clockDisplay text-gray-800 dark:text-gray-200">
			{showDateTime}
		</p>
	</div>
</section>

<style>
	section,
	.clockWrapper,
	.clockDisplay {
		display: flex;
		justify-content: right;
		align-items: right;
	}
	section {
		width: 100%;
		overflow: hidden;
	}
	.clockWrapper {
		width: 80%;
		height: 50%;
		border-radius: 15px;
		/* background: #ffffff; */
	}
	.clockDisplay {
		width: 99%;
		height: 99%;
		font-size: 1em;
	}
</style>
