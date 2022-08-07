export const SITE = {
	title: 'Westwood Robotics FTC',
	description: 'FTC Guidebook.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/wwrobologo.png?raw=true',
		alt:
			'The epic robot that is Westwood Robotics, the Westwood Robotics FTC team, and the Westwood Robotics FTC team logo.',
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
		{ text: 'How to Contribute', header: true, link: 'wwroboftc/contribute/' },

		{ text: 'Programming', header: true, link: 'wwroboftc/programming/' },
		{ text: 'Coding Teleops', link: 'teleop' },
		{ text: 'Java', link: 'java' },
		{ text: 'How to touch grass', link: 'touching-grass'},
		{ text: 'GitHub', link: 'GitHub'},

		{ text: 'Workshop', header: true, link: 'wwroboftc/workshop/'},
		{ text:'Onshape Basics', link: 'onshape'},
		{ text: 'Design Basics', link: 'designbasics'},

		{ text: 'CAD', header: true, link: 'wwroboftc/cad/' },		
		{ text: 'OnShape Extensions', link: 'onshape-extensions' },
		{ text: 'Getting started with Autodesk', link: 'autodesk'},
		{ text: 'Advanced tips and tricks', link: 'tips-tricks'},

		{ text: 'Hardware', header: true, link: 'wwroboftc/hardware/'},
		{ text: 'Getting to know your allen keys', link: 'allen-keys'},
		{ text: 'The Maker Space', link: 'maker-space'},

		{ text: 'Outreach', header: true, link: 'wwroboftc/outreach/'},
		{ text: 'Top 10 outreach projects', link: 'top-10-outreach-projects'},
		
		{ text: 'Marketing', header: true, link: 'wwroboftc/marketing/'},
		{ text: 'Help us find sponsors!', link: 'how-to-help-with-sponsors'},,

		
	],
};
