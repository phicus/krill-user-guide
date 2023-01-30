---
title: Logger
description: Log reports from API and Admin panel.
lang: en-US
prev: null
next: null
sidebar: auto
tags:
- krill2
- module
- logger
- admin
- api
---
# Logger

From this module we can view the logs referring to the requests from the API and the administration panel.

<p align="center"><img src="/img/krill2/logger/00-logger-menu.png" width="433"></p>

In the main dashboard, you can preview, by default, the latest API logs.

![Logger Dashboard](/img/krill2/logger/01-logger-dashboard.png)

From here we can access:
- [Admin reports](/krill2/logger/#logger-dashboard): from here we can view all the actions related to the creation, modification or deletion of cpes or potses.
- [API Reports](/krill2/logger/#api-reports): logs referring to the requests that are made via api. This part is more interesting when there is an external CRM associated with the krill isp, since all the actions and possible errors can be viewed.


## Logger Dashboard

![Admin reports](/img/krill2/logger/02-admin-reports.png)

From this view you can see all those actions carried out from the classic administration panel (Krill v1) and the registrations, modifications and deletion of:

* Customers
* CPE
* POTSes
* Users

In the report we can see the date, who performed the action, the type of data that was modified as well as the type of modification and data that was changed. 

## API Reports

![APO Reports](/img/krill2/logger/03-api-reports.png)

The API report allows you to show all the details related to the date, user, their IP, what type of action was performed, the URL of the API involved, response times, as well as the data that was sent to modify. 

::: tip
In both views we can perform filtering, not only by dates, but by various criteria such as: User, type of request, type of modified data, etc.
:::
