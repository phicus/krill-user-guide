import{_ as s,a as l,b as t}from"./0003-15b75061.js";import{_ as n,r as i,o as r,c as d,b as e,d as a,e as c,w as p,a as u}from"./app-cd585736.js";const m={},_=e("h1",{id:"installer-tools",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installer-tools"},[e("span",null,"Installer Tools")])],-1),h=e("p",null,"La herramienta Installer tools está pensada para facilitar las instalaciones de ONTs al técnico instalador de la red. En cuestión de segundos un técnico puede dar de alta una ONT y hacerla funcionar con un móvil o tablet.",-1),g=e("p",null,"Permite dar de alta un CPE teniendo dado de alta previamente el Customer; usando la geolocalización del móvil con el que se da el alta y escogiendo el SN de la lista de ONUs pendientes.",-1),f=e("p",null,[e("img",{src:s,alt:"ISP Customer Dashboard"})],-1),v=u('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Podremos introducir el serial number de 3 maneras distintas:</p><ol><li>A mano introduciendo los dígitos en el campo correspondiente.</li><li>Desplegando el listado que aparece en el campo.</li><li>Pulsando en la lupa y accediendo al listado de ONUs pendientes de configurar agrupadas por OLT.</li></ol><p><img src="'+l+'" alt="ISP Customer Unconfigured ONUs"></p></div><p>Una vez solicitada, el equipo aparecerá en el panel de <strong><code>CPE Watcher</code></strong>, pendiente de recibir los datos de la cabecera: IP concedida, umbrales de transmisión, tiempo desde la provisión, etc.)</p><p align="center"><img src="'+t+'" width="400"></p><p>Estos datos permitirán saber al técnico de campo si es necesario que realice alguna actuación adicional sobre la instalación o bien tramite, desde la propia aplicación, la desprovisión del equipo actual e introducir uno nuevo desde el menú contextual de los tres puntos que aparece con cada equipo provisionado.</p>',4);function b(P,x){const o=i("RouteLink");return r(),d("div",null,[_,h,g,f,e("p",null,[a("Rellenando los 3 campos, se tramita la provisión del CPE. Más adelante se podrán ver los datos de monitorización del equipo o se le podrán modificar los datos necesarios yendo a su ficha de CPE en el "),c(o,{to:"/krill2/isp-customer/cpes.html#edicion-de-cpes"},{default:p(()=>[a("módulo Customers")]),_:1}),a(".")]),v])}const E=n(m,[["render",b],["__file","index.html.vue"]]),T=JSON.parse('{"path":"/es/krill2/installer-tools/","title":"Installer Tools","lang":"es-ES","frontmatter":{"title":"Installer Tools","description":"Herramientas del instalador.","lang":"es-ES","prev":null,"next":null,"tags":["krill2","modulo","herramienta del instalador","installer-tools"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"es/krill2/installer-tools/index.md"}');export{E as comp,T as data};
