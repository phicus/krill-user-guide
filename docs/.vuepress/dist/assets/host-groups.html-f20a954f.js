import{_ as o}from"./0301-97535716.js";import{_ as e,o as s,c as t,a}from"./app-df1683ad.js";const r={},i=a('<h1 id="monitoring-grupos-de-hosts" tabindex="-1"><a class="header-anchor" href="#monitoring-grupos-de-hosts"><span>Monitoring | Grupos de Hosts</span></a></h1><p>Vista que agrupa todos los tipos de Hosts que hay en Krill, los diferencia y en base a su estado los pinta de un color u otro.</p><p><img src="'+o+'" alt="MonitoringHostGroups"></p><p>Vista útil para de forma visual revisar el estado de los diferentes equipos de la red.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Los diferentes estados en función del color son:</p><ul><li><strong>Verde</strong>: quiere decir que están bien/alcanzable</li><li><strong>Rojo</strong>: que tienen algún problema/caídos</li><li><strong>Naranja</strong>: que algún servicio está alarmado</li><li><strong>Azul</strong>: que el equipo no ha sido chequeado y está en un estado desconocido</li><li><strong>Púrpura</strong>: que el servicio o host al que hace referencia está inalcanzable</li></ul><p>Todos los colores pueden estar más tenues, indicando que esos equipos o servicios se encuentran controlados mediante un ACK o un Downtime.</p></div><p>En ella se listan las OLTs de la red, los routers, o los servidores que Krill monitoriza, etc.</p><p>Cada Host Group te enlaza directamente a su búsqueda para facilitar su listado con sólo pinchar en ellos.</p>',7),n=[i];function l(d,u){return s(),t("div",null,n)}const m=e(r,[["render",l],["__file","host-groups.html.vue"]]),g=JSON.parse('{"path":"/es/krill2/monitoring/host-groups.html","title":"Monitoring | Grupos de Hosts","lang":"es-ES","frontmatter":{"title":"Monitoring | Grupos de Hosts","description":"Listado de equipos agrupados por el tipo de host con un sumario de estados de cada uno.","lang":"es-ES","prev":"matrix","next":"sonar","tags":["krill2","módulo","monitoring","host-groups","hosts","summary"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"es/krill2/monitoring/host-groups.md"}');export{m as comp,g as data};
