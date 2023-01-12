---
title: Cuadro de mandos
description: Vista inicial de Krill.
lang: es-ES

prev: users
next: null
tags:
- krill2
- cuadro de mandos
- meta-buscador
- widgets
- menú de usuario
- usuario
- logout
---
# Cuadro de mandos

Cuando se loguea el usuario por primera vez en la interfaz web se muestra una ventana como la siguiente:

![Dashboard](/img/krill2/main/0200.png)

Aquí también podremos encontrar una serie de elementos que nos acompañarán en el resto de páginas de Krill2

- [Barra de Herramientas y búsqueda local](#barra-de-herramientas-y-busqueda-local)
- [Menú de usuario](#menu-de-usuario)
- [Menú Lateral y Meta buscador](#menu-lateral-y-meta-buscador)

La página de inicio de KrillUI se puede personalizar con varios Widgets, que le permitirán visualizar el estado general de la red, las incidencias más críticas de hosts y servicios, el estado de salud del sistema de monitorización, etc.

Podemos tener tantos dashboards como queramos, permitiendo añadir a cada uno diversos widgets para poder tenerlos organizados.

Para poder crear nuevos dashboards, pulsaremos sobre el icono de los 3 puntos que aparece en la esquina superior derecha, y pulsando sobre `editar dashboard` se nos habilitará la opción de poder ***Crear un dashboard***, ***Renombrar el dashboard***, o ***Eliminar el dashboard***.

## Widgets

El primer widget que se carga al inicio es el de bienvenida, que ofrece al usuario una pequeña guía de uso de KrillUI.

::: tip
Posteriormente se incorporarán nuevos Widgets que permitirán dotar de mayor funcionalidad a esta pantalla.
:::

Para añadir un widget, una vez que estamos en modo edición del dashboard, lo podemos hacer desde el botón inferior derecho de la pantalla, pulsado sobre el que nos interese. El widget se agregará al primer espacio libre que detecte en la pantalla.

Para mover o cambiar el tamaño de un widget debemos primero hacer clic en el icono del candado que aparece en su encabezado(). Después de esto, se habilitará un botón junto a su título.(), que nos permitirá moverlo, y otro en la esquina inferior derecha para poder redimensionarlo().

Para eliminar un widget, una vez desbloqueado, debemos hacer clic en el botón de la papelera que aparecerá en el lado derecho del encabezado.

Tras terminar el "tutorial" y añadir widgets encontramos el dashboard con los widgest elegidos o los que hay por defecto.

![Widgets](/img/krill2/main/0202.png)

Algunos widgets son:

- **Resumen de la red**: Gráfica sectorial y coloreada que brinda información actualizada del estado la red en cuánto a Host y Servicios diferenciando sus estados.
- **Problemas de hosts**: Lista de problemas con mayor afectación de la red ordenados por criticidad referentes a los Hosts.
- **Problemas de servicios**: Lista de problemas con mayor afectación de la red ordenados por criticidad referentes a los Servicios.
- **Historial de problemas**: Lista de problemas en las últimas 24 horas registrados por Krill.

## Barra de Herramientas y búsqueda local

![AppBar](/img/krill2/main/0205.png)

Coloreado en verde, aloja al buscador local que funciona para cada módulo. También en la parte derecha tiene un desplegable con las vistas y nos da acceso al menú de usuario.

El buscador, permite realizar búsquedas en la vista local, si ésta lo permite, o en la vista principal del módulo activo de Krill. Por ejemplo, si estamos en la ficha de un CPE, y realizamos una búsqueda, ésta nos mostrará el listado de equipos y servicios que coincidan con los criterios de búsqueda.

::: tip
En el buscador también tenemos acceso a las búsquedas guardadas como favoritas, a las que podemos ir añadiendo las que nosotros queramos, pulsando sobre el botón de marcador de página que aparece a la derecha de la búsqueda.

A su vez, nos mostrará las últimas 10 búsquedas realizadas para poder acceder a ellas de una manera más rápida.
:::

## Menú de usuario

Muestra en primer lugar con qué usuario estamos logueados, justo debajo muestra las aplicaciones/módulos de Krill. Dependiendo de los permisos que tenga el usuario logueado verá un módulo u otro, o todos.

<p align="center"><img src="/img/krill2/main/0206.png" width="200"></p>

En este menú podremos cambiar entre un módulo u otro. Siendo los módulos disponibles a día de hoy los siguientes:

- **Monitoring**: [Monitorización de equipos y servicios de la red](/es/krill2/monitoring/)
- **Customers/ISP**: [Gestión de clientes y CPEs](/es/krill2/isp-customer/)
- **PBX**: [Gestión de PBX](/es/krill2/pbx/)
- **Radius/Oratio**: [Control de sesiones PPPoE y Pool de IPs](/es/krill2/radius/)
- **Installer tools**: [Herramientas del instalador](/es/krill2/installer-tools/)
- **Rubik**: [Herramienta de gestión de redes mutualizadas con terceros](/es/krill2/rubik/)

Desde este menú también podemos cambiar el idioma de Krill.

Permite elegir el tiempo de auto-refresco de la web, mutear los sonidos de alerta de Krill o activar/desactiar el modo triage. 

Y por último puedes desloguear de tu sesión.

## Menú Lateral y Meta buscador

El menú del panel lateral incluye una serie de accesos directos a vistas o fichas de interés.

En primer lugar, en la parte más alta está el Metabuscador.

<p align="center"><img src="/img/krill2/main/0203.png" width="200"></p>

El meta buscador es capaz de relacionar servicios y hosts en la misma búsqueda, haciendo posible encontrar un CPE buscando cualquier cosa relacionada con él ya sea un dato administrativo o técnico.

::: tip
Más adelante se irán incorporando nuevas secciones dónde realizar búsquedas que nos permitirán encontrar resultados en cualquiera de los módulos que tengamos acceso.
:::

A continuación los menús que cambian según el módulo que hagamos uso.

<p align="center"><img src="/img/krill2/main/0204.png" width="200"></p>

En el caso del módulo de monitorización, por ejemplo, da un acceso rápido a las alarmas y a los problemas de red, así como los diferentes grupos de hosts.

También se puede acceder a las Vistas tácticas (Tactical Views) que nos permiten visualizar y organizar la información de diferentes elementos de la red: Matrix, Trivial, ONUs pendientes de provisión, sesiones Radius, etc.
