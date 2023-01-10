---
title: Monitoring | Host Groups
description: Devices' list grouped by the kind of host with the condition' summary for each one.
lang: en-US
prev: /krill2/monitoring/matrix
next: /krill2/monitoring/sonar
tags:
- krill2
- module
- monitoring
- host-groups
- hosts
- summary
---
# Monitoring | Host Groups

This view groups all the kind of hosts that are registered in Krill, they are differentiated by their condition and its color depends on the condition too.

![MonitoringHostGroups](/img/krill2/monitoring/0301.png)

It is useful to look at the different network's devices condition quickly.

::: tip
The different conditions according to their color are:
- **Green**: it means they are ok/reachable.
- **Red**: they have some problem or are down.
- **Orange**: some service is alarmed.
- **Blue**: the device has not been checked and is in an unknown condition.
- **Purple**: the service or host is unreachable.

If the color is light it indicates that the device or service is under control with an ACK or Downtime.
:::

Here the network's OLTs, routers, or servers that Krill monitors, among others are listed.

Each Host Group has a direct link to its search that makes the access to its list easier by just clicking on them.
