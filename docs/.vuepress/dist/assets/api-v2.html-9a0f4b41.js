import{_ as t,L as l,n as o,p,Q as s,s as n,M as e,a0 as i}from"./framework-e30e40a0.js";const c={},u=s("h1",{id:"rest-api-v2-overview",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-v2-overview","aria-hidden":"true"},"#"),n(" REST API v2 Overview")],-1),r=s("h2",{id:"introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),d={href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"},v={href:"https://apikrill.phicus.es/swagger/v2/",target:"_blank",rel:"noopener noreferrer"},m=i('<h2 id="migrating-from-api-v1" tabindex="-1"><a class="header-anchor" href="#migrating-from-api-v1" aria-hidden="true">#</a> Migrating from API v1</h2><p>The <code>APIv1</code> will be active for a while... but you should adapt your client to <code>APIv2</code> version.</p><p>In this chapter, we assume you have been using <code>APIv1</code> only for <code>cpes</code>, <code>customers</code> and <code>potses</code> resources.</p><p>Some quick tips to make easier to migrate:</p>',4),b=s("li",null,[n("prefix for all URLs changes from "),s("code",null,"/api"),n(" to "),s("code",null,"/api/v2")],-1),k=s("li",null,"all resources are now under an app.",-1),q=s("li",null,"most of resources are now paginated.",-1),g=s("li",null,"probably, you will access by HTTPS.",-1),h={href:"https://oauth.net/",target:"_blank",rel:"noopener noreferrer"},f=i(`<h2 id="listing-cpes-customers-potss" tabindex="-1"><a class="header-anchor" href="#listing-cpes-customers-potss" aria-hidden="true">#</a> Listing CPEs, Customers, POTSs.</h2><p>With v1:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/cpes/?sn<span class="token operator">=</span>0000deadbeef0000

HTTP/1.1 <span class="token number">200</span> OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: <span class="token number">876</span>
Content-Type: application/json
Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:36:36 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span>
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;access&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;active&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;address_profile&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;country&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;cpename&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,
        <span class="token string">&quot;created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,
        <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token number">27</span>,
        <span class="token string">&quot;disable_provision&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;disable_reconfig&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;dsn&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;enable_notifications&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;expiration_date&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;external_id&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;external_voip&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;fixed_address&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;has_tr069&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">350</span>,
        <span class="token string">&quot;internal_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,
        <span class="token string">&quot;lan_cidr&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;latitude&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;line_profile&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;longitude&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;mac&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;me_vlan&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;model&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;HG8245H&quot;</span>,
        <span class="token string">&quot;mtamac&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;notes&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;postalcode&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;pppoe_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;pppoe_username&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;probe&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;profile&quot;</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,
        <span class="token string">&quot;realm&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim&quot;</span>,
        <span class="token string">&quot;remote_id&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;sn&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0000deadbeef0000&quot;</span>,
        <span class="token string">&quot;tech&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gpon&quot;</span>,
        <span class="token string">&quot;tech_updated&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;topology&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;tv_profile&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;updated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,
        <span class="token string">&quot;voip_profile&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;wanmac&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;wifi_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;wifi_profile&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;wifi_ssid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With v2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/v2/isp/cpes/?sn<span class="token operator">=</span>0000deadbeef0000

HTTP/1.1 <span class="token number">200</span> OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: <span class="token number">1704</span>
Content-Type: application/json
Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:36:49 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span>
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

<span class="token punctuation">{</span>
    <span class="token string">&quot;count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;next&quot;</span><span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;previous&quot;</span><span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;results&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;_links&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;actions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;diagnostic&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/cwmp_diagnostic&quot;</span>,
                    <span class="token string">&quot;factory&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/factory&quot;</span>,
                    <span class="token string">&quot;reboot&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/reboot&quot;</span>,
                    <span class="token string">&quot;reconfig&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/reconfig&quot;</span>,
                    <span class="token string">&quot;reprovision&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/reprovision&quot;</span>,
                    <span class="token string">&quot;unprovision&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/unprovision&quot;</span>
                <span class="token punctuation">}</span>,
                <span class="token string">&quot;links&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;cdrs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/events?type=cdr&quot;</span>,
                    <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/customer&quot;</span>,
                    <span class="token string">&quot;cwmp_info&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/cwmp_info&quot;</span>,
                    <span class="token string">&quot;events&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/events&quot;</span>,
                    <span class="token string">&quot;info&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/info&quot;</span>,
                    <span class="token string">&quot;links&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/links&quot;</span>,
                    <span class="token string">&quot;livestatus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/livestatus&quot;</span>,
                    <span class="token string">&quot;logs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/logs&quot;</span>,
                    <span class="token string">&quot;model&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/model&quot;</span>,
                    <span class="token string">&quot;potses&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/potses&quot;</span>,
                    <span class="token string">&quot;profile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/profile&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;_services&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;provision&quot;</span>,
                <span class="token string">&quot;txrx&quot;</span>,
                <span class="token string">&quot;dhcp&quot;</span>,
                <span class="token string">&quot;tr069&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;access&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;active&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;address_profile&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;avatar&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;HG4201&quot;</span>,
            <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;country&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;cpename&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,
            <span class="token string">&quot;created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,
            <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token number">27</span>,
            <span class="token string">&quot;disable_provision&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;disable_reconfig&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;dsn&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;enable_notifications&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;expiration_date&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;external_id&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;external_voip&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;fixed_address&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;has_tr069&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">350</span>,
            <span class="token string">&quot;internal_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,
            <span class="token string">&quot;is_router&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;lan_cidr&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;latitude&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;line_profile&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;longitude&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;mac&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;me_vlan&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;model&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;HG8245H&quot;</span>,
            <span class="token string">&quot;mtamac&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;notes&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;postalcode&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;pppoe_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;pppoe_username&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;probe&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;profile&quot;</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,
            <span class="token string">&quot;realm&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim&quot;</span>,
            <span class="token string">&quot;remote_id&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;sn&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0000deadbeef0000&quot;</span>,
            <span class="token string">&quot;tech&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gpon&quot;</span>,
            <span class="token string">&quot;tech_updated&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;topology&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;tr069&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;tv_profile&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;updated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,
            <span class="token string">&quot;voip_profile&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;wanmac&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;wifi_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;wifi_profile&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;wifi_ssid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Changes about urls and paginated response are the same for <code>customers</code> and <code>potses</code> resources.</p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2><p>Krill&#39;s entire REST API is organized under <code>https://&lt;hostname&gt;/api/v2/</code>. The URL structure is divided at the root level by some of these applications: isp, pbx, monitoring, auth, me, installer, oratio, rubik and plankton. Within each application exists diferent resources to use.</p><h2 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h2><h3 id="crm" tabindex="-1"><a class="header-anchor" href="#crm" aria-hidden="true">#</a> CRM</h3><p>Endpoint: <code>/api/v2/isp</code></p><p>Here you can query, create, modify and delete CRM objects (Customers, CPEs, POTSs).</p><h4 id="filtering-attributes" tabindex="-1"><a class="header-anchor" href="#filtering-attributes" aria-hidden="true">#</a> Filtering attributes</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/v2/isp/cpes/74/?attrs<span class="token operator">=</span>id,cpename

HTTP/1.1 <span class="token number">200</span> OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Connection: keep-alive
Content-Length: <span class="token number">29</span>
Content-Type: application/json
Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:53:01 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span>
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

<span class="token punctuation">{</span>
    <span class="token string">&quot;cpename&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0074&quot;</span>,
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">74</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="joins" tabindex="-1"><a class="header-anchor" href="#joins" aria-hidden="true">#</a> Joins</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/v2/isp/cpes/74/?attrs<span class="token operator">=</span>id<span class="token operator">&amp;</span><span class="token assign-left variable">joins</span><span class="token operator">==</span>customer,potses

HTTP/1.1 <span class="token number">200</span> OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Connection: keep-alive
Content-Length: <span class="token number">327</span>
Content-Type: application/json
Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:54:07 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span>
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

<span class="token punctuation">{</span>
    <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Calle Bolivia nº 21 3ºB&quot;</span>,
        <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Coslada, Madrid&quot;</span>,
        <span class="token string">&quot;comment&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Spain&quot;</span>,
        <span class="token string">&quot;created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2019-11-08T15:57:08+01:00&quot;</span>,
        <span class="token string">&quot;external_id&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">65</span>,
        <span class="token string">&quot;latitude&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;longitude&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Incredulo&quot;</span>,
        <span class="token string">&quot;postalcode&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;realm&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim&quot;</span>,
        <span class="token string">&quot;surname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Trotamundos&quot;</span>,
        <span class="token string">&quot;updated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2019-11-08T15:57:08+01:00&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">74</span>,
    <span class="token string">&quot;potses&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;cli&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;context&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;contextname&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;custom_digitmap&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;dtmf&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;auto&quot;</span>,
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">138</span>,
            <span class="token string">&quot;label&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;language&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;lineid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0074-1&quot;</span>,
            <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
            <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;pbx_extension&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;voicemail&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;voicemail_password&quot;</span><span class="token builtin class-name">:</span> null
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;cli&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;context&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;contextname&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;custom_digitmap&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;dtmf&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;auto&quot;</span>,
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">139</span>,
            <span class="token string">&quot;label&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;language&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;lineid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0074-2&quot;</span>,
            <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
            <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;pbx_extension&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;voicemail&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;voicemail_password&quot;</span><span class="token builtin class-name">:</span> null
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/v2/isp/cpes/?attrs<span class="token operator">=</span>id<span class="token operator">&amp;</span><span class="token assign-left variable">offset</span><span class="token operator">=</span><span class="token number">42</span><span class="token operator">&amp;</span><span class="token assign-left variable">limit</span><span class="token operator">=</span><span class="token number">3</span>
HTTP/1.1 <span class="token number">200</span> OK
Access-Control-Allow-Credentials: True
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: *
Allow: GET, POST, HEAD, OPTIONS
Connection: keep-alive
Content-Length: <span class="token number">202</span>
Content-Type: application/json
Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:56:13 GMT
Referrer-Policy: same-origin
Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span>
Vary: Accept, Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

<span class="token punctuation">{</span>
    <span class="token string">&quot;count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">158</span>,
    <span class="token string">&quot;next&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://pre1:4280/api/v2/isp/cpes/?attrs=id&amp;limit=3&amp;offset=45&quot;</span>,
    <span class="token string">&quot;previous&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://pre1:4280/api/v2/isp/cpes/?attrs=id&amp;limit=3&amp;offset=39&quot;</span>,
    <span class="token string">&quot;results&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">119</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">121</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">123</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pbx-management" tabindex="-1"><a class="header-anchor" href="#pbx-management" aria-hidden="true">#</a> PBX management</h3><p>Endpoint: <code>/api/v2/pbx</code></p><p>Here you can query, create, modify and delete PBXv objects (pbxs, recepcionists, groups, queues, ddis, schedules, holidays).</p><h3 id="monitoring-resources" tabindex="-1"><a class="header-anchor" href="#monitoring-resources" aria-hidden="true">#</a> Monitoring resources</h3><p>Endpoint: <code>/api/v2/monitoring</code></p><ul><li>Obtain current status of monitored hosts and services</li><li>History of changes for them</li><li>Datasets with monitored metrics</li><li>Perform actions (reschedule checks, etc.)</li></ul><h3 id="radius-management" tabindex="-1"><a class="header-anchor" href="#radius-management" aria-hidden="true">#</a> RADIUS management</h3><p>Endpoint: <code>/api/v2/oratio</code></p><p>PPPoE sessions and IP Pool stats information.</p><h3 id="gpon-provision" tabindex="-1"><a class="header-anchor" href="#gpon-provision" aria-hidden="true">#</a> GPON provision</h3><p>Endpoint: <code>/api/v2/gpon</code></p><p>Realtime information about OLTs, PONs and ONUs provisioned.</p><h3 id="docsis-management" tabindex="-1"><a class="header-anchor" href="#docsis-management" aria-hidden="true">#</a> DOCSIS management</h3><p>Endpoint: <code>/api/v2/docsis</code></p><p>Technical information about CMTSs, Macs domains and fiber nodes.</p><h3 id="rubik-resources" tabindex="-1"><a class="header-anchor" href="#rubik-resources" aria-hidden="true">#</a> Rubik resources</h3><p>Endpoint: <code>/api/v2/rubik</code></p><p>Here you can query, create, modify and delete Rubik objects (Addresses, Services, Tickets), for integration with an external CRM.</p><h3 id="plankton-management" tabindex="-1"><a class="header-anchor" href="#plankton-management" aria-hidden="true">#</a> Plankton management</h3><p>Endpoint: <code>/api/v2/plankton</code></p><p>Here you can query, create, modify and delete Plankton FTTH Services, for integration with an external CRM.</p><h2 id="widgets-urls" tabindex="-1"><a class="header-anchor" href="#widgets-urls" aria-hidden="true">#</a> Widgets urls</h2><p>Graphs: <code>/widgets/graphs/[bandwidth|txrx|upstream|downstream|qos]/?token=[token]&amp;host=[host-name]&amp;realtime=[true|false]&amp;start=[magnitudeUnit]&amp;end=[magnitudeUnit]</code></p><p>Device: <code>/widgets/device/?token=[token]&amp;host=[host-name]</code></p><p>Widget Graphs <code>/widgets/graphs/{graphType}/:</code></p><p>Graph Types: bandwidth, txrx (GPON tech only), upstream (DOCSIS tech only), downstream (DOCSIS tech only), qos (DOCSIS tech only).</p><p>Query Parameters:</p><ul><li>token (required): extracted from login API request or from app_token browser local storage persistence</li><li>host (required): host name like cpe23133 (DOCSIS) or cpe115087 (GPON)</li><li>realtime (default: false): data from realtime info or from influx history</li><li>start (default: 1d): if not realtime, time period from start of request for data sets</li><li>end (default: 0m): if not realtime, time period to end of request data sets</li><li>refresh (default: 60 secs): if realtime, integer value for refresh interval between requests (in seconds)</li></ul><p>Time Periods:</p><ul><li>Time periods are strings with magnitude &amp; unit, like 24h or 7d</li><li>Valid units are: M for months, d for days, h for hours and m for minutes</li></ul>`,48);function _(T,x){const a=l("ExternalLinkIcon");return o(),p("div",null,[u,r,s("p",null,[n("The "),s("a",d,[n("REST"),e(a)]),n(" API v2 allows you to manage Krill objects and resources by HTTP requests.")]),s("p",null,[n("You can check the technical definition "),s("a",v,[n("here (Swagger)"),e(a)]),n(".")]),m,s("ul",null,[b,k,q,g,s("li",null,[n("if you need it, auth now may include "),s("a",h,[n("OAuth"),e(a)]),n(". Please, contact Phicus team for details.")])]),f])}const w=t(c,[["render",_],["__file","api-v2.html.vue"]]);export{w as default};
