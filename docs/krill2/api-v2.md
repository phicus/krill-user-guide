---
title: API v2
description: REST API v2 Overview.
lang: en-US
sidebar: auto
sidebarDepth: 2
prev: null
next: null
tags:
- krill2
- dashboard
- meta-buscador
- widgets
- menú de usuario
- usuario
- logout
---

# REST API v2 Overview

## Introduction

The [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API v2 allows you to manage Krill objects and resources by HTTP requests.

You can check the technical definition [here (Swagger)](https://apikrill.phicus.es/swagger/v2/).

## Migrating from API v1

The `APIv1` will be active for a while... but you should adapt your client to `APIv2` version.

In this chapter, we assume you have been using `APIv1` only for `cpes`, `customers` and `potses` resources.

Some quick tips to make easier to migrate:
 - prefix for all URLs changes from `/api` to `/api/v2`
 - all resources are now under an app.
 - most of resources are now paginated.
 - probably, you will access by HTTPS.
 - if you need it, auth now may include [OAuth](https://oauth.net/). Please, contact Phicus team for details.

## Listing CPEs, Customers, POTSs.

With v1:

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

With v2

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

Changes about urls and paginated response are the same for `customers` and `potses` resources.

## Hierarchy

Krill's entire REST API is organized under `https://<hostname>/api/v2/`. The URL structure is divided at the root level by some of these applications: isp, pbx, monitoring, auth, me, installer, oratio, rubik and plankton. Within each application exists diferent resources to use.

## Endpoints

### CRM

Endpoint: `/api/v2/isp`

Here you can query, create, modify and delete CRM objects (Customers, CPEs, POTSs).

#### Filtering attributes

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

#### Pagination

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

### PBX management

Endpoint: `/api/v2/pbx`

Here you can query, create, modify and delete PBXv objects (pbxs, recepcionists, groups, queues, ddis, schedules, holidays).

### Monitoring resources

Endpoint: `/api/v2/monitoring`

 - Obtain current status of monitored hosts and services
 - History of changes for them
 - Datasets with monitored metrics
 - Perform actions (reschedule checks, etc.)

###  RADIUS management

Endpoint: `/api/v2/oratio`

PPPoE sessions and IP Pool stats information.

### GPON provision

Endpoint: `/api/v2/gpon`

Realtime information about OLTs, PONs and ONUs provisioned.

### DOCSIS management

Endpoint: `/api/v2/docsis`

Technical information about CMTSs, Macs domains and fiber nodes.

### Rubik resources

Endpoint: `/api/v2/rubik`

Here you can query, create, modify and delete Rubik objects (Addresses, Services, Tickets), for integration with an external CRM.

### Plankton management

Endpoint: `/api/v2/plankton`

Here you can query, create, modify and delete Plankton FTTH Services, for integration with an external CRM.
