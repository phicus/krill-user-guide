import{_ as e,a as t,b as i,c as o}from"./0203-7572f809.js";import{_ as n}from"./0204-60e5a508.js";import{_ as s,o as a,c as r,a as l}from"./app-cd585736.js";const h={},c=l('<h1 id="isp-customer-cpes" tabindex="-1"><a class="header-anchor" href="#isp-customer-cpes"><span>ISP Customer | CPEs</span></a></h1><p>From the main view a list of CPEs grouped by Realm (the network can have one or more Realms) is shown, there we can do massive changes selecting more than one CPE at a time.</p><p><img src="'+e+'" alt="ISP CPEs Dashboard"></p><p>The CPE is the device that is installed in the customer&#39;s house to provide the services.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Depending on the technology the CPE can have different names:</p><ul><li><strong>GPON</strong>: ONT</li><li><strong>WiMAX</strong>: Antenna/Router</li><li><strong>DOCSIS</strong>: Cable Modem</li><li><strong>G.HN</strong>: Router</li></ul></div><h2 id="cpes-creation" tabindex="-1"><a class="header-anchor" href="#cpes-creation"><span>CPEs&#39; creation</span></a></h2><p>To create a CPE we are going to click the button on the bar at the top of the page and then fill in the blanks that are necessary depending on the technology::</p><p align="center"><img src="'+t+'" width="500"></p><p>Once we have done that, we are going to click on the &#39;Add new CPE&#39; button and it will redirect us to the CPEs&#39; edition page.</p><h2 id="cpes-edition" tabindex="-1"><a class="header-anchor" href="#cpes-edition"><span>CPES edition</span></a></h2><p>The CPE edition page shows different tabs in which the different information needed for provision a monitor is grouped.</p><h3 id="basic-data-tab" tabindex="-1"><a class="header-anchor" href="#basic-data-tab"><span>Basic Data Tab</span></a></h3><p><img src="'+i+'" alt="ISP CPE Basic Data"></p><p>Depending on the technology, some blanks will have to be completed and some others not. In the following lines we are going to show them in detail.</p><h4 id="blanks-that-all-technologies-have" tabindex="-1"><a class="header-anchor" href="#blanks-that-all-technologies-have"><span>Blanks that all technologies have.</span></a></h4><p><strong>Basic Data</strong></p><ul><li><strong>Technology</strong>: Device&#39;s technology</li><li><strong>CPE Model</strong>: Model (group by manufacturer)</li><li><strong>Expiration date</strong>: The date when Krill is going to automatically disable the CPE&#39;s internet access.</li></ul><p><strong>Settings</strong></p><ul><li><strong>Active</strong>: when is checked we are going to have the CPE registered in the service.</li><li><strong>Access to internet</strong>: when is checked the device will get an IP with access to the internet.</li><li><strong>Must register VoIP lines in external Server</strong>: when is checked the phone will register in an external server, different to Krill&#39;s server.</li><li><strong>Is a probe</strong>: Tag to mark the device as a probe.</li><li><strong>Enable notifications</strong>: when is checked Krill will notify us in the chat of any event involving this CPE.</li></ul><p><strong>Profiles e IP</strong></p><ul><li><strong>Address Profile</strong>: Specifies the profile Krill is going to use to give an IP to the device. <ul><li>Public: Krill will give an IP from the public IP addresses.</li><li>NAT: Krill will give an IP from the NAT IP addresses.</li><li>Fixed: Krill will save the fixed IP for the CPE and will not give it through DHCP.</li></ul></li><li><strong>IP Fixed</strong>: Fiexed IP that is going to be saved for the CPE.</li><li><strong>IP Fixed LAN</strong>: IP and size of the subnetwork that has to be configured in the device&#39;s LAN configuration.</li><li><strong>Metro VLAN</strong>: ID of the VLAN that is going to be used if it is Metro ethernet.</li></ul><h4 id="gpon-technology" tabindex="-1"><a class="header-anchor" href="#gpon-technology"><span>GPON technology</span></a></h4><p>To register a new optical fiber terminal in our network the information we must fill in depends on the ONT&#39;s manufacturer, it is different in every case.</p><ul><li><strong>Sn</strong>: if it is Huawei, ZTEm FH we are going to use the GPON-SerialNumber for the sincronization with the OLT terminal.</li><li><strong>Dsn</strong>: in the case of ZTE we are going to use the SN with the acronym ZTE in this blank to link the ONT with the TR069.</li><li><strong>Model</strong>: we can choose from the list that is displayed and contains all the ONU&#39;s models that are used in the network.</li><li><strong>Speed Profile</strong>: we choose the fare that we have previously defined in the OLT as well as in Kiwi.</li><li><strong>Line Profile</strong>: VLANs&#39; map that is going to be used in the ONT&#39;s provision.</li><li><strong>TV</strong>: this activates or deactivates the TV in the CPE&#39;s service.</li><li><strong>Topology</strong>: Blank to fill in with the syntax used to identify the fibers.</li></ul><h4 id="wimax-technology" tabindex="-1"><a class="header-anchor" href="#wimax-technology"><span>WiMAX technology</span></a></h4><p>We are going to need the following information o fthe antenna:</p><ul><li><strong>MAC</strong>: corresponding to the antenna that is going to ve installed in the customer&#39;s house or where the signal is going to be received.</li><li><strong>Model</strong>: this list will show the models that every operator uses in their network.</li><li><strong>Speed Profile</strong>: the fare we want that antenna or PPoE to have.</li><li><strong>PPPoE Username/Password</strong>: in the case the connection works with PPoE instead of DHCP.</li></ul><h4 id="docsis-technology" tabindex="-1"><a class="header-anchor" href="#docsis-technology"><span>DOCSIS technology</span></a></h4><p>To register a modem we are going to need:</p><ul><li><strong>MAC</strong>: the mac of the device that is going to be installed in the customer&#39;s house.</li><li><strong>Model</strong>: is a list where the correct model for provision needs to be selected.</li><li><strong>Speed Profile</strong>: the fare or speed that is going to be assigned to the modem.</li></ul><h4 id="g-hn-technology" tabindex="-1"><a class="header-anchor" href="#g-hn-technology"><span>G.HN technology</span></a></h4><p>To register a G.HN we are going to need:</p><ul><li><strong>MAC</strong>: the mac of the device that is going to be installed in the customer&#39;s house so we can identify it and give it an IP.</li><li><strong>Model</strong>: is a list where the correct G.HN model for provision needs to be selected.</li><li><strong>Speed Profile</strong>: the fare or speed that is going to be assigned for this connection.</li></ul><h3 id="administrative-info-tab" tabindex="-1"><a class="header-anchor" href="#administrative-info-tab"><span>Administrative Info Tab</span></a></h3><p><img src="'+o+'" alt="ISP CPE Administrative Info"></p><p>In the Administrative Info tab the blanks related with the topology and the device&#39;s localization are grouped. Here we can find:</p><ul><li><strong>Topology</strong>: Information about the CTO in which the device is connected, or any other impotant information for the management of the network.</li><li><strong>External ID</strong>: Device&#39;s external ID.</li><li><strong>Dirección</strong>: Information about the device&#39;s country, city, neighborhood, postal code and address.</li><li><strong>Latitude y Longitude</strong>: It can be filled with the coordinates to choose its position in the world map.</li><li><strong>Notes</strong>: un comentario para identificar o marcar el equipo.</li></ul><h3 id="potses-tab" tabindex="-1"><a class="header-anchor" href="#potses-tab"><span>POTSes Tab</span></a></h3><p><img src="'+n+'" alt="ISP CPE POTSes"></p><p>If the device has available telephony ports we can configure them through the different blanks:</p><ul><li><strong>CLI</strong>: Phone number that we want to associate to the CPE.</li><li><strong>Label</strong>: Name of the phone or something to identify it.</li><li><strong>Context</strong>: Select the call context among the available ones.</li><li><strong>Language</strong>: It determinates the language of the answering machine and the options on the central.</li><li><strong>Username y Password</strong>: Only needed in the case that the phone is registered on an external telephony server. If it is registered on Krill&#39;s PBX this are optional.</li><li><strong>DTMF</strong>: It allows us to choose the DMTF of the phone.</li><li><strong>PBX Ext</strong>: When is checked we choose the extension as a part of the virtual PBX.</li><li><strong>Voicemail Password</strong>: We established the password for the voice mail.</li></ul>',41),g=[c];function d(p,m){return a(),r("div",null,g)}const P=s(h,[["render",d],["__file","cpes.html.vue"]]),w=JSON.parse(`{"path":"/krill2/isp-customer/cpes.html","title":"ISP Customer | CPEs","lang":"en-US","frontmatter":{"title":"ISP Customer | CPEs","description":"CPEs' list and management.","lang":"en-US","prev":"/krill2/isp-customer/customers","next":"/krill2/isp-customer/potses","tags":["krill2","module","isp","cpes","realm"]},"headers":[{"level":2,"title":"CPEs' creation","slug":"cpes-creation","link":"#cpes-creation","children":[]},{"level":2,"title":"CPES edition","slug":"cpes-edition","link":"#cpes-edition","children":[{"level":3,"title":"Basic Data Tab","slug":"basic-data-tab","link":"#basic-data-tab","children":[]},{"level":3,"title":"Administrative Info Tab","slug":"administrative-info-tab","link":"#administrative-info-tab","children":[]},{"level":3,"title":"POTSes Tab","slug":"potses-tab","link":"#potses-tab","children":[]}]}],"git":{"updatedTime":1673356512000},"filePathRelative":"krill2/isp-customer/cpes.md"}`);export{P as comp,w as data};
