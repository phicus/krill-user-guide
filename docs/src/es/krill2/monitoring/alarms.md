---
title: Monitoring | Alarmas
description: Listado de alarmas de Host y Servicios.
lang: es-ES
prev: /es/krill2/monitoring/
next: problems
tags:
- krill2
- módulo
- monitoring
- alarmas
---
# Monitoring | Alarmas

Búsqueda predefinida que da como resultado las alarmas generadas por Krill de la red ordenadas de mayor a menor nivel de importancia según la afectación.

![MonitoringAlarms](@images/krill2/monitoring/0101.png)

::: tip
Se considera alarma para Host aquellos que estén **DOWN** y para servicios los que estén en estado **CRITICAL**.
:::

La búsqueda inicial que aparecerá en el cuadro de búsqueda superior filtrará aquellos resultados que estén ya controlados (mediante un **ACK** o un **Downtime**), cuyo estado sea considerado **HARD** y cuyo **business impact** sea mayor o igual a 2:

```
alarm:true handled:false hard_state:true business_impact:>=2 type:all
```

En la parte superior tenemos un selector que nos permite filtrar entre Hosts y Servicios. Así como un selector que nos permite cambiar el criterio de agrupación de resultados por: Buisiness Impact, estado y host.
