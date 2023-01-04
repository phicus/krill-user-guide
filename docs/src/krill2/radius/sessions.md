---
title: Radius | Sessions
description: Control de sesiones PPPoE y Pool de IPs.
lang: en-US
prev: /krill2/radius/
next: /krill2/radius/ip-pools
tags:
- krill2
- module
- radius
- pppoe
- sessions
---
# Radius | Sessions

Vista detallada de todas las sesiones PPPoE de nuestra red. Las sesiones se muestran con los datos necesarios para identificarlas y filtrarlas.

Se proporciona los siguientes campos:

- ID del CPE
- Username, con el que se ha marcado la sesión
- MAC del equipo
- NAS del que proviene
- IP concedida a la sesión
- Tiempo que lleva la sesión activa

![Radius Sessions](@images/krill2/radius/0101.png)

::: tip
Desde este listado se permite terminar la sesión con el bótón de Disconnect Session de forma individual, o seleccionando varias sesiones de forma simultánea.
:::

Desde la barra superior, se pueden filtrar las sesiones automáticamente de diversas maneras pulsando sobre los menús centrales:

- Sesiones activas
- Sesiones duplicadas
- IP duplicada

El cuadro de búsqueda nos permite buscar sesiones o filtrarlas con cualquier dato de las mismas.
