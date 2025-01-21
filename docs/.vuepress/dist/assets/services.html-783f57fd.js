import{_ as e,a as s,b as a,c as o,d as i,e as r,f as t}from"./0107-4a454c95.js";import{_ as n,o as l,c,a as d}from"./app-cd585736.js";const p={},u=d('<h1 id="rubik-services" tabindex="-1"><a class="header-anchor" href="#rubik-services"><span>Rubik | Services</span></a></h1><p>En esta vista tenemos una lista detallada de los últimos servicios, ordenados por defecto por la última modificación.</p><p><img src="'+e+'" alt="Rubik Services"></p><p>Los campos que se muestran son:</p><ul><li><strong>ID</strong>: ID interno del servicio</li><li><strong>Administrative ID</strong>: ID del operador mayorista</li><li><strong>Service Profile</strong>: Perfil de servicio</li><li><strong>Owner</strong>: Operador mayorista que da soporte al servicio</li><li><strong>State</strong>: Estado actual en el que se encuentra</li><li><strong>Planned Installation</strong>: Fecha planificada de instalación</li><li><strong>Created at</strong>: Fecha de creación</li><li><strong>Last Update.</strong>: Fecha de última modificación</li></ul><p>Desde la barra superior podemos filtrar por owner y por state. Tenemos la opción de exportar los servicios que seleccionemos a un fichero.</p><h2 id="creacion-de-un-servicio" tabindex="-1"><a class="header-anchor" href="#creacion-de-un-servicio"><span>Creación de un servicio</span></a></h2><p>Pulsando sobre el botón <code>Add new service</code> podemos crear un nuevo servicio. Para ello será necesario rellenar los datos de la dirección de alta del servicio así como los datos del cliente siguiendo los pasos que el formulario irá presentando. Desde esta pantalla también podemos crear un Trouble Ticket si encontramos algún problema con el proceso de alta.</p><p>El proceso de alta es guiado, siguiendo los pasos de <a href="#get-coverage">Get coverage</a>, <a href="#customer-data">Customer Data</a> y <a href="#summary">Summary</a>. Una vez cumplimentados los datos se creará el servicio y pasará los diferentes estados que el owner tenga en su procedimiento.</p><h3 id="get-coverage" tabindex="-1"><a class="header-anchor" href="#get-coverage"><span>Get coverage</span></a></h3><p>Debemos rellenar los campos para identificar el lugar físico de la instalación, los datos son ofrecidos por los operadores mayoristas y han de ser coincidencias exactas.</p><p><img src="'+s+'" alt="Rubik Service creation get coverage"></p><p>Los campos a rellenar son:</p><ul><li><strong>Postal Code</strong>: Código postal</li><li><strong>Locality</strong>: Localidad o barrio</li><li><strong>City</strong>: Ciudad</li><li><strong>State / Province</strong>: Estado o provincia</li><li><strong>Street Type</strong>: Tipo de calle</li><li><strong>Street Name</strong>: Nombre de la calle</li><li><strong>Street Number</strong>: Número de la calle</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Los campos desplegables se completarán con las opciones disponibles según se vayan rellenando los datos, autoseleccionadose los valores cuando solo haya uno disponible.</p></div><p>Una vez confirmada la dirección de la instalación, se presentará una selección de <code>subdirecciones</code>, es decir, portales, escaleras, pisos y puertas en las que comprobar la cobertura.</p><p>Una vez seleccionados completamente los datos de la dirección, al pulsar sobre la subdirección, se confirmará la cobertura (o no) para la misma.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>En caso de que no haya cobertura no se podrrá continuar con el proceso, pudiendo si fuera necesario, crear una incidencia.</p></div><h3 id="customer-data" tabindex="-1"><a class="header-anchor" href="#customer-data"><span>Customer data</span></a></h3><p>Si hay cobertura para la dirección seleccionada, se deberá rellenar los datos del cliente a quién se va asociar el servicio.</p><p><img src="'+a+'" alt="Rubik Service creation customer data"></p><p>Los campos necesarios son:</p><ul><li><strong>Owner</strong>: Operador mayorista (campo de solo lectura).</li><li><strong>Service Profile</strong>: Perfil de servicio.</li><li><strong>Address UID</strong>: Identificador único de la dirección (campo de solo lectura).</li><li><strong>Customer</strong>: Nombre del cliente</li><li><strong>External ID</strong>: ID externo del cliente, por ejemplo extraído del CRM.</li><li><strong>Phone</strong>: Teléfono de contacto</li><li><strong>Comments</strong>: Comentarios opcionales.</li><li><strong>Remote ID</strong>: ID remoto para el servicio, en función de las especificaciones del operador mayorista. Puede ser el serial number del equipo o cualquier otro dato.</li><li><strong>pPAI</strong>: Punto de interconexión facilitado por el operador mayorista en base a sus especificaciones.</li></ul><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h3><p>Resumen de los datos de alta de servicio donde se podrá comprobar que todos los datos introducidos son válidos y realizar el alta del servicio.</p><h2 id="edicion-de-un-servicio" tabindex="-1"><a class="header-anchor" href="#edicion-de-un-servicio"><span>Edición de un servicio</span></a></h2><p>Una vez terminada el alta del servicio se crea una ficha de servicio.</p><p>En ella tenemos el estado del servicio y las opciones de comunicación directa y con referencia a este servicio con el owner.</p><p><img src="'+o+'" alt="Rubik Service edition"></p><p>Los estados por los que puede pasar un servicio son:</p><ul><li><strong>Reserved</strong>: Alta reservada, pendiente de confirmar.</li><li><strong>Ordering</strong>: Estado temporal entre la reserva y el proceso de confirmación.</li><li><strong>Ordered</strong>: Alta ordenada, pendiente de la instalación.</li><li><strong>Completed</strong>: Alta completada, servicio activo.</li><li><strong>Canceled</strong>: Servicio cancelado durante el proceso de tramitación.</li><li><strong>Down</strong>: Servicio dado de baja una vez completado.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>El cambio entre estados solamente permite pasar a los disponibles en cada momento de forma automática. Por ejemplo, no se puede solicitar una baja de un servicio que aun no ha sido completado.</p></div><p>Adicionalmente se nos ofrece el resumen con los datos del servicio en la misma ficha.</p><p>Desde esta pantalla también se puede asociar un Trouble ticket pulsando en el botón situado en la barra superior.</p><h3 id="events-history" tabindex="-1"><a class="header-anchor" href="#events-history"><span>Events history</span></a></h3><p>Desde las pestañas superiores de esta vista podemos acceder al histórico de eventos del servicio, es decir por los diferentes estados por los que ha ido pasando, pudiendo ver los datos devueltos en cada cambio.</p><p><img src="'+i+'" alt="Rubik Service event history"></p><h3 id="trouble-tickets" tabindex="-1"><a class="header-anchor" href="#trouble-tickets"><span>Trouble Tickets</span></a></h3><p>En las pestañas superiores se muestra un listado con los Trouble tickets vinculados al servicio en curso, pudiendo ver un pequeño resumen del estado actual o bien acceder al detalle completo pulsando sobre ellos.</p><p><img src="'+r+'" alt="Rubik Service trouble tickets"></p><h3 id="test-diagnostics" tabindex="-1"><a class="header-anchor" href="#test-diagnostics"><span>Test &amp; Diagnostics</span></a></h3><p>Si el operador mayorista lo soporta, el servicio mostrará en la parte superior una pestaña para acceder a los test y diagnósticos del servicio en curso.</p><p><img src="'+t+'" alt="Rubik Service Test and diagnostics"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Los <strong>diagnósticos</strong> son pasivos, es decir, simplemente consultan información relacionada con el servicio, como puede ser un test de configuración o la señal óptica.</p><p>Las <strong>acciones</strong> se realizan sobre el equipo del cliente y pueden por ejemplo resetear la ONT. Para ello debemos confirmar la acción pulsando sobre el botón correspondiente.</p></div>',44),m=[u];function v(g,h){return l(),c("div",null,m)}const k=n(p,[["render",v],["__file","services.html.vue"]]),y=JSON.parse('{"path":"/es/krill2/rubik/services.html","title":"Rubik | Services","lang":"es-ES","frontmatter":{"title":"Rubik | Services","description":"Herramienta de gestión de redes mutualizadas con terceros.","lang":"es-ES","prev":"/es/krill2/rubik/","next":"trouble-tickets","tags":["krill2","módulo","rubik","mutualización","mutualizado","bitstream","servicios"]},"headers":[{"level":2,"title":"Creación de un servicio","slug":"creacion-de-un-servicio","link":"#creacion-de-un-servicio","children":[{"level":3,"title":"Get coverage","slug":"get-coverage","link":"#get-coverage","children":[]},{"level":3,"title":"Customer data","slug":"customer-data","link":"#customer-data","children":[]},{"level":3,"title":"Summary","slug":"summary","link":"#summary","children":[]}]},{"level":2,"title":"Edición de un servicio","slug":"edicion-de-un-servicio","link":"#edicion-de-un-servicio","children":[{"level":3,"title":"Events history","slug":"events-history","link":"#events-history","children":[]},{"level":3,"title":"Trouble Tickets","slug":"trouble-tickets","link":"#trouble-tickets","children":[]},{"level":3,"title":"Test & Diagnostics","slug":"test-diagnostics","link":"#test-diagnostics","children":[]}]}],"git":{"updatedTime":1690298084000},"filePathRelative":"es/krill2/rubik/services.md"}');export{k as comp,y as data};
