import{_ as e}from"./0101-648ec7e5.js";import{_ as t,o as s,c as a,a as r}from"./app-4ab9b256.js";const n={},i=r('<h1 id="monitoring-alarms" tabindex="-1"><a class="header-anchor" href="#monitoring-alarms"><span>Monitoring | Alarms</span></a></h1><p>Predefined search that returns the network&#39;s alarms generated by Krill ordered by the affectation level from the more to the least important.</p><p><img src="'+e+`" alt="MonitoringAlarms"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In the case of the Hosts it is considered alarm when they are <strong>DOWN</strong> and in the cae of serviceswhen their condition is <strong>CRITICAL</strong>.</p></div><p>The first search that will appear in the search bar on top will filter the results that are already under control (they have an <strong>ACK</strong> or <strong>Downtime</strong>), the ones whose condition is considered <strong>HARD</strong> and whose <strong>business impact</strong> is greater than 2 or equal:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">alarm:true handled:false hard_state:true business_impact:&gt;=2 type:all</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>At the top of the page we can select between Hosts and services with the selector that appears there. There&#39;s also another selector that allows us to change the result grouping rules by: Buisiness Impact, condition y host.</p>`,7),o=[i];function l(c,h){return s(),a("div",null,o)}const p=t(n,[["render",l],["__file","alarms.html.vue"]]),g=JSON.parse(`{"path":"/krill2/monitoring/alarms.html","title":"Monitoring | Alarms","lang":"en-US","frontmatter":{"title":"Monitoring | Alarms","description":"Host alarms and services' list.","lang":"en-US","prev":"/krill2/monitoring/","next":"/krill2/monitoring/problems","tags":["krill2","module","monitoring","alarms"]},"headers":[],"git":{"updatedTime":1673376753000},"filePathRelative":"krill2/monitoring/alarms.md"}`);export{p as comp,g as data};