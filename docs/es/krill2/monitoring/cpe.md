---
title: Monitoring | Ficha del CPE
description: Ficha técnica del CPE
lang: es-ES
prev: host
next: null
tags:
- krill2
- módulo
- monitoring
- cpe
- services
---
# Monitoring | Ficha del CPE

[[toc]]

La ficha es el elemento principal de la monitorización de los hosts que hay en Krill. Se genera para cada CPE y para cada equipo de red o servidor.

En la ficha se reúne toda la información obtenida por los diferentes servicios de Krill y se muestra información en tiempo real y también del histórico de aquellos servicios que se guarde registro.

<p align="center"><img src="/img/krill2/monitoring/host/-0000.png" width=""></p>

Desde la ficha se llevan a cabo las acciones sobre los CPEs de reinicio, provisión/desprovisión y reconfiguración. También la de puesta a fábrica, en aquellos equipos que lo permitan.

<p align="center"><img src="/img/krill2/monitoring/host/-0001.png" width="252"></p>

Desde el desplegable del equipo tenemos disponible información de cuando fue creado y cuando fue actualizado por última vez el equipo y debajo continua mostrando diversa información:

- **Uptime**:  Muestra el tiempo que está operando sin interrupciones desde su último reinicio o apagado
- **View CPE check info**: Habilita un desplegable en la parte de derecha, en la que muestra información del check
- **Copy CPE name**: Copia en el portapapeles el nombre del equipo
- **Links**: Enlace a....
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

<p align="center"><img src="/img/krill2/monitoring/host/-0002.png" width=""></p>

## CPE General

Es el apartado principal e inicial de la ficha para los CPEs, en ella tenemos el histórico, tareas, los dispositivos conectados y timeline de los servicios del host. También los datos técnicos, de registro, del DHCP y telefonía a modo resumen.

### Información principal

Los hosts pueden contener datos técnicos y de registro, así como información de IPs y telefonía. Todos ellos se encuentran agrupados en diversas cajas organizando toda esta información.

### Services Timeline

Cada Host de tipo CPE puede contener diferentes servicios que incluyen los úlitmos mensajes de salida así como sus métricas (cuando estén disponibles), todo ello es renderizado en un Timeline con el histórico de cada uno, añadiendo los eventos más importantes (como IPs o eventos de provisión).

Esta es una lista de los servicios más uasdos agrupados por tecnología:

**GPON**:
* **dhcp**: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)
* **pppoe/ipoe**: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)
* **provision**: Retorna la información de registro (solo si la provisión es realizada por Krill)
* **qos**: Obtiene la calidad de servicio, snr (el ratio de señal/ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)
* **tr069**: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)
* **txrx**: Obtiene los parámetros de transmisión y recepción de señal
* **voice[X]**: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)

**DOCSIS**:
* **docsis**: Obtiene los canáles inválidos para downstream/upstream.
* **dhcp**: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)
* **downstream**: Devuelve los niveles de señal en bajada
* **provision**: Retirna la información de registro (solo si la provisión es realizada por Krill)
* **qos**: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)
* **tr069**: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)
* **upstream**: Devuelve los niveles de señal en subida
* **voice[X]**: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)

**G.HN**:
* **dhcp**: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)
* **pppoe**: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)
* **qos**: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)
* **setup**: Retorna la longitud del cable y el snr (el ratio de señal/ruido)
* **tr069**: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)
* **voice[X]**: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)

**WIMAX**:
* **dhcp**: Devuelve la información de la IP (solamente si la IP ha sido gestionada internamente por el servidor DHCP de Phicus)
* **info**: Obtiene el modelo del CPE y la versión de firmware
* **downstream**: Devuelve los niveles de señal en bajada
* **pppoe**: Obtiene la información del accounting de Radius (solo si la sesión ha sido proporcionada internamente por el servidor Radius de Phicus)
* **qos**: Obtiene la calidad de servicio, snr (el ratio de señal de ruido) y otros parámetros (solo si Krill monitoriza el QoS del CPE)
* **radio**: Obtiene el tiempo de la señal en el aire y los datos tanto de subida como de bajada
* **setup**: Retorna la distancia hasta el AP así como el tiempo que está UP
* **tr069**: Retorna la información de las sesiones ACS (solo si el CPE implementa el protocolo TR069)
* **upstream**: Devuelve los niveles de señal en subida
* **voice[X]**: Relacionado con el registro de la PBX (soli si el CPE tiene soporte de Voz, la [X] está relacionada con el número del puerto POTS)

## Configuración

Ofrece la posibilidad de configurar los canales WIFI , cambiar la potencia de transmisión, cambio de canal, configurar los ajustes del SSID.

<p align="center"><img src="/img/krill2/monitoring/host/-0003.png" width=""></p>

También se muestran las WANs obtenidas de la provisión y del servicio ACS.

<p align="center"><img src="/img/krill2/monitoring/host/-0004.png" width=""></p>

## Dispositivos

Muestra información de los dispositivos conectados al equipo, como son el nombre, banda de frecuencia, SSID, IP, MAC, etc.

<p align="center"><img src="/img/krill2/monitoring/host/-0005.png" width=""></p>


## Diagnósticos

Si el CPE lo permite se pueden hacer diversos tests que permiten un diagnóstico rápido del estado de la conexión del cliente y del WiFi que emite el equipo: 

- Ping, donde podemos elegir a qué IP hacer el ping desde el equipo. 
- DNS, donde podemos elegir a qué destino intentar alcanzar vía DNS
- Site Survey para ver la ocupación de las redes y el ruido en los canales de las antenas del equipo.
- Test de velocidad, donde podemos comprobar la velocidad del servicio.

<p align="center"><img src="/img/krill2/monitoring/host/-0006.png" width=""></p>

## Graphs

Acceso a la gráfica de ancho de banda cursado, Tx/Rx, Attenuation, Pondesv por el CPE así como cualquier otra métrica relativa al propio Host con histórico de tiempo y posibilidad de escoger las fechas de visualización.

<p align="center"><img src="/img/krill2/monitoring/host/-0007.png" width=""></p>
