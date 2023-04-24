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
