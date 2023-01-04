---
title: ISP Customer | CPEs
description: Listado y gestión de CPEs.
lang: en-US
prev: /krill2/isp-customer/customers
next: /krill2/isp-customer/potses
tags:
- krill2
- module
- isp
- cpes
- realm
---
# ISP Customer | CPEs

Desde la vista principal de CPEs se muestra el listado de éstos agrupados por Realm (puede haber uno o más Realms) y en él podemos hacer cambios masivos seleccionando varios a la vez.

![ISP CPEs Dashboard](@images/krill2/isp-customer/0201.png)

El CPE es el equipo que se pone en casa del cliente para darle servicio.

::: tip
En función de la tecnología, el CPE puede recibir diversos nombres:

- **GPON**: ONT
- **WiMAX**: Antena/Router
- **DOCSIS**: Cable Módem
- **G.HN**: Router
:::

## Creación de CPES

Para crear un CPE pulsaremos sobre el botón de la barra superior y rellenaremos los campos necesarios, en función de la tecnología:

<p align="center"><img src="@images/krill2/isp-customer/0205.png" max-width=30% width=500;></p>

Una vez finalicemos, pulsaremos sobre el botón `Añadir nuevo CPE` y se nos redirigirá a la pantalla de edición de CPEs.

## Edición de CPES

La edición de CPE muestra diversas pestañas en las que se agrupan los diferentes datos necesarios para su provisión y monitorización.

### Pestaña Basic Data

![ISP CPE Basic Data](@images/krill2/isp-customer/0202.png)

En función de la tecnología, habrá unos campos que sean obligatorios y otros no. A continuación mostramos el detalle de éstos.

#### Campos comunes a las diversas tecnologías

**Basic Data**

- **Technology**: Tecnología del dispositivo
- **CPE Model**: Modelo (Agrupado por Fabricante)
- **Fecha de expiración**: Determina la fecha en la que Krill cortará el Acceso a internet al CPE automáticamente.

**Settings**

- **Active**: con él marcado tendremos al CPE dado de alta en el servicio.
- **Access to internet**: con él marcado el equipo obtendrá IP de navegación.
- **Must register VoIP lines in external Server**: al marcarlo le diremos que el teléfono ha de registrarse en un servidor diferente al de Krill .
- **Is a probe**: Es una etiqueta para marcar un equipo como sonda.
- **Enable notifications**: marcándolo haremos que Krill nos avise de cualquier evento de este cpe en el chat.

**Profiles e IP**

- **Address Profile**: Especifica el perfil que usará Krill para asignar una IP al dispositivo.
    * Pública: Krill asignará IP del rango de IPs públicas.
    * NAT: Krill asignará IP del rango de IPs NATeadas.
    * Fixed: Krill reservará la IP fija destinada a ese CPE y no la repartirá en el DHCP.
- **IP Fixed**: IP fija a reservar para ese CPE.
- **IP Fixed LAN**: IP y tamaño de subred a configurar en la parte LAN del equipo.
- **Metro VLAN**: ID de la VLAN a usar en caso de ser Metro ethernet V

#### Tecnología GPON

Para dar de alta un nuevo terminal de fibra óptica en nuestra red debemos rellenar los datos dependiendo  del  fabricante  de  la  ONT,  porque  en  cada  caso  es  diferente.

- **Sn**: utilizaremos el GPON-SerialNumber en caso de los terminales Huawei, ZTE, FH para la sincronización del terminal con OLT.
- **Dsn**: utilizaremos el SN con las siglas iniciales ZTE en caso de ZTE en esta casilla para relacionar la ONT con el tr069.
- **Model**: podremos escoger de entre todos los modelos de ONU que usemos en la red mediante el desplegable.
- **Speed Profile**: elegiremos la tarifa que previamente habremos definido tanto en la OLT como en Kiwi.
- **Line Profile**: Mapa de VLANs a usar en la provisión de la ONT.
- **TV**: Activa o desactiva la TV en el servicio del CPE.
- **Topology**: Campo para rellenar con la sintaxis propia para identificar las fibras.


#### Tecnología WiMAX

Necesitaremos los siguientes datos de la antena:

- **MAC**: de la antena que se vaya a poner en casa del cliente o donde se vaya a recibir la señal.
- **Model**: en este listado aparecerán los modelos que cada operador utiliza en su red.
- **Speed Profile**: la tarifa que queremos que tenga aplicada esa antena o PPPoE.
- **PPPoE Username/Password**: en caso de funcionar por PPPoE la conexión y no por DHCP.

#### Tecnología DOCSIS

Para dar de alta un módem necesitaremos:

- **MAC**: la mac del equipo que se va a poner en casa del cliente.
- **Model**: elegir el modelo para una correcta provisión de los establecidos en la lista.
- **Speed Profile**: la tarifa a aplicar y/o la velocidad asignada para este módem.

#### Tecnología G.HN

Para dar de alta un CPE necesitaremos:

- **MAC**: la mac del equipo que se va a poner en casa del cliente para identificarlo y poder darle IP.
- **Model**: elegir el modelo para una correcta provisión de los establecidos en la lista entre los modelos G.hn.
- **Speed Profile**: la tarifa a aplicar y/o la velocidad asignada para esta conexión.

### Pestaña Administrative Info

![ISP CPE Administrative Info](@images/krill2/isp-customer/0203.png)

En la pestaña Administrative info se agrupan los campos relacionados con la topología y localización del equipo. Aquí podemos encontrar:

- **Topology**: Información sobre el CTO en el que está conectado el equipo, o cualquier otro dato de interés para la gestión de planta externa.
- **External ID**: ID Externo del dispositivo.
- **Dirección**: Datos sobre el país, ciudad, barrio, código postal y dirección física del equipo instalado.
- **Latitude y Longitude**: Se puede rellenar con las coordenadas para elegir su posición en el world map.
- **Notes**: un comentario para identificar o marcar el equipo.

### Pestaña POTSes

![ISP CPE POTSes](@images/krill2/isp-customer/0204.png)

En función de si el equipo tiene disponibles puertos de telefonía, desde esta pestaña podremos configurarlos a través de los diferentes campos:

- **CLI**: Número de teléfono que queremos asociar al CPE.
- **Label**: Nombre del teléfono o un identificador.
- **Context**: Seleccionamos el contexto de llamada de los disponibles.
- **Language**: Determina el idioma del contestador automático y de las opciones de centralita.
- **Username y Password**: Sólo serán necesarios en caso de registrar con un servidor externo de telefonía. Opcionales si registran en la PBX de Krill.
- **DTMF**: Permite elegir el DTMF del teléfono.
- **PBX Ext**: Marcándolo elegimos la extensión como parte de PBXVirtual.
- **Voicemail Password**: Establecemos la password del buzón de voz.
