---
title: Monitoring | Worldmap
description: Mapa mundial con posición de los diversos equipos de la red.
lang: en-US
prev: /krill2/monitoring/unprovisioned-onus
next: /krill2/monitoring/smart-tree
tags:
- krill2
- module
- monitoring
- worldmap
---
# Monitoring | Worldmap

Vista que posiciona en el mapa los equipos de la red y los pinta de color verde o rojo según su estado.

![MonitoringWorldmap](@images/krill2/monitoring/0601.png)

La búsqueda inicial incluye sólo los equipos con Bussiness Impact > 2, lo que nos da como resultado los equipos core de la red.

::: tip
Podríamos buscar los equipos registrados en un PON de un OLT y ver su estado, por ejemplo, la siguiente búsqueda nos mostraría los hosts registrados en el Frame/Slot/Port **0/5/2** de la OLT **oltCEEIM**:

```
regtag:0/5/2 regtag:oltCEEIM type:host
```
:::
