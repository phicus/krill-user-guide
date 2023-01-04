---
title: Monitoring | Ficha del Host
description: Ficha técnica del Host
lang: es-ES
prev: history
next: null
tags:
- krill2
- módulo
- monitoring
- host
- services
---
# Monitoring | Ficha del Host

La ficha es el elemento principal de la monitorización de los hosts que hay en Krill. Se genera para cada CPE y para cada equipo de red o servidor.

En la ficha se reúne toda la información obtenida por los diferentes servicios de Krill y se muestra información en tiempo real y también del histórico de aquellos servicios que se guarde registro.

![MonitoringHostEvents](@images/krill2/monitoring/host/0000.png)

Desde la ficha se llevan a cabo las acciones sobre los CPEs de reinicio, provisión/desprovisión y reconfiguración. También la de puesta a fábrica, en aquellos equipos que lo permitan.

<p align="center"><img src="@images/krill2/monitoring/host/0001.png" max-width=30% width=252;></p>

Desde el desplegable Actions tenemos disponibles todas las acciones para ese equipo en concreto. Para un CPE de GPON tenemos las siguientes acciones:

- **Recheck**: Comprueba el estado del host y sus servicios en ese momento.
- **Acknowledge**: Configura un ACK para ese host.
- **Schedule a downtime**: Configura un downtime para ese host.
- **Reboot**: Reinicia la ONT.
- **Unprovision**: Desprovisiona la ONT. Elimina sus services ports de la OLT.
- **Reprovision**: Reprovisiona la ONT. Elimina sus services ports de la OLT para justo después insertarlos de nuevo.
- **Factory**: Pone a fábrica la ONT.
- **Reconfig**: Reconfigura la ONT con una sesión ACS.
- **CPE Edition**: Abre en otra pestaña la parte Customer de ese CPE de Krill.
- **Show in worldmap**: Abre en otra pestaña una búsqueda con ese CPE en la vista Worldmap de Krill.
- **CDR Table**: Filtra las llamadas del teléfono asociado a ese CPE en la vista CDR de Krill.
- **CWMP Table**: Filtra las sesiones tr069 de ese CPE en la vista cwmp de Krill.

La ficha se compone de diferentes partes, es modular. Cada ficha mostrará la información necesaria para cada tipo de equipo. Información asociada a los diferentes servicios del host.

<p align="center"><img src="@images/krill2/monitoring/host/0002.png" max-width=30% width=52;></p>

## CPE Monitor

Es el apartado principal e inicial de la ficha para los CPEs, en ella tenemos el histórico y timeline de los servicios del host. También los datos técnicos, de registro, del DHCP y telefonía a modo resumen en la parte superior.

## Administrative

Información de la parte administrativa del customer: su nombre, dirección, posición en el mapa, comentarios, etc.

## Technology

Información técnica del host así como listados de Services Ports y WANs obtenidas de la provisión y del servicio ACS.

![MonitoringHostEvents](@images/krill2/monitoring/host/0004.png)

## Device 

Información relacionada con el equipo instalado, la ONT. Posibilita llevar a cabo tests de diagnóstico de WiFi y ver el estado de las interfaces eth del router de una forma más visual e intuitiva.

![MonitoringHostEvents](@images/krill2/monitoring/host/0005.png)

## Services

Información detallada sobre los servicios del host. Datos sobre el último check, fechas de realización, mensajes de salida, métricas, así cómo gráfico e histórico de los cambios de estado.

![MonitoringHostEvents](@images/krill2/monitoring/host/0006.png)

## Diagnostics

Si el CPE lo permite se pueden hacer diversos tests que permiten un diagnóstico rápido del estado de la conexión del cliente y del WiFi que emite el equipo: 

- Ping, donde podemos elegir a qué IP hacer el ping desde el equipo. 
- DNS, donde podemos elegir a qué destino intentar alcanzar vía DNS
- Site Survey para ver la ocupación de las redes y el ruido en los canales de las antenas del equipo.

![MonitoringHostEvents](@images/krill2/monitoring/host/0007.png)

## Graphs

Acceso a la gráfica de ancho de banda cursado por el CPE así como cualquier otra métrica relativa al propio Host con histórico de tiempo y posibilidad de escoger las fechas de visualización.

![MonitoringHostEvents](@images/krill2/monitoring/host/0008.png)

## History

Histórico de eventos y envío de notificaciones del host/CPE

![MonitoringHostEvents](@images/krill2/monitoring/host/0009.png)
