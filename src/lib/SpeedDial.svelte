<script lang="ts">
	import { getAllLinks } from '$lib/server/database';

	const speedDialLinks = getAllLinks();
	let newPageUrl: string = '';
</script>

<section class="speed-dial">
	<ul>
		{#each speedDialLinks as link, index}
			{#if index < 9}
				<li class="page-tile" data-link-id={link.id}>
					<a href={link.url}>{link.name}</a>
				</li>
			{/if}
		{/each}

		<li class="page-tile add-tile">
			<form>
				<label for="add-tile--url">New Link URL</label>
				<input bind:value={newPageUrl} id="add-tile--url" type="text" />
				<button type="submit">Create</button>
			</form>
		</li>
	</ul>
</section>

<style>
	.speed-dial {
		flex: 1 1 auto;

		& > ul {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(2, 1fr);
			padding: 0;
			margin: 2rem;
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
