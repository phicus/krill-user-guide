---
title: Novedades
description: Lista de cambios y novedades de Krill 2
lang: es-ES
navbar: false
sidebar: auto
sidebarDepth: 2
prev: null
next: null
tags:
- krill2
- cambios
- changelog
---

# Novedades

## Octubre 2025

### Krill
 * Ampliado el campo external_id para las entidades CPE y CUSTOMER a 256.
 * Se ha integrado el API V2 de Adamo en Rubik.
 * Nueva funcionalidad de búsqueda por DDI asociados a PBX virtuales en la vista CDR.
 * Se realizan los cambios necesarios para monitorizar vía TR069 el modelo AG12 de Mercusys
 * Integración de las OLTs de la familia DS-P7000 de TP-Link.
 * Optimización de recursos en la monitorización de reds WiFi/WiMAX.
 * Mejoras en la monitoización del core: detección de flancos parametrizable, modelos antiguos de Ubiquiti ahora se monitorizan de forma completa. Y gastando menos recursos del servidor.
 * Monitorización mejorada de los Punto a Punto Ubiquiti AirMax.
 * Mejoras en krill-docsis: monitorización con menos recursos. Edición por UI de las frecuencias de los retornos. Herramientas mejoradas del CLI.
 * Se ha añadido el campo billing_profile en el API de POTS.
 * Se han recuperado las alarmas de servicios críticos como el estado de ocupación del disco.


**Corrección de errores**:
 * Krill no mostraba correctamente la dirección IPv6 asignada en equipos DOCSIS con KEA.

### Krill-UI

**Nuevas funcionalidades**:
 * Se ha añadido en matrix la posibilidad de realizar una búsqueda inversa por ciudad.
 * Se han hecho mejoras en la ficha del CPE para hacer más accesibles el address_profile y varios POTSES
 * Mejorada la fiabilidad de la monitorización del servicio de voz en la ficha del CPE.


**Corrección de errores**:
 * Arreglado un error por el cual la vista de hostevents podía no cargar datos en ciertos casos
 * Arreglado un error por el cual los móviles con pantallas pequeñas no podían acceder al botón de logout
 * Arreglado un error por el cual la exportación a CSV de Matrix no exportaba las IPs de los equipos
 * Arreglados diversos errores que podían evitar el acceso a la aplicación de NAPs
 * Arreglado un error por el que el contenedor de gráficas de la vista de CPE podía cortarse verticalmente en pantallas grandes
 * Arreglado un error por el cual el botón de login de la interfaz podía deshabilitarse bajo circunstancias poco comunes
 * Arreglado un error por el cual la tabla de hostevents podía mostrar fechas incorrectas para determinados eventos
 * Corregido un error en la gestión de CPEs bitstream sin perfil de velocidad.
 * Arreglado un error por el cual el redondeo de dos o más decimales no se hacía correctamente

## Septiembre 2025

### Krill

**Nuevas funcionalidades**:

 * Se ha añadido la opción de reprovisionar ONUs desde el ISP-CLI.
 * Se ha implementado la reserva de IPs fijas para clientes en estado de impago, evitando que estas direcciones se liberen al aplicar el bloqueo.
 * Se permite no asignar velocidad a CPEs de bitstream.
 * Se permite cambiar la frecuencia de los Upstreams en redes DOCSIS desde la UI.
 * Se ha añadido soporte para la monitorización de las WANs del modelo TP-Link XX530v.


**Corrección de errores**:

 * Se han corregido diversos fallos en la generación del enlace de URL para Proxy V2 e IPs de gestión.
 * Se ha corregido el problema de pérdida de visibilidad de la IP en la web para equipos Wimax.
 * Se ha optimizado KEA para mejorar la respuesta del DHCP ante un corte eléctrico en una determinada zona.
 * Se ha corregido un bug de ONT Calix que permitía acceso a internet desactivado cuando tenían el check de internet desactivado.
 * Se ha corregido un error 401 al iniciar sesión en Krill.
 * Se ha corregido un problema de decodificación de algunos traps en OLTs Huawei.
 * Se ha corregido un problema con la monitorización de Asterisk en servidores con Ubuntu 24.
 * Se ha solucionado un problema de visualización de CDRs en el módulo de Monitoring.

### Krill-UI

**Nuevas funcionalidades**:

 * Se ha añadido la opción de seleccionar un NAP de GIS en la APP Installer-Tools.
 * Se ha corregido un error por el cual se podían mostrar SSIDs en una frecuencia equivocada en determinados modelos y configuraciones (por ejemplo, un SSID que actuaba en 2.4GHz podía aparecer en la banda de 5GHz también).

**Corrección de errores**:

 * Se ha corregido un bug por el cual la pantalla de login podía arrojar errores mal formateados.
 * Se han realizado varias optimizaciones a la ficha de datos administrativos del CPE para evitar ralentizaciones durante la edición.
 * Se ha corregido un error por el cual los móviles con iOS no podían acceder al botón de logout.

## Agosto 2025

### Krill

**Nuevas funcionalidades**:

 * Se han parametrizado los diagnósticos de Traceroute, Download, Upload y WiFi Neighboring para el modelo TP-Link Archer C80.
 * Se ha añadido la opción de modificar el ancho de banda vía API para modelos que usen TR181.
 * Mejoras en la interfaz de monitorización de CTOs, incluyendo la visualización del nombre junto al ID al buscar NAPs.
 * Se ha implementado un cambio de la UI para adaptar el proxy2 que evita pasar la IP directamente.
 * Se ha revisado swagger para mostrar JSON en /isp/cpes.
 * Se han refactorizado los links de CPE para ser compatibles con proxy2, manteniendo la compatibilidad con proxy1.
 * Se ha implementado la distancia entre ONT y OLT en OLTs ZTE.
 * Arreglado un error que evitaba buscar por regtag y regstate a la vez en la vista Matrix.
 * Añadido el campo external_id del customer a la vista Matrix.
 * Se ha añadido la opción de consultar y desbanear las IPs baneadas en el API mediante el ISPCLI.

**Corrección de errores**:

 * Se ha arreglado un error que causaba consumo excesivo del disco.
 * Se ha añadido la posibilidad de ordenar por columnas de datos administrativos en la vista Matrix.
 * Se ha abordado el fallo al realizar un reconfig por ispcli de ispadmin en algunos casos concretos.
 * Se ha corregido un fallo al realizar un reconfig por ispcli en los Krills nuevos. 
 * Se ha corregido un problema con Radius y Netelastic por el cual no se devolvía el atributo Framed-Pool correcto cuando el estado era impagado.  
 * Se ha resuelto un fallo que impedía realizar un reconfig por ISPCLI.


## Junio 2025

### Krill

**Nuevas funcionalidades**:

 * Se añadió la posibilidad de establecer la URL del ACS en OLTs ZTE vía OMCI para equipos de diferentes fabricantes.
<<<<<<< HEAD
 * Se ha agregado una caché para reducir la repetición de la misma petición al API KEA.
 * Se ha actualizado la criticidad de las alarmas para que los canales de Slack sean menos ruidosos.
=======
 * Se añadió una caché para reducir las solicitudes repetidas a la API de KEA.
 * Se actualizó la criticidad de las alarmas para hacer que los canales de Slack sean menos ruidosos.
>>>>>>> release/1.0.122

**Corrección de errores**:

 * Solucionado error que impedía mostrar la IP en web para equipos WIMAX bajo ciertas condiciones.
<<<<<<< HEAD
 * Se resolvieron problemas de SSL relacionados con certificados.
 * Se ha corregido un problema donde las IPs privadas de equipos Wimax por DHCP no siempre se visualizaban en la ficha de monitorización.
 * Se ha corregido un problema donde se perdía la visibilidad de la IP en la web que conectan por PPPoE equipos Wimax.

=======
 * Se resolvieron problemas de SSL relacionados con certificados
 * Se corrigió un problema por el que las IP privadas de los dispositivos Wimax asignadas vía DHCP no siempre se mostraban en la vista de monitoreo.
 * Se corrigió un problema por el que la visibilidad de la IP se perdía en la interfaz web para los dispositivos Wimax conectados mediante PPPoE.
>>>>>>> release/1.0.122

### Krill-UI

**Nuevas funcionalidades**:

 * Mejorada la vista POTs, solo mostrará CPEs que tenga un CLI asociado.
<<<<<<< HEAD
 * Arreglado un error en la vista de opciones de radio que impedía reactivar un SSID desactivado.
 * Se ha corregido un error que impedía que algunos traps de OLTs Huawei se procesaran de forma correcta.
=======
 * Arreglado un error en la vista de opciones de radio que impedía reactivar un SSID desactivado. 
 * Se corrigió un problema que impedía que algunas traps de Huawei OLT se procesaran correctamente.
>>>>>>> release/1.0.122

## Mayo 2025

### Krill

**Nuevas funcionalidades**:

 * Se añade la posibilidad de filtrar por OLT las ONUs pendientes de provisión.
 * Optimizamos la monitorización del modelo Huawei HG8247T.
 * Se optimiza la tarea de provisión de los CPEs a los que se se habilita / deshabilita el acceso a internet (OLTs Huawei y ZTE).
 * Se ha añadido a nivel de POTs en el API de ISP el campo billing_profile.
 * API de GPON disponible en Swagger.
 * Monitorización de Influx añadida.
 * Nuevas gráficas de ancho de banda en puertos PON para OLTs Calix.

**Corrección de errores**:

 * Solventados varios errores menores.
 * Solventado problema de servicio en API de Krill ante un reinicio de RabbitMQ.
 * Corrección en entrega de IP fija en escenarios bitstream.
 * Estado correcto de telefonía para modelo F680.


### Krill-UI

**Nuevas funcionalidades**:

 * Modificada la vista Matrix para que enseñe los atributos con el mismo nombre apilados en la vista de servicios.
 * Optimizada la carga de datos en la ficha, reduciendo el tiempo de carga.
 * Soporte TR181 para interfaces ethernet tipo Stack.
 * Diagnóstico de wifi-neighboring añadido para el modelo ZTE F670L.

**Corrección de errores**:

 * Arreglado un error visual relacionado al refresco de las gráficas de los CPEs cuando se cambiaban los filtros.
 * Corregida la falta de datos en el timeline de la ficha.
 * Corregido el error por el cuál no se mostraba traceroute test.
 * Ficha del CPE: corrección en la monitorización de telefonía en algunos modelos.
 * Monitorización correcta de telefonía en modelos con TR181.

## Abril 2025

### Krill

**Nuevas funcionalidades**:

 * Se ha eliminado Swagger 2.0 y en su lugar se han integrado Swagger UI y Redoc, ambos compatibles con OpenAPI 3.0.
 * Se ha mejorado el tiempo de respuesta ante una caída de sesión BGP en equipos de core

### Krill-UI

**Nuevas funcionalidades**:

 * Añadida la función de búsqueda en la aplicación Admin (NAPs) cuando sea posible.
 * Se ha habilitado la posibilidad de modificar las coordenadas directamente a la hora de crear un NAP
 * Se visualizará el número exacto de sesiones en la gráfica de active-sessions

**Corrección de errores**:

 * Errores corregidos en la ficha de un CPE.
 * Revisada la obtención de los cables ethernet de la ficha para arreglar un error con el modelo AX1GPV.
 * Corregido el error que no se pudiera copiar una IP en ficha CPE.

## Marzo 2025

### Krill

**Nuevas funcionalidades**:

 * Se optimizan las acciones a realizar sobre la provisión de un CPE tras su modificación.
 * Integración del modelo Fiberhome HG6143D en el sistema.
 * Preparación del API para soportar OpenAPI 3.0.
 * En ZTE, añadimos el tag de VLAN y priority en la configuración de TR-069 para mejorar la compatibilidad con modelos de ONU de distintos fabricantes.
 * Se han añadido varias mejoras menores en el visor de leases.
 * Soporte añadido para la monitorización de los modelos Fiberhome HG6243C / HG6244C.
 * Soporte añadido para la monitorización de los modelos Nokia G-0425G-C / G-1425G-B.
 * Añadido para la provisión en ZTE el tag de vlan y priority en la configuración de TR069, para compatibilizarla con modelos de ONU de distinto fabricatente.
 * Añadida la posibilidad de usar el modo "tag" en el mapeo de puertos ethernet para la provisión con VSol.

**Corrección de errores**:

 * Solucionado problema en la monitorización de la OLT ZTE C600 que hacía que no se mostraran los PONs.
 * Deshabilitado el mensaje de error que indicaba la falta de conexión con el servidor ACS para modelos que no cuentan con TR-069.

### Krill-UI

**Nuevas funcionalidades**:

 * Mejorada la obtención de los datos de los puertos Ethernet.
 * Optimizada la ficha de CPE, disminuyendo el tiempo de carga y el consumo de memoria.
 * Mejorado el visor de leases DHCP:
    - En IPv4 el tiempo de concesión se mostrará en días u horas.
    - En IPv6 se ha reducido el número de campos de la tabla. 

**Corrección de errores**:

 * Solventados problemas en el test de velocidad en CPE.
 * Deshabilitado el mensaje de error que indica que no hay conexión con el servidor ACS para modelos que no tienen TR069.
 * Corregido un bug por el que se mostraba la validación del número de serie al crear un CPE sin número de serie.

## Febrero 2025

### Krill

**Nuevas funcionalidades**:
 
 * Provisión del ACS (TR069) en las OLTs ZTE.
 * Mejoras en la provisión de WANs de ZTE.
 * Monitorización de los niveles ópticos del puerto CATV en OLTs ZTE.
 * En OLTs Huawei, añadida a la monitorización real-time de los CPEs el estado de sus puertos Ethernet, mostrando si hay equipos conectados cuando no soportan TR069 (típicamente cualquier ONT bridge).
 * Mejorada la obtención de datos en routers neutros TP-Link.
 * Se ha añadido la posibilidad de admitir caracteres especiales en el DSN de un CPE.
 * Se ha integrado la monitorización de la estación base Albentia BS850.
 * Se ha añadido graficación y chequeo de umbrales en CPU y temperatura de las tarjetas de la OLT ZTE C600.
 * Añadida la capacidad de gestionar desvíos de llamada en Asterisk desde el CLI.
 * Restaurado el chequeo de modelo de cablemodem para redes DOCSIS.

**Corrección de errores**:

 * Corregido un error por el cual no se mostraban las sesiones de CWMP en TR069.
 * Solucionado un error con los tests de velocidad en determinadas configuraciones.
 * Solventado bug que hacía que las copias de seguridad en olt VSOL y TELEVES no se realizaran cada 24h.

### Krill-UI

**Nuevas funcionalidades**:

 * Mejorada la obtención de puertos Ethernet en la ficha del CPE.
 * Añadida a la ficha del CPE monitorización en tiempo real del estado de la telefonía para las fichas de "voice1" y etc.

**Corrección de errores**:

 * Arreglado un error en varias tablas de la aplicación que causaba que se desplegasen todos sus objetos a la vez cuando se clickeaba en uno de ellos.
 * Arreglado un error que hacía que los cables Ethernet se pintasen en los puertos que no correspondían en la ficha del CPE.
 * Arreglado un error por el cual se mostraban en la ficha del CPE SSIDs que realmente no estaban habilitados en ciertos modelos TP-Link.

## Enero 2025

### Krill

**Nuevas funcionalidades**:

 * Sistema Operativo - Limpieza de versiones antiguas de python.
 * Se ha añadido la configuración y reserva de IPs por API cuando se crea, actualiza o modifica un CPE en entornos KEA-DHCP.
 * Añadida la provisión por trap en OLTs Huawei y ZTE.


**Corrección de errores**:

 * Corregido un error que prevenía el acceso al API Navegable de KRILL. El API vuelve a poder utilizarse desde el navegador, pero este acceso será deprecado en favor de Swagger.
 * Solucionado un problema con el CPE Wimax en modo router en KEA. Agregada la capacidad de asignar una dirección IP al CPE Wimax en modo bridge cuando se activa la opción bridge en el CPE de Krill.
 * Solucionado un error por el cual no era posible realizar modificaciones sobre las radios WiFi en equipos con datamodel TR181.
 * Para CPEs que usan el datamodel TR181, ahora mostramos y categorizamos los equipos conectados por LAN que no reportan si lo hacen por WiFi o por Ethernet.
 * Se ha corregido un error que impedía visualizar gráficas cuando se escogía un rango de fechas determinado.
 * Se ha corregido un problema que hacía que las exportaciones de datos descargarán un documento vacío.
 * Solventado cálculo de ip libres IP disponibles en ISC DHCP.

### Krill-UI

**Nuevas funcionalidades**:

 * Añadida la posibilidad de incluir el SSID, contraseña de Wi-Fi y el DSN de la instalación directamente desde Installer Tools.
 * Actualizado el estilo de la tabla de IP Pools de Radius para evitar que las IPs que ya no estén ocupadas se puedan confundir con las IPs ocupadas.
 * Mejorado el tratamiento de las radios y los SSID en la pestaña de settings de la ficha del CPE.

**Corrección de errores**:

 * Arreglado un error por el cual la UI podía tener errores en la obtención de datos con el uso de realms en casos determinados.
 * Añadida la obtención de datos de telefonía en tiempo real a la ficha del CPE. Ahora, el color del botón de POTSes será amarillo si hay menos líneas activas de las registradas y azul si no se puede obtener información sobre las líneas actualmente.

## Diciembre 2024

### Krill

**Nuevas funcionalidades**:

 * Integración de los modelos TP-Link EX220, Cdata ONT4GE1TVAS2WR y Skyworth GN630V en el nuevo sistema de monitorización.
 * Implementados sanity checks en KEA, se limpian leases que ya no son necesarias
 * Optimizamos la forma de obtener la configuración de los hosts almacenada en Krill para ser usada por el ACS, de manera que conseguimos que este sea más ágil gestionando las sesiones TR069 con los equipos.
 * Validación de modelo en API de CPE
 * Agregado el filtro topology al API de cpes de krill /api/v2/cps?topology=abc

**Corrección de errores**:

 * Solventado un bug en las estadísticas de los Pools de IP en el módulo Radius de Krill. Se han realizado optimizaciones y mejoras adicionales.
 * Solucionado un problema en ispcli (ispadmin) por el que no se mostraban las leases de rangos sin pools (ip`s fijas). Se ha cambiado el orden de las columnas Remote ID y Circuit ID
 * Arreglado el bug con el navegador Google Chrome que hacía que saltara la ventana de login.
 * Solventado un bug con la exportación personalizada en el modulo ISP.

### Krill-UI

**Nuevas funcionalidades**:

 * Si un grupo tiene su fail apuntando a una extensión, esto será reflejado en el esquema de la PBX.
 * Se ha hecho más accesible el botón links CPE en la ficha de un equipo, está situado en la la zona de IPs del overview.
 * El módulo Reporting incluirá un visor de leases IPv4 e IPv6.

## Noviembre 2024

### Krill

**Nuevas funcionalidades**:

 * Ampliada la verbosidad del log de KEA y extendida la retención del log.
 * Optimización del encolado de tareas en la monitorización de CPEs usando TR069.
 * Ahora se permite el envío de notificaciones por email con una cuenta SMTP que no disponga de credenciales de usuario.
 * Se ha añadido la monitorización del bandwidth de las interfaces GPON en equipos FiberHome.

**Corrección de errores**:

 * Arreglado un error por el cual se creaban concesiones de IP que duraban 0 segundos.
 * Solucionado un bug que impedía monitorizar dos BGP Peers con el mismo nombre en dos equipos distintos.

### Krill-UI

**Nuevas características**:

* Modificada la función de exportar datos a CSV para evitar que vuelva a pedir usuario y contraseña. Por limitaciones técnicas, mientras se están exportando los datos el usuario no podrá navegar en esa pestaña.
* En la ficha de un CPE, las alarmas LOSi, LOFi y dying gasp serán representadas mediante iconografía.

**Corrección de errores**:

* Corregido un error por el cual en la ficha del CPE la información dada sobre el estado activo o inactivo del equipo y de su conexión a internet podría ser incorrecta.
* Corregido en la ficha de un CPE, la información dada sobre el estado activo o inactivo del equipo y de su conexión a internet.

## Octubre 2024

### Krill

**Nuevas funcionalidades**:

 * Se ha adaptado el modelo F6600P al data model TR181.
 * Se ha añadido la posibilidad de marcar un Host como UP cuando tenemos accounting de dicho equipo.
 * Se ha añadido el chequeo de forma pasiva para los CPEs de tipo bitstream, con el objetivo de optimizar el uso de cpu del servidor.
 * Se ha añadido la posibilidad de montar KEA-DHCP en alta disponibilidad.
 * Se ha añadido documentación de la API del módulo de ACS.
 * Se ha añadido la actualización de Celery 4 a Celery 5.

**Corrección de errores**:

 * Se ha corregido un problema con la monitorización de equipos Huawei que hacía que los niveles de potencia fueran erróneos para las interfaces de 100G.
 * Se ha corregido un error que hacía que algunos hosts y servicios se vieran duplicados en función de los permisos del usuario.
 * Se ha corregido un error al chequear la versión de Mikrotik.
 * Se ha corregido un error por el cual los servicios de telefonía no se monitorizaban correctamente.
 * Se ha corregido un problema por el cual tras un update automático de Freeradius, hacía que los cambios realizados en ISP no se aplicarán a los archivos de configuración. 
 * Se ha corregido un problema por el cual tras un update automático de Freeradius, hacía que los cambios realizados en ISP no se mandará el CoA.
 * Se ha corregido un problema con el bindeo de puertos para el modelo F6600P con datamodel TR181.
 * Se ha corregido un error en el info de los CPEs Docsis, que marcaba el CPE como DOWN.
 * Se ha corregido un bug que hacía que no se mostrara información del CPE cuando alguno de los equipos conectados por LAN se identifica con caracteres no ASCII.
 * Se ha corregido el check backup de OLTs ZTE para contemplar formatos .dat y zip.
 * Se ha corregido la documentación Swagger de los endpoints /api/v2/auth/login/ y /api/v2/auth/token/ y se ha marcado como deprecado el endpoint /api/v2/auth/token/
 * Se ha corregido un error que impedía que los diagnósticos de la ficha funcionasen.
 * Se ha mejorado el check de bitstream pasivo para evitar algunos errores.
 * Se ha corregido un error que impedía filtrar eventos de tipo CWMP por host_name.
 * Se ha corregido un error en KEA-DHCP que daba por error IPs a equipos desactivados.
 * Se ha mejorado el check de bitstream pasivo para evitar algunos errores.
 * Se han corregido algunos errores de monitorización para el data model TR-181.

### Krill-UI

**Nuevas características**:

* Se ha añadido un selector de fechas que permite peticionar, los datos por rango de fechas en el timeline de la ficha de un equipo.
* Para equipos CPE WiMAX se ha añadido la posibilidad de redirigir a la vista matrix.
* Para equipos CPE DOCSIS se ha añadido una gráfica RF y se ha eliminado la vista de dispositivos conectados.
* La ficha de CPE ahora detecta si una IP recibida vía Radius, es de tipo PPPoE o IPoE.

**Corrección de errores**:

 * Se ha corregido un error que imposibilitaba ver los equipos conectados por WiFi cuando no reportan en qué banda estaban.
 * Se ha corregido el problema que provocaba que la pantalla overview de Keyser se viera cortada.
 * Se ha corregido un error por el cual los valores de las gráficas de ONUG se redondeaban en vez de enseñar el valor concreto.
 * Se ha corregido un error por el cual los históricos de la vista ISP en un determinado cpe no estaban ordenados por fecha correctamente.
 * Se ha corregido un error en la vista login que impedía ver el error al loguear.
 * Se ha arreglado un error por el cual la vista de hostevents mostraba la hora incorrecta, y además no se ajustaba al horario del usuario.
 * Se ha corregido un error en la ficha de eventos de un CPE por el cual tras un error de provisión el mensaje se mostraba incompleto.
 * Se han aplicado mejoras de seguridad en general en distintas aplicaciones.
 * Se ha corregido un error en la ficha de un CPE, había información errónea sobre el estado activo o inactivo del equipo y de su conexión a internet.
 * Se ha mejorado la gestión de errores para algunos diagnósticos de la ficha CPE.

## Septiembre 2024

### Krill

 **Nuevas funcionalidades**:

 * Se ha añadido la posibilidad almacenar el puerto en las IPs concedidas por CGNAT.
 * Se ha añadido la obtención de la distancia entre la ONU y la OLT para el fabricante VSOL.
 * Se ha añadido la posibilidad de buscar en krill un CPE por SN en formato ASCII.
 * Se ha añadido la posibilidad de definir la prioridad de la vlan nativa asociada a un puerto ethernet en Huawei.
 * Se ha añadido la posibilidad de mostrar la lista de WANs de los modelos Linksys con datamodel TR181 (TR069).

 **Corrección de errores**:

  * Se ha corregido un bug que impedía la provisión en algunas OLTs CDATA.
  * Se ha corregido un error que impedía ver los CDRs de un determinado cliente.
  * Se ha corregido un bug que hacía que algunos CPEs no se vieran en su correspondiente HostGroup.
  * Se ha corregido un bug por el que no se recuperaban ciertos parámetros en la monitorización de los equipos Huawei.
  * Se ha corregido un problema que hacía que un equipo se marcará como UP en la ficha cuando estaba desprovisionado.
  * Se ha corregido un problema con la realización de backups de las OLTs VSOL.
  * Se ha corregido un problema que imposibilitaba la búsqueda en la vista CDRs.

### Krill-UI

**Nuevas características**:

 * Se ha añadido la opción de ver todas las IPs disponibles en la ficha de un equipo.
 * Se ha añadido un enlace desde la vista de CPE hacia la ficha de su cliente.
 * Se ha añadido en la ficha de la PBX un histórico con los diferentes cambios realizados en ésta.

**Corrección de errores**:

 * Se ha corregido el problema que provocaba que la pantalla overview de Keyser se viera cortada.
 * Se han corregido los umbrales en el listado de métricas de los servicios en la ficha de un host.
 * Se ha corregido la fecha de creación y actualización de los equipos en las fichas, aunque éstos no se encuentren en el sistema de monitorización.
 * Se ha corregido la visualización del histórico de los equipos en la ficha.
 * Se ha corregido la visualización de concesión de IPs en CPEs que se encuentren en zonas horarias distintas a UTC.

## Julio 2024

### Krill

 **Nuevas funcionalidades**:

 * Ahora se permite en el servicio Radius controlar el COA en IPoE y PPPoE.
 * Hemos añadido soporte para IANA en el servicio Radius IPv6. 

 **Corrección de errores**:

 * Se ha modificado el funcionamiento del servicio Radius para evitar las alertas de IPs duplicadas en CGNAT y en el check de detección de duplicados por NAS.
 * Se ha optimizado el proceso de cálculo de reservas de prefijos IPv6 en radius.

### Krill-GPON

**Nuevas características**:

 * Generación interna de un filtro que permite usar el perfil de velocidad como criterio a la hora de provisionar

 **Corrección de errores**:

 * Corregido un bug que provocaba que fallara la reprovisión del modelo 854G en OLTs Calix.

### Krill-UI

**Nuevas características**:

 * Se ha actualizado Installer Tools, añadiendo el campo modelo, que se auto-seleccionará al seleccionar un equipo pendiente de provisionar, y se ha eliminado el campo Realms, realizándose las búsquedas en todos los realms que tenga permiso el usuario.

 **Corrección de errores**:

 * (KEYSER) Se han homogeneizado los colores para las gráficas de ancho de banda en tiempo real.
 * Se ha corregido un error con los filtros en las vistas de API y Admin logs que hacía que las búsquedas permanecieran incluso saliendo de dichas vistas.
 * Se ha optimizado la carga de datos de la vista Smart-Tree haciéndola más rápida. 

## Junio 2024

### Krill

 **Nuevas funcionalidades**:

 * Se ha incorporado un nuevo comando a nuestro ISP-CLI, para comprobar el estado de los Peers de telefonía.
 * Se ha optimizado el almacenamiento de métricas de los diferentes servicios para reducir el almacenamiento en disco y el consumo de RAM.

 **Corrección de errores**:
 
 * Se ha solucionado un problema que provocaba en redes grandes que el sistema de monitorización se quedara bloqueado y necesitara un reinicio.
 * Se ha modificado la generación del atributo de velocidad para los NAS Cisco, para que éste se genere sólo para clientes PPPoE.
 * Corregido un error que impedía que llegaran las alarmas a los CPEs que tenían marcado el check de `enable notifications`.
 * Se han solucionado diversos errores que podían aparecer en varios de los endpoints de la API de monitorización.

### Krill-GPON

**Nuevas características**:

* Se ha añadido una nueva alarma para notificar cuando un PON excede de XXX número de ONTs conectadas.
* Mejora de la provisión de equipos ZTE para incluir IPv4/IPv6 en la wan de internet e incluir wan PPPoE.
* Se ha incluído un nuevo campo a los equipos FiberHome para poder realizar los filtros por modelo en las validaciones.

**Corrección de errores**:

* Se ha corregido un error por el que no se obtenía correctamente el puerto de una ONU pendiente de configurar en CDATA.

### Krill-DOCSIS

**Nuevas características**:

* Se ha mejorado el tiempo de las tareas de reinicio de los equipos DOCSIS.

### Krill-UI

**Nuevas características**:

* Para evitar que en las fichas de los equipos no aparezca ninguna dirección, ahora se muestra tanto la del cliente como la del propio CPE.
* (KEYSER) Se ha añadido el campo notas del customer dentro de la nueva ficha.

## Mayo 2024

### Krill

**Nuevas funcionalidades**:
 
* Ahora Krill permite discriminar los atributos personalizados por NAS vendor en el módulo Krill-Radius.

**Corrección de errores**:

* Se ha solucionado un problema que impedía la generación de backups de los PTPs cuando estaba el atributo monitor=False

### Krill-UI

**Nuevas características**:
 
* En la vista ISP si sólo hay un único Realm, éste se seleccionará por defecto.
* Se añade la opción de guardar la configuración de la UI (dashboard, tiempos de refresco, etc) asociada al usuario para poder rescatarla desde cualquier otro dispositivo. La nueva opción se ha habilitado dentro del menú de usuario que se despliega en el icono superior derecho con las iniciales. 

### Krill-GPON

**Corrección de errores**:
 
* Solucionado un problema con la reprovisión de ciertos equipos ZTE/PTin con el atributo `nni_type`.
* Se ha corregido un error que podía provocarse al hacer una carga del memento desde el fichero de configuración.
* Corregido un error provocado en la provisión al no saltarse las ONUs pendientes sin serial number.

### Keyser

**Corrección de errores**:
 
* Problema configuración inicial del WiFi con Keyser y ONTs Huawei.
* Se corrige un bug que provocaba que siguieran apareciendo hosts conectados a la LAN de un equipo cuando no había ninguno.

## Abril 2024

### Krill

**Nuevas funcionalidades**:

* Se ha añadido la opción de enviar alarmas a Microsoft Teams.

### Krill-KEA

**Nuevas funcionalidades**:

* Se ha habilitado la API para poder monitorizar el uso de pools de IPs.

### Krill-GPON

**Nuevas funcionalidades**:

* Se ha añadido la opción de configurar una validación de versión de hardware / software para realizar la provisión de las ONTs.
* Se ha añadido el perfil de ONT al fabricante Calix.
* Se ha añadido la provisión para el modelo HN8145X6 de HWTC.

**Corrección de errores**:

* Se ha corregido la provisión del model F601 para las OLTs VSOL.
* Se ha modificado la forma de habilitar la opción 82 del DHCP para el fabricante VSOL.

### Krill-ui

**Nuevas funcionalidades**:

* Se han añadido los campos `external_id` y `customer_external_id` en la vista matrix para resultados de tipo servicio.
* Ahora por defecto, se seleccionará la primera localización y el primer país de entre los disponibles para el alta de customers y CPEs.

**Corrección de errores**:

* Se ha corregido un error que impedía que se mostraran todas las ONUs pendientes de provisionar en el formulario de creación de CPEs y en la propia vista de ONUs no configuradas.
* Se ha corregido un problema que impedía que se cargaran las métricas de un servicio al pulsar el botón refresh.
* Se ha solucionado un problema que podía provocar que no se cargara el timeline en la ficha de los CPEs.
* Se ha corregido la previsualización en el mapa de las direcciones tanto de los customers como de sus CPEs.
* Se ha habilitado la caja de información de registro en la nueva ficha del CPE de Keyser.
* Se ha solucionado un error que impedía que se pudiera pulsar en ningún botón en la nueva ficha de los CPEs.

## Marzo 2024

### Krill

**Corrección de errores**:

* Se ha optimizado el servicio de accounting para desestresar el disco duro y la carga del procesador del servidor.
* [Keyser]: Se ha corregido la acción de reconfiguración al realizar una modificación en la configuración de una ONU. 
* Se ha solucionado un problema que impedía que se lanzaran sesiones TR069 para reiniciar o reconfigurar ONUs desde la utilidad de ISPCLI.

### Krill-GPON

**Corrección de errores**:

* Se ha solucionado un problema con las búsquedas por S/N que afectaba a equipos de VSol, que almacenaban dicho dato de distintas formas (todo mayúscula, mayúsculas y minúscula, etc).
* Se ha solucionado un error que impedía reiniciar ONUs en determinados casos en los que fallaba la acción por SNMP, habilitándola en ese caso por Telnet.
* Se ha corregido el consumo de ancho de banda por PON y ONTs en equipos ZTE. 

### Interfaz de usuario de Krill

**Corrección de errores**:

* Se ha cambiado la configuración de rangos de fechas para los widgets de gráficas de forma que puedan actualizar mejor las métricas. (Nota: Implica volver a configurar dichos rangos.)
* Se ha solucionado la exportación de datos a CSV desde la vista Matrix.
* [Keyser]: Se ha corregido el cambio de contraseñas de los SSIDs.
* Se ha modificado la escala de la métrica PING para que sea devuelta en las gráficas en `ms`.

## Febrero 2024

### Krill

**Corrección de errores**:

* Se ha solucionado un problema en la monitorización de equipos EdgePower.
* Se ha corregido un error que impedía que se reiniciara una ONU tras un cambio de redireccionamiento para configurar sus nuevos valores.
* Se ha solucionado un error que impedía en determinados casos que se guardaran las métricas de UpBw y DnBw para las gráficas en equipos Bitstream.
* Se ha arreglado un problema que hacía que no se tuviera en cuenta la variable `default_snmp_community` para equipos sin SNMP configurado.
* Se ha solucionado un error en las gráficas de tiempo real de determinadas ONUs de la marca FullDomus.
* Se ha corregido un error que hacía que no se asignara IP tras hacer un cambio del tipo de direccionamiento de NAT a pública. 
* Se ha solucionado el problema de visualización de las gráficas de PacketLoss de los CPEs que en algunos casos no inyectaba correctamente las métricas.
* Se ha revisado la escala de la métrica Ping para que la unidad de medida sea en ms.
* Se ha optimizado el tiempo de procesamiento del Accounting.

### Krill-GPON

**Nuevas funcionalidades**:

* Se ha añadido la opción de poder forzar la desprovisión de un S/N que se encuentre duplicado en el memento.
* Ahora se puede usar TR069 Profile para insertar la URL del ACS en ONUs de la marca VSOL. 

**Corrección de errores**:

* Se ha solucionado un problema que impedía la provisión en determinados equipos conectados a OLTs VSol.
* Se ha solucionado el error que impedía visualizar correctamente las gráficas en tiempo real de equipos FullDomus.

### Krill-WiMAX

**Nuevas funcionalidades**:

* Se han añadido a la monitorización nuevos modelos de APs del fabricante Mimosa.

### Krill-DOCSIS

**Nuevas funcionalidades**:

* Se ha añadido la posibilidad de disponer un selector por tipo de servicio o direccionamiento para activar Dual-Stack Ipv6 o solo Ipv4.

### Interfaz de usuario de Krill

**Corrección de errores**:

* Se ha solucionado un problema que podía provocar el bloqueo del selector de rangos de fecha en algunas vistas al seleccionar uno de los rangos prefijados.
* Se ha corregido un problema que impedía que se mostraran ciertos valores de perfiles en la vista de CPEs del módulo Customers, si estaba seleccionado el filtro para todos los Realm.
* Se ha modificado la regla de validación del campo IP Fija basándose en el valor del perfil de direccionamiento en las vistas de creación y modificación de CPEs del módulo Customers.
* Se ha solucionado un error en el filtrado de la vista Host-Events que impedía que se mostraran datos.
* Se ha corregido un error en la ficha de clientes y CPEs que impedía guardar datos por la longitud de las coordenadas geográficas.
* Se ha solucionado un error que impedía que se mostraran las gráficas de un host en la vista móvil.
* Se ha corregido un error que provocaba que no se detectaran los cambios realizados en la configuración de los POTSes en la ficha de edición de un CPE.
* Se ha corregido un error que impedía la exportación a CSV desde la vista de CPEs del módulo Customer al seleccionar equipos.
* Se ha solucionado la búsqueda de Customers en la creación de PBX hasta no seleccionar algún REALM, aunque ya hubiera uno seleccionado previamente, en el módulo de PBX.
* Se ha corregido la exportación de datos a CSV desde el módulo Customer, que en ocasiones devolvía un error 502.
* Se ha solucionado el error de búsqueda de Customers al dar de alta una PBX sin haber seleccionado previamente un Realm diferente al valor actual.

## Enero 2024

### Krill

**Nuevas funcionalidades**:

* Se ha limitado el consumo de RAM del MySQL para evitar posibles colapsos del sistema en momentos puntuales.
* Se ha agregado la funcionalidad de monitorear la cobertura de equipos de tecnología móvil (LTE, 4G, 5G)

**Corrección de errores**:

* Se ha solucionado un problema que provocaba la desaparición de algunas gráficas de determinados equipos PTP.
* Corregido un error que provocaba que el servicio de monitorización fallará al hacer un borrado de un CPE via API
* Reducido el timeout de las tareas de Docsis
* Se ha modificado la prioridad de ejecución de tareas para evitar colapsos que puedan bloquear algunas tareas más necesarias.
* Se solucionado un bug en el servicio DHCP que provocaba que no se aplicaran los últimos cambios introducidos en la configuración.
* Se ha corregido un problema con la configuración de las cuenta SIP de determinadas ONTs.

### Krill-GPON

**Nuevas funcionalidades**:

* Ahora se permite crear más de una WAN vía OMCI para equipos ZTE.
* Los S/N se convierten en hexadecimal para los equipos de CData

**Corrección de errores**:

* Se ha corregido un problema de determinados fabricantes que requieren realizar la provisión en formato ASCII.
* Se ha modificado la disposición para ajustar el tipo de servicio en la creación de la wan vía OMCI.

### Krill-DOCSIS

**Corrección de errores**:

* Se ha solucionado un problema que podía provocar timeouts en la ejecución de determinadas tareas.

### Interfaz de usuario de Krill

**Nuevas funcionalidades**:

* Ahora los selectores de rangos de fechas muestran algunos valores en modo más "humano".
* Se añaden filtros para buscar eventos de tipo `iplease6` y `iplease6pd` en la vista HostEvents.
* Se ha homogeneizado el intervalo de tiempo por defecto para las vistas de gráficos de host y servicios.
* Incluir en la ficha CPE los valores de señal de equipos LTE.
* Se ha añadido una nueva opción que permitirá añadir funcionalidades a las fichas de los equipos en función de su Fabricante, marca, tipo de equipo, etc.

**Corrección de errores**:

* Se ha añadido la posibilidad de permitir en el campo notas de cpes y clientes más de 255 caracteres.
* Se ha corregido un error que impidió realizar búsquedas en el módulo Customer/ISP desde el móvil.
* Solucionado un error que impedía editar Customers o CPEs si se enviaba un número de decimales demasiado grande en las coordenadas geográficas.
* Corregido un error que impedía crear múltiples opciones para un recepcionista en el módulo PBX.
* Se ha corregido un problema que podía provocar una pantalla de error si se accedía a determinadas vistas desde un dispositivo móvil que no estaban preparados para este tipo de dispositivos.
* Se ha solucionado un problema que impedía que se mostraran cierta gráficas de ancho de banda.
* Se ha corregido un error que impedía que se mostraran los resultados en la vista CWMP.

## Noviembre 2023

### Krill

**Nuevas funcionalidades**:

* Se añade la funcionalidad de obtener un Info de equipos Bitstream.
* Ahora se pueden crear o eliminar Trunks en los servidores de Asterik para clientes con multi-asterisk
* Se añade la opción de tener diferentes trunks de telefonía en diferentes Asterisk bajo un mismo Krill.
* Se ha añadido la opción de solicitar un info de equipos de tipo Bitstream vía API.

**Corrección de errores**:

* Optimización de queries de Free-radius para reducir la carga de la bbdd.
* Se ha redirigido el puerto 4280 al 443 para evitar que se acceda vía no HTTPS tanto a la API como a la UI, excepto el endpoint `/api` y el `/admin`
* Se ha solucionado un problema en el endpoint de la API correspondiente a la obtención de eventos de un Host, que impedía su funcionamiento al usar el parámetro de ordenación `-start_time`.
* Se ha corregido un problema que impedía la monitorización de determinados SAIs. 

### Krill-GPON

**Corrección de errores**:

* Se ha corregido el OID de algunas OLTs que no reportaban correctamente el tipo de PON (gpon, xgspon, etc.)
* Se ha solucionado un problema con el Patcher de las OLTs FiberHome que hacía que funcionara de manera incompleta.
* Se ha corregido un error que impedía eliminar una ONU si su ID no se encontraba en la whitelist.

### Krill-ui

**Nuevas funcionalidades**:

* La ficha de edición de un CPE ahora intenta ubicar en el mapa por calle, o por localidad, código postal o provincia para intentar mostrar la ubicación más próxima a la real si ésta no se encuentra.
* Se ha añadido al bloque de información técnica de un CPE el "Remote ID" si éste se hubiera especificado.
* Se añade la posibilidad de incorporar en la ficha monitor el prefijo IPv6 cuando esté activa la opción 37.

### Krill-DOCSIS

**Corrección de errores**:

* Se ha corregido un error que impedía obtener un info de equipos DOCSIS al no venir en el formato esperado el uptime.

## Octubre 2023

### Krill

**Nuevas funcionalidades**:

* Se ha optimizado el proceso de consulta y asignación de IPs en los pool del servicio Radius.
* Se añade un nuevo HostGroup tipo `cpeprobe` para equipos sonda de la red, permitiendo su filtrado también desde la vista HostGroups de la UI.
* Se ha añadido la posibilidad de marcado PPPOE cuando el NAS sea de tipo DHCP.
* Se ha añadido validación de datos en el endpoint de `/api/v2/pbx/holidays` para evitar poder registrar datos repetidos o con formato erróneo.

**Corrección de errores**:

* Se ha eliminado la duplicidad de CPEs en algunas consultas en la API de monitorización.

### Krill-GPON

**Nuevas funcionalidades**:

* Se añade la funcionalidad de detección de cortes de fibra vía Trap, para determinadas OLTs Huawei que lo soportan.

**Corrección de errores**:

* Se ha corregido un error que impedía la eliminación de ONUs duplicadas en el momento de la provisión.
* Se ha solucionado un error con la provisión de determinados modelos de ZTE.

### Krill-DOCSIS

**Corrección de errores**:

* Se ha corregido el conteo de cable-modems conectados provocando incoherencias entre el número mostrado en la vista Host-groups y el número total de elementos.
* Se ha corregido la monitorización del número de cablemodems.


### Krill-ui

**Nuevas funcionalidades**:

* Se añade la opción de adjuntar información adicional en el bloque de tecnical data de la ficha de un Host: SSID, WPA2-Key, User, Password, etc.
* Ahora ficha monitor de un CPE mostrará la distancia a la que se encuentra de su equipo de registro en función de su tecnología (OLT, Cabecera Docsis, AP, etc)
* Se ha mejorado la exportación a CSV de la vista CPEs del módulo Customer, pudiendo ahora filtrar los datos antes de ser exportados.


**Corrección de errores**:

* Se ha solucionado un error que podía impedir la visualización de equipos si un usuario tenía determinados permisos.
* Se ha corregido la ordenación por last-state-since y ancho de banda en bajada y subida dentro de la vista matrix.
* Se ha solucionado un problema en el filtrado de la vista History, que no distinguía correctamente entre hosts y servicios.
* Se ha detectado y solucionado un error que impedía que se mostrara el ONU-ID de equipos que tuvieran valor 0 para este atributo.
* Refactorización del módulo PBX para unificar a la nueva API mono-kiwi.
* Se elimina la opción de mostrar todos los elementos en la vista Matrix para evitar timeouts al poder encontrarse una gran cantidad de elementos.

## Septiembre 2023

### Krill-GPON

**Nuevas funcionalidades**:

* Se ha añadido la opción de hacer un `load_memento` por PON de manera individual para OLTs Huawei.
* Se añade el soporte para ONUs XGSpon.

**Corrección de errores**:

* Se ha modificado la provision para soportar ONTs con velocidades 10G en escenarios con tarjetas Duales (soporte para XGSpon y Gpon)

## Agosto 2023

### Krill

**Nuevas funcionalidades**:

* Se ha adaptado la opción 82 de DHCP para el servicio de Radius. 

**Corrección de errores**:

* Se ha corregido un error que podía provocar que no se monitorizaran correctamente los servicios de un CPE en determinadas circunstancias.
* Se han corregido las gráficas de algunos Switches que no mostraban correctamente sus métricas.
* Se han optimizado los despliegues de modificaciones de DHCP y Radius haciéndolos mucho más rápidos.
* Ahora solo se establece la IP fija cuando el `Address profile` está establecido en IP Fija.
* Ahora, cuando un CPE tenga el check de `No reprovisionar`, no se actuará en ningún caso sobre él.
* Corregido un error que impedía en determinadas circunstancias restaurar backups de OLTs.
* Se ha solucionado un problema que podían hacer que no se tuvieran en cuenta los address_profile_mapping definidos en el radius.

### Krill-ui

**Nuevas funcionalidades**:

* Se ha añadido la opción para poder descargar CSV de los listados en el módulo de Customer/ISP.
* Se ha simplificado la creación y modificación de Schedules de una PBX.

**Corrección de errores**:

* Se ha modificado la regla de validación de los label de un POT a 30 caracteres.
* Se han eliminado los enlaces y referencias a la vista PON Status de los equipos DOCSIS y limitado los Registration tags a los más importantes.
* Se ha ocultado la IP fija para aquellos equipos que tengan un Address-Profile diferente a ésta
* Se ha deshabilitado el campo `serial_number` para aquellos equipos que no tengan habilitada la variable `cpegpon_noserialnumber_allowed=true` para evitar que éste se pueda modificar tras la creación del CPE.
* Se ha corregido la funcionalidad de recheck para los servicios, que al pulsar su botón no mostraban ninguna información ni lanzaban dicho comando.
* Se ha modificado la regla de validación de DDIs para permitir añadir los prefijos internaciones: p. ej: 0034612345678.
* Se ha corregido el enlace que muestra los hosts asociados a un host-group de realm por tecnología.
* Se ha ampliado el campo comment para la vista detalle de localizaciones en la vista sonar.

### Krill-GPON

**Corrección de errores**:

* Se ha corregido un error que podía ocasionar que las OLTs no borraran las ONUs tras un OK del comando SNMP correspondiente.

## Julio 2023

### Krill

**Nuevas funcionalidades**:

* Se ha añadido la posibilidad de cortar el servicio a un cliente final por impago o cualquier otro motivo en entornos DHCP+Radius.
* Ahora en los entornos DHCP+Radius también se envían los atributos de velocidad.
* Posibilidad de añadir el nombre del customer como descripción de la ONU en OLTs Uplink y V-Sol

**Corrección de errores**:

* Se ha corregido un error que impedia dar IP a algunos equipos por Wanmac

### Krill-ui

**Nuevas funcionalidades**:

* Se ha refactorizado el módulo `customer` para adaptarlo a mono-kiwi, haciendo más fácil la selección de realm para aplicar los filtros en las diferentes vistas.
* Se ha añadido la capacidad de exportación a CSV en las vistas de Customers, CPEs y CPE-Profiles del módulo `customer`.
* Se ha habilitado la posibilidad de introducir códigos postales con dígitos y el símbolo `-` para compatibilizarlos a nivel mundial.
* Se han mejorado las gráficas de ciertos servicios de CPEs (downstream, upstream, docsis...)
* En la vista Host-Groups los realms ahora aparecen categorizados por tecnología.

**Corrección de errores**:

* Se ha corregido el validador de s/n para permitir 12 o 16 caracteres alfanuméricos tanto en el módulo `customer`, como en `installer-tools`.
* Se ha cambiado el modo de peticionado por SNMP a las OLTs Huawei para evitar posibles timeouts.

## Junio 2023

### Krill

**Nuevas funcionalidades**:

* Se ha añadido la opción de especificar en los modelos, perfiles de velicidad, etc el realm o realms a los que pertenecen.
* Ahora cuando se borra un CPE a nivel administrativo, se le desconecta la TV y éste se da de baja también de la OLT.
* Ahora las concesiones legales de IP almacenan también el external ID para facilitar la identificación de los clientes.
* Los line-profiles ahora se encuentran separados por realm en entornos multi-realm.

**Corrección de errores**:

* Se ha corregido un error que podía provocar alarmas con falsos positivos del tipo "Decreased bandwith".
* Se ha corregido la activación de CATV para determinadas ONUs conectadas a OLTs CData
* Se ha modificado el provisionador de OLTs CData para que realice la creación de la WAN de TR069 vía OMCI y el resto vía pexpect.
* Ahora se tiene en cuenta la variable `monitor: false` a la hora de peticionar vía SNMP a los dispositivos.
* Se ha corregido un error que podía provocar un error 400 al intentar editar el DDI de una PBX.
* Se ha corregido un error que podía provocar un error 500 al lanzar un reset de un CPE DOCSIS.


### Krill-GPON

**Corrección de errores**:

* Se ha corregido un error que impedía mostrar el TimeLine de onus provisionadas en OLTs de Televés.
* Se ha corregido un error que podía provocar una respuesta errónea al peticionar un `/info` en determinados CPEs.
* Se ha corregido un error que podía provocar un error al intentar hacer un factory reset a algunos CPEs con tecnología `ethernet`.

### Rubik

**Nuevas funcionalidades**:

* Se ha actualizado la importación de clientes de Onivia.
* Ahora la API devuelve la información del IUA, los CTOs y el password GPON de los servicios de Onivia.
* Los servicios dados de alta en el mayorista Onivia ahora muestran información del CTO, la IUA así como la GPON password.

**Corrección de errores**:

* Se han corregido diversos errores gráficos en la edición de CTOs.

### Krill-ui

**Nuevas características**:

* En el widget del dispositivo ahora se muestra el perfil de TV si éste está seleccionado y se representa con un cable RF en la ONT.
* La ficha del CPE ahora muestra en la barra superior si el modelo disponible de antena RF para la televisión de color gris, y si tiene algún perfil de TV asociado éste se pondrá de color verde.
* Se ha optimizado la vista de PON Status, para diferenciar si se quiere mostrar información de un PON desde otra vista, o accedemos a ella para ver el estado en tiempo real de todos los pones de las distintas OLTs monitorizadas.

**Corrección de errores**:

* Para evitar errores, se ha deshabilitado la acción de recheck para aquellos equipos o servicios que tengan monitorización pasiva.
* Se han corregido diversos errores gráficos en la vista de Pon Status.

## Mayo 2023

### Krill

**Nuevas características**:

* Se han añadido dos Widgets de monitorización para poder ser usados desde aplicaciones externas. Para más información: https://guide.phicus.es/krill2/widgets
* Ahora se permite la autorización en NetElastic usando `username` en formato ASCII así como la utilización de IPPools para poder compartir rangos.
* Se ha añadido la monitorización de recursos de las CMTS Cisco.
* Se ha añadido la monitorización al core de equpos VSOL, CData y Casa System.
* Ahora se crea de forma automática un backup de los APs de Mikrotik.
* Se ha añadido el log de traps recibidos de equipos Eltek.
* Ahora permitimos configurar servidores de telefonía secundarios.

**Corrección de diversos errores**:

* Se ha corregido un error que impedía que se generaran, en determinadas circunstancias, los usuarios SIPs en las PBXs tras crear o modificar un CPE.
* Se ha solucionado un problema que podía impedir la reconfiguración de un CPE vía TR069 tras haber aplicado un cambio en sus parámetros, por ejemplo cambiar su SSID.
* Se ha solucionado un problema que impedía el corte de servicio PPPoE de un cliente tras ser desautorizado.
* Se ha corregido la exportación a CSV desde el panel de administración.
* Ahora se tiene en cuenta la variable `monitor: false` a la hora de peticionar vía SNMP a los dispositivos.

### Krill-GPON

**Nuevas características**:

* Se ha implementado la eliminación de serial number duplicados para ONUs de VSol y CData.

**Corrección de diversos errores**:

* Se ha corregido un posible error al intentar reprovisionar un equipo ya provisionado en OLTs CData.
* Se ha corregido un error en el filtrado por frame/slot/port dentro del proceso de polling de OLTs CData. 
* Se han corregido las gráficas de ancho de banda para equipos conectados a OLTs de VSOL/CData.
* Ahora se reprovisionan de forma automática las ONUs cuando un POTS se modifica.

### Krill-WiMAX

**Corrección de bugs**:

* Se ha corregido el cálculo de ancho de banda que en ocasiones podía ofrecer valores excesivos en APs de Ubiquiti.

### Krill-UI

**Nuevas características**:

* El botón de crear CPE en el módulo `Customers` ahora permite crearlo a través del formulario completo o bien usando el cuadro de diálogo de creación rápida.
* Se ha añadido más información a la tabla de SubAddress en la creación de servicios de Rubik.
* Se ha añadido una nueva vista para consultar el histórico de sesiones en el módulo de Radius y se han añadido filtros tanto en la vista del nuevo histórico como en la de sesiones online.
* Se ha añadido la opción de crear un cliente desde el formulario de creación de CPEs en el módulo Customers.
* Se ha optimizado la búsqueda de direcciones y cobertura en la creación de servicios de Rubik.
* Ahora se muestra mayor detalle de los posibles errores en el buscador de cobertura de Rubik.
* Se ha añadido en la vista de gráficas del host una opción para poder ver también las gráficas de sus servicios.

**Corrección de bugs**:

* Se ha corregido un error que impedía que se mostraran los enlaces personalizados en las fichas de equipos de Core.
* Se ha corregido la sección de POTSes de la ficha de creación de CPEs desde dispositivos móviles para facilitar su gestión.
* Se ha corregido la ordenación de TroubleTickets en las tablas de Rubik.
* Se ha corregido un error que impedía que se pudieran realizar correctamente búsquedas en el reporte de Admin Logs del módulo Logger.
* Se ha corregido la fecha del último cambio en la ficha de los equipos desde dispositivos móviles.
* Se ha corregido un error en la edición de las PBX que impedía la creación de nuevos horarios al borrarse los elementos existentes en los Schedulers.

### Rubik

**Corrección de bugs**:

* Se han solucionado algunos errores menores relacionados con los TroubleTickets, ServiceEvents y los serializadores de los ServiceProfiles para determinados owners.

## Abril 2023

### Krill

**Nuevas características**:

* Se ha añadido soporte para recuperar y mostrar la información de diagnóstico en equipos que usen el data-model TR181 (TR069).
* Se ha habilitado la recepción y tratamiento de traps de equipos PTP Ceragon.
* Ahora se puede usar el `internal_id` o el `external_id` como identificadores para las peticiones de información de CPEs de la API en entornos mono-kiwi.
* Se ha optimizado las peticiones a la base de datos desde la API en entornos mono-kiwi con muchos realms.

**Corrección de bugs**:

* Se ha corregido un error que podía provocar que el servicio DHCP se quedara inoperativo.
* Se ha corregido un error que podía hacer que un CPE, tras ser actualizado, desapareciera de la monitorización.
* Se ha corregido un error que podía provocar bloqueos a la hora de responder a las peticiones de la API.
* Se ha corregido un error que hacía que se mostraran sesiones de IP ya inactivas en la ficha de un CPE.
* Se ha corregido la ordenación por diversos campos en la vista de histórico y notificaciones.

### Krill-GPON

**Nuevas características**:

* Se ha optimizado la información del servicio TX/RX para equipos conectados a OLTs CData.
* Nueva integración de OLTs VSOL con chipset Broadcom, usando el `dba_profile` como limitación en subida.
* El desprovisionador de onus desconocidas ahora tiene en cuenta el check del cpe `provision_enabled`.
* Ahora cuando se desactiva un host o su acceso a internet, si éste tiene RF se apaga primero, y si tiene CATV, primero se desactiva la TV antes de desactivar el equipo.

**Corrección de bugs**:

* Se ha corregido un error que podía mostrar datos erráticos en el INFO de equipos conectados a OLTs ZTE.
* Se ha corregido un error que impedía la reprovisión de un CPE al activarlo o desactivarlo o tras cambiar el estado de su CATV.

### Krill-UI

**Nuevas características**:

* Se ha añadido un botón para refrescar la vista de `host-groups` sin tener que pulsar F5 en el navegador.
* Se ha cambiado el ordenado por defecto en la vista IP-Pools al campo `expiry_time` del módulo Radius.
* Se han unificado las pestañas de Información básica, administrativa y POTSes en la edición de CPEs dentro del módulo `Customers`.
* Se ha añadido validación al campo `holidays` tanto en la edición de PBXs como en la creación de los propios Holidays dentro del módulo `PBX`.
* El listado de servicios de la ficha de un equipo, tanto en el TimeLine como en la pestaña de servicios, ahora se ordenan primero por estado, luego por `business_impact` y finalmente por nombre.
* Se han optimizado las peticiones de información de un equipo y sus servicios en la ficha para evitar tiempos innecesarios sin visualizar datos
* Ahora desde el listado de CPEs del módulo `Customers` se pueden activar/desactivar los equipos, el acceso a internet, las notificaciones y el uso de VoIP externo haciendo click sobre los iconos de la tabla.
* Se han añadido más campos al formulario de creación rápida de CPEs del módulo `Customers` y ahora también se selecciona automáticamente el modelo si se selecciona un S/N desde la lista de pendientes de provisión.

**Corrección de bugs**:

* Se ha corregido un error en el detalle de un servicio de un host que impedía que se mostrara si éste tenía habilitados los checks activos o pasivos.
* Se ha corregido un error que podía impedir la creación de una PBX para clientes previamente creados.
* Se ha corregido un error que impedía mostrar el detalle de los CDR de un determinado teléfono a través de la ficha del CPE.
* Se ha corregido un error que podía impedir la actualización de PBX desde su formulario de edición.

## Marzo 2023

### Krill

**Algunas mejoras**:

* Ahora protegemos el servicio DHCP de posibles incongruencias de CPEs GPON sin serial number definido.

**Corrección de diversos errores**:

* Se ha corregido un error que impedía mostrar correctamente el Uptime de equipos WiMAX.
* Se ha corregido un error que hacía que los cambios de un customer no se vieran reflejados en la ficha tras guardarlos.
* Se han corregido los enlaces de las caídas e incidencias reportadas a Slack y que permiten acceder a las diferentes vistas de Krill.
* Se ha corregido parte de la documentación de Swagger para consumo de la API por parte de terceros, en la que faltaban los filtros de búsqueda de equipos/servicios y el endpoint para obtener los datasets de una métrica para dibujar las gráficas.
* Se ha corregido un error que hacía que el endpoint `/monitoring/status/summary` no devolviera los sumatorios correctos para cada estado.
* Se ha corregido un error que podía provocar bloqueos a la hora de responder a las peticiones de la API.
* Se ha agregado soporte al Radius para gestionar pool de IPs a través de NetElastic.
* Se ha agregado soporte de la opción 82 de Fiberhome al Radius a través de NetElastic.
* Se ha corregido un error que establecía el `address_profile` de un equipo dado de alta a "fijo" en vez de a su valor por defecto establecido.

### Krill-GPON

**Corrección de diversos errores**:

* Se ha corregido un error que podía producirse al tratar de provisionar un equipo en OLTs CData.
* Se ha corregido un error que se provocaba al hacer un memento full en equipos CData.
* Se ha corregido un error que impedía reportar el estadod e las ONUs por corte de fibra en OLTs Fiberhome.

### Krill-UI

**Algunas mejoras**:

* Se ha añadido un checkbox para poder activar o desactivar la repetición automática de las locuciones de recepción de una PBX.

**Corrección de diversos errores**:

* Se ha rediseñado y adaptado la pantalla de login a dispositivos móviles.
* Se ha corregido un error en los enlaces de los diferentes estados de la vista Sonar de Krill que impedían localizar los equipos o servicios a los que se hacía referencia.
* Se ha corregido un error que impedía crear un customer si se seleccionaba una localidad previamente dada de alta.
* Se ha corregido un error que impedía editar un recepcionista si éste no tenía definida ninguna opción de salto.
* Se han traducido al español algunas de las cabeceras de las tablas de la vista Technology de un Host de tipo CPE.
* Se ha suavizado el color de los estados de los servicios y deshabilitado aquellas acciones que no se pueden realizar en aquellos hosts que se encuentran DOWN en la ficha.
* Se ha corregido el widget `Summary` que no enlazaba correctamente con los equipos/servicios del estado sobre el que se pulsaba.
* Se ha corregido la vista `Somar` y `Host-groups` para mostrar correctamente el resumen de estados.
* La vista `World-Map` ahora hará auto-zoom y centrarse sobre los equipos localizados tras cada búsqueda o refresco de datos.
* Se ha corregido un error que impedía trasladar correctamente las búsquedas entre las diferentes vistas de monitorización.
* Se ha corregido un error que impedía mostrar el diálogo de confirmación de acciones de un CPE en la vista móvil.
* Se ha corregido un error que impedía marcar el timeline de un host para poder hacer zoom en él sin tener que recargar la página.
* Se ha corregido un error que impedía mostrar el enlace a la edición de un CPE en la ficha del mismo cuando no se encontraba monitorizado.
* Se ha corregido la vista `Host-groups` para mostrar los estados correctos y los enlaces para ver los equipos de cada estado.
* Se ha corregido un error que podía provocar la duplicidad de filtros `type:host` en el cuadro de búsqueda.

### Rubik

**Corrección de diversos errores**:

* Se ha corregido un error en el cambio de estado de un servicio al intentar pasarlo a completado o baja del operador PTV.
* Se ha habilitado la opción de mostrar estados transitorios dentro de los servicios, inhabilitando los botones de cambio mientras se encuentre en este estado.
* Se ha corregido la ordenación de tickets en Rubik.

## Febrero 2023

### Krill

**Algunas mejoras**:

* Añadimos un nuevo fabricante a la monitorización del core: TelcoSystem
* Se ha optimizado el motor de base de datos para mejorar los tiempos de respuesta

**Corrección de diversos errores**:

* Se ha corregido el servicio de chequeo de ficheros abiertos de Asterisk
* Se ha corregido un error que impedía realizar determinadas búsquedas de equipos y servicios.
* Solucionado un error que provocaba que no se actualizara la fecha de modificación al hacer cambios en un CPE.
* Solucionado un problema que podía impedir que se generaran correctamente automáticamente las credenciales PPP en entornos mono-kiwi.
* Corregido un error que podía provocar una excepción al intentar desprovisionar un CPE de tecnología Ethernet.
* Corregido un error que impedía filtrar métricas por valores negativos.
* Solucionado un error que impedía mostrar correctamente el servicio y el modelo con el que se provisiona un equipo en OLTs Huawei en la vista Technology de un CPE.
* Solucionado un error que hacía que se devolviera una excepción al intentar realizar una petición CWMP Info a un CPE en estado DOWN.

### Krill-GPON

**Algunas mejoras**:

* Nueva integración de OLTs CData.

**Corrección de diversos errores**:

* Se ha corregido un error que podía provocar desfases horarios en las fechas relacionadas con las concesiones PPPoE de Radius.

### Krill-UI

**Algunas mejoras**:

* Se ha optimizado la vista móvil para equipos de core.
* Se ha adaptado al móvil las vistas de resultados de búsquedas de equipos y servicios, y la ficha de los equipos para optimizarla al tamaño de los dispositivos.
* Se ha añadido una nueva columna en el listado de equipos y servicios con la fecha desde el último cambio de estado.
* Se ha añadido a la ayuda el nuevo módulo de Logger

**Corrección de diversos errores**:

* Se ha corregido la búsqueda de contextos dentro del módulo de PBX.
* Se ha corregido un error que impedía seleccionar como idioma de la PBX francés, alemán o italiano.
* Se ha corregido la acción de recheck dentro del listado de equipos y servicios.
* Se ha corregido un error que impedía cambiar el número de elementos por página en la vista matrix.
* Se ha corregido un error que impedía que se mostrara el Uptime de un equipo en determinados casos.
* Se ha corregido un error que provocaba que se perdieran las búsquedas al cambiar a la vista de WorldMap.
* Se han corregido algunos de los filtros de las vistas API Reports y Admin logs del módulo Logger.

### PBX

**Algunas mejoras**:

* Se ha añadido la opción de poder generar o actualizar un recepcionista sin fijar un horario.

**Corrección de diversos errores**:

* Solucionado un error que podía provocar un error al intentar actualizar una Queue o un Group de una PBX existente.

## Enero 2023

### Krill

**Algunas mejoras**:

* Optimización en la ejecución de tareas asíncronas
* La WANMAC se calculará de forma automática para equipos Nucom.
* Se ha cambiado el algoritmo de seleccion de BRAS para soportar más de uno sobre una misma shared network.
* Añadido nuevo notificador para la aplicación móvil que próximamente estará disponible en el PlayStore de Android y el AppStore de iOS.
* Se ha añadido a la documentación de la API, la entrada /api/v2/isp/cpe-profiles
* Se han reincorporado los comandos de DOCSIS al ISP-CLI.
* Se ha actualizado la agrupación de datos históricos de las métricas de determinados servicios.

**Corrección de diversos errores**:

* Corrección de un error que podía provocar que los certificados SSL no fueran renovados de manera automática.
* Corregido un error que provocaba de forma eventual saturaciones en la cola del RabbitMQ.
* Se ha corregido un error que impedía el selector de direccionamiento y que impedía también que se mostraran correctamente los accountings cuando un equipo estaba en modo dhcp + radius.
* Se ha optimizado el tamaño de los JSON que devuelve la API para la parte las peticiones de monitorización (/api/v2/monitoring/*).
* Se han corregido las falsas alarmas por valor dentro de los umbrales para los Switch.
* Se ha corregido un error que impedía que se pudiera reiniciar el FreeRadius tras realizar cambios en un CPE.
* Se ha corregido un error que impedía que se enviaran las notificaciones de un CPE al que se le había marcado el envío de éstas.

### Krill-UI

**Algunas mejoras**:

* Se ha optimizado la carga de datos de servicios en la ficha de los hosts.
* Se han añadido nuevas traducciones referentes a los estados en las vistas de trouble-tickets.
* Se ha añadido un nuevo módulo que permite ver el log de peticiones vía API y vía panel de administración, con toda la información relativa al usuario, IP, cambios realizados, etc.
* Se ha integrado la guía de usuario de Krill en la interfaz de usuario, a través de un icono de ayuda en la esquina superior derecha.
* Se ha habilitado el buscador general en la vista de sesiones PPPoE del módulo Radius.
* Se ha añadido la opción de poder especificar el rango de fechas inicial para las métricas de host o servicios. Por defecto está establecido a las últimas 6 horas.

**Corrección de diversos errores**:

* Se ha corregido la magnitud de la leyenda en la gráfica de ancho de banda de la ficha de los CPEs.
* Corregido un error al hacer click sobre la lista de trouble-tickets.
* Se ha corregido el paginador en la lista de trouble-tickets.
* Se ha corregido un error que podía impedir que aparecieran los botones de Ack / Downtime en la ficha de los hosts.
* Se han recuperado las acciones y la información de registro en equipos Bitstream.
* Se ha corregido un error que impedía que se recuperaran las métricas de los servicios correctamente al cambiar entre los diversos servicios de un host.
* Se han eliminado los números móviles de la lista de selección de extensiones válidas para los grupos, colas, ddis, recepcionistas, etc.
* Se ha corregido un error que impedía que se pudieran realizar búsquedas en la vista de holidays, cdrs y contexts.

### Rubik

**Algunas mejoras**:

* Se ha añadido la integración con PTV como nuevo operador mayorista en Rubik.

### Krill-DOCSIS

**Corrección de diversos errores**:

* Se ha disminuido el tiempo de polling para calcular el ancho de banda de las CMTS.
* Se ha corregido un error en el polling de las CMTS que podía provocar memory-leaks.

## Diciembre 2022

### Krill

**Corrección de diversos errores**:

* Solucionado un bug que impedía que un CPE con remote_id definido en Kiwi no cogiera la ip por DHCP que le correspondía.
* Corregido un error que provocaba el envío de alarmas por el estado de las interfaces de las ONTs en Calix

### Krill-GPON

**Corrección de diversos errores**:

* Se ha corregido el valor del estado devuelto de algunas ONTs cuando éstas están offline para OLTs Fiberhome.
* Se ha corregido el mensaje devuelto al intentar realizar un Factory-reset vía OMCI a ONUs que no son compatibles con este método.
* Se ha mejorado la provisión por perfiles para equipos Uplink.
* Se ha corregido un error que provocaba un mensaje de error cuando no había conectividad con ninguno de los equipos de un PON al solicitar el estado de éste.

### Krill-UI

**Algunas mejoras**:

* Se añade al panel de IPs aquellas que vengan en el servicio info de los CPEs dentro de su ficha.
* Se añade el histórico de peticiones vía API a la ficha de los CPEs.
* Se añade al panel de IPs aquellas que vengan por SNMP en la ficha de los hosts
* En la vista technology de los hosts se añade una columna para mostrar los paquetes corregidos y los paquetes KO tanto en subida como en bajada.
* Se añade la columna PPPoE Username a la vista matrix
* La vista matrix ya no muestra resultados si no hay una búsqueda válida, y en su lugar sugiere los filtros almacenados en favoritos y las últimas búsquedas realizadas.

**Corrección de diversos errores**:

* Al cambiar entre módulos ahora se resetea el cuadro de búsqueda para evitar resultados inesperados.
* Corregida la exportación de CSV en la vista matrix
* Se ha corregido un error que impedía que se mostrara correctamente seleccionado el país y la localidad de un CPE.

### Rubik

**Corrección de diversos errores**:

* Se han corregido y añadido nuevas traducciones para facilitar los mensajes mostrados en las vistas de alta y edición de servicios

## Noviembre 2022

### Krill

**Algunas mejoras**:

* Mejorado el sistema de auto-renovación de certificados SSL
* Monitorización de los servicios de los PTPs.

**Corrección de diversos errores**:

* Se ha corregido el mensaje devuelto si no se puede realizar una desprovisión de un CPE.

### Krill GPON

**Algunas mejoras**:

* Se ha añadido Televés a la monitorización en tiempo real del estado de un PON.
* Se añade la monitorización y provisión de equipos Uplink/Vsol.

**Corrección de diversos errores**:

* Corregido un error en el formateo de fechas para algunos equipos a la hora de mostrar el estado del PON.
* Corregido un error a la hora de devolver valores ópticos nulos para Calix.

### Krill-DOCSIS

**Algunas mejoras**:

* Se ha mejorado la monitorización de equipos DOCSIS.

### Krill-UI

**Algunas mejoras**:

* Se ha añadido la característica de modificar el estado de internet, acceso, VoIP externo y habilitar notificaciones desde el listado de CPEs.
* Se añade un nuevo meta-buscador desde el menú lateral de la UI, que lanza búsquedas en paralelo en distintos apartados de Krill para facilitar y optimizar las búsquedas. Se irán añadiendo nuevos apartados de búsqueda más adelante.
* Detección del tipo de búsqueda (host o servicios) basado en el resto de criterios utilizados.
* Ahora se obtiene la dirección de un CPE a partir de la de su customer si el CPE no tiene ninguna.
* Optimización de la ficha para equipos de core que tienen gran cantidad de servicios.
* Optimización de la ficha para todo tipo de equipos desde dispositivos móviles.
* En la vista SmartTree ahora se puede ocultar el panel de información, si no se quiere, pulsando sobre el botón de la barra de título del mismo.

**Corrección de diversos errores**:

* Corregidos los filtros y la ordenación de resultados basados en métricas (perfdatas).
* Corregido un problema que impedía que se mostrara la tabla de eventos de un host, si éste contenía una fecha inválida en la ficha de equipos.
* Se ha corregido la búsqueda por host/servicio en el vista de histórico.
* Se ha corregido un error que impedía que se actualizaran algunos atributos tras borrar su valor en la edición de clientes y cpes.
* Corregido un error que impedía mostrar todos los resultados a la vez, tras seleccionar `todos` en el desplegable de elementos por página en el listado de PBXs.
* Corregido un problema que hacía que el listado de días festivos y contextos se solaparan por encima de la barra de herramientas al hacer scroll.
* Corregido un problema que impedía que se volviera a solicitar los elementos tras cambiar el número de elementos por página en la vista de CDRs.

### Rubik

**Algunas mejoras**:

* Se han añadido textos y traducciones para todos los atributos que se mostraban en el sumario previo a la creación de servicios.

**Corrección de diversos errores**:

* Corregido el mensaje de confirmación de creación de servicios.
* Corregido un problema que impedía que se obtuvieran resultados en la búsqueda de direcciones tras eliminar alguno de los valores de los desplegables de dirección en el formulario de creación de servicios.

## Octubre 2022

### Krill

**Algunas mejoras**:

* Mayor agilidad de respuesta en los cambios del DHCP y Radius ante cambios en la parte administrativa
* DHCP: Posibilidad de asignar más de una IP Fija tras una ONT Bridge
* Krill-ACS: Se ha reducido el tiempo de expiración de los flags de reinicio, factory-reset, etc.
* Se añaden los servicios `dhcp-config`, `freeradius-config` y `asterisk-config` a los servicios monitorizados por el servidor.

**Corrección de diversos errores**:

* Solucionado un problema que impedía en determinadas ocasiones la des-autenticación de sesiones PPPoE tras cambios en Kiwi.

### Krill-GPON

**Algunas mejoras**:

* Se ha parametrizado el uso de IGMP para el servicio de IPTV
* Cuando se define un service-port válido tanto para acceso a internet como para VoIP, y el ISP/CRM marca el acceso a internet como deshabilitado, Krill sólo ha de armar el SP correspondiente si es para el servicio de telefonía.
* Se ha actualizado el sistema de monitorización de ONUs y permite detectar caídas masivas para dotarlo de una mayor estabilidad.

### Krill-WiMAX

**Corrección de diversos errores**:

* Ahora se inyectan correctamente las variables de id de registro y host de registro para equipos WiMAX.

### Krill-UI

**Algunas mejoras**:

* Se ha mejorado la búsqueda y se han añadido nuevas columnas a la vista Matrix.
* Se ha mejorado el filtro de búsqueda de equipos registrados a una OLT/CableModem en diversas vistas.
* Se ha modificado la visualización del listado de modelos en el formulario de edición de equipos.
* El campo `Fixed Address` ahora es dependiente del `Address Profile` y se ha eliminado el check de dynamic/fixed.
* Se han reordenado las columnas de la tabla de POTSes y se ha establecido un ancho mínimo para facilitar su lectura.
* Los cambios que afectan a los equipos desde la parte administrativa (Customer/ISP) ahora se muestran en tiempo real en la parte de monitorización.
* Se ha aumentado el número máximo de resultados a mostrar, indicando con un mensaje si hubiera más equipos con la búsqueda actual.
* Se ha añadido un sumario en la parte inferior del mapa con el número total de equipos que se están mostrando en pantalla, frente al total de equipos que coinciden con la búsqueda actual.
* Se añade a la vista CPE-Profiles el número total de equipos que tiene cada perfil.
* Se añade a la vista CPE la funcionalidad para editar de forma masiva los atributos: Activo, Acceso, Enable-Notifications y External-VoIP.
* Se ha añadido el esquema de la PBX al módulo de PBX.

**Corrección de diversos errores**:

* Se ha corregido un error que provocaba discrepancias entre el número de ONTs que se mostraban en la ficha monitor de una OLT y el comando show-onus del CLI.
* Se han corregido los colores de algunos estados en la vista de histórico del módulo de monitorización, así como el filtro de estados.
* Se ha corregido el formulario de edición de CPEs para evitar el error que impedía el cambio de velocidad de cable-modem y equipos de tipo Ethernet.
* Se ha eliminado la agrupación de marcadores en el nivel máximo de zoom para facilitar su visualización.
* Se ha corregido la regla de validación de MACs de la ficha de edición y creación de CPEs para permitir insertar valores con el formato 6c:44:2a:eb:a9:a1.

## Septiembre 2022

### Krill

**Algunas mejoras**:

* Nuevo diseño de notificaciones por email

**Corrección de diversos errores**:

* Se han corregido algunos comandos de Core en ISP-CLI
* Se ha corregido la monitorización de Switches CRS de Mikrotik
* Se han restaurado las gráficas de ONUg por OLT e ITFS de los equipos de Core.
* Se ha corregido un error que provocaba que no se identificaran correctamente algunos Hosts al recibir un trap y por tanto a la hora de notificar aparecieran como Unknown.

### Krill-GPON

**Algunas mejoras**:

* Se ha añadido la configuración de VoIP vía OMCI para ONTs FiberHome

**Corrección de diversos errores**:

* Se ha solucionado un problema que provocaba la aparición de algunas ONTs inexistentes en OLTs de Calix
* Se ha corregido la provisión de equipos ya existentes en OLTs de Calix
* Se ha solucionado un problema que impedía cargar la información de las OLTs de Calix

### Krill-UI

**Algunas mejoras**:

* Tareas por lotes para CPEs en ISP (cambio de line-profile)
* Se ha mejorado la información relacionada con las IPs en la ficha de monitorización de Hosts.
* En la vista World-Map ahora se permite alternar entre el nombre del Host y el nombre del cliente (solo para equipos de tipo CPE)
* Se ha mejorado la sugerencia de canales wifi (para redes de 2.4 y 5 GHz) en el diagnóstico de Site-Survey en la ficha de CPEs.
* Se ha reducido el número de peticiones para obtener la inforamción CWMP de un equipo en su ficha.
* Las búsquedas por defecto se realizan de tipo Host, añadiéndose la opción de alternar entre Host, Servicios y todos los resultados.
* Se han añadido columnas que no habían sido migradas de Krill 1 a la vista Matrix y se ha optimizado la información que se muestra en ella.
* La información de estado, mensaje de salida y métricas ahora son en tiempo real en los resultados de búsqueda.
* El visor de Estado de un PON ahora muestra qué equipos se están monitorizando y cuales no.
* Se ha añadido la opción de añadir el line-profile en el formulario de creación de CPEs.
* La búsqueda de CPEs solo se realizará al pulsar `Enter` o bien pulsando sobre el botón de Buscar.
* A la hora de crear un POTS y éste de error, ahora muestra el motivo exacto por el que no se puede crear.

**Corrección de diversos errores**:

* Se han corregido las gráficas en tiempo real (y añadido la de QoS) para las fichas de equipos Docsis.
* Se ha corregido el filtrado de la vista Host-Groups a l ahora de mostrar los equipos de un tipo determinado (visto para los Hostgroups de tipo Realm).
* Se ha corregido un problema que impedía guardar algunos cambios realizados en una PBX.

## Julio 2022

### Krill

**Algunas mejoras**:

* Se ha añadido la posibilidad de autenticar a través de cuentas de empresa de Google Suite
* Se ha modificado la autencicación de la API/UI para que use JWT
* Se ha mejorado la velocidad en las búsquedas en entornos con una gran cantidad de equipos monitorizados.
* Se ha solucionado un error en nuestra PBX, que impedía que a los clientes que pulsaban una opción no contemplada por la centralita, fueran devueltos en el flujo al comienzo de la locución principal para poder escucharla de nuevo.

### Krill Monitoring UI

**Corrección de diversos errores**:

* Se ha corregido un problema que impedía la recuperación de los enlaces personalizados en la ficha de los equipos.
* Se ha corregido el mensaje de error que aparecía al pulsarle en el botón `Reprovision` en la ficha de un equipo.
* Se han corregido las respuestas de los CWMP Info que se realizan en la ficha de equipos.

### Krill PBX UI

**Algunas mejoras**:

* Se ha corregido un error que provocaba que los datos no se cargaran correctamente al cambiar de Realm (en entornos multi-realm).

### Krill WebService (API)

**Algunas correcciones**:

* Se han corregido las reglas de validación de S/N para evitar valores nulos o no hexadecimales.
* Se ha corregido la validación para evitar CLIs duplicados
* La actualización de POTSes ya no devuelve los errores que aparecían en algunas ocasiones.

### Krill Core

**Algunas mejoras y correcciones**:

* Se ha solucionado un error que impedía que los recursos de determinados servicios reportaran estados de `warning` o `critical`.

### Krill GPON

**Algunas correciones y mejoras**:

* Se ha añadido la opción de marcar un equipo o una OLT entera para que no haga acciones de auto-provisión, re-provisión o des-provisión, para entornos configurados de forma manual y con parámetros especiales.
* Se ha añadido Calix y FiberHome a la lista de OLTs que son capaces de provisionar mediante Krill.
* Se ha homogeneizado la salida de los `cpe_info`
* Se ha corregido un error se que provocaba al realizar un `factory-reset` en ONUs de distinto fabricante al de la OLT donde estaban provisionados.
* Se ha solucionado un error al tratar de obtener un `cpe_info` de un equipo cuando la OLT donde estaba provisionado no respondía a PING.

### Krill DOCSIS

**Algunas mejoras**:

* Se ha añadido la capacidad de configurar `service-flows` usando nomenclatura FQDN sin tenerque usar direcciones IP.
* Se ha mejorado la monitorización y graficación de las métricas de determinados CableModem.

### Krill WiMAX

**Algunas mejoras**:

* Se ha corregido un error que se provocaba al tratar de obtener información de los STAs de algunos APs.

## Mayo 2022

### Krill

**Algunas mejoras**:

* Se ha optimizado el tiempo de respuesta para bases de datos con gran volumen de equipos.

**Algunas mejoras**:

* Se ha añadido la opción de filtrar los equipos por contact-groups (cómo lo hacía Krill 1).
* Se han actualizado los tokens de búsqueda y añadidos nuevos para compatibilizar con el nuevo motor de bbdd IcingaDB.

### Krill Monitoring UI

**Corrección de diversos errores**:

* Se ha corregido un fallo que impedía que se mostrara correctamente la barra de herramientas de la ficha de un equipo en vista móvil.
* Se ha corregido el filtrado por host-name de la vista histórico de estados.

### Krill Oratio UI

**Corrección de errores menores**:

* Se ha corregido el auto refresco de datos en la vista sesiones de radius.

### Krill ISP UI

**Nuevas características y correcciones**:

* Se ha añadido un marcador al tratar de crear, actualizar o eliminar elementos para evitar errores de peticiones duplicadas.
* Se ha añadido la funcionalidad de poder eliminar un Cliente
* Se ha corregido un error que provocaba que los datos no se cargaran correctamente al cambiar de Realm (en entornos multi-realm).

**Nuevas características**:

* Se ha añadido la opción de poder buscar los hosts por su ID, independientemente de la longitud que éste tenga.
* Se ha añadido una regla de validación para los CLI y los labels de los POTSes que impide que se escriban más de 16 carácteres.
* Se ha añadido en el cuadro de diálogo de nuevo CPE, el ID y el external-ID en el listado de clientes para facilitar su búsqueda.

**Algunas correcciones**:

* Se ha corregido un problema que impedía que se visualizaran correctamente las banderas de los idiomas seleccionados en los POTSes.

### Krill PBX UI

**Algunas mejoras**:

* Se ha añadido en el cuadro de diálogo de nuevo CPE, el ID y el external-ID en el listado de clientes para facilitar su búsqueda.

## Abril 2022

### Krill

**Algunas mejoras**:

* Se ha añadido información de registro a los dispositivos WiMAX
* Se ha incluído la monitorización de dispositivos de tipo Relay de la marca Tycon.
* Se ha añadido la monitorización de EDFAs.

**Algunas correciones**:

* Se ha corregido un error en algunas gráficas de tipo ITFS que no se mostraban correctamente.
* Monitorización de los servicios `voice` de los equipos con telefonía.
* Monitorización del BGP Peers, que en ocasiones mostraba un error al ejecutarse el check.

### Krill Monitoring UI

**Nuevas mejoras**:

* Se ha añadido un nuevo icono identificativo para los equipos de tipo Relay en la ficha de hosts.
* Se ha modificado el filtro de `Sin localización` de la vista SmartTree.
* Se ha añadido una barra de herramientas con la paginación en la parte inferior de todas las vistas que tengan tablas de datos.

**Corrección de diversos errores**:

* Se ha corregido el enlace al visor de CDRS desde la ficha de CPEs.
* La vista de diagnósticos de los CPEs deshabilitará aquellos que no sean compatibles con el modelo de éste para evitar que se puedan ejecutar.
* Los logs que se veían en el timeline de los equipos a veces no se mostraban correctamente cuando había eventos sobre éste.

### Krill Rubik UI

**Algunas mejoras**:

* Se ha añadido una barra de herramientas con la paginación en la parte inferior de todas las vistas que tengan tablas de datos.

### Krill ISP UI

**Nuevas características**:

* Se ha añadido una regla de validación para evitar duplicidad de CLIs en el listado de POTSes de un CPE.
* Se ha añadido la opción de crear un cliente desde la pantalla de creación de un CPE así como un selector de perfil de velocidad.

**Algunas correcciones**:

* Se ha corregido la regla de validación relativa a la MAC para crear o modificar CPEs.
* Se ha corregido el enlace a la ficha del CPE desde la vista de edición de CPEs.

### Krill Installer UI

**Algunas mejoras**:

* Se ha corregido el enlace a la ficha del CPE desde el listado de seguimiento de instalación.

### Krill ACS

**Algunas correciones**:

* Se ha corregido un error que provocaba errores al solicicitar información CWMP en CPEs Mikrotik.

### Krill DOCSIS

**Algunas mejoras**:

* Ahora las plantillas de flujo de servicios usan FQDN en vez de la dirección IP.

## Marzo 2022

### Krill

**Algunas correciones y mejoras**:

* Se ha añadido la información del servicio `backup` a los PTPs.
* Se ha corregido un error que provocaba discrepancias entre el business-impact de los host/servicios y su `display_name`.
* Se han corregido diversos errores menores en varios checks y sistemas de monitorización.
* Se han actualizado los checks de oratio (para el servicio de Radius) y asterisk (para los servicios de Voice).

### Krill UI

**Nuevas características**:

* El cuadro de diálogo de cambios de versión, se abre de forma automática para mostrar las novedades, siempre que se detecta una nueva versión de la aplicación.

### Krill Monitoring UI

**Nuevas mejoras**:

* Se han añadido las columnas DnBw y UpBw en la vista matrix
* Las gráficas de ancho de banda de Interface muestran una línea en el valor 0 para separar el tráfico de subida y bajada.
* En el timeline de un Host ahora solo se puede realizar Zoom si se habilita la opción que se ha añadido en su barra de opciones.
* La barra de opciones principal de un Host, ahora se queda fija en la parte superior cuando se hace scroll sobre la ficha.
* Los hosts muestran las IPs obtenidas a traves de CWMP en la ficha.
* El timeline de los hosts ahora muestra los eventos de provisión de tipo GPON.
* La tabla de la vista matrix se ha adaptado mejor a pantalla completa.
* Las títulos de las cajas de cada host-group dentro de su vista, ahora te llevan a la búsqueda de equipos de ese tipo.
* Se han añadido las IPs de los CPEs obtenidas vía CWMP a la lista de la ficha monitor de un CPE

**Corrección de diversos errores**:

* Apertura de un cuadro de diálogo informativo al mover el rango de fechas del timeline de un Host.
* Las IPs provenientes de CWMP en ocasiones no se mostraban correctamente en la ficha del Host.
* Los valores `ups`, `nas`, `subnet`, `device` e `icmp` del filtro de búsqueda `host-group`.
* Los enlaces para mostrar todos los elementos de los Widgets de problemas de host y servicios, histórico y notificaciones.
* El color del estado `down` dentro de la vista histórico de la ficha de los equipos.
* Se ha corregido la visualización de:
    - Datos administrativos de un CPE (nombre del cliente)
    - Modelo y marca del Host

### Krill Oratio UI

**Corrección de errores menores**:

* Se ha añadido una etiqueta a los botones de IPs y Sesiones duplicadas en la lista de sesiones activas de Oratio.

### Krill ISP UI

**Nuevas características**:

* Se ha desactivado la actualización automática de POTS de los CPE y se ha habilitado un botón para guardar los cambios detectados.
* Se ha añadido el nombre completo de los clientes en el listado de CPEs.
* Se ha añadido un desplegable para mostrar/ocultar columnas en el listado de CPEs.
* Los distintos perfiles muestran valores para "humanos" en el listado de CPEs.
* La regla de validación de serial numbers para equipos de GPON ahora depende de una variable de inventario.
* Se ha añadido el nuevo módulo ISP que permite la creación, modificación y eliminación de:
    - CPE Profiles
    - Clientes
    - CPEs
    - Contextos de PBX
  
### Krill ISP-Cli

**Nuevas características**:

* Se ha añadido la opción de lanzar una recarga de OLTs, pones y CPEs con el comando `snapshot` desde `ispcli`.

### Kiwi

**Algunas correcciones**:

* Se ha corregido el formato de salida de la api para
    - `/api/v2/monitoring/hostgroups`
    - `/api/v2/monitoring/location/summary`
  

* Se ha eliminado la opción de crear y eliminación de POTS vía API, ya que éstos se generan automáticamente al crear un CPE con puertos de telefonía.

### Krill WebService (API)

**Algunas correcciones**:

* Se ha corregido un error que podía provocar que se macharan los POTS de un usuario si éste tenía más de una PBXv.

### Krill Core

**Algunas mejoras**:

* Se ha añadido la monitorización de los servicios de `radio` y `setup` para los PTPs Mimosa.
* Se ha añadido la monitorización de los Peers BGP de los routers
* Se ha eliminado la limitación de velocidad a nivel de NAS cuando se ha establecido en la propia OLT.

### Krill GPON

**Algunas correciones y mejoras**:

* Se ha mejorado la graficación en tiempo real del ancho de banda de los CPEs.
* Se ha corregido un error que afectaba a clientes sin CaTV haciendo que el servicio TxRx apareciera en estado desconocido.
* En ocasiones se sobreescribieran los mementos con datos antiguos.
* Las discrepancias entre los datos del memento y la realidad en los service-ports podían provocar que el patcher fallara.
* Algunos errores en las gráficas de ancho de banda de los CPEs
* El mensaje de error cuando un provisionador no puede borrar una ONU (en Huawei).

### Krill WiMAX

**Algunas mejoras**:

* Se ha corregido un error del check de los servicios `downstream` y `upstream` referente al cálculo de los valores de las métricas `dnairtime` y `upairtime`.

## Febrero 2022

### Krill

* Se han corregido diversos errores menores en varios checks y sistemas de monitorización.
* Corregido un error en el sumario de localizaciones que podía provocar inconsistencia de datos con respecto a la búsqueda de problemas.
* Corregido el formato de salida del estado de los hostgroups para compatibilizarlo con el nuevo modelo de datos.

### Krill UI

**Nuevas características y correccion de errores menores**:

* Se ha añadido un resumen de cambios del último mes en la pantalla de cambios de versión.
* Se ha corregido un error que provocaba que en ocasiones al cambiar de pestaña de dashboard no se cargara correctamente la configuración de algunos widgets.

### Krill Monitoring UI

**Nuevas características y correccion de errores menores**:

* En la vista Sonar, se ha añadido un panel informativo con los estados de hosts y servicios, así como la ubicación geográfica de los mismos.
* Se ha corregido el orden de localizaciones por número de problemas en la vista Sonar.
* Se ha corregido la información del cliente en la ficha de los CPEs.
* Se han añadido a la vista WorldMap equipos que contienen problemas de servicios.
* Se ha establecido una búsqueda por defecto en las vistas de world-map y smart-tree: `hostgroup:core business_impact:&gt;=2`.
* Al acceder a la vista sonar, se borra la búsqueda general
* Se ha añadido el histórico de cambios de estado en el timeline de los equipos tanto para el host como sus servicios.
* Se ha añadido un panel con información relevante a la localización pulsada de la vista sonar, con detalle de equipos/servicios con problemas.
* Se han añadido marcadores en el mini-mapa del panel informativo de la vista sonar para aquellos equipos con problemas propios o de sus servicios.
* Se ha corregido un error que provocaba que los cambios realizados en la configuración de los widgets de típo gráfica no se guardaran correctamente.
* Se ha corregido un error en el filtro de `duration` (duración desde el último cambio de estado) en el cuadro de búsqueda.
* Se ha corregido una incoherencia de colores respecto a los estados en el panel informativo de las localizaciones de la vista Sonar.

### Krill Oratio UI

**Corrección de errores menores**:

* Se ha añadido un mensaje explicativo en el Widget de IP Pools en caso de que no haya Pools disponibles en la red.

### Kiwi

**Algunas correcciones**:

* Se ha añadido la opción de poder editar el Serial Number de un CPE GPON, si éste no existe.
* Se ha corregido un error que podía provocar que no se cargara correctamente el panel de administración.

### Krill Core

**Algunas correciones de errores**:

* Se han corregido diversos checks relativos al core.
* Se ha corregido un error del check de generación de backup de Mikrotik que podía provocar un error al crear el backup.
* Solucionada falsa alarma por caída de tráfico en Mikrotik

### Kraken Kitchen

**Algunas correcciones**:

* Corregido error que hacía que no se modificara la configuración del DHCP al cambiar el `remote_id` de un CPE.

### Kraken Radius Accounting

**Algunas correcciones**:

* Se ha corregido un error que hacía desaparecer información de accountings en la ficha de los equipos.

## Enero 2022

### Krill

* Se han corregido diversos errores menores en varios checks y sistemas de monitorización.
* Check del Mikrotik que obtiene su versión del OS.
* Relación de dependencia entre los CPEs y sus hosts de registro
* Refactorización de los datos administrativos almacenados en el sistema de monitorización.
* BackUp de configuración de los APs Ubiquiti.
* Monitorización de los Peers BGP para Netengine Huawei.
* Se ha solucionado el acceso a los enlaces de los equipos vía proxy.
* BackUps APs.
* Monitorización de ITFS en los PTPs.
* Polling de CPEs para las diveras tecnologías (GPON, WiMax, etc)
* Monitorización de HostAlive solo en redes con `monitor=false`.
* Ampliación de la frecuencia de chequeo del APT a 1 día.
* Añadido percentil 95 para las métricas de ancho de banda de los ITFS.
* Kraken-Kitchen.
* Backup de Mikrotik.
* Radius Accounting.
* SIP Peers (Asterisk).
* Asterisk DDIs conf.
* Se ha añadido la monitorización por ICMP de los NAS que no forman parte de Core.

### Krill UI

**Nueva ventana de changelog**:

* Nueva ventana de changelog, accesible desde el número de versión de la barra de herramientas inferior, con información detallada de todos los módulos. (Actualmente 3 últimos meses).

**Optimizaciones de código**:

* Refactorización de los atributos de configuración persistentes de cada usuario.

### Krill Monitoring UI

**Nueva característica**:

* Añadida una columna con el tiempo desde el último cambio a la vista Matrix.
* Se refactorizó la configuración del usuario para la implementación de una API que la guarda y recupera.
* Añadidos nuevos iconos a IPTV y CATV en la vista Host.
* Adaptado los nuevos atributos de cpes.
* Nueva traducción para flapping.
* Arreglada superposición de la barra de mensajes de conversaciones.
* Lista de IP en la vista del monitor host, ahora detecta la URL de los enlaces del Host.
* Se agregaron enlaces de Host en el menú de acciones de la parte superior derecha de la vista de Host.
* Se agregaron direcciones IP PPPoE a la vista de la pestaña Host Monitor.
* Fecha de expiración agregada en la vista de `/all` los hosts.

**Optimizaciones de código**:

* Se ha corregido el selector de servicios del host en la vista movil.
* Se ha añadido un indicador de carga en la vista de Host-groups
* Solucionado el enlace de la información de registro en la vista del host.
* Arreglado un error en la vista Host que afectaba a la información administrativa de un host.
* Se ha optimizado la generación de enlaces de los equipos en base a su marca, modelo y especificaciones de la red.
* Se eliminó el enlace a la vista de radius en el menu del módulo `monitoring`. La vista ahora depende del módulo de la aplicación `oratio`.
* Corregido el error que mantenía el cuadro de diálogo de confirmación de la acción visible después de presionar el botón `Sí, estoy seguro` en la vista de la pestaña del monitor del host.
* El cuadro de diálogo en la vista host monitor, ahora se cierra cuando finaliza la acción.
* Se corrigió cuando cualquier padre o formato no válido para los padres está presente.

### Krill Oratio UI

**Nuevo complemento para el panel de control**:

* Se ha añadido un mensaje de alerta cuando no existen POOLs de IPs.

### Kiwi

**Algunas correcciones**:

* Auto inserción de equipos en la parte de monitorización desde el ISP.

### Krill ACS

**Algunas correciones**:

* Comportamiento de las sesiones de reporte TR069.
* Diagnósticos de equipos por TR069.
* CPE/tecnología falla cuando kiwi es diferente de krill.

### Krill GPON

**Algunas correciones y mejoras**:

* Ahora la provisión permite como filtro una OLT
* Nuevas notificaciones por pérdida óptica de uno o más clientes configurable mediante umbrales
* Validación de alarmas de PON por pérdida de ONUs.
* Monitorización de RX para determinadas tarjetas.

## Diciembre 2021

### Krill UI

**Nuevas características**:

* Posibilidad de copiar / mover widgets entre Dashboards, a través de las opciones del modo edición de Dashboards.
* Panel de control adaptado a modo responsivo.
* Ahora el usuario puede personalizar su dashboard.
* Modo responsive a los cuadros de diálogos de los widgets.
* Ahora al hacer clic en el icono de phicus o en KrillUI es renderizado al tablero.
* Los widgets disponibles en el tablero ahora verifican su atributo múltiple y existencia en el tablero actual.

**Algunas correciones**:

* Correción en los marcadores y en el historial de busqueda
* Correción de algunos fallos en las funciones del historial de búsqueda.
* Correción de algunos fallos en las funciones del historial de búsqueda.
* Se cambiaron las referencias de Trivial a Smart Tree.
* Corregida la traducción del título del widget de bienvenida

### Krill Monitoring UI

**Nuevas características**:

* Nuevo widget para mostrar métricas de cualquier host/servicio
* Añadido número de host/servicios caídos o críticos con business-impact &gt;= 2 en el menú lateral.
* Añadida la fecha de expiración de CPEs en la vista `/monitoring/all`.
* Añadidas las IPs vigentes de radius/PPPoE en el bloque de IPs de la ficha de un CPE.
* Check_command oculto para usuarios diferentes a phicusadmin
* En el menú de la barra lateral ahora se muestra una insígnia con el número total crítico de hosts y servicios.
* Se agregó un nuevo widget para gráficos.
* Añadida información de ubicación a la vista matrix.
* Ahora se muestran eventos de de desconexión de radius host en la línea de tiempo de la vista Host Monitor.
* Marcado como ack/downtime de la lista de hosts en la ubicación o host seleccionado en la vista de Smart Tree.
* Etiquetas en gráficos en tiempo real de ancho de banda y Tx/Rx en la pestaña Host Monitor.
* Se agregó más funcionalidad para expandir los gráficos en la vista de la pestaña Host y Servicios.
* Se agregaron algunas traducciones al último widget de notificaciones.
* Añadido menu de atajos en la vista de inicio de monitorin
* Añadidas algunas traducciones a los widgets.

**Algunas correciones**:

* Cambiados algunos menús de la barra lateral.
* Refactorización de alguna traducción en el panel de monitoring
* Se modificó el ícono para el host de tipo Nas.
* Al hacer doble clic en el host, ahora se abre la URL correcta en una nueva ventana.
* Se cambió el color de los estados inalcanzables en la vista sonar.
* Se corrigieron problemas gráficos menores en la vista SmartTree
* Algunas traducciones corregidas en la vista Smart Tree.
* Se cambió la ruta base para cada ruta establecida en /monitoring y se cambió Trivial a Smart Tree.
* Refactorización del comportamiento del gráfico de expansión en la vista de la pestaña Gráficos de host y servicios.
* Altura mínima establecida para la lista de servicios en la vista de servicios de host.
* Corrección de la altura mínima para los gráficos en el widget de resumen.
* Algunas lineas de código eliminadas.
* Refactorización del código de los widgets.
* Mejorada la vista all en modo móvil.
* Refactorización de código de las barras de herramientas.
* Habilitado el botón de cerrar cuando el cuadro de diálogo del estado de un Pon carga datos.
* Los botones Pon Status en la pestaña de servicio del host aparecen y desaparecen en cada actualización.
* Botón de pestaña de servicio deshabilitado cuando no hay servicios disponibles en la Vista de host.
* En la vista de grupo de hosts, se eliminó todo el resumen de hosts para aumentar la velocidad de carga.
* Ahora están todos los elementos en vista Matrix.
* Añadidas traducciones al widget de últimas notificaciones
* Corregido el que siempre se agregue la opción para programar el tiempo de inactividad de los hosts y los servicios aunque estén en buen estado.
* Se corrigió el cuadro de diálogo de estado del cierre de un Pon al hacer clic en su CPE.

### Krill Oratio UI

**Nuevo complemento para el panel de control**:

* Nuevo widget para mostrar el porcentaje de IPs libres/usadas de cualquier Pool seleccionado.
* Mejorado en modo responsivo las tablas de datos.

### Krill Rubik UI

**Algunas mejoras**:

* Añadido modo responsivo a las barras de herramientas en algunas vistas.
* Mejorado el modo responsive en las tablas de datos.
* Añadido un deslizador a la vista Inicio.

### Krill ISP UI

**Algunas mejoras**:

* Mejorado el modo responsive en las tablas de datos.

### Krill PBX UI

**Algunas mejoras**:

* Mejorado el modo responsive en las tablas de datos.

### Krill Installer UI

**Algunas mejoras**:

* En la Lista de CPE cuando no hay un perfil de CPE disponible, ahora esta información no se muestra.

### Krill WebService (API)

**Algunas correcciones**:

* Corregida la acción de reinicio desde la ficha de Shinken
* Los cambios en las PBX no lanzaban el playbook del asterik
* No se permitía dejar vacío el campo address_profile, ahora si

## Noviembre 2021

### Krill UI

**Algunas mejoras y correcciones**:

* Opción agregada para eliminar el tablero Capacidad de múltiples tableros y widgets para la vista de inicio principal de krill-ui.
* Se corrigió la creación, edición y eliminación de marcadores del usuario del buscador porque no se mostraban hasta la actualización.
* Se corrigieron algunos errores en la edición de marcadores de usuarios.
* Eliminados los tooltip en el modo responsivo.

### Krill Monitoring UI

**Nueva característica**:

* Se agregó la utilidad de expandir y contraer la lista de servicios en la vista servicios del host.
* Desplazamiento automático al servicio seleccionado en la vista de servicio del host.
* Añadidos algunos nuevos iconos para tipos de host en la vista de Host.
* En la vista Sonar, ahora solo muestra localizaciones con host
* En la vista Host Monitor, ahora se muestra en la línea de tiempo problemas del servicio TR069
* Añadido Tooltip para los long-output en la linea de tiempo de host y servicio

**Algunas mejoras**:

* Carga de velocidad mejorada en la vista Trivial.
* Carga de velocidad mejorada en la vista Sonar.
* La información de CWMP en la vista de la pestañana Tecnología de host, ahora se carga al inicio.
* Se modificó el botón de cambio de tamaño en la vista de sonar
* Refactorización y mejora de código.
* Se corrigió el cambio automático y repentino del servicio actual y de pestaña en la vista de servicios del host.
* Se corrigió el prefijo de IP de Huawei y Ubiquiti cuando el modelo no estaba disponible en la vista de Host Monitor.
* Pie de página de las gráficas, mejorado en la vista de pestaña Host Graph.
* Ahora descontamos los problemas de reconocimiento y tiempo de inactividad de los malos estados totales y, si todos son manejados,la ubicación está bien.
* Valores de rango de datos predeterminados establecidos para el día actual (de 0:00:00 a 23:59:59).
* Refactorización y mejora de código.

**Algunas mejoras y arreglos**:

* Se agregó información de intentos máximos a la vista Información del servicio del host.
* Corrección del filtro de gráficas para la pestaña de gráficas de servicio.
* Se corrigieron las etiquetas de estado en la vista del historial de la pestaña del servicio del host y se agregó la casilla de verificación Mostrar notificaciones.

**Algunos arreglos**:

* Devuelta la capacidad de búsqueda del navegador a la vista Smart Tree, manteniendo siempre el grupo de host: núcleo y tipo: host.
* Se agregaron IPs de Radius a la vista monitor del host.
* Se agregó bp:&gt;2 a la búsqueda predeterminada de la vista Smart Tree.
* Mostrar el tiempo de actividad del servicio en la vista de la pestaña de información del servicio del host.
* Filtro de CDR y enlace a CPE.
* Arreglar la búsqueda de World Map para agregar 'type = Host'
* Expansión de gráfico en la vista Gráficos de servicio de host

### Krill PBX UI

**Algunas mejoras**:

* Añadidas traducciones a la vista de Edición de PBX.
* Añadidas traducciones.
* Modo responsivo implementado.

**Algunas correciones**:

* Arreglado para evitar CLIps duplicados en grupos y colas.
* Corregidas algunas traducciones.
* Corregido el filtro de fechas de CDRs.

### Krill WebService (API)

**Algunas correcciones**:

* En los serializadores pbx, se creó un decoded jump serializador para swagger y se refactorizó el resultado de las opciones del recepcionista (agregada la propiedad decoded_jump en el modelo y eliminada to_representation.
* Corregido el error 500 en post customer/pbx/ddi&amp;groups
* No se asignaba el atributo pool cuando se genera un usuario PPPoE via API.

### Krill ACS

**Algunas correciones**:

* Configurado celery para que descubra automaticamente tareas en kws y las comparta en Kiwi.

### Krill Core

**Algunas mejoras**:

* Salida de comprobaciones mejorada cuando un lado remoto SAF/IntegraW no responde a SNMP.
* Monitorización de placas FiberHome.
* Reporte de flanco de bajada.

### Krill GPON

**Algunas correciones**:

* Desajuste de memento cuando varios trabajadores comienzan a desaprovisionarse al mismo tiempo.
* Configurado celery para que descubra automáticamente las tareas en kws y las comparta en kiwi.

## Octubre 2021

### Krill UI

**Algunos cambios**:

* Se eliminó 'cadena:' del buscador y en la URL de búsqueda
* Rediseñado el buscador.

### Krill Monitoring UI

**Algunas mejoras**:

* Añadidos segundos a las vistas de la línea de tiempo del historial de Host y Servicios.
* Añadidos filtros en la vista Historial.
* Agregada la fecha máxima al calendario en CDRS, CWMP, Historial, Eventos de Host, Gráficas de Host y Gráficas de Servicios de Host.
* Matrix ahora mantiene columnas visibles si se cambian manualmente.
* La vista del host ahora muestra el indicador de servicios reconocidos o inactivos en la línea de tiempo y el icono de la pestaña de servicio.
* URL para el botón Host/Servicio en la vista /all
* Añadida la nueva vista Eventos de Host
* Algunos problemas gráficos en la vista All
* Agregado el cuadro de diálogo PonStatus a la línea de tiempo de la vista monitor del host.
* Agregado cuadro de diálogo PonStatus a la vista de servicio Pon
* Añadida columna de topología a la tabla de datos Matrix en Matrix View.
* Se agregaron sesiones PPPoE en la línea de tiempo de la vista monitor del host.
* Eventos de la línea de tiempo, ahora contempla la fuente 'asterisk'.
* Eventos de compensación de zona horaria en la vista monitor del host.
* Estado de registro agregado a la vista monitor del host.
* Estado de registro agregado y datos administrativos a la vista Matrix.

**Algunos arreglos**:

* Filtro de impacto empresarial en la vista de historial y en el menú de la barra lateral de descripción general.
* Se corrigió la fecha y hora de la última verificación para host/servicios en la línea de tiempo de la vista Monitor de Host.
* Eliminada información de registro para CPE de ethernet.
* Corregida la búsqueda por defecto en la vista Smart Tree.

**Algunas correciones**:

* Se solucionó el problema en la vista de información de la pestaña Servicio de host.Cuando intente acceder al servicio actual cuando aún no ha sido cargado.
* Optimizado el modo responsivo del widget resumen
* Se agregó un valor preestablecido predeterminado al rango de fecha y hora en todas las vistas.
* Se agregó la fecha de vencimiento a la vista de la pestaña del monitor del host.
* Se eliminó el número de host de subdominio para evitar cambios en DNS/ACL para obtener direcciones IP de host.

### Krill Rubik UI

**Algunas mejoras**:

* Añadido el ID administrativo en la vista Edicción de Ticket

### Krill ISP UI

**Algunas correciones**:

* Corregidas algunas traducciones.

### Kiwi

**Algunas mejoras**:

* Creada la aplicación para PBX.

### Krill WebService (API)

**Algunas mejoras**:

* Creados nuevos endpoints tipo REST.
* Cuando se da de alta un CPE, el campo modelo aparezca en blanco igual que la velocidad.

**Algunas correciones**:

* El endpoint para PTP no devolvía el servicio ITFS.
* Corregido el aumento considerable del load average provocado por Krill-ws.

### Krill WiMAX

**Algunas mejoras**:

* Wimax ahora puede publicar el mapa de registro de los CPE/AP
