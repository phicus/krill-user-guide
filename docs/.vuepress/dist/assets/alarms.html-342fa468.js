import{_ as e}from"./0101-648ec7e5.js";import{_ as a,o as s,c as r,a as t}from"./app-d7d7d7e0.js";const o={},n=t('<h1 id="monitoring-alarmas" tabindex="-1"><a class="header-anchor" href="#monitoring-alarmas"><span>Monitoring | Alarmas</span></a></h1><p>Búsqueda predefinida que da como resultado las alarmas generadas por Krill de la red ordenadas de mayor a menor nivel de importancia según la afectación.</p><p><img src="'+e+`" alt="MonitoringAlarms"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se considera alarma para Host aquellos que estén <strong>DOWN</strong> y para servicios los que estén en estado <strong>CRITICAL</strong>.</p></div><p>La búsqueda inicial que aparecerá en el cuadro de búsqueda superior filtrará aquellos resultados que estén ya controlados (mediante un <strong>ACK</strong> o un <strong>Downtime</strong>), cuyo estado sea considerado <strong>HARD</strong> y cuyo <strong>business impact</strong> sea mayor o igual a 2:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>alarm:true handled:false hard_state:true business_impact:&gt;=2 type:all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>En la parte superior tenemos un selector que nos permite filtrar entre Hosts y Servicios. Así como un selector que nos permite cambiar el criterio de agrupación de resultados por: Buisiness Impact, estado y host.</p>`,7),i=[n];function l(d,c){return s(),r("div",null,i)}const u=a(o,[["render",l],["__file","alarms.html.vue"]]),g=JSON.parse('{"path":"/es/krill2/monitoring/alarms.html","title":"Monitoring | Alarmas","lang":"es-ES","frontmatter":{"title":"Monitoring | Alarmas","description":"Listado de alarmas de Host y Servicios.","lang":"es-ES","prev":"/es/krill2/monitoring/","next":"problems","tags":["krill2","módulo","monitoring","alarmas"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"es/krill2/monitoring/alarms.md"}');export{u as comp,g as data};
