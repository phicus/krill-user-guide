---
title: Installer Tools
description: Installer Tools.
lang: en-US
prev: null
next: null
tags:
- krill2
- module
- installer-tools
---
# Installer Tools

The Installer Tool is designed to make the ONTs installation easier for the network's installer technician. It takes a few seconds for the technician to register and make a ONT work with a mobile phone or a tablet. 

It allows to register a CPE by registering the customer first; it uses the geolocalization of the mobile phone used to register the ONT and the SN is selected from the pending ONUs list.

![ISP Customer Dashboard](@images/krill2/installer-tools/0001.png)

By filling the 3 gaps, the CPE's provision is processed. After that, the monitoring information will appear and the information can be modified in the CPE's file that appears here: [módulo Customers](/krill2/isp-customer/cpes.html#edicion-de-cpes).

::: tip
We can put the serial number in three different ways:

1. Putting the digits in the corresponding gap.
2. Displaying the list that appears in the gap.
3. Clicking on the magnifying glass that gives acces to the pending configuration ONUS list ordered by OLT. 

![ISP Customer Unconfigured ONUs](@images/krill2/installer-tools/0002.png)
:::

Once it is selected, the device will appear in the **`CPE Watcher`** panel waiting for the OLTs information: granted IP, transmition thresholds, time since it was provisioned, etc.)

<p align="center"><img src="@images/krill2/installer-tools/0003.png" max-width=30% width=400;></p>

This information will allow the technician to know if some adiotional update on the installation is needed or to proccess, from the application, the unprovision of the device working and inserting a new one from the three dots menu that appears with every provisioned device.
