---
title: Gestión NAP / CTO
description: Inventario red pasiva fibra optica.
lang: es-ES
prev: null
next: null
sidebar: auto
tags:
- krill2
- module
- NAP
- admin
- api
---
# Gestión NAP / CTO

En este módulo, se puede añadir y visualizar los elementos pasivos de una red de fibra, comúnmente llamados NAP o CTO. El módulo es accesible desde la opción Admin. 

<p align="center"><img src="/img/krill2/admin/01-admin-menu.png" width="433"></p>

Desde el dashboard principal, se puede acceder a:

- [Nuevo NAP](/es/krill2/admin/#nuevo-nap): Crear un nuevo NAP.
- [Lista de NAPs](/es/krill2/admin/#lista-de-naps): Ver el listado de todos los NAP existentes.

![admin Dashboard](/img/krill2/admin/02-module-gis.png)

## Nuevo NAP

![Nuevo NAP](/img/krill2/admin/03-create-nap.png)

En esta vista, se añaden los datos del nuevo NAP, algunos campos son obligatorios y otros opcionales. A continuación mostramos el detalle de cada uno:

- **Name**: Nombre descriptivo para el NAP. (Actualmente, debe utilizarse un formato tipo SLUG sin espacios ni caracteres especiales, por ejemplo caja-zonaA-barrioZ-001).
- **OLT**: OLT a la que está conectada.
- **PON**: frame/slot/puerto al que está conectada (Opcional).
- **Address**: Campo utilizado para realizar la búsqueda colocando el nombre de la calle donde está ubicado el NAP. Además la ubicación se puede seleccionar dando click directamente en el mapa de la parte derecha.
- **Capacity**: Número de puertos del NAP (Opcional).
- **Opt_power**: Campo donde se indica el nivel óptico del NAP (Opcional).
- **External_id**: id externo en caso de que se use un sistema externo para el registro de los NAP.

### Asociar NAP a CPE

Una vez creado el NAP, estará disponible para ser asignado a los CPE. Desde la ficha de edición del CPE, en el campo Topology, se asocia el nombre del NAP correspondiente. También es posible asociar la caja directamente desde el mapa de la izquierda haciendo clic sobre ella.

![isp cpe](/img/krill2/admin/05-cpe.png)


## Lista de NAPs


Listado de NAPs existentes en AdminSchema:

![list NAP](/img/krill2/admin/04-list-nap.png)

### Vista World Map

Además del listado, desde la vista World Map, es posible visualizar los NAP en su ubicación correspondiente. Para ello, se debe hacer clic en el botón del mapa ubicado en la parte superior derecha, a la izquierda del icono de un router.

![Map](/img/krill2/admin/06-map.png)