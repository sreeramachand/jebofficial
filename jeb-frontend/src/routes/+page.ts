// src/routes/about/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	return {
		seo: {
			title: "J.E.B.",
			description: "Explore Science, Build Technology, Play Games, and Embrace the Joy of Life!",
			canonical: url.href,          // or build from your site origin + url.pathname
			robots: 'index,follow',
			og: {
				type: 'website',
				image: '/og/about.png'
			},
			twitter: {
				card: 'summary_large_image'
			}
		}
	};
};