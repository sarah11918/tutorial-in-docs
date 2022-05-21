export const SITE = {
	title: 'Astro Beginner Tutorial',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Section Header', header: true },
		{ text: 'Introduction', link: 'en/introduction' },

		{ text: '0. Introduction', header: true },
		{ text: '0.0 Introduction', link: 'en/0-0-introduction' },
		{ text: '0.1 Background Knowledge', link: 'en/0.1-background-knowledge' },

		{ text: '1. Setup', header: true },
		{ text: '1.0 Overview', link: 'en/1.0-setup-overview' },
		{ text: '1.1 Create a new project', link: 'en/1.1-install' },
		{ text: '1.2 Connect to GitHub / Netlify', link: 'en/1.2-github' },

		{ text: '2. Astro Pages', header: true },
		{ text: '2.0 Overview', link: 'en/2.0-pages-overview' },
		{ text: '2.1 Create New Pages', link: 'en/2.1-about-page' },
		{ text: '2.2 Astro Script', link: 'en/2.2-using-script' },
		{ text: '2.3 Astro Script 2', link: 'en/2.3-script-advanced' },
	],
};
