import{_ as r,a as l,b as t,c,d,e as p,f as u,g as m,h as g,i as h,j as f,k as q,l as _,m as b,n as x,o as v,p as P,q as B,r as X,s as S,t as D,u as y}from"./0414-eb6b5c42.js";import{_ as k}from"./0204-60e5a508.js";import{_ as E,r as I,o as w,c as L,b as a,d as e,e as o,w as i,a as s}from"./app-cd585736.js";const O={},C=s('<h1 id="pbx-pbxs" tabindex="-1"><a class="header-anchor" href="#pbx-pbxs"><span>PBX | PBXs</span></a></h1><p>En la vista PBXs se muestra el listado de las centralitas virtuales agrupadas por Realm (puede haber uno o más Realms) y en él podemos hacer cambios masivos seleccionando varios a la vez.</p><p><img src="'+r+'" alt="PBX Dashboard"></p><h2 id="creacion-de-una-pbx" tabindex="-1"><a class="header-anchor" href="#creacion-de-una-pbx"><span>Creación de una PBX</span></a></h2><p>Desde esta pantalla también podemos crear PBX nuevas, pulsando sobre el botón que se encuentra en la parte superior.</p><p>Lo primero que debemos hacer es seleccionar el cliente al que vincular la PBX.</p><p align="center"><img src="'+l+'" width="500"></p><p>Se pueden dar dos casos:</p><ol><li>El cliente ya tiene una PBX configurada y solo se nos permitirá editarla. <p align="center"><img src="'+t+'" width="500"></p></li><li>El cliente no tiene ninguna PBX y se nos habilita el botón de crear una nueva PBX. <p align="center"><img src="'+c+'" width="500"></p></li></ol>',9),N={class:"custom-container tip"},z=a("p",{class:"custom-container-title"},"TIP",-1),H=s('<ul><li><strong>CLI</strong>: Identificador del cpe en la PBX.</li><li><strong>SIP Username</strong>: usuario sip de registro (sólo si es necesario).</li><li><strong>SIP Password</strong>: contraseña sip (sólo si es necesario).</li><li><strong>PBX Ext</strong>: tendremos que seleccionarla para que podamos usarla como una extensión de esa PBX.</li><li><strong>Voicemail</strong>: en los cpes que marquemos la casilla voicemail. tendremos la opción de permitir a los usuarios recibir, almacenar y gestionar mensajes de voz recibidos a dicha extensión, normalmente cuando no está disponible.</li></ul><p><img src="'+k+'" alt="ISP CPE POTSes"></p>',2),R=s('<p>Una vez que se haya creado la nueva PBX o encontrado la PBX del cliente, podemos continuar con su edición.</p><h2 id="edicion-de-una-pbx" tabindex="-1"><a class="header-anchor" href="#edicion-de-una-pbx"><span>Edición de una PBX</span></a></h2><p>En la pantalla de edición de PBX podemos encontrar diversos campos agrupados en secciones.</p><p><img src="'+d+'" alt="PBX Edition"></p><h3 id="main-configuration" tabindex="-1"><a class="header-anchor" href="#main-configuration"><span>Main configuration</span></a></h3><p>Configuración principal de la PBX</p><ul><li><strong>Ring time</strong>: indica el número de segundos que sonará cada una de las extensiones asociadas al ddi de entrada.</li><li><strong>Schedule</strong>: podremos seleccionar el horario que queremos que siga la pbx, ya sea el que viene por defecto configurado o uno que personalicemos a nuestro gusto.</li><li><strong>Language</strong>: desde este selector podremos decidir el idioma para las locuciones de la PBX.</li><li><strong>Contexts</strong>: aquí tendremos la opción de seleccionar los destinos permitidos para la pbx, como podría ser llamadas nacionales, un todo permitido o algo más restrictivo como sólo destinos móviles.</li><li><strong>Coments</strong>: aquí podemos agregar cualquier nota que nos sea útil para identificar, por ejemplo, al cliente.</li><li><strong>Holidays</strong>: desde este apartado podemos seleccionar día predefinidos o crear alguno concreto en el que la pbx se comporte como festivo.</li></ul><h3 id="incoming" tabindex="-1"><a class="header-anchor" href="#incoming"><span>Incoming</span></a></h3><p>Opciones que determinan el comportamiento de la PBX a la hora de recibir una llamada entrante.</p><p align="center"><img src="'+p+'" width="600"></p><ul><li><strong>FIX</strong>: Si completamos este campo, predominará sobre cualquier horario creado y la llamada siempre entrará aquí 24/7</li><li><strong>Within the schedule</strong>: Lo que pongamos en esta parte se cumplirá dentro de horario, por ejemplo, la recepción creada anteriormente de “Bienvenida”</li><li><strong>Holidays</strong>: aquí seleccionamos lo que queramos que haga la pbx cuando nos encontremos en horario de Vacaciones.</li><li><strong>Outside the schedule</strong>: aquí seleccionamos la acción que queramos que realice la PBX cuando no estemos dentro del horario principal de la PBX.</li></ul><h3 id="outgoing" tabindex="-1"><a class="header-anchor" href="#outgoing"><span>Outgoing</span></a></h3><p>En la opción Outgoing podemos asignar el número que queremos presentar al exterior por defecto.</p><p align="center"><img src="'+u+'" width="600"></p><h3 id="ddis" tabindex="-1"><a class="header-anchor" href="#ddis"><span>DDIs</span></a></h3><p>Los DDI permiten asignar una numeración fija a una extensión o a un grupo de ellas.</p><p><img src="'+m+'" alt="PBX DDIs"></p><p>Se añaden los números de teléfono que se quieren tener en la PBX y se marcn las extensiones asociadas para que suenen en cada caso.</p><p align="center"><img src="'+g+'" width="500"></p><p>Una vez creados los DDIs se puede asociar a las extensiones un número de salida para que cada DDI se presente al exterior.</p><p align="center"><img src="'+h+'" width="600"></p><h3 id="groups" tabindex="-1"><a class="header-anchor" href="#groups"><span>Groups</span></a></h3><p>En este apartado, se pueden configurar grupos de extensiones, con funcionalidades concretas para cada uno.</p><p><img src="'+f+'" alt="PBX Groups"></p><p>Al pulsar sobre añadir grupo se abrirá un cuadro de diálogo.</p><p align="center"><img src="'+q+'" width="500"></p><p>Se deberán rellenar los siguientes campos:</p><ul><li><strong>CLI</strong>: aquí se indicará el identificador del grupo (la extensión que tendrá el grupo).</li><li><strong>Name</strong>: nombre del grupo</li><li><strong>Extensions</strong>: en este apartado se incluirán la extensión (o extensiones) que se quiera que pertenezcan al grupo, las cuales sonarán cuando se llame al cli del grupo.</li><li><strong>Fail</strong>: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.</li><li><strong>Out of Schedule</strong>: Dónde saltará la llamada fuera del horario seleccionado.</li><li><strong>Schedule</strong>: Horario de atención del grupo de extensiones.</li><li><strong>Holiday</strong>: Determina si el grupo atiende llamadas en días festivos.</li></ul><h3 id="queues" tabindex="-1"><a class="header-anchor" href="#queues"><span>Queues</span></a></h3><p>Las colas son parecidas a los grupos, pero permite encolar llamadas entrantes e ir distribuyéndolas entre las extensiones que se vayan quedando libres.</p><p><img src="'+_+'" alt="PBX Groups"></p><p>La creación de una cola se hace de la misma forma que los grupos, pero hay más opciones disponibles, agrupadas en <code>General</code>, <code>Options</code> y <code>Announce</code>.</p><h4 id="general" tabindex="-1"><a class="header-anchor" href="#general"><span>General</span></a></h4><p>Los campos a rellenar son los mismos que para un grupo:</p><p align="center"><img src="'+b+'" width="500"></p><ul><li><strong>CLI</strong>: aquí se indicará el identificador del grupo (la extensión que tendrá el grupo).</li><li><strong>Name</strong>: nombre del grupo</li><li><strong>Extensions</strong>: en este apartado se incluirán la extensión (o extensiones) que se quiera que pertenezcan al grupo, las cuales sonarán cuando se llame al cli del grupo.</li><li><strong>Fail</strong>: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.</li><li><strong>Out of Schedule</strong>: Dónde saltará la llamada fuera del horario seleccionado.</li><li><strong>Schedule</strong>: Horario de atención del grupo de extensiones.</li><li><strong>Holiday</strong>: Determina si el grupo atiende llamadas en días festivos.</li></ul><h4 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h4><p align="center"><img src="'+x+'" width="500"></p><p>Se pueden modificar los siguientes campos:</p><ul><li><strong>Wrap uptime</strong>: tiempo de pausa entre llamadas para la misma extensión (agentes) de la cola</li><li><strong>Max users</strong>: límite de usuarios que se permiten en la cola</li><li><strong>User timeout</strong>: tiempo máximo hasta que la llamada sea considerada fallida</li><li><strong>Agent timeout</strong>: tiempo de salto entre las diferentes extensiones (agentes) de la cola</li></ul><h4 id="announce" tabindex="-1"><a class="header-anchor" href="#announce"><span>Announce</span></a></h4><p>Las opciones disponibles son:</p><p align="center"><img src="'+v+'" width="500"></p><ul><li><strong>Announce</strong>: tipo de reporte de situación de espera.</li><li><strong>Announce frequency</strong>: frecuencia de reporte de situación.</li><li><strong>Record</strong>: locución o música pregrabada a reproducir durante la espera.</li><li><strong>Periodic announce frequency</strong>: frecuencia de la locución</li></ul><h3 id="recepcionists" tabindex="-1"><a class="header-anchor" href="#recepcionists"><span>Recepcionists</span></a></h3><p>Los recepcionistas son locuciones que se reproducen con unas condiciones determinadas, por ejemplo, dentro o fuera de un horario. Normalmente se usan para dar la bienvenida a la llamada entrante y permiten anunciar las opciones a marcar para que la PBX desvíe la llamada a una extensión u otra.</p><p><img src="'+P+'" alt="PBX Recepcionists"></p><p>Al crear un nuevo recepcionista, deberemos configurar los siguientes campos:</p><p align="center"><img src="'+B+'" width="500"></p><ul><li><strong>Name</strong>: Nombre identificativo.</li><li><strong>Record</strong>: Posición de la grabación a reproducir.</li><li><strong>Schedule</strong>: Horario en el que saltará el recepcionista y se reproducirá la locución.</li><li><strong>Holidays</strong>: Determina si la recepcionista atenderá llamadas en días festivos.</li><li><strong>Fail</strong>: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.</li><li><strong>Out of Schedule</strong>: Dónde saltará la llamada fuera del horario seleccionado.</li></ul><p>Al desplegar las demás opciones, podremos especificar el número que identificará cada uno de los desvíos:</p><p align="center"><img src="'+X+'" width="500"></p><p>Se podrán dar de alta tantas marcaciones como se quieran, pudiendo especificar para cada una de ellas:</p><ul><li><strong>Name</strong>: Nombre identificativo.</li><li><strong>Dial</strong>: Número a marcar.</li><li><strong>Jump</strong>: Grupo de salto para el desvío, pudiendo ser estos: otras recepcionistas, grupos, colas, o incluso DDIs directamente.</li></ul><h3 id="schedules" tabindex="-1"><a class="header-anchor" href="#schedules"><span>Schedules</span></a></h3><p>Desde esta sección se podrán crear y modificar los horarios de recepción de llamadas.</p><p><img src="'+S+'" alt="PBX Recepcionists"></p><p>Si por ejemplo queremos crear un horario especial para vacaciones, pulsaremos sobre el botón de añadir horario:</p><p align="center"><img src="'+D+'" width="500"></p><p>Una vez especificado el nombre identificativo que se le quiera dar, pulsamos sobre añadir para terminar de editar los elementos que compondrán el horario:</p><p align="center"><img src="'+y+'" width="500"></p><ul><li><strong>Active</strong>: Determina si esa franja está activa o no</li><li><strong>Week day from</strong>: Desde qué día de la semana comienza el horario.</li><li><strong>Week day to</strong>: Que día finaliza el horario (puede ser el mismo día que el de inicio).</li><li><strong>Morn. from</strong>: Hora de inicio por la mañana.</li><li><strong>Morn. to</strong>: Hora de fin por la mañana.</li><li><strong>Ev. from</strong>: Hora de inicio por la tarde.</li><li><strong>Ev. to</strong>: Hora de fin por la tarde.</li></ul>',62);function A(j,G){const n=I("RouteLink");return w(),L("div",null,[C,a("div",N,[z,a("p",null,[e("Si el cliente seleccionado no tiene POTSes asociados para las extensiones, podemos crearlos siempre previamente desde el módulo de ISP / Customer, "),o(n,{to:"/es/krill2/isp-customer/cpes.html#creacion-de-cpes"},{default:i(()=>[e("creación de CPEs")]),_:1}),e(", en el apartado "),o(n,{to:"/es/krill2/isp-customer/cpes.html#pestana-potses"},{default:i(()=>[e("pestaña POTSes")]),_:1}),e(", rellenando los campos necesarios:")]),H]),R])}const U=E(O,[["render",A],["__file","pbxs.html.vue"]]),F=JSON.parse('{"path":"/es/krill2/pbx/pbxs.html","title":"PBX | PBXs","lang":"es-ES","frontmatter":{"title":"PBX | PBXs","description":"Gestión de PBX.","lang":"es-ES","prev":"/es/krill2/pbx/","next":"cdrs","tags":["krill2","módulo","pbx"]},"headers":[{"level":2,"title":"Creación de una PBX","slug":"creacion-de-una-pbx","link":"#creacion-de-una-pbx","children":[]},{"level":2,"title":"Edición de una PBX","slug":"edicion-de-una-pbx","link":"#edicion-de-una-pbx","children":[{"level":3,"title":"Main configuration","slug":"main-configuration","link":"#main-configuration","children":[]},{"level":3,"title":"Incoming","slug":"incoming","link":"#incoming","children":[]},{"level":3,"title":"Outgoing","slug":"outgoing","link":"#outgoing","children":[]},{"level":3,"title":"DDIs","slug":"ddis","link":"#ddis","children":[]},{"level":3,"title":"Groups","slug":"groups","link":"#groups","children":[]},{"level":3,"title":"Queues","slug":"queues","link":"#queues","children":[]},{"level":3,"title":"Recepcionists","slug":"recepcionists","link":"#recepcionists","children":[]},{"level":3,"title":"Schedules","slug":"schedules","link":"#schedules","children":[]}]}],"git":{"updatedTime":1673517488000},"filePathRelative":"es/krill2/pbx/pbxs.md"}');export{U as comp,F as data};
