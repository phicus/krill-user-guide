import{_ as s,o as n,c as a,a as e}from"./app-c718d43b.js";const l={},i=e(`<h1 id="rest-api-v2-overview" tabindex="-1"><a class="header-anchor" href="#rest-api-v2-overview"><span>REST API v2 Overview</span></a></h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>The <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener noreferrer">REST</a> API v2 allows you to manage Krill objects and resources by HTTP requests.</p><p>You can check the technical definition <a href="https://apikrill.phicus.es/swagger/v2/" target="_blank" rel="noopener noreferrer">here (Swagger)</a>.</p><h2 id="migrating-from-api-v1" tabindex="-1"><a class="header-anchor" href="#migrating-from-api-v1"><span>Migrating from API v1</span></a></h2><p>The <code>APIv1</code> will be active for a while... but you should adapt your client to <code>APIv2</code> version.</p><p>In this chapter, we assume you have been using <code>APIv1</code> only for <code>cpes</code>, <code>customers</code> and <code>potses</code> resources.</p><p>Some quick tips to make easier to migrate:</p><ul><li>prefix for all URLs changes from <code>/api</code> to <code>/api/v2</code></li><li>all resources are now under an app.</li><li>most of resources are now paginated.</li><li>probably, you will access by HTTPS.</li><li>if you need it, auth now may include <a href="https://oauth.net/" target="_blank" rel="noopener noreferrer">OAuth</a>. Please, contact Phicus team for details.</li></ul><h2 id="listing-cpes-customers-potss" tabindex="-1"><a class="header-anchor" href="#listing-cpes-customers-potss"><span>Listing CPEs, Customers, POTSs.</span></a></h2><p>With v1:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET api/cpes/?sn<span class="token operator">=</span>0000deadbeef0000</span>
<span class="line"></span>
<span class="line">HTTP/1.1 <span class="token number">200</span> OK</span>
<span class="line">Access-Control-Allow-Credentials: True</span>
<span class="line">Access-Control-Allow-Headers: *</span>
<span class="line">Access-Control-Allow-Methods: *</span>
<span class="line">Access-Control-Allow-Origin: *</span>
<span class="line">Access-Control-Expose-Headers: *</span>
<span class="line">Allow: GET, POST, HEAD, OPTIONS</span>
<span class="line">Connection: keep-alive</span>
<span class="line">Content-Length: <span class="token number">876</span></span>
<span class="line">Content-Type: application/json</span>
<span class="line">Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:36:36 GMT</span>
<span class="line">Referrer-Policy: same-origin</span>
<span class="line">Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span></span>
<span class="line">Vary: Accept, Cookie</span>
<span class="line">X-Content-Type-Options: nosniff</span>
<span class="line">X-Frame-Options: DENY</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;access&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">        <span class="token string">&quot;active&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">        <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;address_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">        <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;country&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;cpename&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token number">27</span>,</span>
<span class="line">        <span class="token string">&quot;disable_provision&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">        <span class="token string">&quot;disable_reconfig&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">        <span class="token string">&quot;dsn&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;enable_notifications&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">        <span class="token string">&quot;expiration_date&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;external_id&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;external_voip&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">        <span class="token string">&quot;fixed_address&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;has_tr069&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">        <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">350</span>,</span>
<span class="line">        <span class="token string">&quot;internal_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;lan_cidr&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;latitude&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;line_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;longitude&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;mac&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;me_vlan&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;model&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;HG8245H&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;mtamac&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;notes&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;postalcode&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;pppoe_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;pppoe_username&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;probe&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">        <span class="token string">&quot;profile&quot;</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,</span>
<span class="line">        <span class="token string">&quot;realm&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;remote_id&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;sn&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0000deadbeef0000&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;tech&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gpon&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;tech_updated&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;topology&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;tv_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;updated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;voip_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;wanmac&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;wifi_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;wifi_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;wifi_ssid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With v2</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET api/v2/isp/cpes/?sn<span class="token operator">=</span>0000deadbeef0000</span>
<span class="line"></span>
<span class="line">HTTP/1.1 <span class="token number">200</span> OK</span>
<span class="line">Access-Control-Allow-Credentials: True</span>
<span class="line">Access-Control-Allow-Headers: *</span>
<span class="line">Access-Control-Allow-Methods: *</span>
<span class="line">Access-Control-Allow-Origin: *</span>
<span class="line">Access-Control-Expose-Headers: *</span>
<span class="line">Allow: GET, POST, HEAD, OPTIONS</span>
<span class="line">Connection: keep-alive</span>
<span class="line">Content-Length: <span class="token number">1704</span></span>
<span class="line">Content-Type: application/json</span>
<span class="line">Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:36:49 GMT</span>
<span class="line">Referrer-Policy: same-origin</span>
<span class="line">Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span></span>
<span class="line">Vary: Accept, Cookie</span>
<span class="line">X-Content-Type-Options: nosniff</span>
<span class="line">X-Frame-Options: DENY</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,</span>
<span class="line">    <span class="token string">&quot;next&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">    <span class="token string">&quot;previous&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">    <span class="token string">&quot;results&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;_links&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;actions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token string">&quot;diagnostic&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/cwmp_diagnostic&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;factory&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/factory&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;reboot&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/reboot&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;reconfig&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/reconfig&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;reprovision&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/reprovision&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;unprovision&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/unprovision&quot;</span></span>
<span class="line">                <span class="token punctuation">}</span>,</span>
<span class="line">                <span class="token string">&quot;links&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token string">&quot;cdrs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/events?type=cdr&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/customer&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;cwmp_info&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/cwmp_info&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;events&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/events&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;info&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/info&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;links&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/links&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;livestatus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/livestatus&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;logs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/logs&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;model&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/model&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;potses&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/potses&quot;</span>,</span>
<span class="line">                    <span class="token string">&quot;profile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/api/v2/cpes/350/profile&quot;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span>,</span>
<span class="line">            <span class="token string">&quot;_services&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string">&quot;provision&quot;</span>,</span>
<span class="line">                <span class="token string">&quot;txrx&quot;</span>,</span>
<span class="line">                <span class="token string">&quot;dhcp&quot;</span>,</span>
<span class="line">                <span class="token string">&quot;tr069&quot;</span></span>
<span class="line">            <span class="token punctuation">]</span>,</span>
<span class="line">            <span class="token string">&quot;access&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">            <span class="token string">&quot;active&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">            <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;address_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;avatar&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;HG4201&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;country&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;cpename&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token number">27</span>,</span>
<span class="line">            <span class="token string">&quot;disable_provision&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;disable_reconfig&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;dsn&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;enable_notifications&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;expiration_date&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;external_id&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;external_voip&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;fixed_address&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;has_tr069&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">350</span>,</span>
<span class="line">            <span class="token string">&quot;internal_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0350&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;is_router&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">            <span class="token string">&quot;lan_cidr&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;latitude&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;line_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;longitude&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;mac&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;me_vlan&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;model&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;HG8245H&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;mtamac&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;notes&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;postalcode&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;pppoe_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;pppoe_username&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;probe&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;profile&quot;</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,</span>
<span class="line">            <span class="token string">&quot;realm&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;remote_id&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;sn&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0000deadbeef0000&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;tech&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gpon&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;tech_updated&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;topology&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;tr069&quot;</span><span class="token builtin class-name">:</span> true,</span>
<span class="line">            <span class="token string">&quot;tv_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;updated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-12-17T23:00:01+01:00&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;voip_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;wanmac&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;wifi_password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;wifi_profile&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;wifi_ssid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Changes about urls and paginated response are the same for <code>customers</code> and <code>potses</code> resources.</p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy"><span>Hierarchy</span></a></h2><p>Krill&#39;s entire REST API is organized under <code>https://&lt;hostname&gt;/api/v2/</code>. The URL structure is divided at the root level by some of these applications: isp, pbx, monitoring, auth, me, installer, oratio, rubik and plankton. Within each application exists diferent resources to use.</p><h2 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints"><span>Endpoints</span></a></h2><h3 id="crm" tabindex="-1"><a class="header-anchor" href="#crm"><span>CRM</span></a></h3><p>Endpoint: <code>/api/v2/isp</code></p><p>Here you can query, create, modify and delete CRM objects (Customers, CPEs, POTSs).</p><h4 id="filtering-attributes" tabindex="-1"><a class="header-anchor" href="#filtering-attributes"><span>Filtering attributes</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET api/v2/isp/cpes/74/?attrs<span class="token operator">=</span>id,cpename</span>
<span class="line"></span>
<span class="line">HTTP/1.1 <span class="token number">200</span> OK</span>
<span class="line">Access-Control-Allow-Credentials: True</span>
<span class="line">Access-Control-Allow-Headers: *</span>
<span class="line">Access-Control-Allow-Methods: *</span>
<span class="line">Access-Control-Allow-Origin: *</span>
<span class="line">Access-Control-Expose-Headers: *</span>
<span class="line">Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS</span>
<span class="line">Connection: keep-alive</span>
<span class="line">Content-Length: <span class="token number">29</span></span>
<span class="line">Content-Type: application/json</span>
<span class="line">Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:53:01 GMT</span>
<span class="line">Referrer-Policy: same-origin</span>
<span class="line">Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span></span>
<span class="line">Vary: Accept, Cookie</span>
<span class="line">X-Content-Type-Options: nosniff</span>
<span class="line">X-Frame-Options: DENY</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;cpename&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0074&quot;</span>,</span>
<span class="line">    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">74</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="joins" tabindex="-1"><a class="header-anchor" href="#joins"><span>Joins</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET api/v2/isp/cpes/74/?attrs<span class="token operator">=</span>id<span class="token operator">&amp;</span><span class="token assign-left variable">joins</span><span class="token operator">==</span>customer,potses</span>
<span class="line"></span>
<span class="line">HTTP/1.1 <span class="token number">200</span> OK</span>
<span class="line">Access-Control-Allow-Credentials: True</span>
<span class="line">Access-Control-Allow-Headers: *</span>
<span class="line">Access-Control-Allow-Methods: *</span>
<span class="line">Access-Control-Allow-Origin: *</span>
<span class="line">Access-Control-Expose-Headers: *</span>
<span class="line">Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS</span>
<span class="line">Connection: keep-alive</span>
<span class="line">Content-Length: <span class="token number">327</span></span>
<span class="line">Content-Type: application/json</span>
<span class="line">Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:54:07 GMT</span>
<span class="line">Referrer-Policy: same-origin</span>
<span class="line">Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span></span>
<span class="line">Vary: Accept, Cookie</span>
<span class="line">X-Content-Type-Options: nosniff</span>
<span class="line">X-Frame-Options: DENY</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Calle Bolivia nº 21 3ºB&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Coslada, Madrid&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;comment&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Spain&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2019-11-08T15:57:08+01:00&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;external_id&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">65</span>,</span>
<span class="line">        <span class="token string">&quot;latitude&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;longitude&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Incredulo&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;postalcode&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">&quot;realm&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;surname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Trotamundos&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;updated&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2019-11-08T15:57:08+01:00&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">74</span>,</span>
<span class="line">    <span class="token string">&quot;potses&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;cli&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;context&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;contextname&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;custom_digitmap&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;dtmf&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;auto&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">138</span>,</span>
<span class="line">            <span class="token string">&quot;label&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;language&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;lineid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0074-1&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,</span>
<span class="line">            <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;pbx_extension&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;voicemail&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;voicemail_password&quot;</span><span class="token builtin class-name">:</span> null</span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;cli&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;context&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;contextname&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;custom_digitmap&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;dtmf&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;auto&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">139</span>,</span>
<span class="line">            <span class="token string">&quot;label&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;language&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;lineid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pim0074-2&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,</span>
<span class="line">            <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;pbx_extension&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">            <span class="token string">&quot;voicemail&quot;</span><span class="token builtin class-name">:</span> false,</span>
<span class="line">            <span class="token string">&quot;voicemail_password&quot;</span><span class="token builtin class-name">:</span> null</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination"><span>Pagination</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET api/v2/isp/cpes/?attrs<span class="token operator">=</span>id<span class="token operator">&amp;</span><span class="token assign-left variable">offset</span><span class="token operator">=</span><span class="token number">42</span><span class="token operator">&amp;</span><span class="token assign-left variable">limit</span><span class="token operator">=</span><span class="token number">3</span></span>
<span class="line">HTTP/1.1 <span class="token number">200</span> OK</span>
<span class="line">Access-Control-Allow-Credentials: True</span>
<span class="line">Access-Control-Allow-Headers: *</span>
<span class="line">Access-Control-Allow-Methods: *</span>
<span class="line">Access-Control-Allow-Origin: *</span>
<span class="line">Access-Control-Expose-Headers: *</span>
<span class="line">Allow: GET, POST, HEAD, OPTIONS</span>
<span class="line">Connection: keep-alive</span>
<span class="line">Content-Length: <span class="token number">202</span></span>
<span class="line">Content-Type: application/json</span>
<span class="line">Date: Wed, <span class="token number">18</span> Jan <span class="token number">2023</span> 08:56:13 GMT</span>
<span class="line">Referrer-Policy: same-origin</span>
<span class="line">Server: nginx/1.18.0 <span class="token punctuation">(</span>Ubuntu<span class="token punctuation">)</span></span>
<span class="line">Vary: Accept, Cookie</span>
<span class="line">X-Content-Type-Options: nosniff</span>
<span class="line">X-Frame-Options: DENY</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">158</span>,</span>
<span class="line">    <span class="token string">&quot;next&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://pre1:4280/api/v2/isp/cpes/?attrs=id&amp;limit=3&amp;offset=45&quot;</span>,</span>
<span class="line">    <span class="token string">&quot;previous&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://pre1:4280/api/v2/isp/cpes/?attrs=id&amp;limit=3&amp;offset=39&quot;</span>,</span>
<span class="line">    <span class="token string">&quot;results&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">119</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">121</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">123</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pbx-management" tabindex="-1"><a class="header-anchor" href="#pbx-management"><span>PBX management</span></a></h3><p>Endpoint: <code>/api/v2/pbx</code></p><p>Here you can query, create, modify and delete PBXv objects (pbxs, recepcionists, groups, queues, ddis, schedules, holidays).</p><h3 id="monitoring-resources" tabindex="-1"><a class="header-anchor" href="#monitoring-resources"><span>Monitoring resources</span></a></h3><p>Endpoint: <code>/api/v2/monitoring</code></p><ul><li>Obtain current status of monitored hosts and services</li><li>History of changes for them</li><li>Datasets with monitored metrics</li><li>Perform actions (reschedule checks, etc.)</li></ul><h3 id="radius-management" tabindex="-1"><a class="header-anchor" href="#radius-management"><span>RADIUS management</span></a></h3><p>Endpoint: <code>/api/v2/oratio</code></p><p>PPPoE sessions and IP Pool stats information.</p><h3 id="gpon-provision" tabindex="-1"><a class="header-anchor" href="#gpon-provision"><span>GPON provision</span></a></h3><p>Endpoint: <code>/api/v2/gpon</code></p><p>Realtime information about OLTs, PONs and ONUs provisioned.</p><h3 id="docsis-management" tabindex="-1"><a class="header-anchor" href="#docsis-management"><span>DOCSIS management</span></a></h3><p>Endpoint: <code>/api/v2/docsis</code></p><p>Technical information about CMTSs, Macs domains and fiber nodes.</p><h3 id="rubik-resources" tabindex="-1"><a class="header-anchor" href="#rubik-resources"><span>Rubik resources</span></a></h3><p>Endpoint: <code>/api/v2/rubik</code></p><p>Here you can query, create, modify and delete Rubik objects (Addresses, Services, Tickets), for integration with an external CRM.</p><h3 id="plankton-management" tabindex="-1"><a class="header-anchor" href="#plankton-management"><span>Plankton management</span></a></h3><p>Endpoint: <code>/api/v2/plankton</code></p><p>Here you can query, create, modify and delete Plankton FTTH Services, for integration with an external CRM.</p>`,48),t=[i];function p(c,o){return n(),a("div",null,t)}const r=s(l,[["render",p],["__file","api-v2.html.vue"]]),d=JSON.parse('{"path":"/krill2/api/api-v2.html","title":"API v2","lang":"en-US","frontmatter":{"title":"API v2","description":"REST API v2 Overview.","lang":"en-US","sidebar":"auto","sidebarDepth":2,"prev":null,"next":"postman","tags":["krill2","api"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Migrating from API v1","slug":"migrating-from-api-v1","link":"#migrating-from-api-v1","children":[]},{"level":2,"title":"Listing CPEs, Customers, POTSs.","slug":"listing-cpes-customers-potss","link":"#listing-cpes-customers-potss","children":[]},{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Endpoints","slug":"endpoints","link":"#endpoints","children":[{"level":3,"title":"CRM","slug":"crm","link":"#crm","children":[]},{"level":3,"title":"PBX management","slug":"pbx-management","link":"#pbx-management","children":[]},{"level":3,"title":"Monitoring resources","slug":"monitoring-resources","link":"#monitoring-resources","children":[]},{"level":3,"title":"RADIUS management","slug":"radius-management","link":"#radius-management","children":[]},{"level":3,"title":"GPON provision","slug":"gpon-provision","link":"#gpon-provision","children":[]},{"level":3,"title":"DOCSIS management","slug":"docsis-management","link":"#docsis-management","children":[]},{"level":3,"title":"Rubik resources","slug":"rubik-resources","link":"#rubik-resources","children":[]},{"level":3,"title":"Plankton management","slug":"plankton-management","link":"#plankton-management","children":[]}]}],"git":{"updatedTime":1690298084000},"filePathRelative":"krill2/api/api-v2.md"}');export{r as comp,d as data};
