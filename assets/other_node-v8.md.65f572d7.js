import{_ as l,c as s,o as a,O as o}from"./chunks/framework.d7e37bdc.js";const n="/assets/v8_new.b97d318d.png",i="/assets/v8_new_one.4eb65120.png",e="/assets/v8_new_two.34dc046b.png",p="/assets/v8_old_one.396b297f.png",t="/assets/v8_incremental_marking.dd5bfe0c.png",f=JSON.parse('{"title":"Node V8内存控制","description":"","frontmatter":{},"headers":[],"relativePath":"other/node-v8.md","filePath":"other/node-v8.md","lastUpdated":1683338597000}'),r={name:"other/node-v8.md"},c=o('<h1 id="node-v8内存控制" tabindex="-1">Node V8内存控制 <a class="header-anchor" href="#node-v8内存控制" aria-label="Permalink to &quot;Node V8内存控制&quot;">​</a></h1><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><ol><li>Node基于V8引擎使用内存，使用c++编译 <ol><li>V8具有内存限制</li><li>原因是最初是对浏览器而设计的，不需要太大的内存 <ol><li>内存使用过多就会崩溃（没有足够的内存，内存溢出）</li><li>对象不再使用，而没有被销毁，内存一直没有被释放（内存泄漏）</li></ol></li></ol></li><li>V8垃圾回收机制算法 <ol><li>对不同对象的存货时间将内存的垃圾回收进不同的分代</li><li>对不同分代的内存使用更高效的回收算法</li></ol></li></ol><h2 id="内存分配-v8堆的大小" tabindex="-1">内存分配（V8堆的大小） <a class="header-anchor" href="#内存分配-v8堆的大小" aria-label="Permalink to &quot;内存分配（V8堆的大小）&quot;">​</a></h2><p><img src="'+n+'" alt="o.png"></p><ol><li><p>新生代的内存空间（生命周期短）</p><ol><li>采用cheney算法，一种复制的方式实现垃圾回收算法</li><li>先是在From空间中进行分配，检测在From空间中的存活对象</li><li>存活对象将被复制到To空间，而非存活对象占用的空间将会被释放（闭包则不会被释放）</li><li>随后进行翻转，To -&gt; From，From到To之前将会进行一次检测，在一定条件下将存活周期长的对象移入老生代</li><li>晋升的条件主要有两个：是否经历过回收依然未被释放，To空间的内存占用超过限制 <img src="'+i+'" alt="o.png"><img src="'+e+'" alt="o.png"></li></ol></li><li><p>老生代的内存空间（生命周期长）</p><ol><li>当一个对象经过多次复制依然存活时，它被认为是生周期较长的对象，将会移入到老生代中（称为晋升）</li><li>采用Mark-Sweep标记清除 <ol><li>标记阶段：遍历堆中的所有对象，并标记活着的对象</li><li>清除阶段：只清除没有被标记的对象</li></ol></li><li>结合Mark-Compact标记整理 <ol><li>在标记对象死亡后，在整理过程中，将活着的对象往一端移动</li><li>移动完成后，直接清理掉边界外的内存 <img src="'+p+'" alt="o.png"></li></ol></li></ol></li></ol><h2 id="增量标记-incremental-marking" tabindex="-1">增量标记（Incremental Marking） <a class="header-anchor" href="#增量标记-incremental-marking" aria-label="Permalink to &quot;增量标记（Incremental Marking）&quot;">​</a></h2><ol><li>为了避免出现JavaScript应用逻辑与垃圾回收器看到的不一致的情况，垃圾回收的3种基本算法都需要将应用逻辑暂停下来，待执行完垃圾回收后再恢复执行应用逻辑，这种行为被称为“全停顿”（stop-the-world）</li><li>增量标记：使垃圾回收最大停顿时间可以减少到原本的1/6左右 <img src="'+t+`" alt="o.png"></li><li>延迟清理</li><li>增量式清理</li><li>并行标记、并行清理: 利用多核性能降低每次停顿时间</li></ol><h2 id="合理使用内存" tabindex="-1">合理使用内存 <a class="header-anchor" href="#合理使用内存" aria-label="Permalink to &quot;合理使用内存&quot;">​</a></h2><ol><li>让垃圾回收机制更高效的工作 <ol><li>foo()函数在每次调用时创建对应的作用域(scope)，在函数执行结束后，该作用域会销毁</li><li>同时在作用域中声明的局部变量分配在该作用域中，随作用域销毁而销毁</li><li>作用域释放后，局部变量local失效，引用对象将会在下次垃圾回收时释放</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">foo</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> local </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>标识符查找 <ol><li>函数执行时会去查找该变量定义在哪里</li><li>最先查找当前作用域，当前作用域无法找到，会向上级的作用域查找，直到找到为止</li></ol></li><li>作用域链 <ol><li>标识符的查找方向是向上的，所以变量只能向外访问，不能向内访问</li></ol></li><li>变量的主动释放 <ol><li>定义在全局变量（不通过var声明或定义在global变量上），需要直到进程退出才能释放</li><li>这类引用对象常驻内存（常驻在老生代中）</li><li>如果需要释放常驻内存的对象，可以通过delete操作符删除引用关系</li><li>或者对变量重新赋值，让旧的对象脱离引用关系</li><li>在之后的老生代内存清除和整理过程中会被回收释放</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">global.foo </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;I am global object&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(global.foo); </span><span style="color:#88846F;">// =› &quot;I am global object&quot; </span></span>
<span class="line"><span style="color:#F92672;">delete</span><span style="color:#F8F8F2;"> global.foo;</span></span>
<span class="line"><span style="color:#88846F;">// 或者重新赋值</span></span>
<span class="line"><span style="color:#F8F8F2;">global.foo </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">undefined</span><span style="color:#F8F8F2;">; </span><span style="color:#88846F;">// or null</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(global.foo); </span><span style="color:#88846F;">// =› undefined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li>闭包 <ol><li>外部作用域访问内部作用域中的变量的方法叫做闭包</li><li>这得益于高阶函数的特性：函数可以作用参数或返回值</li></ol></li><li>内存溢出 <ol><li>操作函数操作使用内存过多，将会溢出堆内存</li></ol></li><li>内存泄漏 <ol><li>造成原因：将内存当做缓存</li><li>解决办法①：缓存限制策略（限制存入对象数量）</li><li>解决方案②： <ol><li>将缓存转移到外部，减少常驻内存的对象数量，让垃圾回收更高效</li><li>进程之间可以共享缓存</li><li>可以使用redis和memcached替代缓存操作</li></ol></li><li>队列消费不及时</li><li>作用域未释放</li></ol></li><li>大内存应用使用stream模块处理文件</li></ol>`,10),d=[c];function F(m,b,_,u,y,h){return a(),s("div",null,d)}const v=l(r,[["render",F]]);export{f as __pageData,v as default};
