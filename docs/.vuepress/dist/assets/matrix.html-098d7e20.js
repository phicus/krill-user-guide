import{_ as t,a as e,b as i}from"./1103-6029488c.js";import{_ as a,o as s,c as r,a as o}from"./app-d7d7d7e0.js";const n={},l=o('<h1 id="monitoring-matrix" tabindex="-1"><a class="header-anchor" href="#monitoring-matrix"><span>Monitoring | Matrix</span></a></h1><p>Matrix is a list of devices and services that allows us to see in the same place all the metrics registered in them as well as the hosts&#39; registering or administrative information.</p><p>If we access Matrix without a predefined search, by default, we are going to see a list with favorites and the last searches that have been made to limit the posible results.</p><p><img src="'+t+'" alt="MonitoringSmartTree"></p><p>Once we have made any search, we will be able to see a list similar to this one:</p><p><img src="'+e+'" alt="MonitoringSmartTree"></p><p>Based on the search, if its a host or a service, there are different column groups that are going to be displayed automatically, and others that are going to be added, also automatically, based on the services and metrics available. The basic columns are:</p><ul><li>Host/Servicio</li><li>Date of the last change</li><li>Down/Up bandwidth*</li><li>IP Address*</li></ul><p>The columns marked with an * appears only on the Hosts results.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We can quickly filter the results among <strong>Host</strong> and <strong>Services</strong> by clicking the selector that appears on the top.</p></div><p>If we want to show or hide the different column groups, we can do it using the selector that appears on the top:</p><p><img src="'+i+'" alt="MonitoringSmartTree"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The Administrative and Registering column groups, that are only shown for the Hosts, have information regarding the OLT or CMTS in which the devices are registered, the Serial Number, MAC, upstream/downstream profiles, models, as well as the customer information, etc.</p></div>',13),c=[l];function h(m,p){return s(),r("div",null,c)}const u=a(n,[["render",h],["__file","matrix.html.vue"]]),f=JSON.parse('{"path":"/krill2/monitoring/matrix.html","title":"Monitoring | Matrix","lang":"en-US","frontmatter":{"title":"Monitoring | Matrix","description":"List of hosts and services with metrics.","lang":"en-US","prev":"/krill2/monitoring/problems","next":"/krill2/monitoring/host-groups","tags":["krill2","module","monitoring","matrix"]},"headers":[],"git":{"updatedTime":1673356512000},"filePathRelative":"krill2/monitoring/matrix.md"}');export{u as comp,f as data};
