---
title: Novedades
description: Lista de cambios y novedades de Krill 2
lang: es-ES
navbar: false
sidebar: auto
sidebarDepth: 1
prev: null
next: null
tags:
- krill2
- cambios
- changelog
---

# Novedades

## julio 2022

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

## mayo 2022

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

## abril 2022

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

## marzo 2022

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

## febrero 2022

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

## enero 2022

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

## diciembre 2021

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

## noviembre 2021

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

## octubre 2021

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
