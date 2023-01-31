import{_ as e}from"./0301-97535716.js";import{_ as t,n as o,p as i,a0 as r}from"./framework-e30e40a0.js";const s={},n=r('<h1 id="monitoring-host-groups" tabindex="-1"><a class="header-anchor" href="#monitoring-host-groups" aria-hidden="true">#</a> Monitoring | Host Groups</h1><p>This view groups all the kind of hosts that are registered in Krill, they are differentiated by their condition and its color depends on the condition too.</p><p><img src="'+e+'" alt="MonitoringHostGroups"></p><p>It is useful to look at the different network&#39;s devices condition quickly.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The different conditions according to their color are:</p><ul><li><strong>Green</strong>: it means they are ok/reachable.</li><li><strong>Red</strong>: they have some problem or are down.</li><li><strong>Orange</strong>: some service is alarmed.</li><li><strong>Blue</strong>: the device has not been checked and is in an unknown condition.</li><li><strong>Purple</strong>: the service or host is unreachable.</li></ul><p>If the color is light it indicates that the device or service is under control with an ACK or Downtime.</p></div><p>Here the network&#39;s OLTs, routers, or servers that Krill monitors, among others are listed.</p><p>Each Host Group has a direct link to its search that makes the access to its list easier by just clicking on them.</p>',7),a=[n];function c(l,h){return o(),i("div",null,a)}const u=t(s,[["render",c],["__file","host-groups.html.vue"]]);export{u as default};