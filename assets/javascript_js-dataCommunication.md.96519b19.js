import{_ as s,c as n,o as a,a as e}from"./app.78757e7a.js";const d=JSON.parse('{"title":"JavaScript Communication","description":"","frontmatter":{},"headers":[{"level":2,"title":"Web Workers","slug":"web-workers","link":"#web-workers","children":[]},{"level":2,"title":"AJAX","slug":"ajax","link":"#ajax","children":[]},{"level":2,"title":"Fetch","slug":"fetch","link":"#fetch","children":[]},{"level":2,"title":"WebSocket","slug":"websocket","link":"#websocket","children":[]},{"level":2,"title":"EventSource","slug":"eventsource","link":"#eventsource","children":[]}],"relativePath":"javascript/js-dataCommunication.md","lastUpdated":1669992391000}'),p={name:"javascript/js-dataCommunication.md"},l=e(`<h1 id="javascript-communication" tabindex="-1">JavaScript Communication <a class="header-anchor" href="#javascript-communication" aria-hidden="true">#</a></h1><h2 id="web-workers" tabindex="-1">Web Workers <a class="header-anchor" href="#web-workers" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><ol><li>workers \u5F00\u542F\u4E00\u4E2A\u65B0\u7EBF\u7A0B\uFF0C\u8FD0\u884C\u5728\u53E6\u4E00\u4E2A\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D</li><li>\u5141\u8BB8JavaScript\u521B\u5EFA\u591A\u4E2A\u5B50\u7EBF\u7A0B\uFF0C\u5B50\u7EBF\u7A0B\u5B8C\u5168\u53D7\u4E3B\u7EBF\u7A0B\u63A7\u5236\uFF0C\u4E0D\u5F97\u64CD\u4F5CDOM\uFF0C\u4E0D\u5F97\u4F7F\u7528window</li><li>\u7528\u6765\u5904\u7406\u5F02\u6B65\u4E8B\u4EF6\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u6BD4\u8F83\u8017\u65F6\u7684\u4E8B\u4EF6</li><li>workers \u53EF\u4EE5\u4F9D\u6B21\u751F\u6210\u65B0\u7684 workers</li><li>postMessage() \u65B9\u6CD5\u53D1\u9001\u6D88\u606F\uFF0Conmessage \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6765\u54CD\u5E94\u6D88\u606F</li><li>worker \u7684\u4E00\u4E2A\u4F18\u52BF\u5728\u4E8E\u80FD\u591F\u6267\u884C\u5904\u7406\u5668\u5BC6\u96C6\u578B\u7684\u8FD0\u7B97\u800C\u4E0D\u4F1A\u963B\u585E UI \u7EBF\u7A0B</li><li>\u5728\u4E3B\u9875\u9762\u4E0E worker \u4E4B\u95F4\u4F20\u9012\u7684\u6570\u636E\u662F\u901A\u8FC7 \u62F7\u8D1D \uFF0C\u800C\u4E0D\u662F \u5171\u4EAB \u6765\u5B8C\u6210\u7684</li><li>\u4F20\u9012\u7ED9 worker \u7684\u5BF9\u8C61\u9700\u8981\u7ECF\u8FC7\u5E8F\u5217\u5316\uFF0C\u63A5\u4E0B\u6765\u5728\u53E6\u4E00\u7AEF\u8FD8\u9700\u8981\u53CD\u5E8F\u5217\u5316\uFF0C<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm" target="_blank" rel="noreferrer">\u7ED3\u6784\u5316\u514B\u9686\u7B97\u6CD5</a></li></ol></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#88846F;">// index.js</span></span>
<span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> myWorker </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Worker</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;./worker.js&quot;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">myWorker.</span><span style="color:#A6E22E;">postMessage</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">myWorker.</span><span style="color:#A6E22E;">onmessage</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;">e</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(e.data);</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// worker.js</span></span>
<span class="line"><span style="color:#A6E22E;">onmessage</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;">e</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// workers \u4E5F\u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u7684 close \u65B9\u6CD5\u8FDB\u884C\u5173\u95ED</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">close</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">postMessage</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;\u6536\u5230\u5566: &quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> e.data);</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"><span style="color:#88846F;">// \u7EC8\u6B62 worker\uFF0C\u7ACB\u5373\u6740\u6B7B</span></span>
<span class="line"><span style="color:#F8F8F2;">myWorker.</span><span style="color:#A6E22E;">terminate</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Worker" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Worker</a></p><h2 id="ajax" tabindex="-1">AJAX <a class="header-anchor" href="#ajax" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><p>Asynchronous JavaScript + XML (\u5F02\u6B65 JavaScript \u548C XML)<br> \u4E0D\u9700\u8981\u91CD\u8F7D (\u5237\u65B0) \u6574\u4E2A\u9875\u9762\u5219\u53EF\u4EE5\u66F4\u65B0\u7F51\u9875\u90E8\u5206\u5185\u5BB9</p></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">var</span><span style="color:#F8F8F2;"> oReq </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">XMLHttpRequest</span><span style="color:#F8F8F2;">();    </span><span style="color:#88846F;">// new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;) IE\u8001\u7248\u672C\u4F7F\u7528\u7684\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.</span><span style="color:#A6E22E;">open</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;post&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&quot;https://www.runoob.com/try/ajax/ajax_info&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">// i1=qwe&amp;i2=join\uFF0C\u8868\u5355\u6570\u636E\u88AB\u7F16\u7801\u6210\u4EE5 &#39;&amp;&#39; \u5206\u9694\u7684\u952E - \u503C\u5BF9\uFF0C\u540C\u65F6\u4EE5 &#39;=&#39; \u5206\u9694\u952E\u548C\u503C\uFF0C\u7B26\u53F7\u4F1A\u88AB\u7F16\u7801</span></span>
<span class="line"><span style="color:#88846F;">// oReq.setRequestHeader(&#39;Content-Type&#39;, &#39;application/x-www-form-urlencoded&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// name: (\u4E8C\u8FDB\u5236) name1: join\uFF0C\u4E0D\u8981\u8BBE\u7F6E\u6B64\u7C7B\u8BF7\u6C42\u5934\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u8BC6\u522B \u6587\u4EF6\u6D41 \u5E76\u8BBE\u7F6E\u8BF7\u6C42\u5934</span></span>
<span class="line"><span style="color:#88846F;">// oReq.setRequestHeader(&#39;Content-Type&#39;, &#39;multipart/form-data&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// {name: &#39;join&#39;}\uFF0C\u8981\u4F7F\u7528JSON.stringify({name: &#39;join&#39;})</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.</span><span style="color:#A6E22E;">setRequestHeader</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;Content-Type&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;application/json&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// load \u4F20\u8F93\u5B8C\u6210\uFF0C\u6240\u6709\u6570\u636E\u4FDD\u5B58\u5728 response \u4E2D</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.</span><span style="color:#A6E22E;">addEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;load&quot;</span><span style="color:#F8F8F2;">, (</span><span style="color:#FD971F;">e</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;">=&gt;</span><span style="color:#F8F8F2;"> console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(oReq));</span></span>
<span class="line"><span style="color:#88846F;">// progress \u6570\u636E\u91CF\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4E0B\u8F7D\u8FDB\u5EA6\uFF0C\u4E0B\u8F7D\u548C\u4E0A\u4F20</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.</span><span style="color:#A6E22E;">addEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;progress&quot;</span><span style="color:#F8F8F2;">, (</span><span style="color:#FD971F;">e</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// lengthComputable \u6570\u636E\u91CF\u53EF\u8BA1\u7B97</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// loaded   \u5DF2\u7ECF\u6267\u884C\u7684\u6570\u636E\u91CF</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// total    \u6570\u636E\u603B\u91CF</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(oReq)</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span>
<span class="line"><span style="color:#88846F;">// \u4E0A\u4F20\u76F8\u5173\u4E8B\u4EF6\uFF0C\u7528\u6765\u8868\u793A\u4E0A\u4F20\u7684\u8FDB\u5EA6</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.upload.</span><span style="color:#A6E22E;">addEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;progress&quot;</span><span style="color:#F8F8F2;">, console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(oReq));</span></span>
<span class="line"><span style="color:#88846F;">// \u8FDC\u7A0B\u5185\u5BB9\u83B7\u53D6\u5230\u4E00\u4E2A\u5B58\u50A8\u539F\u751F\u4E8C\u8FDB\u5236\u6570\u636E\u7684 ArrayBuffer \u5BF9\u8C61\u4E2D</span></span>
<span class="line"><span style="color:#88846F;">// oReq.responseType = &quot;arraybuffer&quot;</span></span>
<span class="line"><span style="color:#88846F;">// \u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2</span></span>
<span class="line"><span style="color:#88846F;">// oReq.timeout = 2000</span></span>
<span class="line"><span style="color:#88846F;">// \u7EC8\u6B62\u8BE5\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#88846F;">// oReq.abort()</span></span>
<span class="line"><span style="color:#88846F;">// \u8BF7\u6C42readyState\u72B6\u6001\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1 0: \u672A\u521D\u59CB\u5316\uFF1B1: \u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\uFF1B2: \u8BF7\u6C42\u5DF2\u63A5\u53D7\uFF1B3: \u8BF7\u6C42\u5904\u7406\u4E2D\uFF1B4: \u8BF7\u6C42\u5DF2\u5B8C\u6210</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.</span><span style="color:#A6E22E;">onreadystatechange</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;">=&gt;</span><span style="color:#F8F8F2;"> { oReq.readyState }</span></span>
<span class="line"><span style="color:#88846F;">// \u6D4F\u89C8\u5668\u8FD4\u56DE\u7684\u72B6\u6001\u7801\uFF0C200 ok, 404 not found</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> formData </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">FormData</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">formData.</span><span style="color:#A6E22E;">append</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;name&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Blob</span><span style="color:#F8F8F2;">([</span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ArrayBuffer</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">)]))</span></span>
<span class="line"><span style="color:#F8F8F2;">formData.</span><span style="color:#A6E22E;">append</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;name1&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&#39;join&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">oReq.</span><span style="color:#A6E22E;">send</span><span style="color:#F8F8F2;">(JSON.</span><span style="color:#A6E22E;">stringify</span><span style="color:#F8F8F2;">({name: </span><span style="color:#E6DB74;">&#39;join&#39;</span><span style="color:#F8F8F2;">}));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest</a></p><h2 id="fetch" tabindex="-1">Fetch <a class="header-anchor" href="#fetch" aria-hidden="true">#</a></h2><p>JavaScript\u7684api\u63A5\u53E3\uFF0C\u7528\u4E8E\u8BBF\u95EE\u548C\u64CD\u4F5CHTTP\u8BF7\u6C42\uFF08\u73B0\u4EE3\u901A\u7528\u65B9\u6CD5\uFF09</p><p>fetch(url)</p><p>.then((response) =&gt; { return response.json()})</p><p>.then((myjson) =&gt; { console.log(myjson)})</p><p>\u9700\u8981json()\u65B9\u6CD5\uFF0C\u8F6C\u6362\u54CD\u5E94\u7684\u6570\u636E</p><p>fetch(url,options)</p><p>options\u5305\u542B\u4E00\u4E9B\u53EF\u9009\u53C2\u6570</p><p>body\uFF1AJSON.stringify(data), // \u53D1\u9001\u4E3B\u4F53\u6570\u636E</p><p>headers:{ // \u8BBE\u7F6E\u8BF7\u6C42\u5934</p><p>&#39;user-agent&#39;: &#39;Mozilla/4.0 MDN Example&#39;,</p><p>&#39;content-type&#39;: &#39;application/json&#39;</p><p>// Formdata\u5BF9\u8C61\uFF0C\u8BBE\u7F6E\u4E3Aapplication/x-www-form-urlencoded</p><p>}</p><p>method: &#39;POST&#39;\uFF0C</p><p>mode: &#39;cors&#39;, // \u5141\u8BB8\u8DE8\u57DF\uFF08cors || same-origin || no-cors\uFF09</p><p>credentials: &#39;include || same-origin&#39;</p><p>\u8BA9\u6D4F\u89C8\u5668\u53D1\u9001\u5305\u542B\u51ED\u636E\u7684\u8BF7\u6C42\uFF08\u8DE8\u57DF\u6E90\uFF09\u4F7F\u5176\u8DE8\u57DF</p><p>\u53EA\u5728\u540C\u4E00\u6E90\u65F6\u53D1\u9001\u51ED\u8BC1</p><p><strong>\u4E0A\u4F20\u6587\u4EF6FormData</strong></p><p>new FormData() // \u53EF\u4EE5\u904D\u5386\u952E\u503C</p><p>append(&#39;username&#39;, &#39;abc123&#39;) // key\uFF0Cvalue</p><p>append(files, filed.files[0])</p><p>set(name, value1)</p><p>\u8BBE\u7F6Ekey\uFF0Cvalue\uFF08\u8BE5\u65B9\u6CD5\u4F1A\u79FB\u9664\u76F8\u540C\u7684name\u5B57\u6BB5\uFF0C\u800Cappend\u4E0D\u4F1A\uFF09</p><p>set(name. blob, fileName)</p><p>delete(name)</p><p>get(name)</p><p>has(name)</p><p>\u5728fetch\u4E2D\u4F7F\u7528formdata\uFF0C\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u8BF7\u6C42\u5934\uFF0C\u4E0D\u7528\u624B\u52A8\u8BBE\u7F6Econtent-type</p><p><strong>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5BF9\u8C61</strong></p><p>new Request(url, options)</p><p>\u653E\u5728fetch()\u4E2D\uFF0C\u6784\u6210\u5BF9\u5E94\u7684url\u548Coptions</p><p><strong>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934</strong></p><p>new Headers({</p><p>&#39;Content-Type&#39;: &#39;text/plain&#39;</p><p><code></code>})</p><p>headers.has(&#39;Content-type&#39;)\uFF1A\u5224\u65AD\u662F\u5426\u6709\u8BE5\u8BF7\u6C42\u5934</p><p>headers.set(&#39;Content-type&#39;,&#39;text/html&#39;)\uFF1A\u8BBE\u7F6E\u8BF7\u6C42\u5934</p><p>headers.append(&#39;Content-Type&#39;,\u2018value\u2019)\uFF1A\u8FFD\u52A0\u8BF7\u6C42value</p><p>headers.get(&#39;Content-Length&#39;)\uFF1A\u83B7\u53D6\u8BE5\u8BF7\u6C42\u5934\u7684\u957F\u5EA6</p><p>headers.getAll(&#39;Content-type&#39;)\uFF1A\u83B7\u53D6\u8BE5\u8BF7\u6C42\u5934\u7684value</p><p>headers.delete(&#39;Content-type&#39;)\uFF1A\u5220\u9664\u8BE5\u8BF7\u6C42\u5934\u7684value</p><p><strong>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BBE\u7F6E\u6210fetch\u8BF7\u6C42\u5934</strong></p><p>response</p><p>fetch\u7684\u8BF7\u6C42\u72B6\u6001\u5F02\u5E38\u4E0D\u4F1A\u62A5\u9519error\uFF08\u4F1A\u662F404\u548C500\uFF09</p><p>response.body</p><p>response.text()\uFF1A\u8BFB\u53D6response\uFF0C\u5E76\u4EE5\u6587\u672C\u5F62\u5F0F\u8FD4\u56DEresponse</p><p>response.json()\uFF1A\u8BFB\u53D6response\uFF0C\u89E3\u6790\u4E3AJSON</p><p>response.formData()\uFF1A\u4EE5Formdata\u5BF9\u8C61\u7684\u5F62\u5F0F\u8FD4\u56DEresponse</p><p>response.blob()\uFF1A\u4EE5Blob\uFF08\u5177\u6709\u7C7B\u578B\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF09\u5F62\u5F0F\u8FD4\u56DEresponse</p><p>response.arrayBuffer()\uFF1A\u4EE5arrayBuffer\uFF08\u4F4E\u7EA7\u522B\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF09\u5F62\u5F0F\u8FD4\u56DEresponse</p><p>response.header</p><p>response.headers.get(&#39;Content-Type&#39;)</p><h2 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h2><p>\u662F\u4E00\u79CD\u5728\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5EFA\u7ACB\u6301\u4E45\u6301\u7EED\u8FDE\u63A5\u7684\u73B0\u4EE3\u65B9\u5F0F</p><p>websocket\u6CA1\u6709\u8DE8\u57DF\u9650\u5236\uFF0C\u53EF\u4EE5\u53D1\u9001/\u63A5\u6536\u5B57\u7B26\u4E32\u548C\u4E8C\u8FDB\u5236\u6570\u636E</p><p>let socket = <strong>new WebSocket</strong>(&quot;<strong>ws</strong>\u{1F615}/localhost:8080&quot;)</p><p>\u6253\u5F00\u4E00\u4E2Awebsocket\u8FDE\u63A5</p><p><strong>wss</strong>\u{1F615}/</p><p>\u53EF\u4EE5\u4F7F\u7528\u8BE5\u534F\u8BAE\uFF0C\u8BE5\u534F\u8BAE\u662F\u88AB\u52A0\u5BC6\u7684\uFF0C\u800C\u4E14\u66F4\u53EF\u9760</p><p><strong>\u5C5E\u6027\u4E8B\u4EF6</strong></p><p>socket.<strong>onopen</strong>\uFF1A\u8FDE\u63A5\u5DF2\u5EFA\u7ACB</p><p>\u53EF\u4EE5\u5728\u6B64\u5904\u53D1\u9001\u6D88\u606F</p><p>socket.<strong>send</strong>(data)</p><p>socket.<strong>onmessage</strong>\uFF1A\u63A5\u6536\u670D\u52A1\u7AEF\u53D1\u9001\u7684\u6570\u636E</p><p>socket.<strong>onerror</strong>\uFF1Awebsocket\u53D1\u751F\u9519\u8BEF</p><p>socket.<strong>onclose</strong>\uFF1A\u8FDE\u63A5\u5DF2\u5173\u95ED</p><p>\u8FDE\u63A5\u5173\u95ED\u53EF\u80FD\u662F\u5BA2\u6237\u7AEF\u4E3B\u52A8\u5173\u95ED\uFF0C\u4E5F\u53EF\u80FD\u662F\u670D\u52A1\u7AEF\u4E3B\u52A8\u5173\u95ED</p><p>socket.<strong>close</strong>(code, description)</p><p>\u6570\u5B57\u72B6\u6001\u7801\uFF0C\u89E3\u6790\u8FDE\u63A5\u5173\u95ED\u539F\u56E0</p><p>\u5BF9\u8FDE\u63A5\u5173\u95ED\u7684\u63CF\u8FF0</p><p><strong>\u5C5E\u6027</strong></p><p>socket.bufferedAmount</p><p>\u8FD4\u56DE\u5DF2\u7ECF\u88ABsocket.send()\u653E\u5165\u961F\u5217\u4E2D\uFF0C\u4F46\u8FD8\u6CA1\u6709\u88AB\u53D1\u9001\u5230\u7F51\u7EDC\u7684\u6570\u636E\u5B57\u8282\u6570</p><p>\u5982\u679C\u4E0D\u65AD\u8C03\u7528send(),\u5219\u8BE5\u5C5E\u6027\u503C\u4F1A\u6301\u7EED\u589E\u957F</p><p>socket.url</p><p>\u8FD4\u56DE\u503C\u4E3A\u6784\u9020\u51FD\u6570<strong>\u521B\u5EFAwebsocket\u5B9E\u4F8B\u5BF9\u8C61\u65F6\u7684URL</strong></p><p>socket.readyState</p><p>\u8FD4\u56DE\u5F53\u524Dwebsocket\u7684\u94FE\u63A5\u72B6\u6001</p><p><strong>\u5FC3\u8DF3\u91CD\u8FDE</strong></p><p>websocket \u4E00\u822C \u6BCF\u969490\u79D2\u65E0\u64CD\u4F5C\u5219\u4F1A\u81EA\u52A8\u65AD\u5F00\uFF0C\u9700\u8981\u52A0\u5165\u4E00\u4E2A\u5FC3\u8DF3\u673A\u5236\u9632\u6B62\u81EA\u65AD</p><p>\u5C31\u662F\u8BBE\u7F6E\u5B9A\u65F6\u5668setInterval\uFF0C\u6301\u7EEDsocket.send()\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u6D88\u606F</p><p>1</p><h2 id="eventsource" tabindex="-1">EventSource <a class="header-anchor" href="#eventsource" aria-hidden="true">#</a></h2><p><strong>websocket\u6709\u4EE5\u4E0B\u51E0\u70B9\u4E0D\u540C\uFF1A</strong></p><p>SSE\u662F\u4F7F\u7528http\u534F\u8BAE\uFF0C\u800Cwebsocket\u662F\u4E00\u79CD\u5355\u72EC\u7684\u534F\u8BAE</p><p>SSE\u662F\u5355\u5411\u4F20\u8F93\uFF0C\u53EA\u80FD\u670D\u52A1\u7AEF\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\uFF0Cwebsocket\u662F\u53CC\u5411</p><p>SSE\u652F\u6301\u65AD\u70B9\u7EED\u4F20\uFF0Cwebsocket\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0</p><p>SSE\u652F\u6301\u53D1\u9001\u81EA\u5B9A\u4E49\u7C7B\u578B\u6D88\u606F</p>`,99),o=[l];function r(t,c,F,i,y,b){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{d as __pageData,m as default};
