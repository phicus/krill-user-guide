---
title: Installer Tools
description: Herramientas del instalador.
lang: es-ES
prev: null
next: null
tags:
- krill2
- modulo
- herramienta del instalador
- installer-tools
---
# Installer Tools

La herramienta Installer tools está pensada para facilitar las instalaciones de ONTs al técnico instalador de la red. En cuestión de segundos un técnico puede dar de alta una ONT y hacerla funcionar con un móvil o tablet.

Permite dar de alta un CPE teniendo dado de alta previamente el Customer; usando la geolocalización del móvil con el que se da el alta y escogiendo el SN de la lista de ONUs pendientes.

![ISP Customer Dashboard](@images/krill2/installer-tools/0001.png)

Rellenando los 3 campos, se tramita la provisión del CPE. Más adelante se podrán ver los datos de monitorización del equipo o se le podrán modificar los datos necesarios yendo a su ficha de CPE en el [módulo Customers](/krill2/isp-customer/cpes.html#edicion-de-cpes).

::: tip
Podremos introducir el serial number de 3 maneras distintas:

1. A mano introduciendo los dígitos en el campo correspondiente.
2. Desplegando el listado que aparece en el campo.
3. Pulsando en la lupa y accediendo al listado de ONUs pendientes de configurar agrupadas por OLT.

![ISP Customer Unconfigured ONUs](@images/krill2/installer-tools/0002.png)
:::

Una vez solicitada, el equipo aparecerá en el panel de **`CPE Watcher`**, pendiente de recibir los datos de la cabecera: IP concedida, umbrales de transmisión, tiempo desde la provisión, etc.)

<p align="center"><img src="@images/krill2/installer-tools/0003.png" max-width=30% width=400;></p>

Estos datos permitirán saber al técnico de campo si es necesario que realice alguna actuación adicional sobre la instalación o bien tramite, desde la propia aplicación, la desprovisión del equipo actual e introducir uno nuevo desde el menú contextual de los tres puntos que aparece con cada equipo provisionado.
