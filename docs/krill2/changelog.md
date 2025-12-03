---
title: Changelog
description: Krill 2 Changelog
lang: en-US
navbar: false
sidebar: auto
sidebarDepth: 2
prev: null
next: null
tags:
- krill2
- changes
- changelog
---

# Changelog

## December 2025

### Krill
 * The error that blocked services in ACK state in Rubik has been fixed.  
 * Now Krill can notify (this is an optional feature) of massive ONU outages due to power cuts

### Krill-UI

 * Fixed an error where the CPE record could display outdated "losi", "lofi", or "dyinggasp" states

## November 2025

### Krill

**New features**:
 * A field has been added to the WAN view table in the CPE tab options to display the Status.
 * Fixed a problem with Edgemax UPS monitoring.
 * Adamo V2 API diagnostics have been incorporated into Rubik.
 * Krill can now warn (this is an optional feature) of massive ONU outages due to power cuts.
 * Implementation of TR069 of the WAN section of the TP-Link XX532v model

**Some minor bugfixes**:
 * A permissions issue has been corrected that allowed Krill users with access to a single realm to view all CPEs on the network in the CWMP_Session and Events views.
 * Fixed an issue where certain endpoints were disappearing from Swagger.
 * Fixed an error that prevented the Admin application from loading.
 * Radius: Fixed a bug with mschap authentication
 * Solving several bugs in ZTE models in Proxy 2
 * Agregado soporte multiples servidores KEA Dhcp6
 * Arreglado un error que hacía que la búsqueda y paginación en la aplicación Admin no funcionara.


## October 2025

### Krill

**New features**:
 * Expanded the external_id field for CPE and CUSTOMER entities to 256.
 * Integrated the Adamo v2 API into Rubik.
 * New search functionality for DDIs associated with virtual PBXs in the CDR view.
 * Made the necessary changes to monitor the Mercusys AG12 model via TR069.
 * Integration of TP-Link DS-P7000 family OLTs.
 * Resource optimization in WiFi/WiMAX network monitoring.
 * Core monitoring improvements: configurable edge detection, full monitoring support for older Ubiquiti models, and reduced server resource consumption.
 * Enhanced monitoring for Ubiquiti AirMax Point-to-Point links.
 * Improvements in krill-docsis: lower resource usage during monitoring, UI-based editing of return frequencies, and improved CLI tools.
 * Added the billing_profile field to the POTS API.
 * Restored alarms for critical services such as disk usage status.

**Some minor bugfixes**:
 * Krill did not correctly display the IPv6 address assigned on DOCSIS devices with KEA.

### Krill-UI

**New features**:
 * Improvements have been made to the CPE tab to make the address_profile and several POTSES more accessible.
 * The ability to perform a reverse city lookup has been added to Matrix.
 * Improved reliability of voice service monitoring in the CPE details view.

**Some minor bugfixes**:
 * Fixed a bug where the hostevents view could fail to load data in certain cases.
 * Fixed an issue where mobile devices with small screens couldn’t access the logout button.
 * Fixed an issue where Matrix CSV export did not include device IPs.
 * Fixed several bugs that could prevent access to the NAPs application.
 * Fixed an issue where the CPE view’s graph container could be vertically cut off on large screens.
 * Fixed an issue where the login button in the interface could become disabled under rare circumstances.
 * Fixed an issue where the hostevents table could display incorrect dates for certain events.
 * Fixed an issue in the management of bitstream CPEs without a speed profile.
 * Fixed a bug where rounding to two or more decimal places was not done correctly.

## September 2025

### Krill

**New features**:
 * Added the option to reprovision ONUs from the ISP-CLI.
 * Fixed IP reservation has been implemented for clients in arrears, preventing these addresses from being released when the block is applied.
 * It is allowed not to assign speed to bitstream CPEs.
 * It is allowed to change the frequency of Upstreams in DOCSIS networks from the UI.
 * Added support for WAN monitoring on the TP-Link XX530v model.

**Some minor bugfixes**:

 * Fixed several issues in the generation of the URL link for Proxy V2 and management IPs.
 * Fixed the issue of losing IP visibility on the website for Wimax devices.
 * Optimized KEA to improve DHCP response after a power outage in a specific area.
 * Fixed a Calix ONT bug that allowed internet access when the internet option was disabled.
 * The 401 error when logging into Krill has been fixed.
 * Fixed a decoding issue with certain traps on Huawei OLTs.
 * Fixed a monitoring issue with Asterisk on servers running Ubuntu 24.
 * Fixed a display issue with CDRs in the Monitoring module.

### Krill-UI

**New features**:

 * Added the option to select a GIS NAP in the Installer-Tools APP.
 * Fixed an issue where SSIDs could be displayed under the wrong frequency on certain models and configurations (e.g., an SSID operating on 2.4GHz could also appear under the 5GHz band).

**Some minor bugfixes**:

 * A bug has been fixed where the login screen could display improperly formatted errors.
 * Several optimizations have been made to the administrative data sheet of the CPE to prevent slowdowns during editing.
 * Fixed an issue where iOS devices could not access the logout button.

## August 2025

### Krill

**New features**:

 * Traceroute, Download, Upload, and WiFi Neighboring diagnostics have been configured for the TP-Link Archer C80 model.
 * Added the option to modify bandwidth via API for models using TR181.
 * Improvements to the CTO monitoring interface, including displaying the name next to the ID when searching for NAPs.
 * Implemented a UI change to adapt proxy2, which prevents the IP from being passed directly.
 * Swagger has been revised to display JSON in /isp/cpes.
 * CPE links have been refactored to be compatible with proxy2, while maintaining compatibility with proxy1.
 * The distance between ONT and OLT has been implemented in ZTE OLTs.
 * Fixed a bug that prevented searching by regtag and regstate at the same time in the Matrix view.
 * Added the customer's external_id field to the Matrix view.
 * Added the option to query and unban banned IPs in the API through ISPCLI.

**Some minor bugfixes**:

 * Fixed a bug that caused excessive disk usage.
 * Added the ability to sort by administrative data columns in the Matrix view.
 * Addressed the failure to perform a reconfig by ispcli of ispadmin in some specific cases.
 * Fixed an issue when performing a reconfig via ispcli on the new Krills.
 * Fixed an issue with Radius and Netelastic where the correct Framed-Pool attribute was not returned when the status was unpaid.
 * Resolved a failure that prevented performing a reconfig via ISPCLI.

### June 2025

### Krill

**New features**:

 * The possibility of setting the ACS URL on ZTE OLTs via OMCI for equipment from different manufacturers has been added.
 * Added a cache to reduce repeated requests to the KEA API.
 * Updated alarm criticality to make Slack channels less noisy.

**Some minor bugfixes**:

 * Fixed an issue that prevented displaying the IP on the web for WIMAX devices under certain conditions.
 * The SSL issues related to certificates were resolved.
 * Fixed an issue where private IPs of Wimax devices assigned via DHCP were not always displayed in the monitoring view.
 * Fixed an issue where the IP visibility was lost on the web interface for Wimax devices connected via PPPoE.
 
### Krill-UI

**New features**:
 
 * Improved the POTs view, it will only show CPEs that have an associated CLI.
 * Fixed an error in the radio options view that prevented reactivating a deactivated SSID.
 * Fixed an issue that prevented some Huawei OLT traps from being processed correctly.

### May 2025

### Krill

**New features**:

 * Added the possibility to filter by OLT the UNOs pending provisioning.
 * We optimised the monitoring of the Huawei HG8247T model.
 * The task of provisioning CPEs that are enabled/disabled for internet access (Huawei and ZTE OLTs) is optimized.
 * The billing_profile field has been added at the POTs level in the ISP API.
 * GPON API available in Swagger.
 * Influx monitoring added.
 * New PON port bandwidth graphs for Calix OLTs.

**Some minor bugfixes**:

 * Several minor errors fixed.
 * Fixed service issue in Krill API when restarting RabbitMQ.
 * Correction in fixed IP delivery in bitstream scenarios.
 * Correct telephony status for F680 model.


### Krill-UI

**New features**:

 * Modified Matrix view to show attributes with the same name stacked in the services view.
 * Optimized data loading on the form, reducing load time.
 * TR181 support for Ethernet Stack interfaces.
 * Wifi-neighboring diagnostics added for ZTE F670L model.

**Some minor bugfixes**:

 * Fixed a visual bug related to refreshing of CPEs graphs when changing filters.
 * Fixed missing data in the tab timeline.
 * Fixed the error that prevented the traceroute test from displaying.
 * CPE file: correction in telephony monitoring in some models.
 * Correct telephony monitoring in models with TR181.

### April 2025

### Krill

**New features**:

 * Swagger 2.0 has been removed and replaced with Swagger UI and Redoc, both compatible with OpenAPI 3.0.
 * Improved response time for a BGP session drop in core equipment.

### Krill-UI

**New features**:

 * Added search function in the Admin application (NAPs) when possible.
 * Enabled the ability to modify coordinates directly when creating a NAP.
 * The exact number of sessions will be displayed in the active-sessions graph.

**Some minor bugfixes**:

 * Fixed errors in the CPE record.
 * Reviewed the retrieval of ethernet cables in the record to fix an error with the AX1GPV model.
 * Fixed the error that prevented copying an IP in the CPE record.

## March 2025

### Krill

**New features**:

 * Actions to be performed on the provision of a CPE after its modification are optimised.
 * Integration of the Fiberhome HG6143D model into the system.  
 * Preparation of the API to support OpenAPI 3.0.
 * At ZTE, we added the VLAN tag and priority in the TR-069 configuration to improve compatibility with UNO models from different manufacturers.
 * Added several minor improvements to the lease viewer.
 * Added support for monitoring of Fiberhome HG6243C / HG6244C models.
 * Added support for monitoring Nokia G-0425G-C / G-1425G-B models.
 * Added for provisioning in ZTE the vlan tag and priority in the TR069 configuration, to make it compatible with UNO models from different manufacturers.
 * Added the possibility to use the ‘tag’ mode in the ethernet port mapping for provisioning with VSol.

**Some minor bugfixes**:

 * Fixed problem in the monitoring of the OLT ZTE C600 that caused the PONs not to be displayed.
 * Disabled error message indicating no connection to ACS server for models without TR-069.

### Krill-UI

**New features**:

 * Improved data retrieval from Ethernet ports.
 * Optimised the CPE tab, decreasing the loading time and memory consumption.
 * Improved DHCP lease viewer:
    - In IPv4 the lease time will be displayed in days or hours.
    - In IPv6 the number of fields in the table has been reduced. 

**Some minor bugfixes**:
 
 * Issues resolved in the CPE's Speed test.
 * Disabled the error message indicating no connection to the ACS server for models without TR069.
 * Fixed a bug where the serial number validation was displayed when creating a CPE without serial number.

## February 2025

### Krill

**New features**:
 
 * Provisioning of ACS (TR069) on ZTE OLTs.
 * Improved provisioning of ZTE WANs.
 * Monitoring of CATV port optical levels in ZTE OLTs.
 * In Huawei OLTs, real-time monitoring of CPEs now includes the status of their Ethernet ports, showing whether devices are connected even when they do not support TR-069 (typically any bridge ONT).
 * Improved data retrieval for TP-Link neutral routers.
 * Added support for special characters in a CPE's DSN.
 * Integrated monitoring of the Albentia BS850 base station.
 * Added graphing and checking of CPU and temperature thresholds on the ZTE C600 OLT cards.
 * Added the ability to manage call forwarding in Asterisk from the CLI.
 * Restored cablemodem model checking for DOCSIS networks.

**Some minor bugfixes**:

 * Fixed a bug where CWMP sessions were not displayed in TR069.
 * Fixed an issue with speed tests in certain configurations.
 * Solved bug that made backups in olt VSOL and TELEVES not to be done every 24h.

### Krill-UI

**New features**:

 * Improved retrieval of Ethernet ports in the CPE profile.
 * Added real-time monitoring of telephony status in the CPE profile for "voice1" and others.

**Some minor bugfixes**:

 * Fixed a bug in several tables in the application that caused all their objects to be displayed at once when clicking on one of them.
 * Fixed an issue where Ethernet cables were displayed on incorrect ports in the CPE profile.
 * Fixed an issue where SSIDs that were not actually enabled appeared in the CPE profile for certain TP-Link models.

## January 2025

### Krill

**New features**:

 * Operating System - Cleanup of older versions of python.
 * Added configuration and reservation of IPs per API when creating, updating or modifying a CPE in KEA-DHCP environments.
 * Added provisioning by trap on Huawei and ZTE OLTs.

**Some minor bugfixes**:

 * Fixed a bug that prevented access to the KRILL Navigable API. The API can now be used from the browser again, but this access will be deprecated in favour of Swagger.
 * Fixed an issue with Wimax CPE in router mode in KEA. Added the ability to assign an IP address to the Wimax CPE in bridge mode when the bridge option is enabled on the Krill CPE.
 * Fixed a bug where it was not possible to make modifications to WiFi radios on devices with TR181 datamodel.
 * For CPEs using the TR181 datamodel, we now show and categorise devices connected via LAN that do not report whether they are connected via WiFi or Ethernet.
 * Fixed a bug that prevented the display of graphs when a certain date range was chosen.
 * Fixed a problem that caused data exports to download an empty document.
 * Solved calculation of free ip IP available in ISC DHCP.

### Krill-UI

**New features**:

 * Added the ability to include the SSID, Wi-Fi password and DSN of the installation directly from Installer Tools.
 * Updated the style of the Radius IP Pools table to prevent IPs that are no longer occupied from being confused with occupied IPs.
 * Improved the handling of radios and SSIDs in the settings tab of the CPE tab.

**Some minor bugfixes**:

 * Fixed a bug where the UI could have errors in fetching data using realms in certain cases.
 * Added real-time telephony data collection to the CPE tab. The colour of the POTSes button will now be yellow if there are fewer active lines than registered and blue if no line information is currently available.

## December 2024

### Krill

**New features**:

 * Integration of TP-Link EX220, Cdata ONT4GE1TVAS2WR and Skyworth GN630V models into the new monitoring system.
 * Implemented sanity checks in kea, clean up leases that are no longer needed.
 * We optimised the way of obtaining the configuration of the hosts stored in Krill to be used by the ACS, so that it can be more agile in managing the TR069 sessions with the equipment.
 * Validation of the API's cpe model.
 * Added the topology filter to the krill cpes API /api/v2/cps?topology=abc

**Some minor bugfixes**:

 * Fixed a bug in the IP Pools statistics in the Krill Radius module. Additional optimisations and improvements have been made.
 * Fixed an issue in ispcli (ispadmin) where leases of ranges without pools (fixed ip`s) were not being displayed. Changed the order of the Remote ID and Circuit ID columns.
 * Fixed a bug with Google Chrome browser that caused the login window to pop up.
 * Fixed a bug with custom exports in the ISP module.

### Krill-UI

**New features**:

 * If a group has its fail pointing to an extension, this will be reflected in the PBX schematic.
 * The links CPE button in the device tab has been made more accessible, it is located on the IP card.
 * The kermit module will include an IPv4 and IPv6 lease viewer.

## November 2024

### Krill

**New features**:

 * KEA log verbosity extended and log retention extended.
 * Optimization of task queuing in CPE monitoring using TR069.
 * Sending email notifications with an SMTP account without user credentials is now allowed.
 * Bandwidth monitoring of GPON interfaces in FiberHome equipment has been added.

**Some minor bugfixes**:
 
 * Fixed a bug where IP grants were created that lasted 0 seconds.
 * Fixed a bug that prevented monitoring two BGP Peers with the same name on two different computers.

### Krill-UI

**New features**:

 * Modified the function of exporting data to CSV to avoid asking for user and password again. Due to technical limitations, while the data is being exported, the user will not be able to navigate in this tab.
 * On a CPE card, the losi, lofi and dyinggasp alarms will be represented by an iconography.

**Some minor bugfixes**:
 
 * Fixed a bug where in the CPE tab the information given about the active or inactive status of the equipment and its internet connection could be incorrect.
 * Corrected the information given on the active or inactive status of the equipment and its connection to the Internet in the CPE file.
 
## October 2024

### Krill

**New features**:

 * The F6600P model has been adapted to the TR181 data model.
 * It has been added the possibility of marking a Host as UP when we have accounting of this equipment.
 * Passive check has been added for bitstream CPEs, in order to optimise server cpu usage.
 * Added the ability to mount KEA-DHCP in high availability.
 * ACS module API documentation has been added.
 * Upgrade from Celery 4 to Celery 5 has been added.

**Some minor bugfixes**:

 * Fixed an issue with Huawei equipment monitoring that caused power levels to be erroneous for 100G interfaces.
 * Fixed a bug that caused some hosts and services to be duplicated based on user permissions.
 * Fixed a bug when checking the Mikrotik version.
 * Fixed a bug where telephony services were not being monitored correctly.
 * Fixed an issue where after an automatic update of Freeradius, changes made in ISP would not be applied to the configuration files.
 * Fixed a problem where after an automatic update of Freeradius, changes made in ISP would not send the CoA.
 * Fixed a problem with port bindings for the F6600P model with datamodel TR181.
 * Fixed a bug in the Docsis CPEs info, which marked the CPE as DOWN.
 * A bug has been fixed that caused CPE information not to be displayed when any of the devices connected by LAN is identified with non-ASCII characters.
 * The ZTE olts backup check has been fixed to support .dat and zip formats.
 * Swagger documentation for the /api/v2/auth/login/ and /api/v2/auth/token/ endpoints has been corrected and the /api/v2/auth/token/ endpoint has been marked as deprecated.
 * Fixed a bug that prevented the diagnostics in the card from working.
 * The passive bitstream check has been improved to avoid some errors.
 * Fixed a bug that prevented filtering CWMP type events by host_name.
 * Fixed a bug in KEA-DHCP that mistakenly gave IPs to disabled computers.
 * The passive bitstream check has been improved to avoid some errors.
 * Some monitoring errors have been corrected for the TR-181 datamodel.

### Krill-UI

**New features**:

 * A date selector has been added to allow requesting data by date range in the timeline of a team's record.
 * For Wimax CPE equipment, the possibility of redirecting to the matrix view has been added.
 * For DOCSIS CPE equipment, an RF graph has been added and the connected devices view has been removed.
 * The CPE tab now detects whether an IP received via Radius is of type PPPOE or IPOE.
 
**Some minor bugfixes**:

 * Fixed a bug that now made it impossible to see WiFi connected devices when they did not report which band they were on.
 * Fixed an issue that caused the Keyser overview screen to be cut off.
 * Fixed a bug where ONUG graph values were rounded instead of displaying the actual value.
 * Fixed a bug where ISP view histories in a certain cpe were not sorted by date correctly.
 * Fixed a bug in the login view that prevented to see the error when logging in.
 * Fixed a bug where the hostevents view was displaying the wrong time, and also did not adjust to the user's schedule.
 * Fixed a bug in the event tab of a CPE where after a provisioning error the message was incomplete.
 * General security improvements have been implemented in different applications.
 * An error has been corrected in the tab of a CPE, there was erroneous information about the active or inactive status of the equipment and its connection to the Internet.
 * Error handling has been improved for some diagnoses in the CPE tab.
 
## September 2024

### Krill

**New features**:

 * The possibility to store the port in the IPs granted by CGNAT has been added.
 * Added the possibility to obtain the distance between the ONU and the OLT for the manufacturer VSOL.
 * Added the possibility to search in krill for a CPE by SN in ASCII format.
 * Added the ability to define the priority of the native vlan associated with an ethernet port on Huawei.
 * Added the ability to display the list of WANs for Linksys models with datamodel TR181 (TR069).

**Some minor bugfixes**:

 * Fixed a bug that prevented provisioning on some CDATA OLTs.
 * Fixed a bug that prevented the CDRs of a certain client from being seen.
 * Fixed a bug that caused some CPEs not to be seen in their corresponding HostGroup.
 * Fixed a bug where some parameters in the monitoring of Huawei devices were not being recovered.
 * Fixed a problem that caused a device to be marked as UP in the tab when it was unprovisioned.
 * Fixed a problem with the backup of Vsol OLTs.
 * Fixed a problem that made it impossible to search in the CDRs view.

### Krill-UI

**New features**:

 * Added the option to view all available IPs in a machine's tab.
 * A link has been added from the CPE view to the client tab.
 * A history of the different changes made to the PBX has been added to the PBX tab.

**Some minor bugfixes**:

 * Fixed an issue that caused the Keyser overview screen to be cut off.
 * Fixed thresholds in the metrics listing of services in a host tab.
 * Fixed the creation and update date of computers in the tabs, even if they are not in the monitoring system.
 * The display of the equipment history in the tab has been corrected.
 * The display of IP concession in CPEs located in time zones other than UTC has been corrected.

## July 2024

### Krill

**New features**:

 * Now allowed in the Radius service to control COA on IPoE and PPPoE.
 * We have added support for IANA in the Radius IPV6 service. 

**Some minor bugfixes**:

 * The operation of the Radius service has been modified to avoid alerts of duplicate IPs in CGNAT and in the duplicate detection check by NAS.
 * The process of calculating IPv6 prefix reservations in radius has been optimized.

### Krill-GPON

**New features**:

 * Internal generation of a filter that allows the speed profile to be used as a criterion for provisioning.

**Some minor bugfixes**:

 * Fixed a bug that caused the reprovisioning of the 854G model to fail on Calix OLTs.
 
### Krill-UI

**New features**:

 * Installer Tools has been updated, adding the model field, which will be auto-selected when selecting a device pending provisioning, and the Realms field has been eliminated, performing searches in all the realms that the user has permission.

**Some minor bugfixes**:

 * (KEYSER) The colours for the real-time bandwidth graphs have been homogenised.
 * Fixed a bug with filters in API and Admin logs views that caused searches to remain even when exiting those views.
 * The loading of data from the Smart-Tree view has been optimised and made faster. 

## June 2024

### Krill

**New features**:

 * A new command has been added to our ISP-Cli, to check the status of the telephony Peers.BX.
 * The storage of metrics for the different services has been optimized to reduce disk storage and RAM consumption.

**Some minor bugfixes**:
 
 * Fixed a problem that caused the monitoring system to freeze in large networks and require a restart.
 * The generation of the speed attribute for CISCO NAS has been modified so that it is generated only for pppoe clients.
 * Fixed a bug that prevented alarms from arriving to CPEs that had the `enable notifications` check box checked.
 * Several bugs that could appear in several of the endpoinst of the monitoring API have been fixed.

### Krill-GPON

**New features**:

* A new alarm has been added to notify when a PON exceeds XXX number of connected onts.
* Improved provisioning of ZTE equipment to include ipv4/ipv6 in the internet wan and to include wan pppoe.
* A new field has been included in the FiberHome equipment in order to be able to filter by model in the validations.

**Some minor bugfixes**:

* Fixed a bug where the port of an ONT to be configured in CDATA was not correctly obtained.

### Krill-DOCSIS

**New features**:

* The time taken to restart Docsis equipment has been improved.

### Krill-UI

**New features**:

* In order to avoid that no address is shown on the equipment cards, both the address of the client and the CPE itself are now displayed.
* (KEYSER) The customer notes field has been added within the new tab.

## May 2024

### Krill

**New features**:
 
* Krill now allows discriminating custom attributes by NAS provider in the Krill-Radius module.

**Some minor bugfixes**:

* Fixed an issue that prevented the generation of backups of PTPs when the monitor=False attribute was set.

### Krill-UI

**New features**:
 
* In the ISP view, if there is only a single Realm, it will be selected by default.
* The option to save the UI configuration (dashboard, refresh times, etc.) associated with the user to be able to retrieve it from any other device has been added. The new option has been enabled within the user menu that is displayed in the top right icon with the initials. 

### Krill-GPON

**Some minor bugfixes**:
 
* Fixed an issue with the reprovisioning of certain ZTE/PTin devices with the `nni_type` attribute.
* Fixed a bug that could be caused by loading the memento from the configuration file.
* Fixed a bug caused in the provisioning by not skipping pending UNOs without serial number.

### Keyser

**Some minor bugfixes**:
 
* Initial WiFi configuration problem with Keyser and Huawei ONTs.
* Fixes a bug that caused hosts to keep appearing connected to a computer's LAN when there were none.

## April 2024

### Krill

**New features**:

* The option to send alarms to Microsoft Teams has been added.

### Krill-KEA

**New features**:

* The API has been enabled to be able to monitor the use of IP pools.

### Krill-GPON

**New features**:

* Added the option to configure a hardware/software version validation for ONT provisioning.
* The ONT profile has been added to the Calix manufacturer.
* Provisioning has been added for HWTC model HN8145X6.

**Some minor bugfixes**:

* The provisioning of the F601 model for VSOL OLTs has been corrected.
* The way to enable DHCP option 82 for the manufacturer VSOL has been modified.

### Krill-UI

**New features**:

* The `external_id` and `customer_external_id` fields have been added in the matrix view for service type results.
* Now by default, the first location and the first country will be selected from those available for the registration of customers and CPEs.

**Some minor bugfixes**:

* Fixed a bug that prevented all ONUs pending provisioning from being displayed in the CPE creation form and in the unconfigured ONUs view itself.
* Fixed an issue that prevented a service's metrics from loading when the refresh button was pressed.
* Fixed an issue that could cause the timeline in the CPEs tab not to load.
* The preview on the map of the addresses of both customers and their CPEs has been corrected.
* The registration information box has been enabled in the new Keyser CPE tab.
* Fixed a bug that prevented any buttons from being clickable in the new CPEs tab.

## March 2024

### Krill

**Some minor bugfixes**:

* The accounting service has been optimised to de-stress the hard disk and server processor load.
* [Keyser]: Fixed the reconfiguration action when making a change to a UN configuration.
* Fixed an issue that prevented TR069 sessions from being launched to restart or reconfigure ONUs from the ISPCLI utility.

### Krill-GPON

**Some minor bugfixes**:

* A problem has been fixed with S/N searches that affected VSol equipment, which stored this data in different ways (all upper case, upper and lower case, etc).
* Fixed a bug that prevented ONUs from restarting in certain cases in which the SNMP action failed, enabling it in that case via Telnet.
* Bandwidth consumption by PONs and ONTs in ZTE equipment has been corrected.

### Krill User Interface

**Some minor bugfixes**:

* Changed date range settings for chart widgets so that they can better update metrics (Note: Requires re-configuring date ranges).
* Fixed exporting data to CSV from Matrix view.
* [Keyser]: Fixed changing SSID passwords.
* PING metric scaling has been modified so that it is returned on graphs in `ms`.

## February 2024

### Krill

**Some minor bugfixes**:

* Fixed an issue with EdgePower equipment monitoring.
* Fixed a bug that prevented a UNO from restarting after a redirection change to configure its new values.
* Fixed a bug that prevented UpBw and DnBw metrics for graphs on Bitstream equipment from being saved in certain cases.
* Fixed an issue that caused the `default_snmp_community` variable to be ignored for machines without SNMP configured.
* Fixed a bug in the real time graphs of certain FullDomus branded ONUs.
* Fixed a bug that caused IP not to be assigned after changing the NAT addressing type to public.
* Fixed a problem with the display of PacketLoss graphs of the CPEs, which in some cases did not inject the metrics correctly.
* The scale of the Ping metric has been revised so that the unit of measurement is in ms.
* Accounting processing time has been optimized.

### Krill-GPON

**New features**:

* The option has been added to be able to force the deprovisioning of an S/N that is duplicated in the memento.
* TR069 Profile can now be used to insert the ACS URL into VSOL branded ONUs.

**Some minor bugfixes**:

* Fixed an issue that prevented provisioning on certain equipment connected to VSol OLTs.
* Fixed a bug that prevented the real-time graphs of FullDomus devices from displaying correctly.

### Krill-WiMAX

**New features**:

* New models of APs from the manufacturer Mimosa have been added to the monitoring.

### Krill-DOCSIS

**New features**:

* Added the possibility to have a selector by type of service or addressing to enable Dual-Stack Ipv6 or Ipv4 only.

### Krill User Interface

**Some minor bugfixes**:

* Fixed an issue that could cause the date range selector to crash in some views when selecting one of the preset ranges.
* Fixed an issue that prevented certain profile values from being displayed in the CPEs view of the Customers module if the filter for all Realm was selected.
* Fixed the validation rule for the Fixed IP field based on the value of the addressing profile in the CPEs creation and modification views of the Customers module.
* Fixed a bug in the Host-Events view filtering that prevented data from being displayed.
* Fixed a bug in the Customers and CPEs tab that prevented data from being saved due to the longitude of the geographic coordinates.
* Fixed a bug that prevented a host's graphs from displaying in the mobile view.
* Fixed a bug that caused changes made to the POTS configuration in the edit tab of a CPE to be undetected.
* Fixed a bug in the real time graphs of certain FullDomus branded ONUs.
* The search for Customers in the creation of PBXs has been solved until a REALM is selected, even if one has already been selected previously, in the PBX module.
* The export of data to CSV from the Customer module, which sometimes returned a 502 error, has been fixed.
* Fixed Customers search error when registering a PBX without having previously selected a Realm different from the current value.

## January 2024

### Krill

**New features**:

* MySQL RAM consumption has been limited to avoid possible system crashes at specific times.
* The functionality of monitoring the coverage of mobile technology equipment (LTE, 4G, 5G) has been added

**Some minor bugfixes**:

* A problem that caused some graphics on certain PTP devices to disappear has been fixed.
* Fixed a bug that caused the monitoring service to fail when deleting a CPE via API.
* Reduced the timeout of Docsis tasks.
* Modified the priority of task execution to avoid crashes that could block some more necessary tasks.
* Fixed a bug in the DHCP service that caused the last changes made to the configuration not to be applied.
* Fixed a problem with the SIP account configuration of certain ONTs.

### Krill-GPON

**New features**:

* It is now allowed to create more than one WAN via OMCI for ZTE devices.
* S/N are converted to hexadecimal for CData teams

**Some minor bugfixes**:

* A problem has been corrected for certain manufacturers that require provisioning in ASCII format.
* The provision to adjust the type of service when creating the wan via OMCI has been modified.

### Krill-DOCSIS

**Some minor bugfixes**:

* Fixed an issue that could cause timeouts in the execution of certain tasks.

### Krill User Interface

**New features**:

* Date range selectors now display some values in a more "human" mode.
* Added filters to search for events of type `iplease6` and `iplease6pd` in the HostEvents view.
* The default time interval for host and service graph views has been standardized.
* Include in the CPE tab the signal values of LTE equipment.
* A new option has been added that will allow adding functionalities to the equipment tabs according to their Manufacturer, brand, type of equipment, etc.

**Some minor bugfixes**:

* The possibility of allowing more than 255 characters in the cpes and client notes field has been added.
* An error that prevented searching in the Customer/ISP module from mobile has been fixed.
* Fixed an error that prevented Customers or CPEs from being edited if too large a number of decimal places was sent in the geographical coordinates.
* Fixed a bug that prevented creating multiple options for a receptionist in the PBX module.
* Fixed an issue that could cause an error screen if certain views were accessed from a mobile device that was not mobile-ready.
* Fixed a problem that prevented certain bandwidth graphs from being displayed.
* Fixed a bug that prevented results from being displayed in CWMP view.

## November 2023

### Krill

**New features**:

* Added the functionality to obtain Bitstream equipment info.
* Trunks can now be created or deleted on Asterik servers for multi-asterisk clients
* Added the option to have different telephony trunks in different Asterisk under the same Krill.
* The option to request information on Bitstream type equipment via API has been added.

**Some minor bugfixes**:

* Optimization of Free-radius queries to reduce the load on the database.
* Port 4280 has been redirected to 443 to prevent non-HTTPS access to both the API and the UI, except for the `/api` and `/admin` endpoints.
* Fixed an issue in the API endpoint for fetching events from a Host, which prevented it from working when using the `-start_time` sort parameter.
* A problem that prevented the monitoring of certain UPSs has been corrected.

### Krill-GPON

**Some minor bugfixes**:

* The OID of some OLTs that did not correctly report the PON type (gpon, xgspon, etc.) has been corrected.
* A problem with the FiberHome OLT Patcher that caused it to work incompletely has been fixed.
* Fixed a bug that prevented a ONU from being deleted if its ID was not on the whitelist.

### Krill-UI

**New features**:

* The editing tab of a CPE now tries to locate on the map by street, or by town, postal code or province to try to show the location closest to the real one if it is not found.
* The "Remote ID" has been added to the technical information block of a CPE if this had been specified.
* The possibility of incorporating the IPv6 prefix in the monitor tab is added when option 37 is active.

### Krill-DOCSIS

**Some minor bugfixes**:

* An error has been corrected that prevented information from being obtained from DOCSIS equipment as it did not come in the expected format at uptime.

## October 2023

### Krill

**New features**:

* The process of querying and assigning IPs in the Radius service pools has been optimized.
* A new HostGroup type `cpeprobe` is added for network probe devices, allowing its filtering also from the HostGroups view of the UI.
* The possibility of PPPOE marking has been added when the NAS is DHCP type.
* Data validation has been added to the `/api/v2/pbx/holidays` endpoint to avoid being able to record repeated or incorrectly formatted data.

**Some minor bugfixes**:

* Removed duplication of CPEs in some queries in the Monitoring API.

### Krill-GPON

**New features**:

* The functionality of detecting fiber cuts via Trap is added, for certain Huawei OLTs that support it.

**Some minor bugfixes**:

* Fixed a bug that prevented duplicate ONUs from being removed at provisioning time.
* Fixed a bug with the provisioning of certain ZTE models.

### Krill-DOCSIS

**Some minor bugfixes**:

* Fixed the count of connected cable-modems causing inconsistencies between the number displayed in the Host-groups view and the total number of elements.
* Monitoring of the number of cable modems has been corrected.

### Krill-UI

**New features**:

* The option to attach additional information is added to the technical data block of a Host file: SSID, WPA2-Key, User, Password, etc.
* Now the monitor tab of a CPE will show the distance it is from its recording equipment depending on its technology (OLT, Docsis Header, AP, etc.)
* The CSV export of the CPEs view of the Customer module has been improved, now being able to filter the data before being exported.


**Some minor bugfixes**:

* Fixed a bug that could prevent teams from being displayed if a user had certain permissions.
* The sorting by last-state-since and bandwidth in download and upload within the matrix view has been corrected.
* Fixed an issue in History view filtering that did not correctly distinguish between hosts and services.
* An error that prevented the ONU-ID of computers that had a value of 0 for this attribute from being displayed has been detected and solved.
* Refactoring of the PBX module to unify the new mono-kiwi API.
* The option to show all elements in the Matrix view is eliminated to avoid timeouts when a large number of elements can be found.

## September 2023

### Krill-GPON

**New functionalities**:

* The option to do a `load_memento` per PON individually for Huawei OLTs has been added.
* Added support for ONUs XGSpon.

**Some minor bugfixes**:

* Provisioning has been modified to support ONTs with 10G speeds in Dual card scenarios (support for XGSpon and Gpon).

## August 2023

### Krill

**New features**:

* The DHCP's option 82 has been adapted for the Radius service.

**Some minor bugfixes**:

* A bug that could prevent from monitoring the CPE services properly in certain circumstances has been fixed.
* Fixed the graphs of some Switches that did not display their metrics correctly.
* Optimized DHCP and Radius patch deployments making them much faster.
* Static IP is now only set when `Address profile` is set to Static IP.
* Now, when a CPE has the `No reprovision` check, it will not be acted upon in any case.
* Fixed an error that prevented in certain circumstances to restore backups of OLTs.
* Fixed an issue that could cause address_profile_mapping defined in radius to be ignored.

### Krill-UI

**New features**:

* The option to download a CSV file with the lists in the Customer/ISP module has been added.
* The creation and modification of Schedules of a PBX has been simplified.

**Some minor bugfixes**:

* The 30 characters validation rule for the POT label has been modified.
* The links and references to the PON Status view for the DOCSIS devices have been deleted and the Registration tags have been limited to the most important ones.
* The fixed IP for the devices that have a different Address-Profile has been hidden.
* The `serial_number` field has been disabled for those computers that do not have the `cpegpon_noserialnumber_allowed=true` variable enabled to prevent it from being modified after the CPE is created.
* The recheck functionality for the services has been corrected, when pressing its button did not show any information or launch said command.
* The DDI validation rule has been modified to allow the addition of international prefixes: p. ex: 0034612345678.
* Fixed the link showing the hosts associated with a realm host-group by technology.
* The comment field for the detail view of locations in the sonar view has been expanded.

### Krill-GPON

**Some minor bugfixes**:

* A mistake that could prevent the OLTs from deleting the ONUs after the confirmation from the correspondent SNMP command has been fixed.

## July 2023

### Krill

**New features**:

* The option to stop providing service to a customer because they haven't paid or any other reason in a DHCP+Radius environment has been added.
* Now in the DHCP+Radius environments the speed atributes are being sent.
* The possibility to add the customer name as the ONU's description in the Uplink and V-Sol OLTs.

**Some minor bugfixes**:

* A bug that prevented from giving IP to some devices via Wanmax has been fixed.

### Krill-UI

**New features**:

* The `customer` module has been refactored to adapt it to mono-kiwi, making the realm selection to apply the filters in the different views easier.
* The option to export a CSV in in the Customers, CPEs y CPE-Profiles views of the `customer` module has been added.
* The option to introduce new postal codes with digits and the `-` symbol has been added to make it compatible with postal codes from all over the world.
* The graphs for certain CPEs services have been improved (downstream, upstream, docsis...).
* The realms are now categorized by technology in the Host-Groups view.

**Some minor bugfixes**:

* The s/n validator has been corrected to allow for 12 or 16 alphanumeric characters in both the customer module and the installer-tools.
* The way the SNMP request is made to the Huawei OLTs has been changed to prevent possible timeouts.

## June 2023

### Krill

**New features**:

* The option to specify in models, speed profiles, etc. the realm or realms to which they belong has been added.
* Now when a CPE is deleted at the administrative level, the TV is disconnected and it is also unsubscribed from the OLT.
* Now the legal IP's concessions also save the external ID to make customer identification easier. 
* The line-profiles are now separated by realm in multi-realm environments.

**Some minor bugfixes**:

* Fixed a bug that could cause false positive alarms of the "Decreased bandwidth" type.
* Fixed CATV activation for certain ONUs connected to CData OLTs
* The CData OLTs provisioner has been modified so that it creates the TR069 WAN via OMCI and the rest via pexpect.
* Now the `monitor: false` variable is taken into account when requesting devices via SNMP.
* A bug that could cause a 400 error when trying to edit a PBX's DDI has been fixed.
* A bug that could cause a 500 error when reseting a DOCSIS's CPE has been fixed.

### Krill-GPON

**Some minor bugfixes**:

* An error has been corrected that prevented the TimeLine of provisioned onus from being displayed in Televes OLTs.
* A bug that could trigger a mistaken answer when petitioning `/info` in certain CPEs has been fixed.
* A bug that could trigger a mistake when trying to do a factory reset in some CPEs with `ethernet` technology has been fixed.

### Rubik

**New features**:

* Updated Onivia client import.
* Now the API returns the information of the IUA, the CTOs and the GPON password of the Onivia services.
* The services activated in the Onivia wholesaler now show information about the CTO, the IUA as well as the GPON password.

**Some minor bugfixes**:

* Different graphic bugs in the CTOs edition have been fixed.

### Krill-UI

**New features**:

* The device widget now shows the TV profile if it is selected and is represented by an RF cable on the ONT.
* The CPEs page now shows in the upper bar if the model has an RF antenna for television available with the CATV indicator in grey, if it has some TV profile associated the CATV indicator will be green.
* The PON Status view has been optimized to diferenciate if we want the PON information shown from another view, or if we access to it to see the real time status of all the pones in the different OLTs that are being monitored.

**Some minor bugfixes**:

* To avoid mistakes, the recheck option had been disabled for the devices or services that have a passive monitoring.
* Different graphic bugs in the PON Status view have been fixed.

## May 2023

### Krill

**New features**:

* Two monitorization Widgets to be used from external applications had been added. For more information: https://guide.phicus.es/krill2/widgets
* Now the NetElastic monitorizarion using `username` in ASCII format is allowed as well as the use of IPPools to share IP ranges.
* Cisco CMTS' resources monitoring has been added.
* VSOL, CData and Casa System core devices' monitoring has been added.
* Mikrotik APs' backup is done automatically now.
* The received traps log for Eltek's devices has been added.
* Now it is possible to configure secondary telephony servers.

**Some minor bugfixes**:

* A bug that didn't allowed, under certain circumstances, SIP users generation in the PBXs after create or modify a CPE has been fixed.
* A problem that could prevent CPE's reconfiguration through TR069 after applying a change in it's parameters, for example SSID, has been fixed.
* A problem that prevented the cut of the PPPoE service for a client after it was deauthorized has been fixed.
* The CSV export from the administration panel has been corrected.
* Now the `monitor: false` variable is considered when an SNMP petition is made to the devices

### Krill-GPON

**New features**:

* The duplicated serial number removal has been added for VSol and CData ONUs.

**Some minor bugfixes**:

* A posible bug when trying to reprovision a device already provisioned in the CData OLTs has been fixed.
* A bug in the filtering by frame/slot/port in the polling process of the CData OLTs has been fixed.
* The bandwith graphics for devices conected to VSOL/CData OLTs have been fixed.
* Now the ONUs are automatically reprovisioned when a POTS is modified.

### Krill-WiMAX

**Bug's correction**:

* The bandwith calculation, that in some cases could offer excesive values, in Ubiquiti's APs has been fixed.

### Krill-UI

**New features**:

* The create CPE button in the `Customers` module now allows to create it through the complete form or using the quick creation form as well.
* More information has been added to the SubAddress table in the Rubik's services creation.
* A new view to see the session's historical record in the Radius module and new filters in the new historical view as well as in the online sessions view have been added
* The option to create a customer from the CPEs' creation form in the Customer module has been added.
* The search of addresses and coverage in the creation of Rubik's services has been optimized.
* More details about the possible failures in the Rubik's coverage searcher are shown now.
* An option to see the host's services graphs has been added to the graphs view.

**Bug's correction**:

* A bug that prevented the personalized links to be shown in the core devices page has been fixed.
* The POTSes section of the CPEs creation form from mobile devices has been fixed to make it's managament easier.
* The ordination of the TroubleTickets in Rubik's tables has been fixed.
* A bug that prevented the searchs in the Admin Logs report in the Logger module to be done correctly has been fixed.
* The last update date in the device's file from mobile devices has been fixed.
* A mistake in the PBX's edition that prevented the creation of new schedules once the existing elements in the Schedulers were deleted has been fixed.

### Rubik

**Bug's correction**:

* Some minors bugs related to TroubleTickets, ServiceEvents and the ServiceProfile's serializers for certain owners have been fixed.

## April 2023

### Krill

**New features**:

* A support to recover and show the diagnostic information in devices that uses the data-model TR1818 (TR069) has been added.
* The reception and treatment of PTP Ceragon traps had been enabled.
* Now the `internal_id` or the `external_id` can be used for the CPEs API's information requests in mono-kiwi environments.
* The data base requests from the API had been optimized in mono-kiwi environments with a lot of realms.

**Bug's correction**:

* A bug that could make the DHCP service inoperative has been fixed.
* A bug that could make that a CPE disappears from the monitorization after being updated has been fixed.
* A bug that could trigger locks when answering the API requests has been fixed.
* A bug that made already innactive IP sessions to be shown in the CPE tab has been fixed.
* The feature that allows to sort the historical and notifications view by different fields has been fixed.

### Krill-GPON

**New features**:

* The information of the TX/RX service for devices connected to CData OLTs has been optimized.
* New integration of VSOL OLTs with Broadcom's chipset, using the `dba_profile` as an upstream limmitation.
* The unkwnown onus unprovisioner now takes into consideration the cpe `provision_enabled` check.
* Now, when a host or its internet access is deactivated, if it has RF it is turned off first, and if it has CATV, the TV is deactivated before deactivating the device.

**Bug's correction**:

* A mistake that could show wrong data in the devices conected to ZTE OLTs info has been fixed.
* A mistake that prevented the reprovision of a CPE when it is activated or deactivated or after changing its CATV status had been fixed.

### Krill-UI

**New features**:

* A button to refresh the `host-groups` without having to click F5 in the browser has been added.
* The ordered by default in the IP-Pools view has been changed to the `expiry_time` field of the Radius module.
* The basic basic information, administrative information and POTSes tabs had been unified in the CPEs edition inside the `Customers` module.
* Validation has been added to the `holidays` gap in the PBXs edition as well as in the Holiday's creation inside the `PBX` module.
* The services' list in the device page is now ordered first by status, then by `business_impact` and finally by name in the timeline as well as in the services tab.
* The device's information requests and their services had been optimized in the file to avoid unnecessary time lapses without seeing information.
* Now from the CPEs' list of the `Customers` module the devices, internet access, notifications, and the use of external VoIP can be activated/deactivated by clicking the icons in the table.
* More gaps had been added to the CPEs quick creation of the `Customers` module and now the model is automatically selected if the SN is selected from the pending provision list. 

**Bug's correction**:

* A mistake in a host's service detail that prevented it from showing if it had the active or pasive checks enabled had been fixed.
* A mistake that could prevent the creation of a PBX for customers previously created had been fixed.
* A mistake that prevented the CDR detail of a certain phone to be shown in the CPE page had been fixed.
* A mistake that could prevent the PBX update from its edtion form had been fixed.

## March 2023

### Krill

**Some improvements**:

* Now we protect the DHCP service from possible inconsistencies of GPON CPEs without a defined serial number.

**Some minor bugfixes**:

* An error that prevented the Uptime of WiMAX equipment from being displayed correctly has been corrected.
* Fixed an error that caused a customer's changes to not be reflected in the tab after saving them.
* The links of the crashes and incidents reported to Slack and that allow access to the different views of Krill have been corrected.
* Part of the Swagger documentation for third-party API consumption has been corrected, which was missing the equipment/service search filters and the endpoint to obtain the datasets of a metric to draw the graphs.
* Fixed a bug that caused the `/monitoring/status/summary` endpoint to not return the correct summaries for each status.
* Fixed a bug that could cause crashes when responding to API requests.
* Support has been added to Radius to manage pools of IPs through NetElastic.
* Added support for Fiberhome option 82 to Radius via NetElastic.
* Fixed a bug that would set the `address_profile` of a registered host to "fixed" instead of its default value.

### Krill-GPON

**Some minor bugfixes**:

* An error that could occur when trying to provision a device in CData OLTs has been corrected.
* Fixed an error that was caused by doing a full memento on CData teams.
* An error that prevented reporting the status of the ONUs due to fiber cuts in OLTs Fiberhome has been corrected.

### Krill-UI

**Some improvements**:

* A checkbox has been added to activate or deactivate the automatic repetition of the reception announcements of a PBX.

**Some minor bugfixes**:

* The login screen has been redesigned and adapted to mobile devices.
* Fixed a bug in the links of the different states of the Krill Sonar view that prevented locating the equipment or services that were referred to.
* An error that prevented the creation of a customer if a previously registered location was selected has been corrected.
* Fixed a bug that prevented editing a receptionist if the receptionist had no jump option defined.
* Some of the headers of the Technology view tables of a CPE type Host have been translated into Spanish.
* The color of the states of the services has been softened and those actions that cannot be carried out on those hosts that are DOWN on the tab have been disabled.
* Fixed the `Summary` widget not linking correctly to the equipment/services of the state that was clicked on.
* Fixed the `Somar` and `Host-groups` view to display the status summary correctly.
* The `World-Map` view will now auto-zoom and focus on located teams after each search or data refresh.
* Fixed a bug that prevented searches from being moved correctly between the different monitoring views.
* Fixed a bug that prevented the confirmation dialog of a CPE from being shown in mobile view.
* Fixed a bug that prevented bookmarking a host's timeline to be able to zoom into it without having to reload the page.
* An error has been corrected that prevented the display of the link to the edition of a CPE in its file when it was not monitored.
* Fixed the `Host-groups` view to show the correct states and the links to view the hosts of each state.
* Fixed a bug that could cause duplicate `type:host` filters in the search box.

### Rubik

**Some minor bugfixes**:

* An error has been corrected in the change of status of a service when trying to make it complete or unsubscribe from the PTV operator.
* The option to show transient states within services has been enabled, disabling the change buttons while in this state.
* Fixed the ordering of tickets in Rubik.

## February 2023

### Krill

**Some improvements**:

* Added a new manufacturer to core monitoring: TelcoSystem
* The database engine has been optimized to improve response times

**Some minor bugfixes**:

* Asterisk open file checking service has been corrected
* Fixed a bug that prevented certain searches for equipment and services.
* Fixed an error that caused the modification date not to be updated when making changes to a CPE.
* Fixed an issue that could prevent PPP credentials from being automatically generated correctly in mono-kiwi environments.
* Fixed a bug that could cause an exception when trying to deprovision an Ethernet technology CPE.
* Fixed a bug that prevented filtering metrics by negative values.
* Fixed an error that prevented correctly displaying the service and the model with which a device is provisioned in Huawei OLTs in the Technology view of a CPE.
* Fixed an error that caused an exception to be returned when trying to make a CWMP Info request to a CPE in the DOWN state.

### Krill-GPON

**Some improvements**:

* New integration of CData OLTs.

**Some minor bugfixes**:

* Fixed a bug that could cause time lag in dates related to Radius PPPoE leases.

### Krill-UI

**Some improvements**:

* Optimized mobile view for core computers.
* The views of search results for equipment and services, and the equipment tab have been adapted to the mobile to optimize it to the size of the devices.
* A new column has been added in the list of equipment and services with the date since the last status change.
* The new Logger module has been added to the help.

**Some minor bugfixes**:

* Fixed searching for contexts within the PBX module.
* An error that prevented selecting French, German or Italian as the PBX language has been corrected.
* The recheck action has been corrected within the list of equipment and services.
* Fixed a bug that prevented changing the number of items per page in the matrix view.
* Fixed a bug that prevented a team's Uptime from being displayed in certain cases.
* Fixed a bug that caused searches to be lost when switching to WorldMap view.
* Fixed some of the filters in the API Reports and Admin logs views of the Logger module.

### PBX

**Some improvements**:

* The option of being able to generate or update a receptionist without setting a schedule has been added.

**Some minor bugfixes**:

* Fixed a bug that could cause an error when trying to update a Queue or a Group of an existing PBX.

## January 2023

### Krill

**Some improvements**:

* Optimization in the execution of asynchronous tasks
* WANMAC will be calculated automatically for Nucom equipment.
* The BRAS selection algorithm has been changed to support more than one on the same shared network.
* Added a new notifier for the mobile application that will soon be available on the Android PlayStore and the iOS AppStore.
* Added to the API documentation the entry /api/v2/isp/cpe-profiles
* DOCSIS commands have been reintroduced to the ISP-CLI.
* The grouping of historical data of the metrics of certain services has been updated.

**Some minor bugfixes**:

* Correction of a bug that could cause SSL certificates to not be renewed automatically.
* Fixed an error that eventually caused saturations in the RabbitMQ queue.
* Fixed a bug that prevented the routing selector and that also prevented the accountings from being displayed correctly when a device was in dhcp + radius mode.
* The size of the JSON returned by the API for the monitoring requests part (/api/v2/monitoring/*) has been optimized.
* Fixed false alarms for value within thresholds for Switches.
* Fixed a bug that prevented FreeRadius from restarting after making changes to a CPE.
* An error has been corrected that prevented notifications from being sent from a CPE that had been marked to send them.

### Krill-UI

**Some improvements**:

* The loading of service data in the hosts tab has been optimized.
* New translations have been added regarding the statuses in the trouble-ticket views.
* A new module has been added that allows viewing the request log via API and via the administration panel, with all the information related to the user, IP, changes made, etc.
* The Krill user guide has been integrated into the user interface, via a help icon in the upper right corner.
* The general browser has been enabled in the PPPoE sessions view of the Radius module.
* The option to specify the initial date range for host or service metrics has been added. By default it is set to the last 6 hours.

**Some minor bugfixes**:

* The magnitude of the legend in the bandwidth graph of the CPEs tab has been corrected.
* Fixed an error when clicking on the list of trouble-tickets.
* Fixed the pager in the trouble-ticket list.
* Fixed a bug that could prevent the Ack / Downtime buttons from appearing in the hosts tab.
* Actions and log information on Bitstream computers have been recovered.
* Fixed a bug that prevented service metrics from being correctly retrieved when switching between various services on a host.
* Mobile numbers have been removed from the selection list of valid extensions for groups, queues, ddis, receptionists, etc.
* Fixed a bug that prevented searches in the holidays, cdrs and contexts view.

### Rubik

**Some improvements**:

* Added integration with PTV as a new wholesale operator in Rubik.

### Krill-DOCSIS

**Some minor bugfixes**:

* The polling time to calculate the CMTS bandwidth has been decreased.
* Fixed a bug in CMTS polling that could cause memory-leaks.

## December 2022

### Krill

**Some minor bugfixes**:

* Fixed a bug that prevented a CPE with remote_id defined in Kiwi from not taking the ip through DHCP that corresponded to it.
* Fixed an error that caused alarms to be sent based on the status of the ONT interfaces in Calix.

### Krill-GPON

**Some minor bugfixes**:

* The value of the status returned from some ONTs when they are offline for Fiberhome OLTs has been corrected.
* The message returned when trying to perform a Factory-reset via OMCI to ONUs that do not support this method has been corrected.
* The provision by profiles for Uplink devices has been improved.
* An error has been corrected that caused an error message when there was no connectivity with any of the PON devices when requesting its status.

### Krill-UI

**Some improvements**:

* Added to the panel of IPs those that come in the info service of the CPEs within their file.
* The history of requests via API is added to the CPEs file.
* Added to the IPs panel those that come by SNMP in the hosts file
* In the technology view of the hosts, a column has been added to show the corrected packages and the KO packages both in upload and download.
* Added the PPPoE Username column to the matrix view
* The matrix view no longer shows results if there is no valid search, and instead suggests the filters stored in favorites and the last searches performed.

**Some minor bugfixes**:

* Switching between modules now resets the search box to prevent unexpected results.
* Fixed CSV export in matrix view
* Fixed a bug that prevented the country and locality of a CPE from being displayed correctly when selected.

### Rubik

**Some minor bugfixes**:

* New translations have been corrected and added to facilitate the messages displayed in the service registration and edition views.

## November 2022

### Krill

**Some improvements**:

* Improved the auto-renewal system of SSL certificates
* Monitoring of PTPs services.

**Some minor bugfixes**:

* Fixed the message returned if a CPE cannot be deprovisioned.

### Krill GPON

**Some improvements**:

* Televes has been added to the real-time monitoring of the status of a PON.
* Monitoring and provision of Uplink/Vsol equipment is added.

**Some minor bugfixes**:

* Fixed an error in the formatting of dates for some devices when showing the PON status.
* Fixed a bug when returning null optical values for Calix.

### Krill-DOCSIS

**Some improvements**:

* DOCSIS equipment monitoring has been improved.

### Krill-UI

**Some improvements**:

* The feature of modifying the Internet status, access, external VoIP and enabling notifications from the list of CPEs has been added.
* A new meta-search engine has been added from the side menu of the UI, which launches parallel searches in different sections of Krill to facilitate and optimize searches. New search sections will be added later.
* Detection of the type of search (host or services) based on the rest of the criteria used.
* Now the address of a CPE is obtained from that of its customer if the CPE does not have one.
* Optimization of the tab for core teams that have a large number of services.
* Optimization of the tab for all types of equipment from mobile devices.
* In the SmartTree view, you can now hide the information panel, if you don't want it, by clicking on the button in its title bar.

**Some minor bugfixes**:

* Fixed filters and ordering of results based on metrics (perfdatas).
* Fixed a problem that prevented the table of events of a host from being displayed, if it contained an invalid date in the equipment tab.
* Fixed search by host/service in history view.
* Fixed a bug that prevented some attributes from being updated after deleting their value in client and cpes edition.
* Fixed an error that prevented showing all the results at the same time, after selecting `all` in the drop-down of elements per page in the list of PBXs.
* Fixed a problem that caused the list of holidays and contexts to overlap above the toolbar when scrolling.
* Fixed an issue that prevented items from being re-requested after changing the number of items per page in the CDRs view.

### Rubik

**Some improvements**:

* Added texts and translations for all attributes that were displayed in the summary prior to service creation.

**Some minor bugfixes**:

* Fixed the service creation confirmation message.
* Fixed an issue that prevented address search results from being returned after deleting some of the values from the address dropdowns in the service creation form.

## October 2022

### Krill

**Some improvements**:

* Greater response agility in DHCP and Radius changes in the face of changes in the administrative part
* DHCP: Possibility of assigning more than one Fixed IP after an ONT Bridge
* Krill-ACS: The expiration time of the reboot, factory-reset, etc. flags has been reduced.
* Added the `dhcp-config`, `freeradius-config` and `asterisk-config` services to the services monitored by the server.

**Some minor bugfixes**:

* Fixed a problem that prevented de-authentication of PPPoE sessions on certain occasions after changes in Kiwi.

### Krill-GPON

**Some improvements**:

* The use of IGMP for the IPTV service has been parameterized
* When a valid service-port is defined for both Internet access and VoIP, and the ISP/CRM marks Internet access as disabled, Krill only has to build the corresponding SP if it is for the telephony service.
* The ONUs monitoring system has been updated and allows detecting massive falls to provide it with greater stability.

### Krill-WiMAX

**Some minor bugfixes**:

* Registration host and registration id variables are now correctly injected for WiMAX equipment.

### Krill-UI

**Some improvements**:

* Search has been improved and new columns have been added to the Matrix view.
* The search filter for devices registered to an OLT/CableModem in various views has been improved.
* The display of the list of models in the equipment edition form has been modified.
* The `Fixed Address` field is now dependent on the `Address Profile` and the dynamic/fixed check has been removed.
* The columns of the POTSes table have been reordered and a minimum width has been established to make it easier to read.
* The changes that affect the computers from the administrative part (Customer/ISP) are now shown in real time in the monitoring part.
* The maximum number of results to be displayed has been increased, indicating with a message if there were more teams with the current search.
* Added a summary at the bottom of the map with the total number of teams currently being displayed, versus the total number of teams matching the current search.
* The total number of devices that each profile has is added to the CPE-Profiles view.
* Added to the CPE view the functionality to massively edit the attributes: Active, Access, Enable-Notifications and External-VoIP.
* Added PBX schematic to PBX module.

**Some minor bugfixes**:

* Fixed a bug that caused discrepancies between the number of ONTs displayed in the monitor tab of an OLT and the CLI show-onus command.
* The colors of some states in the history view of the monitoring module have been corrected, as well as the state filter.
* The CPE editing form has been corrected to avoid the error that prevented changing the speed of cable-modem and Ethernet-type equipment.
* Removed marker clustering at maximum zoom level for easier viewing.
* The MAC validation rule in the CPEs edition and creation tab has been corrected to allow inserting values with the 6c:44:2a:eb:a9:a1 format.

## September 2022

### Krill

**Some improvements**:

* New email notification design

**Some minor bugfixes**:

* Fixed some Core commands in ISP-CLI
* Fixed monitoring of Mikrotik CRS Switches
* ONUg graphs by OLT and ITFS of Core teams have been restored.
* An error has been corrected that caused some Hosts not to be correctly identified when receiving a trap and therefore when notifying them they appeared as Unknown.

### Krill-GPON

**Some improvements**:

* Added VoIP via OMCI configuration for FiberHome ONTs.

**Some minor bugfixes**:

* Fixed an issue that caused some non-existent ONTs to appear in Calix OLTs
* Fixed the provision of already existing equipment in Calix OLTs
* Fixed a problem that prevented loading information from Calix OLTs

### Krill-UI

**Some improvements**:

* Batch tasks for CPEs in ISPs (line-profile change)
* The information related to the IPs in the Hosts monitoring tab has been improved.
* In the World-Map view it is now allowed to toggle between the Host name and the client name (only for CPE type equipment)
* The suggestion of Wi-Fi channels (for 2.4 and 5 GHz networks) in the Site-Survey diagnosis in the CPEs tab has been improved.
* The number of requests to obtain the CWMP information of a team in its file has been reduced.
* The searches by default are made of the Host type, adding the option to toggle between Host, Services and all the results.
* Columns that had not been migrated from Krill 1 have been added to the Matrix view and the information displayed in it has been optimized.
* Status information, exit message and metrics are now real-time in search results.
* The Status viewer of a PON now shows which devices are being monitored and which are not.
* The option to add the line-profile in the CPE creation form has been added.
* The search for CPEs will only be carried out by pressing `Enter` or by clicking on the Search button.
* When creating a POTS and this error, now shows the exact reason why it cannot be created.

**Some minor bugfixes**:

* The real-time graphs have been corrected (and the QoS one added) for the Docsis equipment files.
* Fixed filtering of the Host-Groups view to now show hosts of a certain type (seen for Realm-type Hostgroups).
* Fixed an issue preventing some changes made to a PBX from being saved.

## July 2022

### Krill

**Some improvements**:

* Added the ability to authenticate via Google Suite company accounts.
* Changed API/UI authentication to use JWT.
* Improved speed in searches in environments with a large number of monitored computers.
* An error has been fixed in our PBX, which prevented customers who pressed an option not covered by the switchboard from being returned in the stream at the beginning of the main speech so that you can listen to it again.

### Krill Monitoring UI

**Various bug fixes**:

* Fixed a problem that prevented the retrieval of custom links in the host monitor.
* Fixed the error message that appeared when clicking on the `Reprovision` button in the host monitor.
* The answers of the CWMP Info that are made in the host monitor have been corrected.

### Krill PBX UI

**Some improvements**:

* A bug has been corrected. bug that caused data to not load correctly when switching realms (in multi-realm environments).

### Krill WebService (API)

**Some fixes**:

* Fixed S/N validation rules to avoid null or non-hexadecimal values.
* Fixed validation to avoid duplicate CLIs.
* Updating POTSes no longer returns the errors that appeared on some occasions.

### Krill Core

**Some improvements and bugfixes**:

* A bug that prevented the resources of certain services from reporting states of `warning` or `critical` has been fixed.

### Krill GPON

**Some fixes and improvements**:

* The option to mark a device or an entire OLT so that it does not perform auto-provision, re-provision or de-provision actions has been added, for environments configured manually and with special parameters.
* Calix and FiberHome have been added to the list of OLTs that are capable of provisioning through Krill.
* The `cpe_info` output has been standardized.
* It has been fixed an error that was caused when performing a `factory-reset` in ONUs of a different manufacturer than the OLT where they were provisioned.
* Fixed an error when trying to obtain a `cpe_info` of a device when the OLT where it was provisioned did not respond to PING.

### Krill DOCSIS

**Some improvements**:

* Added the ability to configure `service-flows` using FQDN nomenclature without having to use IP addresses.
* Improved monitoring and graphing of metrics for certain CableModems.

### Krill WiMAX

**Some improvements**:

* An error that was caused when trying to obtain information from the STAs of some APs has been corrected.

## May 2022

### Krill

**Some improvements**:

* Response time has been optimized for databases with a large volume of equipment.
* Added option to filter hosts by contact-groups (as Krill 1 did).
* Search tokens have been updated and new ones added to be compatible with the new database engine IcingaDB.

### Krill Monitoring UI

**Various bug fixes**:

* Fixed a bug that prevented the toolbar of a computer file from being displayed correctly in mobile view.
* Filtering by host-name in the status history view has been corrected.

### Krill Oratio UI

**Minor bugfixes**:

* Fixed data auto-refresh in radius sessions view.

### Krill ISP UI

**New features and bugfixes**:

* A marker has been added when trying to create, update or delete elements to avoid duplicate request errors.
* The functionality of being able to delete a Client has been added.
* The option of being able to search for hosts by their ID has been added, regardless of its length.
* A validation rule has been added for CLIs and POTS labels that prevents that more than 16 characters are written.
* The ID and the external-ID have been added in the new CPE dialog box in the list of clients to facilitate their search.

**Some bugfixes**:

* A bug has been corrected. bug that caused data to not load correctly when switching realms (in multi-realm environments).
* Fixed a problem that prevented the flags of the selected languages from being displayed correctly in POTSes.

### Krill PBX UI

**Some improvements**:

* The ID and the external-ID have been added in the new CPE dialog box in the list of clients to facilitate their search.

## April 2022

### Krill

**Some improvements**:

* Registration information has been added to WiMAX devices.
* Monitoring of Tycon brand Relay type devices has been included.
* Added monitoring of EDFAs.

**Some fixes**:

* Monitoring of the `voice` services of the equipment with telephony.
* Monitoring of the BGP Peers, which sometimes showed an error when executing the check
* An error in some ITFS-type graphs that were not displayed correctly has been corrected.

### Krill Monitoring UI

**New improvements**:

* A new identification icon has been added for Relay type devices in the hosts file.
* The `No location` filter of the SmartTree view has been modified.
* Added a pagination toolbar to the bottom of all views that have datatables.

**Various bug fixes**:

* Fixed the link to the CDRS viewer from the CPEs tab.
* The diagnostic view of the CPEs will disable those that are not compatible with its model to prevent them from being executed.
* The logs that were seen in the timeline of the devices to Sometimes they were not displayed correctly when there were events on it.

### Krill Rubik UI

**Some improvements**:

* Added a pagination toolbar to the bottom of all views that have datatables.

### Krill ISP UI

**New features**:

* A validation rule has been added to avoid duplication of CLIs in the list of POTSes of a CPE.
* The option to create a client from the CPE creation screen has been added, as well as a speed profile selector.

**Some bugfixes**:

* The validation rule relative to the MAC to create or modify CPEs has been corrected.
* The link to the CPE record from the CPE editing view has been corrected.

### Krill Installer UI

**Some improvements**:

* The link to the CPE monitoring view from the installation watching list has been corrected.

### Krill ACS

**Some fixes**:

* Fixed a bug that caused errors when requesting CWMP information on Mikrotik CPEs.

### Krill DOCSIS

**Some improvements**:

* Service flow templates now use FQDN instead of IP address.

## March 2022

### Krill

**Some fixes and improvements**:

* Added `backup` service information to PTPs.
* Fixed a bug that caused discrepancies between the business-impact of hosts/services and their `display_name`.
* The oratio (for the Radius service) and asterisk (for the Voice services) checks have been updated.

### Krill UI

**New features**:

* The version changelog dialog opens automatically to show what's new, whenever a new version of the application is detected.

### Krill Monitoring UI

**New improvements**:

* Added DnBw and UpBw columns in the matrix view.
* Interface bandwidth graphs show a line at the value 0 to separate upstream and downstream traffic.
* In the timeline of a Host, Zoom can now only be performed if the option that has been added to its options bar is enabled.
* The main options bar of a Host now remains fixed in the top when scrolling over the tab.
* The hosts show the IPs obtained through CWMP in their monitor tab view.
* The timeline of the hosts now shows the GPON type provisioning events.
* The table of the matrix view has been better adapted to full screen.
* The titles of the boxes of each host-group within its view, now take you to the search for hosts of that type.
* The IPs of the CPEs obtained via CWMP have been added to the list of the monitor tab of a CPE

**Various bug fixes**:

* Opening of an informative dialog when moving the date range of a Host's timeline.
* IPs from CWMP were sometimes not displayed correctly in the Host tab.
* The `ups`, `nas`, `subnet`, `device`, and `icmp` values of the `host-group` search filter.
* The links to display all elements of the Widgets for host and service problems, history and notifications.
* The color of the `down` status within the history view of the equipment file.
* Fixed display of:
    - Administrative data of a CPE (customer name)
    - Host model and brand

### Krill Oratio UI

**Minor bugfixes**:

* Added a label to the IPs and Duplicate Sessions buttons in the Oratio active sessions list.

### Krill ISP UI

**New features**:

* The automatic update of POTS of the CPE has been disabled and a button has been enabled to save the detected changes.
* The full name of the clients has been added to the list of CPEs.
* A dropdown has been added to show/hide columns in the list of CPEs.
* The different profiles show values for "human" in the list of CPEs.
* The serial number validation rule for GPON devices now depends on an inventory variable.

**New features and minor bugfixes**:

* The new ISP module has been added that allows the creation, modification and deletion of:
    - CPE Profiles
    - Customers
    - CPEs
    - PBX's Contexts

### Krill ISP-Cli

**New features**:

* The option to launch a reload of OLTs, pons and CPEs with the `snapshot` command from `ispcli` has been added.

### Kiwi

**Some fixes**:

* Fixed api output format for:
    - `/api/v2/monitoring/hostgroups`
    - `/api/v2/monitoring/location/summary`
* The option to create and delete POTS via API has been removed, since these are generated automatically when creating a CPE with telephony ports.

### Krill WebService (API)

**Some fixes**:

* Fixed a bug that could cause a user's POTS to be scratched if the user had more than one PBXv.

### Krill Core

**Some improvements**:

* Added monitoring of `radio` and `setup` services for Mimosa PTPs.
* The monitoring of the BGP Peers of the routers has been added.
* Removed speed limiting at the NAS level when set on the OLT itself.

### Krill GPON

**Some fixes and improvements**:

* The graph in real time of the bandwidth of the CPEs has been improved.
* An error that affected clients without CatV causing the TxRx service to appear in an unknown state has been fixed.
* Sometimes mementos were overwritten with old data.
* Discrepancies between memento data and reality in service-ports could cause the patcher to fail.
* Some errors in CPE bandwidth graphs.
* The error message when a provisioner cannot delete an ONU (in Huawei).

### Krill WiMAX

**Some improvements**:

* An error in the check of the `downstream` and `upstream` services regarding the calculation of the values of the metrics `dnairtime` has been corrected and `upairtime`.

## February 2022

### Krill

**Fixed various minor bugs in various checks and monitoring systems**:

* Fixed a bug in the location summary that could cause data inconsistencies regarding the issue search.
* Fixed hostgroups status output format to be compatible with the new data model.

### Krill UI

**New features and minor bugfixes**:

* Added a summary of changes from the last month on the version changes screen.
* Fixed an error that sometimes caused the configuration of some widgets to not load correctly when changing the dashboard tab.

### Krill Monitoring UI

**New features**:

* In the Sonar view, an information panel has been added with the status of hosts and services, as well as their geographical location.
* Hosts containing service issues have been added to the WorldMap view.
* A default search has been set in the world-map and smart-tree views: `hostgroup:core business_impact:&gt;=2`.
* The history of status changes has been added to the equipment timeline for both the host and its services.
* A panel with relevant information has been added to the clicked location of the sonar view, with details of equipment/services with problems.
* Markers have been added in the mini-map of the information panel of the sonar view for those teams with their own or their services problems.

**Some minor bugfixes**:

* Fixed ordering of locations by number of issues in Sonar view.
* The client information in the CPEs monitoring info has been corrected.
* When accessing the sonar view, the general search is cleared.
* Fixed a bug where changes made to chart type widget settings were not being saved correctly.
* Fixed a bug in the `duration` filter in the search box.
* Fixed a color inconsistency regarding statuses in the Sonar view locations info panel.

### Krill Oratio UI

**Minor bugfixes**:

* An explanatory message has been added in the IP Pools Widget in case there are no Pools available in the network.

### Kiwi

**Some fixes**:

* Added the option to be able to edit the Serial Number of a GPON CPE, if it does not exist.
* Fixed a bug that could cause the admin panel to not load properly.

### Krill Core

**Some bugfixes**:

* Various checks related to the core have been corrected.
* Fixed a Mikrotik backup generation check error that could cause an error when creating the backup.

**Some bugfixes**:

* Fixed false alarm due to traffic drop in Mikrotik.

### Kraken Kitchen

**Some fixes**:

* Fixed bug that caused the DHCP configuration to not be modified when changing the `remote_id` of a CPE.

### Kraken Radius Accounting

**Some fixes**:

* Fixed an error that made accounting information disappear in the hosts monitoring info.

## January 2022

### Krill

**Fixed various minor bugs in various checks and monitoring systems**:

* Check of the Mikrotik that obtains its version of the OS.
* Dependency relationship between CPEs and their hosts of record.
* Refactoring of administrative data stored in the monitoring system.
* Ubiquiti APs Configuration BackUp.
* Monitoring of BGP Peers for Netengine Huawei.
* Access to hosts links via proxy has been fixed. 

**Minor bug fixes on various checks**:

* APs BackUps.
* ITFS monitoring in PTPs.
* Polling of CPEs for various technologies (GPON, WiMax, etc.).
* HostAlive monitoring only on networks with `monitor=false`.
* Extension of the APT check frequency to 1 day.
* Added 95th percentile for ITFS bandwidth metrics. 
* Kraken-Kitchen.
* Mikrotik Backup.
* Radius Accounting.
* SIP Peers (Asterisk).
* Asterisk DDIs conf.
* Added ICMP monitoring of non-Core NAS.

### Krill UI

**New changelog window**:

* New changelog window, accessible from the lower toolbar version number, with detailed information on all modules. (Currently last 3 months).
* Refactoring per user persistent configuration attributes.

### Krill Monitoring UI

**New feature**:

* Refactored the user configuration for the implementation of an API to save and retrieve it.
* IP list in monitor host view, now detect url from Host links.
* Added Host links in Host view upper right actions menu.
* Added PPPoE IPs to Host Monitor tab view.
* Added expiration date in `/all` host view.

**Some code optimizations**:

* Added a column with time since last change to the Matrix view.
* Fixed host service picker in mobile view.
* Added a loading indicator in the Host-groups view.
* Fixed register info links in host view.
* Fix bug administrative info in Host view and Host monitor tab view.
* The generation of hosts links has been optimized based on its brand, model and network specifications.
* Removed link to radius view from `monitoring` app module menu. The view now depends on the `oratio` app module.
* Fixed bug that kept the action confirmation dialog visible after pressing the `Yes, I'm sure` button in the host monitor tab view.
* Action performing dialog in host monitor tab view, now closes when action has finished.
* Added new icons to IPTV and CATV in Host view.
* Adapted new attributes origin from cpes.
* New translation for flapping.
* Fixed superposition of conversations messages bar.
* Fixed when any parents or invalid format for the parents is prensent.

### Krill Oratio UI

**New dashboard widget**:

* An alert message has been added when there are no IP POOLs.

### Kiwi

**Some fixes**:

* Auto insertion of equipment in the monitoring part from the ISP.

### Krill ACS

**Some fixes**:

* Behavior of TR069 reporting sessions.
* Hosts diagnostics by TR069
* CPE/technology fails when kiwi is different of krill.

### Krill GPON

**Some fixes and improvements**:

* Now the provision allows an OLT as a filter
* New notifications due to optical loss from one or more clients configurable through thresholds
* Validation of PON alarms due to loss of ONUs.
* RX monitoring for certain cards.

## December 2021

### Krill UI

**New features and improvements**:

* Possibility to copy / move widgets between Dashboards, through the Dashboards editing mode options.
* Dashboard in responsive mode.
* Now the user can own customized dashboard.

**Some bugfixes**:

* Fixed finder bookmarks and history search.
* Fixed some bug in finder history functions.
* Changed base path for every route set to '/monitoring'.
* Changed Trivial' references to 'Smart Tree'.
* Fixed title translation of welcome widget.
* Mode responsive to box dialog of widgets.
* Now clicking the phicus icon or KrillUI renders it to the dashboard.
* Available Widgets in dashboard now check its multiple attribute and existence in current dashboard.

### Krill Monitoring UI

**New features**:

* New widget to show metrics of any host/service.
* Added number of down or critical hosts/services with business-impact &gt;= 2 in sidebar menu.
* Added the expiration date of CPEs in `/monitoring/all` view.
* Added the current radius/PPPoE IPs in the IPs block of a CPE monitor view.
* Hided check_command for users different to phicusadmin.
* In the sidebar menu now show a badge with the hosts and services critical total number.
* Added new widget for graphs.
* Added more functionality to expand charts in Host and Services tab view.

**Some bugfixes**:

* Changed some sidebar menus.
* Refactoring some translation in monitoring dashboard.
* Changed icon for Nas type host.
* Double-click on host now open correct URL in new window.
* Changed color for unreachable states in Sonar view.
* Changed location info to matrix view.
* Fixed minor graphical issues in SmartTree view.
* Now showing radius-disconnect host-events in Host Monitor timeline view.
* Marked as ack/downtime from host list on location or host selected in Smart Tree view.
* Labels in Bandwidth and Tx/Rx real time charts on Host Monitor tab.
* Some corrected translations in Smart Tree view.
* Changed base path for every route set to /monitoring and changed Trivial to Smart Tree.
* Refactoring expand chart behaviour in Host and Services Graphs tab view.
* Minimum height set for service list in Host Service view.
* Added some translations to last notifications widget.
* Fixing Minimum height for charts in Summary Widget.
* Refactoring code of widgets.
* Added shorcuts menu in monitoring home view.
* Added some translations to widgets.
* Improved all view in mobile mode.
* Toolbar code refactoring.
* Enabled the close button when a Pon's status dialog is loading data.
* Pon Status buttons in host service tab appears and disappear in every refresh.
* Disabled service tab button when no services available in Host View.
* In Host Group view, all host summary was removed to increase speed load.
* Now are all elements in Matrix view.
* Added translations to last notifications widget.
* Fixed always adding option to schedule downtime for hosts and services even if they are healthy.
* Fixed a Pon closing status dialog when clicking on its CPE.

### Krill Oratio UI

**New features**:

* New widget to show the percentage of free/used IPs of any selected Pool.

**Some improvements**:

* Improved responsive mode data tables.

### Krill Rubik UI

**Some improvements**:

* Responsive mode to Toolbars in some views.
* Improved mode responsive in data tables.
* Added slider to Home view.

### Krill ISP UI

**Some improvements**:

* Improved mode responsive in data tables.

### Krill PBX UI

**Some improvements**:

* Improved mode responsive in data tables.

### Krill Installer UI

**Some improvements**:

* In CPE List when no cpe profile available, now this info is not show.

### Krill WebService (API)

**Some fixes**:

* Fixed reset action from Shinken page.
* PBX changes did not launch the asterisk playbook.
* It was not allowed to leave the address_profile field empty, now it is.

## November 2021

### Krill UI

**Some improvements**:

* Added option for remove dashboard Multi dashboard and widgets capability to main krill-ui home view.

**Some fixes**:

* Fixed to finder user's bookmarks creation, editing and deletion because were not showing until refresh.
* Fixed some errors to users bookmarks edition.
* Remove tooltip in mobile's view.

### Krill Monitoring UI

**New feature**:

* Added expand/collapse behavior to service list in host service view.
* Automatic scroll to selected service in host service view.
* Fixed automatic and sudden change of current service and tab in host services view.
* Fixed Huawei and Ubiquiti IP prefix when not model available in Host Monitor tab view.
* Improved graphs footer in Host Graph tab view.
* Now we discount acknowledge &amp; downtime problems from total bad states and if all are handled, the location is OK.
* Setted default data range values to current day (from 0:00:00 to 23:59:59).
* Added some new icons for host types in Host view.
* In Sonar view, now only show locations with hosts.
* In Host Monitor view, now show in timeline TR069 service issue.
* Added Tooltip for long-output in host &amp; service history timeline.
* Added max attempts information to Host Service Info tab view.
* Graph filter fix for service graphs tab.
* Fixed state labels in host service tab history view and add show notifications checkbox.
* Added Radius IPs to host monitor view.
* Added bp:&gt;2 to Smart Tree view default search.
* Show service uptime in host-service info tab view.
* CDRs Filter and link to CPE.
* Fix World Map search to add 'type=Host'.
* Graph expand in Host Service Graphs view.

**Some improvements**:

* Improved speed load in Smart Tree view.
* Improved speed load in Sonar view.
* CWMP information in the Host Technology tab view is now loaded on startup.
* Changed resize button in sonar view.
* Refactoring and improve of code.
* Return finder's searchability to trivial view, always keeping hostgroup: core and type:Host.

### Krill PBX UI

**New feature**:

* Added translations to PBX Edit view.
* Added translations.

**Some improvements**:

* Fixed to avoid duplicate CLIps in groups and queues.
* Fixed some translations.
* Fixed CDRs date range filter.
* Implemented responsive mode.

### Krill WebService (API)

**Some fixes**:

* In pbx serializers, created a decoded jump serializer for swagger and refactored the result of receptionist options (added decoded_jump property in model and removed to_representation.
* Fixed error 500 in post customer/pbx/ddi&amp;groups.
* The pool attribute was not assigned when generating a PPPoE user via API.

### Krill ACS

**Some fixes**:

* Configure celery to autodiscover task in kws and share task in kiwi.

### Krill Core

**Some improvements**:

* Improved checks output when a SAF/IntegraW remote side does not response to SNMP.
* FiberHome boards monitoring.
* Falling edge report.

### Krill GPON

**Some fixes**:

* Memento mismatch when several workers starts to unprovision at the same time.
* Configured celery to autodiscover task in kws and share task in kiwi.

## October 2021

### Krill UI

**Some changes**:

* Removed 'string:' from finder and in search url.
* Redesigned the finder.

### Krill Monitoring UI

**New feature**:

* Added new Host Event view.
* Add seconds to Host and Service history timeline views.
* Added hostGroups filter in History view.
* Add max date to DateTimeRange in CDRS, CWMP, History, HostEvents, Host Graphs and Host Service Graphs.
* Matrix now keep visible columns if these are changed manually.
* Host view now show acknowledged or downtimed services indicator in timeline and service tab icon.
* URL for Host/Service button in /all view.
* Add PonStatus Dialog to Host Monitor View Timeline.
* Add PonStatus Dialog to Pon Service View.
* Added topology column to Matrix datatable in Matrix View.
* Added PPPoE sessions in host monitor timeline.
* Added registration state to host monitor.
* Added registration state and administrative data to Matrix view.
* Added default-preset value to Date Time Range in all views.
* Added expiration date to host monitor tab view.

**Some fixes**:

* Business Impact filter in History View and Overview Sidebar Menu.
* Some graphical issues in All view.
* Fixed Last check datetime for host/services in Host Monitor timeline.
* Removed registration info for ethernet CPEs.
* Fixed Smart Tree default search.
* Timeline events, now contemplates 'asterisk' source.
* Timezone offset events in host monitor view.
* Fixed issue on Host Service Tab Info view. When try to access current service when it was not loaded yet.
* Optimized responsive mode of Summary Widget.
* Removed number of subdomain host to prevent changes in DNS/ACL for get Host IPs.

### Krill Rubik UI

**Some improvements**:

* Added administrative ID in Ticket Edit view.

### Krill ISP UI

**Some fixes**:

* Fixed some translations.

### Kiwi

**Some improvements**:

* Created the apliaction for PBX.

### Krill WebService (API)

**Some improvements**:

* Created new endpoints type REST.
* When a CPE is registered, the model field appears blank as well as the speed.

**Some fixes**:

* The endpoint for PTP did not return the ITFS service.
* Fixes considerable load average increase caused by Krill-ws.

### Krill WiMAX

**Some improvements**:

* Wimax now can publishing the register map of the CPE/AP.
