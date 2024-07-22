import{_ as i,a as n,b as e,c as u,d as t,e as o}from"./get_datasets-8b18457a.js";import{_ as s,o as l,c as d,a as v}from"./app-d7d7d7e0.js";const a={},q=v(`<h1 id="postman-rest-api-v2-samples" tabindex="-1"><a class="header-anchor" href="#postman-rest-api-v2-samples"><span>Postman REST API v2 samples</span></a></h1><h2 id="query-cpe-by-its-external-id-and-get-its-id" tabindex="-1"><a class="header-anchor" href="#query-cpe-by-its-external-id-and-get-its-id"><span>Query cpe by its <code>external_id</code> and get its ID</span></a></h2><p>Method: <strong>GET</strong></p><p>URL: <code>/api/v2/isp/cpes/?external_id={external_id}&amp;realm={realm}</code></p><p><code>external_id</code>, <code>realm</code> parameters are optional and allow us to narrow down the list of results. That is, if we only put the value of the <code>realm</code>, we will obtain a paginated list with all the CPEs of that Realm.</p><p>Response (Sample: <code>/api/v2/isp/cpes/?external_id=pim0585&amp;realm=pim</code>)):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;count&quot;: 1,
  &quot;next&quot;: null,
  &quot;previous&quot;: null,
  &quot;results&quot;: [
    {
      &quot;id&quot;: 585,
      &quot;access&quot;: true,
      &quot;address&quot;: &quot;&quot;,
      &quot;active&quot;: true,
      &quot;address_profile&quot;: &quot;public&quot;,
      &quot;bridge&quot;: false,
      &quot;city&quot;: &quot;&quot;,
      &quot;country&quot;: &quot;&quot;,
      &quot;cpename&quot;: &quot;pim0585&quot;,
      &quot;created&quot;: &quot;2023-02-08T10:53:20+01:00&quot;,
      &quot;customer&quot;: 848,
      &quot;disable_provision&quot;: false,
      &quot;disable_reconfig&quot;: false,
      &quot;expiration_date&quot;: null,
      &quot;dsn&quot;: null,
      &quot;enable_notifications&quot;: false,
      &quot;external_id&quot;: &quot;pim0585&quot;,
      &quot;external_voip&quot;: false,
      &quot;fixed_address&quot;: null,
      &quot;has_tr069&quot;: true,
      &quot;internal_id&quot;: &quot;pim0585&quot;,
      &quot;latitude&quot;: &quot;38.0124867&quot;,
      &quot;line_profile&quot;: &quot;residential&quot;,
      &quot;locality&quot;: &quot;&quot;,
      &quot;longitude&quot;: &quot;-1.1699524&quot;,
      &quot;mac&quot;: null,
      &quot;model&quot;: &quot;HS8145V&quot;,
      &quot;mtamac&quot;: null,
      &quot;notes&quot;: &quot;&quot;,
      &quot;postalcode&quot;: null,
      &quot;probe&quot;: false,
      &quot;pppoe_password&quot;: &quot;&quot;,
      &quot;pppoe_username&quot;: &quot;&quot;,
      &quot;profile&quot;: 8,
      &quot;realm&quot;: &quot;pim&quot;,
      &quot;remote_id&quot;: null,
      &quot;sn&quot;: &quot;48575443614711a7&quot;,
      &quot;tech&quot;: &quot;gpon&quot;,
      &quot;tech_updated&quot;: &quot;2023-02-17T11:11:19+01:00&quot;,
      &quot;topology&quot;: &quot;&quot;,
      &quot;tv_profile&quot;: null,
      &quot;updated&quot;: &quot;2023-02-17T11:11:19+01:00&quot;,
      &quot;voip_profile&quot;: null,
      &quot;wanmac&quot;: null,
      &quot;me_vlan&quot;: null,
      &quot;lan_cidr&quot;: null,
      &quot;wifi_password&quot;: &quot;&quot;,
      &quot;wifi_profile&quot;: null,
      &quot;wifi_ssid&quot;: &quot;&quot;,
      &quot;_links&quot;: {
        &quot;actions&quot;: {
          &quot;reboot&quot;: &quot;/api/v2/isp/cpes/585/reboot&quot;,
          &quot;unprovision&quot;: &quot;/api/v2/isp/cpes/585/unprovision&quot;,
          &quot;reprovision&quot;: &quot;/api/v2/isp/cpes/585/reprovision&quot;,
          &quot;factory&quot;: &quot;/api/v2/isp/cpes/585/factory&quot;,
          &quot;reconfig&quot;: &quot;/api/v2/isp/cpes/585/reconfig&quot;,
          &quot;diagnostic&quot;: &quot;/api/v2/isp/cpes/585/cwmp_diagnostic&quot;
        },
        &quot;links&quot;: {
          &quot;customer&quot;: &quot;/api/v2/isp/cpes/585/customer&quot;,
          &quot;profile&quot;: &quot;/api/v2/isp/cpes/585/profile&quot;,
          &quot;model&quot;: &quot;/api/v2/isp/cpes/585/model&quot;,
          &quot;potses&quot;: &quot;/api/v2/isp/cpes/585/potses&quot;,
          &quot;events&quot;: &quot;/api/v2/isp/cpes/585/events&quot;,
          &quot;cdrs&quot;: &quot;/api/v2/isp/cpes/585/events?type=cdr&quot;,
          &quot;logs&quot;: &quot;/api/v2/isp/cpes/585/logs&quot;,
          &quot;livestatus&quot;: &quot;/api/v2/isp/cpes/585/livestatus&quot;,
          &quot;links&quot;: &quot;/api/v2/isp/cpes/585/links&quot;,
          &quot;info&quot;: &quot;/api/v2/isp/cpes/585/info&quot;,
          &quot;cwmp_info&quot;: &quot;/api/v2/isp/cpes/585/cwmp_info&quot;
        }
      },
      &quot;_services&quot;: [
        &quot;provision&quot;,
        &quot;tr069&quot;,
        &quot;dhcp&quot;,
        &quot;txrx&quot;
      ],
      &quot;is_router&quot;: true,
      &quot;avatar&quot;: &quot;HG4101&quot;,
      &quot;tr069&quot;: true
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="image"></p><h2 id="monitoring-host-in-real-time" tabindex="-1"><a class="header-anchor" href="#monitoring-host-in-real-time"><span>Monitoring host in real time</span></a></h2><p>Method: <strong>GET</strong></p><p>URL: <code>/api/v2/monitoring/cpes/{id}/info</code></p><p>Note: The <code>id</code> field is found within the attributes returned by the previous request.</p><p>Response (Sample: <code>/api/v2/monitoring/cpes/585/info</code>):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;alarms&quot;: [
    {
      &quot;level&quot;: &quot;warning&quot;,
      &quot;type&quot;: &quot;processerror&quot;,
      &quot;admin_status&quot;: &quot;init&quot;,
      &quot;name&quot;: &quot;The GPON ONT configuration recovery fails&quot;,
      &quot;extra&quot;: &quot;effect=serviceaffect curr=0 prev=1&quot;
    }
  ],
  &quot;dnbw&quot;: 0,
  &quot;ips&quot;: [
    &quot;10.8.33.14&quot;
  ],
  &quot;output&quot;: &quot;online oltHuawei:0/5/14-2 10.8.33.14&quot;,
  &quot;registration&quot;: {
    &quot;host&quot;: &quot;oltHuawei&quot;,
    &quot;id&quot;: &quot;0/5/14-2&quot;,
    &quot;last_down_time&quot;: null,
    &quot;related_services&quot;: [
      &quot;onug-olt0/05/14&quot;
    ],
    &quot;states&quot;: [
      &quot;online&quot;
    ],
    &quot;tags&quot;: [
      &quot;oltHuawei-0/5/14&quot;,
      &quot;oltHuawei&quot;
    ]
  },
  &quot;services&quot;: {
    &quot;txrx&quot;: {
      &quot;output&quot;: &quot;dnrx=-22.14 uptx=2.27 uprx=-12.71 dnatt=22.14 upatt=14.98 pondesv=0.00&quot;,
      &quot;perfdatas&quot;: [
        {
          &quot;items&quot;: [],
          &quot;max&quot;: 5,
          &quot;metric&quot;: &quot;dnrx&quot;,
          &quot;min&quot;: -49,
          &quot;thresholds&quot;: [
            -29,
            -27,
            -11,
            -8
          ],
          &quot;uom&quot;: &quot;dBm&quot;,
          &quot;value&quot;: -22.14
        },
        {
          &quot;items&quot;: [],
          &quot;max&quot;: 15,
          &quot;metric&quot;: &quot;uptx&quot;,
          &quot;min&quot;: -10,
          &quot;thresholds&quot;: [],
          &quot;uom&quot;: &quot;dBm&quot;,
          &quot;value&quot;: 2.27
        },
        {
          &quot;items&quot;: [],
          &quot;max&quot;: 5,
          &quot;metric&quot;: &quot;uprx&quot;,
          &quot;min&quot;: -49,
          &quot;thresholds&quot;: [
            -32,
            -30,
            -12,
            -9
          ],
          &quot;uom&quot;: &quot;dBm&quot;,
          &quot;value&quot;: -12.709999999999994
        },
        {
          &quot;items&quot;: [],
          &quot;max&quot;: 60,
          &quot;metric&quot;: &quot;upatt&quot;,
          &quot;min&quot;: 1,
          &quot;thresholds&quot;: [
            26,
            46
          ],
          &quot;uom&quot;: &quot;dB&quot;,
          &quot;value&quot;: 14.979999999999993
        }
      ],
      &quot;state_id&quot;: 0
    }
  },
  &quot;state&quot;: &quot;up&quot;,
  &quot;state_id&quot;: 0,
  &quot;tech&quot;: {
    &quot;line_profile&quot;: &quot;residential_krill&quot;,
    &quot;service_ports&quot;: [
      {
        &quot;id&quot;: 6038,
        &quot;user_vlan&quot;: 1023,
        &quot;service_vlan&quot;: 833,
        &quot;outbound_traffic_table_name&quot;: &quot;management&quot;,
        &quot;inbound_traffic_table_name&quot;: &quot;management&quot;,
        &quot;native_vlan&quot;: 0
      },
      {
        &quot;id&quot;: 6039,
        &quot;user_vlan&quot;: 1021,
        &quot;service_vlan&quot;: 831,
        &quot;outbound_traffic_table_name&quot;: &quot;100M&quot;,
        &quot;inbound_traffic_table_name&quot;: &quot;100M&quot;,
        &quot;native_vlan&quot;: 1
      }
    ],
    &quot;service_profile&quot;: &quot;HG1000&quot;,
    &quot;type_name&quot;: &quot;110H&quot;
  },
  &quot;upbw&quot;: 0,
  &quot;uptime&quot;: 14042
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+`" alt="image"></p><h2 id="query-deferred-monitoring-host-info" tabindex="-1"><a class="header-anchor" href="#query-deferred-monitoring-host-info"><span>Query deferred monitoring host info</span></a></h2><p>Method: <strong>GET</strong></p><p>URL: <code>/api/v2/monitoring/hosts/{internal_id}</code></p><p>Note: The <code>internal_id</code> field is found within the attributes returned by the previous request.</p><p>Response (Sample: <code>/api/v2/monitoring/hosts/pim0585</code>):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;type&quot;: &quot;Host&quot;,
  &quot;name&quot;: &quot;pim0585&quot;,
  &quot;meta&quot;: {},
  &quot;attrs&quot;: {
    &quot;address&quot;: &quot;&quot;,
    &quot;host_name&quot;: &quot;pim0585&quot;,
    &quot;last_check&quot;: &quot;2023-02-17T12:50:06.475000+01:00&quot;,
    &quot;last_check_result&quot;: {
      &quot;command&quot;: null,
      &quot;output&quot;: &quot;online oltHuawei:0/5/14-0 0.0.0.0&quot;,
      &quot;state&quot;: 0,
      &quot;execution_start&quot;: &quot;2023-02-17T12:50:06.475000+01:00&quot;,
      &quot;execution_time&quot;: 0,
      &quot;execution_end&quot;: &quot;2023-02-17T12:50:06.475000+01:00&quot;,
      &quot;schedule_start&quot;: &quot;2023-02-18T12:50:06.475000+01:00&quot;
    },
    &quot;next_check&quot;: &quot;2023-02-18T12:50:06.475000+01:00&quot;,
    &quot;output&quot;: &quot;online oltHuawei:0/5/14-0 0.0.0.0&quot;,
    &quot;service_name&quot;: &quot;&quot;,
    &quot;state&quot;: 0,
    &quot;state_type&quot;: 1,
    &quot;state_long&quot;: &quot;up&quot;,
    &quot;vars&quot;: {
      &quot;vendor&quot;: &quot;Huawei&quot;,
      &quot;model&quot;: &quot;HS8145V&quot;,
      &quot;administrative_info&quot;: {
        &quot;access&quot;: true,
        &quot;actions&quot;: [
          &quot;diagnostic&quot;,
          &quot;factory&quot;,
          &quot;reboot&quot;,
          &quot;reconfig&quot;,
          &quot;reprovision&quot;,
          &quot;unprovision&quot;
        ],
        &quot;active&quot;: true,
        &quot;address&quot;: &quot; - &quot;,
        &quot;address_profile&quot;: &quot;public&quot;,
        &quot;customer_address&quot;: &quot; - &quot;,
        &quot;customer_external_id&quot;: null,
        &quot;customer_name&quot;: &quot;Test INTERNET &quot;,
        &quot;external_voip&quot;: false,
        &quot;id&quot;: 585,
        &quot;latitude&quot;: 38.0124867,
        &quot;line_profile&quot;: &quot;residential&quot;,
        &quot;longitude&quot;: -1.1699524,
        &quot;model&quot;: &quot;HS8145V&quot;,
        &quot;potses&quot;: [],
        &quot;profile_downstream&quot;: &quot;1000M&quot;,
        &quot;profile_name&quot;: &quot;1G Simetricos&quot;,
        &quot;profile_upstream&quot;: &quot;1000M&quot;,
        &quot;realm&quot;: &quot;pim&quot;,
        &quot;services&quot;: [
          &quot;dhcp&quot;,
          &quot;provision&quot;,
          &quot;tr069&quot;,
          &quot;txrx&quot;
        ],
        &quot;sn&quot;: &quot;48575443614711a7&quot;,
        &quot;tech&quot;: &quot;gpon&quot;,
        &quot;tr069&quot;: true,
        &quot;vendor&quot;: &quot;Huawei&quot;
      },
      &quot;type&quot;: &quot;cpe&quot;,
      &quot;cpe_registration_id&quot;: &quot;0/5/14-0&quot;,
      &quot;cpe_registration_host&quot;: &quot;oltHuawei&quot;,
      &quot;business_impact&quot;: 1,
      &quot;cpe_registration_state&quot;: [
        &quot;online&quot;
      ],
      &quot;search&quot;: &quot; -   -  Test INTERNET  public 38.0124867 residential -1.1699524 HS8145V pim 48575443614711a7 gpon True Huawei &quot;,
      &quot;cpe_registration_tags&quot;: [
        &quot;oltHuawei-0/5/14-0&quot;,
        &quot;oltHuawei&quot;
      ]
    }
  },
  &quot;joins&quot;: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="image"></p><h2 id="query-host-graphs-types" tabindex="-1"><a class="header-anchor" href="#query-host-graphs-types"><span>Query host graphs types</span></a></h2><p>Method: <strong>GET</strong></p><p>URL: <code>/api/v2/monitoring/graphs/?host_name={internal_id|host_name}</code></p><p>Note: The <code>internal_id</code> field is found within the attributes returned by the previous request. The host name can also be used in case of being a core host.</p><p>Response (Sample: <code>/api/v2/monitoring/graphs/?host_name=pim0585</code>):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;graphs&quot;: [
    {
      &quot;group&quot;: &quot;bandwidth&quot;,
      &quot;severity&quot;: 0,
      &quot;title&quot;: &quot;Bandwidth&quot;,
      &quot;type&quot;: &quot;LineChart&quot;,
      &quot;weight&quot;: 3,
      &quot;range&quot;: &quot;24h&quot;,
      &quot;datasets&quot;: [
        {
          &quot;label&quot;: &quot;dnbw&quot;,
          &quot;measurement&quot;: &quot;check_cpe&quot;,
          &quot;metric&quot;: &quot;dnbw&quot;,
          &quot;uom&quot;: &quot;B&quot;,
          &quot;min&quot;: null,
          &quot;max&quot;: null,
          &quot;warning&quot;: null,
          &quot;critical&quot;: null,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: 1
        },
        {
          &quot;label&quot;: &quot;upbw&quot;,
          &quot;measurement&quot;: &quot;check_cpe&quot;,
          &quot;metric&quot;: &quot;upbw&quot;,
          &quot;uom&quot;: &quot;B&quot;,
          &quot;min&quot;: null,
          &quot;max&quot;: null,
          &quot;warning&quot;: null,
          &quot;critical&quot;: null,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: 2
        }
      ]
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="image"></p><h2 id="query-host-service-graphs-types" tabindex="-1"><a class="header-anchor" href="#query-host-service-graphs-types"><span>Query host service graphs types</span></a></h2><p>Method: <strong>GET</strong></p><p>URL: <code>/api/v2/monitoring/graphs/?host_name={internal_id|host_name}&amp;service_name={service_name}</code></p><p>Note: The <code>internal_id</code> field is found within the attributes returned by the previous request. The host name can also be used in case of being a core host.</p><p>Response (Sample: <code>/api/v2/monitoring/graphs/?host_name=pim0585&amp;service_name=txrx</code>):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;graphs&quot;: [
    {
      &quot;group&quot;: &quot;dnatt Graph.&quot;,
      &quot;severity&quot;: 50,
      &quot;title&quot;: &quot;dnatt Graph.&quot;,
      &quot;type&quot;: &quot;LineChart&quot;,
      &quot;weight&quot;: 1,
      &quot;range&quot;: &quot;24h&quot;,
      &quot;datasets&quot;: [
        {
          &quot;label&quot;: &quot;dnatt&quot;,
          &quot;measurement&quot;: &quot;check_txrx&quot;,
          &quot;metric&quot;: &quot;dnatt&quot;,
          &quot;uom&quot;: &quot;null&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 1,
          &quot;warning&quot;: 26,
          &quot;critical&quot;: 46,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: null
        }
      ]
    },
    {
      &quot;group&quot;: &quot;dnrx Graph.&quot;,
      &quot;severity&quot;: 0,
      &quot;title&quot;: &quot;dnrx Graph.&quot;,
      &quot;type&quot;: &quot;LineChart&quot;,
      &quot;weight&quot;: -2,
      &quot;range&quot;: &quot;24h&quot;,
      &quot;datasets&quot;: [
        {
          &quot;label&quot;: &quot;dnrx&quot;,
          &quot;measurement&quot;: &quot;check_txrx&quot;,
          &quot;metric&quot;: &quot;dnrx&quot;,
          &quot;uom&quot;: &quot;null&quot;,
          &quot;min&quot;: -49,
          &quot;max&quot;: -49,
          &quot;warning&quot;: -11,
          &quot;critical&quot;: -8,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: null
        }
      ]
    },
    {
      &quot;group&quot;: &quot;uptx Graph.&quot;,
      &quot;severity&quot;: 0,
      &quot;title&quot;: &quot;uptx Graph.&quot;,
      &quot;type&quot;: &quot;LineChart&quot;,
      &quot;weight&quot;: 0,
      &quot;range&quot;: &quot;24h&quot;,
      &quot;datasets&quot;: [
        {
          &quot;label&quot;: &quot;uptx&quot;,
          &quot;measurement&quot;: &quot;check_txrx&quot;,
          &quot;metric&quot;: &quot;uptx&quot;,
          &quot;uom&quot;: &quot;null&quot;,
          &quot;min&quot;: -10,
          &quot;max&quot;: -10,
          &quot;warning&quot;: 15,
          &quot;critical&quot;: 16,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: null
        }
      ]
    },
    {
      &quot;group&quot;: &quot;uprx Graph.&quot;,
      &quot;severity&quot;: 0,
      &quot;title&quot;: &quot;uprx Graph.&quot;,
      &quot;type&quot;: &quot;LineChart&quot;,
      &quot;weight&quot;: -1,
      &quot;range&quot;: &quot;24h&quot;,
      &quot;datasets&quot;: [
        {
          &quot;label&quot;: &quot;uprx&quot;,
          &quot;measurement&quot;: &quot;check_txrx&quot;,
          &quot;metric&quot;: &quot;uprx&quot;,
          &quot;uom&quot;: &quot;null&quot;,
          &quot;min&quot;: -49,
          &quot;max&quot;: -49,
          &quot;warning&quot;: -12,
          &quot;critical&quot;: -9,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: null
        }
      ]
    },
    {
      &quot;group&quot;: &quot;upatt Graph.&quot;,
      &quot;severity&quot;: 0,
      &quot;title&quot;: &quot;upatt Graph.&quot;,
      &quot;type&quot;: &quot;LineChart&quot;,
      &quot;weight&quot;: 1,
      &quot;range&quot;: &quot;24h&quot;,
      &quot;datasets&quot;: [
        {
          &quot;label&quot;: &quot;upatt&quot;,
          &quot;measurement&quot;: &quot;check_txrx&quot;,
          &quot;metric&quot;: &quot;upatt&quot;,
          &quot;uom&quot;: &quot;null&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 1,
          &quot;warning&quot;: 26,
          &quot;critical&quot;: 46,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: null
        }
      ]
    },
    {
      &quot;group&quot;: &quot;pondesv Graph.&quot;,
      &quot;severity&quot;: 0,
      &quot;title&quot;: &quot;pondesv Graph.&quot;,
      &quot;type&quot;: &quot;LineChart&quot;,
      &quot;weight&quot;: 0,
      &quot;range&quot;: &quot;24h&quot;,
      &quot;datasets&quot;: [
        {
          &quot;label&quot;: &quot;pondesv&quot;,
          &quot;measurement&quot;: &quot;check_txrx&quot;,
          &quot;metric&quot;: &quot;pondesv&quot;,
          &quot;uom&quot;: &quot;null&quot;,
          &quot;min&quot;: -10,
          &quot;max&quot;: -10,
          &quot;warning&quot;: 2,
          &quot;critical&quot;: 4,
          &quot;error&quot;: null,
          &quot;percentile&quot;: null,
          &quot;operator&quot;: null,
          &quot;color_index&quot;: null
        }
      ]
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="image"></p><h2 id="query-specific-graphs-metrics-in-a-time-period" tabindex="-1"><a class="header-anchor" href="#query-specific-graphs-metrics-in-a-time-period"><span>Query specific graphs metrics in a time period</span></a></h2><p>For each graph returned in the previous endpoint, you can request the metrics within a certain time interval for the different datasets.</p><p>If there are several datasets available for a graph, they can be requested simultaneously.</p><p>Method: <strong>POST</strong></p><p>URL: <code>/api/v2/monitoring/datasets/</code></p><p>Request:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;host_name&quot;:&quot;{internal_id|host_name}&quot;,
  &quot;service_name&quot;:null|&quot;service_name&quot;
  &quot;start&quot;:&quot;{time_magnitude}&quot;,
  &quot;end&quot;:&quot;{time_magnitude}&quot;,
  &quot;metrics&quot;:[
    {
      &quot;host_name&quot;:&quot;{internal_id|host_name}&quot;,
      &quot;service_name&quot;:null|&quot;{service_name}&quot;,
      &quot;measurement&quot;:&quot;{measurement}&quot;,
      &quot;metric&quot;:&quot;dnatt&quot;
    }
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>time_magnitude</code>: Composite value of units and magnitude of time, per Sample: 24h for the last 24 hours. The allowed magnitudes are: [m]minutes, [h]hours, [d]ays <code>measurement</code>: Extracted from the array of datasets from the graph request. <code>metric</code>: Extracted from the array of datasets from the graph request.</p><p>Sample request:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;host_name&quot;:&quot;pim0585&quot;,
  &quot;service_name&quot;:&quot;txrx&quot;
  &quot;start&quot;:&quot;24h&quot;,
  &quot;end&quot;:&quot;0m&quot;,
  &quot;metrics&quot;:[
    {
      &quot;host_name&quot;:&quot;pim0585&quot;,
      &quot;service_name&quot;:&quot;txrx&quot;,
      &quot;measurement&quot;:&quot;check_txrx&quot;,
      &quot;metric&quot;:&quot;dnatt&quot;
    }
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;check_txrx__pim0585__txrx__dnatt&quot;:[
    {
      &quot;time&quot;:&quot;2023-02-16T15:00:00Z&quot;,
      &quot;value&quot;:29.03,
      &quot;unit&quot;:null
    },
    {
      &quot;time&quot;:&quot;2023-02-16T19:00:00Z&quot;,
      &quot;value&quot;:30.35,
      &quot;unit&quot;:null
    },
    {
      &quot;time&quot;:&quot;2023-02-16T23:00:00Z&quot;,
      &quot;value&quot;:30.21,
      &quot;unit&quot;:null
    },
    {
      &quot;time&quot;:&quot;2023-02-17T03:00:00Z&quot;,
      &quot;value&quot;:31.54,
      &quot;unit&quot;:null
    },
    {
      &quot;time&quot;:&quot;2023-02-17T07:00:00Z&quot;,
      &quot;value&quot;:31.52,
      &quot;unit&quot;:null
    },
    {
      &quot;time&quot;:&quot;2023-02-17T11:00:00Z&quot;,
      &quot;value&quot;:27.03,
      &quot;unit&quot;:null
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="image"></p>',49),r=[q];function c(m,b){return l(),d("div",null,r)}const g=s(a,[["render",c],["__file","postman.html.vue"]]),_=JSON.parse('{"path":"/krill2/api/postman.html","title":"API v2 - Postman","lang":"en-US","frontmatter":{"title":"API v2 - Postman","description":"Postman REST API v2 samples.","lang":"en-US","sidebar":"auto","sidebarDepth":2,"prev":"api-v2","next":"widgets","tags":["krill2","api","postman"]},"headers":[{"level":2,"title":"Query cpe by its external_id and get its ID","slug":"query-cpe-by-its-external-id-and-get-its-id","link":"#query-cpe-by-its-external-id-and-get-its-id","children":[]},{"level":2,"title":"Monitoring host in real time","slug":"monitoring-host-in-real-time","link":"#monitoring-host-in-real-time","children":[]},{"level":2,"title":"Query deferred monitoring host info","slug":"query-deferred-monitoring-host-info","link":"#query-deferred-monitoring-host-info","children":[]},{"level":2,"title":"Query host graphs types","slug":"query-host-graphs-types","link":"#query-host-graphs-types","children":[]},{"level":2,"title":"Query host service graphs types","slug":"query-host-service-graphs-types","link":"#query-host-service-graphs-types","children":[]},{"level":2,"title":"Query specific graphs metrics in a time period","slug":"query-specific-graphs-metrics-in-a-time-period","link":"#query-specific-graphs-metrics-in-a-time-period","children":[]}],"git":{"updatedTime":1690298084000},"filePathRelative":"krill2/api/postman.md"}');export{g as comp,_ as data};
