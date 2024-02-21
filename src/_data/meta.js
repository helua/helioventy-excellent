module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Andrzej Holnicki - web designer',
  siteDescription:
    'Filozofia na UW, teraz tworzę WWW',
  siteType: 'Person', // schema
  locale: 'pl_PL',
  lang: 'pl',
  skipContent: 'do treści',
  author: {
    name: 'Andrzej Holnicki', // i.e. Lene Saile - page / blog author's name. Must be set.
    avatar: '/favicon.png',
    email: 'ndrzjhl@gmail.com', // i.e. hola@lenesaile.com - email of the author
    website: 'https://helio.webd.pl' // i.e. https.://www.lenesaile.com - the personal site of the author
  },
  creator: {
    name: 'Andrzej Holnicki', // i.e. Lene Saile - creator's (developer) name.
    email: 'ndrzjhl@gmail.com',
    website: 'https://helio.webd.pl',
    social: 'https://www.instagram.com/andrzejhelio/'
  },
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#FBFBFB', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  opengraph_default: '/assets/images/template/opengraph-default.jpg', // fallback/default meta image
  opengraph_default_alt:
    'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es', // alt text for default meta image
  blog: {
    // this is for the rss feed
    name: 'Andrzej Holnicki - webdesign blog',
    description:
      'Piszę o moich front-endowych projektach.',
    tagSingle: 'Tag',
    tagPlural: 'Tags',
    tagMore: 'Więcej tagów:',
    // feed links are looped over in the head.
    feedLinks: [{title: 'Atom Feed', url: '/feed.xml', type: 'application/atom+xml'}],
    pagination: 'Blog',
    paginationPage: 'Strona',
    paginationPrevious: 'Poprzednia',
    paginationNext: 'Następna'
  },
  details: {
    aria: 'kontrolki sekcji',
    expand: 'rozwiń wszystko',
    collapse: 'zwiń wszystko'
  },
  navigation: {
    ariaTop: 'Main',
    ariaBottom: 'Complementary',
    ariaPlatforms: 'Platforms',
    closedText: 'Menu'
  },
  themeSwitch: {
    title: 'Motyw',
    light: 'jasny',
    dark: 'ciemny',
    initial: 'wybierz'
  },
  greenweb: {
    // this goues into src/common/greenweb.njk
    providers: {
      // if you want to add more than one, edit the array directly.
      domain: 'netlify.com',
      service: 'cdn'
    },
    credentials: {
      // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
      domain: '',
      doctype: '',
      url: ''
    }
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.
    allow: true,
    infoText: 'Podejrzyj tę stronę na GitHubie'
  },
  easteregg: false
};
