import{_ as e,a as t}from"./0202-ada6760e.js";import{_ as i,o as a,c as o,a as r}from"./app-a0f8851e.js";const l={},s=r('<h1 id="rubik-trouble-tickets" tabindex="-1"><a class="header-anchor" href="#rubik-trouble-tickets"><span>Rubik | Trouble Tickets</span></a></h1><p>The trouble tickets system allows us to contact the owners about the services, giving also de option to associate the tickets to the specific services or open them in a general way.</p><p>In the main view of the panel we have a summary of the trouble ticket ordered by the date of the last update.</p><p><img src="'+e+'" alt="Rubik Trouble tickets list"></p><p>The following fields are shown:</p><ul><li>ID</li><li>Customer</li><li>Address</li><li>Owner</li><li>State</li><li>Priority</li><li>Type</li><li>Symptom</li><li>Created at</li><li>Last Update</li></ul><p>We can filter and order the tickets by any of the fields. We can also export them to a file.</p><h2 id="creation-of-a-trouble-ticket" tabindex="-1"><a class="header-anchor" href="#creation-of-a-trouble-ticket"><span>Creation of a Trouble Ticket</span></a></h2><p>We can generate a new ticket by clicking in the red button that says New Trouble Ticket, a Pop-up will show up and we will have to fill the requested information.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We can also generate tickets from the page where we register new services or from the page where we edit a service that&#39;s been already registered, in this case the ticket will be linked to the service.</p></div><p><img src="'+t+'" alt="Rubik Trouble tickets creation"></p><p>The fields needed to create a new ticket are:</p><ul><li><strong>Owner</strong>: Depending on where the ticket was created this field will already be selected and not available for modifications or will be empty and have to be selected manually.</li><li><strong>Priority</strong>: Ticket&#39;s importance</li><li><strong>Number of customer affected</strong>: Number of customers that are being affected by the same problem.</li><li><strong>Ticket Type</strong>: Depending on the main operator this field can be empty, or it can have a typification&#39;s tree.</li><li><strong>Symptom</strong>: Depending on the main operator, this field can be empty, or it can have a symptoms&#39; tree.</li><li><strong>Trouble Description</strong>: Problem&#39;s description.</li><li><strong>Comments</strong>: Additional comments that can be useful to understand the problem.</li></ul><p>The option to add images is available in Attachments clicking on the <code>+</code> button that appears in the bottom, as many images as needed can be added.</p>',14),n=[s];function c(d,p){return a(),o("div",null,n)}const m=i(l,[["render",c],["__file","trouble-tickets.html.vue"]]),b=JSON.parse('{"path":"/krill2/rubik/trouble-tickets.html","title":"Rubik | Trouble Tickets","lang":"en-US","frontmatter":{"title":"Rubik | Trouble Tickets","description":"Tool for managing networks mutualized with other operators.","lang":"en-US","prev":"/krill2/rubik/services","next":null,"tags":["krill2","module","rubik","mutualized","trouble","tickets","bitstream"]},"headers":[{"level":2,"title":"Creation of a Trouble Ticket","slug":"creation-of-a-trouble-ticket","link":"#creation-of-a-trouble-ticket","children":[]}],"git":{"updatedTime":1673356512000},"filePathRelative":"krill2/rubik/trouble-tickets.md"}');export{m as comp,b as data};
