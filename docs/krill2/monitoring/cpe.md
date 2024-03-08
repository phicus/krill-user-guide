---
title: Monitoring | CPE
description: CPE technical file.
lang: en-US
prev: host
next: null
tags:
- krill2
- module
- monitoring
- cpe
- services
---
# Monitoring | CPE

[[toc]]

The file is th main element in Krill about the host's monitoring. It is generated for each CPE and for each network device or server.

In the file appears all the information obtained through the different Krill services and it is shown in real time as well as the historical register of the services in the cases it is being saved.

<p align="center"><img src="/img/krill2/monitoring/host/-0000.png" width=""></p>

From the Actions menu we have all the actions available for the device. For the GPON CPEs we have the following actions:

<p align="center"><img src="/img/krill2/monitoring/host/-0001.png" width="252"></p>

From the team's dropdown, we have available information about when the team was created and when it was last updated, and below it continues showing various information:

- **Uptime**: Displays the time it has been operating without interruptions since its last restart or shutdown.
- **View CPE check info**: Enables a dropdown on the right side, which shows information from the check.
- **Copy CPE name**: Copies the team's name to the clipboard.
- **Links**: Link to....
- **Reboot**: Restarts the ONT.
- **Unprovision**: Unprovisions the ONT. Removes its service ports from the OLT.
- **Reprovision**: Reprovisions the ONT. Removes its service ports from the OLT and then inserts them back again.
- **Factory**: Resets the ONT to factory settings.
- **Reconfig**: Reconfigures the ONT with an ACS session.
- **CPE Edition**: Opens in another tab the Customer part of that CPE from Krill.
- **Show in worldmap**: Opens in another tab a search with that CPE in the Worldmap view of Krill.
- **CDR Table**: Filters the calls from the phone associated with that CPE in the CDR view of Krill.
- **CWMP Table**: Filters the tr069 sessions of that CPE in the cwmp view of Krill.

The file has different parts or modules. Each file will show the information needed for each device. The information is associated to the different host's services.

<p align="center"><img src="/img/krill2/monitoring/host/-0002.png" width=""></p>

## CPE Overview

It is the main and initial section of the card for CPEs, in it we have the history, tasks, connected devices, and the service timeline of the host. Also, the technical data, registration, DHCP, and telephony information summarized.

### Main Information

Hosts can contain technical and registration data, as well as IP and telephony information. All of this is grouped in various boxes organizing all this information.

### Services Timeline

Each CPE type Host can contain different services that include the latest outgoing messages as well as their metrics (when available), all of which is rendered on a Timeline with the history of each one, adding the most important events (such as IPs or provisioning events).

This is a list of the most used services grouped by technology:

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

## Settings

It offers the possibility to configure the WIFI channels, change the transmission power, switch channels, and configure the SSID settings.

<p align="center"><img src="/img/krill2/monitoring/host/-0003.png" width=""></p>

También se muestran las WANs obtenidas de la provisión y del servicio ACS.

<p align="center"><img src="/img/krill2/monitoring/host/-0004.png" width=""></p>

## Device 

Displays information about devices connected to the equipment, such as the name, frequency band, SSID, IP, MAC, etc.

<p align="center"><img src="/img/krill2/monitoring/host/-0005.png" width=""></p>

## Diagnostics

If the CPE allows it, various tests can be performed that enable a quick diagnosis of the state of the client's connection and the WiFi emitted by the equipment:

- Ping, we can choose the destination IP for the device's ping.
- DNS, we can choose which destination we want the device try to get through DNS.
- Site Survey to look how crowded the networks are and the noise in the antennas' channels of the device.
- Speed test, where we can check the speed of the service.

<p align="center"><img src="/img/krill2/monitoring/host/-0006.png" width=""></p>


## Graphs

Access to the bandwidth usage chart, Tx/Rx, Attenuation, SNR by the CPE as well as any other metric related to the Host itself with time history and the option to choose the display dates.

<p align="center"><img src="/img/krill2/monitoring/host/-0007.png" width=""></p>







