import { error } from '@sveltejs/kit';
import { getPost, getPosts } from '$lib/blog';

export const prerender = true;

export function entries() {
	return getPosts().map(({ slug }) => ({ slug }));
}

export function load({ params }) {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
}
