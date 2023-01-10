---
title: ISP Customer | Perfiles de CPE
description: Listado y gestión de perfiles de CPE.
lang: es-ES
prev: potses
next: contexts
tags:
- krill2
- módulo
- isp
- profiles
- cpe-profiles
- realm
---
# ISP Customer | Perfiles de CPE

Apartado para gestionar los perfiles de velocidad de la red agrupados por Realm (puede haber uno o más Realms). Hay que diferenciar los perfiles por tecnología.

![ISP CPE Profiles](/img/krill2/isp-customer/0301.png)

Pulsando sobre Add CPE profile se desplegará el menú para los nuevos perfiles:

<p align="center"><img src="/img/krill2/isp-customer/0302.png" width="300"></p>

Para dar de alta un perfil debemos rellenar los campos:

- **Nombre**: Etiqueta descriptiva que le queremos dar al perfil
- **Label**: Etiqueta de configuración para determinadas tecnologías 
- **Tecnología**: Tecnología a la que se aplicará este perfil 
- **Downstream profile**: Perfil de velocidad de bajada
- **Upstream profile**: Perfil de velocidad de subida
- **Acceso a Internet.**: 
