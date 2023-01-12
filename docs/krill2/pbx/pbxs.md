---
title: PBX | PBXs
description: PBX management.
lang: en-US
prev: /krill2/pbx/
next: /krill2/pbx/cdrs
tags:
- krill2
- module
- pbx
---
# PBX | PBXs

In the PBXs view a list of the virtual PBXs grouped by Realm (a network can have one or more Realms) and there we can make massive changes selecting more than one at a time.

![PBX Dashboard](/img/krill2/pbx/0101.png)

## Creating a new PBX

In this screen we can also create a new PBX clicking on the button that appears at the top of the page.

The first thing we need to do is to select the customer to whom the PBX is linked.

<p align="center"><img src="/img/krill2/pbx/0102.png" width="500"></p>

There can be two different scenarios:

1. The customer already has a PBX configured and we can only edit it.
    <p align="center"><img src="/img/krill2/pbx/0103.png" width="500"></p>   
2. The customer doesn't have any PBX and the button to create a new PBX is available.
    <p align="center"><img src="/img/krill2/pbx/0104.png" width="500"></p>

::: tip
If the customer selected doesn't have any POTses associated for the extensions, we have to previously create them from the ISP / Customer module, [CPEs creation](/krill2/isp-customer/cpes.html#creacion-de-cpes), in the tab [POTSes tab](/krill2/isp-customer/cpes.html#pestana-potses), by filling in the following blanks:

- **CLI**: CPE's identificator in the PBX.
- **SIP Username**: registering sip user (only if it is necessary).
- **SIP Password**: sip password (only if it is necessary).
- **PBX Ext**: we have to select it so we can use it as a PBX's extension.
- **Voicemail**: in the CPEs in which we check the voicemail box we will have the option to allow the users to receive, save and manage voice messages received from that extension, normally when it is not available.

![ISP CPE POTSes](/img/krill2/isp-customer/0204.png)

:::

Once the new PBX is created or we have found the customer PBX, we can continue with its edition.

## PBX's edition

In the PBX's edition page we can find different blanks grouped by sections.

![PBX Edition](/img/krill2/pbx/0407.png)

### Main configuration

PBX's main configuration

- **Ring time**: indicates the number of seconds each extension associated to the incoming ddi will ring.
- **Schedule**: we can select the time we want the pbx to follow, it can be the default one or one we configure it according to the customer needs.
- **Language**: from here we can decide the language for the PBX's recorded messages.
- **Contexts**: here we have the option to select the destinations that are allowed for the pbx, such as national calls, all allowed or something more restrictive like only mobile destinations.
- **Coments**:  here we can add any note that can be useful to identify, for example, the customer.
- **Holidays**: from here we can select a predefined day or create a new one in which the pbx is hoing to behave as a holiday.

### Incoming

Options that determinate the PBX's behaviour when it receives an incoming call.

<p align="center"><img src="/img/krill2/pbx/0420.png" width="600"></p>

- **FIX**: If we fill in this blank, it will prevail over any created time frame and the call will always get to the PBX 24/7.
- **Within the schedule**: Whatever we put here will happen in the time frame, for example, the "Welcome" reception previously created.
- **Holidays**: Here we select what we want the pbx to do when it is working in the holidays time frame.
- **Outside the schedule**: Here we select the actions we want the PBX to do when we are not in the PBX's main time frame.

### Outgoing

In the Outgoing option we can assign the number we want to show outside the PBX by default.

<p align="center"><img src="/img/krill2/pbx/0411.png" width="600"></p>

### DDIs

The DDIs allow to assign a fixed number to an extension or a group of extensions.

![PBX DDIs](/img/krill2/pbx/0408.png)

The phone numbers needed in the PBX are added and the extensions associated are marked so they ring in each case.

<p align="center"><img src="/img/krill2/pbx/0409.png" width="500"></p>

Once the DDIs are created an outgoing phone number can be associated to the extensions so every DDI is presented outside the PBX.

<p align="center"><img src="/img/krill2/pbx/0410.png" width="600"></p>

### Groups

Here the group extensions can be configured with concrete features for each of them.

![PBX Groups](/img/krill2/pbx/0424.png)

When we click on add a group a new form will be opened.

<p align="center"><img src="/img/krill2/pbx/0423.png" width="500"></p>

The following fields must be filled in:

- **CLI**: here the number used to identify the group is entered (the extension the grouo will have).
- **Name**: name of the group.
- **Extensions**: here the extension (or extensions) that belongs to the group are included, they will ting when the group's cli is called.
- **Fail**: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.
- **Out of Schedule**: Where the call will go outside the selected schedule.
- **Schedule**: Time frame in which the group of extensions will be available.
- **Holiday**: Determinates if the group will pick up calls on holiday days.

### Queues

They are similar to the groups, but allows to make a queue with the incoming calls and distibute them among the extensions that are free. 

![PBX Groups](/img/krill2/pbx/0427.png)

La creación de una cola se hace de la misma forma que los grupos, pero hay más opciones disponibles, agrupadas en `General`, `Options` y `Announce`.

#### General

The fields available are the same that for the groups:

<p align="center"><img src="/img/krill2/pbx/0428.png" width="500"></p>

- **CLI**: here the number used to identify the group is entered (the extension the grouo will have).
- **Name**: name of the group.
- **Extensions**: here the extension (or extensions) that belongs to the group are included, they will ting when the group's cli is called.
- **Fail**: En caso de que se produzca un fallo en la recepción de la llamada, dónde se quiere que se desvíe ésta.
- **Out of Schedule**: Where the call will go outside the selected schedule.
- **Schedule**: Time frame in which the group of extensions will be available.
- **Holiday**: Determinates if the group will pick up calls on holiday days.

#### Options

<p align="center"><img src="/img/krill2/pbx/0429.png" width="500"></p>

The following fields can be modified:

- **Wrap uptime**: pause time between calls for the same extension (agent) in the queue.
- **Max users**: user limit allowed in the queue.
- **User timeout**: maximum time until the called is considered failed.
- **Agent timeout**: hop time between the different extensions (agents) in the queue.

#### Announce

The available options are:

<p align="center"><img src="/img/krill2/pbx/0430.png" width="500"></p>

- **Announce**: kind of report of the hold situations.
- **Announce frequency**: frequency for the situation's report.
- **Record**: prerecorded message or music to play during hold.
- **Periodic announce frequency**: frequency of the recorded message.

### Recepcionists

The recepcionist are prerecorded messages that are played on some conditions, for example, in a time frame. They are usually used to welcome the incoming call and allow to announce the options available to dial so the PBX forwards the call to one extension or another.

![PBX Recepcionists](/img/krill2/pbx/0416.png)

When a new recepcionist is created, we must fill in the following fields:

<p align="center"><img src="/img/krill2/pbx/0425.png" width="500"></p>

- **Name**: Name that identifies it.
- **Record**: Position of the record that is going to be played.
- **Schedule**: Time frame in which the recepcionist is going to be played.
- **Holidays**: Determinates if the recepcionist will pick up calls on holiday days.
- **Fail**: In the case that the receptions of the call fails, where we want it to be forawarded to.
- **Out of Schedule**: Where the call will be forwarded out of the selected time frame.

When we display the other options, we can specify the number that will identify each of the forwarding rules:

<p align="center"><img src="/img/krill2/pbx/0426.png" width="500"></p>

As many dialing numbers as needed can be registered, for each of them we can specify:

- **Name**: Name that identifies the dialing number.
- **Dial**: Dialing number.
- **Jump**: Hop group for the forward, they can be: other recepcionists, groups, queues or even DDIs.

### Schedules

In this section the call reception time frames can be created and modified.

![PBX Recepcionists](/img/krill2/pbx/0412.png)

If, for example, we want to create a special schedule for the holidays, we click on the add new schedule button:

<p align="center"><img src="/img/krill2/pbx/0413.png" width="500"></p>

Once we have specified Una vez especificado el nombre identificativo que se le quiera dar, pulsamos sobre añadir para terminar de editar los elementos que compondrán el horario:

<p align="center"><img src="/img/krill2/pbx/0414.png" width="500"></p>

- **Active**: Determinates if the time frame is active or nor.
- **Week day from**: From which day of the week the time frame starts.
- **Week day to**: At what time the time frames ends (it can be on the same day it starts).
- **Morn. from**: Time it starts in the morning.
- **Morn. to**: Time it ends in the morning.
- **Ev. from**: Time it starts in the evening.
- **Ev. to**: Time it ends in the evening.
