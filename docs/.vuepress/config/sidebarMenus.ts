import type { SidebarConfig } from '@vuepress/theme-default'

const krill2Sidebar = {
    en: [{
        text: 'Krill2',
        //collapsible: true,
        children: [
            {link: '/krill2/login.md', text: 'Login'},
            {link: '/krill2/users.md', text: 'Users'},
            {link: '/krill2/dashboard.md', text: 'Dashboard'},
        ],
    }],
    es: [{
        text: 'Krill2',
        //collapsible: true,
        children: [
            {link: '/es/krill2/login.md', text: 'Acceso'},
            {link: '/es/krill2/users.md', text: 'Usuarios'},
            {link: '/es/krill2/dashboard.md',text: 'Cuadro de mandos'},
        ]
    }]
}

const monitoringSidebar = {
    en: [{
        text: 'Monitoring',
        //collapsible: true,
        children: [
            {link: '/krill2/monitoring/alarms.md', text: 'Alarms'},
            {link: '/krill2/monitoring/problems.md', text: 'Problems'},
            {link: '/krill2/monitoring/matrix.md', text: 'Matrix'},
            {link: '/krill2/monitoring/host-groups.md', text: 'Host Groups'},
            {link: '/krill2/monitoring/sonar.md', text: 'Sonar'},
            {link: '/krill2/monitoring/unprovisioned-onus.md', text: 'Unprovisioned Onus'},
            {link: '/krill2/monitoring/worldmap.md', text: 'Worldmap'},
            {link: '/krill2/monitoring/smart-tree.md', text: 'Smart Tree'},
            {link: '/krill2/monitoring/cwmp-table.md', text: 'CWMP Table'},
            {link: '/krill2/monitoring/host-events.md', text: 'Host Events'},
            {link: '/krill2/monitoring/history.md', text: 'History'},
            {link: '/krill2/monitoring/host.md', text: 'Host'},
            {link: '/krill2/monitoring/cpe.md', text: 'CPE'},
        ],
    }],
    es: [{
        text: 'Monitoring',
        //collapsible: true,
        children: [
            {link: '/es/krill2/monitoring/alarms.md', text: 'Alarmas'},
            {link: '/es/krill2/monitoring/problems.md', text: 'Problemas'},
            {link: '/es/krill2/monitoring/matrix.md', text: 'Matrix'},
            {link: '/es/krill2/monitoring/host-groups.md', text: 'Grupos de hosts'},
            {link: '/es/krill2/monitoring/sonar.md', text: 'Sónar'},
            {link: '/es/krill2/monitoring/unprovisioned-onus.md', text: 'Onus no provisionadas'},
            {link: '/es/krill2/monitoring/worldmap.md', text: 'Worldmap'},
            {link: '/es/krill2/monitoring/smart-tree.md', text: 'Smart Tree'},
            {link: '/es/krill2/monitoring/cwmp-table.md', text: 'Tabla CWMP'},
            {link: '/es/krill2/monitoring/host-events.md', text: 'Eventos de Hosts'},
            {link: '/es/krill2/monitoring/history.md', text: 'Histórico'},
            {link: '/es/krill2/monitoring/host.md', text: 'Ficha del Host'},
            {link: '/es/krill2/monitoring/cpe.md', text: 'CPE'},
        ]
    }]
}

const customerSidebar = {
    en: [{
        text: 'ISP / Customer',
        //collapsible: true,
        children: [
            {link: '/krill2/isp-customer/customers.md', text: 'Customers'},
            {link: '/krill2/isp-customer/cpes.md', text: 'CPEs'},
            {link: '/krill2/isp-customer/potses.md', text: 'POTSes'},
            {link: '/krill2/isp-customer/cpe-profiles.md', text: 'CPE Profiles'},
            {link: '/krill2/isp-customer/contexts.md', text: 'Contexts'},
        ],
    }],
    es: [{
        text: 'ISP / Clientes',
        //collapsible: true,
        children: [
            {link: '/es/krill2/isp-customer/customers.md', text: 'Clientes'},
            {link: '/es/krill2/isp-customer/cpes.md', text: 'CPEs'},
            {link: '/es/krill2/isp-customer/potses.md', text: 'POTSes'},
            {link: '/es/krill2/isp-customer/cpe-profiles.md', text: 'Perfiles de CPE'},
            {link: '/es/krill2/isp-customer/contexts.md', text: 'Contextos'},
        ]
    }]
}

const pbxSidebar = {
    en: [{
        text: 'PBXs',
        //collapsible: true,
        children: [
            {link: '/krill2/pbx/pbxs.md', text: 'PBXs'},
            {link: '/krill2/pbx/cdrs.md', text: 'CDRs'},
            {link: '/krill2/pbx/holidays.md', text: 'Holidays'},
            {link: '/krill2/pbx/contexts.md', text: 'Contexts'},
        ],
    }],
    es: [{
        text: 'PBXs',
        //collapsible: true,
        children: [
            {link: '/es/krill2/pbx/pbxs.md', text: 'PBXs'},
            {link: '/es/krill2/pbx/cdrs.md', text: 'CDRs'},
            {link: '/es/krill2/pbx/holidays.md', text: 'Festivos'},
            {link: '/es/krill2/pbx/contexts.md', text: 'Contextos'},
        ]
    }],
}

const radiusSidebar = {
    en: [{
        text: 'Radius',
        // collapsible: true,
        children: [
            {link: '/krill2/radius/sessions.md', text: 'Sessions'},
            {link: '/krill2/radius/ip-pools.md', text: 'IP Pools'},
        ],
    }],
    es: [{
        text: 'Radius',
        // collapsible: true,
        children: [
            {link: '/es/krill2/radius/sessions.md', text: 'Sesiones'},
            {link: '/es/krill2/radius/ip-pools.md', text: 'Pools de IPs'},
        ]
    }],
}

const rubikSidebar = {
    en: [{
        text: 'Rubik',
        // collapsible: true,
        children: [
            {link: '/krill2/rubik/services.md', text: 'Services'},
            {link: '/krill2/rubik/trouble-tickets.md', text: 'Trouble tickets'},
        ],
    }],
    es: [{
        text: 'Rubik',
        // collapsible: true,
        children: [
            {link: '/es/krill2/rubik/services.md', text: 'Servicios'},
            {link: '/es/krill2/rubik/trouble-tickets.md', text: 'Tickets de incidencias'},
        ]
    }],
}

const ispCliSidebar = {
    en: [{
        text: 'ISP-CLI',
        // collapsible: true,
        children: [
            {link: '/krill2/isp-cli.md', text: 'ISP-CLI'},
        ],
    }],
    es: [{
        text: 'ISP-CLI',
        // collapsible: true,
        children: [
            {link: '/es/krill2/isp-cli.md', text: 'ISP-CLI'},
        ]
    }],
}

const loggerSidebar = {
    en: [{
        text: 'Logger',
        // collapsible: true,
        children: [
            {link: '/krill2/logger/', text: 'Logger'},
        ],
    }],
    es: [{
        text: 'Logger',
        // collapsible: true,
        children: [
            {link: '/es/krill2/logger/', text: 'Logger'},
        ]
    }],
}

const apiSidebar = {
    en: [{
        text: 'API v2',
        // collapsible: true,
        children: [
            {link: '/krill2/api/api-v2.md', text: 'API v2'},
            {link: '/krill2/api/postman.md', text: 'Postman samples'},
        ],
    }],
    es: [{
        text: 'API v2',
        // collapsible: true,
        children: [
            {link: '/es/krill2/api/api-v2.md', text: 'API v2'},
            {link: '/es/krill2/api/postman.md', text: 'Ejemplos postman'},
        ]
    }],
}

const changelogSidebar = {
    en: [{
        text: 'Changelog',
        // collapsible: true,
        children: [
            {link: '/krill2/changelog.md', text: 'Changelog'},
        ],
    }],
    es: [{
        text: 'Novedades',
        // collapsible: true,
        children: [
            {link: '/es/krill2/changelog.md', text: 'Novedades'},
        ]
    }],
}

const main = {
    // en-EN
    en: {
        '/krill2/login': krill2Sidebar.en,
        '/krill2/users': krill2Sidebar.en,
        '/krill2/dashboard': krill2Sidebar.en,
        '/krill2/monitoring/': monitoringSidebar.en,
        '/krill2/isp-customer/': customerSidebar.en,
        '/krill2/pbx/': pbxSidebar.en,
        '/krill2/radius/': radiusSidebar.en,
        '/krill2/rubik/': rubikSidebar.en,
        '/krill2/isp-cli': ispCliSidebar.en,
        '/krill2/api/api-v2': apiSidebar.en,
        '/krill2/changelog': changelogSidebar.en,
    },
    // es-ES
    es: {
        '/es/krill2/login': krill2Sidebar.es,
        '/es/krill2/users': krill2Sidebar.es,
        '/es/krill2/dashboard': krill2Sidebar.es,
        '/es/krill2/monitoring/': monitoringSidebar.es,
        '/es/krill2/isp-customer/': customerSidebar.es,
        '/es/krill2/pbx/': pbxSidebar.es,
        '/es/krill2/radius/': radiusSidebar.es,
        '/es/krill2/rubik/': rubikSidebar.es,
        '/es/krill2/isp-cli': ispCliSidebar.es,
        '/es/krill2/api/api-v2': apiSidebar.es,
        '/es/krill2/changelog': changelogSidebar.es,
    }
}

export const sidebarMenu = {
    items: {
        en: main.en,
        es: main.es
    },
}
