import{_ as e,c as a,o as t,O as l}from"./chunks/framework.d7e37bdc.js";const S=JSON.parse('{"title":"Web 安全漏洞","description":"","frontmatter":{},"headers":[],"relativePath":"network/web-safety.md","filePath":"network/web-safety.md","lastUpdated":1683338597000}'),i={name:"network/web-safety.md"},o=l('<h1 id="web-安全漏洞" tabindex="-1">Web 安全漏洞 <a class="header-anchor" href="#web-安全漏洞" aria-label="Permalink to &quot;Web 安全漏洞&quot;">​</a></h1><h2 id="xss-跨站脚本攻击" tabindex="-1">XSS（跨站脚本攻击） <a class="header-anchor" href="#xss-跨站脚本攻击" aria-label="Permalink to &quot;XSS（跨站脚本攻击）&quot;">​</a></h2><ol><li>通过虚假输⼊表单骗取⽤户个⼈信息</li><li>显示伪造的⽂章或图⽚，诱导用户去点击</li><li>通过表单输⼊，动态⽣成 <strong>script</strong> 等造成漏洞危险</li><li>嵌入恶意脚本，修改页面数据</li></ol><h2 id="csrf-跨站请求伪造" tabindex="-1">CSRF（跨站请求伪造） <a class="header-anchor" href="#csrf-跨站请求伪造" aria-label="Permalink to &quot;CSRF（跨站请求伪造）&quot;">​</a></h2><ol><li>跨站请求伪造是指黑客可以冒充用户向目标站点发送请求，从而获取用户信息，篡改用户数据</li><li>用户验证存在，如 用户session存储在客户端，黑客使用该 session来伪造请求给目标站点</li></ol><h2 id="sql注入攻击" tabindex="-1">SQL注⼊攻击 <a class="header-anchor" href="#sql注入攻击" aria-label="Permalink to &quot;SQL注⼊攻击&quot;">​</a></h2><ol><li>通过表单输⼊，查询或提交时，使⽤处理过的字符串请求接⼝</li><li>当服务器调⽤ SQL语句时，特殊的字符串就会注⼊到 SQL语句中，造成意想不到的结果</li><li>⾮法查看或篡改数据库数据</li><li>规避认证</li></ol>',7),s=[o];function r(n,c,d,_,h,f){return t(),a("div",null,s)}const m=e(i,[["render",r]]);export{S as __pageData,m as default};
