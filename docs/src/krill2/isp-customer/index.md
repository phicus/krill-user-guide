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

![ISP Customer Dashboard](@images/krill2/isp-customer/0001.png)

Its menu contains the following elements:

- [Customers](/krill2/isp-customer/customers): It is used for the customers' administrative information. 
- [CPEs](/krill2/isp-customer/cpes): It is used for the information of the devices that are going to be conected in the final facilities.
- [POTs](/krill2/isp-customer/potses): It is used for the information of the telephones that are associated to the CPEs. 
- [CPE Profiles](/krill2/isp-customer/cpe-profiles): It is used for the different fares that can be applied to the CPEs depending on the technology; the same bap is used for GPON, WiMAX, Docsis y G.HN speeds.
- [Contexts](/krill2/isp-customer/contexts): It is used for the call context the PBX is going to use to decide wether to enable the call to a particular number or not.

::: tip CUSTOMERS – CPEs bond

The CPE is what we call **subscriber's terminal** that allows the conectivity in the customer's house (they can be the WiMAX antennas, the GPON ONTs and the DOCSIS' CMs).
A  customer can have more than one CPE but a CPE can't belong to more than one customer at a time.
:::
