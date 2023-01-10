---
title: Panel de mandos
description: Krill's main view.
lang: en-US
prev: users
next: null
tags:
- krill2
- dashboard
- main search engine
- widgets
- user's menu
- user
- logout
---
# Control Panel

When the user logs in for the first time in the interface a window like the following is shown:

![Dashboard](@images/krill2/main/0200.png)

Here we can also find some elements that will appear in the rest of Krill2's pages.

- [Tool's bar and local search](#tools-bar-and-local-search)
- [user's menu](#users-menu)
- [Lateral menu and main search engine](#lateral-menu-and-main-search-engine)

## Dashboards

KrillUI's main page can be customized with different Widgets, they will allow to see the network's general condition, the hosts and services' more critical incidents, the monitorization sistem's health condition, etc.

We can have as many dashboards as we like, and each of them can have different widgets to have them in order.

Para poder crear nuevos dashboards, pulsaremos sobre el icono de los 3 puntos que aparece en la esquina superior derecha, y pulsando sobre `editar dashboard` se nos habilitará la opción de poder ***Crear un dashboard***, ***Renombrar el dashboard***, o ***Eliminar el dashboard***.

## Widgets

The first widget that is shown is the welcome one, it offers the user a little KrillUI's use guide.

::: tip
Then more widgets can be added to give the screen more functions.
:::

Para añadir un widget, una vez que estamos en modo edición del dashboard, lo podemos hacer desde el botón inferior derecho de la pantalla, pulsado sobre el que nos interese. El widget se agregará al primer espacio libre que detecte en la pantalla.

Para mover o cambiar el tamaño de un widget debemos primero hacer clic en el icono del candado que aparece en su encabezado(). Después de esto, se habilitará un botón junto a su título.(), que nos permitirá moverlo, y otro en la esquina inferior derecha para poder redimensionarlo().

Para eliminar un widget, una vez desbloqueado, debemos hacer clic en el botón de la papelera que aparecerá en el lado derecho del encabezado.

Tras terminar el "tutorial" y añadir widgets encontramos el dashboard con los widgest elegidos o los que hay por defecto.

![Widgets](@images/krill2/main/0202.png)

Algunos widgets son:

- **Resumen de la red**: Colored graph by sectors that gives updated information on the network's condition regarding Hosts and Services and differentiating its conditions.
- **Hosts' problems**: List of the problems related to hosts that affects the network more ordered by criticality.
- **Services' problems**: List of the problems related to the kksksects the network more ordered by criticality.
- **Historial de problemas**: Lista de problemas en las últimas 24 horas registrados por Krill.

## Tool bar and local search

![AppBar](@images/krill2/main/0205.png)

In green, it has the local searcher for each module. At the right it also have a dropdown with the views and gives us access to the user's menu.

The searcher allows to search in the local view, if it is allowed, or in the main view of the Krill's active module. For example, if we are on a CPE's file, and we make a search, it is going to show us a list of services and devices that match the search criteria.

::: tip
In the searcher we also have access to the saved as favorite searches, we can add as many of them as we like clicking on the bookmark that appears at the right of the search. 

At the same time, it will show us the last 10 searches that have been done so we can access them quicker.
:::

## User's menu

It shows first which user are we logged in with, beneath that it shows the Krill's applications/modules. The modules the user sees are based on the permissions the logged in user has. 

<p align="center"><img src="@images/krill2/main/0206.png" max-width=30% width=200;></p>

In this menu we can change between modules. The modules available today are:

- **Monitoring**: [Monitorization of the network's devices and services](/krill2/monitoring/)
- **Customers/ISP**: [Cutomers and CPEs' management](/krill2/isp-customer/)
- **PBX**: [PBX management](/krill2/pbx/)
- **Radius/Oratio**: [PPPoE session and IPs' pool control](/krill2/radius/)
- **Installer tools**: [Installer tools](/krill2/installer-tools/)
- **Rubik**: [Tool for managing networks mutualized with other operators](/krill2/rubik/)

From this menu we can change Krill's language.

It allows to choose the web's self-refresh time, mute the Krill's alert sounds or activate/deactivate the triage mode.

Here you can also unlog your session.

## Lateral menu and main search engine

The lateral panel's menu includes shortcuts to view or files of interest.

In the first place, at the top is the main search engine.

<p align="center"><img src="@images/krill2/main/0203.png" max-width=30% width=200;></p>

The main search engine can link services and hosts in the seam search, making it possible to find a CPE by searhing anything related to them, administrative or technical information. 

::: tip
New sections are going to be incorporated where searches that allows to find results in any of the modules we have access can be done.
:::

Here are the menus that change according to the module we are using.A continuación los menús que cambian según el módulo que hagamos uso.

<p align="center"><img src="@images/krill2/main/0204.png" max-width=30% width=200;></p>

In the monitorization module, for example, it gives a shortcut to the alarms and the network's problems, as well as to the different host groups.

The Tactical View that allows us to view and organize the information on different network's elements: Matrix, Trivial, pending provition ONUs, sessiones Radius, etc, can also be accessed.
