import type { HeadConfig } from '@vuepress/core'
export const title = 'Krill User Guide'
export const description = 'A user guide for Krill'
export const primaryColor = '#548b7d'
export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            // sizes: '16x16',
            href: `/icon.png`,
        },
    ],
    ['meta', { name: 'application-name', content: title }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: title }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: primaryColor }],
    ['meta', { name: 'theme-color', content: primaryColor }],
]
