---
title: ISP CLI
description: Device's management and monitoring tool through CLI.
lang: en-US
sidebar: auto
sidebarDepth: 1
prev: null
next: null
tags:
- krill2
- isp
- monitoring
- onus
- core
- cli
---
# ISP CLI

The CLI (Command line interface) allows the users to give instructions to some computer program or to the operating system through a line of simple text.

Specificaly, the ISP-CLI, that will be the name we are going to give to the Krill's CLI, wil allow us to manage the different modules that we hire as well as asking questions and permform basic actions in them. For example, if we have the gpon service in our Krill, through this tool, we will be able to see the metrics of an OLT's pon or even force the provision or restart of a cpe.

## CLI access

First, we will iniciate our terminal and we will access the server through SSH. To do so we will have to enter the following line if we are using Ubuntu or Mac: `ssh ispadmin@XXX.XXX.XXX.XXX -p 4222`.

Where:
- `ispadmin` Krill server's access user.
- `XXX.XXX.XXX.XXX` refers to the server's IP.
- `-p 4222` the access port (we will usually use 4222). Instead of using the IP, we could also use the dns, xyz.phicus.es, where xyz are the letters used to identify the customer.

Once this is done, we should get into the management panel ISP-CLI, that will look like this:

```bash
ispadmin@lab3.phicus.es >
```

:::tip
If the access is done using Windows, an access interface, like the console PuTTY (https://www.putty.org/), must be used.

<p align="center"><img src="/img/krill2/isp-cli/0001.png" width="466"></p>
:::

Once we are in the server with the user “ispadmin”, the 'tab' key could be used to look at the different options available, with which different requests or actions could be executed in our Krill:

```bash
ispadmin@lab3.phicus.es > 
core         fail2ban     ping         telnet       tv           
dhcp         ghn          radius       tr069        wimax        
exit         gpon         ssh          traceroute
```

## Core Tools

### `core devices print`

It allows us to get a list of all the core devices that are responding through SNMP to see the condition of its interfaces, tags, etc.

```bash
ispadmin@lab3.phicus.es > core devices print
boards...
entities...
MKT-OFICINA 192.168.15.1 ut:24944131
loc:CEEIM mdl:RB1100 dscr:RouterOS RB1200
 *  id   type           name             alias       admn  oper  speed  in_bw  out_bw  in_disc  ou_disc   in_err   ou_err 
 *  1    eth        ether7-wan2                       up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  2    eth           ether8         Laboratorio     up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  3    eth        ether6-wan1        WAN Ceeim      up    up    1000   0.0    0.0       0.00     0.00     0.00     0.00 
 *  4    eth        ether5-lan3           lab         up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  5    eth       ether4-service                     up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  6    eth       ether3-service                     up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  7    eth       ether2-service    --> WIFI Unifi   up    up    1000   0.0    0.0       0.00     0.00     0.00     0.00 
 *  8    eth       ether1-service    -> SW Catalyst   up    up    100    0.0    0.0       0.00     0.00     0.00     0.00 
 *  9    eth        ether10-boot        Consola       up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  10   eth        ether9-lan2                       up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  12  bridge      bridge1-lan        bridge-lan     up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  16  bridge        loopback                        up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  20  bridge      bridge2-lab                       up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  22  bridge       bridge-new                       up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  23  l2vlan        vlan200                         up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  38  l2vlan        vlan1100                        up    up    100    0.0    0.0       0.00     0.00     0.00     0.00 
 *  47  l2vlan    ether1.vlan2500                     up    up    100    0.0    0.0       0.00     0.00     0.00     0.00 
 *  55  bridge       bridge-wan                       up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  56  l2vlan  ether8-lan1.vlan142   LABORATORIO     up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  57  l2vlan     ether8.vlan831     PREKRILL-HSI    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  58  l2vlan     ether8.vlan832     PREKRILL-TV     up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  59  l2vlan     ether8.vlan833    PREKRILL-MGNT    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  60  l2vlan     ether8.vlan834    PREKRILL-VOIP    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  61  l2vlan     ether8.vlan931    DEMOKRILL-HSI    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  62  l2vlan     ether8.vlan777        IPTV         up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  63  l2vlan     ether8.vlan933    DEMOKRILL-MGNT   up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  65  l2vlan    ether8.vlan1100       LAB-HSI       up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  66  l2vlan    ether8.vlan1301       LAB-MGNT      up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  67  l2vlan    ether8.vlan1400       LAB-VOIP      up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  68  l2vlan     ether8.vlan601       LAB-VOIP      up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 

boards...
entities...
MK-ROUTER-LAB 172.16.142.1 ut:24944131
loc:HQs mdl:CCR1036 dscr:RouterOS RB1200
 *  id   type           name             alias       admn  oper  speed  in_bw  out_bw  in_disc  ou_disc   in_err   ou_err 
 *  1    eth        ether7-wan2                       up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  2    eth           ether8         Laboratorio     up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  3    eth        ether6-wan1        WAN Ceeim      up    up    1000   0.0    0.0       0.00     0.00     0.00     0.00 
 *  4    eth        ether5-lan3           lab         up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  5    eth       ether4-service                     up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  6    eth       ether3-service                     up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  7    eth       ether2-service    --> WIFI Unifi   up    up    1000   0.0    0.0       0.00     0.00     0.00     0.00 
 *  8    eth       ether1-service    -> SW Catalyst   up    up    100    0.0    0.0       0.00     0.00     0.00     0.00 
 *  9    eth        ether10-boot        Consola       up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  10   eth        ether9-lan2                       up   down    0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  12  bridge      bridge1-lan        bridge-lan     up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  16  bridge        loopback                        up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  20  bridge      bridge2-lab                       up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  22  bridge       bridge-new                       up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  23  l2vlan        vlan200                         up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  38  l2vlan        vlan1100                        up    up    100    0.0    0.0       0.00     0.00     0.00     0.00 
 *  47  l2vlan    ether1.vlan2500                     up    up    100    0.0    0.0       0.00     0.00     0.00     0.00 
 *  55  bridge       bridge-wan                       up    up     0     0.0    0.0       0.00     0.00     0.00     0.00 
 *  56  l2vlan  ether8-lan1.vlan142   LABORATORIO     up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  57  l2vlan     ether8.vlan831     PREKRILL-HSI    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  58  l2vlan     ether8.vlan832     PREKRILL-TV     up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  59  l2vlan     ether8.vlan833    PREKRILL-MGNT    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  60  l2vlan     ether8.vlan834    PREKRILL-VOIP    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  61  l2vlan     ether8.vlan931    DEMOKRILL-HSI    up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  62  l2vlan     ether8.vlan777        IPTV         up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  63  l2vlan     ether8.vlan933    DEMOKRILL-MGNT   up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  65  l2vlan    ether8.vlan1100       LAB-HSI       up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  66  l2vlan    ether8.vlan1301       LAB-MGNT      up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  67  l2vlan    ether8.vlan1400       LAB-VOIP      up    up     10    0.0    0.0       0.00     0.00     0.00     0.00 
 *  68  l2vlan     ether8.vlan601       LAB-VOIP      up    up     10    0.0    0.0       0.00     0.00     0.00     0.00

```

### `core devices [HOST_NAME] print`

It allows us to see the information of a certain device's interfaces.

```bash
ispadmin@lab3.phicus.es > core device MK-ROUTER-LAB print
MK-ROUTER-LAB 172.16.142.1 ut:24944309
loc:HQs mdl:CCR1036 dscr:RouterOS RB1200
 *  id   type           name             alias       admn  oper  speed  in_bw   out_bw  in_disc  ou_disc   in_err   ou_err 
 *  1    eth        ether7-wan2                       up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  2    eth           ether8         Laboratorio     up    up     10    8.3K    7.6K      0.00     0.00     0.00     0.00 
 *  3    eth        ether6-wan1        WAN Ceeim      up    up    1000   9.9M    9.3M      0.00     0.00     0.00     0.00 
 *  4    eth        ether5-lan3           lab         up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  5    eth       ether4-service                     up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  6    eth       ether3-service                     up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  7    eth       ether2-service    --> WIFI Unifi   up    up    1000  71.9K   111.3K     0.00     0.00     0.00     0.00 
 *  8    eth       ether1-service    -> SW Catalyst   up    up    100   79.8K   864.2K     0.00     0.00     0.00     0.00 
 *  9    eth        ether10-boot        Consola       up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  10   eth        ether9-lan2                       up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  12  bridge      bridge1-lan        bridge-lan     up    up     0    132.7K   1.0M      0.00     0.00     0.00     0.00 
 *  16  bridge        loopback                        up    up     0     0.0    193.0      0.00     0.00     0.00     0.00 
 *  20  bridge      bridge2-lab                       up    up     0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  22  bridge       bridge-new                       up    up     0     0.0     44.3      0.00     0.00     0.00     0.00 
 *  23  l2vlan        vlan200                         up    up     0     0.0    135.4      0.00     0.00     0.00     0.00 
 *  38  l2vlan        vlan1100                        up    up    100    0.0    140.3      0.00     0.00     0.00     0.00 
 *  47  l2vlan    ether1.vlan2500                     up    up    100    0.0    138.2      0.00     0.00     0.00     0.00 
 *  55  bridge       bridge-wan                       up    up     0    10.2M    9.6M      0.00     0.00     0.00     0.00 
 *  56  l2vlan  ether8-lan1.vlan142   LABORATORIO     up    up     10    6.6K    6.5K      0.00     0.00     0.00     0.00 
 *  57  l2vlan     ether8.vlan831     PREKRILL-HSI    up    up     10    0.0     50.3      0.00     0.00     0.00     0.00 
 *  58  l2vlan     ether8.vlan832     PREKRILL-TV     up    up     10    0.0     45.7      0.00     0.00     0.00     0.00 
 *  59  l2vlan     ether8.vlan833    PREKRILL-MGNT    up    up     10    2.5     50.3      0.00     0.00     0.00     0.00 
 *  60  l2vlan     ether8.vlan834    PREKRILL-VOIP    up    up     10    0.0     45.7      0.00     0.00     0.00     0.00 
 *  61  l2vlan     ether8.vlan931    DEMOKRILL-HSI    up    up     10    0.0     45.7      0.00     0.00     0.00     0.00 
 *  62  l2vlan     ether8.vlan777        IPTV         up    up     10    0.0     45.7      0.00     0.00     0.00     0.00 
 *  63  l2vlan     ether8.vlan933    DEMOKRILL-MGNT   up    up     10    2.5     50.3      0.00     0.00     0.00     0.00 
 *  65  l2vlan    ether8.vlan1100       LAB-HSI       up    up     10   179.9    68.3      0.00     0.00     0.00     0.00 
 *  66  l2vlan    ether8.vlan1301       LAB-MGNT      up    up     10    0.0     50.6      0.00     0.00     0.00     0.00 
 *  67  l2vlan    ether8.vlan1400       LAB-VOIP      up    up     10    0.0     46.0      0.00     0.00     0.00     0.00 
 *  68  l2vlan     ether8.vlan601       LAB-VOIP      up    up     10   748.1   362.7      0.00     0.00     0.00     0.00
```

### `core ptps print`

It allows us to list the information of all the ptps, signal, frequency, etc.

```bash
ispadmin@lab3.phicus.es > core ptps print
*                            name short dista  lcpu  rcpu dnfreq dnch        dnmod  dntx dnrx0 dnrx1 dncapac dna dnqua upfre upch        upmod  uptx  uprx0  uprx1 upcapac upa upqua   dnbw   upbw 
*Oficina-Casa                LUM     -   0.0   0.0      -    -            -     -  -120  -120     0.0   0   100     -    -            -     -    0.0    0.0     0.0   0   100    0.0    0.0 
*Oficina-Monte               LUM     -   0.0   0.0      -    -            -     -  -120  -120     0.0   0   100     -    -            -     -    0.0    0.0     0.0   0   100    0.0    0.0 
```

### `core ptp [HOST_NAME] print`

It allows us to see the IPs, signal, frequencies of a certain ptp model.

```bash
ispadmin@lab3.phicus.es > core ptp Oficina-Casa print
process_rawdata
defaultdict(<class 'list'>, {})
do_check_llanspeed................ <class 'krill_core.ptp.saf.lumina.Lumina'>
name             : Oficina-Casa
model            : CFIPLumina          
laddress         : 192.168.202.10 laddress=192.168.202.10
lrunmodel        :           unknown model
lversion         : -         lversion=-
luptime          : 0         no luptime
lcpu             : 0.0       lcpu=0
llanspeed        : -         llanspeed=-
raddress         : 192.168.202.11 raddress=192.168.202.11
rrunmodel        :           unknown model
rversion         : -         rversion=-
ruptime          : 0         no ruptime
rcpu             : 0.0       rcpu=0
rlanspeed        : -         rlanspeed=-
distance         : none                
dnfreq           : none                
dnchan           : None      dnchan=None
dntx             : none                
dnrx0            : -120      dnrx0=-120.0dBm below min(-111dBm)
dnrx1            : -120      dnrx1=-120.0dBm below min(-111dBm)
dnmod            : -                   
dncapacity       : 0.0       dncapacity=0Mbps below min(1Mbps)
dnquality        : 100       dnquality=100
upfreq           : none                
upchan           : none                
uptx             : none                
uprx0            : 0.0       uprx0=0.0dBm
uprx1            : 0.0       uprx1=0.0dBm
upmod            : none                
upcapacity       : 0.0       upcapacity=0Mbps below min(1Mbps)
upquality        : 100       upquality=100
dnmse            : 0.0       dnmse=0.0 above max(-1)
upmse            : 0.0       upmse=0.0 above max(-1)
dnbw             : none                
upbw             : none                
custom           : dnldpcdecoderstress=0.0 upldpcdecoderstress=0.0
dnairtime        : 0         dnairtime=0.0%
upairtime        : 0         upairtime=0.0%
dnmse            : 0.0       dnmse=0.0 above max(-1)
upmse            : 0.0       upmse=0.0 above max(-1)
message          : dncapacity=0Mbps below min(1Mbps) dnmse=0.0 above max(-1) dnrx0=-120.0dBm below min(-111dBm) dnrx1=-120.0dBm below min(-111dBm) unknown model unknown model upcapacity=0Mbps below min(1Mbps) upmse=0.0 above max(-1)
```

### `core location [location] print`

It allows us to see the different core devices in a certain location.

```bash
ispadmin@lab3.phicus.es > core location CENTRAL print
SW-CENTRAL 172.26.128.20 ut:5742547
loc:OLOT mdl:ES-16-XG dscr:EdgeSwitch 16 XG, 1.9.3, Linux 3.6.5, 1.0.0.4872137
 *  id  type  name                 alias                 admn  oper  speed  in_bw   out_bw  in_disc  ou_disc   in_err   ou_err 
 *  1   eth   0/1                 CENTRAL                up    up   10000  630.7M   1.8G      0.00     0.00     0.00     0.00 
 *  2   eth   0/2                 OFICINA                up    up   10000   1.9G   615.1M     0.00     0.00     0.00     0.00 
 *  3   eth   0/3                 FIBRA                  up    up    1000   9.2M   53.4M      0.00     0.00     0.00     0.00 
 *  4   eth   0/4                                        up   down  10000   0.0     0.0       0.00     0.00     0.00     0.00 
 *  5   eth   0/5   		      OLT2   		         up   down  10000   0.0     0.0       0.00     0.00     0.00     0.00 
 *  6   eth   0/6                 OLT1                   up   down  10000   0.0     0.0       0.00     0.00     0.00     0.00 
 *  7   eth   0/7                 AP-Casa1               up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  8   eth   0/8                 AP-Casa2               up   down   1000   0.0     0.0       0.00     0.00     0.00     0.00 
 *  9   eth   0/9                 OLT4                   up   down  10000   0.0     0.0       0.00     0.00     0.00     0.00 
 *  10  eth   0/10                OLT5                   up   down  10000   0.0     0.0       0.00     0.00     0.00     0.00 
 *  11  eth   0/11                TRUNK SWITX MK SFP2    up    up   10000  15.5M   25.3M      0.00     0.00     0.00     0.00 
 *  12  eth   0/12                                       up    up    1000   3.9M    1.1M      0.00     0.00     0.00     0.00 
 *  13  eth   0/13                ROUTER MK              up    up    1000  488.5K  824.6K     0.00     0.00     0.00     0.00 
 *  14  eth   0/14                                       up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  15  eth   0/15                NAS 2                  up    up    1000   3.5K   32.8K      0.00     0.00     0.00     0.00 
 *  16  eth   0/16                NAS 1                  up    up    1000   0.0    32.2K      0.00     0.00     0.00     0.00 

boards...
entities...
MK-FIBRA-CENTRAL 10.255.254.23 ut:2952791
loc:OLOT mdl:RB1100 dscr:RouterOS RB1100x4
 *  id   type                name               alias  admn  oper  speed  in_bw   out_bw  in_disc  ou_disc   in_err   ou_err 
 *  1    eth       ether1--CONTROL-CORRENT              up    up    100   341.4    1.0K      0.00     0.00     0.00     0.00 
 *  2    eth    ether2--SWITX-1-FIBRA-ETHER13           up    up    1000  829.8K  490.2K     0.00     0.00     0.00     0.00 
 *  3    eth                ether3                      up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  4    eth               ether4--                     up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  5    eth        ether5-SWITX-MK-CRS326              up    up    100    7.5K   27.7K      0.00     0.00     0.00     0.00 
 *  6    eth         ether6--SAI-DELTA-1                up    up    1000   92.3   893.1      0.00     0.00     0.00     0.00 
 *  7    eth         ether7--SAI-DELTA-2                up    up    1000   91.7   892.9      0.00     0.00     0.00     0.00 
 *  8    eth               ether8-                      up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  9    eth     ether9-GESTIO-OLT2-10Gb                up    up    1000   21.9    1.2K      0.00     0.00     0.00     0.00 
 *  10   eth     ether10-GESTIO-OLT1-10Gb               up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  11   eth       ether11-GESTIO-OLT4                  up    up    100    13.0    1.2K      0.00     0.00     0.00     0.00 
 *  12   eth       ether12-GESTIO-OLT5                  up    up    100   314.3    1.2K      0.00     0.00     0.00     0.00 
 *  13   eth       ether13-GESTIO-OLT6                  up   down    0     0.0     0.0       0.00     0.00     0.00     0.00 
 *  14  bridge    bridge--VLAN-100-CENTRAL              up    up     0    248.8    0.0       0.00     0.00     0.00     0.00 
 *  16  bridge      bridge-CONTROL-CORRENT              up    up     0    496.6   713.7      0.00     0.00     0.00     0.00 
 *  17  bridge             loopback                     up    up     0     0.0     51.0      0.00     0.00     0.00     0.00 
 *  20  l2vlan         ether2.vlan-100                  up    up    1000   3.8K   363.6      0.00     0.00     0.00     0.00 
 *  22  l2vlan     ether2.vlan-222-TRONCAL              up    up    1000  617.5K  479.6K     0.00     0.00     0.00     0.00 
 *  25  bridge        bridge-GESTIO-OLT                 up    up     0    466.6   416.0K     0.00     0.00     0.00     0.00 
 *  34  bridge   bridge2-sai-control-corrent            up    up     0     0.0     53.4      0.00     0.00     0.00     0.00 
 *  38  l2vlan      ether5.vlan-534-GESTIO             down  down   100    0.0     0.0       0.00     0.00     0.00     0.00 
 *  39  l2vlan         vlan-534--GESTIO                down  down    0     0.0     0.0       0.00     0.00     0.00     0.00
```

## DHCP Tools

### `dhcp leases print subnet [subnet]`

It shows all the free IPs 'F' and the ones that are conceded '.' from a DHCP range.

```bash
ispadmin@lab3.phicus.es > dhcp leases print subnet tr069(10.42.0.0/20)
pool 10.42.0.15-10.42.15.245: leased 2939/4071 tr069 gpon
S              IP               MAC            CLCID            CLRID      HOSTNAME        STARTS          ENDS
F      10.42.0.15 90:3f:ea:92:c5:57                -                -               - 220121-170337 220128-170337
.      10.42.0.16 c4:fb:aa:37:96:ce                -                -        EG8145X6 221222-165224 221229-165224
F      10.42.0.17 f4:1d:6b:de:67:28                -                -               - 210530-205811 210531-110533
.      10.42.0.18 ac:f9:70:dc:c1:b1                -                -               - 221220-064634 221227-064634
.      10.42.0.19 f4:de:af:8a:a5:52                -                -        EG8145V5 221222-174647 221229-174647
.      10.42.0.20 f8:98:ef:de:c4:fd                -                -               - 221222-063539 221229-063539
F      10.42.0.21 30:e9:8e:cb:0e:ed                -                -               - 210525-155856 210528-171052
.      10.42.0.22 f4:1d:6b:de:3d:da                -                -        EG8145V5 221221-133102 221228-133102
```

## FAIL2BAN Tool

### `fail2ban asterisk show banned`

Shows all the IPs that are banned from the asterisk server.

```bash
ispadmin@lab3.phicus.es > fail2ban asterisk show banned
```

### `fail2ban asterisk unban [IP]`

Allows us to unban IPs from the asterisk server.

```bash
ispadmin@lab3.phicus.es > fail2ban asterisk unban 10.10.20.2
```

## GHN Tools

### `ghn cpes status gam [HOST_NAME]`

It allows us to see the signal and condition of all the CPEs that use the GHN technology.

```bash
ispadmin@lab3.phicus.es > ghn cpes status gam gamEdif24B
gamEdif24B
port cpeid               mac        state                    uptime         cablelen     tx     rx   dnpps   uppps   dnerr   uperr  dnblck  upblck dnerblk uperblk
   1     1      020101b08aa6       online                    705291               40 703282 705373     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     2      0201023ce901       online                    705291               32 703222 705368     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     3      020103c10e2a       online                    705291               45 703285 705254     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     4      02010434ae37       online                    705291               44 703158 705220     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     5      0201050c1c92       online                    705291               26 703263 705221     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     6      020106d8bc90       online                    705291               39 703138 705211     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     7      020107024360       online                    705291               26 703217 705350     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     8      020108dcd20d       online                    705291               55 703282 705366     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1     9      0201090a8f9f       online                    705291               27 703201 705317     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
   1    10      02010ac1dede       online                    705291               51 703146 705369     0.0     0.0    0.00    0.00     0.0     0.0 0.00000 0.00000
```

## GPON Tools

### `gpon olt [OLT_ID] provision`

It allows us to start a provision cycle for the selected OLT.

```bash
ispadmin@lab3.phicus.es > gpon olt oltHuawei provision
[2022-12-23 11:22:25 CET] INFO: [root/2041872] main...
[2022-12-23 11:22:25 CET] INFO: [krill_gpon.provision.provision/2041872] provision_unconfigured starts... (olt_names=['oltHuawei'] set_database=True)
[2022-12-23 11:22:25 CET] INFO: [krill_gpon.provision.provision/2041872] _provision_olt_unconfigured olt_name=oltHuawei frame_slot_port=None set_database=True
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.provision.provision/2041872] olt=oltHuawei unconf={'sn': '54504c4797441b58', 'index': '4194345472', 'onu_type': 'XX230v', 'olt': 'oltHuawei', 'time': '2022-12-23T11:22:28.082494', 'fsp': '0/5/2'}...
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.snmpolt.huawei.olt/2041872] mongo memento seems valid for oltHuawei
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.provision.provision/2041872] olt=oltHuawei unconf={'sn': '54504c4797441b58', 'index': '4194345472', 'onu_type': 'XX230v', 'olt': 'oltHuawei', 'time': '2022-12-23T11:22:28.082494', 'fsp': '0/5/2'}!!!
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.provision.provision/2041872] olt=oltHuawei unconf={'sn': '4857544393049f38', 'index': '4194345728', 'onu_type': '110H', 'olt': 'oltHuawei', 'time': '2022-12-23T11:22:28.083381', 'fsp': '0/5/3'}...
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.provision.provision/2041872] olt=oltHuawei unconf={'sn': '4857544393049f38', 'index': '4194345728', 'onu_type': '110H', 'olt': 'oltHuawei', 'time': '2022-12-23T11:22:28.083381', 'fsp': '0/5/3'}!!!
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.provision.provision/2041872] olt=oltHuawei unconf={'sn': '48575443614711a7', 'index': '4194345984', 'onu_type': 'EG8145V5', 'olt': 'oltHuawei', 'time': '2022-12-23T11:22:28.084011', 'fsp': '0/5/4'}...
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.provision.provision/2041872] olt=oltHuawei unconf={'sn': '48575443614711a7', 'index': '4194345984', 'onu_type': 'EG8145V5', 'olt': 'oltHuawei', 'time': '2022-12-23T11:22:28.084011', 'fsp': '0/5/4'}!!!
[2022-12-23 11:22:28 CET] INFO: [krill_gpon.provision.provision/2041872] provision_unconfigured report: filter=['oltHuawei'] --> 0 ONUs
[2022-12-23 11:22:28 CET] INFO: [root/2041872] main!!!
```

### `gpon olt [OLT_ID] snapshot`

It is used when there's a change in the OLT static configuration, Krill must know those changes, for example: traffic table, traffic profile, etc.

```bash
ispadmin@lab3.phicus.es > gpon olt oltHuawei snapshot
[2022-12-23 11:23:01 CET] INFO: [root/2042831] load starts... (Namespace(backup=False, base_path='/var/lib/krill/backup', catv=False, init_full=False, just_list=False, max_threads=8, no_realm=False, offset=0, olt=['oltHuawei'], onus_to_skip=0, parse=None, parse_newest=False, pon=None, realm=None, vendor=None, verbose=1, **{'limit in OLTs to handle': None}))
[2022-12-23 11:23:01 CET] INFO: [root/2042831] load_olt oltHuawei Namespace(backup=False, base_path='/var/lib/krill/backup', catv=False, init_full=False, just_list=False, max_threads=8, no_realm=False, offset=0, olt=['oltHuawei'], onus_to_skip=0, parse=None, parse_newest=False, pon=None, realm=None, vendor=None, verbose=1, **{'limit in OLTs to handle': None})
[2022-12-23 11:23:01 CET] INFO: [krill_gpon.common.mementoloader/2042831] do oltHuawei
[2022-12-23 11:23:02 CET] INFO: [krill_gpon.common.mementoloader/2042831] do_from_device olt=oltHuawei (<class 'krill_gpon.snmpolt.huawei.olt.OltHuawei'>) options=Namespace(backup=False, base_path='/var/lib/krill/backup', catv=False, init_full=False, just_list=False, max_threads=8, no_realm=False, offset=0, olt=['oltHuawei'], onus_to_skip=0, parse=None, parse_newest=False, pon=None, realm=None, vendor=None, verbose=1, **{'limit in OLTs to handle': None})
[2022-12-23 11:23:02 CET] INFO: [krill_gpon.common.mementoloader/2042831] do_from_device olt=oltHuawei -> memento_init_static
[2022-12-23 11:23:02 CET] INFO: [krill_gpon.snmpolt.huawei.memento/2042831] memento::init_static1 olt=oltHuawei...
[2022-12-23 11:23:35 CET] INFO: [krill_gpon.snmpolt.huawei.olt/2042831] mongo memento seems valid for oltHuawei
```

### `gpon olt [OLT_ID] snapshot-full`

It is used when a change in the ONT's configuration is made and Krill must know those changes. It is also a good practice to use it when we add ONTs manually in the OLT so we can have all the IDs from that OLT updated.

```bash
ispadmin@lab3.phicus.es > gpon olt oltHuawei snapshot-full
[2022-12-23 11:23:56 CET] INFO: [root/2044026] load starts... (Namespace(backup=False, base_path='/var/lib/krill/backup', catv=False, init_full=True, just_list=False, max_threads=8, no_realm=False, offset=0, olt=['oltHuawei'], onus_to_skip=0, parse=None, parse_newest=False, pon=None, realm=None, vendor=None, verbose=1, **{'limit in OLTs to handle': None}))
[2022-12-23 11:23:56 CET] INFO: [root/2044026] load_olt oltHuawei Namespace(backup=False, base_path='/var/lib/krill/backup', catv=False, init_full=True, just_list=False, max_threads=8, no_realm=False, offset=0, olt=['oltHuawei'], onus_to_skip=0, parse=None, parse_newest=False, pon=None, realm=None, vendor=None, verbose=1, **{'limit in OLTs to handle': None})
[2022-12-23 11:23:56 CET] INFO: [krill_gpon.common.mementoloader/2044026] do oltHuawei
[2022-12-23 11:23:57 CET] INFO: [krill_gpon.common.mementoloader/2044026] do_from_device olt=oltHuawei (<class 'krill_gpon.snmpolt.huawei.olt.OltHuawei'>) options=Namespace(backup=False, base_path='/var/lib/krill/backup', catv=False, init_full=True, just_list=False, max_threads=8, no_realm=False, offset=0, olt=['oltHuawei'], onus_to_skip=0, parse=None, parse_newest=False, pon=None, realm=None, vendor=None, verbose=1, **{'limit in OLTs to handle': None})
[2022-12-23 11:23:57 CET] INFO: [krill_gpon.snmpolt.huawei.memento/2044026] memento::init_static1 olt=oltHuawei...
[2022-12-23 11:24:28 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei onus...
[2022-12-23 11:24:40 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei service flows...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei init... (4 ONUs)
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei native vlans...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei merge...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('3334',) sf=p1=0 p2=5 p3=0 p4=1 type=gpon svlan=1301 upara=-1 out=management in=management...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('3335',) sf=p1=0 p2=5 p3=0 p4=1 type=gpon svlan=1301 upara=-1 out=100M in=100M...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('5556',) sf=p1=0 p2=5 p3=3 p4=0 type=gpon svlan=1100 upara=-1 out= in=...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('5557',) sf=p1=0 p2=5 p3=2 p4=1 type=gpon svlan=933 upara=1023 out=management in=management...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('5558',) sf=p1=0 p2=5 p3=2 p4=1 type=gpon svlan=1100 upara=1021 out=100M in=100M...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('5559',) sf=p1=0 p2=5 p3=2 p4=2 type=gpon svlan=933 upara=20 out=management in=management...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('5560',) sf=p1=0 p2=5 p3=2 p4=2 type=gpon svlan=1100 upara=1021 out=100M in=100M...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('5561',) sf=p1=0 p2=5 p3=3 p4=0 type=gpon svlan=933 upara=1023 out=management in=management...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.services/2044026] get_olt_onus olt=oltHuawei sf_index=('5562',) sf=p1=0 p2=5 p3=3 p4=0 type=gpon svlan=1100 upara=1021 out=100M in=100M...
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.common.memento/2044026] memento::init_onus olt=oltHuawei onus-3 -> 4
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.common.memento/2044026] init_onus oltHuawei -> 4 ONUs
[2022-12-23 11:24:56 CET] INFO: [krill_gpon.snmpolt.huawei.olt/2044026] mongo memento seems valid for oltHuawei
```

### `gpon onu by-sn [SERIAL_NUMBER]`

It allows us to see the condition of an ONT by its serial number.

```bash
ispadmin@lab3.phicus.es > gpon onu by-sn 444632326a183197
cpehost=*cpe-267* sn=444632326a183197

sn              : 444632326a183197 (DF226A183197)

*OLT*
olt             : oltHuawei
f/s/p-onu       : 0/5/2-2
status          : up
reg_status      : ['online']
uptime          : 167887
desc            : cpe0267
type_name       : FD604GW-DX-R710
line_profile    : None
service_profile : None
dnrx            : -8.89 dBm
catvrx          : 25.6 dBm
uptx            : 1.65 dBm -> -11.340000000000003 dBm (12.990000000000004 dB att)
bw              : 0 / 0 bps
ips             : ['0.0.0.0']
alarms          : 

*Kiwi*
CPE             : cpe-267
Customer        : #None b'incauto' b'turista'
Address         : b''
Speed           : /
Service         : None
Active          : False
Access          : False
Model           : None
Address mode    : None
D-SN            : None
Notes           : b'notes...'

            
Service ports
service-port u-vlan s-vlan native              outbound               inbound
Memento
        5558     20    933                   management            management
        5559   1021   1100                         100M                  100M

last registration info:
#0 from 2022-12-21 10:45:47Z to 2022-12-21 10:51:45Z -> cause losi
#1 from 2022-12-21 10:52:32Z to  -> cause noerror
```

::: tip
This command can be used specifying other selection parameters:
- CPE ID: `gpon onu id 0267`
- CPE_NAME: `gpon onu cpe cpe0267`
:::

### `gpon onu do factory-reset by-sn [SERIAL_NUMBER]`

It allows us to do a factory-reset of the ont through the cli, using the serial number.

```bash
ispadmin@lab3.phicus.es > gpon onu do factory-reset by-sn 444632326a183197
```

::: tip
The same command can be used specifying other selection parameters:
- CPE ID: `gpon onu do factory-reset id 0267`
- CPE_NAME: `gpon onu do factory-reset cpe cpe0267`
:::

### `gpon onu do reboot by-sn [SERIAL_NUMBER]`

It allows us to reboot the ont using it serial number.

```bash
ispadmin@lab3.phicus.es > gpon onu do reboot by-sn 444632326a183197
```

::: tip
The same command can be used specifying other selection parameters:
- CPE ID: `gpon onu do reboot id 0267`
- CPE_NAME: `gpon onu do reboot cpe cpe0267`
:::

### `gpon onu do reboot by-sn [SERIAL_NUMBER]`

It allows us to unprovision the ONT using its serial number.

```bash
ispadmin@lab3.phicus.es > gpon onu do unprovision by-sn 444632326a183197
```

::: tip
The same command can be used specifying other selection parameters:
- CPE ID: `gpon onu do unprovision id 0267`
- CPE_NAME: `gpon onu do unprovision cpe cpe0267`
:::

### `gpon onus  bandwidth olt [OLT_ID]`

It allows us to see the bandwith for each ONT.

```bash
ispadmin@lab3.phicus.es > gpon onus bandwidth olt oltHuawei
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status   dnbw   upbw
==========================================================================================
0/ 5/ 0:01     bundletest                4857544311111111               down    0.0    0.0
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online   49.1    0.0 0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online   66.1  237.3 0.0.0.0 
0/ 5/ 3:00        cpe0273         245H   4857544300000000             online   53.9    5.7 0.0.0.0 
```

### `gpon onus  bandwidth olt [OLT_ID] pon [FRAME] [SLOT] [PORT]`

It allows us to see the bandwith for each ONT of an specific PON.

```bash
ispadmin@lab3.phicus.es > gpon onus bandwidth olt oltHuawei pon 0 5 2
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status   dnbw   upbw
==========================================================================================
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online    0.0    0.0 0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online   73.5  266.6 0.0.0.0
```

### `gpon onus provisioned mismatchs olt [OLT_ID]`

Shows ONTs that have been provisioned but have some parameter that is not correct in the provision.

```bash
ispadmin@lab3.phicus.es > gpon onu provisioned mismatchs olt oltHuawei
OLT: oltHuawei (4 ONUs)
 0/ 5/ 0:  1 4857544311111111                                               -1/1301/si/-1 -1/1301/si/-1     /bundletest act=0 acc=0 add=
 0/ 5/ 2:  1 4d53544330c1ec46             HG8245Q2                   1023/933/by/1023 1021/1100/by/1021        /cpe0264 act=0 acc=0 add=HG8245Q2
 0/ 5/ 2:  2 444632326a183197      FD604GW-DX-R710                       20/933/by/20 1021/1100/by/1021        /cpe0267 act=0 acc=0 add=FD604GW-DX-R710
 0/ 5/ 3:  0 4857544300000000                 245H     -1/1100/si/-1 1023/933/by/1023 1021/1100/by/1021        /cpe0273 act=0 acc=0 add=245H
```

### `gpon onus provisioned olt [OLT_ID]`

Shows the provisioned ONTs in an specific OLT.

```bash
ispadmin@lab3.phicus.es > gpon onus provisioned olt oltHuawei
OLT: oltHuawei (4 ONUs)
 0/ 5/ 0:  1 4857544311111111                                              -1/1301/si/-1 -1/1301/si/-1     /bundletest act=0 acc=0 add=
 0/ 5/ 2:  1 4d53544330c1ec46            HG8245Q2                   1023/933/by/1023 1021/1100/by/1021       /cpe0264 act=0 acc=0 add=HG8245Q2
 0/ 5/ 2:  2 444632326a183197     FD604GW-DX-R710                       20/933/by/20 1021/1100/by/1021       /cpe0267 act=0 acc=0 add=FD604GW-DX-R710
 0/ 5/ 3:  0 4857544300000000                245H     -1/1100/si/-1 1023/933/by/1023 1021/1100/by/1021       /cpe0273 act=0 acc=0 add=245H
```

### `gpon onus report olt [OLT_ID]`

It creates a report of all the ONTs connected to the OLT.

```bash
ispadmin@lab3.phicus.es > gpon onus report olt oltHuawei
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status
============================================================================
0/ 5/ 0:01     bundletest                4857544311111111               down
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online 0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online 0.0.0.0 
0/ 5/ 3:00        cpe0273         245H   4857544300000000             online 0.0.0.0
```

### `gpon onus report olt [OLT_ID] pon [FRAME] [SLOT] [PORT]`

It shows a report of the ONTs connected to a certain PON.

```bash
ispadmin@lab3.phicus.es > gpon onus report olt oltHuawei pon 0 5 2 
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status
============================================================================
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online 0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online 0.0.0.0
```

### `gpon onus status olt [OLT_ID]`

It shows the condition of the ONTs connected to an OLT.

```bash
ispadmin@lab3.phicus.es > gpon onus status olt oltHuawei
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status
============================================================================
0/ 5/ 0:01     bundletest                4857544311111111               down
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online 0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online 0.0.0.0 
0/ 5/ 3:00        cpe0273         245H   4857544300000000             online 0.0.0.0
```

### `gpon onus status olt [OLT_ID] pon [FRAME] [SLOT] [PORT]`

It shows the condition of the ONTs connected to a certain PON.

```bash
ispadmin@lab3.phicus.es > gpon onus status olt oltHuawei pon 0 5 2
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status
============================================================================
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online 0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online 0.0.0.0
```

### `gpon onus txrx olt [OLT_ID]`

It shows the ONTs' power Tx/Rx of a certain OLT.

```bash
ispadmin@lab3.phicus.es > gpon onus txrx olt oltHuawei
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status    dnTx    dnRx   dnAtt    upTx    upRx   upAtt    tvRx  pondsv
============================================================================================================================================
0/ 5/ 0:01     bundletest                4857544311111111               down
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online    5.12   -8.82   13.94    2.38  -11.07   13.45   -1.00    0.00  0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online    5.12   -8.94   14.06    1.65  -11.16   12.81   -1.00    0.00  0.0.0.0 
0/ 5/ 3:00        cpe0273         245H   4857544300000000             online    5.12  -29.58   34.70    2.14  -16.87   19.01   -1.00    0.00  0.0.0.0 
```

### `gpon onus txrx olt [OLT_ID] pon [FRAME] [SLOT] [PORT]`

It shows the ONTs' power Tx/Rx of an OLT in a certain PON.

```bash
ispadmin@lab3.phicus.es > gpon onus txrx olt oltHuawei pon 0 5 2
OLT: oltHuawei
f/ s/ p:id           desc         type                 sn             status    dnTx    dnRx   dnAtt    upTx    upRx   upAtt    tvRx  pondsv
============================================================================================================================================
0/ 5/ 2:01        cpe0264     HG8245Q2   4d53544330c1ec46             online    5.10   -8.87   13.97    2.36  -11.11   13.47   -1.00    0.00  0.0.0.0 
0/ 5/ 2:02        cpe0267 FD604GW-DX-R   444632326a183197             online    5.10   -8.92   14.02    1.69  -11.16   12.85   -1.00    0.00  0.0.0.0
```

### `gpon onu unconfigured` (A deprecar)

It shows the pending configuration ONTs.

```bash
ispadmin@lab3.phicus.es > gpon onu unconfigured
WARNING: Command are deprecated. Please use 'gpon provision pending' instead
+-----------+-------+------------------+----------+----------------------------+
|    OLT    | f/s/p |  Serial Number   |  Model   |            Time            |
+-----------+-------+------------------+----------+----------------------------+
| oltHuawei | 0/5/2 | 54504c4797441b58 |  XX230v  | 2022-12-23T11:38:23.114467 |
| oltHuawei | 0/5/3 | 4857544393049f38 |   110H   | 2022-12-23T11:38:23.114965 |
| oltHuawei | 0/5/4 | 48575443614711a7 | EG8145V5 | 2022-12-23T11:38:23.115389 |
+-----------+-------+------------------+----------+----------------------------+
```

### `gpon provision pending`

It shows the pending provision ONTs.

```bash
ispadmin@lab3.phicus.es > gpon provision pending
+-----------+-------+------------------+----------+----------------------------+
|    OLT    | f/s/p |  Serial Number   |  Model   |            Time            |
+-----------+-------+------------------+----------+----------------------------+
| oltHuawei | 0/5/2 | 54504c4797441b58 |  XX230v  | 2022-12-23T11:48:33.327472 |
| oltHuawei | 0/5/3 | 4857544393049f38 |   110H   | 2022-12-23T11:48:33.328009 |
| oltHuawei | 0/5/4 | 48575443614711a7 | EG8145V5 | 2022-12-23T11:48:33.328380 |
+-----------+-------+------------------+----------+----------------------------+
```

### `gpon provision pending olt [OLT_ID]`

It shows the pending provision ONTs in a certain OLT.

```bash
ispadmin@lab3.phicus.es > gpon provision pending olt oltHuawei
+-----------+-------+------------------+----------+----------------------------+
|    OLT    | f/s/p |  Serial Number   |  Model   |            Time            |
+-----------+-------+------------------+----------+----------------------------+
| oltHuawei | 0/5/2 | 54504c4797441b58 |  XX230v  | 2022-12-23T11:49:27.671639 |
| oltHuawei | 0/5/3 | 4857544393049f38 |   110H   | 2022-12-23T11:49:27.672131 |
| oltHuawei | 0/5/4 | 48575443614711a7 | EG8145V5 | 2022-12-23T11:49:27.672485 |
+-----------+-------+------------------+----------+----------------------------+
```

## TR069 Tools

### `tr069 reconfig [CPE_ID]`

Start a TR069 session for an ONT.

```bash
ispadmin@lab3.phicus.es > tr069 reconfig cpe0273
```

## DOCSIS Tools

### `docsis cmts print`

It allows to visualize the information of all the available cmts.

```bash
ispadmin@lab3.phicus.es > docsis cmts print
CMTS: cmtsCENTRAL
uptime: None
MD: ix=1033 name=ca5-0
Channels:
  channel chanid=17 pri=true ifindex=1135 name=In5/0:0 freq=681000000
  channel chanid=18 pri=true ifindex=1136 name=In5/0:1 freq=687000000
  channel chanid=19 pri=true ifindex=1137 name=In5/0:2 freq=693000000
  channel chanid=20 pri=true ifindex=1138 name=In5/0:3 freq=699000000
  channel chanid=1 pri=false ifindex=1721 name=Ca5/0-upstream0 freq=35800000
  channel chanid=2 pri=false ifindex=1722 name=Ca5/0-upstream1 freq=35800000
  channel chanid=3 pri=false ifindex=1723 name=Ca5/0-upstream2 freq=35800000
  channel chanid=4 pri=false ifindex=1724 name=Ca5/0-upstream3 freq=35800000
MD: ix=1017 name=ca3-0
Channels:
  channel chanid=1 pri=true ifindex=1095 name=In3/0:0 freq=657000000
  channel chanid=2 pri=true ifindex=1096 name=In3/0:1 freq=663000000
  channel chanid=3 pri=true ifindex=1097 name=In3/0:2 freq=669000000
  channel chanid=4 pri=true ifindex=1098 name=In3/0:3 freq=675000000
  channel chanid=1 pri=false ifindex=1337 name=Ca3/0-upstream0 freq=32600000
  channel chanid=2 pri=false ifindex=1338 name=Ca3/0-upstream1 freq=32600000
  channel chanid=3 pri=false ifindex=1339 name=Ca3/0-upstream2 freq=32600000
  channel chanid=4 pri=false ifindex=1340 name=Ca3/0-upstream3 freq=32600000
MD: ix=1025 name=ca4-0
Channels:
  channel chanid=9 pri=true ifindex=1115 name=In4/0:0 freq=705000000
  channel chanid=10 pri=true ifindex=1116 name=In4/0:1 freq=711000000
  channel chanid=11 pri=true ifindex=1117 name=In4/0:2 freq=717000000
  channel chanid=12 pri=true ifindex=1118 name=In4/0:3 freq=723000000
  channel chanid=1 pri=false ifindex=1529 name=Ca4/0-upstream0 freq=39000000
  channel chanid=2 pri=false ifindex=1530 name=Ca4/0-upstream1 freq=39000000
  channel chanid=3 pri=false ifindex=1531 name=Ca4/0-upstream2 freq=39000000
  channel chanid=4 pri=false ifindex=1532 name=Ca4/0-upstream3 freq=39000000
MD: ix=1042 name=ca6-1
Channels:
  channel chanid=29 pri=true ifindex=1165 name=In6/1:0 freq=681000000
  channel chanid=30 pri=true ifindex=1166 name=In6/1:1 freq=687000000
  channel chanid=31 pri=true ifindex=1167 name=In6/1:2 freq=693000000
  channel chanid=32 pri=true ifindex=1168 name=In6/1:3 freq=699000000
  channel chanid=1 pri=false ifindex=1937 name=Ca6/1-upstream0 freq=33600000
  channel chanid=2 pri=false ifindex=1938 name=Ca6/1-upstream1 freq=33600000
  channel chanid=3 pri=false ifindex=1939 name=Ca6/1-upstream2 freq=33600000
  channel chanid=4 pri=false ifindex=1940 name=Ca6/1-upstream3 freq=33600000
MD: ix=1026 name=ca4-1
Channels:
  channel chanid=13 pri=true ifindex=1125 name=In4/1:0 freq=657000000
  channel chanid=14 pri=true ifindex=1126 name=In4/1:1 freq=663000000
  channel chanid=15 pri=true ifindex=1127 name=In4/1:2 freq=669000000
  channel chanid=16 pri=true ifindex=1128 name=In4/1:3 freq=675000000
  channel chanid=1 pri=false ifindex=1553 name=Ca4/1-upstream0 freq=32600000
  channel chanid=2 pri=false ifindex=1554 name=Ca4/1-upstream1 freq=32600000
  channel chanid=3 pri=false ifindex=1555 name=Ca4/1-upstream2 freq=32600000
  channel chanid=4 pri=false ifindex=1556 name=Ca4/1-upstream3 freq=32600000
MD: ix=1034 name=ca5-1
Channels:
  channel chanid=21 pri=true ifindex=1145 name=In5/1:0 freq=705000000
  channel chanid=22 pri=true ifindex=1146 name=In5/1:1 freq=711000000
  channel chanid=23 pri=true ifindex=1147 name=In5/1:2 freq=717000000
  channel chanid=24 pri=true ifindex=1148 name=In5/1:3 freq=723000000
  channel chanid=1 pri=false ifindex=1745 name=Ca5/1-upstream0 freq=39000000
  channel chanid=2 pri=false ifindex=1746 name=Ca5/1-upstream1 freq=39000000
  channel chanid=3 pri=false ifindex=1747 name=Ca5/1-upstream2 freq=39000000
  channel chanid=4 pri=false ifindex=1748 name=Ca5/1-upstream3 freq=39000000
MD: ix=1018 name=ca3-1
Channels:
  channel chanid=5 pri=true ifindex=1105 name=In3/1:0 freq=681000000
  channel chanid=6 pri=true ifindex=1106 name=In3/1:1 freq=687000000
  channel chanid=7 pri=true ifindex=1107 name=In3/1:2 freq=693000000
  channel chanid=8 pri=true ifindex=1108 name=In3/1:3 freq=699000000
  channel chanid=1 pri=false ifindex=1361 name=Ca3/1-upstream0 freq=35800000
  channel chanid=2 pri=false ifindex=1362 name=Ca3/1-upstream1 freq=35800000
  channel chanid=3 pri=false ifindex=1363 name=Ca3/1-upstream2 freq=35800000
  channel chanid=4 pri=false ifindex=1364 name=Ca3/1-upstream3 freq=35800000
MD: ix=1041 name=ca6-0
Channels:
  channel chanid=25 pri=true ifindex=1155 name=In6/0:0 freq=657000000
  channel chanid=26 pri=true ifindex=1156 name=In6/0:1 freq=663000000
  channel chanid=27 pri=true ifindex=1157 name=In6/0:2 freq=669000000
  channel chanid=28 pri=true ifindex=1158 name=In6/0:3 freq=675000000
  channel chanid=1 pri=false ifindex=1913 name=Ca6/0-upstream0 freq=30400000
  channel chanid=2 pri=false ifindex=1914 name=Ca6/0-upstream1 freq=30400000
  channel chanid=3 pri=false ifindex=1915 name=Ca6/0-upstream2 freq=30400000
  channel chanid=4 pri=false ifindex=1916 name=Ca6/0-upstream3 freq=30400000

Upstreams
  	itf  id   	freq	width  mp modulation                  	interface
 	1337   1   32600000  3200000 122   	qpsk                  	ca3-0-up0 up
 	1338   2   32600000  3200000 122   	qpsk                  	ca3-0-up1 up
 	1339   3   32600000  3200000 122   	qpsk                  	ca3-0-up2 up
 	1340   4   32600000  3200000 122   	qpsk                  	ca3-0-up3 up
 	1361   1   35800000  3200000 122   	qpsk                  	ca3-1-up0 up
 	1362   2   35800000  3200000 122   	qpsk                  	ca3-1-up1 up
 	1363   3   35800000  3200000 122   	qpsk                  	ca3-1-up2 up
 	1364   4   35800000  3200000 122   	qpsk                  	ca3-1-up3 up
 	1529   1   39000000  3200000 122   	qpsk                  	ca4-0-up0 up
 	1530   2   39000000  3200000 122   	qpsk                  	ca4-0-up1 up
 	1531   3   39000000  3200000 122   	qpsk                  	ca4-0-up2 up
 	1532   4   39000000  3200000 122   	qpsk                  	ca4-0-up3 up
 	1553   1   32600000  3200000 122   	qpsk                  	ca4-1-up0 up
 	1554   2   32600000  3200000 122   	qpsk                  	ca4-1-up1 up
 	1555   3   32600000  3200000 122   	qpsk                  	ca4-1-up2 up
 	1556   4   32600000  3200000 122   	qpsk                  	ca4-1-up3 up
 	1721   1   35800000  3200000 122   	qpsk                  	ca5-0-up0 up
 	1722   2   35800000  3200000 122   	qpsk                  	ca5-0-up1 up
 	1723   3   35800000  3200000 122   	qpsk                  	ca5-0-up2 up
 	1724   4   35800000  3200000 122   	qpsk                  	ca5-0-up3 up
 	1745   1   39000000  3200000 122   	qpsk                  	ca5-1-up0 up
 	1746   2   39000000  3200000 122   	qpsk                  	ca5-1-up1 up
 	1747   3   39000000  3200000 122   	qpsk                  	ca5-1-up2 up
 	1748   4   39000000  3200000 122   	qpsk                  	ca5-1-up3 up
 	1913   1   30400000  3200000 122   	qpsk                  	ca6-0-up0 up
 	1914   2   30400000  3200000 122   	qpsk                  	ca6-0-up1 up
 	1915   3   30400000  3200000 122   	qpsk                  	ca6-0-up2 up
 	1916   4   30400000  3200000 122   	qpsk                  	ca6-0-up3 up
 	1937   1   33600000  3200000 122   	qpsk                  	ca6-1-up0 up
 	1938   2   33600000  3200000 122   	qpsk                  	ca6-1-up1 up
 	1939   3   33600000  3200000 122   	qpsk                  	ca6-1-up2 up
 	1940   4   33600000  3200000 122   	qpsk                  	ca6-1-up3 up

Downstreams
  	itf  id   	freq 	modulation  pow                  	interface
 	1289   1  657000000     	qam256 46.0                  	in3-0-dn0 up
 	1290   2  663000000     	qam256 46.0                  	in3-0-dn1 up
 	1291   3  669000000     	qam256 46.0                  	in3-0-dn2 up
 	1292   4  675000000     	qam256 46.0                  	in3-0-dn3 up
 	1293   5  681000000     	qam256 46.0                  	in3-1-dn0 up
 	1294   6  687000000     	qam256 46.0                  	in3-1-dn1 up
 	1295   7  693000000     	qam256 46.0                  	in3-1-dn2 up
 	1296   8  699000000     	qam256 46.0                  	in3-1-dn3 up
 	1297   9  705000000     	qam256 46.0                  	in4-0-dn0 up
 	1298  10  711000000     	qam256 46.0                  	in4-0-dn1 up
 	1299  11  717000000     	qam256 46.0                  	in4-0-dn2 up
 	1300  12  723000000     	qam256 46.0                  	in4-0-dn3 up
 	1301  13  657000000     	qam256 46.0                  	in4-1-dn0 up
 	1302  14  663000000     	qam256 46.0                  	in4-1-dn1 up
 	1303  15  669000000     	qam256 46.0                  	in4-1-dn2 up
 	1304  16  675000000     	qam256 46.0                  	in4-1-dn3 up
 	1305  17  681000000     	qam256 46.0                  	in5-0-dn0 up
 	1306  18  687000000     	qam256 46.0                  	in5-0-dn1 up
 	1307  19  693000000     	qam256 46.0                  	in5-0-dn2 up
 	1308  20  699000000     	qam256 46.0                  	in5-0-dn3 up
 	1309  21  705000000     	qam256 46.0                  	in5-1-dn0 up
 	1310  22  711000000     	qam256 46.0                  	in5-1-dn1 up
 	1311  23  717000000     	qam256 46.0                  	in5-1-dn2 up
 	1312  24  723000000     	qam256 46.0                  	in5-1-dn3 up
 	1313  25  657000000     	qam256 44.0                  	in6-0-dn0 up
 	1314  26  663000000     	qam256 44.0                  	in6-0-dn1 up
 	1315  27  669000000     	qam256 44.0                  	in6-0-dn2 up
 	1316  28  675000000     	qam256 44.0                  	in6-0-dn3 up
 	1317  29  681000000     	qam256 44.0                  	in6-1-dn0 up
 	1318  30  687000000     	qam256 44.0                  	in6-1-dn1 up
 	1319  31  693000000     	qam256 44.0                  	in6-1-dn2 up
 	1320  32  699000000     	qam256 44.0                  	in6-1-dn3 up

Fiber Nodes
  FN-1 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-2 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-3 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-4 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-5 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-6 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-7 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-8 -  (map: []) (DS: chanids=[] chans=set() / US: chanids=[] chans=set())
  FN-9 -  (map: [(1041, 2621701, 1, 5), (1042, 2687237, 1, 5)]) (DS: chanids=[2686977, 2752513] chans={32, 25, 26, 27, 28, 29, 30, 31} / US: chanids=[1, 1] chans={1})
  FN-10 -  (map: [(1041, 2621702, 1, 6), (1042, 2687238, 1, 6)]) (DS: chanids=[2686977, 2752513] chans={32, 25, 26, 27, 28, 29, 30, 31} / US: chanids=[2, 2] chans={2})
  FN-11 -  (map: [(1041, 2621703, 1, 7), (1042, 2687239, 1, 7)]) (DS: chanids=[2686977, 2752513] chans={32, 25, 26, 27, 28, 29, 30, 31} / US: chanids=[3, 3] chans={3})
  FN-12 -  (map: [(1041, 2621704, 1, 8), (1042, 2687240, 1, 8)]) (DS: chanids=[2686977, 2752513] chans={32, 25, 26, 27, 28, 29, 30, 31} / US: chanids=[4, 4] chans={4})
CMTS: cmtsKENEDY
uptime: None
MD: ix=2000004 name=catv-mac.4
Channels:
  channel chanid=1 pri=true ifindex=3000032 name=Downstream 2/0/0 freq=657000000
  channel chanid=2 pri=true ifindex=3000033 name=Downstream 2/0/1 freq=663000000
  channel chanid=3 pri=true ifindex=3000034 name=Downstream 2/0/2 freq=669000000
  channel chanid=4 pri=true ifindex=3000035 name=Downstream 2/0/3 freq=675000000
  channel chanid=5 pri=true ifindex=3000036 name=Downstream 2/1/0 freq=681000000
  channel chanid=6 pri=true ifindex=3000037 name=Downstream 2/1/1 freq=687000000
  channel chanid=7 pri=true ifindex=3000038 name=Downstream 2/1/2 freq=693000000
  channel chanid=8 pri=true ifindex=3000039 name=Downstream 2/1/3 freq=699000000
  channel chanid=9 pri=true ifindex=3000040 name=Downstream 2/2/0 freq=705000000
  channel chanid=10 pri=true ifindex=3000041 name=Downstream 2/2/1 freq=711000000
  channel chanid=11 pri=true ifindex=3000042 name=Downstream 2/2/2 freq=717000000
  channel chanid=12 pri=true ifindex=3000043 name=Downstream 2/2/3 freq=723000000
  channel chanid=13 pri=true ifindex=3000044 name=Downstream 2/3/0 freq=729000000
  channel chanid=14 pri=true ifindex=3000045 name=Downstream 2/3/1 freq=735000000
  channel chanid=15 pri=true ifindex=3000046 name=Downstream 2/3/2 freq=741000000
  channel chanid=16 pri=true ifindex=3000047 name=Downstream 2/3/3 freq=747000000
  channel chanid=1 pri=false ifindex=5000320 name=Logical Upstream Channel 5/0/0 freq=36800000
  channel chanid=2 pri=false ifindex=5000324 name=Logical Upstream Channel 5/1/0 freq=40000000
  channel chanid=3 pri=false ifindex=5000328 name=Logical Upstream Channel 5/2/0 freq=36800000
  channel chanid=4 pri=false ifindex=5000332 name=Logical Upstream Channel 5/3/0 freq=40000000
  channel chanid=5 pri=false ifindex=5000336 name=Logical Upstream Channel 5/4/0 freq=36800000
  channel chanid=6 pri=false ifindex=5000340 name=Logical Upstream Channel 5/5/0 freq=40000000
  channel chanid=7 pri=false ifindex=5000344 name=Logical Upstream Channel 5/6/0 freq=36800000
  channel chanid=8 pri=false ifindex=5000348 name=Logical Upstream Channel 5/7/0 freq=40000000
MD: ix=2000002 name=catv-mac.2
Channels:
  channel chanid=1 pri=true ifindex=3000008 name=Downstream 0/2/0 freq=657000000
  channel chanid=2 pri=true ifindex=3000009 name=Downstream 0/2/1 freq=663000000
  channel chanid=3 pri=true ifindex=3000010 name=Downstream 0/2/2 freq=669000000
  channel chanid=4 pri=true ifindex=3000011 name=Downstream 0/2/3 freq=675000000
  channel chanid=5 pri=true ifindex=3000012 name=Downstream 0/3/0 freq=681000000
  channel chanid=6 pri=true ifindex=3000013 name=Downstream 0/3/1 freq=687000000
  channel chanid=7 pri=true ifindex=3000014 name=Downstream 0/3/2 freq=693000000
  channel chanid=8 pri=true ifindex=3000015 name=Downstream 0/3/3 freq=699000000
  channel chanid=1 pri=false ifindex=5000208 name=Logical Upstream Channel 3/4.0/0 freq=36800000
  channel chanid=2 pri=false ifindex=5000210 name=Logical Upstream Channel 3/4.1/0 freq=40000000
  channel chanid=3 pri=false ifindex=5000212 name=Logical Upstream Channel 3/5.0/0 freq=36800000
  channel chanid=4 pri=false ifindex=5000214 name=Logical Upstream Channel 3/5.1/0 freq=40000000
  channel chanid=5 pri=false ifindex=5000216 name=Logical Upstream Channel 3/6.0/0 freq=36800000
  channel chanid=6 pri=false ifindex=5000218 name=Logical Upstream Channel 3/6.1/0 freq=40000000
  channel chanid=7 pri=false ifindex=5000220 name=Logical Upstream Channel 3/7.0/0 freq=36800000
  channel chanid=8 pri=false ifindex=5000222 name=Logical Upstream Channel 3/7.1/0 freq=40000000
MD: ix=2000001 name=catv-mac.1
Channels:
  channel chanid=1 pri=true ifindex=3000000 name=Downstream 0/0/0 freq=657000000
  channel chanid=2 pri=true ifindex=3000001 name=Downstream 0/0/1 freq=663000000
  channel chanid=3 pri=true ifindex=3000002 name=Downstream 0/0/2 freq=669000000
  channel chanid=4 pri=true ifindex=3000003 name=Downstream 0/0/3 freq=675000000
  channel chanid=5 pri=true ifindex=3000004 name=Downstream 0/1/0 freq=681000000
  channel chanid=6 pri=true ifindex=3000005 name=Downstream 0/1/1 freq=687000000
  channel chanid=7 pri=true ifindex=3000006 name=Downstream 0/1/2 freq=693000000
  channel chanid=8 pri=true ifindex=3000007 name=Downstream 0/1/3 freq=699000000
  channel chanid=1 pri=false ifindex=5000192 name=Logical Upstream Channel 3/0.0/0 freq=36800000
  channel chanid=2 pri=false ifindex=5000194 name=Logical Upstream Channel 3/0.1/0 freq=40000000
  channel chanid=3 pri=false ifindex=5000196 name=Logical Upstream Channel 3/1.0/0 freq=36800000
  channel chanid=4 pri=false ifindex=5000198 name=Logical Upstream Channel 3/1.1/0 freq=40000000
  channel chanid=5 pri=false ifindex=5000200 name=Logical Upstream Channel 3/2.0/0 freq=36800000
  channel chanid=6 pri=false ifindex=5000202 name=Logical Upstream Channel 3/2.1/0 freq=40000000
  channel chanid=7 pri=false ifindex=5000204 name=Logical Upstream Channel 3/3.0/0 freq=36800000
  channel chanid=8 pri=false ifindex=5000206 name=Logical Upstream Channel 3/3.1/0 freq=40000000
MD: ix=2000003 name=catv-mac.3
Channels:
  channel chanid=1 pri=true ifindex=3000016 name=Downstream 1/0/0 freq=657000000
  channel chanid=2 pri=true ifindex=3000017 name=Downstream 1/0/1 freq=663000000
  channel chanid=3 pri=true ifindex=3000018 name=Downstream 1/0/2 freq=669000000
  channel chanid=4 pri=true ifindex=3000019 name=Downstream 1/0/3 freq=675000000
  channel chanid=5 pri=true ifindex=3000020 name=Downstream 1/1/0 freq=681000000
  channel chanid=6 pri=true ifindex=3000021 name=Downstream 1/1/1 freq=687000000
  channel chanid=7 pri=true ifindex=3000022 name=Downstream 1/1/2 freq=693000000
  channel chanid=8 pri=true ifindex=3000023 name=Downstream 1/1/3 freq=699000000
  channel chanid=9 pri=true ifindex=3000024 name=Downstream 1/2/0 freq=705000000
  channel chanid=10 pri=true ifindex=3000025 name=Downstream 1/2/1 freq=711000000
  channel chanid=11 pri=true ifindex=3000026 name=Downstream 1/2/2 freq=717000000
  channel chanid=12 pri=true ifindex=3000027 name=Downstream 1/2/3 freq=723000000
  channel chanid=13 pri=true ifindex=3000028 name=Downstream 1/3/0 freq=729000000
  channel chanid=14 pri=true ifindex=3000029 name=Downstream 1/3/1 freq=735000000
  channel chanid=15 pri=true ifindex=3000030 name=Downstream 1/3/2 freq=741000000
  channel chanid=16 pri=true ifindex=3000031 name=Downstream 1/3/3 freq=747000000
  channel chanid=1 pri=false ifindex=5000256 name=Logical Upstream Channel 4/0.0/0 freq=36800000
  channel chanid=2 pri=false ifindex=5000258 name=Logical Upstream Channel 4/0.1/0 freq=40000000
  channel chanid=3 pri=false ifindex=5000260 name=Logical Upstream Channel 4/1.0/0 freq=36800000
  channel chanid=4 pri=false ifindex=5000262 name=Logical Upstream Channel 4/1.1/0 freq=40000000
  channel chanid=5 pri=false ifindex=5000264 name=Logical Upstream Channel 4/2.0/0 freq=36800000
  channel chanid=6 pri=false ifindex=5000266 name=Logical Upstream Channel 4/2.1/0 freq=40000000
  channel chanid=7 pri=false ifindex=5000268 name=Logical Upstream Channel 4/3.0/0 freq=30400000
  channel chanid=8 pri=false ifindex=5000270 name=Logical Upstream Channel 4/3.1/0 freq=33600000
  channel chanid=9 pri=false ifindex=5000272 name=Logical Upstream Channel 4/4.0/0 freq=36800000
  channel chanid=10 pri=false ifindex=5000274 name=Logical Upstream Channel 4/4.1/0 freq=40000000
  channel chanid=11 pri=false ifindex=5000276 name=Logical Upstream Channel 4/5.0/0 freq=36800000
  channel chanid=12 pri=false ifindex=5000278 name=Logical Upstream Channel 4/5.1/0 freq=40000000
  channel chanid=13 pri=false ifindex=5000280 name=Logical Upstream Channel 4/6.0/0 freq=36800000
  channel chanid=14 pri=false ifindex=5000282 name=Logical Upstream Channel 4/6.1/0 freq=40000000
  channel chanid=15 pri=false ifindex=5000284 name=Logical Upstream Channel 4/7.0/0 freq=36800000
  channel chanid=16 pri=false ifindex=5000286 name=Logical Upstream Channel 4/7.1/0 freq=40000000

Upstreams
  	itf  id   	freq	width  mp modulation                  	interface
  5000192   1   36800000  3200000   2   	qpsk                 	up.3-0.0-0 up
  5000194   2   40000000  3200000   2   	qpsk                 	up.3-0.1-0 up
  5000196   3   36800000  3200000   1   	qpsk                 	up.3-1.0-0 up
  5000198   4   40000000  3200000   1   	qpsk                 	up.3-1.1-0 up
  5000200   5   36800000  3200000   2   	qpsk                 	up.3-2.0-0 up
  5000202   6   40000000  3200000   2   	qpsk                 	up.3-2.1-0 up
  5000204   7   36800000  3200000   1   	qpsk                 	up.3-3.0-0 up
  5000206   8   40000000  3200000   2   	qpsk                 	up.3-3.1-0 up
  5000208   1   36800000  3200000   2   	qpsk                 	up.3-4.0-0 up
  5000210   2   40000000  3200000   2   	qpsk                 	up.3-4.1-0 up
  5000212   3   36800000  3200000   2   	qpsk                 	up.3-5.0-0 up
  5000214   4   40000000  3200000   2   	qpsk                 	up.3-5.1-0 up
  5000216   5   36800000  3200000   2   	qpsk                 	up.3-6.0-0 up
  5000218   6   40000000  3200000   2   	qpsk                 	up.3-6.1-0 up
  5000220   7   36800000  3200000   2   	qpsk                 	up.3-7.0-0 up
  5000222   8   40000000  3200000   2   	qpsk                 	up.3-7.1-0 up
  5000256   1   36800000  3200000   2   	qpsk                 	up.4-0.0-0 up
  5000258   2   40000000  3200000   2   	qpsk                 	up.4-0.1-0 up
  5000260   3   36800000  3200000   2   	qpsk                 	up.4-1.0-0 up
  5000262   4   40000000  3200000   2   	qpsk                 	up.4-1.1-0 up
  5000264   5   36800000  3200000   2   	qpsk                 	up.4-2.0-0 up
  5000266   6   40000000  3200000   2   	qpsk                 	up.4-2.1-0 up
  5000268   7   30400000  3200000   2   	qpsk                 	up.4-3.0-0 up
  5000270   8   33600000  3200000   2   	qpsk                 	up.4-3.1-0 up
  5000272   9   36800000  3200000   2   	qpsk                 	up.4-4.0-0 up
  5000274  10   40000000  3200000   2   	qpsk                 	up.4-4.1-0 up
  5000276  11   36800000  3200000   2   	qpsk                 	up.4-5.0-0 up
  5000278  12   40000000  3200000   2   	qpsk                 	up.4-5.1-0 up
  5000280  13   36800000  3200000   2   	qpsk                 	up.4-6.0-0 up
  5000282  14   40000000  3200000   2   	qpsk                 	up.4-6.1-0 up
  5000284  15   36800000  3200000   2   	qpsk                 	up.4-7.0-0 up
  5000286  16   40000000  3200000   2   	qpsk                 	up.4-7.1-0 up
  5000320   1   36800000  3200000   2   	qpsk                   	up.5-0-0 up
  5000324   2   40000000  3200000   2   	qpsk                   	up.5-1-0 up
  5000328   3   36800000  3200000   2   	qpsk                   	up.5-2-0 up
  5000332   4   40000000  3200000   2   	qpsk                   	up.5-3-0 up
  5000336   5   36800000  3200000   2   	qpsk                   	up.5-4-0 up
  5000340   6   40000000  3200000   2   	qpsk                   	up.5-5-0 up
  5000344   7   36800000  3200000   2   	qpsk                   	up.5-6-0 up
  5000348   8   40000000  3200000   2   	qpsk                   	up.5-7-0 up

Downstreams
  	itf  id   	freq 	modulation  pow                  	interface
  3000000   1  657000000     	qam256 44.0                   	dn.0-0-0 up
  3000001   2  663000000     	qam256 44.0                   	dn.0-0-1 up
  3000002   3  669000000     	qam256 44.0                   	dn.0-0-2 up
  3000003   4  675000000     	qam256 44.0                   	dn.0-0-3 up
  3000004   5  681000000     	qam256 44.0                   	dn.0-1-0 up
  3000005   6  687000000     	qam256 44.0                   	dn.0-1-1 up
  3000006   7  693000000     	qam256 44.0                   	dn.0-1-2 up
  3000007   8  699000000     	qam256 44.0                   	dn.0-1-3 up
  3000008   1  657000000     	qam256 44.0                   	dn.0-2-0 up
  3000009   2  663000000     	qam256 44.0                   	dn.0-2-1 up
  3000010   3  669000000     	qam256 44.0                   	dn.0-2-2 up
  3000011   4  675000000     	qam256 44.0                   	dn.0-2-3 up
  3000012   5  681000000     	qam256 44.0                   	dn.0-3-0 up
  3000013   6  687000000     	qam256 44.0                   	dn.0-3-1 up
  3000014   7  693000000     	qam256 44.0                   	dn.0-3-2 up
  3000015   8  699000000     	qam256 44.0                   	dn.0-3-3 up
  3000016   1  657000000     	qam256 44.0                   	dn.1-0-0 up
  3000017   2  663000000     	qam256 44.0                   	dn.1-0-1 up
  3000018   3  669000000     	qam256 44.0                   	dn.1-0-2 up
  3000019   4  675000000     	qam256 44.0                   	dn.1-0-3 up
  3000020   5  681000000     	qam256 44.0                   	dn.1-1-0 up
  3000021   6  687000000     	qam256 44.0                   	dn.1-1-1 up
  3000022   7  693000000     	qam256 44.0                   	dn.1-1-2 up
  3000023   8  699000000     	qam256 44.0                   	dn.1-1-3 up
  3000024   9  705000000     	qam256 44.0                   	dn.1-2-0 up
  3000025  10  711000000     	qam256 44.0                   	dn.1-2-1 up
  3000026  11  717000000     	qam256 44.0                   	dn.1-2-2 up
  3000027  12  723000000     	qam256 44.0                   	dn.1-2-3 up
  3000028  13  729000000     	qam256 44.0                   	dn.1-3-0 up
  3000029  14  735000000     	qam256 44.0                   	dn.1-3-1 up
  3000030  15  741000000     	qam256 44.0                   	dn.1-3-2 up
  3000031  16  747000000     	qam256 44.0                   	dn.1-3-3 up
  3000032   1  657000000     	qam256 44.0                   	dn.2-0-0 up
  3000033   2  663000000     	qam256 44.0                   	dn.2-0-1 up
  3000034   3  669000000     	qam256 44.0                   	dn.2-0-2 up
  3000035   4  675000000     	qam256 44.0                   	dn.2-0-3 up
  3000036   5  681000000     	qam256 44.0                   	dn.2-1-0 up
  3000037   6  687000000     	qam256 44.0                   	dn.2-1-1 up
  3000038   7  693000000     	qam256 44.0                   	dn.2-1-2 up
  3000039   8  699000000     	qam256 44.0                   	dn.2-1-3 up
  3000040   9  705000000     	qam256 44.0                   	dn.2-2-0 up
  3000041  10  711000000     	qam256 44.0                   	dn.2-2-1 up
  3000042  11  717000000     	qam256 44.0                   	dn.2-2-2 up
  3000043  12  723000000     	qam256 44.0                   	dn.2-2-3 up
  3000044  13  729000000     	qam256 44.0                   	dn.2-3-0 up
  3000045  14  735000000     	qam256 44.0                   	dn.2-3-1 up
  3000046  15  741000000     	qam256 44.0                   	dn.2-3-2 up
  3000047  16  747000000     	qam256 44.0                   	dn.2-3-3 up

Fiber Nodes
  SG01 -  (map: [(2000001, 257, 8, 2)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[256] chans={1, 2})
  SG02 -  (map: [(2000001, 258, 8, 4)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[257] chans={3, 4})
  SG03 -  (map: [(2000001, 259, 8, 6)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[258] chans={5, 6})
  SG04 -  (map: [(2000001, 260, 8, 8)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[259] chans={8, 7})
  SG05 -  (map: [(2000002, 517, 37, 10)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[256] chans={1, 2})
  SG06 -  (map: [(2000002, 518, 37, 12)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[257] chans={3, 4})
  SG07 -  (map: [(2000002, 519, 37, 14)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[258] chans={5, 6})
  SG08 -  (map: [(2000002, 520, 37, 16)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[259] chans={8, 7})
  SG09 -  (map: [(2000003, 777, 74, 18)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[256] chans={1, 2})
  SG10 -  (map: [(2000003, 778, 74, 20)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[257] chans={3, 4})
  SG11 -  (map: [(2000003, 779, 74, 22)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[258] chans={5, 6})
  SG12 -  (map: [(2000003, 780, 74, 26)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[259] chans={8, 9, 10, 7})
  SG13 -  (map: [(2000003, 781, 74, 0)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[] chans=set())
  SG14 -  (map: [(2000003, 782, 74, 28)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[260] chans={11, 12})
  SG15 -  (map: [(2000003, 783, 74, 30)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[261] chans={13, 14})
  SG16 -  (map: [(2000003, 784, 74, 32)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[262] chans={16, 15})
  SG17 -  (map: [(2000004, 1041, 36, 34)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[256] chans={1, 2})
  SG18 -  (map: [(2000004, 1042, 36, 36)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[257] chans={3, 4})
  SG19 -  (map: [(2000004, 1043, 36, 38)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[258] chans={5, 6})
  SG20 -  (map: [(2000004, 1044, 36, 40)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16} / US: chanids=[259] chans={8, 7})
```

### `docsis cmtss print`

It's an alias of `docsis cmts print`.

### `docsis cm [cmtsID] print`

Allows you to view all the information of a specific header (nodes, frequencies, etc.).

```bash
ispadmin@lab3.phicus.es > docsis cm cmtsCasa print
CMTS: cmtsCasa
uptime: None
MD: ix=77 name=catv-mac.1
Channels:
  channel chanid=1 pri=true ifindex=141 name=Downstream 0/0/0 freq=464000000
  channel chanid=2 pri=true ifindex=142 name=Downstream 0/0/1 freq=472000000
  channel chanid=3 pri=true ifindex=143 name=Downstream 0/1/0 freq=480000000
  channel chanid=4 pri=true ifindex=144 name=Downstream 0/1/1 freq=488000000
  channel chanid=5 pri=true ifindex=145 name=Downstream 0/2/0 freq=432000000
  channel chanid=6 pri=true ifindex=146 name=Downstream 0/2/1 freq=440000000
  channel chanid=7 pri=true ifindex=147 name=Downstream 0/3/0 freq=448000000
  channel chanid=8 pri=true ifindex=148 name=Downstream 0/3/1 freq=456000000
  channel chanid=1 pri=false ifindex=397 name=Logical Upstream Channel 1/0/0 freq=54500000
  channel chanid=2 pri=false ifindex=398 name=Logical Upstream Channel 1/1/0 freq=48000000
  channel chanid=3 pri=false ifindex=399 name=Logical Upstream Channel 1/2/0 freq=54500000
  channel chanid=4 pri=false ifindex=400 name=Logical Upstream Channel 1/3/0 freq=48000000
  channel chanid=5 pri=false ifindex=401 name=Logical Upstream Channel 1/4/0 freq=54500000
  channel chanid=6 pri=false ifindex=402 name=Logical Upstream Channel 1/5/0 freq=61000000
  channel chanid=7 pri=false ifindex=403 name=Logical Upstream Channel 1/6/0 freq=41500000
  channel chanid=8 pri=false ifindex=404 name=Logical Upstream Channel 1/7/0 freq=35000000

Upstreams
  	itf  id   	freq	width  mp modulation                  	interface
  	397   1   54500000  3200000   2   	qpsk                   	up.1-0-0 up
  	398   2   48000000  3200000   2   	qpsk                   	up.1-1-0 up
  	399   3   54500000  3200000   2   	qpsk                   	up.1-2-0 up
  	400   4   48000000  6400000   6   	qpsk                   	up.1-3-0 up
  	401   5   54500000  6400000   6   	qpsk                   	up.1-4-0 up
  	402   6   61000000  3200000   2   	qpsk                   	up.1-5-0 up
  	403   7   41500000  3200000   2   	qpsk                   	up.1-6-0 up
  	404   8   35000000  3200000   2   	qpsk                   	up.1-7-0 up

Downstreams
  	itf  id   	freq 	modulation  pow                  	interface
  	141   1  464000000     	qam256 57.0                   	dn.0-0-0 up
  	142   2  472000000     	qam256 57.0                   	dn.0-0-1 up
  	143   3  480000000     	qam256 57.0                   	dn.0-1-0 up
  	144   4  488000000     	qam256 57.0                   	dn.0-1-1 up
  	145   5  432000000     	qam256 57.0                   	dn.0-2-0 up
  	146   6  440000000     	qam256 57.0                   	dn.0-2-1 up
  	147   7  448000000     	qam256 57.0                   	dn.0-3-0 up
  	148   8  456000000     	qam256 57.0                   	dn.0-3-1 up

Fiber Nodes
  nodo1 -  (map: [(77, 1, 1, 1)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[256] chans={1, 2})
  nodo2 -  (map: [(77, 2, 1, 2)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[257] chans={8, 5, 6, 7})
  nodowifi -  (map: [(77, 3, 1, 3)]) (DS: chanids=[256] chans={1, 2, 3, 4, 5, 6, 7, 8} / US: chanids=[258] chans={3, 4})
```

### `docsis cm mac [MAC]`

Allows you to view the information of a specific cable modem through its MAC.

```bash
cmts 	:      	cmtsCasa  id:           	29	state: online
fibernode:         	nodo1  md:   	catv-mac.1	ids  : 77/1/7/1
mac  	: 00:15:96:cb:83:4d  ip:   	10.0.32.48	poll : success
file 	:                                      	uptime: 8388100

Bandwidth: 10.70 kbps down / 8.63 kbps up

Reg tags :  cmtsCasa,catv-mac.1,nodo1,dn.0-3-0,up.1-0-0

QoS    	: OK dncorr=0.00% dnko=0.00% upcorr=0.00% upko=0.00%
Downstream : OK dnatt=52.9dB dnrx=4.1dBm dnsnr=41.0dB
Upstream   : OK upatt=39.8dB uptx=45.0dBm upsnr=38.2dB
Docsis 	: OK cmtsinvups=0 cminvups=0                                          	 

DOWNSTREAM
 - id     	itf-name   	freq  	width    	mod 	rx	att	snr   corr 	ko
 -                                                     	4.1   52.9   41.0   0.00   0.00
 -  0     	dn.0-3-0 	448MHz   	8MHz 	qam256	4.1   52.9   41.0   0.00   0.00

UPSTREAM
 - id     	itf-name   	freq  	width    	mod 	tx	att	snr   corr 	ko
 -                                                    	45.0   39.8   38.2   0.00   0.00
 -  0     	up.1-0-0   54500KHz	3200KHz   	qpsk   45.0   39.8   38.2   0.00   0.00

SYSTEM DESCRIPTION
  DESC ARRIS Euro-DOCSIS 2.0 / SIP 2.0 Touchstone Telephony Modem
  HW_REV 04
  VENDOR Arris Interactive, L.L.C.
  BOOTR 5.01
  SW_REV 6.1.129T.EURO.SIP
  MODEL WTM552B
cm.downstream_sfs...
[20000000]
```

### `docsis cm reset [MAC]`

Allows you to restart a cable modem through its

```bash
ispadmin@lab.phicus.es > docsis cm reset 001596cb834d
```

## WiMAX Tools

### `wimax ap [AP_ID]`

```bash
ispadmin@lab3.phicus.es >  wimax ap AP-Casa
                        ap short                 SSID freq  bw   dist  n   dnbw   upbw   at etc
              AP-LAB        CMBM                 ssid 5200  20   9999 24    0.0    0.0 2360.1 497 days, 2:27:52 ----> - 
====================================================================================================
aphost  : AP-LAB                        address : X.X.X.X
uptime  : 42949672                       sysdescr: Linux Rueda_CM  #1 Wed Jul 7 15:20:45 UTC 2021 mips
cls     : MCambiumBaseStation            
freq    : 5200                           chanbw  : 20
distance: 9999                           txpower : 30.0
model   : ePMP2000                       version : 4.6.1
runmodel: None                           
short   : CMBM                           dnrate  : 144.4
 24 STAs                             base->cpe                      cpe->base
     cpe          mac rgid dista /  rate     rx  snr     bw /  rate    tx    rx  snr     bw /
       - 000456e08169    1  2278 /  86.7  -70.0 26.0   8.5K /  86.7   0.0 -70.0 20.0 143.6K / dnrate dnmcs=12 20 400 -> dnrate=86.7
       - 000456e0871d    2  2428 / 144.4  -53.0 42.0   1.2K /  57.8   0.0 -56.0 38.0   1.1K / dnrate dnmcs=15 20 400 -> dnrate=144.4
 cpe2320 000456e7ba27    3  2728 / 115.6  -60.0 36.0   1.8M /  86.7   0.0 -57.0 34.0 245.9K / dnrate dnmcs=13 20 400 -> dnrate=115.6
 cpe2268 000456e0ac7d    4  2728 /  65.0  -56.0 39.0   1.5K / 115.6   0.0 -60.0 30.0   1.8K / dnrate dnmcs=6 20 400 -> dnrate=65.0
       - 000456e101a9    5  1978 /  57.8  -68.0 27.0  562.9 /  57.8   0.0 -69.0 20.0  830.9 / dnrate dnmcs=11 20 400 -> dnrate=57.8
 cpe2333 000456e026af    6  2278 / 130.0  -56.0 39.0 690.5M /  72.2   0.0 -56.0 33.0 294.3M / dnrate dnmcs=14 20 400 -> dnrate=130.0
       - 000456e42331    7  2728 /  57.8  -57.0 38.0    0.0 / 144.4   0.0 -62.0 28.0    0.0 / dnrate dnmcs=11 20 400 -> dnrate=57.8
       - 000456f6fabd    8  2728 /  86.7  -65.0 30.0   7.8K / 115.6   0.0 -59.0 23.0 151.4K / dnrate dnmcs=12 20 400 -> dnrate=86.7
       - 000456e3e473    9  2848 /  86.7  -62.0 33.0  534.2 /  57.8   0.0 -63.0 26.0  617.0 / dnrate dnmcs=12 20 400 -> dnrate=86.7
 cpe2331 000456e43303   10  2578 /  86.7  -70.0 27.0  45.0K /  86.7   0.0 -64.0 20.0 150.2K / dnrate dnmcs=12 20 400 -> dnrate=86.7
 cpe2211 000456f76e2d   11  2728 / 144.4  -57.0 39.0 800.8K / 144.4   0.0 -55.0 29.0 432.7K / dnrate dnmcs=15 20 400 -> dnrate=144.4
       - 000456e08c5d   12  2728 /  43.3  -72.0 24.0  662.7 /  43.3   0.0 -66.0 26.0  830.9 / dnrate dnmcs=4 20 400 -> dnrate=43.3
 cpe2308 000456e1160f   13  2428 / 144.4  -57.0 39.0  36.6K / 144.4   0.0 -56.0 29.0 143.2K / dnrate dnmcs=15 20 400 -> dnrate=144.4
       - 000456e11921   14  2428 / 130.0  -58.0 38.0    8.5 / 115.6   0.0 -55.0 37.0   1.3K / dnrate dnmcs=14 20 400 -> dnrate=130.0
 cpe2239 000456e09823   15  2428 /  86.7  -55.0 41.0   1.4M / 144.4   0.0 -55.0 29.0 216.2K / dnrate dnmcs=12 20 400 -> dnrate=86.7
       - 000456e07f9d   16  2698 /  86.7  -55.0 42.0   1.6M / 144.4   0.0 -58.0 34.0  67.7K / dnrate dnmcs=12 20 400 -> dnrate=86.7
       - 000456f53d15   17   479 /  57.8  -68.0 28.0  387.1 /  86.7   0.0 -61.0 25.0  635.6 / dnrate dnmcs=11 20 400 -> dnrate=57.8
       - 000456e3dc8f   18  2428 / 144.4  -57.0 40.0   8.3K / 144.4   0.0 -58.0 29.0 150.1K / dnrate dnmcs=15 20 400 -> dnrate=144.4
       - 000456f58bdd   19  2488 / 115.6  -57.0 40.0 977.0K / 144.4   0.0 -59.0 24.0 246.3K / dnrate dnmcs=13 20 400 -> dnrate=115.6
 cpe2292 000456e084dd   20  2728 / 130.0  -59.0 34.0   2.6M /  72.2   0.0 -56.0 29.0  55.2K / dnrate dnmcs=14 20 400 -> dnrate=130.0
 cpe2286 000456e08c6f   21  2728 / 115.6  -62.0 35.0 916.4K / 144.4   0.0 -57.0 24.0 589.2K / dnrate dnmcs=13 20 400 -> dnrate=115.6
       - 58c17a497e19   22  2638 /  21.7  -62.0 35.0  660.1 /  57.8   0.0 -64.0 30.0  830.9 / dnrate dnmcs=2 20 400 -> dnrate=21.7
       - 000456f0aeb3   23  2788 / 144.4  -60.0 36.0  11.6K / 144.4   0.0 -56.0 26.0  59.0K / dnrate dnmcs=15 20 400 -> dnrate=144.4
       - 000456e4235d   24  2428 / 130.0  -66.0 29.0  13.1K / 115.6   0.0 -62.0 27.0 144.1K / dnrate dnmcs=14 20 400 -> dnrate=130.0
BW downlink 700.8M uplink 297.1M total 997.9M (own    0.0+   0.0=   0.0)
% AIR 2360.1
```

### `wimax aps stats print`

Shows the condition of the network's APs.

```bash
ispadmin@lab3.phicus.es > wimax aps stats print
[2023-01-03 11:35:40 CET] WARNING: [libkrill.ssh.myssh/246305] _poll is_host_up AP-LAB-01 ('172.16.142.101', 22) is DOWN (Unable to connect to 172.16.142.101: timed out)
                        ap short                 SSID freq  bw   dist  n   dnbw   upbw   at etc
FAIL:
 - AP-LAB-01                     : ["transport ('X.X.X.X', 22) is down"]
```

### `wimax update host [AP_ID]`

Updates the `firmware` version of the Antenna using the device name.

```bash
ispadmin@lab3.phicus.es > wimax update host AP-LAB-01
```

### `wimax update ip [X.X.X.X]`

Updates the `firmware` version of the Antenna using the device IP.

```bash
ispadmin@lab3.phicus.es > wimax update ip x.x.x.x
```

### `wimax update range [X.X.X.X/25]`

Updates the `firmware` version of the Antenna using a certain IP range.

```bash
ispadmin@lab3.phicus.es > wimax update range x.x.x.x/25
```

## Radius Tools

### `radius sessions print`

It allows us to see al the active pppoe sessions.

```bash
ispadmin@lab3.phicus.es > radius sessions print
CPE      Username                         Station ID        IP Address     
         demotracer                   b4-75-0e-98-ce-d0      X.X.X.X
         AR04005@LAB3                 0c-80-63-a5-1d-f1      X.X.X.X
         480098@LAB1                  e8-48-b8-9f-b9-05      X.X.X.X
         comedifi@LAB2                c4-ad-34-15-0e-81      X.X.X.X
```

::: tip
If we want to filter the pppoe sessions, the commands can be linked using:
```bash
ispadmin@lab3.phicus.es > radius sessions print | include dosmarestracer
dosmarestracer                   b4-75-0e-98-ce-d0  X.X.X.X
```
:::

### `radius deauth [PPPOE_USERNAME]`

It allows us to end a PPPoE session.

```bash
ispadmin@lab3.phicus.es > radius deauth F741
```

## TV Tools

### `tv edfa [EDFA_ID] info`

Shows the TV devices' (Edfa) information.

```bash
ispadmin@lab3.phicus.es > tv edfa TEST-STEVE info
=== EDFA INFO ===
OUTPUT POWER               38.5 dBm
EACH OUTPUT POWER          20.5 dBm
INPUT POWER                -2.6 dBm
UNIT TEMP                  25.0 C
BIAS1                     408.0 mA
BIAS2                    5938.0 mA
Laser Temp                 25.0 C

=== ALARM INFO ===
OUTPUT POWER (Enabled)
	HIHI: 60.00 dBm
	HI: 50.00 dBm
	LO: 30.00 dBm
	LOLO: 0.00 dBm
EACH OUTPUT POWER (Enabled)
	HIHI: 30.00 dBm
	HI: 26.00 dBm
	LO: 18.00 dBm
	LOLO: 0.00 dBm
INPUT POWER (Enabled)
	HIHI: 10.00 dBm
	HI: 9.00 dBm
	LO: -9.00 dBm
	LOLO: -10.00 dBm
UNIT TEMP (Enabled)
	HIHI: 55.00 C
	HI: 40.00 C
	LO: 0.00 C
	LOLO: -5.00 C
BIAS1 (Enabled)
	HIHI: 9000.00 mA
	HI: 7500.00 mA
	LO: 100.00 mA
	LOLO: -10.00 mA
BIAS2 (Enabled)
	HIHI: 9000.00 mA
	HI: 7500.00 mA
	LO: 100.00 mA
	LOLO: -10.00 mA
Laser Temp (Enabled)
	HIHI: 30.00 C
	HI: 28.00 C
	LO: 0.00 C
	LOLO: -5.00 C
```

### `tv edfa [EDFA_ID] reboot`

Restarts the TV device (Edfa).

```bash
ispadmin@lab3.phicus.es > tv edfa TEST-STEVE reboot
```

### `tv edfa [EDFA_ID] set input [HI|HIHI|LO|LOLO]`

It allows us to change the alarm values for the incoming power (using dBm).

```bash
ispadmin@lab3.phicus.es > tv edfa TEST-STEVE set input HI 9
```

### `tv edfa [EDFA_ID] set output [HI|HIHI|LO|LOLO]`

It allows us to change the alarm values for the main output source (using dBm).

```bash
ispadmin@lab3.phicus.es > tv edfa TEST-STEVE set output HIHI 60
```

### `tv edfa [EDFA_ID] set power [HI|HIHI|LO|LOLO]`

It allows us to change the alarm values for any output source (using dBm).

```bash
ispadmin@lab3.phicus.es > tv edfa TEST-STEVE set power LOLO 0
```

### `tv edfa [EDFA_ID] set laser-temp [HI|HIHI|LO|LOLO]`

It allows us to change the alarm value for the laser temperature (using ºC).

```bash
ispadmin@lab3.phicus.es > tv edfa TEST-STEVE set laser-temp LO 0
```

### `tv edfa [EDFA_ID] set unit-temp [HI|HIHI|LO|LOLO]`

It allows us to change the alarm values for the device temperature (using ºC).

```bash
ispadmin@lab3.phicus.es > tv edfa TEST-STEVE set unit-temp HI 40
```

## Other commands

### `ssh [HOST_NAME]`

It allows a ssh connection with the device's name.

```bash
ispadmin@lab3.phicus.es > ssh SW-EDGE-LAB
ispadmin@sw-edge-lab's password:
```

### `ssh [IP]`

It allows a ssh connection with the device's IP.

```bash
ispadmin@lab3.phicus.es > ssh 172.16.142.10
ispadmin@172.16.142.10's password:
```

### `ping [IP]`

It allows us to check the connectivity with a network's device.

```bash
ispadmin@lab3.phicus.es > ping 172.16.142.10
PING 172.16.142.10 (172.16.142.10) 56(84) bytes of data.
64 bytes from 172.16.142.10: icmp_seq=1 ttl=63 time=26.8 ms
64 bytes from 172.16.142.10: icmp_seq=2 ttl=63 time=26.6 ms
64 bytes from 172.16.142.10: icmp_seq=3 ttl=63 time=26.7 ms
64 bytes from 172.16.142.10: icmp_seq=4 ttl=63 time=26.6 ms
^C
--- 172.16.142.10 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 26.576/26.673/26.750/0.070 ms
```

### `traceroute [IP]`

It allows us to see the path of the packets from the origin host to the destination host.

```bash
ispadmin@lab3.phicus.es > traceroute 172.16.142.10
traceroute to 172.16.142.10 (172.16.142.10), 30 hops max, 60 byte packets
 1  _gateway (10.166.110.222)  25.233 ms  25.222 ms  25.235 ms
 2  SW-EDGE-LAB (172.16.142.10)  29.396 ms  31.397 ms  31.521 ms
```

### `telnet [IP]`

It allows the connection to a device using the telnet protocol.

```bash
ispadmin@lab3.phicus.es > telnet 172.16.142.11
Trying 172.16.142.11...
Connected to 172.16.142.11.
Escape character is '^]'.

>>User name:
```

### `exit`

Used to end the ISP-CLI tool session of the Krill's server.

```bash
ispadmin@lab3.phicus.es > exit
Exit
root@localhost:~#
```
