import{_ as i,a as c,b as d}from"./tunnel-server-agents.cae1b0b9.js";import{_ as p,o as h,c as u,a as e,b as n,w as l,e as s,d as t,r as o}from"./app.7f0a416a.js";const v={},b=e("h1",{id:"arthas-tunnel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arthas-tunnel","aria-hidden":"true"},"#"),s(" Arthas Tunnel")],-1),_=e("p",null,"\u901A\u8FC7 Arthas Tunnel Server/Client \u6765\u8FDC\u7A0B\u7BA1\u7406/\u8FDE\u63A5\u591A\u4E2A Agent\u3002",-1),m=e("p",null,"\u6BD4\u5982\uFF0C\u5728\u6D41\u5F0F\u8BA1\u7B97\u91CC\uFF0CJava \u8FDB\u7A0B\u53EF\u4EE5\u662F\u5728\u4E0D\u540C\u7684\u673A\u5668\u542F\u52A8\u7684\uFF0C\u60F3\u8981\u4F7F\u7528 Arthas \u53BB\u8BCA\u65AD\u4F1A\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u56E0\u4E3A\u7528\u6237\u901A\u5E38\u6CA1\u6709\u673A\u5668\u7684\u6743\u9650\uFF0C\u5373\u4F7F\u767B\u9646\u673A\u5668\u4E5F\u5206\u4E0D\u6E05\u662F\u54EA\u4E2A Java \u8FDB\u7A0B\u3002",-1),g=e("p",null,"\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528 Arthas Tunnel Server/Client\u3002",-1),k=e("p",null,"\u53C2\u8003:",-1),f=s("1: "),x=s("Web Console"),w=s("2: "),A=s("Arthas Spring Boot Starter"),I=e("h3",{id:"\u4E0B\u8F7D\u90E8\u7F72-arthas-tunnel-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E0B\u8F7D\u90E8\u7F72-arthas-tunnel-server","aria-hidden":"true"},"#"),s(" \u4E0B\u8F7D\u90E8\u7F72 arthas tunnel server")],-1),E={href:"https://github.com/alibaba/arthas/releases",target:"_blank",rel:"noopener noreferrer"},N=s("https://github.com/alibaba/arthas/releases"),R=s("\u4ECE Maven \u4ED3\u5E93\u4E0B\u8F7D\uFF1A"),L={href:"https://arthas.aliyun.com/download/arthas-tunnel-server/latest_version?mirror=aliyun",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:"https://img.shields.io/maven-central/v/com.taobao.arthas/arthas-packaging.svg?style=flat-square",alt:"",title:"Arthas"},null,-1),y=s("\u4ECE Github Releases \u9875\u4E0B\u8F7D\uFF1A "),T={href:"https://github.com/alibaba/arthas/releases",target:"_blank",rel:"noopener noreferrer"},V=s("https://github.com/alibaba/arthas/releases"),B=e("p",null,[s("Arthas tunnel server \u662F\u4E00\u4E2A spring boot fat jar \u5E94\u7528\uFF0C\u76F4\u63A5"),e("code",null,"java -jar"),s("\u542F\u52A8\uFF1A")],-1),C=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`java -jar  arthas-tunnel-server.jar
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),D=e("p",null,[s("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Carthas tunnel server \u7684 web \u7AEF\u53E3\u662F"),e("code",null,"8080"),s("\uFF0Carthas agent \u8FDE\u63A5\u7684\u7AEF\u53E3\u662F"),e("code",null,"7777"),s("\u3002")],-1),J=s("\u542F\u52A8\u4E4B\u540E\uFF0C\u53EF\u4EE5\u8BBF\u95EE "),O={href:"http://127.0.0.1:8080/",target:"_blank",rel:"noopener noreferrer"},j=s("http://127.0.0.1:8080/"),P=s(" \uFF0C\u518D\u901A\u8FC7"),U=e("code",null,"agentId",-1),q=s("\u8FDE\u63A5\u5230\u5DF2\u6CE8\u518C\u7684 arthas agent \u4E0A\u3002"),G=s("\u901A\u8FC7 Spring Boot \u7684 Endpoint\uFF0C\u53EF\u4EE5\u67E5\u770B\u5230\u5177\u4F53\u7684\u8FDE\u63A5\u4FE1\u606F\uFF1A "),M={href:"http://127.0.0.1:8080/actuator/arthas",target:"_blank",rel:"noopener noreferrer"},Z=s("http://127.0.0.1:8080/actuator/arthas"),K=s(" \uFF0C\u767B\u9646\u7528\u6237\u540D\u662F"),$=e("code",null,"arthas",-1),F=s("\uFF0C\u5BC6\u7801\u5728 arthas tunnel server \u7684\u65E5\u5FD7\u91CC\u53EF\u4EE5\u627E\u5230\uFF0C\u6BD4\u5982\uFF1A"),W=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>32851 [main] INFO  o.s.b.a.s.s.UserDetailsServiceAutoConfiguration

Using generated security password: f1dca050-3777-48f4-a577-6367e55a78a2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8-arthas-\u65F6\u8FDE\u63A5\u5230-tunnel-server" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-arthas-\u65F6\u8FDE\u63A5\u5230-tunnel-server" aria-hidden="true">#</a> \u542F\u52A8 arthas \u65F6\u8FDE\u63A5\u5230 tunnel server</h3><p>\u5728\u542F\u52A8 arthas\uFF0C\u53EF\u4EE5\u4F20\u9012<code>--tunnel-server</code>\u53C2\u6570\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>as.sh --tunnel-server <span class="token string">&#39;ws://127.0.0.1:7777/ws&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u6D4B\u8BD5\u5730\u5740\uFF08\u4E0D\u4FDD\u8BC1\u4E00\u76F4\u53EF\u7528\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>as.sh --tunnel-server <span class="token string">&#39;ws://47.75.156.201:80/ws&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u6709\u7279\u6B8A\u9700\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>--agent-id</code>\u53C2\u6570\u91CC\u6307\u5B9A agentId\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u751F\u6210\u968F\u673A ID\u3002</li></ul><p>attach \u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u6253\u5370\u51FA agentId\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
 /  O  <span class="token punctuation">\\</span> <span class="token operator">|</span>  .--. <span class="token string">&#39;&#39;</span>--.  .--<span class="token string">&#39;|  &#39;</span>--<span class="token string">&#39;  | /  O  \\ &#39;</span>   .-<span class="token string">&#39;
|  .-.  ||  &#39;</span>--<span class="token string">&#39;.&#39;</span>   <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  .--.  <span class="token operator">||</span>  .-.  <span class="token operator">|</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span>  <span class="token variable">\`</span></span>-.
<span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span><span class="token punctuation">\\</span>  <span class="token punctuation">\\</span>    <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span>.-<span class="token string">&#39;    |
\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>--<span class="token string">&#39; &#39;</span>--<span class="token string">&#39;   \`--&#39;</span>   <span class="token variable"><span class="token variable">\`</span>--&#39;  <span class="token variable">\`</span></span>--<span class="token string">&#39;\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>-----&#39;


wiki      https://arthas.aliyun.com/doc
tutorials https://arthas.aliyun.com/doc/arthas-tutorials.html
version   <span class="token number">3.1</span>.2
pid       <span class="token number">86183</span>
<span class="token function">time</span>      <span class="token number">2019</span>-08-30 <span class="token number">15</span>:40:53
<span class="token function">id</span>        URJZ5L48RPBR2ALI5K4V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u542F\u52A8\u65F6\u6CA1\u6709\u8FDE\u63A5\u5230 tunnel server\uFF0C\u4E5F\u53EF\u4EE5\u5728\u540E\u7EED\u81EA\u52A8\u91CD\u8FDE\u6210\u529F\u4E4B\u540E\uFF0C\u901A\u8FC7 session \u547D\u4EE4\u6765\u83B7\u53D6 agentId\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@86183<span class="token punctuation">]</span>$ session
 Name           Value
-----------------------------------------------------
 JAVA_PID       <span class="token number">86183</span>
 SESSION_ID     f7273eb5-e7b0-4a00-bc5b-3fe55d741882
 AGENT_ID       URJZ5L48RPBR2ALI5K4V
 TUNNEL_SERVER  ws://47.75.156.201:80/ws
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),Y=s("\u4EE5\u4E0A\u9762\u7684\u4E3A\u4F8B\uFF0C\u5728\u6D4F\u89C8\u5668\u91CC\u8BBF\u95EE "),z={href:"http://47.75.156.201/arthas/?port=80",target:"_blank",rel:"noopener noreferrer"},H=s("http://47.75.156.201/arthas/?port=80"),Q=s(" \uFF0C\u8F93\u5165 "),X=e("code",null,"agentId",-1),ee=s("\uFF0C\u5C31\u53EF\u4EE5\u8FDE\u63A5\u5230\u672C\u673A\u4E0A\u7684 arthas \u4E86\u3002"),se=t('<p><img src="'+c+`" alt=""></p><h3 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> \u6700\u4F73\u5B9E\u8DF5</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6CE8\u610F\uFF0CagentId \u8981\u4FDD\u6301\u552F\u4E00\uFF0C\u5426\u5219\u4F1A\u5728 tunnel server \u4E0A\u51B2\u7A81\uFF0C\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002</p></div><p>\u5982\u679C arthas agent \u914D\u7F6E\u4E86 <code>appName</code>\uFF0C\u5219\u751F\u6210\u7684 agentId \u4F1A\u5E26\u4E0A<code>appName</code>\u7684\u524D\u7F00\u3002</p><p>\u6BD4\u5982\u5728\u52A0\u4E0A\u542F\u52A8\u53C2\u6570\uFF1A<code>as.sh --tunnel-server &#39;ws://127.0.0.1:7777/ws&#39; --app-name demoapp</code> \uFF0C\u5219\u751F\u6210\u7684 agentId \u53EF\u80FD\u662F<code>demoapp_URJZ5L48RPBR2ALI5K4V</code>\u3002</p><p>Tunnel server \u4F1A\u4EE5<code>_</code>\u505A\u5206\u9694\u7B26\uFF0C\u63D0\u53D6\u51FA<code>appName</code>\uFF0C\u65B9\u4FBF\u6309\u5E94\u7528\u8FDB\u884C\u7BA1\u7406\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53E6\u5916\uFF0C\u4E5F\u53EF\u4EE5\u5728\u89E3\u538B\u7684 arthas \u76EE\u5F55\u4E0B\u7684 <code>arthas.properties</code>\uFF0C\u6216\u8005\u5728 spring boot \u5E94\u7528\u7684<code>application.properties</code>\u91CC\u914D\u7F6E<code>appName</code>\u3002</p></div><h3 id="tunnel-server-\u7684\u7BA1\u7406\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#tunnel-server-\u7684\u7BA1\u7406\u9875\u9762" aria-hidden="true">#</a> Tunnel Server \u7684\u7BA1\u7406\u9875\u9762</h3><blockquote><p>\u9700\u8981\u5728 spring boot \u7684<code>application.properties</code>\u91CC\u914D\u7F6E <code>arthas.enable-detail-pages=true</code></p></blockquote><blockquote><p><strong>\u6CE8\u610F\uFF0C\u5F00\u653E\u7BA1\u7406\u9875\u9762\u6709\u98CE\u9669\uFF01\u7BA1\u7406\u9875\u9762\u6CA1\u6709\u5B89\u5168\u62E6\u622A\u529F\u80FD\uFF0C\u52A1\u5FC5\u81EA\u884C\u589E\u52A0\u5B89\u5168\u63AA\u65BD\u3002</strong></p></blockquote><p>\u5728\u672C\u5730\u542F\u52A8 tunnel-server\uFF0C\u7136\u540E\u4F7F\u7528<code>as.sh</code> attach\uFF0C\u5E76\u4E14\u6307\u5B9A\u5E94\u7528\u540D<code>--app-name test</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ as.sh --tunnel-server &#39;ws://127.0.0.1:7777/ws&#39; --app-name test
telnet connecting to arthas server... current timestamp is 1627539688
Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is &#39;^]&#39;.
  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
 /  O  \\ |  .--. &#39;&#39;--.  .--&#39;|  &#39;--&#39;  | /  O  \\ &#39;   .-&#39;
|  .-.  ||  &#39;--&#39;.&#39;   |  |   |  .--.  ||  .-.  |\`.  \`-.
|  | |  ||  |\\  \\    |  |   |  |  |  ||  | |  |.-&#39;    |
\`--&#39; \`--&#39;\`--&#39; &#39;--&#39;   \`--&#39;   \`--&#39;  \`--&#39;\`--&#39; \`--&#39;\`-----&#39;


wiki       https://arthas.aliyun.com/doc
tutorials  https://arthas.aliyun.com/doc/arthas-tutorials.html
version    3.5.3
main_class demo.MathGame
pid        65825
time       2021-07-29 14:21:29
id         test_PE3LZO9NA9ENJYTPGL9L
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8BBF\u95EE tunnel-server\uFF0C\u53EF\u4EE5\u770B\u5230\u6240\u6709\u8FDE\u63A5\u7684\u5E94\u7528\u5217\u8868\uFF1A</p>`,13),ne={href:"http://localhost:8080/apps.html",target:"_blank",rel:"noopener noreferrer"},ae=s("http://localhost:8080/apps.html"),te=e("p",null,[e("img",{src:i,alt:""})],-1),re=e("p",null,"\u518D\u6253\u5F00\u8BE6\u60C5\uFF0C\u5219\u53EF\u4EE5\u770B\u5230\u8FDE\u63A5\u7684\u6240\u6709 agent \u5217\u8868\uFF1A",-1),le={href:"http://localhost:8080/agents.html?app=test",target:"_blank",rel:"noopener noreferrer"},oe=s("http://localhost:8080/agents.html?app=test"),ie=t('<p><img src="'+d+`" alt=""></p><h3 id="\u5B89\u5168\u548C\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u548C\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u5B89\u5168\u548C\u6743\u9650\u7BA1\u7406</h3><p><strong>\u5F3A\u70C8\u5EFA\u8BAE\u4E0D\u8981\u628A tunnel server \u76F4\u63A5\u66B4\u9732\u5230\u516C\u7F51\u4E0A\u3002</strong></p><p>\u76EE\u524D tunnel server \u6CA1\u6709\u4E13\u95E8\u7684\u6743\u9650\u7BA1\u7406</p><ol><li>\u7528\u6237\u9700\u8981\u81EA\u884C\u5F00\u53D1\uFF0C\u5BF9 app name \u9274\u6743.</li><li>\u5982\u679C\u5F00\u653E\u7BA1\u7406\u9875\u9762\uFF0C\u9700\u8981\u589E\u52A0\u5B89\u5168\u63AA\u65BD\u3002</li></ol><h3 id="\u96C6\u7FA4\u65B9\u5F0F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u65B9\u5F0F\u7BA1\u7406" aria-hidden="true">#</a> \u96C6\u7FA4\u65B9\u5F0F\u7BA1\u7406</h3><p>\u5982\u679C\u5E0C\u671B\u90E8\u7F72\u591A\u53F0 tunnel server\uFF0C\u53EF\u4EE5\u901A\u8FC7 nginx \u505A\u8F6C\u53D1\uFF0Credis \u6765\u4FDD\u5B58 agent \u4FE1\u606F\u3002</p><ul><li>nginx \u9700\u8981\u914D\u7F6E sticky session\uFF0C\u4FDD\u8BC1\u7528\u6237 web socket \u8FDE\u63A5\u5230\u540C\u4E00\u4E2A\u540E\u7AEF tunnel server \u4E0A\u3002\u7B80\u5355\u7684\u914D\u7F6E\u65B9\u5F0F\u662F\u7528<code>ip_hash</code>\u3002</li></ul><h3 id="arthas-tunnel-server-\u7684\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#arthas-tunnel-server-\u7684\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> Arthas tunnel server \u7684\u5DE5\u4F5C\u539F\u7406</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>browser &lt;-&gt; arthas tunnel server &lt;-&gt; arthas tunnel client &lt;-&gt; arthas agent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),ce={href:"https://github.com/alibaba/arthas/blob/master/tunnel-server/README.md#",target:"_blank",rel:"noopener noreferrer"},de=s("tunnel-server/README.md");function pe(he,ue){const r=o("RouterLink"),a=o("ExternalLinkIcon");return h(),u("div",null,[b,_,m,g,k,e("ul",null,[e("li",null,[f,n(r,{to:"/doc/web-console.html"},{default:l(()=>[x]),_:1})]),e("li",null,[w,n(r,{to:"/doc/spring-boot-starter.html"},{default:l(()=>[A]),_:1})])]),I,e("p",null,[e("a",E,[N,n(a)])]),e("ul",null,[e("li",null,[e("p",null,[R,e("a",L,[S,n(a)])])]),e("li",null,[e("p",null,[y,e("a",T,[V,n(a)])])])]),B,C,D,e("p",null,[J,e("a",O,[j,n(a)]),P,U,q]),e("p",null,[G,e("a",M,[Z,n(a)]),K,$,F]),W,e("p",null,[Y,e("a",z,[H,n(a)]),Q,X,ee]),se,e("p",null,[e("a",ne,[ae,n(a)])]),te,re,e("p",null,[e("a",le,[oe,n(a)])]),ie,e("p",null,[e("a",ce,[de,n(a)])])])}var _e=p(v,[["render",pe],["__file","tunnel.html.vue"]]);export{_e as default};
