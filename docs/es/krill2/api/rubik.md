---
title: Rubik API v2
description: Visión general de la API REST v2 de Rubik.
lang: es-ES
sidebar: auto
sidebarDepth: 2
prev: null
next: null
tags:
  - krill2
  - api
  - rubik
---

# Visión general de la API REST v2 de Rubik.

## Introducción

La [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API de Rubik te permite controlar los recursos
y objetos de Rubik mediante peticiones HTTP.

Puedes consultar las definiciones técnicas en [Swagger](https://apikrill.phicus.es/swagger/v2/).

::: tip Algunos puntos de interés:

- El prefijo para todas las URLs es **`/api/v2/rubik`**.
- La mayoría de los recursos de obtención de datos están paginados.
- Se debe entrar por HTTPS en vez de HTTP.
- Si lo requerís, el acceso ahora es posible por método [OAuth](https://oauth.net/). Si estás interesado contacta con el
  equipo de Phicus.
  :::

## Endpoints


### Consulta de cobertura

La consulta de cobertura, a su vez, se descompone en varias fases:

1. [Búsqueda de la dirección del cliente hasta el número de la calle o tipo de dirección (plaza, avenida, etc).](#busqueda-de-direccion)
2. [Búsqueda de la vivienda del cliente, especificando portal, piso, puerta, etc.](#busqueda-de-vivienda)
3. [Si el **owner** que da servicio necesita especificar el tipo de producto que se va a tramitar, solicitamos los disponibles.](#busqueda-de-productos)
4. [Verificamos que para la dirección, vivienda y producto especificado hay cobertura.](#verificacion-de-cobertura) 

##### Búsqueda de dirección

Para buscar las direcciones posibles de un cliente debemos realizar una petición de tipo GET al endpoint: **`/api/v2/rubik/addresses/`** pasándole algunos de los siguientes *query params* disponibles para poder acotar los resultados:

* **`city`**: Ciudad
* **`country`**: País
* **`locality`**: Localidad o barrio
* **`postCode`**: Código postal
* **`stateOrProvince`**: Estado o provincia
* **`streetType`**: Tipo de vía pública: Calle, Avenida, Plaza, etc.
* **`streetName`**: Nombre de la calle u otro tipo de calle
* **`streetNr`**: Número que identifica la propiedad en la vía pública. Se puede combinar con streetNrLast para direcciones de rango
* **`streetSuffix`**: Un modificador que denota una dirección relativa
* **`streetNrLast`**: Último número de un rango de números de calles asignados a una propiedad
* **`streetNrLastSuffix`**: Sufijo del último número de calle para una dirección de rango

La respuesta obtenida será un JSON del tipo:

```json
{
    "addresses": [ 
        // Listado de direcciones que coincidan con la búsqueda
    ],
    "_meta": {
        "clues": { // Sugerencias para los diferentes query params 
            "postcode": [], 
            "locality": [],
            "city": [],
            "stateOrProvince": [],
            "streetType": [],
            "streetName": [],
            "streetNr": []
        },
        "errors": [] // Posibles errores detectados en la búsqueda de direcciones
    }
}
```

::: details Ejemplo de uso
Request URL (Method: **GET**): **`/api/v2/rubik/addresses/?postCode=17200&streetName=Abat%20Escarre&streetType=CALLE&streetNr=2`**

Response:

```json
{
    "addresses": [
        {
            "id": "17000831539000002       ",
            "streetNr": 2,
            "streetNrSuffix": "",
            "streetNrLast": "",
            "streetNrLastSuffix": "",
            "streetName": "Abat Escarre",
            "streetType": "CALLE",
            "streetSuffix": "",
            "postCode": "17200",
            "locality": "Palafrugell",
            "city": "PALAFRUGELL",
            "stateOrProvince": "GIRONA",
            "country": "spain",
            "geographicLocation": "Nº 2",
            "type": "finca",
            "source": "neba",
            "uid": "17000831539000002       "
        }
    ],
    "_meta": {
        "clues": {
            "postcode": [],
            "locality": [],
            "city": [],
            "stateOrProvince": [
                "MURCIA",
                "PALENCIA",
                "VALLADOLID",
                "LEON",
                "ZAMORA",
                "BURGOS",
                "Barcelona",
                "A CORUÑA",
                "ARABA/ALAVA",
                "ALBACETE",
                "ALICANTE",
                "ALMERIA",
                "ASTURIAS",
                "AVILA",
                "BADAJOZ",
                "BALEARES",
                "BIZKAIA",
                "CACERES",
                "CADIZ",
                "CANTABRIA",
                "CASTELLON",
                "CEUTA",
                "CIUDAD REAL",
                "CORDOBA",
                "CUENCA",
                "GIPUZKOA",
                "GIRONA",
                "GRANADA",
                "GUADALAJARA",
                "HUELVA",
                "HUESCA",
                "JAEN",
                "LA RIOJA",
                "LAS PALMAS",
                "LUGO",
                "LLEIDA",
                "MADRID",
                "MALAGA",
                "MELILLA",
                "NAVARRA",
                "OURENSE",
                "PONTEVEDRA",
                "SALAMANCA",
                "SANTA CRUZ DE TENERIFE",
                "SEGOVIA",
                "SEVILLA",
                "SORIA",
                "TARRAGONA",
                "TERUEL",
                "TOLEDO",
                "VALENCIA",
                "ZARAGOZA"
            ],
            "streetType": [
                "CALLE"
            ],
            "streetName": [
                "Abat Escarre"
            ],
            "streetNr": []
        },
        "errors": []
    }
}
```
:::

##### Búsqueda de vivienda

Una vez que tenemos identificada la dirección del usuario, tenemos que buscar la vivienda en sí. Para ello debemos realizar una petición de tipo POST al endpoint: **`/api/v2/rubik/subaddresses/`** pasándole como **body** o **payload** el objeto JSON **address** obtenido de la anterior consulta.

Obtendremos un listado de viviendas, con el siguiente esquema:
```json
{
      "owner": "neba", // Owner o propietario de servicio que puede dar cobertura en esta vivienda
      "geographicSubAddress": {
            // Detalle de la vivienda
      },
      "uids": [
            // Listado de identificadores de vivienda
      ]
}
```

Los posibles atributos del detalle de la vivienda son:

* **`buildingName`**: Nombre del edificio, si éste tuviera alguno conocido.
* **`buildingNameSuffix`**: Prefijo del nombre del edificio.
* **`levelNumber`**: Número de nivel, por ejemplo: 1, para 1er piso.
* **`subUnitNumber`**: Discriminador de la subunidad, a menudo simplemente un número simple, por ejemplo FLAT 5.
* **`subUnitType`**: Tipo de subunidad, como: piso, muelle, suite, tienda, torre, etc.
* **`stairCase`**: Escalera, pudiendo ser un número o una letra. 
* **`door`**: Número o letra indicativa de la puerta.
* **`doorType`**: Tipo de puerta, por ejemplo: Izqda, Dcha, etc. 


Los UIDs son los diferentes identificadores únicos de dirección y vivienda. Éstos pueden ser dados en diferentes formatos (Gescal, Aravato, o cualquier otro identificador interno del **owner**). Por ello dentro de los posibles UIDs de una vivienda se devolverán JSON del tipo:

```json
{
  "externalId": "17000830104400007         002",
  "refId": "gescal"
}
```

En el que se especifica el **`externalId`** que es el propio identificador de la vivienda, y el **`refId`**, que especifica el formato en el que viene dicho **id**.

::: tip Nota adicional sobre los UIDs
La lista de UIDs también puede venir acompañada de un atributo **`product`** o un atributo **`_meta`**, dependiendo de las especificaciones propias del **owner**.
:::

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/subaddresses`**

Request payload:
```json
{
    "id": "17000831539000002       ",
    "streetNr": 2,
    "streetNrSuffix": "",
    "streetNrLast": "",
    "streetNrLastSuffix": "",
    "streetName": "Abat Escarre",
    "streetType": "CALLE",
    "streetSuffix": "",
    "postCode": "17200",
    "locality": "Palafrugell",
    "city": "PALAFRUGELL",
    "stateOrProvince": "GIRONA",
    "country": "spain",
    "geographicLocation": "Nº 2",
    "type": "finca",
    "source": "neba",
    "uid": "17000831539000002       "
}
```

Response:

```json
[
    {
        "owner": "neba",
        "geographicSubAddress": {
            "subUnitType": "",
            "subUnitNumber": "",
            "buildingName": "",
            "buildingNameSuffix": "",
            "stairCase": null,
            "levelNumber": "BA",
            "doorType": null,
            "door": null
        },
        "uids": [
            {
                "externalId": "17000831539000002         BA",
                "refId": "gescal"
            }
        ]
    },
    {
        "owner": "neba",
        "geographicSubAddress": {
            "subUnitType": "",
            "subUnitNumber": "",
            "buildingName": "",
            "buildingNameSuffix": "",
            "stairCase": null,
            "levelNumber": "CH",
            "doorType": null,
            "door": null
        },
        "uids": [
            {
                "externalId": "17000831539000002         CH",
                "refId": "gescal"
            }
        ]
    }
]
```
:::

##### Búsqueda de productos

Si el **owner** así lo especificara en su configuración, éste puede requerir especificar un tipo de **product** para adjuntar al UID del que se quiera comprobar la cobertura, para ello deberemos realizar una petición de tipo POST al endpoint **`/api/v2/rubik/products`**, indicando dentro del **payload** o **body** de la petición el **subaddress** obtenido en la consulta anterior sobre la que se quiera obtener los productos.

La respuesta a este endpoint será un JSON con los siguientes atributos:

```json
{
    "owner": "neba",
    "uids": [
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal",
            "product": "ftth-local",
            "_meta": {
                "lagl": "17660007032755",
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        }
    ]
}
```

Este JSON, de estructura similar a la respuesta de la [búsqueda de viviendas](#busqueda-de-vivienda), contiene una lista de **products** asociados dentro de los UIDs con posibilidad de añadie información adicional dentro del atributo **`_meta`**.

::: tip Nota para el **owner** NEBA
Si el producto devuelto contiene el valor *sin-cobertura* es una vivienda en la que directamente no existe posibilidad actual de tramitar altas de servicios, sin necesidad de comprobar la cobertura.

Ejemplo de respuesta:
```json
{
    "owner": "neba",
    "uids": [
        {
            "externalId": "17000830104400007         002",
            "refId": "gescal",
            "product": "sin-cobertura",
            "_meta": {
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        }
    ]
}
```
:::

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/products`**

Request payload:
```json
{
    "owner": "neba",
    "geographicSubAddress": {
        "subUnitType": "",
        "subUnitNumber": "",
        "buildingName": "",
        "buildingNameSuffix": "",
        "stairCase": null,
        "levelNumber": "BA",
        "doorType": null,
        "door": null
    },
    "uids": [
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal"
        }
    ]
}
```

Response:

```json
{
    "owner": "neba",
    "uids": [
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal",
            "product": "ftth-local",
            "_meta": {
                "lagl": "17660007032755",
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        },
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal",
            "product": "ftth-residencial",
            "_meta": {
                "ppapie": "17100007062061",
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        },
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal",
            "product": "ftth-empresa",
            "_meta": {
                "ppapie": "17100007062061",
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        }
    ]
}
```
:::

##### Verificación de cobertura

Tras obtener el **UID** (identificador único de la vivienda) y el **product** (si éste fuera necesario por el **owner**) es necesario comprobar si existe cobertura para él.

La verificación de cobertura se realiza haciendo una petición POST al endpoint **`/api/v2/rubik/verify/`**, y en ella se deben especificar el **owner** así como el **UID** sobre el que se quiere realizar la comprobación:

```json
{
    "owner": "neba",
    "uids": [
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal",
            "product": "ftth-local",
            "_meta": {
                "lagl": "17660007032755",
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        }
    ]
}
```

La respuesta de esta petición será un JSON con los siguientes atributos:

* **`code`**: 100 para cobertura, 302 para no cobertura.
* **`message`**: Mensaje de confirmación o rechazo de cobertura.
* **`description`**: Detalle de la respuesta obtenida por el **owner** a la verificación de cobertura.
* **`_meta`**: Datos adicionales ofrecidos por el **owner**.

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/products`**

Request payload:
```json
{
    "owner": "neba",
    "uids": [
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal",
            "product": "ftth-local",
            "_meta": {
                "lagl": "17660007032755",
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        }
    ]
}
```

Response:
```json
{
    "code": 100,
    "message": "address verified successfully",
    "description": "LRE C=1766008 P=17100007062061 L=17660007032755",
    "_meta": [
        {    
            "IN-PAI-L": "1766008001",
            "CO-PRD-PAI-L": null
        },
        {   
            "IN-PAI-L": null,
            "CO-PRD-PAI-L": null
        }
    ]
}
```
:::

### Consulta de Servicios

Request URL (Method: **GET**): **`/api/v2/rubik/services`**

En este endpoint puedes listar, crear, modificar y eliminar los servicios independientemente del **owner** al que
pertenezcan.

#### Paginación de resultados

Los resultados vienen paginados por defecto con un máximo de 10 elementos por página. Estos valores los podemos
modificar a través de los parámetros **query parameters**:

* **`limit`**: Número de elementos por página
* **`offset`**: A partir de qué número de elemento se obtienen los resultados

Obtendremos un JSON con los siguientes atributos:

* **`count`**: Número total de elementos
* **`next`**: Siguiente página de resultados
* **`previous`**: Página anterior de resultados
* **`results`**: Resultados limitados al número de elementos por página especificado

::: details Ejemplo de uso
Request URL (Method: **GET**): **`/api/v2/rubik/services/?limit=5&offset=5`**:

Response:

```json
{
    "count": 3319,
    "next": "/api/v2/rubik/services/?limit=5&offset=10",
    "previous": "/api/v2/rubik/services/?limit=5",
    "results": [
        {
            "id": 28,
            "owner": "acme",
            "address_uid": "UF030005500000000000000000000000139985",
            "remote_id": "485754433c23191a",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "_BLANK_",
            "tv_remote_id": null,
            "crm_phone_label": "968676545",
            "crm_contact_label": "K",
            "crm_external_id": "AKI002",
            "crm_customer_label": "AkiWifi",
            "administrative_id": "UES505AAA0928",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2021-02-04T12:43:12.509240+01:00",
            "updated": "2021-02-05T11:27:00.641732+01:00"
        },
        {
            "id": 29,
            "owner": "acme",
            "address_uid": "UF030005500000000000000000000000139985",
            "remote_id": "HWTC3C23191A",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "_BLANK_",
            "tv_remote_id": "",
            "crm_phone_label": "600000000",
            "crm_contact_label": "",
            "crm_external_id": "12345678A",
            "crm_customer_label": "Cliente",
            "administrative_id": "UES505AAA0930",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2021-02-05T11:22:49.608455+01:00",
            "updated": "2021-02-05T11:22:49.608023+01:00"
        },
        {
            "id": 30,
            "owner": "acme",
            "address_uid": "UL030006700000000000000000000000000173",
            "remote_id": "HWTC3C23191B",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "300M_300M_RES_XPU-DHCP_NTV",
            "ppai": "_BLANK_",
            "tv_remote_id": "",
            "crm_phone_label": "600000000",
            "crm_contact_label": "",
            "crm_external_id": "12345678A",
            "crm_customer_label": "Cliente",
            "administrative_id": "UES505AAA0932",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2021-02-05T11:35:12.664779+01:00",
            "updated": "2021-02-05T11:35:12.664377+01:00"
        },
        {
            "id": 32,
            "owner": "acme",
            "address_uid": "UF030005500000000000000000000000139985",
            "remote_id": "485754433c23191a",
            "state": "down",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "300M_300M_RES_XPU-DHCP_NTV",
            "ppai": "_BLANK_",
            "tv_remote_id": "",
            "crm_phone_label": "987887766",
            "crm_contact_label": "",
            "crm_external_id": "T",
            "crm_customer_label": "Tesdt",
            "administrative_id": "UES505AAA0934",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2021-02-05T11:47:43.225911+01:00",
            "updated": "2021-02-05T11:54:42.937291+01:00"
        },
        {
            "id": 33,
            "owner": "acme",
            "address_uid": "INVENT",
            "remote_id": "485754433c23191a",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "_BLANK_",
            "tv_remote_id": "",
            "crm_phone_label": "745678999",
            "crm_contact_label": "",
            "crm_external_id": "56789o",
            "crm_customer_label": "546789",
            "administrative_id": "UES505AAA0935",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2021-02-12T10:15:21.894200+01:00",
            "updated": "2021-02-12T10:15:21.893763+01:00"
        }
    ]
}
```

:::

#### Ordenado de resultados

Usaremos el **query parameter**: **`sort`**, para poder aplicar ordenado a los resultados, indicando el atributo por el que
queremos ordenar.

::: tip Orden descendente
Si queremos que el orden sea inverso, añadiremos un carácter **`-`** delante del atributo, por
ejemplo: **`/api/v2/rubik/services/?sort=-owner`**.
:::

::: details Ejemplo de uso
Request URL (Method: **GET**): **`/api/v2/rubik/services/?sort=-owner`**

Response:

```json
{
    "count": 3319,
    "next": "/api/v2/rubik/services/?limit=5&offset=10&sort=-owner",
    "previous": "/api/v2/rubik/services/?limit=5&sort=-owner",
    "results": [
        {
            "id": 746,
            "owner": "telesilvestre",
            "address_uid": "",
            "remote_id": null,
            "state": "ordered",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "666777888",
            "crm_contact_label": "test",
            "crm_external_id": "1",
            "crm_customer_label": "test",
            "administrative_id": "0123456789100123456789100123456789100",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2023-02-24T09:40:57.640054+01:00",
            "updated": "2023-02-24T09:40:57.639172+01:00"
        },
        {
            "id": 760,
            "owner": "telesilvestre",
            "address_uid": "",
            "remote_id": null,
            "state": "ordered",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "622118192",
            "crm_contact_label": "",
            "crm_external_id": "00",
            "crm_customer_label": "X",
            "administrative_id": "0123456789100123456789100123456789100",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2023-02-24T10:10:53.151532+01:00",
            "updated": "2023-02-24T10:10:53.150905+01:00"
        },
        {
            "id": 761,
            "owner": "telesilvestre",
            "address_uid": "",
            "remote_id": null,
            "state": "ordered",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "622118192",
            "crm_contact_label": "",
            "crm_external_id": "00",
            "crm_customer_label": "X",
            "administrative_id": "0123456789100123456789100123456789100",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2023-02-24T10:10:59.895176+01:00",
            "updated": "2023-02-24T10:10:59.894573+01:00"
        },
        {
            "id": 747,
            "owner": "telesilvestre",
            "address_uid": "",
            "remote_id": null,
            "state": "ordered",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "666777888",
            "crm_contact_label": "test",
            "crm_external_id": "1",
            "crm_customer_label": "test",
            "administrative_id": "0123456789100123456789100123456789100",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2023-02-24T09:41:44.110836+01:00",
            "updated": "2023-02-24T09:41:44.110260+01:00"
        },
        {
            "id": 754,
            "owner": "telesilvestre",
            "address_uid": "",
            "remote_id": null,
            "state": "ordered",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "100M_100M_RES_XPU-DHCP_NTV",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "636363636",
            "crm_contact_label": "",
            "crm_external_id": "4",
            "crm_customer_label": "Vladimir",
            "administrative_id": "0123456789100123456789100123456789100",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2023-02-24T09:58:35.382094+01:00",
            "updated": "2023-02-24T09:58:35.381385+01:00"
        }
    ]
}
```
:::

#### Filtrar resultados

El listado de servicios podemos filtrarlo por los siguientes atributos:

* **`search`**: búsqueda de texto dentro de la mayor parte de los atributos del objeto servicio.
* **`owner`**: filtrar por el nombre del **owner** del servicio.
* **`state`**: filtrar por el estado (**state**) del servicio.

::: details Ejemplo de uso
Request URL (Method: **GET**): **`/api/v2/rubik/services/?owner=telesilvestre&state=canceled&limit=5&offset=0`**

Response:

```json
{
    "count": 7,
    "next": "/api/v2/rubik/services/?limit=5&offset=5&owner=telesilvestre&state=canceled",
    "previous": null,
    "results": [
        {
            "id": 35,
            "owner": "telesilvestre",
            "address_uid": "P0000098384",
            "remote_id": "XTA0023",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "17",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "968431511",
            "crm_contact_label": "Just a test",
            "crm_external_id": "XTA0023",
            "crm_customer_label": "TEST Rubik",
            "administrative_id": "51200000006",
            "order_id": null,
            "reason": "Testing",
            "planned": "2021-03-26 12:00",
            "created": "2021-03-02T10:54:19.444783+01:00",
            "updated": "2021-04-22T13:20:03.305030+02:00"
        },
        {
            "id": 37,
            "owner": "telesilvestre",
            "address_uid": "P0003821561",
            "remote_id": "T0003",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "17",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "968431511",
            "crm_contact_label": "Testing",
            "crm_external_id": "T0003",
            "crm_customer_label": "TEST Rubik",
            "administrative_id": "51200000008",
            "order_id": null,
            "reason": "Test",
            "planned": "2021-04-26 12:00",
            "created": "2021-03-25T13:53:43.681476+01:00",
            "updated": "2021-04-26T14:50:03.713728+02:00"
        },
        {
            "id": 48,
            "owner": "telesilvestre",
            "address_uid": "P0000098703",
            "remote_id": "T00005",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "58",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "968431512",
            "crm_contact_label": "Testing",
            "crm_external_id": "T00005",
            "crm_customer_label": "Test Phicus",
            "administrative_id": "51200000009",
            "order_id": null,
            "reason": "Tsting",
            "planned": "2021-04-30 12:00",
            "created": "2021-04-26T08:08:55.178301+02:00",
            "updated": "2021-04-26T08:28:17.815260+02:00"
        },
        {
            "id": 49,
            "owner": "telesilvestre",
            "address_uid": "P0002261135",
            "remote_id": "T000006",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "58",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "968431513",
            "crm_contact_label": "Test",
            "crm_external_id": "T000006",
            "crm_customer_label": "Test Phicus",
            "administrative_id": "51200000010",
            "order_id": null,
            "reason": "",
            "planned": "2021-06-21 23:00",
            "created": "2021-04-26T08:34:00.966789+02:00",
            "updated": "2021-07-16T12:55:03.348000+02:00"
        },
        {
            "id": 56,
            "owner": "telesilvestre",
            "address_uid": "TELESILVESTRE_INVENT",
            "remote_id": "T00045",
            "state": "canceled",
            "last_state": "initialized",
            "installation_info": {},
            "service_profile": "300M_300M_RES_XPU-DHCP_NTV",
            "ppai": "NO_APLICA",
            "tv_remote_id": "",
            "crm_phone_label": "968431511",
            "crm_contact_label": "",
            "crm_external_id": "T00045",
            "crm_customer_label": "Pavel",
            "administrative_id": "TELESILVESTRE_INVENT",
            "order_id": null,
            "reason": "",
            "planned": null,
            "created": "2021-06-11T11:30:59.177384+02:00",
            "updated": "2021-06-11T11:31:21.314906+02:00"
        }
    ]
}
```
:::

#### Consulta singular de servicio

También se puede consultar un el estado de un único servicio.

::: details Ejemplo de uso
Request URL (Method: **GET**): **`/api/v2/rubik/services/{id}/`**

Response:

```json
{
    "id": 35,
    "owner": "telesilvestre",
    "address_uid": "P0000098384",
    "remote_id": "XTA0023",
    "state": "canceled",
    "last_state": "initialized",
    "installation_info": {},
    "service_profile": "17",
    "ppai": "NO_APLICA",
    "tv_remote_id": "",
    "crm_phone_label": "968431511",
    "crm_contact_label": "Just a test",
    "crm_external_id": "XTA0023",
    "crm_customer_label": "TEST Rubik",
    "administrative_id": "51200000006",
    "order_id": null,
    "reason": "Testing",
    "planned": "2021-03-26 12:00",
    "created": "2021-03-02T10:54:19.444783+01:00",
    "updated": "2021-04-22T13:20:03.305030+02:00"
}
```
:::

### Alta de servicio

Para crear un servicio debemos de realizar unos pasos previos:

1. [Obtención de la configuración de los diferentes **owners** que tengamos habilitados.](#obtencion-de-configuracion-de-owners)
2. [Búsqueda de cobertura](#busqueda-de-cobertura)
3. [Dar de alta el servicio](#dar-de-alta-el-servicio)

#### Obtención de configuración de **owners**:

Cada **owner** o **propietario del servicio** tiene una configuración específica que lo distingue de los demás y habilita o no ciertas características en la creación y modificación de servicios.

Para obtener la configuración de los diferentes **owners** haremos la siguiente petición: **`/api/v2/rubik/owner-settings/`**.

Obtendremos un JSON en el que se especificará cada configuración por **owner**:

```json
{
    "onwer_1": {
        "diagnostic_actions": {
            "TST_FTTH_RESET_ONT": "ONT reset"
        },
        "diagnostic_tests": {
            "TST_FTTH_CONF_EMP": "Configuration Test",
            "TST_FTTH_OSTATE": "Check Optical Status",
            "TST_FTTH_ONT_OLT": "Verificación de Configuración ONT en OLT"
        },
        "has_otb_change": false,
        "has_product_order": false,
        "has_products_api": true,
        "has_tickets": false,
        "needs_planning_date": false,
        "needs_reason": false,
        "ppais": [
            {
                "id": "300000000001",
                "label": "Murcia/local",
            },
            {
                "id": "300000000000",
                "label": "Murcia",
            }
        ],
        "reserve_expiration": 168,
        "service_profiles": [
            {
                "id": "9",
                "label": "600 Mbps",
                "_meta": {
                    "products": [
                        "ftth-residential",
                        "ftth-business",
                    ]
                }
            },
            {
                "id": "11",
                "label": "1 Gbps",
                "_meta":{
                    "products": [
                        "ftth-local",
                    ]
                }
            },
        ]


    },
    "owner_2": {
        // Configuración owner 2...
    }
}
```

Los atributos que configuran cada owner son los siguientes:

* **`diagnostic_actions`**: Posibles acciones sobre la ONT. Por ejemplo: Reset.
* **`diagnostic_tests`**: Posibles test de diagnóstico. Por ejemplo: "Check optical status".
* **`has_otb_change`**: Permite cambiar el CTO tras el alta del servicio.
* **`has_product_order`**: El servicio tiene "Product orders".
* **`has_products_api`**: El servicio requiere obtener los productos disponibles para la búsqueda de cobertura una vez especificada una dirección.
* **`has_tickets`**: El servicio tiene la posibilidad de crear **tickets de soporte**.
* **`needs_planning_date`**: El servicio debe especificar una fecha de planificación de instalación antes de cambiar su estado a **ordered**. 
* **`needs_reason`**: El servicio necesita un motivo para poder cambiar su estado a **cancelled** o a **issue**.
* **`ppais`**: Listado de PPAIs disponibles para el servicio.
* **`reserve_expiration`**: Tiempo máximo (en horas) de expiración de la reserva del servicio antes de ser cancelada automáticamente si no se ha cambiado su estado a **ordered**.
* **`service_profiles`**: Listado de **service_profiles** disponibles para el servicio.


#### Dar de alta el servicio

Una vez se ha confirmado que una vivienda tiene cobertura se puede proceder a tramitar el alta del servicio sobre ésta.

El alta de un servicio se realiza haciendo una petición POST al endpoint **`/api/v2/rubik/services/`**, y en ella se deben especificar los datos de la dirección, vivienda, UIDs, así como otros valores necesarios para poder tramitar el alta.

Puedes consultar el schema del API de Rubik (**Open Schema 3.0**) en el siguiente link:
[Rubik Schema](https://prekrill.phicus.es/static/schemas/rubik.json) 

Atributos para el alta de un servicio:

* **`owner`**: Nombre del **owner** o propietario de servicio sobre el que se va a tramitar el alta.
* **`service_profile`**: Perfil del servicio (los diferentes valores disponibles se obtienen de la [configuración del *owner*](#obtencion-de-configuracion-de-owners)).
* **`crm_external_id`**: ID externo usado para identificar al cliente final. Puede ser el DNI, ID del CRM, etc.
* **`crm_customer_label`**: Nombre del cliente final.
* **`crm_phone_label`**: Número de contacto del cliente final.
* **`crm_contact_label`**: Comentarios adicionales del cliente final. Por ejemplo, disponibilidad horaria, o ubicación de instalación de la ONT, etc.
* **`remote_id`**: ID remoto de la ONU en función de las especificaciones del **owner**.
* **`ppai`**: Punto de interconexión, si éste fura requerido por el **owner** (los diferentes valores disponibles se obtienen de la [configuración del *owner*](#obtencion-de-configuracion-de-owners)).
* **`uids`**: Lista de UIDs sobre la que se va a hacer la instalación. Si el owner requiere la especificación de *product*, este valor deberá estar especificado en la UID correspondiente.
* **`address`**: Objeto **address** seleccionado de la [búsqueda de dirección](#busqueda-de-direccion), conteniendo en su interior el **geographicSubAddress** seleccionado en la [búsqueda de vivienda](#busqueda-de-vivienda)
* **`address_uid`**: Identificador unico de vivienda en base al **owner**. 
* **`extrainfo`**: Información adicional requerida por cada **owner** de forma específica. Puede consultar los atributos requeridos por cada **owner** en la sección **RubikFTTHServiceCreate** del Schema Open API ([Rubik Schema](https://prekrill.phicus.es/static/schemas/rubik.json))

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/services`**

Request payload:
```json
{
    "owner": "neba",
    "service_profile": "F11",
    "tv_remote_id": "",
    "crm_external_id": "1",
    "crm_customer_label": "Prueba",
    "crm_phone_label": "600123456",
    "crm_contact_label": "Comentario",
    "uids": [
        {
            "externalId": "17000831539000002         BA",
            "refId": "gescal",
            "product": "ftth-local",
            "_meta": {
                "lagl": "17660007032755",
                "overload": false,
                "extension_datetime": null,
                "extension_description": null
            }
        }
    ],
    "remote_id": "1",
    "ppai": "NO_APLICA",
    "address": {
        "id": "17000831539000002       ",
        "streetNr": 2,
        "streetNrSuffix": "",
        "streetNrLast": "",
        "streetNrLastSuffix": "",
        "streetName": "Abat Escarre",
        "streetType": "CALLE",
        "streetSuffix": "",
        "postCode": "17200",
        "locality": "Palafrugell",
        "city": "PALAFRUGELL",
        "stateOrProvince": "GIRONA",
        "country": "spain",
        "geographicLocation": "Nº 2",
        "type": "finca",
        "source": "neba",
        "uid": "17000831539000002       ",
        "geographicSubAddress": [
            {
                "owner": "neba",
                "geographicSubAddress": {
                    "subUnitType": "",
                    "subUnitNumber": "",
                    "buildingName": "",
                    "buildingNameSuffix": "",
                    "stairCase": null,
                    "levelNumber": "BA",
                    "doorType": null,
                    "door": null
                },
                "uids": [
                    {
                        "externalId": "17000831539000002         BA",
                        "refId": "gescal",
                        "product": "ftth-local",
                        "_meta": {
                            "lagl": "17660007032755",
                            "overload": false,
                            "extension_datetime": null,
                            "extension_description": null
                        }
                    }
                ]
            }
        ]
    }
}
```

Response:
```json

```
:::

### Ejemplos de uso en NEBA

#### Alta NEBA LOCAL sobre vacante (sin portabilidad)

Cuando no hay instalación previa de telefonica. Se solitica instalar PTRO. No existe **IUA** (Identificador Unico de Acceso) en la vivienda.

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/services`**

Request payload:
```json
{
  "owner": "neba",
  "address_uid": "123456",
  "product": "ftth-local",
  "service_profile": "L9",
  "ppai": "17660007032755",
  "crm_external_id": "PAM-12345",
  "crm_phone_label": "723456789",
  "crm_customer_label": "Juan Perez Martinez",
  "extrainfo": {
    "DS-NOM-CDR-TEC": "Nombre coordinador tecnico",
    "DS-AP1-CDR-TEC": "Apellido coordinador tecnico",
    "NU-TLF-PPL-TEC-TX": "623456789",
    "DS-EMA-COO-TEC-PPL": "email@example.com",
    "NU-FAX-TX": "623456789",
    "NU-TLF-ALT-TEC-TX": "623456789",
    "DS-EMA-COO-TEC-ALV": "tech2@example.com",
    "NU-TLF-CTO-2-TX": "623456789",
    "DS-OBS-DOM": "Junto a cementerio",
    "IN-SER-MTO-PMM": "N",
    "CO-OPD-VLAN-FTTH": "1234",
    "IN-PORTABILIDAD": "N"
  }
}
```

Response:
```json
{
  "id": 3438,
  "address_uid": "123456",
  "administrative_id": null,
  "crm_contact_label": null,
  "crm_customer_label": "Juan Perez Martinez",
  "crm_external_id": "PAM-12345",
  "crm_phone_label": "723456789",
  "owner_state": "VAL",
  "owner": "neba",
  "ppai": "17660007032755",
  "product": "ftth-local",
  "remote_id": null,
  "service_profile": "L9",
  "state": "InProgress",
  "created": "2023-11-10T17:25:43.969635+01:00",
  "updated": "2023-11-10T17:25:44.034026+01:00",
  "planned": null,
  "reason": "",
  "order_id": "42:231110172544:",
  "last_state": null,
  "installation_info": {}
}
```
:::

#### Alta NEBA LOCAL sobre ocupado (sin portabilidad)

Existe instalación previa del PTRO y se conoce el **IUA**.

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/services`**

Request payload:
```json
{
  "owner": "neba",
  "address_uid": "123456",
  "product": "ftth-local",
  "service_profile": "L9",
  "ppai": "17660007032755",
  "crm_external_id": "PAM-12345",
  "crm_phone_label": "723456789",
  "crm_customer_label": "Juan Perez Martinez",
  "extrainfo": {
    "NU-CMR-IUA": "123456789012",
    "DS-NOM-CDR-TEC": "Nombre coordinador tecnico",
    "DS-AP1-CDR-TEC": "Apellido coordinador tecnico",
    "NU-TLF-PPL-TEC-TX": "623456789",
    "DS-EMA-COO-TEC-PPL": "email@example.com",
    "NU-FAX-TX": "623456789",
    "NU-TLF-ALT-TEC-TX": "623456789",
    "DS-EMA-COO-TEC-ALV": "tech2@example.com",
    "NU-TLF-CTO-2-TX": "623456789",
    "DS-OBS-DOM": "Junto a iglesia",
    "IN-SER-MTO-PMM": "N",
    "CO-OPD-VLAN-FTTH": "1234",
    "IN-PORTABILIDAD": "N"
  }
}
```

Response:
```json
{
  "id": 3438,
  "address_uid": "123456",
  "administrative_id": null,
  "crm_contact_label": null,
  "crm_customer_label": "Juan Perez Martinez",
  "crm_external_id": "PAM-12345",
  "crm_phone_label": "723456789",
  "owner_state": "VAL",
  "owner": "neba",
  "ppai": "17660007032755",
  "product": "ftth-local",
  "remote_id": null,
  "service_profile": "L9",
  "state": "InProgress",
  "created": "2023-11-10T17:25:43.969635+01:00",
  "updated": "2023-11-10T17:25:44.034026+01:00",
  "planned": null,
  "reason": "",
  "order_id": "42:231110172544:",
  "last_state": null,
  "installation_info": {}
}
```
:::

#### Alta NEBA sobre vacante (sin portabilidad)

No existe instalación previa de telefonica. Se solitica instalar PTRO. No existe **IUA** en la vivienda

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/services`**

Request payload:
```json
{
    "owner": "neba",
    "address_uid": "123456",
    "product": "ftth-residential",
    "service_profile": "F11",
    "ppai": "12220005001233",
    "crm_external_id": "PAM-12345",
    "crm_customer_label": "Nombre y apellidos de cliente",
    "crm_phone_label": "723456789",
    "extrainfo": {
        "DS-NOM-CDR-TEC": "Nombre coordinador tecnico",
        "DS-AP1-CDR-TEC": "Apellido coordinador tecnico",
        "NU-TLF-PPL-TEC-TX": "623456789",
        "DS-EMA-COO-TEC-PPL": "email@example.com",
        "NU-FAX-TX": "623456789",
        "NU-TLF-ALT-TEC-TX": "623456789",
        "DS-EMA-COO-TEC-ALV": "tech2@example.com",
        "NU-TLF-CTO-2-TX": "623456789",
        "DS-OBS-DOM": "Junto a cementerio",
        "IN-SER-MTO-PMM": "N",
        "CO-OPD-VLAN-FTTH": "1234",
        "IN-PORTABILIDAD": "N",
    }
}
```
Response:
```json
{
  "id": 3438,
  "address_uid": "123456",
  "administrative_id": null,
  "crm_contact_label": null,
  "crm_customer_label": "Juan Perez Martinez",
  "crm_external_id": "PAM-12345",
  "crm_phone_label": "723456789",
  "owner_state": "VAL",
  "owner": "neba",
  "ppai": "17660007032755",
  "product": "ftth-residential",
  "remote_id": null,
  "service_profile": "F11",
  "state": "InProgress",
  "created": "2023-11-10T17:25:43.969635+01:00",
  "updated": "2023-11-10T17:25:44.034026+01:00",
  "planned": null,
  "reason": "",
  "order_id": "42:231110172544:",
  "last_state": null,
  "installation_info": {}
}
```
:::

#### Alta NEBA sobre ocupado (sin portabilidad)

Existe instalacion previa del PTRO y se conoce el **IUA**.

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/services`**

Request payload:
```json
{
    "owner": "neba",
    "address_uid": "123456",
    "product": "ftth-residential",
    "service_profile": "F11",
    "ppai": "12220005001233",
    "crm_external_id": "PAM-12345",
    "crm_customer_label": "Nombre y apellidos de cliente",
    "crm_phone_label": "723456789",
    "extrainfo": {
        "NU-CMR-IUA": "723456789012",
        "DS-NOM-CDR-TEC": "Nombre coordinador tecnico",
        "DS-AP1-CDR-TEC": "Apellido coordinador tecnico",
        "NU-TLF-PPL-TEC-TX": "7234567890",
        "DS-EMA-COO-TEC-PPL": "email@example.com",
        "NU-FAX-TX": "723456789",
        "NU-TLF-ALT-TEC-TX": "723456789",
        "DS-EMA-COO-TEC-ALV": "tech2@example.com",
        "NU-TLF-CTO-2-TX": "6234567890",
        "DS-OBS-DOM": "Junto a cementerio",
        "IN-SER-MTO-PMM": "N",
        "CO-OPD-VLAN-FTTH": "1234",
        "IN-PORTABILIDAD": "N",
    }
}
```

Response:
```json
{
  "id": 3438,
  "address_uid": "123456",
  "administrative_id": null,
  "crm_contact_label": null,
  "crm_customer_label": "Juan Perez Martinez",
  "crm_external_id": "PAM-12345",
  "crm_phone_label": "723456789",
  "owner_state": "VAL",
  "owner": "neba",
  "ppai": "17660007032755",
  "product": "ftth-residential",
  "remote_id": null,
  "service_profile": "F11",
  "state": "InProgress",
  "created": "2023-11-10T17:25:43.969635+01:00",
  "updated": "2023-11-10T17:25:44.034026+01:00",
  "planned": null,
  "reason": "",
  "order_id": "42:231110172544:",
  "last_state": null,
  "installation_info": {}
}
```
:::

#### Alta NEBA Empresas sobre ocupado (sin portabilidad)
Existe instalación previa del PTRO y se conoce el **IUA**.

::: details Ejemplo de uso
Request URL (Method: **POST**): **`/api/v2/rubik/services`**

Request payload:
```json
{
    "owner": "neba",
    "address_uid": "123456",
    "product": "ftth-business",
    "service_profile": "F11",
    "ppai": "12220005001233",
    "crm_external_id": "PAM-12345",
    "crm_customer_label": "Nombre y apellidos de cliente",
    "crm_phone_label": "723456789",
    "extrainfo": {
        "NU-CMR-IUA": "723456789012",
        "DS-NOM-CDR-TEC": "Nombre coordinador tecnico",
        "DS-AP1-CDR-TEC": "Apellido coordinador tecnico",
        "NU-TLF-PPL-TEC-TX": "723456789",
        "DS-EMA-COO-TEC-PPL": "email@example.com",
        "NU-FAX-TX": "723456789",
        "NU-TLF-ALT-TEC-TX": "723456789",
        "DS-EMA-COO-TEC-ALV": "tech2@example.com",
        "NU-TLF-CTO-2-TX": "723456789",
        "DS-OBS-DOM": "Junto a cementerio",
        "IN-SER-MTO-PMM": "N",
        "CO-OPD-VLAN-FTTH": "1234",
        "IN-PORTABILIDAD": "N",
    }
}'
```

Response:
```json
{
  "id": 3438,
  "address_uid": "123456",
  "administrative_id": null,
  "crm_contact_label": null,
  "crm_customer_label": "Juan Perez Martinez",
  "crm_external_id": "PAM-12345",
  "crm_phone_label": "723456789",
  "owner_state": "VAL",
  "owner": "neba",
  "ppai": "17660007032755",
  "product": "ftth-business",
  "remote_id": null,
  "service_profile": "F11",
  "state": "InProgress",
  "created": "2023-11-10T17:25:43.969635+01:00",
  "updated": "2023-11-10T17:25:44.034026+01:00",
  "planned": null,
  "reason": "",
  "order_id": "42:231110172544:",
  "last_state": null,
  "installation_info": {}
}
```
:::


## Ciclo de vida de un servicio

El ciclo de vida de un servicio en Rubik está basado en la especificación del TMF622 Product Ordering API REST. Estos estados, designados por el TMF622, ofrecen una estructura clara para comprender la evolución de un servicio desde su inicio hasta su finalización. 

Los posibles estados que maneja Rubik en base al TMF622 son los siguientes:

* **`Acknowledged`**: Este es el estado inicial en el que se reconoce la solicitud del servicio. Rubik ha validado la petición inicial y hace de proxy contra el API del operador mayorista.

* **`In Progress`**: Los pasos necesarios para la ejecución de un servicio están siendo llevados a cabo por parte del operador mayorista.

* **`Pending`**: El servicio está en estado de incidencia por parte del operador solicitante. Tengo una incidencia que resolver, por ejemplo, el GESCAL no es válido.

* **`Held`**: El servicio está en estado de incidencia por parte del operador mayorista. Tienen una incidencia que resolver, por ejemplo la instalación de PTRO fallida por cliente ausente.

* **`Pending Cancellation`**: Se ha tramitado la baja/cancelación del servicio, pero aún no hay respuesta por parte del operador Mayorista. Se podrá cancelar el servicio en cualquier etapa del proceso.

* **`Cancelled`**: Se ha cancelado el servicio. 

* **`Completed`**: Cuando el servicio cumple con todos los requisitos y finaliza con éxito, alcanza el estado de completado.

* **`Failed`**: En caso de que el servicio no pueda completarse exitosamente debido a algún inconveniente, se marca como fallido.

### Ciclos de vida en NEBA
#### Alta de servicio sin incidencias 
![AltaNebaOK](/img/api/rubik/alta_servicio_ok.png)

#### Alta de servicio NEBA con incidencias
##### Incidencia con el API de NEBA
Si existe alguna incidencia con el API de NEBA como por ejemplo, el certificado está caducado, el servicio pasa a estado **Acknowledged**. El operador solicitante podrá reintentar establecer la comunicación con el API de NEBA.
![AltaNebaIncidenciaAPI](/img/api/rubik/alta_servicio_incidencia_neba.png)


