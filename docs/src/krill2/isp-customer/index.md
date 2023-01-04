---
title: ISP Customer
description: Gestión de clientes y CPEs.
lang: en-US
prev: null
next: /krill2/isp-customer/customers
tags:
- krill2
- module
- isp
- customers
- cpes
- realm
---
# ISP Customer

Apartado web destinado al alta, modificación o baja de los clientes y equipos de clientes en la red. También llamado módulo administrativo y anteriormente Kiwi. Reúne en la misma vista las diversas tecnologías que Krill provisiona y monitoriza. 

![ISP Customer Dashboard](@images/krill2/isp-customer/0001.png)

Su menú contiene los siguientes elementos:

- [Customers](/krill2/isp-customer/customers): Apartado destinado a los datos administrativos de los clientes
- [CPEs](/krill2/isp-customer/cpes): Apartado destinado a los datos de los equipos que se conectarán en las instalaciones finales
- [POTs](/krill2/isp-customer/potses): Apartado destinado a los datos telefónicos asociados a los CPEs
- [CPE Profiles](/krill2/isp-customer/cpe-profiles): Apartado destinado a las diferentes tarifas usables por las tecnologías en los CPEs: En el mismo apartado se manejan las velocidades de GPON, WiMAX, Docsis y G.HN
- [Contexts](/krill2/isp-customer/contexts): Apartado destinado a los contextos de llamada que la PBX usará para permitir o no permitir llamar a los destinos escogidos

::: tip Relación CUSTOMERS – CPEs

Customer es a lo que llamamos **cliente**. CPE es a lo que llamamos **terminal del abonado** que permite  la  conexión  final  en  casa  del  cliente  (pueden  ser  las  antenas  en  WiMAX,  las  ONTs  en Fibra y los CMs en DOCSIS).

Un  customer  puede  tener  varios  CPEs. Un CPE no puede pertenecer a varios customers a la vez.
:::
