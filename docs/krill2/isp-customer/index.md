---
title: ISP Customer
description: Customers and CPEs management.
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

It is used to register, modify or delete customers and customers' devices in the network. It is also called administrative module and before that Kiwi. It has in the same page all the technologies that Krill provision and monitor together. 

![ISP Customer Dashboard](/img/krill2/isp-customer/0001.png)

Its menu contains the following elements:

- [Customers](/guide/krill2/isp-customer/customers.html): It is used for the customers' administrative information.
- [CPEs](/guide/krill2/isp-customer/cpes.html): It is used for the information of the devices that are going to be connected in the final facilities.
- [POTs](/guide/krill2/isp-customer/potses.html): It is used for the information of the telephones that are associated to the CPEs.
- [CPE Profiles](/guide/krill2/isp-customer/cpe-profiles.html): It is used for the different fares that can be applied to the CPEs depending on the technology; the same bap is used for GPON, WiMAX, Docsis y G.HN speeds.
- [Contexts](/guide/krill2/isp-customer/contexts.html): It is used for the call context the PBX is going to use to decide whether to enable the call to a particular number or not.

::: tip CUSTOMERS – CPEs bond

The CPE is what we call **subscriber's terminal** that allows the connectivity in the customer's house (they can be the WiMAX antennas, the GPON ONTs and the DOCSIS' CMs).

A  customer can have more than one CPE but a CPE can't belong to more than one customer at a time.
:::
