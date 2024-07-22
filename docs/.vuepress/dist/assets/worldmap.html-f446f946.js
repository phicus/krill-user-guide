import{_ as e}from"./0601-486d2e6e.js";import{_ as t,o,c as i,a as r}from"./app-7a6d14ad.js";const n={},s=r('<h1 id="monitoring-worldmap" tabindex="-1"><a class="header-anchor" href="#monitoring-worldmap"><span>Monitoring | Worldmap</span></a></h1><p>This view shows the location of the network&#39;s devices and paints them with green or red depending on their condition.</p><p><img src="'+e+`" alt="MonitoringWorldmap"></p><p>The main search includes only the devices with Business Impact &gt; 2, which gives us as a result the network&#39;s core devices.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We can search the devices registered on a specific OLT&#39;s PON, and it will show its condition, for example, the following search will return the hosts that are registered in the Frame/Slot/Port <strong>0/5/2</strong> of the OLT <strong>oltCEEIM</strong>:</p><pre><code>regtag:0/5/2 regtag:oltCEEIM type:host
</code></pre></div>`,5),a=[s];function l(c,d){return o(),i("div",null,a)}const h=t(n,[["render",l],["__file","worldmap.html.vue"]]),g=JSON.parse(`{"path":"/krill2/monitoring/worldmap.html","title":"Monitoring | Worldmap","lang":"en-US","frontmatter":{"title":"Monitoring | Worldmap","description":"World map with the location of the different network's devices.","lang":"en-US","prev":"/krill2/monitoring/unprovisioned-onus","next":"/krill2/monitoring/smart-tree","tags":["krill2","module","monitoring","worldmap"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"krill2/monitoring/worldmap.md"}`);export{h as comp,g as data};
