import{_ as e,a as t}from"./0202-ada6760e.js";import{_ as i,n as a,p as o,a0 as r}from"./framework-e30e40a0.js";const s={},n=r('<h1 id="rubik-trouble-tickets" tabindex="-1"><a class="header-anchor" href="#rubik-trouble-tickets" aria-hidden="true">#</a> Rubik | Trouble Tickets</h1><p>The trouble tickets system allows us to contact the owners about the services, giving also de option to associate the tickets to the specific services or open them in a general way.</p><p>In the main view of the panel we have a summary of the trouble ticket ordered by the date of the last update.</p><p><img src="'+e+'" alt="Rubik Trouble tickets list"></p><p>The following fields are shown:</p><ul><li>ID</li><li>Customer</li><li>Address</li><li>Owner</li><li>State</li><li>Priority</li><li>Type</li><li>Symptom</li><li>Created at</li><li>Last Update</li></ul><p>We can filter and order the tickets by any of the fields. We can also export them to a file.</p><h2 id="creation-of-a-trouble-ticket" tabindex="-1"><a class="header-anchor" href="#creation-of-a-trouble-ticket" aria-hidden="true">#</a> Creation of a Trouble Ticket</h2><p>We can generate a new ticket by clicking in the red button that says New Trouble Ticket, a Pop-up will show up and we will have to fill the requested information.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We can also generate tickets from the page where we register new services or from the page where we edit a service that&#39;s been already registered, in this case the ticket will be linked to the service.</p></div><p><img src="'+t+'" alt="Rubik Trouble tickets creation"></p><p>The fields needed to create a new ticket are:</p><ul><li><strong>Owner</strong>: Depending on where the ticket was created this field will already be selected and not available for modifications or will be empty and have to be selected manually.</li><li><strong>Priority</strong>: Ticket&#39;s importance</li><li><strong>Number of customer affected</strong>: Number of customers that are being affected by the same problem.</li><li><strong>Ticket Type</strong>: Depending on the main operator this field can be empty, or it can have a typification&#39;s tree.</li><li><strong>Symptom</strong>: Depending on the main operator, this field can be empty, or it can have a symptoms&#39; tree.</li><li><strong>Trouble Description</strong>: Problem&#39;s description.</li><li><strong>Comments</strong>: Additional comments that can be useful to understand the problem.</li></ul><p>The option to add images is available in Attachments clicking on the <code>+</code> button that appears in the bottom, as many images as needed can be added.</p>',14),l=[n];function c(d,h){return a(),o("div",null,l)}const u=i(s,[["render",c],["__file","trouble-tickets.html.vue"]]);export{u as default};