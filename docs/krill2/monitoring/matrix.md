---
title: Monitoring | Matrix
description: List of hosts and services with metrics.
lang: en-US
prev: /krill2/monitoring/problems
next: /krill2/monitoring/host-groups
tags:
- krill2
- module
- monitoring
- matrix
---
# Monitoring | Matrix

Matrix is a list of devices and services that allows us to see in the same place all the metrics registered in them as well as the hosts' registering or administrative information.

If we access Matrix without a predefined search, by default, we are going to see a list with favorites and the last searches that have been made to limit the posible results.

![MonitoringSmartTree](/img/krill2/monitoring/1101.png)

Once we have made any search, we will be able to see a list similar to this one:

![MonitoringSmartTree](/img/krill2/monitoring/1102.png)

Based on the search, if its a host or a service, there are different column groups that are going to be displayed automatically, and others that are going to be added, also automatically, based on the services and metrics available.
The basic columns are:

- Host/Servicio
- Date of the last change
- Down/Up bandwidth*
- IP Address*

The columns marked with an * appears only on the Hosts results.

::: tip
We can quickly filter the results among **Host** and **Services** by clicking the selector that appears on the top.
:::

If we want to show or hide the different column groups, we can do it using the selector that appears on the top:

![MonitoringSmartTree](/img/krill2/monitoring/1103.png)

::: tip
The Administrative and Registering column groups, that are only shown for the Hosts, have information regarding the OLT or CMTS in which the devices are registered, the Serial Number, MAC, upstream/downstream profiles, models, as well as the customer information, etc.
:::
