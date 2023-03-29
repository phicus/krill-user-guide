# Changelog

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