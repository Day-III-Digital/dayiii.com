import { base } from '$app/paths';
import { error, redirect } from '@sveltejs/kit';
import { getAliases, getPost, getPosts, resolveAlias } from '$lib/blog';

export const prerender = true;

export function entries() {
	return [...getPosts().map(({ slug }) => slug), ...getAliases().map(([alias]) => alias)].map(
		(slug) => ({ slug })
	);
}

export function load({ params }) {
	const post = getPost(params.slug);
	if (post) return { post };

	const target = resolveAlias(params.slug);
	if (target) redirect(301, `${base}/blog/${encodeURIComponent(target)}`);

	error(404, 'Post not found');
}
