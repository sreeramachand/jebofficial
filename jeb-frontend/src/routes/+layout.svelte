<script lang="ts">
	//import favicon from '$lib/assets/favicon.svg';
	import jebLogo from '$lib/assets/jeb-logo.png';
	let { children } = $props();
	import "../app.css";
	import {page} from '$app/state';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	const siteName = 'J.E.B.';
	const siteOrigin = PUBLIC_SITE_URL; // put this in PUBLIC env in real projects

	// reactive values in Svelte 5
	const seo = $derived({
		title: page.data?.seo?.title ?? siteName,
		description: page.data?.seo?.description ?? 'Explore Science, Build Technology, Play Games, and Embrace the Joy of Life!',
		canonical:
			page.data?.seo?.canonical ??
			`${siteOrigin}${page.url.pathname}${page.url.search}`,
		robots: page.data?.seo?.robots ?? 'index,follow',
		og: {
			type: page.data?.seo?.og?.type ?? 'website',
			image: page.data?.seo?.og?.image ?? '/og/default.png'
		},
		twitter: {
			card: page.data?.seo?.twitter?.card ?? 'summary_large_image'
		}
	});

	const fullTitle = $derived(
		seo.title === siteName ? siteName : `${seo.title} | ${siteName}`
	);

	const ogImage = $derived(
		seo.og.image.startsWith('http') ? seo.og.image : `${siteOrigin}${seo.og.image}`
	);
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="icon" href={jebLogo} />

	<!-- Preload fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

	<!-- Phosphor Icons -->
	 <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
    />

	<!-- Page Title -->
	<title>{fullTitle}</title>

	<!-- SEO Meta Tags -->
	<meta name="description" content={seo.description} />
	<meta name="robots" content={seo.robots} />
	<link rel="canonical" href={seo.canonical} />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:type" content={seo.og.type} />
	<meta property="og:url" content={seo.canonical} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter -->
	<meta name="twitter:card" content={seo.twitter.card} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

{@render children()}
