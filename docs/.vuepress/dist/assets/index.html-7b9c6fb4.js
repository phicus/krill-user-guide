import{_ as i,a as l,b as n,c as d}from"./03-api-reports-bba0295b.js";import{_ as p,r as h,o as c,c as g,b as t,e as r,w as o,d as e,a as s}from"./app-e3f489dc.js";const m={},f=s('<h1 id="logger" tabindex="-1"><a class="header-anchor" href="#logger"><span>Logger</span></a></h1><p>From this module we can view the logs referring to the requests from the API and the administration panel.</p><p align="center"><img src="'+i+'" width="433"></p><p>In the main dashboard, you can preview, by default, the latest API logs.</p><p><img src="'+l+'" alt="Logger Dashboard"></p><p>From here we can access:</p>',6),u=s('<h2 id="logger-dashboard" tabindex="-1"><a class="header-anchor" href="#logger-dashboard"><span>Logger Dashboard</span></a></h2><p><img src="'+n+'" alt="Admin reports"></p><p>From this view you can see all those actions carried out from the classic administration panel (Krill v1) and the registrations, modifications and deletion of:</p><ul><li>Customers</li><li>CPE</li><li>POTSes</li><li>Users</li></ul><p>In the report we can see the date, who performed the action, the type of data that was modified as well as the type of modification and data that was changed.</p><h2 id="api-reports" tabindex="-1"><a class="header-anchor" href="#api-reports"><span>API Reports</span></a></h2><p><img src="'+d+'" alt="APO Reports"></p><p>The API report allows you to show all the details related to the date, user, their IP, what type of action was performed, the URL of the API involved, response times, as well as the data that was sent to modify.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In both views we can perform filtering, not only by dates, but by various criteria such as: User, type of request, type of modified data, etc.</p></div>',9);function _(w,b){const a=h("RouteLink");return c(),g("div",null,[f,t("ul",null,[t("li",null,[r(a,{to:"/krill2/logger/#logger-dashboard"},{default:o(()=>[e("Admin reports")]),_:1}),e(": from here we can view all the actions related to the creation, modification or deletion of cpes or potses.")]),t("li",null,[r(a,{to:"/krill2/logger/#api-reports"},{default:o(()=>[e("API Reports")]),_:1}),e(": logs referring to the requests that are made via api. This part is more interesting when there is an external CRM associated with the krill isp, since all the actions and possible errors can be viewed.")])]),u])}const x=p(m,[["render",_],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/krill2/logger/","title":"Logger","lang":"en-US","frontmatter":{"title":"Logger","description":"Log reports from API and Admin panel.","lang":"en-US","prev":null,"next":null,"sidebar":"auto","tags":["krill2","module","logger","admin","api"]},"headers":[{"level":2,"title":"Logger Dashboard","slug":"logger-dashboard","link":"#logger-dashboard","children":[]},{"level":2,"title":"API Reports","slug":"api-reports","link":"#api-reports","children":[]}],"git":{"updatedTime":1675071911000},"filePathRelative":"krill2/logger/index.md"}');export{x as comp,y as data};
