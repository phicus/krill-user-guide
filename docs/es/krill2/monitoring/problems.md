---
title: Monitoring | Problemas
description: Listado de problemas de Host y Servicios.
lang: es-ES
prev: alarms
next: matrix
tags:
- krill2
- módulo
- monitoring
- problemas
---
# Monitoring | Problemas

Búsqueda predefinida que da como resultado los problemas de la red ordenados de mayor a menor nivel de importancia según la afectación.

![MonitoringProblems](/img/krill2/monitoring/0201.png)

::: tip
Se considera problema todo aquello que no esté **UP** de cara a los hosts y no esté **OK** para los servicios.
:::

La búsqueda inicial que aparecerá en el cuadro de búsqueda superior filtrará aquellos resultados que estén ya controlados (mediante un **ACK** o un **Downtime**), cuyo estado sea considerado **HARD** y cuyo **business impact** sea mayor o igual a 2:

```
problem:true handled:false hard_state:true business_impact:>=2 type:all
```

Al igual que en la vista Alarms, en la parte superior tenemos un selector que nos permite filtrar entre Hosts y Servicios. Así como un selector que nos permite cambiar el criterio de agrupación de resultados por: Buisiness Impact, estado y host.
