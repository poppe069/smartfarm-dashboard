<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Clock from '$lib/component/Clock.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- <strong class="text-xl uppercase">Smart Farming</strong> -->
				<h1 class="h1 uppercase gradient-heading">Smart Farming</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">
		<AppBar>
			<svelte:fragment slot="trail"><Clock /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
