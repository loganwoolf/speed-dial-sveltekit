<script lang="ts">
	import '../app.css';
	import { navItems } from '$lib/nav-items';
</script>

<header>
	<nav>
		{#each navItems as link}
			<a href={link.path}>{link.name}</a>
		{/each}
	</nav>
</header>

<slot />

<footer>
	<p>Made in 🍁 by Logan Woolf</p>
</footer>
