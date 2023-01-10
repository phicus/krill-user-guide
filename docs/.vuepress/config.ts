import { defineUserConfig, defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import {
    head,
    title,
    description,
    locales,
    navbarMenu,
    sidebarMenu
} from './config/index'

export default defineUserConfig({
    base: '/guide/',
    title,
    description,
    head,
    theme: defaultTheme({
        // default theme config
        logo: '/logo.png',
        locales: locales.theme,
        navbar: navbarMenu.items.en,
        sidebar: sidebarMenu.items.en,
        sidebarDepth: 2,
    }),
    lang: locales.defaultLanguage,
    locales: locales.config,
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        externalLinkIconPlugin(),
        mediumZoomPlugin(),
        searchPlugin({
            locales: locales.searchPlugin,
        }),
        prismjsPlugin(),
        activeHeaderLinksPlugin(),
    ]
})
