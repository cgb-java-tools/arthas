import{_ as e,o as t,c as l,a as s,b as i,e as n,d as c,r as p}from"./app.7f0a416a.js";const r={},o=s("h1",{id:"monitor",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#monitor","aria-hidden":"true"},"#"),n(" monitor")],-1),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-monitor",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"monitor",-1),u=n("\u5728\u7EBF\u6559\u7A0B"),b=c(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u65B9\u6CD5\u6267\u884C\u76D1\u63A7</p></div><p>\u5BF9\u5339\u914D <code>class-pattern</code>\uFF0F<code>method-pattern</code>\uFF0F<code>condition-express</code>\u7684\u7C7B\u3001\u65B9\u6CD5\u7684\u8C03\u7528\u8FDB\u884C\u76D1\u63A7\u3002</p><p><code>monitor</code> \u547D\u4EE4\u662F\u4E00\u4E2A\u975E\u5B9E\u65F6\u8FD4\u56DE\u547D\u4EE4.</p><p>\u5B9E\u65F6\u8FD4\u56DE\u547D\u4EE4\u662F\u8F93\u5165\u4E4B\u540E\u7ACB\u5373\u8FD4\u56DE\uFF0C\u800C\u975E\u5B9E\u65F6\u8FD4\u56DE\u7684\u547D\u4EE4\uFF0C\u5219\u662F\u4E0D\u65AD\u7684\u7B49\u5F85\u76EE\u6807 Java \u8FDB\u7A0B\u8FD4\u56DE\u4FE1\u606F\uFF0C\u76F4\u5230\u7528\u6237\u8F93\u5165 <code>Ctrl+C</code> \u4E3A\u6B62\u3002</p><p>\u670D\u52A1\u7AEF\u662F\u4EE5\u4EFB\u52A1\u7684\u5F62\u5F0F\u5728\u540E\u53F0\u8DD1\u4EFB\u52A1\uFF0C\u690D\u5165\u7684\u4EE3\u7801\u968F\u7740\u4EFB\u52A1\u7684\u4E2D\u6B62\u800C\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u6240\u4EE5\u4EFB\u52A1\u5173\u95ED\u540E\uFF0C\u4E0D\u4F1A\u5BF9\u539F\u6709\u6027\u80FD\u4EA7\u751F\u592A\u5927\u5F71\u54CD\uFF0C\u800C\u4E14\u539F\u5219\u4E0A\uFF0C\u4EFB\u4F55 Arthas \u547D\u4EE4\u4E0D\u4F1A\u5F15\u8D77\u539F\u6709\u4E1A\u52A1\u903B\u8F91\u7684\u6539\u53D8\u3002</p><h3 id="\u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E" aria-hidden="true">#</a> \u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E</h3><table><thead><tr><th style="text-align:right;">\u76D1\u63A7\u9879</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;">timestamp</td><td style="text-align:left;">\u65F6\u95F4\u6233</td></tr><tr><td style="text-align:right;">class</td><td style="text-align:left;">Java \u7C7B</td></tr><tr><td style="text-align:right;">method</td><td style="text-align:left;">\u65B9\u6CD5\uFF08\u6784\u9020\u65B9\u6CD5\u3001\u666E\u901A\u65B9\u6CD5\uFF09</td></tr><tr><td style="text-align:right;">total</td><td style="text-align:left;">\u8C03\u7528\u6B21\u6570</td></tr><tr><td style="text-align:right;">success</td><td style="text-align:left;">\u6210\u529F\u6B21\u6570</td></tr><tr><td style="text-align:right;">fail</td><td style="text-align:left;">\u5931\u8D25\u6B21\u6570</td></tr><tr><td style="text-align:right;">rt</td><td style="text-align:left;">\u5E73\u5747 RT</td></tr><tr><td style="text-align:right;">fail-rate</td><td style="text-align:left;">\u5931\u8D25\u7387</td></tr></tbody></table><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><p>\u65B9\u6CD5\u62E5\u6709\u4E00\u4E2A\u547D\u540D\u53C2\u6570 <code>[c:]</code>\uFF0C\u610F\u601D\u662F\u7EDF\u8BA1\u5468\u671F\uFF08cycle of output\uFF09\uFF0C\u62E5\u6709\u4E00\u4E2A\u6574\u578B\u7684\u53C2\u6570\u503C</p><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">\u7C7B\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>method-pattern</em></td><td style="text-align:left;">\u65B9\u6CD5\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><em>condition-express</em></td><td style="text-align:left;">\u6761\u4EF6\u8868\u8FBE\u5F0F</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">\u5F00\u542F\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26\u5339\u914D</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">\u7EDF\u8BA1\u5468\u671F\uFF0C\u9ED8\u8BA4\u503C\u4E3A 120 \u79D2</td></tr><tr><td style="text-align:right;">[b]</td><td style="text-align:left;">\u5728<strong>\u65B9\u6CD5\u8C03\u7528\u4E4B\u524D</strong>\u8BA1\u7B97 condition-express</td></tr></tbody></table><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ monitor -c <span class="token number">5</span> demo.MathGame primeFactors
Press Ctrl+C to abort.
Affect<span class="token punctuation">(</span>class-cnt:1 , method-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">94</span> ms.
 timestamp            class          method        total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
-----------------------------------------------------------------------------------------------
 <span class="token number">2018</span>-12-03 <span class="token number">19</span>:06:38  demo.MathGame  primeFactors  <span class="token number">5</span>      <span class="token number">1</span>        <span class="token number">4</span>     <span class="token number">1.15</span>        <span class="token number">80.00</span>%

 timestamp            class          method        total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
-----------------------------------------------------------------------------------------------
 <span class="token number">2018</span>-12-03 <span class="token number">19</span>:06:43  demo.MathGame  primeFactors  <span class="token number">5</span>      <span class="token number">3</span>        <span class="token number">2</span>     <span class="token number">42.29</span>       <span class="token number">40.00</span>%

 timestamp            class          method        total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
-----------------------------------------------------------------------------------------------
 <span class="token number">2018</span>-12-03 <span class="token number">19</span>:06:48  demo.MathGame  primeFactors  <span class="token number">5</span>      <span class="token number">3</span>        <span class="token number">2</span>     <span class="token number">67.92</span>       <span class="token number">40.00</span>%

 timestamp            class          method        total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
-----------------------------------------------------------------------------------------------
 <span class="token number">2018</span>-12-03 <span class="token number">19</span>:06:53  demo.MathGame  primeFactors  <span class="token number">5</span>      <span class="token number">2</span>        <span class="token number">3</span>     <span class="token number">0.25</span>        <span class="token number">60.00</span>%

 timestamp            class          method        total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
-----------------------------------------------------------------------------------------------
 <span class="token number">2018</span>-12-03 <span class="token number">19</span>:06:58  demo.MathGame  primeFactors  <span class="token number">1</span>      <span class="token number">1</span>        <span class="token number">0</span>     <span class="token number">0.45</span>        <span class="token number">0.00</span>%

 timestamp            class          method        total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
-----------------------------------------------------------------------------------------------
 <span class="token number">2018</span>-12-03 <span class="token number">19</span>:07:03  demo.MathGame  primeFactors  <span class="token number">2</span>      <span class="token number">2</span>        <span class="token number">0</span>     <span class="token number">3182.72</span>     <span class="token number">0.00</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E" aria-hidden="true">#</a> \u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C(\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E)</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>monitor -c <span class="token number">5</span> demo.MathGame primeFactors <span class="token string">&quot;params[0] &lt;= 2&quot;</span>
Press Q or Ctrl+C to abort.
Affect<span class="token punctuation">(</span>class count: <span class="token number">1</span> , method count: <span class="token number">1</span><span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">19</span> ms, listenerId: <span class="token number">5</span>
 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
-----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:36  demo.MathGame  primeFactors    <span class="token number">5</span>       <span class="token number">3</span>       <span class="token number">2</span>      <span class="token number">0.09</span>       <span class="token number">40.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:41  demo.MathGame  primeFactors    <span class="token number">5</span>       <span class="token number">2</span>       <span class="token number">3</span>      <span class="token number">0.11</span>       <span class="token number">60.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:46  demo.MathGame  primeFactors    <span class="token number">5</span>       <span class="token number">1</span>       <span class="token number">4</span>      <span class="token number">0.06</span>       <span class="token number">80.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:51  demo.MathGame  primeFactors    <span class="token number">5</span>       <span class="token number">1</span>       <span class="token number">4</span>      <span class="token number">0.12</span>       <span class="token number">80.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:56  demo.MathGame  primeFactors    <span class="token number">5</span>       <span class="token number">3</span>       <span class="token number">2</span>      <span class="token number">0.15</span>       <span class="token number">40.00</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C-\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D" aria-hidden="true">#</a> \u8BA1\u7B97\u6761\u4EF6\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u7EDF\u8BA1\u7ED3\u679C(\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D)</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>monitor -b -c <span class="token number">5</span> com.test.testes.MathGame primeFactors <span class="token string">&quot;params[0] &lt;= 2&quot;</span>
Press Q or Ctrl+C to abort.
Affect<span class="token punctuation">(</span>class count: <span class="token number">1</span> , method count: <span class="token number">1</span><span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">21</span> ms, listenerId: <span class="token number">4</span>
 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:41:57  demo.MathGame  primeFactors    <span class="token number">1</span>       <span class="token number">0</span>        <span class="token number">1</span>      <span class="token number">0.10</span>      <span class="token number">100.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:02  demo.MathGame  primeFactors    <span class="token number">3</span>       <span class="token number">0</span>        <span class="token number">3</span>      <span class="token number">0.06</span>      <span class="token number">100.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:07  demo.MathGame  primeFactors    <span class="token number">2</span>       <span class="token number">0</span>        <span class="token number">2</span>      <span class="token number">0.06</span>      <span class="token number">100.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:12  demo.MathGame  primeFactors    <span class="token number">1</span>       <span class="token number">0</span>        <span class="token number">1</span>      <span class="token number">0.05</span>      <span class="token number">100.00</span>%

 timestamp            class          method         total  success  fail  avg-rt<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  fail-rate
----------------------------------------------------------------------------------------------
 <span class="token number">2020</span>-09-02 09:42:17  demo.MathGame  primeFactors    <span class="token number">2</span>       <span class="token number">0</span>        <span class="token number">2</span>      <span class="token number">0.10</span>      <span class="token number">100.00</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function v(k,h){const a=p("ExternalLinkIcon");return t(),l("div",null,[o,s("p",null,[s("a",m,[d,u,i(a)])]),b])}var f=e(r,[["render",v],["__file","monitor.html.vue"]]);export{f as default};
