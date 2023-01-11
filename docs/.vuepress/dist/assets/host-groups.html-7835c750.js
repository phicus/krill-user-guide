import{_ as e}from"./0301-0b82b91a.js";import{_ as o,n as s,p as a,a0 as t}from"./framework-b76f3d1b.js";const n={},r=t('<h1 id="monitoring-grupos-de-hosts" tabindex="-1"><a class="header-anchor" href="#monitoring-grupos-de-hosts" aria-hidden="true">#</a> Monitoring | Grupos de Hosts</h1><p>Vista que agrupa todos los tipos de Hosts que hay en Krill, los diferencia y en base a su estado los pinta de un color u otro.</p><p><img src="'+e+'" alt="MonitoringHostGroups"></p><p>Vista útil para de forma visual revisar el estado de los diferentes equipos de la red.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Los diferentes estados en función del color son:</p><ul><li><strong>Verde</strong>: quiere decir que están bien/alcanzable</li><li><strong>Rojo</strong>: que tienen algún problema/caídos</li><li><strong>Naranja</strong>: que algún servicio está alarmado</li><li><strong>Azul</strong>: que el equipo no ha sido chequeado y está en un estado desconocido</li><li><strong>Púrpura</strong>: que el servicio o host al que hace referencia está inalcanzable</li></ul><p>Todos los colores pueden estar más tenues, indicando que esos equipos o servicios se encuentran controlados mediante un ACK o un Downtime.</p></div><p>En ella se listan las OLTs de la red, los routers, o los servidores que Krill monitoriza, etc.</p><p>Cada Host Group te enlaza directamente a su búsqueda para facilitar su listado con sólo pinchar en ellos.</p>',7),i=[r];function l(d,c){return s(),a("div",null,i)}const m=o(n,[["render",l],["__file","host-groups.html.vue"]]);export{m as default};