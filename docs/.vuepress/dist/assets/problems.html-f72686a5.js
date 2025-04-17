import{_ as e}from"./0201-e36321dc.js";import{_ as s,o,c as a,a as t}from"./app-df1683ad.js";const r={},n=t('<h1 id="monitoring-problemas" tabindex="-1"><a class="header-anchor" href="#monitoring-problemas"><span>Monitoring | Problemas</span></a></h1><p>Búsqueda predefinida que da como resultado los problemas de la red ordenados de mayor a menor nivel de importancia según la afectación.</p><p><img src="'+e+`" alt="MonitoringProblems"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se considera problema todo aquello que no esté <strong>UP</strong> de cara a los hosts y no esté <strong>OK</strong> para los servicios.</p></div><p>La búsqueda inicial que aparecerá en el cuadro de búsqueda superior filtrará aquellos resultados que estén ya controlados (mediante un <strong>ACK</strong> o un <strong>Downtime</strong>), cuyo estado sea considerado <strong>HARD</strong> y cuyo <strong>business impact</strong> sea mayor o igual a 2:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">problem:true handled:false hard_state:true business_impact:&gt;=2 type:all</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Al igual que en la vista Alarms, en la parte superior tenemos un selector que nos permite filtrar entre Hosts y Servicios. Así como un selector que nos permite cambiar el criterio de agrupación de resultados por: Buisiness Impact, estado y host.</p>`,7),i=[n];function l(d,c){return o(),a("div",null,i)}const u=s(r,[["render",l],["__file","problems.html.vue"]]),g=JSON.parse('{"path":"/es/krill2/monitoring/problems.html","title":"Monitoring | Problemas","lang":"es-ES","frontmatter":{"title":"Monitoring | Problemas","description":"Listado de problemas de Host y Servicios.","lang":"es-ES","prev":"alarms","next":"matrix","tags":["krill2","módulo","monitoring","problemas"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"es/krill2/monitoring/problems.md"}');export{u as comp,g as data};
