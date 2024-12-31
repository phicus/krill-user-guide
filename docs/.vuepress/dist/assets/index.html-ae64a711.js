import{_ as r,a as i}from"./0002-1d74e180.js";import{_ as n,L as l,n as c,p as d,Q as e,M as o,T as a,s as t}from"./framework-e30e40a0.js";const u={},p=e("h1",{id:"rubik",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rubik","aria-hidden":"true"},"#"),t(" Rubik")],-1),m=e("p",null,"Módulo en el que se gestiona todo lo relacionado con Bitstream en Krill.",-1),_=e("p",null,"Consta de dos submenús:",-1),h=e("p",null,"En la pantalla principal hay un resumen de los últimos servicios y trouble tickets generados. Ambos apartados permiten ordenar y filtrar por los diferentes encabezados. También está disponible la herramienta para filtrar por owner y por state del servicio y ticket.",-1),b=e("p",null,"Los campos de servicio son: ID, Customer, Service Profile, Owner, State, Planned Installation, Created at y Last Update.",-1),k=e("p",null,[e("img",{src:r,alt:"ISP Customer Dashboard"})],-1),f=e("p",null,"Los campos de trouble ticket son: ID, Customer, Address, Owner, State, Priority, Symptom, Created at y Last Update.",-1),v=e("p",null,[e("img",{src:i,alt:"ISP Customer Dashboard"})],-1),y=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Desde la barra superior de cada caja resumen se puede crear un nuevo servicio o un trouble ticket pinchando en los respectivos botones.")],-1);function C(x,S){const s=l("RouterLink");return c(),d("div",null,[p,m,_,e("ul",null,[e("li",null,[o(s,{to:"/es/krill2/rubik/services.html"},{default:a(()=>[t("Services")]),_:1}),t(": Servicios tramitados con los operadores mayoristas.")]),e("li",null,[o(s,{to:"/es/krill2/rubik/trouble-tickets.html"},{default:a(()=>[t("Trouble Tickets")]),_:1}),t(": Gestión de incidencias para aquellos mayoristas que lo permitan.")])]),h,b,k,f,v,y])}const P=n(u,[["render",C],["__file","index.html.vue"]]);export{P as default};