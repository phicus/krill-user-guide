import{_ as e}from"./0601-486d2e6e.js";import{_ as o,o as s,c as t,a}from"./app-cd585736.js";const r={},i=a('<h1 id="monitoring-worldmap" tabindex="-1"><a class="header-anchor" href="#monitoring-worldmap"><span>Monitoring | Worldmap</span></a></h1><p>Vista que posiciona en el mapa los equipos de la red y los pinta de color verde o rojo según su estado.</p><p><img src="'+e+`" alt="MonitoringWorldmap"></p><p>La búsqueda inicial incluye sólo los equipos con Bussiness Impact &gt; 2, lo que nos da como resultado los equipos core de la red.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Podríamos buscar los equipos registrados en un PON de un OLT y ver su estado, por ejemplo, la siguiente búsqueda nos mostraría los hosts registrados en el Frame/Slot/Port <strong>0/5/2</strong> de la OLT <strong>oltCEEIM</strong>:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">regtag:0/5/2 regtag:oltCEEIM type:host</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div>`,5),n=[i];function l(d,p){return s(),t("div",null,n)}const u=o(r,[["render",l],["__file","worldmap.html.vue"]]),g=JSON.parse('{"path":"/es/krill2/monitoring/worldmap.html","title":"Monitoring | Worldmap","lang":"es-ES","frontmatter":{"title":"Monitoring | Worldmap","description":"Mapa mundial con posición de los diversos equipos de la red.","lang":"es-ES","prev":"unprovisioned-onus","next":"smart-tree","tags":["krill2","módulo","monitoring","worldmap"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"es/krill2/monitoring/worldmap.md"}');export{u as comp,g as data};
