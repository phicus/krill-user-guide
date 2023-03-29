import{_ as e,a as i,b as t,c as o,d as s,e as n,f as r,g as a,h as l}from"./0009-22f55861.js";import{_ as h,n as d,p as c,a0 as g}from"./framework-e30e40a0.js";const p={},f=g('<h1 id="monitoring-host" tabindex="-1"><a class="header-anchor" href="#monitoring-host" aria-hidden="true">#</a> Monitoring | Host</h1><p>The file is th main element in Krill about the host&#39;s monitoring. It is generated for each CPE and for each network device or server.</p><p>In the file appears all the information obtained through the different Krill services and it is shown in real time as well as the historical register of the services in the cases it is being saved.</p><p><img src="'+e+'" alt="MonitoringHostEvents"></p><p>From the file the restart, provision/unprovision and reconfiguration actions on the CPE are done as well as the factory reset in those devices that have the option.</p><p align="center"><img src="'+i+'" width="252"></p><p>From the Actions menu we have all the actions available for the device. For the GPON CPEs we have the following actions:</p><ul><li><strong>Recheck</strong>: Checks the condition of the host and its services at the moment.</li><li><strong>Acknowledge</strong>: Configures an ACK for the host.</li><li><strong>Schedule a downtime</strong>: Configures a downtime for the host.</li><li><strong>Reboot</strong>: Restarts the ONT.</li><li><strong>Unprovision</strong>: Unprovisions the ONT. Deletes all the OLT&#39;s service ports.</li><li><strong>Reprovision</strong>: Reprovisions the ONT. Deletes its service ports from the OLT to put them back right after.</li><li><strong>Factory</strong>: Gives a factory reset to the ONT.</li><li><strong>Reconfig</strong>: Reconfigures the ONT with an ACS session.</li><li><strong>CPE Edition</strong>: Opens in a new tab the customer information for that Krill&#39;s CPE.</li><li><strong>Show in worldmap</strong>: Opens in a new tab a search with that CPE in the Krill&#39;s Worldmap view.</li><li><strong>CDR Table</strong>: Filters the phone calls associated to that CPE in Krill&#39;s CDR view.</li><li><strong>CWMP Table</strong>: FIlters the TR069 sesions for that CPE in Krill&#39;s cwmp view.</li></ul><p>The file has different parts or modules. Each file will show the information needed for each device. The information is associated to the different host&#39;s services.</p><p align="center"><img src="'+t+'" width="52"></p><h2 id="cpe-monitor" tabindex="-1"><a class="header-anchor" href="#cpe-monitor" aria-hidden="true">#</a> CPE Monitor</h2><p>It&#39;s the main module and the first one on the file for the CPEs, here we have the historical register and the timeline for the host&#39;s services. On the top we also have a summary with the technical information, and the information regarding the registration, DHCP and telephony.</p><h3 id="main-info" tabindex="-1"><a class="header-anchor" href="#main-info" aria-hidden="true">#</a> Main info</h3><p>The host can contain technical and registration data, IPs or Phone info. All of this is grouped in few boxes that organizes all of them.</p><h3 id="services-timeline" tabindex="-1"><a class="header-anchor" href="#services-timeline" aria-hidden="true">#</a> Services Timeline</h3><p>Every CPE Host can contain different services that includes the last output and their metrics (when available), all are rendered in a timeline with the history of every one and adds the most important info (like IPs or provision events).</p><p>There is a common service list grouped by technology:</p><p><strong>GPON</strong>:</p><ul><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>pppoe/ipoe</strong>: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)</li><li><strong>provision</strong>: Return registration info (only if provision is realized by Krill)</li><li><strong>qos</strong>: Obtain the Quality of service, snr (signal noise ratio) and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>txrx</strong>: Get the transmission and receive signal parameters</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><p><strong>DOCSIS</strong>:</p><ul><li><strong>docsis</strong>: Get downstream/upstream invalids channels.</li><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>downstream</strong>: Get the down signal levels</li><li><strong>provision</strong>: Return registration info (only if provision is realized by Krill)</li><li><strong>qos</strong>: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>upstream</strong>: Get the up signal levels</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><p><strong>G.HN</strong>:</p><ul><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>pppoe</strong>: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)</li><li><strong>qos</strong>: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>setup</strong>: Retrieve the cable length and snr (signal noise ratio)</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><p><strong>WIMAX</strong>:</p><ul><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>info</strong>: Get the CPE model and firmware version</li><li><strong>downstream</strong>: Get the down signal levels</li><li><strong>pppoe</strong>: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)</li><li><strong>qos</strong>: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>radio</strong>: Get the air time in upload and download data</li><li><strong>setup</strong>: Retrieve the distance to AP and uptime</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>upstream</strong>: Get the up signal levels</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><h2 id="administrative" tabindex="-1"><a class="header-anchor" href="#administrative" aria-hidden="true">#</a> Administrative</h2><p>Customer&#39;s administrative information: name, address, map location, comments, etc.</p><h2 id="technology" tabindex="-1"><a class="header-anchor" href="#technology" aria-hidden="true">#</a> Technology</h2><p>Host&#39;s technical information such as the Service Ports&#39; list and WANs obtained from the provision and from the ACS service.</p><p><img src="'+o+'" alt="MonitoringHostEvents"></p><h2 id="device" tabindex="-1"><a class="header-anchor" href="#device" aria-hidden="true">#</a> Device</h2><p>Information about the device installed, the ONT. It makes it possible to run WiFi&#39;s diagnosis tests and to see the condition of the Eth interfaces of the router in a visual and intuitive way.</p><p><img src="'+s+'" alt="MonitoringHostEvents"></p><h2 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> Services</h2><p>Detailed information about host&#39;s service. Information about the last check, the dates it was made, outgoing messages, metrics and graphs and historical register of the condition changes.</p><p><img src="'+n+'" alt="MonitoringHostEvents"></p><h2 id="diagnostics" tabindex="-1"><a class="header-anchor" href="#diagnostics" aria-hidden="true">#</a> Diagnostics</h2><p>If the CPE allows it differents test can be done that give the possibility to make a fast diagnostic of the customer conection and the WiFi the device is emitting:</p><ul><li>Ping, we can choose the destination IP for the device&#39;s ping.</li><li>DNS, we can choose which destination we want the device try to get through DNS.</li><li>Site Survey to look how crowded the networks are and the noise in the antennas&#39; channels of the device.</li></ul><p><img src="'+r+'" alt="MonitoringHostEvents"></p><h2 id="graphs" tabindex="-1"><a class="header-anchor" href="#graphs" aria-hidden="true">#</a> Graphs</h2><p>Access to the CPE&#39;s bandwith graph as well as the graphs for any other metric related to the host with historical register and the possibility to pick the visualization dates.</p><p><img src="'+a+'" alt="MonitoringHostEvents"></p><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2><p>Events historical register and notifications delivery for the Host/CPE.</p><p><img src="'+l+'" alt="MonitoringHostEvents"></p>',46),m=[f];function v(u,P){return d(),c("div",null,m)}const w=h(p,[["render",v],["__file","host.html.vue"]]);export{w as default};
