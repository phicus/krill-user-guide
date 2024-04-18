import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
//import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
// import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
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
    bundler: viteBundler(),
    base: '/',
    title,
    description,
    head,
    theme: defaultTheme({
        logo: '/logo.png',
        locales: locales.theme,
        navbar: navbarMenu.items.en,
        sidebar: sidebarMenu.items.en,
        sidebarDepth: 2,
        contributors: false
    }),
    lang: locales.defaultLanguage,
    locales: locales.config,
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        //externalLinkIconPlugin(),
        mediumZoomPlugin(),
        // // searchPlugin({
        // //     locales: locales.searchPlugin,
        // // }),
        docsearchPlugin({
            appId: '2NLE2B4YK5',
            apiKey: '21be73e3e862794947a3e9b2a54e6511',
            locales: locales.searchPlugin,
            indexName: 'guide-phicus',
        }),
        prismjsPlugin(),
        activeHeaderLinksPlugin(),
    ]
})
