---
title: Widgets
description: Krill 2 Widgets.
lang: en-US
sidebar: auto
sidebarDepth: 2
prev: postman
next: null
tags:
- krill2
- widgets
---

# Widgets

## Introduction

A widget is a small software component that can be integrated into a web page or HTML container within another application to provide specific functionality.

These can be inserted into a web page using the HTML iframe element. An iframe is an HTML element used to embed external content into a web page, such as a YouTube video or a Google Maps map.

Widgets provide specific functions. By using a widget, developers can easily integrate these functions into their own web pages without having to write additional code.

A example of an iframe would be:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>iFrame Example</title>
  </head>
  <body>
    <h1>Main page content</h1>
    <p>Some text here.</p>
    <iframe src="https://www.example.com/" width="800" height="600" frameborder="0"></iframe>
    <p>Some text here after the iFrame.</p>
  </body>
</html>
```

## Widget Graphs

Endpoint: `/widgets/monitoring/graphs/{graphType}/`:

Graph Types:
- `bandwidth`
- `txrx` (GPON tech only)
- `upstream` (DOCSIS tech only)
- `downstream` (DOCSIS tech only)
- `qos` (DOCSIS tech only)

Query Parameters:
- `token` (required): extracted from login API request or from `app_token` browser local storage persistence
- `host_name` (required): host name like `cpe23133` (DOCSIS) or `cpe115087` (GPON)
- `realtime` (default: **false**): data from realtime info or from influx history
- `start` (default: **1d**): if not realtime, time period from start of request for data sets
- `end` (default: **0m**): if not realtime, time period to end of request data sets
- `refresh` (default: **60 secs**): if realtime, integer value for refresh interval between requests (in seconds)

Time Periods:
- Time periods are strings with magnitude & unit, like `24h` or `7d`
- Valid units are: `M` for months, `d` for days, `h` for hours and `m` for minutes

Examples:
- Realtime Bandwidth chart for cpe23133 with refresh every 30 secs: `https://xxx.phicus.es/widgets/monitoring/graphs/bandwidth/?host_name=cpe23133&realtime=true&refresh=30&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`
- Downstream chart for DOCSIS cpe23133 host for last 7 days: `https://xxx.phicus.es/widgets/monitoring/graphs/downstream/?host_name=cpe23133&start=7d&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`
- TxRx chart for GPON cpe115087 host for last 24 hours: `https://xxx.phicus.es/widgets/monitoring/graphs/txrx/?host_name=cpe115087&start=24h&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`

## Widget Device

Endpoints: `/widgets/monitoring/device/`:

Query Parameters:
- `token` (required): extracted from login API request or from `app_token` browser local storage persistence
- `host_name` (required): host name like `cpe23133` (DOCSIS) or `cpe115087` (GPON)

Examples:
- Device representation for cpe8317: `https://xxx.phicus.es/widgets/monitoring/device/?host_name=cpe8317&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`
