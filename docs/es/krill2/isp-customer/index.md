---
title: ISP Customer
description: Gestión de clientes y CPEs.
lang: es-ES
prev: null
next: customers
tags:
- krill2
- módulo
- isp
- customers
- cpes
- realm
---
# ISP Customer

Apartado web destinado al alta, modificación o baja de los clientes y equipos de clientes en la red. También llamado módulo administrativo y anteriormente Kiwi. Reúne en la misma vista las diversas tecnologías que Krill provisiona y monitoriza. 

![ISP Customer Dashboard](/img/krill2/isp-customer/0001.png)

Su menú contiene los siguientes elementos:

- [Customers](/guide/es/krill2/isp-customer/customers.html): Apartado destinado a los datos administrativos de los clientes
- [CPEs](/guide/es/krill2/isp-customer/cpes.html): Apartado destinado a los datos de los equipos que se conectarán en las instalaciones finales
- [POTs](/guide/es/krill2/isp-customer/potses.html): Apartado destinado a los datos telefónicos asociados a los CPEs
- [CPE Profiles](/guide/es/krill2/isp-customer/cpe-profiles.html): Apartado destinado a las diferentes tarifas usables por las tecnologías en los CPEs: En el mismo apartado se manejan las velocidades de GPON, WiMAX, Docsis y G.HN
- [Contexts](/guide/es/krill2/isp-customer/contexts.html): Apartado destinado a los contextos de llamada que la PBX usará para permitir o no permitir llamar a los destinos escogidos

::: tip Relación CUSTOMERS – CPEs

Customer es a lo que llamamos **cliente**. CPE es a lo que llamamos **terminal del abonado** que permite  la  conexión  final  en  casa  del  cliente  (pueden  ser  las  antenas  en  WiMAX,  las  ONTs  en Fibra y los CMs en DOCSIS).

Un  customer  puede  tener  varios  CPEs. Un CPE no puede pertenecer a varios customers a la vez.
:::
