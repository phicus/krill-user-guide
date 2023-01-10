---
title: ISP Customer | CPEs
description: CPEs' list and management.
lang: en-US
prev: /krill2/isp-customer/customers
next: /krill2/isp-customer/potses
tags:
- krill2
- module
- isp
- cpes
- realm
---
# ISP Customer | CPEs

From the main view a list of CPEs grouped by Realm (the network can have one or more Realms) is shown, there we can do massive changes selecting more than one CPE at a time.

![ISP CPEs Dashboard](/img/krill2/isp-customer/0201.png)

The CPE is the device that is installed in the customer's house to provide the services.

::: tip
Depending on the technology the CPE can have different names:

- **GPON**: ONT
- **WiMAX**: Antenna/Router
- **DOCSIS**: Cable Modem
- **G.HN**: Router
:::

## CPEs' creation

To create a CPE we are going to click the button on the bar at the top of the page and then fill in the blanks that are necessary depending on the technology::

<p align="center"><img src="/img/krill2/isp-customer/0205.png" width="500"></p>

Once we have done that, we are going to click on the 'Add new CPE' button and it will redirect us to the CPEs' edition page.

## CPES edition

The CPE edition page shows different tabs in which the different information needed for provision a monitor is grouped.

### Basic Data Tab

![ISP CPE Basic Data](/img/krill2/isp-customer/0202.png)

Depending on the technology, some blanks will have to be completed and some others not. In the following lines we are going to show them in detail.

#### Blanks that all technologies have.

**Basic Data**

- **Technology**: Device's technology
- **CPE Model**: Model (group by manufacturer)
- **Expiration date**: The date when Krill is going to automatically disable the CPE's internet access.

**Settings**

- **Active**: when is checked we are going to have the CPE registered in the service.
- **Access to internet**: when is checked the device will get an IP with access to the internet.
- **Must register VoIP lines in external Server**: when is checked the phone will register in an external server, different to Krill's server.
- **Is a probe**: Tag to mark the device as a probe.
- **Enable notifications**: when is checked Krill will notify us in the chat of any event involving this CPE.

**Profiles e IP**

- **Address Profile**: Specifies the profile Krill is going to use to give an IP to the device.
  * Public: Krill will give an IP from the public IP addresses.
  * NAT: Krill will give an IP from the NAT IP addresses.
  * Fixed: Krill will save the fixed IP for the CPE and will not give it through DHCP.
- **IP Fixed**: Fiexed IP that is going to be saved for the CPE.
- **IP Fixed LAN**: IP and size of the subnetwork that has to be configured in the device's LAN configuration.
- **Metro VLAN**: ID of the VLAN that is going to be used if it is Metro ethernet.

#### GPON technology

To register a new optical fiber terminal in our network the information we must fill in depends on the ONT's manufacturer, it is different in every case.

- **Sn**: if it is Huawei, ZTEm FH we are going to use the GPON-SerialNumber for the sincronization with the OLT terminal.
- **Dsn**: in the case of ZTE we are going to use the SN with the acronym ZTE in this blank to link the ONT with the TR069.
- **Model**: we can choose from the list that is displayed and contains all the ONU's models that are used in the network.
- **Speed Profile**: we choose the fare that we have previously defined in the OLT as well as in Kiwi.
- **Line Profile**: VLANs' map that is going to be used in the ONT's provision.
- **TV**: this activates or deactivates the TV in the CPE's service.
- **Topology**: Blank to fill in with the syntax used to identify the fibers.

#### WiMAX technology

We are going to need the following information o fthe antenna:

- **MAC**: corresponding to the antenna that is going to ve installed in the customer's house or where the signal is going to be received.
- **Model**: this list will show the models that every operator uses in their network.
- **Speed Profile**: the fare we want that antenna or PPoE to have.
- **PPPoE Username/Password**: in the case the connection works with PPoE instead of DHCP.

#### DOCSIS technology

To register a modem we are going to need:

- **MAC**: the mac of the device that is going to be installed in the customer's house.
- **Model**: is a list where the correct model for provision needs to be selected.
- **Speed Profile**: the fare or speed that is going to be assigned to the modem.

#### G.HN technology

To register a G.HN we are going to need:

- **MAC**: the mac of the device that is going to be installed in the customer's house so we can identify it and give it an IP.
- **Model**: is a list where the correct G.HN model for provision needs to be selected.
- **Speed Profile**: the fare or speed that is going to be assigned for this connection.

### Administrative Info Tab

![ISP CPE Administrative Info](/img/krill2/isp-customer/0203.png)

In the Administrative Info tab the blanks related with the topology and the device's localization are grouped. Here we can find:

- **Topology**: Information about the CTO in which the device is connected, or any other impotant information for the management of the network.
- **External ID**: Device's external ID.
- **Dirección**: Information about the device's country, city, neighborhood, postal code and address.
- **Latitude y Longitude**: It can be filled with the coordinates to choose its position in the world map.
- **Notes**: un comentario para identificar o marcar el equipo.

### POTSes Tab

![ISP CPE POTSes](/img/krill2/isp-customer/0204.png)

If the device has available telephony ports we can configure them through the different blanks:

- **CLI**: Phone number that we want to associate to the CPE.
- **Label**: Name of the phone or something to identify it.
- **Context**: Select the call context among the available ones.
- **Language**: It determinates the language of the answering machine and the options on the central.
- **Username y Password**: Only needed in the case that the phone is registered on an external telephony server.  If it is registered on Krill's PBX this are optional.
- **DTMF**: It allows us to choose the DMTF of the phone.
- **PBX Ext**: When is checked we choose the extension as a part of the virtual PBX.
- **Voicemail Password**: We established the password for the voice mail.
