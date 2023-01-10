---
title: PBX | Holidays
description: Holidays' management.
lang: en-US
prev: /krill2/pbx/cdrs
next: /krill2/pbx/contexts
tags:
- krill2
- module
- pbx
---
# PBX | Holidays

Here we can manage the holiday days our PBX is going to use to forward the calls, grouped by Realm (a network can have one or more Realms).

![PBX Holidays](/img/krill2/pbx/0501.png)

From the bar on the top we can add our holiday days or if we select a lot of them through the selector that is on the list, we can delete them at the same time.

<p align="center"><img src="/img/krill2/pbx/0502.png" width="500"></p>

To add a new holiday we have to click on the button on the top and fill in the two blanks that the form has:

- **Day**: Day and month of the year, separated by `/`.
- **Comment**: Tag that identifies the holiday.

::: tip
If we specify the date as `$easter$` the system will apply automatically the **Good Friday**, regardless the day of the month it is celebrated every year.
:::

To edit a holiday, we just have to click on the pencil icon that appears on the list and modify the values that we want to change.

<p align="center"><img src="/img/krill2/pbx/0503.png" width="500"></p>
