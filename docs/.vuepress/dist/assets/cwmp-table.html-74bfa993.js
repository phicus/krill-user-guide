import{_ as e,a as t,b as i}from"./0803-8fac1858.js";import{_ as o,o as n,c as s,a}from"./app-0bbc18d2.js";const r={},h=a('<h1 id="monitoring-cwmp-table" tabindex="-1"><a class="header-anchor" href="#monitoring-cwmp-table"><span>Monitoring | CWMP Table</span></a></h1><p>This views shows the information of the TR069 sessionss that Krill has had with the different ONUs/routers in the network.</p><p>It shows the cpeID, the tr069 WAN IP address, the manufacturer of the device, the model that the device is associated with, the device&#39;s software version, the kind of session and the time it started and ended.</p><p><img src="'+e+'" alt="MonitoringCWMPTable"></p><p>When the arrow icon on the left is clicked, the recived data information will be shown for that session.</p><p>When the menu that is on top and on the right of options is displayed we can put filters to have an accurate search. For example we can look for the tr069 sessions of a device by entering its CPEid.</p><p align="center"><img src="'+t+'" width="300"></p><p>When the date menu is displayed we can choose the time frame in which we want to look for the sesions.</p><p align="center"><img src="'+i+'" width="500"></p>',9),l=[h];function c(p,m){return n(),s("div",null,l)}const w=o(r,[["render",c],["__file","cwmp-table.html.vue"]]),_=JSON.parse(`{"path":"/krill2/monitoring/cwmp-table.html","title":"Monitoring | CWMP Table","lang":"en-US","frontmatter":{"title":"Monitoring | CWMP Table","description":"Network's TR069 sessions' list.","lang":"en-US","prev":"/krill2/monitoring/smart-tree","next":"/krill2/monitoring/host-events","tags":["krill2","module","monitoring","cwmp","tr069"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"krill2/monitoring/cwmp-table.md"}`);export{w as comp,_ as data};