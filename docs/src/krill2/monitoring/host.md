---
title: Monitoring | Host
description: Host's technical file.
lang: en-US
prev: /krill2/monitoring/history
next: null
tags:
- krill2
- module
- monitoring
- host
- services
---
# Monitoring | Host

The file is th main element in Krill about the host's monitoring. It is generated for each CPE and for each network device or server.

In the file appears all the information obtained through the different Krill services and it is shown in real time as well as the historical register of the services in the cases it is being saved. 

![MonitoringHostEvents](@images/krill2/monitoring/host/0000.png)

From the file the restart, provision/unprovision and reconfiguration actions on the CPE are done as well as the factory reset in those devices that have the option.

<p align="center"><img src="@images/krill2/monitoring/host/0001.png" max-width=30% width=252;></p>

From the Actions menu we have all the actions available for the device. For the GPON CPEs we have the following actions:

- **Recheck**: Checks the condition of the host and its services at the moment.
- **Acknowledge**: Configures an ACK for the host.
- **Schedule a downtime**: Configures a downtime for the host.
- **Reboot**: Restarts the ONT.
- **Unprovision**: Unprovisions the ONT. Deletes all the OLT's service ports.
- **Reprovision**: Reprovisions the ONT. Deletes its service ports from the OLT to put them back right after. 
- **Factory**: Gives a factory reset to the ONT.
- **Reconfig**: Reconfigures the ONT with an ACS session.
- **CPE Edition**: Opens in a new tab the customer information for that Krill's CPE.
- **Show in worldmap**: Opens in a new tab a search with that CPE in the Krill's Worldmap view.
- **CDR Table**: Filters the phone calls associated to that CPE in Krill's CDR view.
- **CWMP Table**: FIlters the TR069 sesions for that CPE in Krill's cwmp view.

The file has different parts or modules. Each file will show the information needed for each device. The information is associated to the different host's services.

<p align="center"><img src="@images/krill2/monitoring/host/0002.png" max-width=30% width=52;></p>

## CPE Monitor

It's the main module and the first one on the file for the CPEs, here we have the historical register and the timeline for the host's services. On the top we also have a summary with the technical information, and the information regarding the registration, DHCP and telephony. 

## Administrative

Customer's administrative information: name, address, map location, comments, etc.

## Technology

Host's technical information such as the Service Ports' list and WANs obtained from the provision and from the ACS service.

![MonitoringHostEvents](@images/krill2/monitoring/host/0004.png)

## Device 

Information about the device installed, the ONT. It makes it possible to run WiFi's diagnosis tests and to see the condition of the Eth interfaces of the router in a visual and intuitive way. 

![MonitoringHostEvents](@images/krill2/monitoring/host/0005.png)

## Services

Detailed information about host's service. Information about the last check, the dates it was made, outgoing messages, metrics and graphs and historical register of the condition changes.

![MonitoringHostEvents](@images/krill2/monitoring/host/0006.png)

## Diagnostics

If the CPE allows it differents test can be done that give the possibility to make a fast diagnostic of the customer conection and the WiFi the device is emitting:

- Ping, we can choose the destination IP for the device's ping.
- DNS, we can choose which destination we want the device try to get through DNS.
- Site Survey to look how crowded the networks are and the noise in the antennas' channels of the device. 

![MonitoringHostEvents](@images/krill2/monitoring/host/0007.png)

## Graphs

Access to the CPE's bandwith graph as well as the graphs for any other metric related to the host with historical register and the possibility to pick the visualization dates.  

![MonitoringHostEvents](@images/krill2/monitoring/host/0008.png)

## History

Events historical register and notifications delivery for the Host/CPE.

![MonitoringHostEvents](@images/krill2/monitoring/host/0009.png)
