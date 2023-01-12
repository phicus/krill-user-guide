import{_ as a,a as i}from"./0002-1d74e180.js";import{_ as n,L as l,n as c,p as d,Q as e,M as r,T as s,s as t}from"./framework-b76f3d1b.js";const h={},u=e("h1",{id:"rubik",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rubik","aria-hidden":"true"},"#"),t(" Rubik")],-1),_=e("p",null,"Module in which everything related with Bitstream is managed in Krill.",-1),m=e("p",null,"It has two submenus:",-1),p=e("p",null,"In the main page there's a summary of the last generated services and trouble tickets. Both of them can be ordered and filtered by the different headers. There's also available a tool to filter by owner and service or ticket condition.",-1),b=e("p",null,"The service fields are: ID, Customer, Service Profile, Owner, State, Planned Installation, Created at y Last Update.",-1),f=e("p",null,[e("img",{src:a,alt:"ISP Customer Dashboard"})],-1),k=e("p",null,"The trouble tickets fields are: ID, Customer, Address, Owner, State, Priority, Symptom, Created at y Last Update.",-1),v=e("p",null,[e("img",{src:i,alt:"ISP Customer Dashboard"})],-1),y=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"From the bar on the top of each summary box a new service or trouble ticket can be created by clicking on the right button.")],-1);function g(w,x){const o=l("RouterLink");return c(),d("div",null,[u,_,m,e("ul",null,[e("li",null,[r(o,{to:"/krill2/rubik/services.html"},{default:s(()=>[t("Services")]),_:1}),t(": Services that involve the main operator.")]),e("li",null,[r(o,{to:"/krill2/rubik/trouble-tickets.html"},{default:s(()=>[t("Trouble Tickets")]),_:1}),t(": Management of incidents for those main operators that allow it.")])]),p,b,f,k,v,y])}const S=n(h,[["render",g],["__file","index.html.vue"]]);export{S as default};