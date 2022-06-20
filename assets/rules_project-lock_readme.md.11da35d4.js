import{_ as s,c as n,o as a,a as l}from"./app.a721e852.js";const A=JSON.parse('{"title":"project-lock","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6269\u5C55","slug":"\u6269\u5C55"},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E2A\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E2A\uFF1F"},{"level":3,"title":"\u81EA\u52A8\u5207\u6362\u811A\u672C","slug":"\u81EA\u52A8\u5207\u6362\u811A\u672C"},{"level":3,"title":"nexus \u7248\u672C\u7B56\u7565","slug":"nexus-\u7248\u672C\u7B56\u7565"}],"relativePath":"rules/project-lock/readme.md","lastUpdated":1653917957000}'),o={name:"rules/project-lock/readme.md"},p=l(`<h1 id="project-lock" tabindex="-1">project-lock <a class="header-anchor" href="#project-lock" aria-hidden="true">#</a></h1><p>\u9501\u5B9A\u4E00\u4E2A\u9879\u76EE\u4F9D\u8D56\u7684\u8FD0\u884C\u73AF\u5883\u3001\u4F9D\u8D56\u5305\u3001npm\u6E90\u7B49\u5173\u952E\u914D\u7F6E\u4FE1\u606F\u3002project-lock? env-lock?</p><blockquote><p>\u4FDD\u8BC1\u9879\u76EE\u5F00\u53D1\u7EF4\u62A4\u7684\u7A33\u5B9A\u6027\u3002</p></blockquote><p>\u9879\u76EE\u4E0B add <code>.npmrc</code> &amp;&amp; <code>.nvmrc</code>, \u5E76\u4E14\u5C06 deps lock \u6587\u4EF6\u63D0\u4EA4 git \u5E93\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u6DFB\u52A0 node \u7248\u672C\u63A7\u5236(\u57FA\u4E8E nvm)</span></span>
<span class="line"><span style="color:#A6ACCD;">node -v </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> .nvmrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># v16.15.0</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm config set package-lock=true --location=project</span></span>
<span class="line"><span style="color:#F07178;">engine-strict</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">true  </span><span style="color:#676E95;font-style:italic;"># \u4E25\u683C\u68C0\u9A8C engines \u4E2D\u914D\u7F6E\u7684 node \u6216 npm \u7248\u672C</span></span>
<span class="line"><span style="color:#F07178;">package-lock</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">true   </span><span style="color:#676E95;font-style:italic;"># \u8981\u6C42\u9879\u76EE\u751F\u4EA7 lock \u6587\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">registry</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://registry.npmjs.org/ </span><span style="color:#676E95;font-style:italic;"># \u914D\u7F6E\u4E3A\u516C\u53F8\u5185\u7F51</span></span>
<span class="line"></span></code></pre></div><p>package.json \u9650\u5B9A\u7248\u672C\u65F6\uFF0C\u4E00\u822C <strong>\u4EC5\u9650\u5236\u4E3B\u7248\u672C\u53F7\u5373\u53EF</strong>\u3002\u53C2\u8003 <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#engines" target="_blank" rel="noopener noreferrer">engines</a></p><ul><li>~version: \u76F8\u5F53\u4E8E 1.2.x</li><li>^version: \u76F8\u5F53\u4E8E 1.x.x</li></ul><div class="language-jsonc"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u9650\u5B9A\u4F7F\u7528 npm, yarn \u6216 pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">preinstall</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nvm use &amp;&amp; npx only-allow npm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// \u683C\u5F0F: &gt;= xxx &lt; 16 \u6216 16.x \u6216 ~16.15.0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">engines</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~16.15.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">npm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~8.5.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">yarn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">pnpm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;=7</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>CI \u6D41\u7A0B\u5E94\u4F7F\u7528\u9501\u6587\u4EF6\u5B89\u88C5\u4F9D\u8D56\uFF0C\u5B9E\u73B0\u66F4\u5FEB\u3001\u66F4\u53EF\u9760\u7684\u6784\u5EFA\u3002\u540C\u65F6\u8FD8\u80FD\u6821\u9A8C\u4E0D\u89C4\u8303\u7684 lock \u6587\u4EF6\u7B49\u3002</p><ul><li><a href="https://docs.npmjs.com/cli/v8/commands/npm-ci" target="_blank" rel="noopener noreferrer"><code>npm ci</code></a></li><li><code>yarn install --frozen-lockfile</code></li><li><code>pnpm install --frozen-lockfile</code></li></ul><p><code>npm ci</code> \u4E0E <code>npm install</code> \u7684\u4E3B\u8981\u533A\u522B:</p><ul><li>\u8BE5\u9879\u76EE\u5FC5\u987B\u5177\u6709\u73B0\u6709\u7684 <code>package-lock.json</code> \u6216 <code>npm-shrinkwrap.json</code>\u3002</li><li>\u5982\u679C\u5305\u9501\u4E2D\u7684\u4F9D\u8D56\u9879\u4E0D\u5339\u914D <code>package.json</code> \u4E2D\u7684\u4F9D\u8D56\u9879, <code>npm ci</code> \u5C06\u9000\u51FA\u5E76\u51FA\u73B0\u9519\u8BEF\uFF0C\u800C\u4E0D\u662F\u66F4\u65B0\u5305\u9501\u3002</li><li><code>npm ci</code> \u4E00\u6B21\u53EA\u80FD\u5B89\u88C5\u6574\u4E2A\u9879\u76EE: \u65E0\u6CD5\u4F7F\u7528\u6B64\u547D\u4EE4\u6DFB\u52A0\u5355\u4E2A\u4F9D\u8D56\u9879\u3002</li><li>\u5982\u679C <code>node_modules</code> \u5DF2\u7ECF\u5B58\u5728, \u5B83\u5C06\u5728 <code>npm ci</code> \u5F00\u59CB\u5B89\u88C5\u4E4B\u524D\u81EA\u52A8\u5220\u9664\u3002</li><li>\u5B83\u6C38\u8FDC\u4E0D\u4F1A\u5199\u5165 <code>package.json</code> \u6216\u4EFB\u4F55\u5305\u9501: \u5B89\u88C5\u57FA\u672C\u4E0A\u88AB\u51BB\u7ED3\u3002</li></ul><h2 id="\u6269\u5C55" tabindex="-1">\u6269\u5C55 <a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a></h2><h3 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E2A\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E2A\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E2A\uFF1F" aria-hidden="true">#</a></h3><p>\u80CC\u666F: \u540C\u4E00\u4E2A\u9879\u76EE\uFF0CA \u540C\u5B66\u80FD\u8FD0\u884C\u8D77\u6765\u7684\u9879\u76EE\uFF0CB \u540C\u5B66\u8FD0\u884C\u4E0D\u8D77\u6765\uFF1F</p><p>\u539F\u56E0\u5206\u6790\u662F\u73AF\u5883\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u6D89\u53CA\u5185\u5BB9\u5982\u4E0B:</p><ul><li>\u5F00\u53D1\u8005\u7684\u673A\u5668</li><li>\u9879\u76EE\u5E94\u7528\u914D\u7F6E</li><li>\u4F9D\u8D56\u5305</li><li>\u90E8\u7F72\u7CFB\u7EDF\u73AF\u5883</li></ul><h3 id="\u81EA\u52A8\u5207\u6362\u811A\u672C" tabindex="-1">\u81EA\u52A8\u5207\u6362\u811A\u672C <a class="header-anchor" href="#\u81EA\u52A8\u5207\u6362\u811A\u672C" aria-hidden="true">#</a></h3><p>\u8DDF\u968F\u9879\u76EE <code>.nvmrc</code> \u81EA\u52A8\u5207\u6362 node \u7248\u672C, \u53EF\u4EE5\u5728 <code>~/.zshrc</code> \u6DFB\u52A0\u4EE5\u4E0B\u811A\u672C</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># place this after nvm initialization!</span></span>
<span class="line"><span style="color:#A6ACCD;">autoload -U add-zsh-hook</span></span>
<span class="line"><span style="color:#82AAFF;">load-nvmrc</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">local</span><span style="color:#A6ACCD;"> node_version=</span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">nvm version</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">local</span><span style="color:#A6ACCD;"> nvmrc_path=</span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">nvm_find_nvmrc</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">nvmrc_path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">local</span><span style="color:#A6ACCD;"> nvmrc_node_version=</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">nvm version </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">cat </span><span style="color:#89DDFF;">&quot;\${</span><span style="color:#A6ACCD;">nvmrc_path</span><span style="color:#89DDFF;">}&quot;)&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">nvmrc_node_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">N/A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">      nvm install</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">nvmrc_node_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">node_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">      nvm use</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">node_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">nvm version default</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Reverting to nvm default version</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    nvm use default</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">add-zsh-hook chpwd load-nvmrc</span></span>
<span class="line"><span style="color:#A6ACCD;">load-nvmrc</span></span>
<span class="line"></span></code></pre></div><h3 id="nexus-\u7248\u672C\u7B56\u7565" tabindex="-1">nexus \u7248\u672C\u7B56\u7565 <a class="header-anchor" href="#nexus-\u7248\u672C\u7B56\u7565" aria-hidden="true">#</a></h3><p>\u79C1\u6709\u6E90 nexus \u7CFB\u7EDF\u9700\u8981\u8BBE\u5B9A npm \u5305\u7684\u7248\u672C\u7B56\u7565\u8BBE\u7F6E\u4E3A<strong>\u7981\u6B62\u8986\u76D6</strong></p><blockquote><p>nexus \u7248\u672C\u7B56\u7565\uFF1A\u5141\u8BB8\u8986\u76D6\u3001\u7981\u6B62\u8986\u76D6\u3001\u53EA\u8BFB\u3002\uFF08\u5411nexus\u670D\u52A1\u53D1\u5E03NPM\u5305\u65F6\uFF0C\u4F7F\u7528\u7684\u7B56\u7565\uFF09</p></blockquote><p>\u5982\u679C\u5B58\u5728\u8986\u76D6\u53D1\u5E03\uFF0C\u4F1A\u5BFC\u81F4 lock \u6587\u4EF6\u6821\u9A8C\u7801\u9A8C\u8BC1\u4E0D\u901A\u8FC7\uFF0C\u53EF\u80FD\u9047\u5230\u4EE5\u4E0B\u95EE\u9898</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --no-optional --production</span></span>
<span class="line"><span style="color:#A6ACCD;">npm ERR</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> code EINTEGRITY</span></span>
<span class="line"><span style="color:#A6ACCD;">npm ERR</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> sha512-nADAsJGM8jw18ufzd8/a26rC/+JVJCpLFH3fUkkxaXyMvDoAK99BDdAL5UqN9XZUj85nwM/3Lxbw8N9BRppFGA== integrity checksum failed when using sha512: wanted sha512-nADAsJGM8jw18ufzd8/a26rC/+JVJCpLFH3fUkkxaXyMvDoAK99BDdAL5UqN9XZUj85nwM/3Lxbw8N9BRppFGA== but got sha512-s9YhDRKaBS2uLucU30Cy5td+81hr1Vj+rn0m7b1U7mpcUNPUNwil7ifZS6m5b1Jqy6jh86WrRr37GqCmd3Lpqw==. </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">7539 bytes</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><ul><li><code>--no-optional</code> \u8DF3\u8FC7\u53EF\u9009\u5305</li><li><code>--production</code> \u53EA\u5B89\u88C5 dependencies</li></ul>`,27),e=[p];function c(t,r,D,y,i,F){return a(),n("div",null,e)}var d=s(o,[["render",c]]);export{A as __pageData,d as default};
