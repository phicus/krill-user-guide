---
title: Rubik | Services
description: Herramienta de gestión de redes mutualizadas con terceros.
lang: es-ES
prev: /es/krill2/rubik/
next: trouble-tickets
tags:
- krill2
- módulo
- rubik
- mutualización
- mutualizado
- bitstream
- servicios
---
# Rubik | Services

En esta vista tenemos una lista detallada de los últimos servicios, ordenados por defecto por la última modificación.

![Rubik Services](/img/krill2/rubik/0101.png)

Los campos que se muestran son:

- **ID**: ID interno del servicio
- **Administrative ID**: ID del operador mayorista
- **Service Profile**: Perfil de servicio
- **Owner**: Operador mayorista que da soporte al servicio
- **State**: Estado actual en el que se encuentra
- **Planned Installation**: Fecha planificada de instalación
- **Created at**: Fecha de creación
- **Last Update.**: Fecha de última modificación

Desde la barra superior podemos filtrar por owner y por state. Tenemos la opción de exportar los servicios que seleccionemos a un fichero. 

## Creación de un servicio

Pulsando sobre el botón `Add new service` podemos crear un nuevo servicio. Para ello será necesario rellenar los datos de la dirección de alta del servicio así como los datos del cliente siguiendo los pasos que el formulario irá presentando. Desde esta pantalla también podemos crear un Trouble Ticket si encontramos algún problema con el proceso de alta.

El proceso de alta es guiado, siguiendo los pasos de [Get coverage](#get-coverage), [Customer Data](#customer-data) y [Summary](#summary). Una vez cumplimentados los datos se creará el servicio y pasará los diferentes estados que el owner tenga en su procedimiento.

### Get coverage

Debemos rellenar los campos para identificar el lugar físico de la instalación, los datos son ofrecidos por los operadores mayoristas y han de ser coincidencias exactas. 

![Rubik Service creation get coverage](/img/krill2/rubik/0102.png)

Los campos a rellenar son: 

- **Postal Code**: Código postal
- **Locality**: Localidad o barrio
- **City**: Ciudad
- **State / Province**: Estado o provincia
- **Street Type**: Tipo de calle
- **Street Name**: Nombre de la calle
- **Street Number**: Número de la calle

::: tip
Los campos desplegables se completarán con las opciones disponibles según se vayan rellenando los datos, autoseleccionadose los valores cuando solo haya uno disponible.
:::

Una vez confirmada la dirección de la instalación, se presentará una selección de `subdirecciones`, es decir, portales, escaleras, pisos y puertas en las que comprobar la cobertura.

Una vez seleccionados completamente los datos de la dirección, al pulsar sobre la subdirección, se confirmará la cobertura (o no) para la misma.

::: tip
En caso de que no haya cobertura no se podrrá continuar con el proceso, pudiendo si fuera necesario, crear una incidencia.
:::

### Customer data

Si hay cobertura para la dirección seleccionada, se deberá rellenar los datos del cliente a quién se va asociar el servicio.

![Rubik Service creation customer data](/img/krill2/rubik/0103.png)

Los campos necesarios son: 
- **Owner**: Operador mayorista (campo de solo lectura).
- **Service Profile**: Perfil de servicio.
- **Address UID**: Identificador único de la dirección (campo de solo lectura).
- **Customer**: Nombre del cliente
- **External ID**: ID externo del cliente, por ejemplo extraído del CRM.
- **Phone**: Teléfono de contacto
- **Comments**: Comentarios opcionales.
- **Remote ID**: ID remoto para el servicio, en función de las especificaciones del operador mayorista. Puede ser el serial number del equipo o cualquier otro dato.
- **pPAI**: Punto de interconexión facilitado por el operador mayorista en base a sus especificaciones.

### Summary

Resumen de los datos de alta de servicio donde se podrá comprobar que todos los datos introducidos son válidos y realizar el alta del servicio.


## Edición de un servicio

Una vez terminada el alta del servicio se crea una ficha de servicio.

En ella tenemos el estado del servicio y las opciones de comunicación directa y con referencia a este servicio con el owner.

![Rubik Service edition](/img/krill2/rubik/0104.png)

Los estados por los que puede pasar un servicio son: 

- **Reserved**: Alta reservada, pendiente de confirmar.
- **Ordering**: Estado temporal entre la reserva y el proceso de confirmación.
- **Ordered**: Alta ordenada, pendiente de la instalación.
- **Completed**: Alta completada, servicio activo.
- **Canceled**: Servicio cancelado durante el proceso de tramitación.
- **Down**: Servicio dado de baja una vez completado.

::: tip
El cambio entre estados solamente permite pasar a los disponibles en cada momento de forma automática. Por ejemplo, no se puede solicitar una baja de un servicio que aun no ha sido completado.
:::

Adicionalmente se nos ofrece el resumen con los datos del servicio en la misma ficha. 

Desde esta pantalla también se puede asociar un Trouble ticket pulsando en el botón situado en la barra superior.

### Events history

Desde las pestañas superiores de esta vista podemos acceder al histórico de eventos del servicio, es decir por los diferentes estados por los que ha ido pasando, pudiendo ver los datos devueltos en cada cambio.

![Rubik Service event history](/img/krill2/rubik/0105.png)

### Trouble Tickets

En las pestañas superiores se muestra un listado con los Trouble tickets vinculados al servicio en curso, pudiendo ver un pequeño resumen del estado actual o bien acceder al detalle completo pulsando sobre ellos.

![Rubik Service trouble tickets](/img/krill2/rubik/0106.png)

### Test & Diagnostics

Si el operador mayorista lo soporta, el servicio mostrará en la parte superior una pestaña para acceder a los test y diagnósticos del servicio en curso.

![Rubik Service Test and diagnostics](/img/krill2/rubik/0107.png)

::: tip
Los **diagnósticos** son pasivos, es decir, simplemente consultan información relacionada con el servicio, como puede ser un test de configuración o la señal óptica.

Las **acciones** se realizan sobre el equipo del cliente y pueden por ejemplo resetear la ONT. Para ello debemos confirmar la acción pulsando sobre el botón correspondiente.
:::
