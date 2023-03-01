import{_ as t,L as l,n as o,p,Q as s,s as n,M as e,a0 as i}from"./framework-e30e40a0.js";const c={},u=s("h1",{id:"vision-general-de-la-api-rest-v2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vision-general-de-la-api-rest-v2","aria-hidden":"true"},"#"),n(" Visión general de la API REST v2")],-1),r=s("h2",{id:"introduccion",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduccion","aria-hidden":"true"},"#"),n(" Introducción")],-1),d={href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"},v={href:"https://apikrill.phicus.es/swagger/v2/",target:"_blank",rel:"noopener noreferrer"},m=i('<h2 id="migrar-desde-la-api-v1" tabindex="-1"><a class="header-anchor" href="#migrar-desde-la-api-v1" aria-hidden="true">#</a> Migrar desde la API v1</h2><p>La <code>APIv1</code> va a permanecer activa durante un tiempo... pero debéis tratar de adaptar el cliente API a la nueva versión <code>V2</code>.</p><p>En este apartado asumimos que ya estáis haciendo uso del <code>APIv1</code> para manejar los recursos referentes a <code>CPE</code>, <code>CUSTOMER</code> y <code>POTSES</code>.</p><p>Algunos consejos para agilizar la migración:</p>',4),b=s("li",null,[n("El prefijo para todas las URLs cambia de "),s("code",null,"/api"),n(" a "),s("code",null,"/api/v2"),n(".")],-1),k=s("li",null,"Todos los recursos están ahora bajo una APP.",-1),q=s("li",null,"La mayoría de los recursos están ahora paginados.",-1),g=s("li",null,"Es altamente probable que debas entrar por HTTPS en vez de HTTP.",-1),h={href:"https://oauth.net/",target:"_blank",rel:"noopener noreferrer"},f=i(`<h2 id="listando-cpes-customers-y-potses" tabindex="-1"><a class="header-anchor" href="#listando-cpes-customers-y-potses" aria-hidden="true">#</a> Listando CPEs, Customers y POTSes.</h2><p>Con API v1:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/cpes/?sn<span class="token operator">=</span>0000deadbeef0000

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Con v2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/v2/isp/cpes/?sn<span class="token operator">=</span>0000deadbeef0000

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Los cambios sobre las URLs y la paginación en cuanto a las respuestas para <code>customers</code> y <code>potses</code> son los mismos.</p><h2 id="jerarquia" tabindex="-1"><a class="header-anchor" href="#jerarquia" aria-hidden="true">#</a> Jerarquía</h2><p>La API-REST de Krill está organizada bajo <code>https://&lt;hostname&gt;/api/v2/</code>. La estructura de las URLs está dividida por aplicación o módulo para estas aplicaciones, accediendo desde el módulo inicial/root: isp, pbx, monitoring, auth, me, installer, oratio, rubik and plankton. Dentro de cada aplicación existen diferentes recursos disponibles..</p><h2 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h2><h3 id="crm" tabindex="-1"><a class="header-anchor" href="#crm" aria-hidden="true">#</a> CRM</h3><p>Endpoint: <code>/api/v2/isp</code></p><p>En este endpoint puedes listar, crear, modificar y eliminar los objetos que el CRM maneja: Customers, CPEs, POTSes.</p><h4 id="filtrando-atributos" tabindex="-1"><a class="header-anchor" href="#filtrando-atributos" aria-hidden="true">#</a> Filtrando atributos</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/v2/isp/cpes/74/?attrs<span class="token operator">=</span>id,cpename

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="paginacion" tabindex="-1"><a class="header-anchor" href="#paginacion" aria-hidden="true">#</a> Paginación</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET api/v2/isp/cpes/?attrs<span class="token operator">=</span>id<span class="token operator">&amp;</span><span class="token assign-left variable">offset</span><span class="token operator">=</span><span class="token number">42</span><span class="token operator">&amp;</span><span class="token assign-left variable">limit</span><span class="token operator">=</span><span class="token number">3</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="manejo-de-pbx" tabindex="-1"><a class="header-anchor" href="#manejo-de-pbx" aria-hidden="true">#</a> Manejo de PBX</h3><p>Endpoint: <code>/api/v2/pbx</code></p><p>En este endpoint puedes listar, crear, modificar y eliminar los objetos relacionados con la PBXv: (pbxs, recepcionists, groups, queues, ddis, schedules, holidays).</p><h3 id="monitorizacion-de-equipos-y-servicios" tabindex="-1"><a class="header-anchor" href="#monitorizacion-de-equipos-y-servicios" aria-hidden="true">#</a> Monitorización de equipos y servicios</h3><p>Endpoint: <code>/api/v2/monitoring</code></p><ul><li>Obtener el estado actual de los hosts y servicios monitorizados por Krill</li><li>Histórico de cambios sobre los hosts y servicios</li><li>Datasets con las gráficas generadas por la monitorización</li><li>Llevar a cabo acciones como reschedule, checks, etc</li></ul><h3 id="gestion-radius" tabindex="-1"><a class="header-anchor" href="#gestion-radius" aria-hidden="true">#</a> Gestión RADIUS</h3><p>Endpoint: <code>/api/v2/oratio</code></p><p>Sesiones PPPoE e información sobre el estado de los Pools de IP.</p><h3 id="provision-gpon" tabindex="-1"><a class="header-anchor" href="#provision-gpon" aria-hidden="true">#</a> Provisión GPON</h3><p>Endpoint: <code>/api/v2/gpon</code></p><p>Información en tiempo real sobre las OLTs, PONs, ONUs provisionados.</p><h3 id="gestion-docsis" tabindex="-1"><a class="header-anchor" href="#gestion-docsis" aria-hidden="true">#</a> Gestión DOCSIS</h3><p>Endpoint: <code>/api/v2/docsis</code></p><p>Información técnica sobre CMTSs, Mac domains y fiber-nodes.</p><h3 id="recursos-rubik" tabindex="-1"><a class="header-anchor" href="#recursos-rubik" aria-hidden="true">#</a> Recursos Rubik</h3><p>Endpoint: <code>/api/v2/rubik</code></p><p>Here you can query, create, modify and delete Rubik objects (Addresses, Services, Tickets), for integration with an external CRM.</p><h3 id="gestion-de-plankton" tabindex="-1"><a class="header-anchor" href="#gestion-de-plankton" aria-hidden="true">#</a> Gestión de Plankton</h3><p>Endpoint: <code>/api/v2/plankton</code></p><p>En este endopint puedes listar, crear, modificar y eliminar los servicios FTTH de Plankton para integrarlos con el CRM.</p>`,39);function _(T,A){const a=l("ExternalLinkIcon");return o(),p("div",null,[u,r,s("p",null,[n("La "),s("a",d,[n("REST"),e(a)]),n(" API v2 te permite controlar los recursos y objetos de Krill mediante peticiones HTTP.")]),s("p",null,[n("Puedes consultar las definiciones técnicas en "),s("a",v,[n("Swagger"),e(a)]),n(".")]),m,s("ul",null,[b,k,q,g,s("li",null,[n("Si lo requerís, el acceso ahora es posible por método "),s("a",h,[n("OAuth"),e(a)]),n(". Si estás interesado contacta con el equipo de Phicus.")])]),f])}const x=t(c,[["render",_],["__file","api-v2.html.vue"]]);export{x as default};
