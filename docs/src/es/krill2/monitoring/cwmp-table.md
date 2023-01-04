---
title: Monitoring | Tabla CWMP
description: Listado de sesiones TR069 de la red.
lang: es-ES
prev: smart-tree
next: host-events
tags:
- krill2
- módulo
- monitoring
- cwmp
- tr069
---
# Monitoring | Tabla CWMP

Vista que muestra la información de las sesiones de tr069 que Krill ha tenido con las diferentes ONUs/routers de la red

Muestra el cpeID, la dirección  IP de la WAN de tr069, el fabricante del equipo, el modelo con el que se identifica, la versión de software del equipo, el tipo de sesión y la hora a la que empezó y terminó

![MonitoringCWMPTable](@images/krill2/monitoring/0801.png)

Al hacer clic sobre el icono de la flecha izquierda para cada sesión, se mostrará el detalle de los datos recibidos para dicha sesión.

Desplegando el menú situado arriba a la derecha de opciones podemos poner filtros para tener una búsqueda precisa. Por ejemplo podemos buscar las sesiones tr069 de un sólo equipo poniendo su CPEid.

<p align="center"><img src="@images/krill2/monitoring/0802.png" max-width=30% width=300;></p>

Desplegando el menú de fechas se puede elegir el intervalo de tiempo en el que ver las sesiones.

<p align="center"><img src="@images/krill2/monitoring/0803.png" max-width=30% width=500;></p>
