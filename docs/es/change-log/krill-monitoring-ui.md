# Krill Monitoring UI

## 2022-01-18
Version 1.0.169

### Optimizaciones de código

<ul><li>Arreglado un error en la vista Host que afectaba a la información administrativa de un host.</li></ul>

---

## 2022-01-17
Version 1.0.168

### Optimizaciones de código

<ul><li>Se ha optimizado la generación de enlaces de los equipos en base a su marca, modelo y especificaciones de la red.</li><li>Se eliminó el enlace a la vista de radius en el menu del módulo <code>monitoring</code>. La vista ahora depende del módulo de la aplicación <code>oratio</code>.</li><li>Corregido el error que mantenía el cuadro de diálogo de confirmación de la acción visible después de presionar el botón <code>Sí, estoy seguro</code> en la vista de la pestaña del monitor del host.</li></ul>

---

## 2022-01-14
Version 1.0.167

### Optimizaciones de código

<ul><li>El cuadro de diálogo en la vista host monitor, ahora se cierra cuando finaliza la acción</li></ul>

---

## 2022-01-14
Version 1.0.166

### Nueva característica

<ul><li>Se refactorizó la configuración del usuario para la implementación de una API que la guarda y recupera.</li></ul>

---

## 2022-01-14
Version 1.0.165

### Algunas mejoras y correciones

<ul><li>Añadidos nuevos iconos a IPTV y CATV en la vista Host.</li><li>Adaptado los nuevos atributos de cpes.</li><li>Nueva traducción para flapping.</li><li>Arreglada superposición de la barra de mensajes de conversaciones.</li></ul>

---

## 2022-01-11
Version 1.0.164

### Nueva característica

<ul><li>Lista de IP en la vista del monitor host, ahora detecta la URL de los enlaces del Host.</li></ul>

---

## 2022-01-11
Version 1.0.163

### Nueva característica y correciones

<ul><li>Se agregaron enlaces de Host en el menú de acciones de la parte superior derecha de la vista de Host.</li><li>Se corrigió cuando cualquier padre o formato no válido para los padres está presente</li></ul>

---

## 2022-01-11
Version 1.0.162

### Nueva característica

<ul><li>Se agregaron direcciones IP PPPoE a la vista de la pestaña Host Monitor.</li><li>Fecha de expiración agregada en la vista de <code>/all</code> los hosts</li></ul>

---

## 2021-12-28
Version 1.0.161

### Nuevas características

<ul><li>Nuevo widget para mostrar métricas de cualquier host/servicio.</li><li>Añadido número de host/servicios caídos o críticos con business-impact >= 2 en el menú lateral.</li><li>Añadida la fecha de expiración de CPEs en la vista <code>/monitoring/all</code>.</li><li>Añadidas las IPs vigentes de radius/PPPoE en el bloque de IPs de la ficha de un CPE.</li></ul>

---

## 2021-12-23
Version 1.0.160

### Nuevas mejoras

<ul><li>Check_command oculto para usuarios diferentes a phicusadmin.</li></ul>

---

## 2021-12-23
Version 1.0.159

### Refactorización

<ul><li>Cambiados algunos menús de la barra lateral.</li></ul>

---

## 2021-12-23
Version 1.0.158

### Nueva característica

<ul><li>En el menú de la barra lateral ahora se muestra una insígnia con el número total crítico de hosts y servicios.</li></ul>

---

## 2021-12-22
Version 1.0.157

### Nueva característica

<ul><li>Se agregó un nuevo widget para gráficos.</li></ul>

---

## 2021-12-22
Version 1.0.156

### Agunas optimizaciones de código

<ul><li>Refactorización de alguna traducción en el panel de monitoring.</li></ul>

---

## 2021-12-21
Version 1.0.155

### Agunas optimizaciones de código

<ul><li>Se modificó el ícono para el host de tipo Nas.</li><li>Al hacer doble clic en el host, ahora se abre la URL correcta en una nueva ventana</li></ul>

---

## 2021-12-21
Version 1.0.154

### Agunas optimizaciones

<ul><li>Se cambió el color de los estados inalcanzables en la vista sonar.</li></ul>

---

## 2021-12-21
Version 1.0.153

### Agunas mejoras

<ul><li>Añadida información de ubicación a la vista matrix.</li></ul>

---

## 2021-12-20
Version 1.0.152

### Agunas correciones

<ul><li>Se corrigieron problemas gráficos menores en la vista SmartTree.</li></ul>

---

## 2021-12-17
Version 1.0.151

### Agunas mejoras

<ul><li>Ahora se muestran eventos de de desconexión de radius host en la línea de tiempo de la vista Host Monitor.</li></ul>

---

## 2021-12-17
Version 1.0.150

### Agunas mejoras

<ul><li>Marcado como ack/downtime de la lista de hosts en la ubicación o host seleccionado en la vista de Smart Tree.</li></ul>

---

## 2021-12-17
Version 1.0.149

### Agunas mejoras

<ul><li>Etiquetas en gráficos en tiempo real de ancho de banda y Tx/Rx en la pestaña Host Monitor.</li></ul>

---

## 2021-12-17
Version 1.0.148

### Agunas correciones

<ul><li>Algunas traducciones corregidas en la vista Smart Tree.</li></ul>

---

## 2021-12-16
Version 1.0.147

### Agunas mejoras

<ul><li>Se cambió la ruta base para cada ruta establecida en /monitoring y se cambió Trivial a Smart Tree.</li></ul>

---

## 2021-12-16
Version 1.0.146

### Agunas caraterísticas nuevas

<ul><li>Se agregó más funcionalidad para expandir los gráficos en la vista de la pestaña Host y Servicios.</li></ul>

---

## 2021-12-14
Version 1.0.145

### Agunas refactorizaciones

<ul><li>Refactorización del comportamiento del gráfico de expansión en la vista de la pestaña Gráficos de host y servicios.</li><li>Altura mínima establecida para la lista de servicios en la vista de servicios de host</li></ul>

---

## 2021-12-14
Version 1.0.144

### Agunas mejoras

<ul><li>Se agregaron algunas traducciones al último widget de notificaciones.</li></ul>

---

## 2021-12-13
Version 1.0.143

### Agunas mejoras

<ul><li>Corrección de la altura mínima para los gráficos en el widget de resumen.</li></ul>

---

## 2021-12-13
Version 1.0.142

### Refactorización de código

<ul><li>Algunas lineas de código eliminadas.</li></ul>

---

## 2021-12-13
Version 1.0.141

### Refactorización de código, algunas características nuevas y mejoras

<ul><li>Refactorización del código de los widgets.</li><li>Añadido menu de atajos en la vista de inicio de monitoring</li><li>Añadidas algunas traducciones a los widgets</li></ul>

---

## 2021-12-13
Version 1.0.140

### Algunas mejoras

<ul><li>Mejorada la vista all en modo móvil.</li></ul>

---

## 2021-12-13
Version 1.0.139

### Algunas mejoras y refactorización de código

<ul><li>Mejorada la vista all en modo móvil.</li><li>Algunas lineas de código eliminadas</li></ul>

---

## 2021-12-03
Version 1.0.138

### Refactorización de código

<ul><li>Refactorización de código de las barras de herramientas.</li></ul>

---

## 2021-12-02
Version 1.0.137

### Refactorización de código

<ul><li>Habilitado el botón de cerrar cuando el cuadro de diálogo del estado de un Pon carga datos.</li><li>Los botones Pon Status en la pestaña de servicio del host aparecen y desaparecen en cada actualización</li></ul>

---

## 2021-12-02
Version 1.0.136

### Algunas mejoras

<ul><li>Botón de pestaña de servicio deshabilitado cuando no hay servicios disponibles en la Vista de host.</li></ul>

---

## 2021-12-01
Version 1.0.135

### Algunas mejoras y correciones

<ul><li>En la vista de grupo de hosts, se eliminó todo el resumen de hosts para aumentar la velocidad de carga.</li><li>Ahora están todos los elementos en vista Matrix.</li><li>Añadidas traducciones al widget de últimas notificaciones</li><li>Corregido el que siempre se agregue la opción para programar el tiempo de inactividad de los hosts y los servicios aunque estén en buen estado.</li><li>Se corrigió el cuadro de diálogo de estado del cierre de un Pon al hacer clic en su CPE</li></ul>

---

## 2021-11-23
Version 1.0.134

### Algunas mejoras

<ul><li>Carga de velocidad mejorada en la vista Trivial.</li></ul>

---

## 2021-11-23
Version 1.0.133

### Algunas mejoras

<ul><li>Carga de velocidad mejorada en la vista Sonar.</li></ul>

---

## 2021-11-23
Version 1.0.132

### Algunas mejoras

<ul><li>La información de CWMP en la vista de la pestañana Tecnología de host, ahora se carga al inicio.</li></ul>

---

## 2021-11-19
Version 1.0.131

### Algunas mejoras

<ul><li>Se modificó el botón de cambio de tamaño en la vista de sonar.</li></ul>

---

## 2021-11-19
Version 1.0.130

### Refactorización de código

<ul><li>Refactorización y mejora de código..</li></ul>

---

## 2021-11-19
Version 1.0.129

### Nueva característica

<ul><li>Se agregó la utilidad de expandir y contraer la lista de servicios en la vista servicios del host.</li></ul>

---

## 2021-11-18
Version 1.0.128

### Nueva mejora

<ul><li>Desplazamiento automático al servicio seleccionado en la vista de servicio del host.</li></ul>

---

## 2021-11-18
Version 1.0.127

### Corrección

<ul><li>Se corrigió el cambio automático y repentino del servicio actual y de pestaña en la vista de servicios del host.</li></ul>

---

## 2021-11-18
Version 1.0.126

### Corrección

<ul><li>Se corrigió el prefijo de IP de Huawei y Ubiquiti cuando el modelo no estaba disponible en la vista de Host Monitor.</li></ul>

---

## 2021-11-18
Version 1.0.125

### Algunas mejoras

<ul><li>Pie de página de las gráficas, mejorado en la vista de pestaña Host Graph.</li></ul>

---

## 2021-11-18
Version 1.0.124

### Algunas mejoras

<ul><li>Ahora descontamos los problemas de reconocimiento y tiempo de inactividad de los malos estados totales y, si todos son manejados,la ubicación está bien.</li></ul>

---

## 2021-11-18
Version 1.0.123

### Algunas mejoras

<ul><li>Valores de rango de datos predeterminados establecidos para el día actual (de 0:00:00 a 23:59:59).</li></ul>

---

## 2021-11-18
Version 1.0.122

### Refactorización de código

<ul><li>Refactorización y mejora de código.</li></ul>

---

## 2021-11-17
Version 1.0.121

### Algunas mejoras

<ul><li>Añadidos algunos nuevos iconos para tipos de host en la vista de Host</li></ul>

---

## 2021-11-17
Version 1.0.120

### Algunas mejoras

<ul><li>En la vista Sonar, ahora solo muestra localizaciones con hosts</li></ul>

---

## 2021-11-16
Version 1.0.119

### Algunas mejoras

<ul><li>En la vista Host Monitor, ahora se muestra en la línea de tiempo problemas del servicio TR069</li></ul>

---

## 2021-11-16
Version 1.0.118

### Algunas mejoras

<ul><li>Añadido Tooltip para los long-output en la linea de tiempo de host y servicio</li></ul>

---

## 2021-11-16
Version 1.0.117

### Algunas mejoras y arreglos

<ul><li>Se agregó información de intentos máximos a la vista Información del servicio del host</li><li>Corrección del filtro de gráficas para la pestaña de gráficas de servicio.</li><li>Se corrigieron las etiquetas de estado en la vista del historial de la pestaña del servicio del host y se agregó la casilla de verificación Mostrar notificaciones.</li></ul>

---

## 2021-11-15
Version 1.0.116

### Algunos arreglos

<ul><li>Devuelta la capacidad de búsqueda del navegador a la vista Smart Tree, manteniendo siempre el grupo de host: núcleo y tipo: host.</li></ul>

---

## 2021-11-12
Version 1.0.113

### Algunas mejoras

<ul><li>Se agregaron IPs de Radius a la vista monitor del host.</li><li>Se agregó bp:>2 a la búsqueda predeterminada de la vista Smart Tree.</li></ul>

---

## 2021-11-10
Version 1.0.112

### Algunas mejoras

<ul><li>Mostrar el tiempo de actividad del servicio en la vista de la pestaña de información del servicio del host.</li></ul>

---

## 2021-11-10
Version 1.0.111

### Algunas mejoras

<ul><li>Filtro de CDR y enlace a CPE.</li></ul>

---

## 2021-11-09
Version 1.0.110

### Algunos arreglos

<ul><li>Arreglar la búsqueda de World Map para agregar 'type = Host'.</li></ul>

---

## 2021-11-03
Version 1.0.109

### Algunos arreglos

<ul><li>Expansión de gráfico en la vista Gráficos de servicio de host.</li></ul>

---

## 2021-10-28
Version 1.0.108

### Algunos arreglos

<ul><li>Filtro de impacto empresarial en la vista de historial y en el menú de la barra lateral de descripción general.</li></ul>

---

## 2021-10-28
Version 1.0.107

### Algunas mejoras

<ul><li>Añadidos segundos a las vistas de la línea de tiempo del historial de Host y Servicios.</li><li>Añadidos filtros en la vista Historial.</li></ul>

---

## 2021-10-26
Version 1.0.106

### Algunas mejoras

<ul><li>Agregada la fecha máxima al calendario en CDRS, CWMP, Historial, Eventos de Host, Gráficas de Host y Gráficas de Servicios de Host.</li></ul>

---

## 2021-10-26
Version 1.0.105

### Algunas mejoras

<ul><li>Matrix ahora mantiene columnas visibles si se cambian manualmente.</li><li>La vista del host ahora muestra el indicador de servicios reconocidos o inactivos en la línea de tiempo y el icono de la pestaña de servicio.</li><li>URL para el botón Host/Servicio en la vista /all</li></ul>

---

## 2021-10-22
Version 1.0.100

### Nueva característica

<ul><li>Añadida la nueva vista Eventos de Host</li></ul>

---

## 2021-10-22
Version 1.0.099

### Algunos arreglos

<ul><li>Algunos problemas gráficos en la vista All</li></ul>

---

## 2021-10-14
Version 1.0.098

### Algunas mejoras

<ul><li>Agregado el cuadro de diálogo PonStatus a la línea de tiempo de la vista monitor del host.</li><li>Agregado cuadro de diálogo PonStatus a la vista de servicio Pon.</li></ul>

---

## 2021-10-13
Version 1.0.096

### Algunas mejoras

<ul><li>Añadida columna de topología a la tabla de datos Matrix en Matrix View.</li></ul>

---

## 2021-10-11
Version 1.0.094

### Algunas correciones

<ul><li>Se corrigió la fecha y hora de la última verificación para host/servicios en la línea de tiempo de la vista Monitor de Host.</li></ul>

---

## 2021-10-11
Version 1.0.093

### Algunas mejoras

<ul><li>Eliminada información de registro para CPE de ethernet.</li></ul>

---

## 2021-10-11
Version 1.0.092

### Algunas correciones

<ul><li>Corregida la búsqueda por defecto en la vista Smart Tree.</li></ul>

---

## 2021-10-08
Version 1.0.091

### Algunas mejoras

<ul><li>Se agregaron sesiones PPPoE en la línea de tiempo de la vista monitor del host.</li></ul>

---

## 2021-10-08
Version 1.0.087

### Algunas mejoras

<ul><li>Eventos de la línea de tiempo, ahora contempla la fuente 'asterisk'.</li></ul>

---

## 2021-10-07
Version 1.0.086

### Algunas mejoras

<ul><li>Eventos de compensación de zona horaria en la vista monitor del host.</li></ul>

---

## 2021-10-07
Version 1.0.083

### Algunas mejoras

<ul><li>Estado de registro agregado a la vista monitor del host.</li></ul>

---

## 2021-10-07
Version 1.0.082

### Algunas mejoras

<ul><li>Estado de registro agregado y datos administrativos a la vista Matrix.</li></ul>

---

## 2021-10-06
Version 1.0.080

### Algunas correciones

<ul><li>Se solucionó el problema en la vista de información de la pestaña Servicio de host.Cuando intente acceder al servicio actual cuando aún no ha sido cargado.</li><li>Optimizado el modo responsivo del widget resumen</li><li>Se agregó un valor preestablecido predeterminado al rango de fecha y hora en todas las vistas</li></ul>

---

## 2021-10-04
Version 1.0.079

### Algunas mejoras

<ul><li>Se agregó la fecha de vencimiento a la vista de la pestaña del monitor del host.</li></ul>

---

## 2021-10-04
Version 1.0.078

### Algunas mejoras

<ul><li>Se eliminó el número de host de subdominio para evitar cambios en DNS/ACL para obtener direcciones IP de host.</li></ul>

