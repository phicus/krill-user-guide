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

![MonitoringHostEvents](/img/krill2/monitoring/host/0000.png)

From the file the restart, provision/unprovision and reconfiguration actions on the CPE are done as well as the factory reset in those devices that have the option.

<p align="center"><img src="/img/krill2/monitoring/host/0001.png" width="252"></p>

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

<p align="center"><img src="/img/krill2/monitoring/host/0002.png" width="52"></p>

## CPE Monitor

It's the main module and the first one on the file for the CPEs, here we have the historical register and the timeline for the host's services. On the top we also have a summary with the technical information, and the information regarding the registration, DHCP and telephony.

### Main info

The host can contain technical and registration data, IPs or Phone info. All of this is grouped in few boxes that organizes all of them.  

### Services Timeline

Every CPE Host can contain different services that includes the last output and their metrics (when available), all are rendered in a timeline with the history of every one and adds the most important info (like IPs or provision events). 

There is a common service list grouped by technology:

**GPON**:
* **dhcp**: Return IP info (only if IP is provided internally by Phicus DHCP Server)
* **pppoe/ipoe**: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)
* **provision**: Return registration info (only if provision is realized by Krill)
* **qos**: Obtain the Quality of service, snr (signal noise ratio) and another parameters (only if Krill monitorizes the CPE QoS)
* **tr069**: Return ACS sessions info (only if CPE implements TR069 protocol)
* **txrx**: Get the transmission and receive signal parameters 
* **voice[X]**: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)

**DOCSIS**:
* **docsis**: Get downstream/upstream invalids channels.
* **dhcp**: Return IP info (only if IP is provided internally by Phicus DHCP Server)
* **downstream**: Get the down signal levels
* **provision**: Return registration info (only if provision is realized by Krill)
* **qos**: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)
* **tr069**: Return ACS sessions info (only if CPE implements TR069 protocol)
* **upstream**: Get the up signal levels
* **voice[X]**: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)

**G.HN**:
* **dhcp**: Return IP info (only if IP is provided internally by Phicus DHCP Server)
* **pppoe**: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)
* **qos**: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)
* **setup**: Retrieve the cable length and snr (signal noise ratio)
* **tr069**: Return ACS sessions info (only if CPE implements TR069 protocol)
* **voice[X]**: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)

**WIMAX**:
* **dhcp**: Return IP info (only if IP is provided internally by Phicus DHCP Server)
* **info**: Get the CPE model and firmware version
* **downstream**: Get the down signal levels
* **pppoe**: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)
* **qos**: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)
* **radio**: Get the air time in upload and download data
* **setup**: Retrieve the distance to AP and uptime
* **tr069**: Return ACS sessions info (only if CPE implements TR069 protocol)
* **upstream**: Get the up signal levels
* **voice[X]**: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)

## Administrative

Customer's administrative information: name, address, map location, comments, etc.

## Technology

Host's technical information such as the Service Ports' list and WANs obtained from the provision and from the ACS service.

![MonitoringHostEvents](/img/krill2/monitoring/host/0004.png)

## Device 

Information about the device installed, the ONT. It makes it possible to run WiFi's diagnosis tests and to see the condition of the Eth interfaces of the router in a visual and intuitive way.

![MonitoringHostEvents](/img/krill2/monitoring/host/0005.png)

## Services

Detailed information about host's service. Information about the last check, the dates it was made, outgoing messages, metrics and graphs and historical register of the condition changes.

![MonitoringHostEvents](/img/krill2/monitoring/host/0006.png)

## Diagnostics

If the CPE allows it differents test can be done that give the possibility to make a fast diagnostic of the customer conection and the WiFi the device is emitting:

- Ping, we can choose the destination IP for the device's ping.
- DNS, we can choose which destination we want the device try to get through DNS.
- Site Survey to look how crowded the networks are and the noise in the antennas' channels of the device.

![MonitoringHostEvents](/img/krill2/monitoring/host/0007.png)

## Graphs

Access to the CPE's bandwith graph as well as the graphs for any other metric related to the host with historical register and the possibility to pick the visualization dates.

![MonitoringHostEvents](/img/krill2/monitoring/host/0008.png)

## History

Events historical register and notifications delivery for the Host/CPE.

![MonitoringHostEvents](/img/krill2/monitoring/host/0009.png)
