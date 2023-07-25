const menu = [
    { text: 'Home', link: '/' },
    {
        text: 'Krill2',
        children: [
            {
                text: 'Login',
                link: '/krill2/login'
            },
            {
                text: 'Users',
                link: '/krill2/users'
            },
            {
                text: 'Dashboard',
                link: '/krill2/dashboard'
            },
            {
                text: 'Modules',
                children: [
                    {
                        text: 'Monitoring',
                        link: '/krill2/monitoring/'
                    },
                    {
                        text: 'Customers/ISP',
                        link: '/krill2/isp-customer/'
                    },
                    {
                        text: 'PBX',
                        link: '/krill2/pbx/'
                    },
                    {
                        text: 'Radius',
                        link: '/krill2/radius/'
                    },
                    {
                        text: 'Rubik',
                        link: '/krill2/rubik/'
                    },
                    {
                        text: 'Installer tools',
                        link: '/krill2/installer-tools/'
                    },
                    {
                        text: 'Logger',
                        link: '/krill2/logger/'
                    },
                ]
            }
        ]
    },
    {
        text: 'API',
        children: [
            { text: 'API (V2)', link: '/krill2/api/api-v2' },
            { text: 'Rubik API', link: '/krill2/api/rubik' },
            { text: 'Postman Samples', link: '/krill2/api/postman' },
            { text: 'Widgets', link: '/krill2/widgets' },
        ]
    },
    { text: 'ISP-CLI', link: '/krill2/isp-cli' },
    //{ text: 'Changelog', link: '/krill2/changelog' },
]

const menuEs = [
    { text: 'Inicio', link: '/es/' },
    {
        text: 'Krill2',
        children: [
            {
                text: 'Acceso',
                link: '/es/krill2/login'
            },
            {
                text: 'Usuarios',
                link: '/es/krill2/users'
            },
            {
                text: 'Cuadro de mandos',
                link: '/es/krill2/dashboard'
            },
            {
                text: 'Módulos',
                children: [
                    {
                        text: 'Monitoring',
                        link: '/es/krill2/monitoring/'
                    },
                    {
                        text: 'Customers/ISP',
                        link: '/es/krill2/isp-customer/'
                    },
                    {
                        text: 'PBX',
                        link: '/es/krill2/pbx/'
                    },
                    {
                        text: 'Radius',
                        link: '/es/krill2/radius/'
                    },
                    {
                        text: 'Rubik',
                        link: '/es/krill2/rubik/'
                    },
                    {
                        text: 'Herramientas del Instalador',
                        link: '/es/krill2/installer-tools/'
                    },
                    {
                        text: 'Logger',
                        link: '/es/krill2/logger/'
                    },

                ]
            }
        ]
    },
    {
        text: 'API',
        children: [
            { text: 'API (V2)', link: '/es/krill2/api/api-v2' },
            { text: 'Rubik API', link: '/es/krill2/api/rubik' },
            { text: 'Ejemplos Postman', link: '/es/krill2/api/postman' },
            { text: 'Widgets', link: '/es/krill2/widgets' },
        ]
    },
    { text: 'ISP-CLI', link: '/es/krill2/isp-cli' },
    //{ text: 'Novedades', link: '/es/krill2/changelog' },
]

export const navbarMenu = {
    items: {
        en: menu,
        es: menuEs
    }
}
