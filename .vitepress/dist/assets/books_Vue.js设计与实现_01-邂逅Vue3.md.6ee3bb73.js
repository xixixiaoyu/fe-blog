import{_ as o,o as t,c as e,z as s,t as n,a,O as p}from"./chunks/framework.80a4594e.js";const V=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"books/Vue.js设计与实现/01-邂逅Vue3.md","filePath":"books/Vue.js设计与实现/01-邂逅Vue3.md"}'),c={name:"books/Vue.js设计与实现/01-邂逅Vue3.md"},r=p(`<h2 id="_1-认识-vue" tabindex="-1">1.认识 Vue <a class="header-anchor" href="#_1-认识-vue" aria-label="Permalink to &quot;1.认识 Vue&quot;">​</a></h2><blockquote><p>Vue (读音 /vjuː/，类似于 <strong>view</strong>) 是一套用于构建用户界面的<strong>渐进式框架</strong></p><p>什么是渐进式框架呢？表示我们可以在项目中一点点来引入和使用 Vue 和 Vue 的其他功能，而不一定需要全部使用 Vue 来开发整个项目</p></blockquote><p><img src="https://raw.githubusercontent.com/xixixiaoyu/CloundImg2/main/image-20220128142118782.png" alt="image-20220128142118782"></p><h2 id="_2-目前-vue-在前端处于什么地位" tabindex="-1">2.目前 Vue 在前端处于什么地位？ <a class="header-anchor" href="#_2-目前-vue-在前端处于什么地位" aria-label="Permalink to &quot;2.目前 Vue 在前端处于什么地位？&quot;">​</a></h2><p>目前前端最流行的是三大框架</p><ul><li>Vue <ul><li>Vue 在国内市场占有率是最高的，几乎所有的前端岗位都会对 Vue 有要求</li></ul></li><li>React <ul><li>React 在国内外的市场占有率都是非常高的，作为前端工程师也是必须学习的一个框架</li></ul></li><li>Angular <ul><li>入门门槛较高，并且国内市场占率较低;不否认本身非常优秀的框架</li></ul></li></ul><h2 id="_3-谁是最好的前端框架" tabindex="-1">3.谁是最好的前端框架 <a class="header-anchor" href="#_3-谁是最好的前端框架" aria-label="Permalink to &quot;3.谁是最好的前端框架&quot;">​</a></h2><p>从现实找工作分析</p><ul><li>如果去国外找工作，优先推荐 React、其次是 Vue 和 Angular</li><li>如果在国内找工作，优先推荐 Vue，其次是 React</li></ul><p><img src="https://raw.githubusercontent.com/xixixiaoyu/CloundImg2/main/image-20220128144724471.png" alt="image-20220128144724471"></p><h2 id="_4-如何下载-vue-呢" tabindex="-1">4.如何下载 Vue 呢？ <a class="header-anchor" href="#_4-如何下载-vue-呢" aria-label="Permalink to &quot;4.如何下载 Vue 呢？&quot;">​</a></h2><ul><li>Vue 的本质，就是一个已经帮我们封装好的 JavaScript 的库</li></ul><p>那么安装和使用 Vue 这个 JavaScript 库有哪些方式呢？</p><ul><li>方式一：下载 Vue 的 JavaScript 文件，并且自己手动引入</li><li>方式二：在页面中通过 CDN 的方式来引入</li><li>方式三：通过 npm 包管理工具安装使用它（webpack 时候可以使用）</li><li>方式四：直接通过 Vue CLI 创建项目，并且使用它</li></ul><h3 id="方式一-cdn-引入" tabindex="-1">方式一：CDN 引入 <a class="header-anchor" href="#方式一-cdn-引入" aria-label="Permalink to &quot;方式一：CDN 引入&quot;">​</a></h3><blockquote><p>什么是 CDN 呢？CDN 称之为内容分发网络（<strong>C</strong>ontent <strong>D</strong>elivery <strong>N</strong>etwork 或<strong>C</strong>ontent <strong>D</strong>istribution <strong>N</strong>etwork，缩 写：<strong>CDN</strong>）</p></blockquote><ul><li>它是指通过 <code>相互连接的网络系统</code>，利用<code>最靠近</code>每个用户的服务器</li><li>更快、更可靠地将<code>音乐、图片、视频、应用程序及其他文件</code>发送给用户；</li><li>来提供高性能、可扩展性及低成本的网络内容传递给用户</li></ul><p>常用的 CDN 服务器可以大致分为两种：</p><ul><li>自己购买的 CDN 服务器,， <ul><li>目前阿里、腾讯、亚马逊、Google 等都可以购买 CDN 服务器；</li></ul></li><li>开源的 CDN 服务器： <ul><li>国际上使用比较多的是 unpkg、JSDelivr、cdnjs；</li></ul></li></ul><p><strong>Vue 的 CDN 引入：</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="方式二-下载和引入" tabindex="-1">方式二：下载和引入 <a class="header-anchor" href="#方式二-下载和引入" aria-label="Permalink to &quot;方式二：下载和引入&quot;">​</a></h3><ul><li>可以直接打开 CDN 的链接：复制其中所有的代码到一个新文件中</li><li>通过 script 标签，引入刚才的文件</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../js/vue.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_5-hello-vue3-案例和-counter-计数器案例" tabindex="-1">5.Hello Vue3 案例和 counter 计数器案例 <a class="header-anchor" href="#_5-hello-vue3-案例和-counter-计数器案例" aria-label="Permalink to &quot;5.Hello Vue3 案例和 counter 计数器案例&quot;">​</a></h2><p><strong>Hello Vue3</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// template所写内容会成为app标签里面的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello Vue3</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// app实例接管哪个元素</span></span>
<span class="line"><span style="color:#A6ACCD;">  app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>计数器的原生实现</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">+1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">decrement</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">-1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 1.获取所有的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> counterEl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> incrementEl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> decrementEl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.decrement</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 2.定义变量</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      counterEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 3.监听按钮的点击</span></span>
<span class="line"><span style="color:#A6ACCD;">      incrementEl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">counterEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      decrementEl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">counterEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>计算器的 Vue 实现</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{counter}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">+1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">decrement</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">-1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 在里面操作数据 即可更新视图(DOM)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">--;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">setInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_6-字符串的显示与隐藏" tabindex="-1">6.字符串的显示与隐藏 <a class="header-anchor" href="#_6-字符串的显示与隐藏" aria-label="Permalink to &quot;6.字符串的显示与隐藏&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">显示隐藏</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            show</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">hanleBtnClick</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">show</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;div v-if=&quot;show&quot;&gt;&quot;hello world&quot;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;button v-on:click=&quot;hanleBtnClick&quot;&gt;显示/隐藏&lt;/button&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">               </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_7-mvvm-模型" tabindex="-1">7.MVVM 模型 <a class="header-anchor" href="#_7-mvvm-模型" aria-label="Permalink to &quot;7.MVVM 模型&quot;">​</a></h2><p>MVC 和 MVVM 都是一种软件的体系结构</p><ul><li>MVC 是<code>Model – View –Controller</code>的简称，是在前期被使用非常框架的架构模式，比如 iOS、前端</li><li>MVVM 是<code>Model-View-ViewModel</code>的简称，是目前非常流行的架构模式 <ul><li>M：模型(Model) ：data 中的数据</li><li>V：视图(View) ：模板代码</li><li>VM：视图模型(ViewModel)：Vue 实例</li></ul></li></ul><p>data 中所有的属性，最后都出现在了 vm 身上</p><p>vm 身上所有的属性 及 Vue 原型上所有属性，在 Vue 模板中都可以直接使用。</p><p>Vue 虽然并没有完全遵守 MVVM 的模型，但是整个设计是受到它的启发的</p><h2 id="_8-声明式和命令式" tabindex="-1">8.声明式和命令式 <a class="header-anchor" href="#_8-声明式和命令式" aria-label="Permalink to &quot;8.声明式和命令式&quot;">​</a></h2><ul><li>原生和 Vue 开发有两种不同的编程范式 即 Vue 使用声明式编程 原生使用的是命令式编程</li><li>命令式编程关注的是 “how to do”，声明式编程关注的是 “what to do”，由框架(机器)完成 “how”的过程</li></ul><h3 id="声明式" tabindex="-1">声明式 <a class="header-anchor" href="#声明式" aria-label="Permalink to &quot;声明式&quot;">​</a></h3><ul><li>我们每完成一个操作，都需要通过 JavaScript 编写一条代码，来给浏览器一个指令</li><li>在早期的原生 JavaScript 和 jQuery 开发的过程中，我们都是通过这种命令式的方式在编写代码的</li></ul><h3 id="命令式" tabindex="-1">命令式 <a class="header-anchor" href="#命令式" aria-label="Permalink to &quot;命令式&quot;">​</a></h3><ul><li>我们会在 createApp 传入的对象中声明需要的内容，模板 template、数据 data、方法 methods</li><li>目前 Vue、React、Angular 的编程模式，我们称之为声明式编程</li></ul><h2 id="_9-配置对象的属性" tabindex="-1">9.配置对象的属性 <a class="header-anchor" href="#_9-配置对象的属性" aria-label="Permalink to &quot;9.配置对象的属性&quot;">​</a></h2><p>在使用 createApp 的时候，我们传入了<strong>一个对象</strong>，具体我们来解析一下</p><h3 id="template-属性" tabindex="-1"><strong>template 属性</strong> <a class="header-anchor" href="#template-属性" aria-label="Permalink to &quot;**template 属性**&quot;">​</a></h3>`,48),D=s("li",null,"表示的是 Vue 需要帮助我们渲染的模板信息",-1),F=s("li",null,"里面的 HTML 标签会替换到我们挂载元素上的(比如 id 为 app 的 div)的 innerHTML",-1),y=s("li",null,"我们也可以直接将内容写在挂载元素之上",-1),i=s("h3",{id:"data-属性",tabindex:"-1"},[a("data 属性 "),s("a",{class:"header-anchor",href:"#data-属性","aria-label":'Permalink to "data 属性"'},"​")],-1),C=s("li",null,[a("传入一个函数，并且该函数需要返回一个对象 "),s("ul",null,[s("li",null,"在 Vue2.x 的时候，也可以传入一个对象（虽然官方推荐是一个函数）"),s("li",null,"在 Vue3.x 的时候，必须传入一个函数，否则就会直接在浏览器中报错")])],-1),A=p('<h3 id="methods-属性" tabindex="-1">methods 属性 <a class="header-anchor" href="#methods-属性" aria-label="Permalink to &quot;methods 属性&quot;">​</a></h3><ul><li>methods 属性是一个对象，在里面通常定义各种方法(函数) <ul><li>template 模板可以绑定这些方法</li><li>在该方法中，我们可以使用 this 关键字来直接访问修改 data 中返回的对象的属性来进行页面的更新</li></ul></li></ul><p><strong>注意</strong>: 这里不应该使用箭头函数 会导致原本 Vue 中 this 指向的丢失(指向 Window) 造成无法访问到对应的数据，原本 Vue 会对 methods 里面的所有函数遍历通过 bind 绑定 this</p><p><img src="https://raw.githubusercontent.com/xixixiaoyu/CloundImg2/main/image-20220128195957320.png" alt="image-20220128195957320"></p><h3 id="其他属性" tabindex="-1">其他属性 <a class="header-anchor" href="#其他属性" aria-label="Permalink to &quot;其他属性&quot;">​</a></h3><p>这里还可以定义很多其他的属性，比如 props、computed、watch、emits、setup，生命周期函数等等，我们会在后续进行讲解</p>',6);function u(l,d,h,g,m,q){return t(),e("div",null,[r,s("ul",null,[D,F,s("li",null,"模板中有一些特有的语法，比如 "+n()+"，比如 @click",1),y]),i,s("ul",null,[C,s("li",null,[a("data 中返回的对象会被 Vue 的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理 "),s("ul",null,[s("li",null,"所以我们在 template 中 可以通过 "+n(l.counter)+" 访问 data 返回的数据",1),s("li",null,"并且我们修改 counter 数据值时 template 中的 "+n(l.counter)+" 也会更新 即视图更新",1)])])]),A])}const b=o(c,[["render",u]]);export{V as __pageData,b as default};
