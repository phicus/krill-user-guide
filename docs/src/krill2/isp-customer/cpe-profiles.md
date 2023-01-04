---
title: ISP Customer | CPE Profiles
description: Listado y gestión de CPE Profiles.
lang: en-US
prev: /krill2/isp-customer/potses
next: /krill2/isp-customer/contexts
tags:
- krill2
- module
- isp
- profiles
- cpe-profiles
- realm
---
# ISP Customer | CPE Profiles

Apartado para gestionar los perfiles de velocidad de la red agrupados por Realm (puede haber uno o más Realms). Hay que diferenciar los perfiles por tecnología.

![ISP CPE Profiles](@images/krill2/isp-customer/0301.png)

Pulsando sobre Add CPE profile se desplegará el menú para los nuevos perfiles:

<p align="center"><img src="@images/krill2/isp-customer/0302.png" max-width=30% width=300;></p>

Para dar de alta un perfil debemos rellenar los campos:

- **Nombre**: Etiqueta descriptiva que le queremos dar al perfil
- **Label**: Etiqueta de configuración para determinadas tecnologías 
- **Tecnología**: Tecnología a la que se aplicará este perfil 
- **Downstream profile**: Perfil de velocidad de bajada
- **Upstream profile**: Perfil de velocidad de subida
- **Acceso a Internet.**: 
