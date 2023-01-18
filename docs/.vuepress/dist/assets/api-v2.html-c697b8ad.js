import{_ as o,L as u,n as t,p as a,Q as i,s as e,M as s,a0 as l}from"./framework-b76f3d1b.js";const d={},r=l('<ul><li><a href="#rest-api-v2-overview">REST API v2 Overview</a><ul><li><a href="#introduction">Introduction</a></li></ul></li><li><a href="#migrating-from-api-v1">Migrating from API v1</a><ul><li><a href="#listing-cpes-customers-potss">Listing CPEs, Customers, POTSs.</a></li></ul></li><li><a href="#hierarchy">Hierarchy</a><ul><li><a href="#crm-toolbar---apiv2isp">CRM toolbar - api/v2/isp</a><ul><li><a href="#filtering-attributes">Filtering attributes</a></li><li><a href="#joins">Joins</a></li><li><a href="#pagination">Pagination</a></li></ul></li><li><a href="#pbx-management---apiv2pbx">PBX management - api/v2/pbx</a></li><li><a href="#monitoring-resources---apiv2monitoring">Monitoring resources - api/v2/monitoring</a></li><li><a href="#radius-management---apiv2oratio">RADIUS management - api/v2/oratio</a></li><li><a href="#gpon-provision---apiv2gpon">GPON provision - api/v2/gpon</a></li><li><a href="#docsis-management---apiv2docsis">DOCSIS management - api/v2/docsis</a></li><li><a href="#rubik-resources---apiv2rubik">Rubik resources - api/v2/rubik</a></li><li><a href="#plankton-management---apiv2plankton">Plankton management - api/v2/plankton</a></li></ul></li></ul><h1 id="rest-api-v2-overview" tabindex="-1"><a class="header-anchor" href="#rest-api-v2-overview" aria-hidden="true">#</a> REST API v2 Overview</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',3),v={href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"},c={href:"https://apikrill.phicus.es/swagger/v2/",target:"_blank",rel:"noopener noreferrer"},m=l('<h1 id="migrating-from-api-v1" tabindex="-1"><a class="header-anchor" href="#migrating-from-api-v1" aria-hidden="true">#</a> Migrating from API v1</h1><p>The <code>APIv1</code> will be active for a while... but you should adapt your client to <code>APIv2</code> version.</p><p>In this chapter, we assume you have been using <code>APIv1</code> only for <code>cpes</code>, <code>customers</code> and <code>potses</code> resources.</p><p>Some quick tips to make easier to migrate:</p>',4),q=i("li",null,[e("prefix for all URLs changes from "),i("code",null,"api"),e(" to "),i("code",null,"api/v2")],-1),b=i("li",null,"all resources are now under an app.",-1),p=i("li",null,"most of resources are now paginated.",-1),h=i("li",null,"probably, you will access by HTTPS.",-1),f={href:"https://oauth.net/",target:"_blank",rel:"noopener noreferrer"},g=l(`<h2 id="listing-cpes-customers-potss" tabindex="-1"><a class="header-anchor" href="#listing-cpes-customers-potss" aria-hidden="true">#</a> Listing CPEs, Customers, POTSs.</h2><p>With v1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET api/cpes/?sn=0000deadbeef0000

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 876
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:36:36 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

[
    {
        &quot;access&quot;: true,
        &quot;active&quot;: true,
        &quot;address&quot;: &quot;&quot;,
        &quot;address_profile&quot;: null,
        &quot;bridge&quot;: false,
        &quot;city&quot;: &quot;&quot;,
        &quot;country&quot;: null,
        &quot;cpename&quot;: &quot;pim0350&quot;,
        &quot;created&quot;: &quot;2022-12-17T23:00:01+01:00&quot;,
        &quot;customer&quot;: 27,
        &quot;disable_provision&quot;: false,
        &quot;disable_reconfig&quot;: false,
        &quot;dsn&quot;: null,
        &quot;enable_notifications&quot;: false,
        &quot;expiration_date&quot;: null,
        &quot;external_id&quot;: null,
        &quot;external_voip&quot;: false,
        &quot;fixed_address&quot;: null,
        &quot;has_tr069&quot;: true,
        &quot;id&quot;: 350,
        &quot;internal_id&quot;: &quot;pim0350&quot;,
        &quot;lan_cidr&quot;: null,
        &quot;latitude&quot;: null,
        &quot;line_profile&quot;: null,
        &quot;longitude&quot;: null,
        &quot;mac&quot;: null,
        &quot;me_vlan&quot;: null,
        &quot;model&quot;: &quot;HG8245H&quot;,
        &quot;mtamac&quot;: null,
        &quot;notes&quot;: &quot;&quot;,
        &quot;postalcode&quot;: null,
        &quot;pppoe_password&quot;: &quot;&quot;,
        &quot;pppoe_username&quot;: null,
        &quot;probe&quot;: false,
        &quot;profile&quot;: 7,
        &quot;realm&quot;: &quot;pim&quot;,
        &quot;remote_id&quot;: null,
        &quot;sn&quot;: &quot;0000deadbeef0000&quot;,
        &quot;tech&quot;: &quot;gpon&quot;,
        &quot;tech_updated&quot;: null,
        &quot;topology&quot;: &quot;&quot;,
        &quot;tv_profile&quot;: null,
        &quot;updated&quot;: &quot;2022-12-17T23:00:01+01:00&quot;,
        &quot;voip_profile&quot;: null,
        &quot;wanmac&quot;: null,
        &quot;wifi_password&quot;: &quot;&quot;,
        &quot;wifi_profile&quot;: null,
        &quot;wifi_ssid&quot;: &quot;&quot;
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With v2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET api/v2/isp/cpes/?sn=0000deadbeef0000

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 1704
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:36:49 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    &quot;count&quot;: 1,
    &quot;next&quot;: null,
    &quot;previous&quot;: null,
    &quot;results&quot;: [
        {
            &quot;_links&quot;: {
                &quot;actions&quot;: {
                    &quot;diagnostic&quot;: &quot;/api/v2/cpes/350/cwmp_diagnostic&quot;,
                    &quot;factory&quot;: &quot;/api/v2/cpes/350/factory&quot;,
                    &quot;reboot&quot;: &quot;/api/v2/cpes/350/reboot&quot;,
                    &quot;reconfig&quot;: &quot;/api/v2/cpes/350/reconfig&quot;,
                    &quot;reprovision&quot;: &quot;/api/v2/cpes/350/reprovision&quot;,
                    &quot;unprovision&quot;: &quot;/api/v2/cpes/350/unprovision&quot;
                },
                &quot;links&quot;: {
                    &quot;cdrs&quot;: &quot;/api/v2/cpes/350/events?type=cdr&quot;,
                    &quot;customer&quot;: &quot;/api/v2/cpes/350/customer&quot;,
                    &quot;cwmp_info&quot;: &quot;/api/v2/cpes/350/cwmp_info&quot;,
                    &quot;events&quot;: &quot;/api/v2/cpes/350/events&quot;,
                    &quot;info&quot;: &quot;/api/v2/cpes/350/info&quot;,
                    &quot;links&quot;: &quot;/api/v2/cpes/350/links&quot;,
                    &quot;livestatus&quot;: &quot;/api/v2/cpes/350/livestatus&quot;,
                    &quot;logs&quot;: &quot;/api/v2/cpes/350/logs&quot;,
                    &quot;model&quot;: &quot;/api/v2/cpes/350/model&quot;,
                    &quot;potses&quot;: &quot;/api/v2/cpes/350/potses&quot;,
                    &quot;profile&quot;: &quot;/api/v2/cpes/350/profile&quot;
                }
            },
            &quot;_services&quot;: [
                &quot;provision&quot;,
                &quot;txrx&quot;,
                &quot;dhcp&quot;,
                &quot;tr069&quot;
            ],
            &quot;access&quot;: true,
            &quot;active&quot;: true,
            &quot;address&quot;: &quot;&quot;,
            &quot;address_profile&quot;: null,
            &quot;avatar&quot;: &quot;HG4201&quot;,
            &quot;bridge&quot;: false,
            &quot;city&quot;: &quot;&quot;,
            &quot;country&quot;: null,
            &quot;cpename&quot;: &quot;pim0350&quot;,
            &quot;created&quot;: &quot;2022-12-17T23:00:01+01:00&quot;,
            &quot;customer&quot;: 27,
            &quot;disable_provision&quot;: false,
            &quot;disable_reconfig&quot;: false,
            &quot;dsn&quot;: null,
            &quot;enable_notifications&quot;: false,
            &quot;expiration_date&quot;: null,
            &quot;external_id&quot;: null,
            &quot;external_voip&quot;: false,
            &quot;fixed_address&quot;: null,
            &quot;has_tr069&quot;: true,
            &quot;id&quot;: 350,
            &quot;internal_id&quot;: &quot;pim0350&quot;,
            &quot;is_router&quot;: true,
            &quot;lan_cidr&quot;: null,
            &quot;latitude&quot;: null,
            &quot;line_profile&quot;: null,
            &quot;longitude&quot;: null,
            &quot;mac&quot;: null,
            &quot;me_vlan&quot;: null,
            &quot;model&quot;: &quot;HG8245H&quot;,
            &quot;mtamac&quot;: null,
            &quot;notes&quot;: &quot;&quot;,
            &quot;postalcode&quot;: null,
            &quot;pppoe_password&quot;: &quot;&quot;,
            &quot;pppoe_username&quot;: null,
            &quot;probe&quot;: false,
            &quot;profile&quot;: 7,
            &quot;realm&quot;: &quot;pim&quot;,
            &quot;remote_id&quot;: null,
            &quot;sn&quot;: &quot;0000deadbeef0000&quot;,
            &quot;tech&quot;: &quot;gpon&quot;,
            &quot;tech_updated&quot;: null,
            &quot;topology&quot;: &quot;&quot;,
            &quot;tr069&quot;: true,
            &quot;tv_profile&quot;: null,
            &quot;updated&quot;: &quot;2022-12-17T23:00:01+01:00&quot;,
            &quot;voip_profile&quot;: null,
            &quot;wanmac&quot;: null,
            &quot;wifi_password&quot;: &quot;&quot;,
            &quot;wifi_profile&quot;: null,
            &quot;wifi_ssid&quot;: &quot;&quot;
        }
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Changes about urls and paginated response are the same for <code>customers</code> and <code>potses</code> resources.</p><h1 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h1><p>Krill&#39;s entire REST API is organized under <code>https://&lt;hostname&gt;/api/v2/</code>. The URL structure is divided at the root level by some of these applications: isp, pbx, monitoring, auth, me, installer, oratio, rubik and plankton. Within each application exists diferent resources to use.</p><h2 id="crm-toolbar-api-v2-isp" tabindex="-1"><a class="header-anchor" href="#crm-toolbar-api-v2-isp" aria-hidden="true">#</a> CRM toolbar - api/v2/isp</h2><p>Here you can query, create, modify and delete CRM objects (Customers, CPEs, POTSs).</p><h3 id="filtering-attributes" tabindex="-1"><a class="header-anchor" href="#filtering-attributes" aria-hidden="true">#</a> Filtering attributes</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET api/v2/isp/cpes/74/?attrs=id,cpename

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 29
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:53:01 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    &quot;cpename&quot;: &quot;pim0074&quot;,
    &quot;id&quot;: 74
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="joins" tabindex="-1"><a class="header-anchor" href="#joins" aria-hidden="true">#</a> Joins</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET api/v2/isp/cpes/74/?attrs=id&amp;joins==customer,potses

HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 327
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:54:07 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    &quot;customer&quot;: {
        &quot;address&quot;: &quot;Calle Bolivia nº 21 3ºB&quot;,
        &quot;city&quot;: &quot;Coslada, Madrid&quot;,
        &quot;comment&quot;: &quot;&quot;,
        &quot;country&quot;: &quot;Spain&quot;,
        &quot;created&quot;: &quot;2019-11-08T15:57:08+01:00&quot;,
        &quot;external_id&quot;: null,
        &quot;id&quot;: 65,
        &quot;latitude&quot;: null,
        &quot;longitude&quot;: null,
        &quot;name&quot;: &quot;Incredulo&quot;,
        &quot;postalcode&quot;: null,
        &quot;realm&quot;: &quot;pim&quot;,
        &quot;surname&quot;: &quot;Trotamundos&quot;,
        &quot;updated&quot;: &quot;2019-11-08T15:57:08+01:00&quot;
    },
    &quot;id&quot;: 74,
    &quot;potses&quot;: [
        {
            &quot;cli&quot;: null,
            &quot;context&quot;: null,
            &quot;contextname&quot;: null,
            &quot;custom_digitmap&quot;: null,
            &quot;dtmf&quot;: &quot;auto&quot;,
            &quot;id&quot;: 138,
            &quot;label&quot;: null,
            &quot;language&quot;: null,
            &quot;lineid&quot;: &quot;pim0074-1&quot;,
            &quot;order&quot;: 1,
            &quot;password&quot;: null,
            &quot;pbx_extension&quot;: false,
            &quot;username&quot;: null,
            &quot;voicemail&quot;: false,
            &quot;voicemail_password&quot;: null
        },
        {
            &quot;cli&quot;: null,
            &quot;context&quot;: null,
            &quot;contextname&quot;: null,
            &quot;custom_digitmap&quot;: null,
            &quot;dtmf&quot;: &quot;auto&quot;,
            &quot;id&quot;: 139,
            &quot;label&quot;: null,
            &quot;language&quot;: null,
            &quot;lineid&quot;: &quot;pim0074-2&quot;,
            &quot;order&quot;: 2,
            &quot;password&quot;: null,
            &quot;pbx_extension&quot;: false,
            &quot;username&quot;: null,
            &quot;voicemail&quot;: false,
            &quot;voicemail_password&quot;: null
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET api/v2/isp/cpes/?attrs=id&amp;offset=42&amp;limit=3
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: 202
Content-Type: application/json
Date: Wed, 18 Jan 2023 08:56:13 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 (Ubuntu)
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    &quot;count&quot;: 158,
    &quot;next&quot;: &quot;http://pre1:4280/api/v2/isp/cpes/?attrs=id&amp;limit=3&amp;offset=45&quot;,
    &quot;previous&quot;: &quot;http://pre1:4280/api/v2/isp/cpes/?attrs=id&amp;limit=3&amp;offset=39&quot;,
    &quot;results&quot;: [
        {
            &quot;id&quot;: 119
        },
        {
            &quot;id&quot;: 121
        },
        {
            &quot;id&quot;: 123
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pbx-management-api-v2-pbx" tabindex="-1"><a class="header-anchor" href="#pbx-management-api-v2-pbx" aria-hidden="true">#</a> PBX management - api/v2/pbx</h2><p>Here you can query, create, modify and delete PBXv objects (pbxs, recepcionists, groups, queues, ddis, schedules, holidays).</p><h2 id="monitoring-resources-api-v2-monitoring" tabindex="-1"><a class="header-anchor" href="#monitoring-resources-api-v2-monitoring" aria-hidden="true">#</a> Monitoring resources - api/v2/monitoring</h2><ul><li>obtain current status of monitored hosts and services</li><li>historial of changes for them</li><li>datasets with monitored metrics</li><li>perform actions (reschedule checks, etc.)</li></ul><h2 id="radius-management-api-v2-oratio" tabindex="-1"><a class="header-anchor" href="#radius-management-api-v2-oratio" aria-hidden="true">#</a> RADIUS management - api/v2/oratio</h2><h2 id="gpon-provision-api-v2-gpon" tabindex="-1"><a class="header-anchor" href="#gpon-provision-api-v2-gpon" aria-hidden="true">#</a> GPON provision - api/v2/gpon</h2><p>Realtime information about OLTs, PONs and ONUs provisioned.</p><h2 id="docsis-management-api-v2-docsis" tabindex="-1"><a class="header-anchor" href="#docsis-management-api-v2-docsis" aria-hidden="true">#</a> DOCSIS management - api/v2/docsis</h2><p>Tecnhical information about CMTSs, Macs domains and fiber nodes.</p><h2 id="rubik-resources-api-v2-rubik" tabindex="-1"><a class="header-anchor" href="#rubik-resources-api-v2-rubik" aria-hidden="true">#</a> Rubik resources - api/v2/rubik</h2><p>Here you can query, create, modify and delete Rubik objects (Addresses, Services, Tickets), for integration with an external CRM.</p><h2 id="plankton-management-api-v2-plankton" tabindex="-1"><a class="header-anchor" href="#plankton-management-api-v2-plankton" aria-hidden="true">#</a> Plankton management - api/v2/plankton</h2><p>Here you can query, create, modify and delete Plankton FTTH Services, for integration with an external CRM.</p>`,29);function _(x,T){const n=u("ExternalLinkIcon");return t(),a("div",null,[r,i("p",null,[e("The "),i("a",v,[e("REST"),s(n)]),e(" APIv2 allows you to manage Krill objects and resources by HTTP requests.")]),i("p",null,[e("You can check the technical definition "),i("a",c,[e("here"),s(n)]),e(".")]),m,i("ul",null,[q,b,p,h,i("li",null,[e("if you need it, auth now may include "),i("a",f,[e("OAuth"),s(n)]),e(". Please, contact Phicus team for details.")])]),g])}const C=o(d,[["render",_],["__file","api-v2.html.vue"]]);export{C as default};
