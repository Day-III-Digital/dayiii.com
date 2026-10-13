import { Marked } from 'marked';

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	summary: string;
	author: string;
}

export interface Post extends PostMeta {
	html: string;
}

// Each post lives in src/content/blog/<slug>/index.md, with any assets beside it.
const files = import.meta.glob('/src/content/blog/*/index.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const assets = import.meta.glob(['/src/content/blog/*/*', '!/src/content/blog/*/*.md'], {
	query: '?url',
	import: 'default',
	eager: true
}) as Record<string, string>;

function parse(path: string, raw: string): Post {
	const dir = path.replace(/\/index\.md$/, '');
	const slug = dir.split('/').pop()!;

	// Resolve relative image/link paths (./pic.png) to the bundled asset URLs
	const resolve = (href: string) => {
		if (/^([a-z][a-z0-9+.-]*:|\/|#)/i.test(href)) return href;
		return assets[`${dir}/${decodeURIComponent(href.replace(/^\.\//, ''))}`] ?? href;
	};
	const video = (href: string, label: string, title?: string | null) => {
		const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
		const caption = title ? `<figcaption>${esc(title)}</figcaption>` : '';
		return `<figure class="video"><video controls preload="metadata" playsinline src="${esc(href)}" aria-label="${esc(label)}"></video>${caption}</figure>`;
	};
	const isVideo = (href: string) => /\.(mp4|webm|ogv|mov)([?#].*)?$/i.test(href);
	const marked = new Marked({
		renderer: {
			// ![caption](clip.mp4) or [caption](clip.mp4) renders a video player
			image({ href, title, text }) {
				return isVideo(href) ? video(href, text, title) : false;
			},
			link({ href, title, text }) {
				return isVideo(href) ? video(href, text, title) : false;
			}
		},
		walkTokens(token) {
			if (token.type === 'image' || token.type === 'link') token.href = resolve(token.href);
		}
	});
	const match = raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	const data: Record<string, string> = {};
	let body = raw;

	if (match) {
		body = match[2];
		for (const line of match[1].split('\n')) {
			const idx = line.indexOf(':');
			if (idx > 0) {
				data[line.slice(0, idx).trim()] = line
					.slice(idx + 1)
					.trim()
					.replace(/^(['"])(.*)\1$/, '$2');
			}
		}
	}

	return {
		slug,
		title: data.title ?? slug,
		date: data.date ?? '',
		summary: data.summary ?? '',
		author: data.author ?? 'Day III Digital',
		html: marked.parse(body, { async: false }) as string
	};
}

const posts: Post[] = Object.entries(files)
	.map(([path, raw]) => parse(path, raw))
	.filter((p) => !p.slug.startsWith('_'))
	.sort((a, b) => b.date.localeCompare(a.date));

export const getPosts = (): PostMeta[] =>
	posts.map(({ html: _html, ...meta }) => meta);

export const getPost = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);

export function formatDate(date: string): string {
	const d = new Date(date);
	if (isNaN(d.getTime())) return date;
	return d.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	});
}
