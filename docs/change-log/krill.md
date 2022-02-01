# Krill

## 2022-01-18
Version 1.0.1

### Fixed various minor bugs in various checks and monitoring systems

<ul><li>Check of the Mikrotik that obtains its version of the OS.</li><li>Dependency relationship between CPEs and their hosts of record.</li><li>Refactoring of administrative data stored in the monitoring system.</li><li>Ubiquiti APs Configuration BackUp.</li><li>Monitoring of BGP Peers for Netengine Huawei.</li></ul>

Access to hosts links via proxy has been fixed.

---

## 2022-01-11
Version 1.0.1

### Minor bug fixes on various checks

<ul><li>APs BackUps.</li><li>ITFS monitoring in PTPs.</li><li>Polling of CPEs for various technologies (GPON, WiMax, etc.).</li><li>HostAlive monitoring only on networks with <code>monitor=false</code>.</li><li>Extension of the APT check frequency to 1 day.</li></ul>

Added 95th percentile for ITFS bandwidth metrics.

---

## 2022-01-04
Version 1.0.1

### Minor bug fixes on various checks

<ul><li>Kraken-Kitchen.</li><li>Mikrotik Backup.</li><li>Radius Accounting.</li><li>SIP Peers (Asterisk).</li><li>Asterisk DDIs conf.</li></ul>

Added ICMP monitoring of non-Core NAS.

