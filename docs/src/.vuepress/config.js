const path = require("path");
const {description} = require('../../package')
const getChildrenNavbar = require('./utils/child_navbar');
const getChildrenSidebar = require('./utils/child_sidebar');
const sidebar = require('./utils/sidebarMenus')
const navbar = require('./utils/navbarMenu')

module.exports = {
    title: 'Krill User Guide',
    description: description,
    base: '/guide/',
    alias: {
        '@images': path.resolve(__dirname,"./img")
    },
    lang: 'en-US',
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    locales: {
        '/': {
            // lang: 'en-US',
            lang: '🇬🇧 English',
            description: 'Krill Help',
            title: 'Krill User Guide',
            selectText: 'Languages',
            searchPlaceholder: 'Search...',
            lastUpdated: 'Last Updated',
            nav: navbar.items.en,
            sidebar: sidebar.items.en,
        },
        '/es/': {
            // lang: 'es-ES',
            lang: '🇪🇸 Spanish',
            description: 'Ayuda de Krill',
            title: 'Una guía de usuario para Krill',
            selectText: 'Idiomas',
            searchPlaceholder: 'Buscar...',
            lastUpdated: 'Actualizado hace',
            nav: navbar.items.es,
            sidebar: sidebar.items.es,
        },
    },
    //theme: "vt",
    themeConfig: {
        logo: '/logo.png',
        enableDarkMode: true,
        contributors: false,
        smoothScroll: true,
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Search...',
        lastUpdated: 'Last Updated',
        displayAllHeaders: true,
        sidebarDepth: 1,
        nav: navbar.items.en,
        sidebar: sidebar.items.en,
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                },
                dateOptions:{
                    hour12: false
                }
            }
        ],
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@snowdog/vuepress-plugin-pdf-export',
    ]
}
