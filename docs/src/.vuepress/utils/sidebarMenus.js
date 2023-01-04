const krill2Sidebar = {
    en: [
        ['/krill2/login', 'Login'],
        ['/krill2/users', 'Users'],
        ['/krill2/dashboard', 'Dashboard'],
    ],
    es: [
        ['/es/krill2/login', 'Acceso'],
        ['/es/krill2/users', 'Usuarios'],
        ['/es/krill2/dashboard', 'Cuadro de mandos'],
    ]
}

const monitoringSidebar = {
    en: [
        ['/krill2/monitoring/alarms', 'Alarms'],
        ['/krill2/monitoring/problems', 'Problems'],
        ['/krill2/monitoring/matrix', 'Matrix'],
        ['/krill2/monitoring/host-groups', 'Host Groups'],
        ['/krill2/monitoring/sonar', 'Sonar'],
        ['/krill2/monitoring/unprovisioned-onus', 'Unprovisioned Onus'],
        ['/krill2/monitoring/worldmap', 'Worldmap'],
        ['/krill2/monitoring/smart-tree', 'Smart Tree'],
        ['/krill2/monitoring/cwmp-table', 'CWMP Table'],
        ['/krill2/monitoring/host-events', 'Host Events'],
        ['/krill2/monitoring/history', 'History'],
        ['/krill2/monitoring/host', 'Host'],
    ],
    es: [
        ['/es/krill2/monitoring/alarms', 'Alarmsa'],
        ['/es/krill2/monitoring/problems', 'Problemas'],
        ['/es/krill2/monitoring/matrix', 'Matrix'],
        ['/es/krill2/monitoring/host-groups', 'Grupos de hosts'],
        ['/es/krill2/monitoring/sonar', 'Sónar'],
        ['/es/krill2/monitoring/unprovisioned-onus', 'Onus no provisionadas'],
        ['/es/krill2/monitoring/worldmap', 'Worldmap'],
        ['/es/krill2/monitoring/smart-tree', 'Smart Tree'],
        ['/es/krill2/monitoring/cwmp-table', 'Tabla CWMP'],
        ['/es/krill2/monitoring/host-events', 'Eventos de Hosts'],
        ['/es/krill2/monitoring/history', 'Histórico'],
        ['/es/krill2/monitoring/host', 'Ficha'],
    ]
}

const customerSidebar = {
    en: [
        ['/krill2/isp-customer/customers', 'Customers'],
        ['/krill2/isp-customer/cpes', 'CPEs'],
        ['/krill2/isp-customer/potses', 'POTSes'],
        ['/krill2/isp-customer/cpe-profiles', 'CPE Profiles'],
        ['/krill2/isp-customer/contexts', 'Contexts'],
    ],
    es: [
        ['/es/krill2/isp-customer/customers', 'Clientes'],
        ['/es/krill2/isp-customer/cpes', 'CPEs'],
        ['/es/krill2/isp-customer/potses', 'POTSes'],
        ['/es/krill2/isp-customer/cpe-profiles', 'Perfiles de CPE'],
        ['/es/krill2/isp-customer/contexts', 'Contextos'],
    ]
}

const pbxSidebar = {
    en: [
        ['/krill2/pbx/pbxs', 'PBXs'],
        ['/krill2/pbx/cdrs', 'CDRs'],
        ['/krill2/pbx/holidays', 'Holidays'],
        ['/krill2/pbx/contexts', 'Contexts'],
    ],
    es: [
        ['/es/krill2/pbx/pbxs', 'PBXs'],
        ['/es/krill2/pbx/cdrs', 'CDRs'],
        ['/es/krill2/pbx/holidays', 'Festivos'],
        ['/es/krill2/pbx/contexts', 'Contextos'],
    ]
}

const radiusSidebar = {
    en: [
        ['/krill2/radius/sessions', 'Sessions'],
        ['/krill2/radius/ip-pools', 'IP Pools'],
    ],
    es: [
        ['/es/krill2/radius/sessions', 'Sesiones'],
        ['/es/krill2/radius/ip-pools', 'Pools de IPs'],
    ]
}

const rubikSidebar = {
    en: [
        ['/krill2/rubik/services', 'Services'],
        ['/krill2/rubik/trouble-tickets', 'Trouble tickets'],
    ],
    es: [
        ['/es/krill2/rubik/services', 'Servicios'],
        ['/es/krill2/rubik/trouble-tickets', 'Tickets de incidencias'],
    ]
}

const ispCliSidebar = {
    en: [
        ['/krill2/isp-cli', 'ISP-CLI'],
    ],
    es: [
        ['/es/krill2/isp-cli', 'ISP-CLI'],
    ]
}

const main = {
    // en-EN
    '/krill2/login': krill2Sidebar.en,
    '/krill2/users': krill2Sidebar.en,
    '/krill2/dashboard': krill2Sidebar.en,
    '/krill2/monitoring/': monitoringSidebar.en,
    '/krill2/monitoring/alarms.html': monitoringSidebar.en,
    '/krill2/monitoring/problems.html': monitoringSidebar.en,
    '/krill2/monitoring/matrix.html': monitoringSidebar.en,
    '/krill2/monitoring/host-groups.html': monitoringSidebar.en,
    '/krill2/monitoring/sonar.html': monitoringSidebar.en,
    '/krill2/monitoring/unprovisioned-onus.html': monitoringSidebar.en,
    '/krill2/monitoring/worldmap.html': monitoringSidebar.en,
    '/krill2/monitoring/smart-tree.html': monitoringSidebar.en,
    '/krill2/monitoring/host-events.html': monitoringSidebar.en,
    '/krill2/monitoring/history.html': monitoringSidebar.en,
    '/krill2/isp-customer/': customerSidebar.en,
    '/krill2/isp-customer/customers': customerSidebar.en,
    '/krill2/isp-customer/cpes': customerSidebar.en,
    '/krill2/isp-customer/potses': customerSidebar.en,
    '/krill2/isp-customer/cpe-profiles': customerSidebar.en,
    '/krill2/isp-customer/contexts': customerSidebar.en,
    '/krill2/pbx/': pbxSidebar.en,
    '/krill2/pbx/pbxs': pbxSidebar.en,
    '/krill2/pbx/cdrs': pbxSidebar.en,
    '/krill2/pbx/holidays': pbxSidebar.en,
    '/krill2/pbx/contexts': pbxSidebar.en,
    '/krill2/radius/': radiusSidebar.en,
    '/krill2/radius/sessions': radiusSidebar.en,
    '/krill2/radius/ip-pools': radiusSidebar.en,
    '/krill2/rubik/': rubikSidebar.en,
    '/krill2/rubik/services': rubikSidebar.en,
    '/krill2/rubik/trouble-tickets': rubikSidebar.en,
    '/krill2/isp-cli': ispCliSidebar.en,
    // es-ES
    '/es/krill2/login': krill2Sidebar.es,
    '/es/krill2/users': krill2Sidebar.es,
    '/es/krill2/dashboard': krill2Sidebar.es,
    '/es/krill2/monitoring/': monitoringSidebar.es,
    '/es/krill2/monitoring/alarms.html': monitoringSidebar.es,
    '/es/krill2/monitoring/problems.html': monitoringSidebar.es,
    '/es/krill2/monitoring/matrix.html': monitoringSidebar.es,
    '/es/krill2/monitoring/host-groups.html': monitoringSidebar.es,
    '/es/krill2/monitoring/sonar.html': monitoringSidebar.es,
    '/es/krill2/monitoring/unprovisioned-onus.html': monitoringSidebar.es,
    '/es/krill2/monitoring/worldmap.html': monitoringSidebar.es,
    '/es/krill2/monitoring/smart-tree.html': monitoringSidebar.es,
    '/es/krill2/monitoring/host-events.html': monitoringSidebar.es,
    '/es/krill2/monitoring/history.html': monitoringSidebar.es,
    '/es/krill2/isp-customer/': customerSidebar.es,
    '/es/krill2/isp-customer/customers': customerSidebar.es,
    '/es/krill2/isp-customer/cpes': customerSidebar.es,
    '/es/krill2/isp-customer/potses': customerSidebar.es,
    '/es/krill2/isp-customer/cpe-profiles': customerSidebar.es,
    '/es/krill2/isp-customer/contexts': customerSidebar.es,
    '/es/krill2/pbx/': pbxSidebar.es,
    '/es/krill2/pbx/pbxs': pbxSidebar.es,
    '/es/krill2/pbx/cdrs': pbxSidebar.es,
    '/es/krill2/pbx/holidays': pbxSidebar.es,
    '/es/krill2/pbx/contexts': pbxSidebar.es,
    '/es/krill2/radius/': radiusSidebar.es,
    '/es/krill2/radius/sessions': radiusSidebar.es,
    '/es/krill2/radius/ip-pools': radiusSidebar.es,
    '/es/krill2/rubik/': rubikSidebar.es,
    '/es/krill2/rubik/services': rubikSidebar.es,
    '/es/krill2/rubik/trouble-tickets': rubikSidebar.es,
    '/es/krill2/isp-cli': ispCliSidebar.es,

    //'/change-log/': getChildrenSidebar('../../change-log/'),
    //'/es/change-log/': getChildrenSidebar('../../es/change-log/'),
}

module.exports = {
    items: {
        en: main,
        es: main
    },
}
