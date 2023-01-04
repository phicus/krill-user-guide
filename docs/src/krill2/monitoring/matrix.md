---
title: Monitoring | Matrix
description: Listado de host y servicios con métricas.
lang: en-US
prev: /krill2/monitoring/problems
next: /krill2/monitoring/host-groups
tags:
- krill2
- module
- monitoring
- matrix
---
# Monitoring | Matrix

Matrix es un listado de equipos o servicios que nos permite ver de una vez todas las métricas registradas en éstos, así como los datos de registro o administrativos en el caso de los hosts.

Por defecto, si accedemos a Matrix sin ningún tipo de búsqueda veremos un listado con favoritos y las últimas búsquedas realizadas para poder acotar los posibles resutados.

![MonitoringSmartTree](@images/krill2/monitoring/1101.png)

Una vez hayamos realizado cualquier búsqueda, podremos ver un listado similar al siguiente:

![MonitoringSmartTree](@images/krill2/monitoring/1102.png)

Hay diversos grupos de columnas que se cargarán de forma automática en función de si la búsqueda hace referencia a un host o a un servicio, y otras que según los servicios y métricas que se tengan, se añadirán de forma automática.

Las columnas básicas son:

- Host/Servicio
- Fecha del último cambio
- Down/Up bandwidth*
- IP Address*

Las columnas marcadas con un * hacen referencia exclusivamente a los resultados de tipo Host

::: tip
Podemos filtrar rápidamente los resultados entre **Host** y **Servicios** pulsando sobre el selector que se encuentra en la parte superior.
:::

Si queremos mostrar u ocultar los distintos grupos de columnas, podemos hacerlo a través del selector superior:

![MonitoringSmartTree](@images/krill2/monitoring/1103.png)

::: tip
Los grupos de columnas de Registro y Administrativos, que sólo se muestran en el caso de los Hosts, agrupan información relacionada con la OLT o CMTS en la que se encuentran registrados los equipos, el Serial Number, MAC, perfiles de subida/bajada, modelos, así como la información del cliente, etc.
:::
