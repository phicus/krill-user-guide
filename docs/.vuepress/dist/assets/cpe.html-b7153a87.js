import{_ as n,a as l,b as r,c as t,d,e as c,f as p,g}from"./-0007-988ffca1.js";import{_ as m,r as u,o as h,c as v,b as e,e as o,w as a,a as f,d as s}from"./app-a30f408b.js";const P={},C=e("h1",{id:"monitoring-ficha-del-cpe",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#monitoring-ficha-del-cpe"},[e("span",null,"Monitoring | Ficha del CPE")])],-1),b={class:"table-of-contents"},_=f('<p>La ficha es el elemento principal de la monitorización de los hosts que hay en Krill. Se genera para cada CPE y para cada equipo de red o servidor.</p><p>En la ficha se reúne toda la información obtenida por los diferentes servicios de Krill y se muestra información en tiempo real y también del histórico de aquellos servicios que se guarde registro.</p><p align="center"><img src="'+n+'" width=""></p><p>Desde la ficha se llevan a cabo las acciones sobre los CPEs de reinicio, provisión/desprovisión y reconfiguración. También la de puesta a fábrica, en aquellos equipos que lo permitan.</p><p align="center"><img src="'+l+'" width="252"></p><p>Desde el desplegable del equipo tenemos disponible información de cuando fue creado y cuando fue actualizado por última vez el equipo y debajo continua mostrando diversa información:</p><ul><li><strong>Uptime</strong>: Muestra el tiempo que está operando sin interrupciones desde su último reinicio o apagado</li><li><strong>View CPE check info</strong>: Habilita un desplegable en la parte de derecha, en la que muestra información del check</li><li><strong>Copy CPE name</strong>: Copia en el portapapeles el nombre del equipo</li><li><strong>Links</strong>: Enlace a....</li><li><strong>Reboot</strong>: Reinicia la ONT.</li><li><strong>Unprovision</strong>: Desprovisiona la ONT. Elimina sus services ports de la OLT.</li><li><strong>Reprovision</strong>: Reprovisiona la ONT. Elimina sus services ports de la OLT para justo después insertarlos de nuevo.</li><li><strong>Factory</strong>: Pone a fábrica la ONT.</li><li><strong>Reconfig</strong>: Reconfigura la ONT con una sesión ACS.</li><li><strong>CPE Edition</strong>: Abre en otra pestaña la parte Customer de ese CPE de Krill.</li><li><strong>Show in worldmap</strong>: Abre en otra pestaña una búsqueda con ese CPE en la vista Worldmap de Krill.</li><li><strong>CDR Table</strong>: Filtra las llamadas del teléfono asociado a ese CPE en la vista CDR de Krill.</li><li><strong>CWMP Table</strong>: Filtra las sesiones tr069 de ese CPE en la vista cwmp de Krill.</li></ul><p>La ficha se compone de diferentes partes, es modular. Cada ficha mostrará la información necesaria para cada tipo de equipo. Información asociada a los diferentes servicios del host.</p><p align="center"><img src="'+r+'" width=""></p><h2 id="cpe-general" tabindex="-1"><a class="header-anchor" href="#cpe-general"><span>CPE General</span></a></h2><p>Es el apartado principal e inicial de la ficha para los CPEs, en ella tenemos el histórico, tareas, los dispositivos conectados y timeline de los servicios del host. También los datos técnicos, de registro, del DHCP y telefonía a modo resumen.</p><h3 id="informacion-principal" tabindex="-1"><a class="header-anchor" href="#informacion-principal"><span>Información principal</span></a></h3><p>Los hosts pueden contener datos técnicos y de registro, así como información de IPs y telefonía. Todos ellos se encuentran agrupados en diversas cajas organizando toda esta información.</p><h3 id="cronograma-de-servicios" tabindex="-1"><a class="header-anchor" href="#cronograma-de-servicios"><span>Cronograma de servicios</span></a></h3><p>Cada Host de tipo CPE puede contener diferentes servicios que incluyen los úlitmos mensajes de salida así como sus métricas (cuando estén disponibles), todo ello es renderizado en un Timeline con el histórico de cada uno, añadiendo los eventos más importantes (como IPs o eventos de provisión).</p><p>Esta es una lista de los servicios más uasdos agrupados por tecnología:</p><p><strong>GPON</strong>:</p><ul><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>pppoe/ipoe</strong>: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)</li><li><strong>provision</strong>: Retorna la información de registro (solo si la provisión es realizada por Krill)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal/ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>txrx</strong>: Obtiene los parámetros de transmisión y recepción de señal</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><p><strong>DOCSIS</strong>:</p><ul><li><strong>docsis</strong>: Obtiene los canáles inválidos para downstream/upstream.</li><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>downstream</strong>: Devuelve los niveles de señal en bajada</li><li><strong>provision</strong>: Retirna la información de registro (solo si la provisión es realizada por Krill)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>upstream</strong>: Devuelve los niveles de señal en subida</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><p><strong>G.HN</strong>:</p><ul><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>pppoe</strong>: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>setup</strong>: Retorna la longitud del cable y el snr (el ratio de señal/ruido)</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><p><strong>WIMAX</strong>:</p><ul><li><strong>dhcp</strong>: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)</li><li><strong>info</strong>: Obtiene el modelo del CPE y la versión de firmware</li><li><strong>downstream</strong>: Devuelve los niveles de señal en bajada</li><li><strong>pppoe</strong>: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)</li><li><strong>qos</strong>: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)</li><li><strong>radio</strong>: Obtiene el tiempo de la señal en el aire y los datos tanto de subida como de bajada</li><li><strong>setup</strong>: Retorna la distancia hasta el AP así como el tiempo que está UP</li><li><strong>tr069</strong>: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)</li><li><strong>upstream</strong>: Devuelve los niveles de señal en subida</li><li><strong>voice[X]</strong>: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)</li></ul><h2 id="configuracion" tabindex="-1"><a class="header-anchor" href="#configuracion"><span>Configuración</span></a></h2><p>Ofrece la posibilidad de configurar los canales WIFI , cambiar la potencia de transmisión, cambio de canal, configurar los ajustes del SSID.</p><p align="center"><img src="'+t+'" width=""></p><p>También se muestran las WANs obtenidas de la provisión y del servicio ACS.</p><p align="center"><img src="'+d+'" width=""></p><h2 id="dispositivos" tabindex="-1"><a class="header-anchor" href="#dispositivos"><span>Dispositivos</span></a></h2><p>Muestra información de los dispositivos conectados al equipo, como son el nombre, banda de frecuencia, SSID, IP, MAC, etc.</p><p align="center"><img src="'+c+'" width=""></p><h2 id="diagnosticos" tabindex="-1"><a class="header-anchor" href="#diagnosticos"><span>Diagnósticos</span></a></h2><p>Si el CPE lo permite se pueden hacer diversos tests que permiten un diagnóstico rápido del estado de la conexión del cliente y del WiFi que emite el equipo:</p><ul><li>Ping, donde podemos elegir a qué IP hacer el ping desde el equipo.</li><li>DNS, donde podemos elegir a qué destino intentar alcanzar vía DNS</li><li>Site Survey para ver la ocupación de las redes y el ruido en los canales de las antenas del equipo.</li><li>Test de velocidad, donde podemos comprobar la velocidad del servicio.</li></ul><p align="center"><img src="'+p+'" width=""></p><h2 id="graficas" tabindex="-1"><a class="header-anchor" href="#graficas"><span>Gráficas</span></a></h2><p>Acceso a la gráfica de ancho de banda cursado, Tx/Rx, Attenuation, Pondesv por el CPE así como cualquier otra métrica relativa al propio Host con histórico de tiempo y posibilidad de escoger las fechas de visualización.</p><p align="center"><img src="'+g+'" width=""></p>',39);function E(R,S){const i=u("router-link");return h(),v("div",null,[C,e("nav",b,[e("ul",null,[e("li",null,[o(i,{to:"#cpe-general"},{default:a(()=>[s("CPE General")]),_:1}),e("ul",null,[e("li",null,[o(i,{to:"#informacion-principal"},{default:a(()=>[s("Información principal")]),_:1})]),e("li",null,[o(i,{to:"#cronograma-de-servicios"},{default:a(()=>[s("Cronograma de servicios")]),_:1})])])]),e("li",null,[o(i,{to:"#configuracion"},{default:a(()=>[s("Configuración")]),_:1})]),e("li",null,[o(i,{to:"#dispositivos"},{default:a(()=>[s("Dispositivos")]),_:1})]),e("li",null,[o(i,{to:"#diagnosticos"},{default:a(()=>[s("Diagnósticos")]),_:1})]),e("li",null,[o(i,{to:"#graficas"},{default:a(()=>[s("Gráficas")]),_:1})])])]),_])}const y=m(P,[["render",E],["__file","cpe.html.vue"]]),O=JSON.parse('{"path":"/es/krill2/monitoring/cpe.html","title":"Monitoring | Ficha del CPE","lang":"es-ES","frontmatter":{"title":"Monitoring | Ficha del CPE","description":"Ficha técnica del CPE","lang":"es-ES","prev":"host","next":null,"tags":["krill2","módulo","monitoring","cpe","services"]},"headers":[{"level":2,"title":"CPE General","slug":"cpe-general","link":"#cpe-general","children":[{"level":3,"title":"Información principal","slug":"informacion-principal","link":"#informacion-principal","children":[]},{"level":3,"title":"Cronograma de servicios","slug":"cronograma-de-servicios","link":"#cronograma-de-servicios","children":[]}]},{"level":2,"title":"Configuración","slug":"configuracion","link":"#configuracion","children":[]},{"level":2,"title":"Dispositivos","slug":"dispositivos","link":"#dispositivos","children":[]},{"level":2,"title":"Diagnósticos","slug":"diagnosticos","link":"#diagnosticos","children":[]},{"level":2,"title":"Gráficas","slug":"graficas","link":"#graficas","children":[]}],"git":{"updatedTime":1709888897000},"filePathRelative":"es/krill2/monitoring/cpe.md"}');export{y as comp,O as data};
