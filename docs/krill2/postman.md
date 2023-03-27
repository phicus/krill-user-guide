---
title: API v2 - Postman
description: Postman REST API v2 samples.
lang: en-US
sidebar: auto
sidebarDepth: 2
prev: api-v2
next: null
tags:
- krill2
- api
- postman
---

# Postman REST API v2 samples
## Consultar un cpe por su external_id y obtener su id

Método: **GET**

URL: `/api/v2/isp/cpes/?external_id={external_id}&realm={realm}`

Los parámetros: `external_id`, `realm`, son opcionales y nos permiten acotar la lista de resultados. Es decir, si ponemos solamente el valor del `realm`, obtendremos un listado paginado con todos los CPEs de ese Realm.

Respuesta (Ejemplo: `/api/v2/isp/cpes/?external_id=pim0585&realm=pim`)):
```
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 585,
      "access": true,
      "address": "",
      "active": true,
      "address_profile": "public",
      "bridge": false,
      "city": "",
      "country": "",
      "cpename": "pim0585",
      "created": "2023-02-08T10:53:20+01:00",
      "customer": 848,
      "disable_provision": false,
      "disable_reconfig": false,
      "expiration_date": null,
      "dsn": null,
      "enable_notifications": false,
      "external_id": "pim0585",
      "external_voip": false,
      "fixed_address": null,
      "has_tr069": true,
      "internal_id": "pim0585",
      "latitude": "38.0124867",
      "line_profile": "residential",
      "locality": "",
      "longitude": "-1.1699524",
      "mac": null,
      "model": "HS8145V",
      "mtamac": null,
      "notes": "",
      "postalcode": null,
      "probe": false,
      "pppoe_password": "",
      "pppoe_username": "",
      "profile": 8,
      "realm": "pim",
      "remote_id": null,
      "sn": "48575443614711a7",
      "tech": "gpon",
      "tech_updated": "2023-02-17T11:11:19+01:00",
      "topology": "",
      "tv_profile": null,
      "updated": "2023-02-17T11:11:19+01:00",
      "voip_profile": null,
      "wanmac": null,
      "me_vlan": null,
      "lan_cidr": null,
      "wifi_password": "",
      "wifi_profile": null,
      "wifi_ssid": "",
      "_links": {
        "actions": {
          "reboot": "/api/v2/isp/cpes/585/reboot",
          "unprovision": "/api/v2/isp/cpes/585/unprovision",
          "reprovision": "/api/v2/isp/cpes/585/reprovision",
          "factory": "/api/v2/isp/cpes/585/factory",
          "reconfig": "/api/v2/isp/cpes/585/reconfig",
          "diagnostic": "/api/v2/isp/cpes/585/cwmp_diagnostic"
        },
        "links": {
          "customer": "/api/v2/isp/cpes/585/customer",
          "profile": "/api/v2/isp/cpes/585/profile",
          "model": "/api/v2/isp/cpes/585/model",
          "potses": "/api/v2/isp/cpes/585/potses",
          "events": "/api/v2/isp/cpes/585/events",
          "cdrs": "/api/v2/isp/cpes/585/events?type=cdr",
          "logs": "/api/v2/isp/cpes/585/logs",
          "livestatus": "/api/v2/isp/cpes/585/livestatus",
          "links": "/api/v2/isp/cpes/585/links",
          "info": "/api/v2/isp/cpes/585/info",
          "cwmp_info": "/api/v2/isp/cpes/585/cwmp_info"
        }
      },
      "_services": [
        "provision",
        "tr069",
        "dhcp",
        "txrx"
      ],
      "is_router": true,
      "avatar": "HG4101",
      "tr069": true
    }
  ]
}
```
![image](https://user-images.githubusercontent.com/32762171/227165507-02c91d57-8bed-4010-874c-1d90d0b7776b.png)
