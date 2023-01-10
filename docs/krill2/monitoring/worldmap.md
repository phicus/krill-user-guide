---
title: Monitoring | Worldmap
description: World map with the location of the different network's devices.
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

This view shows the location of the network's devices and paints them with green or red depending on their condition.

![MonitoringWorldmap](/img/krill2/monitoring/0601.png)

The main search includes only the devices with Business Impact > 2, which gives us as a result the network's core devices.

::: tip
We can search the devices registered on a specific OLT's PON, and it will show its condition, for example, the following search will return the hosts that are registered in the Frame/Slot/Port **0/5/2** of the OLT **oltCEEIM**:

```
regtag:0/5/2 regtag:oltCEEIM type:host
```
:::
