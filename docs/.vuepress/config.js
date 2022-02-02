const getChildrenNavbar = require('./child_navbar');
//const getChildrenSidebar = require('./child_sidebar');
const path = require("path");

module.exports =  {
  // site config
  base: '/guide/',
  lang: 'en-US',
  title: 'Krill',
  port: 8081,
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      description: 'Krill Help',
    },
    '/es/': {
      lang: 'Spanish',
      description: 'Ayuda de Krill',
    },
  },
  alias: {
    '@images': path.resolve(__dirname,"./img")
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
    contributors: false,
    smoothScroll: true,
    navbar: [
        // Home page
        {
          text: 'Home',
          link: '/README.md',
        },
        {
          text: 'Krill2', 
          children: getChildrenNavbar('./docs/krill2/')
        },
        {
          text: 'Changelog', 
          children: getChildrenNavbar('./docs/change-log/'),
        },

    ],
    sidebarDepth: 1,
    sidebar: {
        '/change-log/': getChildrenNavbar('./docs/change-log/'),
        '/es/change-log/': getChildrenNavbar('./docs/es/change-log/')
    },
  },
}