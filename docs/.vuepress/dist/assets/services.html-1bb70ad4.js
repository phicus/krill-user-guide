import{_ as e,a as t,b as i,c as s,d as o,e as r,f as n}from"./0107-4a454c95.js";import{_ as a,o as c,c as l,a as h}from"./app-0bbc18d2.js";const d={},p=h('<h1 id="rubik-services" tabindex="-1"><a class="header-anchor" href="#rubik-services"><span>Rubik | Services</span></a></h1><p>In this page we have a detailed list of the last services, ordered by default based on the last modification.</p><p><img src="'+e+'" alt="Rubik Services"></p><p>The fields that are shown are:</p><ul><li><strong>ID</strong>: Service&#39;s internal ID</li><li><strong>Administrative ID</strong>: Main operator&#39;s ID</li><li><strong>Service Profile</strong>: Service&#39;s profile</li><li><strong>Owner</strong>: Main operator that gives support to the service</li><li><strong>State</strong>: Service&#39;s actual condition</li><li><strong>Planned Installation</strong>: Installation due date</li><li><strong>Created at</strong>: Creation&#39;s date</li><li><strong>Last Update.</strong>: Last modification&#39;s date</li></ul><p>From the bar at the top we can filter by owner and by condition. We have the option to export the services we select to a file.</p><h2 id="service-s-creation" tabindex="-1"><a class="header-anchor" href="#service-s-creation"><span>Service&#39;s creation</span></a></h2><p>Clicking on the <code>Add new service</code> button we can create a new service. To do so we have to complete the information about the address where the service is going to be installed as well as the customer information following the steps on the form. From this screen we can also create a Trouble Ticket if we find some problem with the registration process.</p><p>The registration process is guided, following the steps of <a href="#get-coverage">Get coverage</a>, <a href="#customer-data">Customer Data</a> and <a href="#summary">Summary</a>. Once the information is entered the service is going to be created and will go through the different process the owner has in its procedure.</p><h3 id="get-coverage" tabindex="-1"><a class="header-anchor" href="#get-coverage"><span>Get coverage</span></a></h3><p>We must fill in the fields to identify the physical place of the installation, the information is offered by the main operator and have to be exact coincidences.</p><p><img src="'+t+'" alt="Rubik Service creation get coverage"></p><p>The fields we must fill in are:</p><ul><li><strong>Postal Code</strong>: Postal code</li><li><strong>Locality</strong>: Neighborhood or locality</li><li><strong>City</strong>: City</li><li><strong>State / Province</strong>: State or province</li><li><strong>Street Type</strong>: Type of street</li><li><strong>Street Name</strong>: street&#39;s name</li><li><strong>Street Number</strong>: Street&#39;s number</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The fields that have a dropdown are going to be completed with the available options that appear while the information is filled in, the value is going to self select when only one is available.</p></div><p>Once the installation address is confirmed, a &#39;subaddress&#39; selection is going to be shown, like doorway, stairs, floors and doors in which the coverage needs to be tested.</p><p>Once the address information is completely selected, when cliking on the subaddress, its coverage is going to be confirmed (or not).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>When there isn&#39;t coverage the process can0t be continued, if necessary a ticket can be created reporting the incident.</p></div><h3 id="customer-data" tabindex="-1"><a class="header-anchor" href="#customer-data"><span>Customer data</span></a></h3><p>If there&#39;s coverage for the address selected, the information of the customer to whom the service is going to be linked needs to be filled in.</p><p><img src="'+i+'" alt="Rubik Service creation customer data"></p><p>The following fields are necessary:</p><ul><li><strong>Owner</strong>: Main operator (read only field).</li><li><strong>Service Profile</strong>: Service profile.</li><li><strong>Address UID</strong>: Unique address identifier (read only field).</li><li><strong>Customer</strong>: Customer&#39;s name.</li><li><strong>External ID</strong>: Customer external ID, for example the one in the CRM.</li><li><strong>Phone</strong>: Contact phone.</li><li><strong>Comments</strong>: Optional comments.</li><li><strong>Remote ID</strong>: Remote ID for the service, following the specifications from the main operator. It can be the device&#39;s serial number or any other information.</li><li><strong>pPAI</strong>: Interconnection point that the main operator gives based on its specifiations.</li></ul><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h3><p>Registration information&#39;s summary where the information can be checked and the service can be registered.</p><h2 id="service-s-edition" tabindex="-1"><a class="header-anchor" href="#service-s-edition"><span>Service&#39;s edition</span></a></h2><p>Once the registration is done a file for the service is created.</p><p>On the file we have the condition of the service and the direct communication options regarding this service with the owner..</p><p><img src="'+s+'" alt="Rubik Service edition"></p><p>The conditions a service can go through are:</p><ul><li><strong>Reserved</strong>: Registration reserved, pending confirmation.</li><li><strong>Ordering</strong>: Temporary condition between the reservation and the confirmation process.</li><li><strong>Ordered</strong>: Registration ordered, pending installation.</li><li><strong>Completed</strong>: Registration completed, active service.</li><li><strong>Canceled</strong>: Cancelled service during the process.</li><li><strong>Down</strong>: Service unregistered once it is completed.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The change between condition only allows to change the available ones at each time automatically. For example, the unregistration of a service can&#39;t be requested if the service has not been completed yet.</p></div><p>Furthermore, the summary with the service information is offered in the same file.</p><p>From this screen a Trouble Ticket can also be associated by clicking on the button on the bar at the top.</p><h3 id="events-history" tabindex="-1"><a class="header-anchor" href="#events-history"><span>Events history</span></a></h3><p>From the tabs at the top in this view we can access the service&#39;s events historical register, meaning the differents conditions it went through and the information displayed on every change.</p><p><img src="'+o+'" alt="Rubik Service event history"></p><h3 id="trouble-tickets" tabindex="-1"><a class="header-anchor" href="#trouble-tickets"><span>Trouble Tickets</span></a></h3><p>In the tabs at the top a list with the Trouble tickets linked to the service is shown with a little summary of the current condition or the option to click on them to access the complete report.</p><p><img src="'+r+'" alt="Rubik Service trouble tickets"></p><h3 id="test-diagnostics" tabindex="-1"><a class="header-anchor" href="#test-diagnostics"><span>Test &amp; Diagnostics</span></a></h3><p>If the main operator allows it, the service is going to shown at the top a tab to access the test and diagnostic of the service..</p><p><img src="'+n+'" alt="Rubik Service Test and diagnostics"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The <strong>diagnostics</strong> are passive, meaning they just ask for the information related with the service, like a configuration test or the optical signal.</p><p>The <strong>actions</strong> are done on the customer&#39;s device and can be, for example, restarting the ONT. In order for it to be executed we must confirm the action by clicking the button.</p></div>',44),g=[p];function m(v,u){return c(),l("div",null,g)}const k=a(d,[["render",m],["__file","services.html.vue"]]),w=JSON.parse(`{"path":"/krill2/rubik/services.html","title":"Rubik | Services","lang":"en-US","frontmatter":{"title":"Rubik | Services","description":"Tool for managing networks mutualized with other operators.","lang":"en-US","prev":"/krill2/rubik/","next":"/krill2/rubik/trouble-tickets","tags":["krill2","module","rubik","mutualized","services","bitstream"]},"headers":[{"level":2,"title":"Service's creation","slug":"service-s-creation","link":"#service-s-creation","children":[{"level":3,"title":"Get coverage","slug":"get-coverage","link":"#get-coverage","children":[]},{"level":3,"title":"Customer data","slug":"customer-data","link":"#customer-data","children":[]},{"level":3,"title":"Summary","slug":"summary","link":"#summary","children":[]}]},{"level":2,"title":"Service's edition","slug":"service-s-edition","link":"#service-s-edition","children":[{"level":3,"title":"Events history","slug":"events-history","link":"#events-history","children":[]},{"level":3,"title":"Trouble Tickets","slug":"trouble-tickets","link":"#trouble-tickets","children":[]},{"level":3,"title":"Test & Diagnostics","slug":"test-diagnostics","link":"#test-diagnostics","children":[]}]}],"git":{"updatedTime":1690298084000},"filePathRelative":"krill2/rubik/services.md"}`);export{k as comp,w as data};
