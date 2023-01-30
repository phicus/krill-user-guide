---
title: Logger
description: Reporte de logs de la API y del panel de administración.
lang: es-ES
prev: null
next: null
sidebar: auto
tags:
- krill2
- module
- logger
- admin
- api
---
# Logger

Desde este módulo podremos visualizar los logs referentes a las peticiones desde el API y el panel de administración.

<p align="center"><img src="/img/krill2/logger/00-logger-menu.png" width="433"></p>

En el dashboard principal se puede previsualizar, de forma predeterminada, los últimos logs del API.

![Logger Dashboard](/img/krill2/logger/01-logger-dashboard.png)

Desde aquí podemos acceder a:
- [Reporte del panel de administración](/es/krill2/logger/#reporte-del-panel-de-administracion): desde aquí podemos visualizar todas las acciones referentes a la creación, modificación o eliminación de los cpes o potses.
- [Reporte de la API](/es/krill2/logger/#reporte-de-la-api): logs referentes a las peticiones que se realizan vía api. Esta parte cobra mayor interés cuando hay un CRM externo asociado a isp de krill, ya que se pueden visualizar todas las acciones y posibles errores.


## Reporte del panel de administración

![Admin reports](/img/krill2/logger/02-admin-reports.png)

Desde esta vista se puede visualizar todas aquellas acciones realizadas desde el panel de administración clásico (Krill v1) y quedan registradas las altas, modificaciones y borrado de:

* Customers
* CPE
* POTSes
* Users

En el reporte podremos ver la fecha, quien realizó la acción, el tipo de dato que modificó así como el tipo de modificación y datos que se cambiaron. 

## Reporte de la API

![APO Reports](/img/krill2/logger/03-api-reports.png)

El reporte de la API permite mostrar todos los detalles realcionados con la fecha, usuario, su IP, qué tipo de acción realizó, la URL de la API implicada, tiempos de respuesta, así como los datos que se enviaron para modificar. 

::: tip
En ambas vistas podemos realizar filtrado, no solo por fechas, si no por diversos criterios como: Usuario, tipo de petición, tipo de dato modificado, etc.
:::
