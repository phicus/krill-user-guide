---
title: Creación de Usuarios
description: Creación de usuarios de Krill a través del panel de `/admin`.
lang: es-ES
prev: login
next: users
tags:
- krill2
- crear usuarios
- oauth
---

**Crear un usuario para Krill a través del panel de `/admin`**

1.  Accedemos al panel de admin:

    Para ello debemos de acceder a <https://XXX.phicus.es/admin> con las credenciales que usamos habitualmente para **Krill**.

    ![](/img/admin-users/admin-login.png)

2.  Una vez dentro veremos este panel:

    ![](/img/admin-users/admin-menu.png)

3.  Nos dirigimos a Users, donde podremos ver todos los usuarios que tenemos creados:

    ![](/img/admin-users/admin-users-list.png)

4.  Arriba a la derecha podemos añadir un nuevo usuario mediante “Add User”:

    ![](/img/admin-users/admin-add-user.png)

    Nos aparece esta pantalla, donde debemos ingresar el Usuario y la contraseña 2 veces.

5.  Una vez hayamos creado el usuario podremos administrar los permisos:

    ![](/img/admin-users/admin-change-user.png)

6.  Posteriormente a esto debemos de otorgarle los permisos al realm correspondiente, ya que la red puede estar dividida en realms, y cada uno de estos tiene una visibilidad distinta.

    Vamos a partir de que el realm a modificar es el principal y por defecto, llamado “cpe”:

    ![](/img/admin-users/admin-change-realm.png)

Una vez veamos esta imagen, debemos entrar dentro del propio realm, en este caso pulsándole al “1”, para poder administrar los distintos usuarios que tengan acceso al realm:

![](/img/admin-users/admin-users-realm.png)

Aquí ya se podría insertar los distintos usuarios que tengan permiso para ver el Realm CPE. El funcionamiento para cualquier realm sería exactamente igual.

**Explicación de Grupos y Permisos en el Panel de Administración**

**Grupos**

**APP**

Las aplicaciones son módulos específicos dentro de tu sistema que ofrecen diferentes funcionalidades. Cada aplicación maneja una parte particular del sistema.

::: tip Ejemplo   
 - **APP inventory**: Gestiona todo lo relacionado con el inventario, como productos, stock y entradas/salidas de mercancías.  
 - **APP voip**: Maneja los servicios de VoIP (Voice over IP), gestionando llamadas y comunicaciones de voz a través de Internet.
:::

**HG (Host Groups)**

Los grupos de host son colecciones de dispositivos o servicios que se gestionan juntos. Estos grupos permiten organizar y monitorear diferentes componentes de la infraestructura.

::: tip Ejemplo
 - **HG CORE Servers**: Incluye todos los servidores principales del sistema, esenciales para el funcionamiento de la red y servicios.  
 - **HG CORE Router**: Agrupa todos los routers centrales, cruciales para la gestión del tráfico de datos.
:::

**Realm**

Los 'realms' son dominios específicos dentro del sistema que agrupan dispositivos o servicios similares, facilitando su gestión y monitoreo.

::: tip Ejemplo
 - **realm:cpeethernet**: Se refiere al dominio de dispositivos CPE (Customer Premises Equipment) que utilizan tecnología Ethernet.  
 - **realm:swtdocsis**: Incluye dispositivos del Realm: SWT que utilizan la tecnología DOCSIS para transmisión de datos sobre cable coaxial.
:::

**Permisos**

**Estructura de Permisos**

Cada permiso se presenta en el formato 'aplicación \| modelo \| acción'.  
 - **Aplicación**: La parte del sistema donde se aplica el permiso (ej. account, admin).  
 - **Modelo**: El tipo de datos o entidad sobre la que se aplica el permiso (ej. email address, user).  
 - **Acción**: La operación que se permite realizar, como añadir (add), cambiar (change), eliminar (delete) o ver (view).

**Ejemplos de Permisos**

 - **account \| email address \| Can add email address**: Permite al usuario añadir una nueva dirección de correo electrónico en la aplicación de cuentas.  
 - **auth \| user \| Can change user**: Permite al usuario modificar los datos de otros usuarios en la aplicación de autenticación.  
 - **icingadb \| hostgroup \| Can monitor CORE Servers**: Permite al usuario monitorear los servidores centrales en el grupo de hosts CORE.  
 - **isp \| Customer \| Can view Customer**: Permite al usuario ver los datos de los clientes en la aplicación ISP (Proveedor de Servicios de Internet).

**Funcionamiento**

**Asignación de Permisos**

Cada usuario en tu sistema puede tener asignados varios permisos. Estos permisos determinan qué acciones pueden realizar dentro de las aplicaciones específicas del sistema.  
\- Ejemplo: Un usuario con el permiso 'Can view email address' puede ver las direcciones de correo, pero no modificarlas ni eliminarlas.

**Grupos de Usuarios**

Los usuarios pueden ser agrupados en 'Grupos' que tienen un conjunto común de permisos. Esto facilita la gestión de permisos para múltiples usuarios que necesitan los mismos accesos. En lugar de asignar permisos individualmente a cada usuario, se asignan a un grupo, y los usuarios se añaden a este grupo.

::: tip Ejemplo
 - **Grupo Soporte**: Podría tener permisos como 'Can view Customer' y 'Can view isp'. Todos los usuarios en el grupo Soporte heredarán estos permisos.  
 - **Grupo Administradores**: Tendría permisos más amplios, como 'Can add user', 'Can delete user', 'Can view all data', permitiendo una gestión completa del sistema.
:::
