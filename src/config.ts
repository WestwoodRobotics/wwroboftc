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
export const GITHUB_EDIT_URL = `https://github.com/WestwoodRobotics/wwroboftc/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://discord.com/channels/689167175214301254/848353976659214366`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'wwroboftcindex',
  appId: 'XAT0LA8QPR',
  apiKey: 'cbaeb9ad9724d5334071cb65a196fadf',
}

export const SIDEBAR = {
	en: [

		{ text: 'Programming', header: true, link: 'wwroboftc/programming/' },
		{ text: 'GitHub(DO FIRST)', link: 'GitHub'},
		{ text: 'Introduction to FTC Programming', link: 'introduction'},
		{ text: 'Coding Teleop', link: 'teleop' },
		{ text: 'Java', link: 'java' },
		{ text: 'FTC Java', link: 'ftcJava'},
		{ text: 'How to touch grass', link: 'touching-grass'},
		{ text: 'Week One Motor Demo', link: 'week-one-demo'},
		{ text: 'Android Studio', link: './android-studio' },
		

		{ text: 'CAD', header: true, link: 'wwroboftc/cad/' },
		{ text: 'How to set up Onshape(DO FIRST)', link:'settingUpOnshape'},
		{ text: 'CAD Practice', link: "cadPractice"},
		{ text: 'Unit 1: Design Basics', link: 'Unit_1'},
		{ text: 'Unit 2: FTC Fundamentals', link: 'Unit_2'},
		{ text: 'Unit 3: Onshape Tutorials', link: 'Unit_3'},
		{ text: 'CAD Workshop', link: 'Workshop'},
		{ text: 'OnShape Extensions', link: 'onshape-extensions' },
		{ text: 'Getting started with Autodesk', link: 'autodesk'},
		{ text: 'Advanced tips and tricks', link: 'tips-tricks'},

		{ text: 'Hardware', header: true, link: 'wwroboftc/hardware/'},
		{ text: 'Motor Assembly', link: 'MotorAssembly'},
		{ text: 'Shaft Assembly', link: 'ShaftAssembly'},
		{ text: 'Servo Claw Activity', link: 'ServoClawActivity'},
		{ text: 'Getting to know your allen keys', link: 'allen-keys'},
		{ text: 'The MakerSpace', link: 'maker-space'},
		{ text: 'Tools', link: 'Tools'},
		{ text: 'Common Parts', link:'commonParts'},

		{ text: 'Outreach', header: true, link: 'wwroboftc/outreach/'},
		{ text: 'Top 10 outreach projects', link: 'top-10-outreach-projects'},
		{ text: 'Awards', link: 'awards'},
		
		{ text: 'Marketing', header: true, link: 'wwroboftc/marketing/'},
		{ text: 'Help us find sponsors!', link: 'how-to-help-with-sponsors'},,

		{ text: 'How to Contribute', header: true, link: 'wwroboftc/contribute/' },
	],
};
