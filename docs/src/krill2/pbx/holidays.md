---
title: PBX | Holidays
description: Gestión de PBX.
lang: en-US
prev: /krill2/pbx/cdrs
next: /krill2/pbx/contexts
tags:
- krill2
- module
- pbx
---
# PBX | Holidays

En este apartado podemos gestionar los días festivos que usará nuestra PBX para desviar llamadas, agrupadas por Realm (puede haber uno o más Realms).

![PBX Holidays](@images/krill2/pbx/0501.png)

Desde la barra superior, podemos añadir nuevos días festivos, o si marcamos varios a través del selector que se encuentra en la lista, eliminar de forma masiva varios a la vez.

<p align="center"><img src="@images/krill2/pbx/0502.png" max-width=30% width=500;></p>

Para añadir un nuevo festivo, deberemos pulsar sobre el botón superior y rellenar los dos campos que contiene el cuadro de diálogo:

- **Day**: Día y mes del año, separados por `/`.
- **Comment**: Etiqueta identificativa del día festivo.

::: tip
Si especificamos como día `$easter$` el sistema aplicará automáticamente el **Viernes Santo**, independientemente en el día del mes que caiga cada año.
:::

Para editar un festivo, tan solo debemos pulsar sobre el icono del lápiz que se encuentra en el listado y modificar los valores que se quieran.

<p align="center"><img src="@images/krill2/pbx/0503.png" max-width=30% width=500;></p>
