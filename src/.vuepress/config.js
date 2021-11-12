//const { description } = require('../../package')
const { config } = require('vuepress-theme-hope')

module.exports = config ({
  base: '/guide/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ayuda de Krill',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Bienvenido a la página de ayuda de Krill',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#158d7d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    contributor: false,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    fullscreen: false,
    themeColor: false,
    lastUpdated: false,
    nav: [
      {
        text: 'Krill2',
        link: '/krill2/login.md',
      },
      //{
      //  text: 'Rubik',
      //  link: '/rubik/'
      //}
    ],
    sidebar: {
      '/krill2/': [
        {
          title: 'Krill2',
          collapsable: false,
          children: [
            'login',
            'krillui',
            'dashboard',
            //'problems',
            //'buscador',
            //'ficha_monitor',
            //'vistas'
          ]
        }
      ],
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-table-of-contents',
    ]
});

