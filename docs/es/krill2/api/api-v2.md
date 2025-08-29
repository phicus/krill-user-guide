---
title: API v2
description: Visión general de la API REST v2.
lang: es-ES
sidebar: auto
sidebarDepth: 2
prev: null
next: postman
tags:
- krill2
- api
---

# Visión general de la API REST v2

## Introducción

La [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API v2 te permite controlar los recursos y objetos de Krill mediante peticiones HTTP.

Puedes consultar las definiciones técnicas en [Swagger](https://apikrill.phicus.es/swagger/v2/).

## Migrar desde la API v1

La `APIv1` va a permanecer activa durante un tiempo... pero debéis tratar de adaptar el cliente API a la nueva versión `V2`.

En este apartado asumimos que ya estáis haciendo uso del `APIv1` para manejar los recursos referentes a `CPE`, `CUSTOMER` y `POTSES`.

Algunos consejos para agilizar la migración:
- El prefijo para todas las URLs cambia de `/api` a `/api/v2`.
- Todos los recursos están ahora bajo una APP.
- La mayoría de los recursos están ahora paginados.
- Es altamente probable que debas entrar por HTTPS en vez de HTTP.
- Si lo requerís, el acceso ahora es posible por método [OAuth](https://oauth.net/). Si estás interesado contacta con el equipo de Phicus.

## Listando CPEs, Customers y POTSes.

Con API v1:

```bash
GET api/cpes/?sn=0000deadbeef0000

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 876
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:36:36 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

[
    {
        "access": true,
        "active": true,
        "address": "",
        "address_profile": null,
        "bridge": false,
        "city": "",
        "country": null,
        "cpename": "pim0350",
        "created": "2022-12-17T23:00:01+01:00",
        "customer": 27,
        "disable_provision": false,
        "disable_reconfig": false,
        "dsn": null,
        "enable_notifications": false,
        "expiration_date": null,
        "external_id": null,
        "external_voip": false,
        "fixed_address": null,
        "has_tr069": true,
        "id": 350,
        "internal_id": "pim0350",
        "lan_cidr": null,
        "latitude": null,
        "line_profile": null,
        "longitude": null,
        "mac": null,
        "me_vlan": null,
        "model": "HG8245H",
        "mtamac": null,
        "notes": "",
        "postalcode": null,
        "pppoe_password": "",
        "pppoe_username": null,
        "probe": false,
        "profile": 7,
        "realm": "pim",
        "remote_id": null,
        "sn": "0000deadbeef0000",
        "tech": "gpon",
        "tech_updated": null,
        "topology": "",
        "tv_profile": null,
        "updated": "2022-12-17T23:00:01+01:00",
        "voip_profile": null,
        "wanmac": null,
        "wifi_password": "",
        "wifi_profile": null,
        "wifi_ssid": ""
    }
]
```

Con v2

```bash
GET api/v2/isp/cpes/?sn=0000deadbeef0000

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 1704
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:36:49 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "_links": {
                "actions": {
                    "diagnostic": "/api/v2/cpes/350/cwmp_diagnostic",
                    "factory": "/api/v2/cpes/350/factory",
                    "reboot": "/api/v2/cpes/350/reboot",
                    "reconfig": "/api/v2/cpes/350/reconfig",
                    "reprovision": "/api/v2/cpes/350/reprovision",
                    "unprovision": "/api/v2/cpes/350/unprovision"
                },
                "links": {
                    "cdrs": "/api/v2/cpes/350/events?type=cdr",
                    "customer": "/api/v2/cpes/350/customer",
                    "cwmp_info": "/api/v2/cpes/350/cwmp_info",
                    "events": "/api/v2/cpes/350/events",
                    "info": "/api/v2/cpes/350/info",
                    "links": "/api/v2/cpes/350/links",
                    "livestatus": "/api/v2/cpes/350/livestatus",
                    "logs": "/api/v2/cpes/350/logs",
                    "model": "/api/v2/cpes/350/model",
                    "potses": "/api/v2/cpes/350/potses",
                    "profile": "/api/v2/cpes/350/profile"
                }
            },
            "_services": [
                "provision",
                "txrx",
                "dhcp",
                "tr069"
            ],
            "access": true,
            "active": true,
            "address": "",
            "address_profile": null,
            "avatar": "HG4201",
            "bridge": false,
            "city": "",
            "country": null,
            "cpename": "pim0350",
            "created": "2022-12-17T23:00:01+01:00",
            "customer": 27,
            "disable_provision": false,
            "disable_reconfig": false,
            "dsn": null,
            "enable_notifications": false,
            "expiration_date": null,
            "external_id": null,
            "external_voip": false,
            "fixed_address": null,
            "has_tr069": true,
            "id": 350,
            "internal_id": "pim0350",
            "is_router": true,
            "lan_cidr": null,
            "latitude": null,
            "line_profile": null,
            "longitude": null,
            "mac": null,
            "me_vlan": null,
            "model": "HG8245H",
            "mtamac": null,
            "notes": "",
            "postalcode": null,
            "pppoe_password": "",
            "pppoe_username": null,
            "probe": false,
            "profile": 7,
            "realm": "pim",
            "remote_id": null,
            "sn": "0000deadbeef0000",
            "tech": "gpon",
            "tech_updated": null,
            "topology": "",
            "tr069": true,
            "tv_profile": null,
            "updated": "2022-12-17T23:00:01+01:00",
            "voip_profile": null,
            "wanmac": null,
            "wifi_password": "",
            "wifi_profile": null,
            "wifi_ssid": ""
        }
    ]
}

```

Los cambios sobre las URLs y la paginación en cuanto a las respuestas para `customers` y `potses` son los mismos.

## Jerarquía

La API-REST de Krill está organizada bajo `https://<hostname>/api/v2/`. La estructura de las URLs está dividida por aplicación o módulo para estas aplicaciones, accediendo desde el módulo inicial/root: isp, pbx, monitoring, auth, me, installer, oratio, rubik and plankton. Dentro de cada aplicación existen diferentes recursos disponibles..

## Endpoints

### CRM

Endpoint: `/api/v2/isp`

En este endpoint puedes listar, crear, modificar y eliminar los objetos que el CRM maneja: Customers, CPEs, POTSes.

#### Filtrando atributos

```bash
GET api/v2/isp/cpes/74/?attrs=id,cpename

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 29
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:53:01 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "cpename": "pim0074",
    "id": 74
}
```

#### Joins

```bash
GET api/v2/isp/cpes/74/?attrs=id&joins==customer,potses

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 327
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:54:07 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "customer": {
        "address": "Calle Bolivia nº 21 3ºB",
        "city": "Coslada, Madrid",
        "comment": "",
        "country": "Spain",
        "created": "2019-11-08T15:57:08+01:00",
        "external_id": null,
        "id": 65,
        "latitude": null,
        "longitude": null,
        "name": "Incredulo",
        "postalcode": null,
        "realm": "pim",
        "surname": "Trotamundos",
        "updated": "2019-11-08T15:57:08+01:00"
    },
    "id": 74,
    "potses": [
        {
            "cli": null,
            "context": null,
            "contextname": null,
            "custom_digitmap": null,
            "dtmf": "auto",
            "id": 138,
            "label": null,
            "language": null,
            "lineid": "pim0074-1",
            "order": 1,
            "password": null,
            "pbx_extension": false,
            "username": null,
            "voicemail": false,
            "voicemail_password": null
        },
        {
            "cli": null,
            "context": null,
            "contextname": null,
            "custom_digitmap": null,
            "dtmf": "auto",
            "id": 139,
            "label": null,
            "language": null,
            "lineid": "pim0074-2",
            "order": 2,
            "password": null,
            "pbx_extension": false,
            "username": null,
            "voicemail": false,
            "voicemail_password": null
        }
    ]
}
```

#### Paginación

```bash
GET api/v2/isp/cpes/?attrs=id&offset=42&limit=3
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 202
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:56:13 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "count": 158,
    "next": "http://pre1:4280/api/v2/isp/cpes/?attrs=id&limit=3&offset=45",
    "previous": "http://pre1:4280/api/v2/isp/cpes/?attrs=id&limit=3&offset=39",
    "results": [
        {
            "id": 119
        },
        {
            "id": 121
        },
        {
            "id": 123
        }
    ]
}
```

### Manejo de PBX

Endpoint: `/api/v2/pbx`

En este endpoint puedes listar, crear, modificar y eliminar los objetos relacionados con la PBXv: (pbxs, recepcionists, groups, queues, ddis, schedules, holidays).

### Monitorización de equipos y servicios

Endpoint: `/api/v2/monitoring`

- Obtener el estado actual de los hosts y servicios monitorizados por Krill
- Histórico de cambios sobre los hosts y servicios
- Datasets con las gráficas generadas por la monitorización
- Llevar a cabo acciones como reschedule, checks, etc

###  Gestión RADIUS

Endpoint: `/api/v2/oratio`

Sesiones PPPoE e información sobre el estado de los Pools de IP.

### Provisión GPON

Endpoint: `/api/v2/gpon`

Información en tiempo real sobre las OLTs, PONs, ONUs provisionados.

### Gestión DOCSIS

Endpoint: `/api/v2/docsis`

Información técnica sobre CMTSs, Mac domains y fiber-nodes.

### Recursos Rubik

Endpoint: `/api/v2/rubik`

Here you can query, create, modify and delete Rubik objects (Addresses, Services, Tickets), for integration with an external CRM.

### Gestión de Plankton

Endpoint: `/api/v2/plankton`

En este endpoint puedes listar, crear, modificar y eliminar los servicios FTTH de Plankton para integrarlos con el CRM.


#### Ejemplos de consultas a la API

### Obtener los cpe con un pondesv mayor o igual a 2

```bash
http --stream -a usuario:contraseña krill.phicus.es:4780/api/v2/monitoring/search type==Service perfdata.pondesv__gt==2 -->
 {
            "attrs": {
                "acknowledged": 0,
                "acknowledgement": 0,
                "address": "",
                "alarm": 0,
                "business_impact": 1,
                "check_attempt": 1,
                "check_command": "check_txrx",
                "check_interval": 604800,
                "check_period": "",
                "downtime": 0,
                "downtime_depth": 0,
                "downtimed": 0,
                "enable_active_checks": 0,
                "enable_passive_checks": 1,
                "flap_detection_enabled": 0,
                "handled": 1,
                "has_been_checked": 1,
                "host_name": "cpe25365",
                "is_flapping": 0,
                "last_check": "2025-08-07T20:47:57.982000-05:00",
                "last_hard_state": 0,
                "last_hard_state_change": "2025-08-06T20:48:05-05:00",
                "last_state_change": "2025-08-06T20:48:05-05:00",
                "latency": 982,
                "long_output": null,
                "max_check_attempts": 1,
                "next_check": "2025-08-14T20:47:57.982000-05:00",
                "output": "pondesv=2.32 > 2.00!",
                "perfdata": [
                    {
                        "critical": -8.0,
                        "max": 5.0,
                        "min": -49.0,
                        "name": "dnrx",
                        "uom": "",
                        "value": -21.55,
                        "warning": -11.0
                    },
                    {
                        "critical": 16.0,
                        "max": 15.0,
                        "min": -10.0,
                        "name": "uptx",
                        "uom": "",
                        "value": 2.67,
                        "warning": 15.0
                    },
                    {
                        "critical": -9.0,
                        "max": 5.0,
                        "min": -49.0,
                        "name": "uprx",
                        "uom": "",
                        "value": -24.95,
                        "warning": -12.0
                    },
                    {
                        "critical": 50.0,
                        "max": 60.0,
                        "min": 1.0,
                        "name": "dnatt",
                        "uom": "",
                        "value": 26.61,
                        "warning": 30.0
                    },
                    {
                        "critical": 50.0,
                        "max": 60.0,
                        "min": 1.0,
                        "name": "upatt",
                        "uom": "",
                        "value": 27.62,
                        "warning": 30.0
                    },
                    {
                        "critical": 4.0,
                        "max": 10.0,
                        "min": -10.0,
                        "name": "pondesv",
                        "uom": "",
                        "value": 2.32,
                        "warning": 2.0
                    }
                ],
                "problem": 1,
                "retry_interval": 60,
                "service_name": "txrx",
                "severity": 1056,
                "state": 1,
                "state_long": "warning",
                "state_type": 1,
                "vars": {
                    "administrative_info": {
                        "access": false,
                        "actions": [
                            "diagnostic",
                            "factory",
                            "reboot",
                            "reconfig",
                            "reprovision",
                            "unprovision"
                        ],
                        "active": true,
                        "address":
                        "address_profile":
                        "customer_address":
                        "customer_external_id":
                        "customer_name":
                        "external_voip": false,
                        "id": 25365,
                        "latitude": 10.414488,
                        "line_profile": "residential",
                        "longitude": -75.502681,
                        "model": "G-0425G-C",
                        "potses": [],
                        "profile_downstream": "400M",
                        "profile_name": "400 MB",
                        "profile_upstream": "400M",
                        "realm": "cpe",
                        "services": [
                            "dhcp",
                            "provision",
                            "tr069",
                            "txrx"
                        ],
                        "sn": "414c434cfcc55390",
                        "tech": "gpon",
                        "tr069": true,
                        "vendor": "ALCL"
                    },
                    "business_impact": 1,
                    "cpe_registration_host": "OLT1",
                    "cpe_registration_id": "0/7/7-35",
                    "cpe_registration_state": "dyinggasp",
                    "cpe_registration_tags": "OLT01-0/7/7",
                    "model": "G-0425G-C",
                    "search": " ",
                    "type": "cpe",
                    "vendor": "ALCL"
                }
            },
            "joins": {},
            "meta": {},
            "name": "cpe25365!txrx",
            "type": "Service"
        },
```

### Para buscar cpe con problemas
```bash
http --stream -a usuario:contraseña krill.phicus.es:4780/api/v2/monitoring/search type==Service perfdata.pondesv__gt==2 | jq '.results[] | {cpe: .name, olt: .attrs.vars.cpe_registration_host}'
{
  "cpe": "cpe41385!txrx",
  "olt": "OLT04"
}
{
  "cpe": "cpe7819!txrx",
  "olt": "OLT03"
}
{
  "cpe": "cpe0482!txrx",
  "olt": "OLT03"
}
```

### Equipos con alguna alarma de Tx/Rx

```bash
krill.phicus.es:4780/api/v2/monitoring/search type==Host regstate==alarmhttp --stream -a usuario:contraseña
 {
            "attrs": {
                "acknowledged": 0,
                "acknowledgement": 0,
                "address": "",
                "alarm": 1,
                "business_impact": 1,
                "check_attempt": 1,
                "check_command": "check_cpe",
                "check_interval": 86400,
                "check_period": "",
                "downtime": 0,
                "downtime_depth": 0,
                "downtimed": 0,
                "enable_active_checks": 1,
                "enable_passive_checks": 1,
                "flap_detection_enabled": 0,
                "handled": 0,
                "has_been_checked": 1,
                "host_name": "cpe13812",
                "is_flapping": 0,
                "last_check": "2025-08-08T06:27:09.854000-05:00",
                "last_hard_state": 0,
                "last_hard_state_change": "2025-08-07T17:07:06-05:00",
                "last_state_change": "2025-08-07T17:07:06-05:00",
                "latency": 854,
                "long_output": null,
                "max_check_attempts": 1,
                "next_check": "2025-08-09T06:27:09.854000-05:00",
                "output": "alarm/losi/offline OLT01:0/13/6-6 0.0.0.0",
                "perfdata": [
                    {
                        "critical": null,
                        "max": null,
                        "min": null,
                        "name": "dnbw",
                        "uom": "",
                        "value": 0.0,
                        "warning": null
                    },
                    {
                        "critical": null,
                        "max": null,
                        "min": null,
                        "name": "upbw",
                        "uom": "",
                        "value": 0.0,
                        "warning": null
                    }
                ],
                "problem": 1,
                "retry_interval": 60,
                "service_name": "",
                "severity": 2112,
                "state": 1,
                "state_long": "down",
                "state_type": 1,
                "vars": {
                    "administrative_info": {
                        "access": true,
                        "actions": [
                            "diagnostic",
                            "factory",
                            "reboot",
                            "reconfig",
                            "reprovision",
                            "unprovision"
                        ],
                        "active": true,
                        "address": "",
                        "address_profile": "nat",
                        "customer_address": "",
                        "customer_external_id": "30116",
                        "customer_name": "",
                        "external_voip": false,
                        "id": 13812,
                        "latitude": 10.415303,
                        "line_profile": "residential",
                        "longitude": -75.457082,
                        "model": "EG8145V5",
                        "potses": [],
                        "profile_downstream": "400M",
                        "profile_name": "400 MB",
                        "profile_upstream": "400M",
                        "realm": "cpe",
                        "services": [
                            "dhcp",
                            "provision",
                            "tr069",
                            "txrx"
                        ],
                        "sn": "4857544316d237a1",
                        "tech": "gpon",
                        "tr069": true,
                        "vendor": "Huawei"
                    },
                    "business_impact": 1,
                    "cpe_registration_host": "OLT01",
                    "cpe_registration_id": "0/13/6-6",
                    "cpe_registration_state": "alarm",
                    "cpe_registration_tags": "OLT01-0/13/6",
                    "model": "EG8145V5",
                    "search": "",
                    "type": "cpe",
                    "vendor": "Huawei"
                }
            },
            "joins": {},
            "meta": {},
            "name": "cpe13812",
            "type": "Host"
        },
```

### Para revisar cpe alarmados por OLT concreta

```bash
http --stream -a usuario:contraseña krill.phicus.es:4780/api/v2/monitoring/search type==Host regstate==alarm regtag==CAR-OLT02-0/3/9
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "attrs": {
                "acknowledged": 0,
                "acknowledgement": 0,
                "address": "",
                "alarm": 1,
                "business_impact": 1,
                "check_attempt": 1,
                "check_command": "check_cpe",
                "check_interval": 86400,
                "check_period": "",
                "downtime": 0,
                "downtime_depth": 0,
                "downtimed": 0,
                "enable_active_checks": 1,
                "enable_passive_checks": 1,
                "flap_detection_enabled": 0,
                "handled": 0,
                "has_been_checked": 1,
                "host_name": "cpe40250",
                "is_flapping": 0,
                "last_check": "2025-08-08T06:01:38.842000-05:00",
                "last_hard_state": 0,
                "last_hard_state_change": "2025-08-08T06:01:38-05:00",
                "last_state_change": "2025-08-08T06:01:38-05:00",
                "latency": 842,
                "long_output": null,
                "max_check_attempts": 1,
                "next_check": "2025-08-09T06:01:38.842000-05:00",
                "output": "alarm/losi/offline OLT02:0/3/9-15 0.0.0.0",
                "perfdata": [
                    {
                        "critical": null,
                        "max": null,
                        "min": null,
                        "name": "dnbw",
                        "uom": "",
                        "value": 0.0,
                        "warning": null
                    },
                    {
                        "critical": null,
                        "max": null,
                        "min": null,
                        "name": "upbw",
                        "uom": "",
                        "value": 0.0,
                        "warning": null
                    }
                ],
                "problem": 1,
                "retry_interval": 60,
                "service_name": "",
                "severity": 2112,
                "state": 1,
                "state_long": "down",
                "state_type": 1,
                "vars": {
                    "administrative_info": {
                        "access": true,
                        "actions": [
                            "diagnostic",
                            "factory",
                            "reboot",
                            "reconfig",
                            "reprovision",
                            "unprovision"
                        ],
                        "active": true,
                        "address": "",
                        "address_profile": "nat",
                        "customer_address": "",
                        "customer_external_id": "",
                        "customer_name": "",
                        "external_voip": false,
                        "id": 40250,
                        "latitude": 10.927271,
                        "line_profile": "residential",
                        "longitude": -74.814567,
                        "model": "HG6144F",
                        "potses": [],
                        "profile_downstream": "400M",
                        "profile_name": "400 MB",
                        "profile_upstream": "400M",
                        "realm": "cpe",
                        "services": [
                            "dhcp",
                            "provision",
                            "tr069",
                            "txrx"
                        ],
                        "sn": "464854549ca50778",
                        "tech": "gpon",
                        "tr069": true,
                        "vendor": "FiberHome"
                    },
                    "business_impact": 1,
                    "cpe_registration_host": "OLT02",
                    "cpe_registration_id": "0/3/9-15",
                    "cpe_registration_state": "alarm",
                    "cpe_registration_tags": "OLT02-0/3/9",
                    "model": "HG6144F",
                    "search": "",
                    "type": "cpe",
                    "vendor": "FiberHome"
                }
            },
            "joins": {},
            "meta": {},
            "name": "cpe40250",
            "type": "Host"
        }
    ]
}
```

### Obtener registration ID directo (PON con numero de ONT)

```bash
http --stream -a usuario:contraseña krill.phicus.es:4780/api/v2/monitoring/search type==Host regstate==alarm regtag==CAR-OLT02-0/3/9 | jq '.results[] | {regid: .attrs.vars.cpe_registration_id}'
{
  "regid": "0/3/9-15"
}
``` 

### Otros ejemplos de consulta al monitoring

```bash
http --stream -a usuario:contraseña krill.phicus.es:4780/api/v2/monitoring/search type==Host reghost==SMR-OLT03 limit==1
http --stream -a usuario:contraseña krill.phicus.es:4780/api/v2/monitoring/search type==Host reghost==SMR-OLT03 limit==1

{
    "count": 1732,
    "next": "http://krill.phicus.es:4780/api/v2/monitoring/search?limit=1&offset=1&reghost=SMR-OLT03&type=Host",
    "previous": null,
    "results": [
        {
            "attrs": {
                "acknowledged": 0,
                "acknowledgement": 0,
                "address": "",
                "alarm": 0,
                "business_impact": 1,
                "check_attempt": 1,
                "check_command": "check_cpe",
                "check_interval": 86400,
                "check_period": "",
                "downtime": 0,
                "downtime_depth": 0,
                "downtimed": 0,
                "enable_active_checks": 1,
                "enable_passive_checks": 1,
                "flap_detection_enabled": 0,
                "handled": 0,
                "has_been_checked": 1,
                "host_name": "cpe18838",
                "is_flapping": 0,
                "last_check": "2025-08-08T09:23:21.265000-05:00",
                "last_hard_state": 1,
                "last_hard_state_change": "2025-08-01T18:13:20-05:00",
                "last_state_change": "2025-08-01T18:13:20-05:00",
                "latency": 265,
                "long_output": null,
                "max_check_attempts": 1,
                "next_check": "2025-08-09T09:23:21.265000-05:00",
                "output": "online OLT03:0/14/3-7 0.0.0.0",
                "perfdata": [
                    {
                        "critical": null,
                        "max": null,
                        "min": null,
                        "name": "dnbw",
                        "uom": "",
                        "value": 923862.3,
                        "warning": null
                    },
                    {
                        "critical": null,
                        "max": null,
                        "min": null,
                        "name": "upbw",
                        "uom": "",
                        "value": 32692.7,
                        "warning": null
                    }
                ],
                "problem": 0,
                "retry_interval": 60,
                "service_name": "",
                "severity": 0,
                "state": 0,
                "state_long": "up",
                "state_type": 1,
                "vars": {
                    "administrative_info": {
                        "access": true,
                        "actions": [
                            "diagnostic",
                            "factory",
                            "reboot",
                            "reconfig",
                            "reprovision",
                            "unprovision"
                        ],
                        "active": true,
                        "address": "",
                        "address_profile": "nat",
                        "customer_address": "",
                        "customer_external_id": "",
                        "customer_name": "",
                        "external_voip": false,
                        "id": 18838,
                        "latitude": 11.249669,
                        "line_profile": "residential",
                        "longitude": -74.172168,
                        "model": "HG6143D",
                        "potses": [],
                        "profile_downstream": "400M",
                        "profile_name": "400 MB",
                        "profile_upstream": "400M",
                        "realm": "cpe",
                        "services": [
                            "dhcp",
                            "provision",
                            "tr069",
                            "txrx"
                        ],
                        "sn": "",
                        "tech": "gpon",
                        "tr069": true,
                        "vendor": "FiberHome"
                    },
                    "business_impact": 1,
                    "cpe_registration_host": "OLT03",
                    "cpe_registration_id": "0/14/3-7",
                    "cpe_registration_state": "online",
                    "cpe_registration_tags": "OLT03-0/14/3",
                    "model": "HG6143D",
                    "search": "",
                    "type": "cpe",
                    "vendor": "FiberHome"
                }
            },
            "joins": {},
            "meta": {},
            "name": "cpe",
            "type": "Host"
        }
    ]
}
```
### Filtro para sacar cpe y serial

```bash
http --stream -a usuario:contraseña krill.phicus.es:4780/api/v2/monitoring/search type==Host reghost==SMR-OLT03 limit==1 | jq '.results[] | {name: .name, sn: .attrs.vars.administrative_info.sn}'
{
  "name": "cpe18838",
  "sn": "4648545497b054c0"
}
```
