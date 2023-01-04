---
title: Monitoring | Smart Tree
description: Mapa topológico y de dependencia de localizaciones de la red.
lang: es-ES
prev: worldmap
next: cwmp-table
tags:
- krill2
- módulo
- monitoring
- smart-tree
---
# Monitoring | Smart Tree

Vista que contiene un mapa topológico de la red.

![MonitoringSmartTree](@images/krill2/monitoring/0701.png)

Gracias a haber configurado las dependencias en Krill podemos pintar cada equipo con su parentesco tanto ascendente como descendente.

En la vista se unen unos con otros y se muestra diferente información de su estado en directo. 

También nos permite pulsar sobre un equipo para visualizar cuál es su camino o siguiente salto de red así como un resumen del mismo con el estado de sus servicios.

![MonitoringSmartTree](@images/krill2/monitoring/0705.png)


Tenemos dos formas de visualizar: Elementos de red y red topológica. Podemos cambiar entre ellas pulsando en los iconos de la parte superior izquierda.

![MonitoringSmartTree](@images/krill2/monitoring/0704.png)

::: tip
Es posible filtrar el resultado por tipo de equipo, pudiendo elegir sólo visualizar los routers, por ejemplo, o las OLTs, entre otros.

<p align="center"><img src="@images/krill2/monitoring/0702.png" max-width=30% width=300;></p>

Otra opción es filtrar por localización de los equipos:

<p align="center"><img src="@images/krill2/monitoring/0703.png" max-width=30% width=250;></p>
:::
