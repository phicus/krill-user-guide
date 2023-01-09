---
title: Rubik | Trouble Tickets
description: Tool for managing networks mutualized with other operators.
lang: en-US
prev: /krill2/rubik/services
next: null
tags:
- krill2
- module
- rubik
- mutualized
- trouble
- tickets
- bitstream
---
# Rubik | Trouble Tickets

The trouble tickets system allows us to contact the owners about the services, giving also de option to associate the tickets to the specific services or open them in a general way. 

In the main view of the panel we have a summary of the trouble ticket ordered by the date of the last update.

![Rubik Trouble tickets list](@images/krill2/rubik/0201.png)

The following fields are shown:

- ID
- Customer
- Address
- Owner
- State
- Priority
- Type
- Symptom
- Created at
- Last Update

We can filter and order the tickets by any of the fields. We can also export them to a file.

## Creation of a Trouble Ticket

We can generate a new ticket by clicking in the red button that says New Trouble Ticket, a Pop-up will show up and we will have to fill the requested information.

::: tip
We can also generate tickets from the page where we register new services or from the page where we edit a service that's been already registered, in this case the ticket will be linked to the service.
:::

![Rubik Trouble tickets creation](@images/krill2/rubik/0202.png)

The fiels needed to create a new ticket are:

- **Owner**: Depending on where the ticket was created this field will already be selected and not available for modifications or will be empty and have to be selected manually. 
- **Priority**: Ticket's importance
- **Number of customer affected**: Number of customers that are being affected by the same problem. 
- **Ticket Type**: Depending on the main operator this field can be empty or it can have a typifications' tree.
- **Symptom**: Depending on the main operator, this field  can be empty or it can have a symptoms' tree.
- **Trouble Description**: Problem's description.
- **Comments**: Additional coments that can be useful to understand the problem.

The option to add images is available in Attachments clicking on the `+` button that appears in the bottom, as many images as needed can be added. 
