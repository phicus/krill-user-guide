import{_ as o,a as s,b as n}from"./0003-15b75061.js";import{_ as a,r as l,o as r,c,b as e,d as t,e as d,w as h,a as p}from"./app-d7d7d7e0.js";const m={},g=e("h1",{id:"installer-tools",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installer-tools"},[e("span",null,"Installer Tools")])],-1),f=e("p",null,"The Installer Tool is designed to make the ONTs installation easier for the network's installer technician. It takes a few seconds for the technician to register and make a ONT work with a mobile phone or a tablet.",-1),u=e("p",null,"It allows to register a CPE by registering the customer first; it uses the geolocalization of the mobile phone used to register the ONT and the SN is selected from the pending ONUs list.",-1),_=e("p",null,[e("img",{src:o,alt:"ISP Customer Dashboard"})],-1),w=p('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We can put the serial number in three different ways:</p><ol><li>Putting the digits in the corresponding gap.</li><li>Displaying the list that appears in the gap.</li><li>Clicking on the magnifying glass that gives acces to the pending configuration ONUS list ordered by OLT.</li></ol><p><img src="'+s+'" alt="ISP Customer Unconfigured ONUs"></p></div><p>Once it is selected, the device will appear in the <strong><code>CPE Watcher</code></strong> panel waiting for the OLTs information: granted IP, transmition thresholds, time since it was provisioned, etc.)</p><p align="center"><img src="'+n+'" width="400"></p><p>This information will allow the technician to know if some adiotional update on the installation is needed or to proccess, from the application, the unprovision of the device working and inserting a new one from the three dots menu that appears with every provisioned device.</p>',4);function k(v,T){const i=l("RouteLink");return r(),c("div",null,[g,f,u,_,e("p",null,[t("By filling the 3 gaps, the CPE's provision is processed. After that, the monitoring information will appear and the information can be modified in the CPE's file that appears here: "),d(i,{to:"/krill2/isp-customer/cpes.html#edicion-de-cpes"},{default:h(()=>[t("Customers module")]),_:1}),t(".")]),w])}const I=a(m,[["render",k],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/krill2/installer-tools/","title":"Installer Tools","lang":"en-US","frontmatter":{"title":"Installer Tools","description":"Installer Tools.","lang":"en-US","prev":null,"next":null,"tags":["krill2","modulo","installer-tools"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"krill2/installer-tools/index.md"}');export{I as comp,x as data};
