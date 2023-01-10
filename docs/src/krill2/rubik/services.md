---
title: Rubik | Services
description: Tool for managing networks mutualized with other operators.
lang: en-US
prev: /krill2/rubik/
next: /krill2/rubik/trouble-tickets
tags:
- krill2
- module
- rubik
- mutualized
- services
- bitstream
---
# Rubik | Services

In this page we have a detailed list of the last services, ordered by default based on the last modification.
![Rubik Services](@images/krill2/rubik/0101.png)

The fields that are shown are:

- **ID**: Service's internal ID
- **Administritave ID**: Main operator's ID
- **Service Profile**: Service's profile
- **Owner**: Main operator that gives support to the service
- **State**: Service's actual condition
- **Planned Installation**: Installation due date
- **Created at**: Creation's date
- **Last Update.**: Last modification's date

From the bar at the top we can filter by owner and by condition. We have the option to export the services we select to a file.

## Service's creation

Clicking on the `Add new service` button we can create a new service. To do so we have to complete the information about the address where the service is going to be installed as well as the customer information following the steps on the form. From this screen we can also create a Trouble Ticket if we find some problem with the registration process.

The registration process is guided, following the steps of [Get coverage](#get-coverage), [Customer Data](#customer-data) and [Summary](#summary). Once the information is entered the service is going to be created and will go through the different process the owner has in its procedure.

### Get coverage

We must fill in the fields to identify the physical place of the installation, the information is offered by the main operator and have to be exact coincidences. 

![Rubik Service creation get coverage](@images/krill2/rubik/0102.png)

The fields we must fill in are: 

- **Postal Code**: Postal code
- **Locality**: Neighborhood or locality
- **City**: City
- **State / Province**: State or province
- **Street Type**: Type of street
- **Street Name**: treet's name
- **Street Number**: Street's number

::: tip
The fields that have a dropdown are going to be completed with the available options that appear while the information is filled in, the value is going to self select when only one is available.
:::

Once the installation address is confirmed, a 'subaddress' selection is going to be shown, like doorway, stairs, floors and doors in which the coverage needs to be tested.

Once the address information is completely selected, when cliking on the subaddress, its coverage is going to be confirmed (or not).

::: tip
When there isn't coverage the process can0t be continued, if necessary a ticket can be created reporting the incident.
:::

### Customer data

If there's coverage for the address selected, the information of the customer to whom the service is going to be linked needs to be filled in.

![Rubik Service creation customer data](@images/krill2/rubik/0103.png)

The following fields are necessary: 
- **Owner**: Main operator (read only field).
- **Service Profile**: Service profile.
- **Address UID**: Unique address identifier (read only field).
- **Customer**: Customer's name.
- **External ID**: Customer external ID, for example the one in the CRM. 
- **Phone**: Contact phone.
- **Comments**: Optional comments.
- **Remote ID**: Remote ID for the service, following the specifications from the main operator. It can be the device's serial number or any other information. 
- **pPAI**: Interconnection point that the main operator gives based on its specifiations.

### Summary

Registration information's summary where the information can be checked and the service can be registered.


## Service's edition

Once the registration is done a file for the service is created.

On the file we have the condition of the service and the direct communication options regarding this service with the owner.

![Rubik Service edition](@images/krill2/rubik/0104.png)

The conditions a service can go through are:

- **Reserved**: Registration reserved, pending confirmation.
- **Ordering**: Temporary condition between the reservation and the confirmation process.
- **Ordered**: Registration ordered, pending installation. 
- **Completed**: Registration completed, active service.
- **Canceled**: Cancelled service during the process.
- **Down**: Service unregistered once it is completed.

::: tip
The change between condition only allows to change the available ones at each time automatically. For example, the unregistration of a service can't be requested if the service has not been completed yet.
:::

Furthermore, the summary with the service information is offered in the same file.

From this screen a Trouble Ticket can also be associated by clicking on the button on the bar at the top.

### Events history

From the tabs at the top in this view we can access the service's events historical register, meaning the differents conditions it went through and the information displayed on every change. 

![Rubik Service event history](@images/krill2/rubik/0105.png)

### Trouble Tickets

In the tabs at the top a list with the Trouble tickets linked to the service is shown with a little summary of the current condition or the option to click on them to access the complete report.

![Rubik Service trouble tickets](@images/krill2/rubik/0106.png)

### Test & Diagnostics

If the main operator allows it, the service is going to shown at the top a tab to access the test and diagnostic of the service.

![Rubik Service Test and diagnostics](@images/krill2/rubik/0107.png)

::: tip
The **diagnostics** are passive, meaning they just ask for the information related with the service, like a configuration test or the optical signal.

The **actions** are done on the customer's device and can be, for example, restarting the ONT. In order for it to be executed we must confirm the action by clicking the button.
:::
