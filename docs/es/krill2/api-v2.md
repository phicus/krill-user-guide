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

En este endopint puedes listar, crear, modificar y eliminar los servicios FTTH de Plankton para integrarlos con el CRM.

## Widgest

### Widget Graphs 

Endpoint: `/widgets/graphs/{graphType}/`:

Graph Types:
- `bandwidth`
- `txrx` (GPON tech only)
- `upstream` (DOCSIS tech only)
- `downstream` (DOCSIS tech only)
- `qos` (DOCSIS tech only)

Query Parameters:
- `token` (required): extracted from login API request or from `app_token` browser local storage persistence
- `host_name` (required): host name like `bgt23133` (DOCSIS) or `aca115087` (GPON)
- `realtime` (default: **false**): data from realtime info or from influx history
- `start` (default: **1d**): if not realtime, time period from start of request for data sets
- `end` (default: **0m**): if not realtime, time period to end of request data sets
- `refresh` (default: **60 secs**): if realtime, integer value for refresh interval between requests (in seconds)

Time Periods:
- Time periods are strings with magnitude & unit, like `24h` or `7d`
- Valid units are: `M` for months, `d` for days, `h` for hours and `m` for minutes

Examples:
- Realtime Bandwidth chart for bgt23133 with refresh every 30 secs: `/widgets/graphs/bandwidth/?host_name=bgt23133&realtime=true&refresh=30&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`
- Downstream chart for DOCSIS bgt23133 host for last 7 days: `/widgets/graphs/downstream/?host_name=bgt23133&start=7d&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`
- TxRx chart for GPON aca115087 host for last 24 hours: `/widgets/graphs/txrx/?host_name=aca115087&start=24h&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`

### Widget Device 

Endpoints: `/widgets/device/`:

Query Parameters:
- `token` (required): extracted from login API request or from `app_token` browser local storage persistence
- `host_name` (required): host name like `bgt23133` (DOCSIS) or `aca115087` (GPON)

Examples:
- Device representation for bgt8317: `/widgets/device/?host_name=bgt8317&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`