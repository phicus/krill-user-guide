---
title: GIS
description: Inventory of passive network elements.
lang: en-US
prev: null
next: null
sidebar: auto
tags:
- krill2
- module
- gis
- admin
- api
---
# GIS

From this module we can add and visualise the passive elements of a fibre network usually called NAP or CTO. The module is accessible from the Admin option. 

<p align="center"><img src="/img/krill2/gis/01-admin-menu.png" width="433"></p>

From the main dashboard you can access:

- [Create new NAP](/es/krill2/gis/#new-nap): create new NAP.
- [List of NAPs](/es/krill2/gis/#list-of-naps): list of all existing NAPs.

![GIS Dashboard](/img/krill2/gis/02-module-gis.png)


## New NAP

![New NAP](/img/krill2/gis/03-create-nap.png)

In this view, the data of the new NAP is added, some fields are mandatory and others are optional. The details of these are shown below.


- **Name**: Descriptive name for the NAP (currently it is necessary to name it SLUG type without spaces and special characters, example box-zoneA-neighbourhoodZ-001).
- **OLT**:  OLT to which it is connected.
- **PON**:  frame/slot/port to which it is connected (Optional).
- **Address**: Field used to perform the search by entering the name of the street where the NAP is located. The location can also be selected by clicking directly on the map on the right side.
- **Capacity**: Number of ports of the NAP (Optional).
- **Opt_power**: Field indicating the optical level of the NAP (Optional).
- **External_id**: external id in case an external system is used to register the NAP.

### Associate NAP to CPE

Once the NAP has been created, it will be available to be assigned to the cpes. The name of the corresponding NAP is associated in the Topology field of the cpe editing tab. It is also possible to associate the NAP from the map on the left by clicking directly on it.

![isp cpe](/img/krill2/gis/05-cpe.png)


###

## List of NAPs


List of existing NAPs in AdminSchema:

![list NAP](/img/krill2/gis/04-list-nap.png)

### World Map

In addition to the listing from the WorldMap view, only if desired, clicking on the map button at the top right, to the left of the router icon, will display the NAPs in their corresponding location.

![Map](/img/krill2/gis/06-map.png)