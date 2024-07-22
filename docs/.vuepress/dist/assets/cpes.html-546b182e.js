import{_ as e,a,b as s,c as o}from"./0203-7572f809.js";import{_ as i}from"./0204-60e5a508.js";import{_ as n,o as l,c as r,a as t}from"./app-d7d7d7e0.js";const d={},c=t('<h1 id="isp-customer-cpes" tabindex="-1"><a class="header-anchor" href="#isp-customer-cpes"><span>ISP Customer | CPEs</span></a></h1><p>Desde la vista principal de CPEs se muestra el listado de éstos agrupados por Realm (puede haber uno o más Realms) y en él podemos hacer cambios masivos seleccionando varios a la vez.</p><p><img src="'+e+'" alt="ISP CPEs Dashboard"></p><p>El CPE es el equipo que se pone en casa del cliente para darle servicio.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>En función de la tecnología, el CPE puede recibir diversos nombres:</p><ul><li><strong>GPON</strong>: ONT</li><li><strong>WiMAX</strong>: Antena/Router</li><li><strong>DOCSIS</strong>: Cable Módem</li><li><strong>G.HN</strong>: Router</li></ul></div><h2 id="creacion-de-cpes" tabindex="-1"><a class="header-anchor" href="#creacion-de-cpes"><span>Creación de CPES</span></a></h2><p>Para crear un CPE pulsaremos sobre el botón de la barra superior y rellenaremos los campos necesarios, en función de la tecnología:</p><p align="center"><img src="'+a+'" width="500"></p><p>Una vez finalicemos, pulsaremos sobre el botón <code>Añadir nuevo CPE</code> y se nos redirigirá a la pantalla de edición de CPEs.</p><h2 id="edicion-de-cpes" tabindex="-1"><a class="header-anchor" href="#edicion-de-cpes"><span>Edición de CPES</span></a></h2><p>La edición de CPE muestra diversas pestañas en las que se agrupan los diferentes datos necesarios para su provisión y monitorización.</p><h3 id="pestana-basic-data" tabindex="-1"><a class="header-anchor" href="#pestana-basic-data"><span>Pestaña Basic Data</span></a></h3><p><img src="'+s+'" alt="ISP CPE Basic Data"></p><p>En función de la tecnología, habrá unos campos que sean obligatorios y otros no. A continuación mostramos el detalle de éstos.</p><h4 id="campos-comunes-a-las-diversas-tecnologias" tabindex="-1"><a class="header-anchor" href="#campos-comunes-a-las-diversas-tecnologias"><span>Campos comunes a las diversas tecnologías</span></a></h4><p><strong>Basic Data</strong></p><ul><li><strong>Technology</strong>: Tecnología del dispositivo</li><li><strong>CPE Model</strong>: Modelo (Agrupado por Fabricante)</li><li><strong>Fecha de expiración</strong>: Determina la fecha en la que Krill cortará el Acceso a internet al CPE automáticamente.</li></ul><p><strong>Settings</strong></p><ul><li><strong>Active</strong>: con él marcado tendremos al CPE dado de alta en el servicio.</li><li><strong>Access to internet</strong>: con él marcado el equipo obtendrá IP de navegación.</li><li><strong>Must register VoIP lines in external Server</strong>: al marcarlo le diremos que el teléfono ha de registrarse en un servidor diferente al de Krill .</li><li><strong>Is a probe</strong>: Es una etiqueta para marcar un equipo como sonda.</li><li><strong>Enable notifications</strong>: marcándolo haremos que Krill nos avise de cualquier evento de este cpe en el chat.</li></ul><p><strong>Profiles e IP</strong></p><ul><li><strong>Address Profile</strong>: Especifica el perfil que usará Krill para asignar una IP al dispositivo. <ul><li>Pública: Krill asignará IP del rango de IPs públicas.</li><li>NAT: Krill asignará IP del rango de IPs NATeadas.</li><li>Fixed: Krill reservará la IP fija destinada a ese CPE y no la repartirá en el DHCP.</li></ul></li><li><strong>IP Fixed</strong>: IP fija a reservar para ese CPE.</li><li><strong>IP Fixed LAN</strong>: IP y tamaño de subred a configurar en la parte LAN del equipo.</li><li><strong>Metro VLAN</strong>: ID de la VLAN a usar en caso de ser Metro ethernet V</li></ul><h4 id="tecnologia-gpon" tabindex="-1"><a class="header-anchor" href="#tecnologia-gpon"><span>Tecnología GPON</span></a></h4><p>Para dar de alta un nuevo terminal de fibra óptica en nuestra red debemos rellenar los datos dependiendo del fabricante de la ONT, porque en cada caso es diferente.</p><ul><li><strong>Sn</strong>: utilizaremos el GPON-SerialNumber en caso de los terminales Huawei, ZTE, FH para la sincronización del terminal con OLT.</li><li><strong>Dsn</strong>: utilizaremos el SN con las siglas iniciales ZTE en caso de ZTE en esta casilla para relacionar la ONT con el tr069.</li><li><strong>Model</strong>: podremos escoger de entre todos los modelos de ONU que usemos en la red mediante el desplegable.</li><li><strong>Speed Profile</strong>: elegiremos la tarifa que previamente habremos definido tanto en la OLT como en Kiwi.</li><li><strong>Line Profile</strong>: Mapa de VLANs a usar en la provisión de la ONT.</li><li><strong>TV</strong>: Activa o desactiva la TV en el servicio del CPE.</li><li><strong>Topology</strong>: Campo para rellenar con la sintaxis propia para identificar las fibras.</li></ul><h4 id="tecnologia-wimax" tabindex="-1"><a class="header-anchor" href="#tecnologia-wimax"><span>Tecnología WiMAX</span></a></h4><p>Necesitaremos los siguientes datos de la antena:</p><ul><li><strong>MAC</strong>: de la antena que se vaya a poner en casa del cliente o donde se vaya a recibir la señal.</li><li><strong>Model</strong>: en este listado aparecerán los modelos que cada operador utiliza en su red.</li><li><strong>Speed Profile</strong>: la tarifa que queremos que tenga aplicada esa antena o PPPoE.</li><li><strong>PPPoE Username/Password</strong>: en caso de funcionar por PPPoE la conexión y no por DHCP.</li></ul><h4 id="tecnologia-docsis" tabindex="-1"><a class="header-anchor" href="#tecnologia-docsis"><span>Tecnología DOCSIS</span></a></h4><p>Para dar de alta un módem necesitaremos:</p><ul><li><strong>MAC</strong>: la mac del equipo que se va a poner en casa del cliente.</li><li><strong>Model</strong>: elegir el modelo para una correcta provisión de los establecidos en la lista.</li><li><strong>Speed Profile</strong>: la tarifa a aplicar y/o la velocidad asignada para este módem.</li></ul><h4 id="tecnologia-g-hn" tabindex="-1"><a class="header-anchor" href="#tecnologia-g-hn"><span>Tecnología G.HN</span></a></h4><p>Para dar de alta un CPE necesitaremos:</p><ul><li><strong>MAC</strong>: la mac del equipo que se va a poner en casa del cliente para identificarlo y poder darle IP.</li><li><strong>Model</strong>: elegir el modelo para una correcta provisión de los establecidos en la lista entre los modelos G.hn.</li><li><strong>Speed Profile</strong>: la tarifa a aplicar y/o la velocidad asignada para esta conexión.</li></ul><h3 id="pestana-administrative-info" tabindex="-1"><a class="header-anchor" href="#pestana-administrative-info"><span>Pestaña Administrative Info</span></a></h3><p><img src="'+o+'" alt="ISP CPE Administrative Info"></p><p>En la pestaña Administrative info se agrupan los campos relacionados con la topología y localización del equipo. Aquí podemos encontrar:</p><ul><li><strong>Topology</strong>: Información sobre el CTO en el que está conectado el equipo, o cualquier otro dato de interés para la gestión de planta externa.</li><li><strong>External ID</strong>: ID Externo del dispositivo.</li><li><strong>Dirección</strong>: Datos sobre el país, ciudad, barrio, código postal y dirección física del equipo instalado.</li><li><strong>Latitude y Longitude</strong>: Se puede rellenar con las coordenadas para elegir su posición en el world map.</li><li><strong>Notes</strong>: un comentario para identificar o marcar el equipo.</li></ul><h3 id="pestana-potses" tabindex="-1"><a class="header-anchor" href="#pestana-potses"><span>Pestaña POTSes</span></a></h3><p><img src="'+i+'" alt="ISP CPE POTSes"></p><p>En función de si el equipo tiene disponibles puertos de telefonía, desde esta pestaña podremos configurarlos a través de los diferentes campos:</p><ul><li><strong>CLI</strong>: Número de teléfono que queremos asociar al CPE.</li><li><strong>Label</strong>: Nombre del teléfono o un identificador.</li><li><strong>Context</strong>: Seleccionamos el contexto de llamada de los disponibles.</li><li><strong>Language</strong>: Determina el idioma del contestador automático y de las opciones de centralita.</li><li><strong>Username y Password</strong>: Sólo serán necesarios en caso de registrar con un servidor externo de telefonía. Opcionales si registran en la PBX de Krill.</li><li><strong>DTMF</strong>: Permite elegir el DTMF del teléfono.</li><li><strong>PBX Ext</strong>: Marcándolo elegimos la extensión como parte de PBXVirtual.</li><li><strong>Voicemail Password</strong>: Establecemos la password del buzón de voz.</li></ul>',41),p=[c];function g(u,m){return l(),r("div",null,p)}const v=n(d,[["render",g],["__file","cpes.html.vue"]]),b=JSON.parse('{"path":"/es/krill2/isp-customer/cpes.html","title":"ISP Customer | CPEs","lang":"es-ES","frontmatter":{"title":"ISP Customer | CPEs","description":"Listado y gestión de CPEs.","lang":"es-ES","prev":"customers","next":"potses","tags":["krill2","módulo","isp","cpes","realm"]},"headers":[{"level":2,"title":"Creación de CPES","slug":"creacion-de-cpes","link":"#creacion-de-cpes","children":[]},{"level":2,"title":"Edición de CPES","slug":"edicion-de-cpes","link":"#edicion-de-cpes","children":[{"level":3,"title":"Pestaña Basic Data","slug":"pestana-basic-data","link":"#pestana-basic-data","children":[]},{"level":3,"title":"Pestaña Administrative Info","slug":"pestana-administrative-info","link":"#pestana-administrative-info","children":[]},{"level":3,"title":"Pestaña POTSes","slug":"pestana-potses","link":"#pestana-potses","children":[]}]}],"git":{"updatedTime":1673356512000},"filePathRelative":"es/krill2/isp-customer/cpes.md"}');export{v as comp,b as data};
