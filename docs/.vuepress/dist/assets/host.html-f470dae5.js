import{_ as n,a as l,b as r,c as t,d,e as c,f as p,g as m,h as g,i as u}from"./0010-14499188.js";import{_ as h,r as v,o as f,c as P,b as e,e as o,w as s,a as b,d as a}from"./app-a0f8851e.js";const _={},C=e("h1",{id:"monitoring-ficha-del-host",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#monitoring-ficha-del-host"},[e("span",null,"Monitoring | Ficha del Host")])],-1),E={class:"table-of-contents"},y=b('<p>La ficha es el elemento principal de la monitorización de los hosts que hay en Krill. Se genera para cada CPE y para cada equipo de red o servidor.</p><p>En la ficha se reúne toda la información obtenida por los diferentes servicios de Krill y se muestra información en tiempo real y también del histórico de aquellos servicios que se guarde registro.</p><p><img src="'+n+'" alt="MonitoringHostEvents"></p><p>Desde la ficha se llevan a cabo las acciones sobre los CPEs de reinicio, provisión/desprovisión y reconfiguración. También la de puesta a fábrica, en aquellos equipos que lo permitan.</p><p align="center"><img src="'+l+'" width="252"></p><p>Desde el desplegable Actions tenemos disponibles todas las acciones para ese equipo en concreto. Para un CPE de GPON tenemos las siguientes acciones:</p><ul><li><strong>Recheck</strong>: Comprueba el estado del host y sus servicios en ese momento.</li><li><strong>Acknowledge</strong>: Configura un ACK para ese host.</li><li><strong>Schedule a downtime</strong>: Configura un downtime para ese host.</li><li><strong>Reboot</strong>: Reinicia la ONT.</li><li><strong>Unprovision</strong>: Desprovisiona la ONT. Elimina sus services ports de la OLT.</li><li><strong>Reprovision</strong>: Reprovisiona la ONT. Elimina sus services ports de la OLT para justo después insertarlos de nuevo.</li><li><strong>Factory</strong>: Pone a fábrica la ONT.</li><li><strong>Reconfig</strong>: Reconfigura la ONT con una sesión ACS.</li><li><strong>CPE Edition</strong>: Abre en otra pestaña la parte Customer de ese CPE de Krill.</li><li><strong>Show in worldmap</strong>: Abre en otra pestaña una búsqueda con ese CPE en la vista Worldmap de Krill.</li><li><strong>CDR Table</strong>: Filtra las llamadas del teléfono asociado a ese CPE en la vista CDR de Krill.</li><li><strong>CWMP Table</strong>: Filtra las sesiones tr069 de ese CPE en la vista cwmp de Krill.</li></ul><p>La ficha se compone de diferentes partes, es modular. Cada ficha mostrará la información necesaria para cada tipo de equipo. Información asociada a los diferentes servicios del host.</p><p align="center"><img src="'+r+'" width="52"></p><h2 id="cpe-monitor" tabindex="-1"><a class="header-anchor" href="#cpe-monitor"><span>CPE Monitor</span></a></h2><p>Es el apartado principal e inicial de la ficha para los CPEs, en ella tenemos el histórico y timeline de los servicios del host. También los datos técnicos, de registro, del DHCP y telefonía a modo resumen en la parte superior.</p><h3 id="informacion-principal" tabindex="-1"><a class="header-anchor" href="#informacion-principal"><span>Información principal</span></a></h3><p>Los hosts pueden contener datos técnicos y de registro, así como información de IPs y telefonía. Todos ellos se encuentran agrupados en diversas cajas organizando toda esta información.</p><h3 id="services-timeline" tabindex="-1"><a class="header-anchor" href="#services-timeline"><span>Services Timeline</span></a></h3><p>Cada Host de tipo CPE puede contener diferentes servicios que incluyen los úlitmos mensajes de salida así como sus métricas (cuando estén disponibles), todo ello es renderizado en un Timeline con el histórico de cada uno, añadiendo los eventos más importantes (como IPs o eventos de provisión).</p><p>Esta es una lista de los servicios más uasdos agrupados por tecnología:</p><p><strong>GPON</strong>:</p><ul><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>pppoe/ipoe</strong>: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)</li><li><strong>provision</strong>: Retorna la información de registro (solo si la provisión es realizada por Krill)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal/ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>txrx</strong>: Obtiene los parámetros de transmisión y recepción de señal</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><p><strong>DOCSIS</strong>:</p><ul><li><strong>docsis</strong>: Obtiene los canáles inválidos para downstream/upstream.</li><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>downstream</strong>: Devuelve los niveles de señal en bajada</li><li><strong>provision</strong>: Retirna la información de registro (solo si la provisión es realizada por Krill)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>upstream</strong>: Devuelve los niveles de señal en subida</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><p><strong>G.HN</strong>:</p><ul><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>pppoe</strong>: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>setup</strong>: Retorna la longitud del cable y el snr (el ratio de señal/ruido)</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><p><strong>WIMAX</strong>:</p><ul><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>info</strong>: Obtiene el modelo del CPE y la versión de firmware</li><li><strong>downstream</strong>: Devuelve los niveles de señal en bajada</li><li><strong>pppoe</strong>: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>radio</strong>: Obtiene el tiempo de la señal en el aire y los datos tanto de subida como de bajada</li><li><strong>setup</strong>: Retorna la distancia hasta el AP así como el tiempo que está UP</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>upstream</strong>: Devuelve los niveles de señal en subida</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><h2 id="administrative" tabindex="-1"><a class="header-anchor" href="#administrative"><span>Administrative</span></a></h2><p>Información de la parte administrativa del customer: su nombre, dirección, posición en el mapa, comentarios, etc.</p><h2 id="technology" tabindex="-1"><a class="header-anchor" href="#technology"><span>Technology</span></a></h2><p>Información técnica del host así como listados de Services Ports y WANs obtenidas de la provisión y del servicio ACS.</p><p><img src="'+t+'" alt="MonitoringHostEvents"></p><h2 id="device" tabindex="-1"><a class="header-anchor" href="#device"><span>Device</span></a></h2><p>Información relacionada con el equipo instalado, la ONT. Posibilita llevar a cabo tests de diagnóstico de WiFi y ver el estado de las interfaces eth del router de una forma más visual e intuitiva.</p><p><img src="'+d+'" alt="MonitoringHostEvents"></p><h2 id="services" tabindex="-1"><a class="header-anchor" href="#services"><span>Services</span></a></h2><p>Información detallada sobre los servicios del host. Datos sobre el último check, fechas de realización, mensajes de salida, métricas, así cómo gráfico e histórico de los cambios de estado.</p><p><img src="'+c+'" alt="MonitoringHostEvents"></p><h2 id="diagnostics" tabindex="-1"><a class="header-anchor" href="#diagnostics"><span>Diagnostics</span></a></h2><p>Si el CPE lo permite se pueden hacer diversos tests que permiten un diagnóstico rápido del estado de la conexión del cliente y del WiFi que emite el equipo:</p><ul><li>Ping, donde podemos elegir a qué IP hacer el ping desde el equipo.</li><li>DNS, donde podemos elegir a qué destino intentar alcanzar vía DNS</li><li>Site Survey para ver la ocupación de las redes y el ruido en los canales de las antenas del equipo.</li></ul><p><img src="'+p+'" alt="MonitoringHostEvents"></p><h2 id="graphs" tabindex="-1"><a class="header-anchor" href="#graphs"><span>Graphs</span></a></h2><p>Acceso a la gráfica de ancho de banda cursado por el CPE así como cualquier otra métrica relativa al propio Host con histórico de tiempo y posibilidad de escoger las fechas de visualización.</p><p><img src="'+m+'" alt="MonitoringHostEvents"></p><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history"><span>History</span></a></h2><p>Histórico de eventos y envío de notificaciones del host/CPE</p><p><img src="'+g+'" alt="MonitoringHostEvents"></p><h2 id="extra-actions" tabindex="-1"><a class="header-anchor" href="#extra-actions"><span>Extra actions</span></a></h2><p>Se trata de un selector para poder elegir entre la BS de Albentia que elegir en caso de proximidad, de forma que no se haga automático, sino que se permita una selección de uno o de otro para poder equilibrar.</p><p>De esta forma si tenemos EB_A y EB_B en una misma torre, podremos priorizar la conexión a la EB_A o la EB_B de forma que podamos repartir clientes de manera equitativa y no de forma automática como ocurría hasta ahora para Albentia.</p><p><img src="'+u+'" alt="MonitoringHostEvents"></p><p>También es posible elegir en caso de Linksys el archivo de actualización que se quiere insertar en el CPE.</p>',50);function S(q,R){const i=v("router-link");return f(),P("div",null,[C,e("nav",E,[e("ul",null,[e("li",null,[o(i,{to:"#cpe-monitor"},{default:s(()=>[a("CPE Monitor")]),_:1}),e("ul",null,[e("li",null,[o(i,{to:"#informacion-principal"},{default:s(()=>[a("Información principal")]),_:1})]),e("li",null,[o(i,{to:"#services-timeline"},{default:s(()=>[a("Services Timeline")]),_:1})])])]),e("li",null,[o(i,{to:"#administrative"},{default:s(()=>[a("Administrative")]),_:1})]),e("li",null,[o(i,{to:"#technology"},{default:s(()=>[a("Technology")]),_:1})]),e("li",null,[o(i,{to:"#device"},{default:s(()=>[a("Device")]),_:1})]),e("li",null,[o(i,{to:"#services"},{default:s(()=>[a("Services")]),_:1})]),e("li",null,[o(i,{to:"#diagnostics"},{default:s(()=>[a("Diagnostics")]),_:1})]),e("li",null,[o(i,{to:"#graphs"},{default:s(()=>[a("Graphs")]),_:1})]),e("li",null,[o(i,{to:"#history"},{default:s(()=>[a("History")]),_:1})]),e("li",null,[o(i,{to:"#extra-actions"},{default:s(()=>[a("Extra actions")]),_:1})])])]),y])}const D=h(_,[["render",S],["__file","host.html.vue"]]),O=JSON.parse('{"path":"/es/krill2/monitoring/host.html","title":"Monitoring | Ficha del Host","lang":"es-ES","frontmatter":{"title":"Monitoring | Ficha del Host","description":"Ficha técnica del Host","lang":"es-ES","prev":"history","next":"cpe","tags":["krill2","módulo","monitoring","host","services"]},"headers":[{"level":2,"title":"CPE Monitor","slug":"cpe-monitor","link":"#cpe-monitor","children":[{"level":3,"title":"Información principal","slug":"informacion-principal","link":"#informacion-principal","children":[]},{"level":3,"title":"Services Timeline","slug":"services-timeline","link":"#services-timeline","children":[]}]},{"level":2,"title":"Administrative","slug":"administrative","link":"#administrative","children":[]},{"level":2,"title":"Technology","slug":"technology","link":"#technology","children":[]},{"level":2,"title":"Device","slug":"device","link":"#device","children":[]},{"level":2,"title":"Services","slug":"services","link":"#services","children":[]},{"level":2,"title":"Diagnostics","slug":"diagnostics","link":"#diagnostics","children":[]},{"level":2,"title":"Graphs","slug":"graphs","link":"#graphs","children":[]},{"level":2,"title":"History","slug":"history","link":"#history","children":[]},{"level":2,"title":"Extra actions","slug":"extra-actions","link":"#extra-actions","children":[]}],"git":{"updatedTime":1709545828000},"filePathRelative":"es/krill2/monitoring/host.md"}');export{D as comp,O as data};
