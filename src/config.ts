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
		{ text: '2.1 About Page', link: 'en/2.1-about-page' },
		{ text: '2.2 Astro Script', link: 'en/2.2-using-script' },
		{ text: '2.3 Astro Script 2', link: 'en/2.3-script-advanced' },
		{ text: '2.4 Astro Style Tag', link: 'en/2.4-style-tag' },

		{ text: '3. Astro Components', header: true },
		{ text: '3.0 Overview', link: 'en/3.0-components-overview' },
		{ text: '3.1 Nagivation Component', link: 'en/3.1-navigation-component' },
		{ text: '3.2 Component Props', link: 'en/3.2-component-props' },
		{ text: '3.3 Layout Component', link: 'en/3.3-layout' },

		{ text: '4. Markdown Blog Posts', header: true },
		{ text: '4.0 Overview', link: 'en/4.0-markdown-blog-posts' },
		{ text: '4.1 Create a Blog Post', link: 'en/4.1-markdown-post' },
		{ text: '4.2 Using Markdown Frontmatter', link: 'en/4.2-markdown-frontmatter' },
		{ text: '4.3 Adding Blog Pages', link: 'en/4.3-adding-blog-pages' },

		{ text: '5. Using the API', header: true },
		{ text: '5.0 Overview', link: 'en/5.0-api-overview' },
		{ text: '5.1 Using Astro.glob()', link: 'en/5.1-astro-glob' },
		{ text: '5.2 Dynamic Routing', link: 'en/5.2-dynamic-routing' },
		{ text: '5.3 Tag Index Page', link: 'en/5.3-tag-index' },
		{ text: '5.4 RSS Feed', link: 'en/5.4-rss' },

		{ text: '6. Interactivity', header: true },
		{ text: '6.0 Overview', link: 'en/6.0-interactivity-overview' },
		{ text: '6.1 Responsive Navigation', link: 'en/6.1-responsive-navigation' },
		{ text: '6.2 Data Fetching', link: 'en/6.2-data-fetching' },
		{ text: '6.3 UI Framework Components', link: 'en/6.3-ui-framework-components' },
	],
};
