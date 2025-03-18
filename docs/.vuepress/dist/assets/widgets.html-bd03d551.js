import{_ as a,o as n,c as s,a as e}from"./app-76bc6cb4.js";const t={},o=e(`<h1 id="widgets" tabindex="-1"><a class="header-anchor" href="#widgets"><span>Widgets</span></a></h1><h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion"><span>Introducción</span></a></h2><p>Un widget es un pequeño componente de software que se puede integrar en una página web o contenedor HTML dentro de otra aplicación para proporcionar una funcionalidad específica.</p><p>Éstos se pueden insertar en una página web utilizando el elemento HTML <code>iframe</code>. Un iframe es un elemento HTML que se utiliza para insertar contenido externo en una página web, como un video de YouTube o un mapa de Google Maps.</p><p>Los widgets proporcionan funciones específicas. Al utilizar un widget, los desarrolladores pueden integrar fácilmente estas funciones en sus propias páginas web sin tener que escribir código adicional.</p><p>Un ejemplo de iframe sería:</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Ejemplo de iFrame<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Contenido de la página principal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Alguno texto aquí.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.example.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>800<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600<span class="token punctuation">&quot;</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Alguno texto aquí después del iFrame.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="widget-graphs" tabindex="-1"><a class="header-anchor" href="#widget-graphs"><span>Widget Graphs</span></a></h2><p>Endpoint: <code>/widgets/monitoring/graphs/{graphType}/</code>:</p><p>Tipos de graficas:</p><ul><li><code>bandwidth</code></li><li><code>txrx</code> (solo tecnología GPON)</li><li><code>upstream</code> (solo tecnología DOCSIS)</li><li><code>downstream</code> (solo tecnología DOCSIS)</li><li><code>qos</code> (solo tecnología DOCSIS)</li></ul><p>Parámetros de consulta:</p><ul><li><code>token</code> (obligatorio): extraído de la solicitud de la API al inicio de sesión o del almacenamiento local persistente del navegador <code>app_token</code></li><li><code>host_name</code> (obligatorio): nombre del host <code>cpe23133</code> (DOCSIS) o <code>cpe115087</code> (GPON)</li><li><code>realtime</code> (predeterminado: <strong>false</strong>): datos de la información en tiempo real o del historial de Influx</li><li><code>start</code> (predeterminado: <strong>1d</strong>): si no es en tiempo real, período de tiempo desde el inicio de la solicitud para el conjunto de datos</li><li><code>end</code> (predeterminado: <strong>0m</strong>): si no es en tiempo real, período de tiempo hasta el final de la solicitud para el conjunto de datos</li><li><code>refresh</code> (predeterminado: <strong>60 secs</strong>): si es en tiempo real, valor para el intervalo de actualización entre solicitudes (en segundos)</li></ul><p>Periodos de tiempo:</p><ul><li>Los periodos de tiempo están en magnitud y unidad, como <code>24h</code> o <code>7d</code></li><li>Unidades válidas: <code>M</code> para meses, <code>d</code> para días, <code>h</code> para horas and <code>m</code> para minutos</li></ul><p>Ejemplos:</p><ul><li>Gráfica de ancho de banda en tiempo real para el cpe23133 con actualización cada 30 segundos: <code>/widgets/monitoring/graphs/bandwidth/?host_name=cpe23133&amp;realtime=true&amp;refresh=30&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo</code></li><li>Gráfica de &quot;Downstream&quot; para el cpe23133 de DOCSIS de los últimos 7 días: <code>/widgets/monitoring/graphs/downstream/?host_name=cpe23133&amp;start=7d&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo</code></li><li>Gráfica de &quot;TxRx&quot; para el cpe115087 de GPON de las últimas 24 horas: <code>/widgets/monitoring/graphs/txrx/?host_name=cpe115087&amp;start=24h&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo</code></li></ul><h2 id="widget-device" tabindex="-1"><a class="header-anchor" href="#widget-device"><span>Widget Device</span></a></h2><p>Endpoints: <code>/widgets/monitoring/device/</code>:</p><p>Parámetros de consulta:</p><ul><li><code>token</code> (obligatorio): extraído de la solicitud de la API al inicio de sesión o del almacenamiento local persistente del navegador <code>app_token</code></li><li><code>host_name</code> (obligatorio): nombre del host <code>cpe23133</code> (DOCSIS) o <code>cpe115087</code> (GPON)</li></ul><p>Ejemplos:</p><ul><li>Representación del dispositivo para el cpe8317: <code>/widgets/monitoring/device/?host_name=cpe8317&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzcxNjkzLCJpYXQiOjE2ODA2ODUyOTMsImp0aSI6ImU1NzdlNjc1OGU5YTQ2ODhhNmMwZjEwNDE0ODUwMTNkIiwidXNlcl9pZCI6NX0.mUJQ3EiHfMTKnKrZSYApJ-9VAOJJmMLv7zr1aeN2uYo</code></li></ul>`,23),i=[o];function p(l,c){return n(),s("div",null,i)}const r=a(t,[["render",p],["__file","widgets.html.vue"]]),u=JSON.parse('{"path":"/es/krill2/widgets.html","title":"Widgets","lang":"es-ES","frontmatter":{"title":"Widgets","description":"Krill 2 Widgets.","lang":"es-ES","sidebar":"auto","sidebarDepth":2,"prev":"postman","next":null,"tags":["krill2","widgets"]},"headers":[{"level":2,"title":"Introducción","slug":"introduccion","link":"#introduccion","children":[]},{"level":2,"title":"Widget Graphs","slug":"widget-graphs","link":"#widget-graphs","children":[]},{"level":2,"title":"Widget Device","slug":"widget-device","link":"#widget-device","children":[]}],"git":{"updatedTime":1682058157000},"filePathRelative":"es/krill2/widgets.md"}');export{r as comp,u as data};
