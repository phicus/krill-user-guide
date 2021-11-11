const { description } = require('../../package')

module.exports = {
  base: '/guide/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Página de ayuda Krill',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
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
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Krill2',
        link: '/krill2/',
      },
      {
        text: 'Rubik',
        link: '/rubik/'
      }
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
  // markdown: {
  //   config: md => {
  //     md.set({ html: true, linkify: true, typography: true })
  //   }
  // },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-table-of-contents',
  ]
}

