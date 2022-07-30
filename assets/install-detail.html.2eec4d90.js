import{_ as r,o as d,c as l,a,b as s,w as c,d as e,e as n,r as i}from"./app.7f0a416a.js";const h={},u=e(`<h1 id="install-arthas" tabindex="-1"><a class="header-anchor" href="#install-arthas" aria-hidden="true">#</a> Install Arthas</h1><h2 id="quick-installation" tabindex="-1"><a class="header-anchor" href="#quick-installation" aria-hidden="true">#</a> Quick installation</h2><h3 id="use-arthas-boot-recommended" tabindex="-1"><a class="header-anchor" href="#use-arthas-boot-recommended" aria-hidden="true">#</a> Use <code>arthas-boot</code>(Recommended)</h3><p>Download<code>arthas-boot.jar</code>\uFF0CStart with <code>java</code> command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Print usage:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar arthas-boot.jar -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="use-as-sh" tabindex="-1"><a class="header-anchor" href="#use-as-sh" aria-hidden="true">#</a> Use <code>as.sh</code></h3><p>You can install Arthas with one single line command on Linux, Unix, and Mac. Pls. copy the following command and paste it into the command line, then press <em>Enter</em> to run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -L https://arthas.aliyun.com/install.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The command above will download the bootstrap script <code>as.sh</code> to the current directory. You can move it to any other place you want, or put its location in <code>$PATH</code>.</p><p>You can enter its interactive interface by executing <code>as.sh</code>, or execute <code>as.sh -h</code> for more help information.</p><h2 id="full-installation" tabindex="-1"><a class="header-anchor" href="#full-installation" aria-hidden="true">#</a> Full installation</h2>`,13),m=n("Latest Version, Click To Download: "),p={href:"https://arthas.aliyun.com/download/latest_version",target:"_blank",rel:"noopener noreferrer"},b=a("img",{src:"https://img.shields.io/maven-central/v/com.taobao.arthas/arthas-packaging.svg?style=flat-square",alt:"",title:"Arthas"},null,-1),v=e(`<p>Download and unzip, find <code>arthas-boot.jar</code> in the directory. Start with <code>java</code> command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Print usage:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar arthas-boot.jar -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="manual-installation" tabindex="-1"><a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a> Manual Installation</h2>`,5),g=n("Manual Installation"),f=e(`<h2 id="installation-via-packages" tabindex="-1"><a class="header-anchor" href="#installation-via-packages" aria-hidden="true">#</a> Installation via Packages</h2><p>Arthas has packages for Debian and Fedora based systems. you can get them from the github releases page https://github.com/alibaba/arthas/releases.</p><h3 id="instruction-for-debian-based-systems" tabindex="-1"><a class="header-anchor" href="#instruction-for-debian-based-systems" aria-hidden="true">#</a> Instruction for Debian based systems</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg -i arthas*.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="instruction-for-fedora-based-systems" tabindex="-1"><a class="header-anchor" href="#instruction-for-fedora-based-systems" aria-hidden="true">#</a> Instruction for Fedora based systems</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> -i arthas*.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>After the installation of packages, execute</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>as.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="offline-help-documentation" tabindex="-1"><a class="header-anchor" href="#offline-help-documentation" aria-hidden="true">#</a> Offline Help Documentation</h2>`,10),_=n("Latest Version Documentation, Click To Download:"),x={href:"https://arthas.aliyun.com/download/doc/latest_version",target:"_blank",rel:"noopener noreferrer"},k=a("img",{src:"https://img.shields.io/maven-central/v/com.taobao.arthas/arthas-packaging.svg?style=flat-square",alt:"",title:"Arthas"},null,-1),y=e(`<h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2><ul><li><p>On Linux/Unix/Mac, delete the files with the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf ~/.arthas/
<span class="token function">rm</span> -rf ~/logs/arthas/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>On Windows, delete <code>.arthas</code> and <code>logs/arthas</code> directory under user home.</p></li></ul>`,2);function w(j,D){const t=i("ExternalLinkIcon"),o=i("RouterLink");return d(),l("div",null,[u,a("p",null,[m,a("a",p,[b,s(t)])]),v,a("p",null,[s(o,{to:"/en/doc/manual-install.html"},{default:c(()=>[g]),_:1})]),f,a("p",null,[_,a("a",x,[k,s(t)])]),y])}var I=r(h,[["render",w],["__file","install-detail.html.vue"]]);export{I as default};
