import{_ as s,c as n,o as a,a as l}from"./app.12c66922.js";const b=JSON.parse('{"title":"Node 二进制","description":"","frontmatter":{},"headers":[{"level":2,"title":"Buffer","slug":"buffer","link":"#buffer","children":[]},{"level":2,"title":"内存分配","slug":"内存分配","link":"#内存分配","children":[]},{"level":2,"title":"Buffer转换","slug":"buffer转换","link":"#buffer转换","children":[]},{"level":2,"title":"Buffer拼接","slug":"buffer拼接","link":"#buffer拼接","children":[]}],"relativePath":"other/node-buffer.md","lastUpdated":1679651658000}'),e={name:"other/node-buffer.md"},p=l(`<h1 id="node-二进制" tabindex="-1">Node 二进制 <a class="header-anchor" href="#node-二进制" aria-hidden="true">#</a></h1><h2 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-hidden="true">#</a></h2><ol><li>Buffer是一个Array的结构对象，但它主要用于操作字节</li><li>专门存放二进制数据的缓存区</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> buf </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Buffer</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> buf.length </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> 通过buf[</span><span style="color:#AE81FF;">10</span><span style="color:#F8F8F2;">]访问下标为10的元素</span></span>
<span class="line"><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> 通过buf[</span><span style="color:#AE81FF;">10</span><span style="color:#F8F8F2;">] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> 100设置下标为10的元素</span></span>
<span class="line"><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> buffer赋值不得超过255，超过则逐次减256，小于0则逐次加256</span></span>
<span class="line"><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> 直到得到0 </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;"> 255区间的数值，如果是小数，则舍弃小数部分，保留整数部分</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="内存分配" tabindex="-1">内存分配 <a class="header-anchor" href="#内存分配" aria-hidden="true">#</a></h2><ol><li>采用c++层面实现的内存申请，采用动态内存管理机制</li><li>slab动态内存管理机制 <ol><li>full：完全分配状态</li><li>partial：部分分配状态</li><li>empty：没有被分配状态</li></ol></li><li>Node以8kb为界限来区分buffer是大对象还是小对象 <ol><li>小对象 <ol><li>创建新申请的slowbuffer对象，在小于8kb内使用这个slowbuffer</li><li>使用new Buffer(1024)，构造会去检测空间是否足够，若不够则会创建一个新的slab空间用来存储</li></ol></li><li>大对象 <ol><li>如果单个buffer超过8kb，则直接分配一个slowbuffer对象作为slab单元，由这个大buffer单独占用</li></ol></li></ol></li></ol><h2 id="buffer转换" tabindex="-1">Buffer转换 <a class="header-anchor" href="#buffer转换" aria-hidden="true">#</a></h2><ol><li>ascll：基于拉丁字母的编码，主要用于显示英语和其他西欧语言</li><li>utf-8(unicode编码)：一个字节表示1byte = 8Bit/16Bit</li><li>utf-16/ucs-2：针对于unicode的一种可变长度字符编码，统一世界上所有文字和标志，由utf-8和utf-16这两个标准实现unicode字符集</li><li>base64：传输8Bit字节码，基于64个可打印字符来表示二进制数据，需要解码后才能阅读</li><li>binary(二进制)：由0 1 组成的二进制运算</li><li>hex：代表十六进制数值</li><li>字符串转buffer：new Buffer(str, [encoding])</li><li>buffer转字符串：buf.toString([encoding], [start], [end])</li></ol><h2 id="buffer拼接" tabindex="-1">Buffer拼接 <a class="header-anchor" href="#buffer拼接" aria-hidden="true">#</a></h2><ol><li>通过fs模块的createReadStream获取文件，通过 + 写入字符串等</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> rs </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> fs.</span><span style="color:#A6E22E;">createReadStream</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;test.txt&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">rs.</span><span style="color:#A6E22E;">setEncoding</span><span style="color:#F8F8F2;">(‘utf</span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">8</span><span style="color:#F8F8F2;">’)</span></span>
<span class="line"><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> 以上操作常用于流读取，编码成utf</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">8编码的字符</span></span>
<span class="line"><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> 正确的拼接方式（放弃上面的setEncoding方式）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">rs.</span><span style="color:#A6E22E;">on</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;data&#39;</span><span style="color:#F8F8F2;">, (</span><span style="color:#FD971F;font-style:italic;">chunk</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    chunks.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(chunk)</span></span>
<span class="line"><span style="color:#F8F8F2;">    size</span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> chunk.length</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">rs.</span><span style="color:#A6E22E;">on</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;end&#39;</span><span style="color:#F8F8F2;">, () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> buf </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Buffer.</span><span style="color:#A6E22E;">concat</span><span style="color:#F8F8F2;">(chunks, size)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> str </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> iconv.</span><span style="color:#A6E22E;">decode</span><span style="color:#F8F8F2;">(buf, </span><span style="color:#E6DB74;">&#39;utf-8&#39;</span><span style="color:#F8F8F2;">)   </span><span style="color:#88846F;">// 通过iconv-lite模块转码</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>buffer的传输性能高于字符串传输 2 / 1 通过设置highWaterMark对读取文件的性能至关重要，值越大读取速度越快</p>`,12),o=[p];function r(t,c,i,F,f,y){return a(),n("div",null,o)}const d=s(e,[["render",r]]);export{b as __pageData,d as default};
