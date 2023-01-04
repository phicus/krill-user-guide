---
title: PBX | PBXs
description: Gestión de PBX.
lang: en-US
prev: /krill2/pbx/
next: /krill2/pbx/cdrs
tags:
- krill2
- module
- pbx
---
# PBX | PBXs

En la vista PBXs se muestra el listado de las centralitas virtuales agrupadas por Realm (puede haber uno o más Realms) y en él podemos hacer cambios masivos seleccionando varios a la vez.

![PBX Dashboard](@images/krill2/pbx/0101.png)

## Creación de una PBX

Desde esta pantalla también podemos crear PBX nuevas, pulsando sobre el botón que se encuentra en la parte superior.

Lo primero que debemos hacer es seleccionar el cliente al que vincular la PBX.

<p align="center"><img src="@images/krill2/pbx/0102.png" max-width=30% width=500;></p>

Se pueden dar dos casos:

1. El cliente ya tiene una PBX configurada y solo se nos permitirá editarla.
    <p align="center"><img src="@images/krill2/pbx/0103.png" max-width=30% width=500;></p>   
2. El cliente no tiene ninguna PBX y se nos habilita el botón de crear una nueva PBX.
    <p align="center"><img src="@images/krill2/pbx/0104.png" max-width=30% width=500;></p>

::: tip
Si el cliente seleccionado no tiene POTSes asociados para las extensiones, podemos crearlos siempre previamente desde el módulo de ISP / Customer, [creación de CPEs](/krill2/isp-customer/cpes.html#creacion-de-cpes), en el apartado [pestaña POTSes](/krill2/isp-customer/cpes.html#pestana-potses), rellenando los campos necesarios:

- **CLI**: Identificador del cpe en la PBX.
- **SIP Username**: usuario sip de registro (sólo si es necesario).
- **SIP Password**: contraseña sip (sólo si es necesario).
- **PBX Ext**: tendremos que seleccionarla para que podamos usarla como una extensión de esa PBX.
- **Voicemail**: en los cpes que marquemos la casilla voicemail. tendremos la opción de permitir a los usuarios recibir, almacenar y gestionar mensajes de voz recibidos a dicha extensión, normalmente cuando no está disponible.

![ISP CPE POTSes](@images/krill2/isp-customer/0204.png)

:::

Una vez que se haya creado la nueva PBX o encontrado la PBX del cliente, podemos continuar con su edición.

## Edición de una PBX

En la pantalla de edición de PBX podemos encontrar diversos campos agrupados en secciones.

![PBX Edition](@images/krill2/pbx/0407.png)

### Main configuration

Configuración principal de la PBX

- **Ring time**: indica el número de segundos que sonará cada una de las extensiones asociadas al ddi de entrada.
- **Schedule**: podremos seleccionar el horario que queremos que siga la pbx, ya sea el que viene por defecto configurado o uno que personalicemos a nuestro gusto.
- **Language**: desde este selector podremos decidir el idioma para las locuciones de la PBX.
- **Contexts**: aquí tendremos la opción de seleccionar los destinos permitidos para la pbx, como podría ser llamadas nacionales, un todo permitido o algo más restrictivo como sólo destinos móviles.
- **Coments**:  aquí podemos agregar cualquier nota que nos sea útil para identificar, por ejemplo, al cliente.
- **Holidays**: desde este apartado podemos seleccionar día predefinidos o crear alguno concreto en el que la pbx se comporte como festivo.

### Incoming

Opciones que determinan el comportamiento de la PBX a la hora de recibir una llamada entrante.

<p align="center"><img src="@images/krill2/pbx/0420.png" max-width=30% width=600;></p>

- **FIX**: Si completamos este campo, predominará sobre cualquier horario creado y la llamada siempre entrará aquí 24/7
- **Within the schedule**: Lo que pongamos en esta parte se cumplirá dentro de horario, por ejemplo, la recepción creada anteriormente de “Bienvenida”
- **Holidays**: aquí seleccionamos lo que queramos que haga la pbx cuando nos encontremos en horario de Vacaciones.
- **Outside the schedule**: aquí seleccionamos la acción que queramos que realice la PBX cuando no estemos dentro del horario principal de la PBX.

### Outgoing

En la opción Outgoing podemos asignar el número que queremos presentar al exterior por defecto.

<p align="center"><img src="@images/krill2/pbx/0411.png" max-width=30% width=600;></p>

### DDIs

Los DDI permiten asignar una numeración fija a una extensión o a un grupo de ellas.

![PBX DDIs](@images/krill2/pbx/0408.png)

Se añaden los números de teléfono que se quieren tener en la PBX y se marcn las extensiones asociadas para que suenen en cada caso.

<p align="center"><img src="@images/krill2/pbx/0409.png" max-width=30% width=500;></p>

Una vez creados los DDIs se puede asociar a las extensiones un número de salida para que cada DDI se presente al exterior.

<p align="center"><img src="@images/krill2/pbx/0410.png" max-width=30% width=600;></p>

### Groups

En este apartado, se pueden configurar grupos de extensiones, con funcionalidades concretas para cada uno.

![PBX Groups](@images/krill2/pbx/0424.png)

Al pulsar sobre añadir grupo se abrirá un cuadro de diálogo.

<p align="center"><img src="@images/krill2/pbx/0423.png" max-width=30% width=500;></p>

Se deberán rellenar los siguientes campos:

- **CLI**: aquí se indicará el identificador del grupo (la extensión que tendrá el grupo).
- **Name**: nombre del grupo
- **Extensions**: en este apartado se incluirán la extensión (o extensiones) que se quiera que pertenezcan al grupo, las cuales sonarán cuando se llame al cli del grupo.
- **Fail**: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.
- **Out of Schedule**: Dónde saltará la llamada fuera del horario seleccionado.
- **Schedule**: Horario de atención del grupo de extensiones.
- **Holiday**: Determina si el grupo atiende llamadas en días festivos.

### Queues

Las colas son parecidas a los grupos, pero permite encolar llamadas entrantes e ir distribuyéndolas entre las extensiones que se vayan quedando libres. 

![PBX Groups](@images/krill2/pbx/0427.png)

La creación de una cola se hace de la misma forma que los grupos, pero hay más opciones disponibles, agrupadas en `General`, `Options` y `Announce`.

#### General

Los campos a rellenar son los mismos que para un grupo:

<p align="center"><img src="@images/krill2/pbx/0428.png" max-width=30% width=500;></p>

- **CLI**: aquí se indicará el identificador del grupo (la extensión que tendrá el grupo).
- **Name**: nombre del grupo
- **Extensions**: en este apartado se incluirán la extensión (o extensiones) que se quiera que pertenezcan al grupo, las cuales sonarán cuando se llame al cli del grupo.
- **Fail**: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.
- **Out of Schedule**: Dónde saltará la llamada fuera del horario seleccionado.
- **Schedule**: Horario de atención del grupo de extensiones.
- **Holiday**: Determina si el grupo atiende llamadas en días festivos.

#### Options

<p align="center"><img src="@images/krill2/pbx/0429.png" max-width=30% width=500;></p>

Se pueden modificar los siguientes campos:

- **Wrap uptime**: tiempo de pausa entre llamadas para la misma extensión (agentes) de la cola
- **Max users**: límite de usuarios que se permiten en la cola
- **User timeout**: tiempo máximo hasta que la llamada sea considerada fallida
- **Agent timeout**: tiempo de salto entre las diferentes extensiones (agentes) de la cola

#### Announce

Las opciones disponibles son:

<p align="center"><img src="@images/krill2/pbx/0430.png" max-width=30% width=500;></p>

- **Announce**: tipo de reporte de situación de espera.
- **Announce frequency**: frecuencia de reporte de situación.
- **Record**: locución o música pregrabada a reproducir durante la espera.
- **Periodic announce frequency**: frecuencia de la locución

### Recepcionists

Los recepcionistas son locuciones que se reproducen con unas condiciones determinadas, por ejemplo, dentro o fuera de un horario. Normalmente se usan para dar la bienvenida a la llamada entrante y permiten anunciar las opciones a marcar para que la PBX desvíe la llamada a una extensión u otra.

![PBX Recepcionists](@images/krill2/pbx/0416.png)

Al crear un nuevo recepcionista, deberemos configurar los siguientes campos:

<p align="center"><img src="@images/krill2/pbx/0425.png" max-width=30% width=500;></p>

- **Name**: Nombre identificativo.
- **Record**: Posición de la grabación a reproducir.
- **Schedule**: Horario en el que saltará el recepcionista y se reproducirá la locución.
- **Holidays**: Determina si la recepcionista atenderá llamadas en días festivos.
- **Fail**: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.
- **Out of Schedule**: Dónde saltará la llamada fuera del horario seleccionado.

Al desplegar las demás opciones, podremos especificar el número que identificará cada uno de los desvíos:

<p align="center"><img src="@images/krill2/pbx/0426.png" max-width=30% width=500;></p>

Se podrán dar de alta tantas marcaciones como se quieran, pudiendo especificar para cada una de ellas:

- **Name**: Nombre identificativo.
- **Dial**: Número a marcar.
- **Jump**: Grupo de salto para el desvío, pudiendo ser estos: otras recepcionistas, grupos, colas, o incluso DDIs directamente.

### Schedules

Desde esta sección se podrán crear y modificar los horarios de recepción de llamadas.

![PBX Recepcionists](@images/krill2/pbx/0412.png)

Si por ejemplo queremos crear un horario especial para vacaciones, pulsaremos sobre el botón de añadir horario:

<p align="center"><img src="@images/krill2/pbx/0413.png" max-width=30% width=500;></p>

Una vez especificado el nombre identificativo que se le quiera dar, pulsamos sobre añadir para terminar de editar los elementos que compondrán el horario:

<p align="center"><img src="@images/krill2/pbx/0414.png" max-width=30% width=500;></p>

- **Active**: Determina si esa franja está activa o no
- **Week day from**: Desde qué día de la semana comienza el horario.
- **Week day to**: Que día finaliza el horario (puede ser el mismo día que el de inicio).
- **Morn. from**: Hora de inicio por la mañana.
- **Morn. to**: Hora de fin por la mañana.
- **Ev. from**: Hora de inicio por la tarde.
- **Ev. to**: Hora de fin por la tarde.
