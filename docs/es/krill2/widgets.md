---
title: Widgets
description: Krill 2 Widgets.
lang: es-ES
sidebar: auto
sidebarDepth: 2
prev: postman
next: null
tags:
- krill2
- widgets
---

# Widgets

## Introducción

Un widget es un pequeño componente de software que se puede integrar en una página web o contenedor HTML dentro de otra aplicación para proporcionar una funcionalidad específica. 

Éstos se pueden insertar en una página web utilizando el elemento HTML `iframe`. Un iframe es un elemento HTML que se utiliza para insertar contenido externo en una página web, como un video de YouTube o un mapa de Google Maps.

Los widgets proporcionan funciones específicas. Al utilizar un widget, los desarrolladores pueden integrar fácilmente estas funciones en sus propias páginas web sin tener que escribir código adicional.

Un ejemplo de iframe sería:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo de iFrame</title>
  </head>
  <body>
    <h1>Contenido de la página principal</h1>
    <p>Alguno texto aquí.</p>
    <iframe src="https://www.example.com/" width="800" height="600" frameborder="0"></iframe>
    <p>Alguno texto aquí después del iFrame.</p>
  </body>
</html>
```

## Widget Graphs

Endpoint: `/widgets/monitoring/graphs/{graphType}/`:

Tipos de graficas:
- `bandwidth`
- `txrx` (solo tecnología GPON)
- `upstream` (solo tecnología DOCSIS)
- `downstream` (solo tecnología DOCSIS)
- `qos` (solo tecnología DOCSIS)

Parámetros de consulta:
- `token` (obligatorio): extraído de la solicitud de la API al inicio de sesión o del almacenamiento local persistente del navegador `app_token`
- `host_name` (obligatorio): nombre del host `cpe23133` (DOCSIS) o `cpe115087` (GPON)
- `realtime` (predeterminado: **false**): datos de la información en tiempo real o del historial de Influx
- `start` (predeterminado: **1d**): si no es en tiempo real, período de tiempo desde el inicio de la solicitud para el conjunto de datos
- `end` (predeterminado: **0m**): si no es en tiempo real, período de tiempo hasta el final de la solicitud para el conjunto de datos
- `refresh` (predeterminado: **60 secs**): si es en tiempo real, valor para el intervalo de actualización entre solicitudes (en segundos)

Periodos de tiempo:
- Los periodos de tiempo están en magnitud y unidad, como `24h` o `7d`
- Unidades válidas: `M` para meses, `d` para días, `h` para horas and `m` para minutos

Ejemplos:
- Gráfica de ancho de banda en tiempo real para el cpe23133 con actualización cada 30 segundos: `/widgets/monitoring/graphs/bandwidth/?host_name=cpe23133&realtime=true&refresh=30&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`
- Gráfica de "Downstream" para el cpe23133 de DOCSIS de los últimos 7 días: `/widgets/monitoring/graphs/downstream/?host_name=cpe23133&start=7d&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`
- Gráfica de "TxRx" para el cpe115087 de GPON de las últimas 24 horas: `/widgets/monitoring/graphs/txrx/?host_name=cpe115087&start=24h&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`

## Widget Device

Endpoints: `/widgets/monitoring/device/`:

Parámetros de consulta:
- `token` (obligatorio): extraído de la solicitud de la API al inicio de sesión o del almacenamiento local persistente del navegador `app_token`
- `host_name` (obligatorio): nombre del host `cpe23133` (DOCSIS) o `cpe115087` (GPON)

Ejemplos:
- Representación del dispositivo para el cpe8317: `/widgets/monitoring/device/?host_name=cpe8317&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo`

