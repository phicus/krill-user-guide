---
title: Monitoring | Problems
description: Hosts and services problems' list.
lang: en-US
prev: /krill2/monitoring/alarms
next: /krill2/monitoring/matrix
tags:
- krill2
- module
- monitoring
- problems
---
# Monitoring | Problems

Predefined search that gives as a result the network's problems ordered by their importance from the more to the least important based on the affectation level.

![MonitoringProblems](@images/krill2/monitoring/0201.png)

::: tip
It is considered a problem everything that is not **UP** if it is a host or not **OK** if it is a service.
:::

The main search thatis going to appear in the search bar on the top will filter the results that are already under control (with an **ACK** or a **Downtime**), the ones that are considered **HARD** and the ones whose **business impact** is greater than 2 or equal: 

```
problem:true handled:false hard_state:true business_impact:>=2 type:all
```

As it is seen in the Alarms view, at the top we have a selector that allows us to filer between Hosts and Services. And we also have a selector that allows us to change the result grouping rules by: Buisiness Impact, state y host.
