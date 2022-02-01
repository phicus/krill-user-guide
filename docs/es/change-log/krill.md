# Krill

## 2022-01-18
Version 1.0.1

### Se han corregido diversos errores menores en varios checks y sistemas de monitorización

<ul><li>Check del Mikrotik que obtiene su versión del OS.</li><li>Relación de dependencia entre los CPEs y sus hosts de registro.</li><li>Refactorización de los datos administrativos almacenados en el sistema de monitorización.</li><li>BackUp de configuración de los APs Ubiquiti.</li><li>Monitorización de los Peers BGP para Netengine Huawei.</li></ul>

Se ha solucionado el acceso a los enlaces de los equipos vía proxy.

---

## 2022-01-11
Version 1.0.1

### Corrección de errores menores en varios checks

<ul><li>BackUps APs.</li><li>Monitorización de ITFS en los PTPs.</li><li>Polling de CPEs para las diveras tecnologías (GPON, WiMax, etc).</li><li>Monitorización de HostAlive solo en redes con <code>monitor=false</code>.</li><li>Ampliación de la frecuencia de chequeo del APT a 1 día.</li></ul>

Añadido percentil 95 para las métricas de ancho de banda de los ITFS.

---

## 2022-01-04
Version 1.0.1

### Corrección de errores menores en varios checks

<ul><li>Kraken-Kitchen.</li><li>Backup de Mikrotik.</li><li>Radius Accounting.</li><li>SIP Peers (Asterisk).</li><li>Asterisk DDIs conf.</li></ul>

Se ha añadido la monitorización por ICMP de los NAS que no forman parte de Core.

