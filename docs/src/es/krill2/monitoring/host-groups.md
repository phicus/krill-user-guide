---
title: Monitoring | Grupos de Hosts
description: Listado de equipos agrupados por el tipo de host con un sumario de estados de cada uno.
lang: es-ES
prev: matrix
next: sonar
tags:
- krill2
- módulo
- monitoring
- host-groups
- hosts
- summary
---
# Monitoring | Grupos de Hosts

Vista que agrupa todos los tipos de Hosts que hay en Krill, los diferencia y en base a su estado los pinta de un color u otro.

![MonitoringHostGroups](@images/krill2/monitoring/0301.png)

Vista útil para de forma visual revisar el estado de los diferentes equipos de la red.

::: tip
Los diferentes estados en función del color son:
- **Verde**: quiere decir que están bien/alcanzable
- **Rojo**: que tienen algún problema/caídos
- **Naranja**: que algún servicio está alarmado
- **Azul**: que el equipo no ha sido chequeado y está en un estado desconocido
- **Púrpura**: que el servicio o host al que hace referencia está inalcanzable

Todos los colores pueden estar más tenues, indicando que esos equipos o servicios se encuentran controlados mediante un ACK o un Downtime.
:::

En ella se listan las OLTs de la red, los routers, o los servidores que Krill monitoriza, etc.

Cada Host Group te enlaza directamente a su búsqueda para facilitar su listado con sólo pinchar en ellos.
