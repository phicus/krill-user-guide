import{_ as o,a as r,b as a,c as l,d as h,e as c,f as d,g as p}from"./-0007-988ffca1.js";import{_ as g,r as m,o as f,c as u,b as e,e as t,w as n,a as v,d as s}from"./app-df1683ad.js";const w={},P=e("h1",{id:"monitoring-cpe",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#monitoring-cpe"},[e("span",null,"Monitoring | CPE")])],-1),y={class:"table-of-contents"},b=v('<p>The file is th main element in Krill about the host&#39;s monitoring. It is generated for each CPE and for each network device or server.</p><p>In the file appears all the information obtained through the different Krill services and it is shown in real time as well as the historical register of the services in the cases it is being saved.</p><p align="center"><img src="'+o+'" width=""></p><p>From the Actions menu we have all the actions available for the device. For the GPON CPEs we have the following actions:</p><p align="center"><img src="'+r+'" width="252"></p><p>From the team&#39;s dropdown, we have available information about when the team was created and when it was last updated, and below it continues showing various information:</p><ul><li><strong>Uptime</strong>: Displays the time it has been operating without interruptions since its last restart or shutdown.</li><li><strong>View CPE check info</strong>: Enables a dropdown on the right side, which shows information from the check.</li><li><strong>Copy CPE name</strong>: Copies the team&#39;s name to the clipboard.</li><li><strong>Links</strong>: Link to....</li><li><strong>Reboot</strong>: Restarts the ONT.</li><li><strong>Unprovision</strong>: Unprovisions the ONT. Removes its service ports from the OLT.</li><li><strong>Reprovision</strong>: Reprovisions the ONT. Removes its service ports from the OLT and then inserts them back again.</li><li><strong>Factory</strong>: Resets the ONT to factory settings.</li><li><strong>Reconfig</strong>: Reconfigures the ONT with an ACS session.</li><li><strong>CPE Edition</strong>: Opens in another tab the Customer part of that CPE from Krill.</li><li><strong>Show in worldmap</strong>: Opens in another tab a search with that CPE in the Worldmap view of Krill.</li><li><strong>CDR Table</strong>: Filters the calls from the phone associated with that CPE in the CDR view of Krill.</li><li><strong>CWMP Table</strong>: Filters the tr069 sessions of that CPE in the cwmp view of Krill.</li></ul><p>The file has different parts or modules. Each file will show the information needed for each device. The information is associated to the different host&#39;s services.</p><p align="center"><img src="'+a+'" width=""></p><h2 id="cpe-overview" tabindex="-1"><a class="header-anchor" href="#cpe-overview"><span>CPE Overview</span></a></h2><p>It is the main and initial section of the card for CPEs, in it we have the history, tasks, connected devices, and the service timeline of the host. Also, the technical data, registration, DHCP, and telephony information summarized.</p><h3 id="main-information" tabindex="-1"><a class="header-anchor" href="#main-information"><span>Main Information</span></a></h3><p>Hosts can contain technical and registration data, as well as IP and telephony information. All of this is grouped in various boxes organizing all this information.</p><h3 id="services-timeline" tabindex="-1"><a class="header-anchor" href="#services-timeline"><span>Services Timeline</span></a></h3><p>Each CPE type Host can contain different services that include the latest outgoing messages as well as their metrics (when available), all of which is rendered on a Timeline with the history of each one, adding the most important events (such as IPs or provisioning events).</p><p>This is a list of the most used services grouped by technology:</p><p><strong>GPON</strong>:</p><ul><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>pppoe/ipoe</strong>: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)</li><li><strong>provision</strong>: Return registration info (only if provision is realized by Krill)</li><li><strong>qos</strong>: Obtain the Quality of service, snr (signal noise ratio) and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>txrx</strong>: Get the transmission and receive signal parameters</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><p><strong>DOCSIS</strong>:</p><ul><li><strong>docsis</strong>: Get downstream/upstream invalids channels.</li><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>downstream</strong>: Get the down signal levels</li><li><strong>provision</strong>: Return registration info (only if provision is realized by Krill)</li><li><strong>qos</strong>: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>upstream</strong>: Get the up signal levels</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><p><strong>G.HN</strong>:</p><ul><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>pppoe</strong>: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)</li><li><strong>qos</strong>: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>setup</strong>: Retrieve the cable length and snr (signal noise ratio)</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><p><strong>WIMAX</strong>:</p><ul><li><strong>dhcp</strong>: Return IP info (only if IP is provided internally by Phicus DHCP Server)</li><li><strong>info</strong>: Get the CPE model and firmware version</li><li><strong>downstream</strong>: Get the down signal levels</li><li><strong>pppoe</strong>: Retrieve the Radius accounting session (only if IP session is provided internally by Phicus Radius Server)</li><li><strong>qos</strong>: Obtain the Quality of service, noise, signal quality and another parameters (only if Krill monitorizes the CPE QoS)</li><li><strong>radio</strong>: Get the air time in upload and download data</li><li><strong>setup</strong>: Retrieve the distance to AP and uptime</li><li><strong>tr069</strong>: Return ACS sessions info (only if CPE implements TR069 protocol)</li><li><strong>upstream</strong>: Get the up signal levels</li><li><strong>voice[X]</strong>: Related to PBX registration (only if CPE has Voice support, and [X] is related to POTS port number)</li></ul><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings"><span>Settings</span></a></h2><p>It offers the possibility to configure the WIFI channels, change the transmission power, switch channels, and configure the SSID settings.</p><p align="center"><img src="'+l+'" width=""></p><p>The WANs obtained from the provision and the ACS service are also shown.</p><p align="center"><img src="'+h+'" width=""></p><h2 id="device" tabindex="-1"><a class="header-anchor" href="#device"><span>Device</span></a></h2><p>Displays information about devices connected to the equipment, such as the name, frequency band, SSID, IP, MAC, etc.</p><p align="center"><img src="'+c+'" width=""></p><h2 id="diagnostics" tabindex="-1"><a class="header-anchor" href="#diagnostics"><span>Diagnostics</span></a></h2><p>If the CPE allows it, various tests can be performed that enable a quick diagnosis of the state of the client&#39;s connection and the WiFi emitted by the equipment:</p><ul><li>Ping, we can choose the destination IP for the device&#39;s ping.</li><li>DNS, we can choose which destination we want the device try to get through DNS.</li><li>Site Survey to look how crowded the networks are and the noise in the antennas&#39; channels of the device.</li><li>Speed test, where we can check the speed of the service.</li></ul><p align="center"><img src="'+d+'" width=""></p><h2 id="graphs" tabindex="-1"><a class="header-anchor" href="#graphs"><span>Graphs</span></a></h2><p>Access to the bandwidth usage chart, Tx/Rx, Attenuation, SNR by the CPE as well as any other metric related to the Host itself with time history and the option to choose the display dates.</p><p align="center"><img src="'+p+'" width=""></p>',39);function C(_,S){const i=m("router-link");return f(),u("div",null,[P,e("nav",y,[e("ul",null,[e("li",null,[t(i,{to:"#cpe-overview"},{default:n(()=>[s("CPE Overview")]),_:1}),e("ul",null,[e("li",null,[t(i,{to:"#main-information"},{default:n(()=>[s("Main Information")]),_:1})]),e("li",null,[t(i,{to:"#services-timeline"},{default:n(()=>[s("Services Timeline")]),_:1})])])]),e("li",null,[t(i,{to:"#settings"},{default:n(()=>[s("Settings")]),_:1})]),e("li",null,[t(i,{to:"#device"},{default:n(()=>[s("Device")]),_:1})]),e("li",null,[t(i,{to:"#diagnostics"},{default:n(()=>[s("Diagnostics")]),_:1})]),e("li",null,[t(i,{to:"#graphs"},{default:n(()=>[s("Graphs")]),_:1})])])]),b])}const I=g(w,[["render",C],["__file","cpe.html.vue"]]),T=JSON.parse('{"path":"/krill2/monitoring/cpe.html","title":"Monitoring | CPE","lang":"en-US","frontmatter":{"title":"Monitoring | CPE","description":"CPE technical file.","lang":"en-US","prev":"host","next":null,"tags":["krill2","module","monitoring","cpe","services"]},"headers":[{"level":2,"title":"CPE Overview","slug":"cpe-overview","link":"#cpe-overview","children":[{"level":3,"title":"Main Information","slug":"main-information","link":"#main-information","children":[]},{"level":3,"title":"Services Timeline","slug":"services-timeline","link":"#services-timeline","children":[]}]},{"level":2,"title":"Settings","slug":"settings","link":"#settings","children":[]},{"level":2,"title":"Device","slug":"device","link":"#device","children":[]},{"level":2,"title":"Diagnostics","slug":"diagnostics","link":"#diagnostics","children":[]},{"level":2,"title":"Graphs","slug":"graphs","link":"#graphs","children":[]}],"git":{"updatedTime":1709888897000},"filePathRelative":"krill2/monitoring/cpe.md"}');export{I as comp,T as data};
