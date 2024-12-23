import{_ as e,a as s,b as t}from"./0104-b81841ea.js";import{_ as o,o as a,c as r,a as l}from"./app-0bbc18d2.js";const i={},n=l('<h1 id="isp-customer-clientes" tabindex="-1"><a class="header-anchor" href="#isp-customer-clientes"><span>ISP Customer | Clientes</span></a></h1><p>Desde la vista principal de Customers se muestra el listado de éstos agrupados por Realm (puede haber uno o más Realms) y en él podemos hacer cambios masivos seleccionando varios a la vez.</p><p><img src="'+e+'" alt="ISP Customer Dashboard"></p><p>El customer es la persona física o entidad de la que colgará el CPE. Para dar de alta un CPE tiene que haber un customer al que asociarlo. Típicamente los clientes de la ISP.</p><p><img src="'+s+'" alt="ISP Customer Edition"></p><p>Los campos disponibles para dar de alta un customer son:</p><ul><li><strong>Name</strong>: nombre del cliente.</li><li><strong>Surname</strong>: apellidos del cliente.</li><li><strong>External ID</strong>: identificador externo del cliente, por ejemplo DNI/NIE o ID del CRM.</li><li><strong>Address</strong>: la dirección del cliente (no la de los futuros CPEs).</li><li><strong>City</strong>: aquí aparecerán las localidades y barrios que tengamos definidos (sólo es seleccionar).</li><li><strong>Country</strong>: el país del cliente.</li><li><strong>Comment</strong>: algo que nos ayude a la hora de contactar con el cliente ¿un número de teléfono?</li></ul><p>Desde un customer ya creado podemos acceder a sus CPEs directamente pulsando sobre la pestaña CPEs</p><p><img src="'+t+'" alt="ISP Customer CPEs"></p>',9),c=[n];function d(m,p){return a(),r("div",null,c)}const _=o(i,[["render",d],["__file","customers.html.vue"]]),C=JSON.parse('{"path":"/es/krill2/isp-customer/customers.html","title":"ISP Customer | Clientes","lang":"es-ES","frontmatter":{"title":"ISP Customer | Clientes","description":"Listado y gestión de clientes.","lang":"es-ES","prev":"/es/krill2/isp-customer/","next":"cpes","tags":["krill2","módulo","isp","clientes","realm"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"es/krill2/isp-customer/customers.md"}');export{_ as comp,C as data};
