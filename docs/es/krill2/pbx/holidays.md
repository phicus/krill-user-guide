---
title: PBX | Festivos
description: Gestión de PBX.
lang: es-ES
prev: cdrs
next: contexts
tags:
- krill2
- módulo
- pbx
---
# PBX | Festivos

En este apartado podemos gestionar los días festivos que usará nuestra PBX para desviar llamadas, agrupadas por Realm (puede haber uno o más Realms).

![PBX Holidays](/img/krill2/pbx/0501.png)

Desde la barra superior, podemos añadir nuevos días festivos, o si marcamos varios a través del selector que se encuentra en la lista, eliminar de forma masiva varios a la vez.

<p align="center"><img src="/img/krill2/pbx/0502.png" width="500"></p>

Para añadir un nuevo festivo, deberemos pulsar sobre el botón superior y rellenar los dos campos que contiene el cuadro de diálogo:

- **Day**: Día y mes del año, separados por `/`.
- **Comment**: Etiqueta identificativa del día festivo.

::: tip
Si especificamos como día `$easter$` el sistema aplicará automáticamente el **Viernes Santo**, independientemente en el día del mes que caiga cada año.
:::

Para editar un festivo, tan solo debemos pulsar sobre el icono del lápiz que se encuentra en el listado y modificar los valores que se quieran.

<p align="center"><img src="/img/krill2/pbx/0503.png" width="500"></p>
