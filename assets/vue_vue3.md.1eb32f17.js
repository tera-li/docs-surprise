import{_ as e,c as l,o as i,O as t}from"./chunks/framework.d7e37bdc.js";const a="/assets/vue3-diff.b9931c6d.png",f=JSON.parse('{"title":"Vue3","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue3.md","filePath":"vue/vue3.md","lastUpdated":1683338597000}'),o={name:"vue/vue3.md"},u=t('<h1 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;Vue3&quot;">​</a></h1><p>Vue3.0新特性 性能更好，速度更快</p><p><img src="'+a+'" alt="o.png"></p><h2 id="diff算法差别" tabindex="-1">diff算法差别 <a class="header-anchor" href="#diff算法差别" aria-label="Permalink to &quot;diff算法差别&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">比较方式</p><ul><li>vue2 是全量比较，基于渲染的DOM树，当数据更新后生成新的虚拟DOM树，每个节点相比较，那个节点有变化，就替换那个节点</li><li>vue3 是静态标记比较，基于渲染的DOM树，对会进行变化的数据绑定添加静态标记，当数据更新后生成新的虚拟DOM树，只会比较有静态标记的节点，如果有变化，则替换节点 静态标记会根据不同的变化，标记不同的数字，从而更高效的进行对比查找</li></ul></div><div class="info custom-block"><p class="custom-block-title">静态提升</p><ul><li>vue2 创建虚拟dom时，每个节点都会重新创建渲染一次</li><li>vue3 就把不会变化的节点提出来，那么就不会再创建的时候再重新生成虚拟dom，而是复用之前提出来的虚拟dom，从而提升性能</li></ul></div><div class="info custom-block"><p class="custom-block-title">事件侦听缓存</p><ul><li>vue3 会对动态属性进行静态标记，会一直跟踪有静态标记的节点。但是对于事件来说，不会发生变化。因此，事件侦听缓存，去除了静态标记，就不会进行比较，那么就提升了性能</li></ul></div><h2 id="vue2-vue3" tabindex="-1">Vue2/Vue3 <a class="header-anchor" href="#vue2-vue3" aria-label="Permalink to &quot;Vue2/Vue3&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">写法</p><ul><li>vue2 <ul><li>数据：data</li><li>业务逻辑：methods，watch，computed</li></ul></li><li>vue3 <ul><li>解决代码不好复用，逻辑不好抽离</li><li>解决数据和业务逻辑分散，更好的代码管理和维护</li></ul></li></ul></div>',9),s=[u];function c(d,r,n,v,_,p){return i(),l("div",null,s)}const h=e(o,[["render",c]]);export{f as __pageData,h as default};
