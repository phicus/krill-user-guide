import{_ as n,a as o,b as r,c as a,d as l,e as p,f as c}from"./admin-users-realm-515b9a61.js";import{_ as m,r as u,o as d,c as h,b as e,d as s,e as g,a as t}from"./app-d7d7d7e0.js";const f={},v=e("p",null,[e("strong",null,[s("Creating a User for Krill through the "),e("code",null,"/admin"),s(" Panel")])],-1),w=e("p",null,"Access the admin panel:",-1),_={href:"https://XXX.phicus.es/admin",target:"_blank",rel:"noopener noreferrer"},y=e("strong",null,"Krill",-1),C=e("p",null,[e("img",{src:n,alt:""})],-1),E=t('<li><p>Once inside, we will see this panel:</p><p><img src="'+o+'" alt=""></p></li><li><p>We go to Users, where we can see all the users we have created:</p><p><img src="'+r+'" alt=""></p></li><li><p>At the top right, we can add a new user using &quot;Add User&quot;:</p><p><img src="'+a+'" alt=""></p><p>This screen appears, where we must enter the Username and the password twice.</p></li><li><p>Once we have created the user, we can manage the permissions:</p><p><img src="'+l+'" alt=""></p></li><li><p>After this, we must grant permissions to the corresponding realm, as the network can be divided into realms, and each of these has different visibility.</p><p>Let’s assume that the realm to be modified is the main and default one, called &quot;cpe&quot;:</p><p><img src="'+p+'" alt=""></p></li>',5),P=t('<p>Once we see this image, we need to enter the realm itself, in this case by clicking on &quot;1&quot;, to manage the different users who have access to the realm:</p><p><img src="'+c+'" alt=""></p><p>Here, we can insert the different users who have permission to view the CPE Realm. The process would be exactly the same for any realm.</p><p><strong>Explanation of Groups and Permissions in the Administration Panel</strong></p><p><strong>Groups</strong></p><p><strong>APP</strong></p><p>Applications are specific modules within your system that offer different functionalities. Each application handles a particular part of the system.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><ul><li><strong>APP inventory</strong>: Manages everything related to inventory, such as products, stock, and goods in/out.</li><li><strong>APP voip</strong>: Manages VoIP (Voice over IP) services, handling calls and voice communications over the Internet.</li></ul></div><p><strong>HG (Host Groups)</strong></p><p>Host groups are collections of devices or services managed together. These groups allow organizing and monitoring different components of the infrastructure.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><ul><li><strong>HG CORE Servers</strong>: Includes all the main servers of the system, essential for the network and services to function.</li><li><strong>HG CORE Router</strong>: Groups all central routers, crucial for data traffic management.</li></ul></div><p><strong>Realm</strong></p><p>Realms are specific domains within the system that group similar devices or services, facilitating their management and monitoring.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><ul><li><strong>realm:cpeethernet</strong>: Refers to the domain of CPE (Customer Premises Equipment) devices using Ethernet technology.</li><li><strong>realm:swtdocsis</strong>: Includes devices in the SWT Realm that use DOCSIS technology for data transmission over coaxial cable.</li></ul></div><p><strong>Permissions</strong></p><p><strong>Permission Structure</strong></p><p>Each permission is presented in the format &#39;application | model | action&#39;.</p><ul><li><strong>Application</strong>: The part of the system where the permission is applied (e.g., account, admin).</li><li><strong>Model</strong>: The type of data or entity to which the permission applies (e.g., email address, user).</li><li><strong>Action</strong>: The operation that is allowed, such as add (add), change (change), delete (delete), or view (view).</li></ul><p><strong>Permission Examples</strong></p><ul><li><strong>account | email address | Can add email address</strong>: Allows the user to add a new email address in the account application.</li><li><strong>auth | user | Can change user</strong>: Allows the user to modify other users&#39; data in the authentication application.</li><li><strong>icingadb | hostgroup | Can monitor CORE Servers</strong>: Allows the user to monitor the main servers in the CORE host group.</li><li><strong>isp | Customer | Can view Customer</strong>: Allows the user to view customer data in the ISP (Internet Service Provider) application.</li></ul><p><strong>Functioning</strong></p><p><strong>Assigning Permissions</strong></p><p>Each user in your system can be assigned various permissions. These permissions determine what actions they can perform within the specific system applications.</p><ul><li>Example: A user with the &#39;Can view email address&#39; permission can view email addresses but cannot modify or delete them.</li></ul><p><strong>User Groups</strong></p><p>Users can be grouped into &#39;Groups&#39; that have a common set of permissions. This facilitates permission management for multiple users who need the same accesses. Instead of assigning permissions individually to each user, they are assigned to a group, and users are added to this group.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><ul><li><strong>Support Group</strong>: Could have permissions such as &#39;Can view Customer&#39; and &#39;Can view isp&#39;. All users in the Support Group will inherit these permissions.</li><li><strong>Administrators Group</strong>: Would have broader permissions, such as &#39;Can add user&#39;, &#39;Can delete user&#39;, &#39;Can view all data&#39;, allowing full system management.</li></ul></div>',27);function A(x,b){const i=u("ExternalLinkIcon");return d(),h("div",null,[v,e("ol",null,[e("li",null,[w,e("p",null,[s("To do this, we need to go to "),e("a",_,[s("https://XXX.phicus.es/admin"),g(i)]),s(" using the credentials we usually use for "),y,s(".")]),C]),E]),P])}const G=m(f,[["render",A],["__file","create-users.html.vue"]]),T=JSON.parse('{"path":"/krill2/create-users.html","title":"Create users","lang":"en-US","frontmatter":{"title":"Create users","description":"Create a user through the `/admin` panel.","lang":"en-US","prev":"login","next":"users","tags":["krill2","create users","oauth"]},"headers":[],"git":{"updatedTime":1721656167000},"filePathRelative":"krill2/create-users.md"}');export{G as comp,T as data};
