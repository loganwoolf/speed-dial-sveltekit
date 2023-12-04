import { createLink, getAllLinks } from '$lib/server/database.js';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load() {
	return {
		speedDialLinks: getAllLinks()
	};
}

export const actions = {
	createLink: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const url = formData.get('url') as string;

		if (!name || !url) {
			return fail(400, { name, url, missing: true });
		}
		createLink({ name, url });

		return {
			success: true
		};
	}
} satisfies Actions;
