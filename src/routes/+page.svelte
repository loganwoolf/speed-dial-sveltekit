<script lang="ts">
	import type { PageData } from './$types.js';

	export let data: PageData;
	export let form;
</script>

<h1>SpeedDial</h1>

<section class="speed-dial">
	<ul>
		{#each data.speedDialLinks as link, index}
			{#if index < 9}
				<li class="page-tile" data-link-id={link.id}>
					<a href={link.url}>{link.name}</a>
				</li>
			{/if}
		{/each}

		{#if data.speedDialLinks.length < 9}
			<li class="page-tile add-tile">
				<form method="POST" action="?/createLink">
					<label for="add-tile--url">New Link Name</label>
					<input name="name" value={form?.name} id="add-tile--name" type="text" />
					<label for="add-tile--url">New Link URL</label>
					<input name="url" value={form?.url} id="add-tile--url" type="text" />
					<button type="submit">Create</button>
				</form>
			</li>
		{/if}
	</ul>
</section>

{#if form?.success}
	<p>Link created!</p>
{/if}

<style>
	.speed-dial {
		flex: 1 1 auto;

		& > ul {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(2, 1fr);
			padding: 0;
			margin: 2rem;

			@media screen and (min-width: 480px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}

	.page-tile {
		align-items: center;
		aspect-ratio: 3 / 2;
		border: 2px solid grey;
		display: flex;
		flex: 1 1 calc(100% / 3);
		justify-content: center;
		list-style: none;

		& form {
			display: flex;
			flex-direction: column;
		}
	}
</style>
