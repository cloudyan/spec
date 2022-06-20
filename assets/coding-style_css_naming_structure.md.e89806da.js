import{_ as s,c as a,o as n,a as l}from"./app.a721e852.js";const F=JSON.parse('{"title":"\u6A21\u5757\u7EC4\u7EC7","description":"","frontmatter":{},"headers":[],"relativePath":"coding-style/css/naming/structure.md","lastUpdated":1653911881000}'),e={name:"coding-style/css/naming/structure.md"},o=l(`<h1 id="\u6A21\u5757\u7EC4\u7EC7" tabindex="-1">\u6A21\u5757\u7EC4\u7EC7 <a class="header-anchor" href="#\u6A21\u5757\u7EC4\u7EC7" aria-hidden="true">#</a></h1><p>\u4EFB\u4F55\u8D85\u8FC7 1000 \u884C\u7684 CSS \u4EE3\u7801\uFF0C\u4F60\u90FD\u66FE\u7ECF\u5386\u8FC7\u8FD9\u6837\u7684\u4F53\u9A8C\uFF1A</p><ol><li>\u8FD9\u4E2A class \u5230\u5E95\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</li><li>\u8FD9\u4E2A class \u5728\u54EA\u91CC\u88AB\u4F7F\u7528\u5462\uFF1F</li><li>\u5982\u679C\u6211\u521B\u5EFA\u4E00\u4E2A <code>xxoo</code> class\uFF0C\u4F1A\u9020\u6210\u51B2\u7A81\u5417\uFF1F</li></ol><p><code>Reasonable System for CSS Stylesheet Structure</code> \u7684\u76EE\u6807\u5C31\u662F\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\uFF0C\u5B83\u4E0D\u662F\u4E00\u4E2A\u6846\u67B6\uFF0C\u800C\u662F\u901A\u8FC7\u89C4\u8303\uFF0C\u8BA9\u4F60\u6784\u5EFA\u66F4\u5065\u58EE\u548C\u53EF\u7EF4\u62A4\u7684 CSS \u4EE3\u7801\u3002</p><h4 id="components\uFF08\u7EC4\u4EF6\uFF09" tabindex="-1">Components\uFF08\u7EC4\u4EF6\uFF09 <a class="header-anchor" href="#components\uFF08\u7EC4\u4EF6\uFF09" aria-hidden="true">#</a></h4><p><img src="https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/component-example.png" alt="Components"></p><p>\u4ECE <code>Components</code> \u7684\u89D2\u5EA6\u601D\u8003\uFF0C\u5C06\u7F51\u7AD9\u7684\u6A21\u5757\u90FD\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684 <code>Components</code>\u3002</p><h5 id="naming-components-\uFF08\u7EC4\u4EF6\u547D\u540D\uFF09" tabindex="-1">Naming components \uFF08\u7EC4\u4EF6\u547D\u540D\uFF09 <a class="header-anchor" href="#naming-components-\uFF08\u7EC4\u4EF6\u547D\u540D\uFF09" aria-hidden="true">#</a></h5><p><code>Components</code> <strong>\u6700\u5C11\u4EE5\u4E24\u4E2A\u5355\u8BCD\u547D\u540D</strong>\uFF0C\u901A\u8FC7 <code>-</code> \u5206\u79BB\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u70B9\u8D5E\u6309\u94AE (<code>.like-button</code>)</li><li>\u641C\u7D22\u6846 (<code>.search-form</code>)</li><li>\u6587\u7AE0\u5361\u7247 (<code>.article-card</code>)</li></ul><h4 id="elements-\uFF08\u5143\u7D20\uFF09" tabindex="-1">Elements \uFF08\u5143\u7D20\uFF09 <a class="header-anchor" href="#elements-\uFF08\u5143\u7D20\uFF09" aria-hidden="true">#</a></h4><p><img src="https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/component-elements.png" alt="Elements"></p><p><code>Elements</code> \u662F <code>Components</code> \u4E2D\u7684\u5143\u7D20</p><h5 id="naming-elements-\uFF08\u5143\u7D20\u547D\u540D\uFF09" tabindex="-1">Naming elements \uFF08\u5143\u7D20\u547D\u540D\uFF09 <a class="header-anchor" href="#naming-elements-\uFF08\u5143\u7D20\u547D\u540D\uFF09" aria-hidden="true">#</a></h5><p><code>Elements</code> \u7684\u7C7B\u540D\u5E94\u5C3D\u53EF\u80FD\u4EC5\u6709\u4E00\u4E2A\u5355\u8BCD\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* prettier-ignore */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">search-form</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; .field {</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h5 id="on-multiple-words-\uFF08\u591A\u4E2A\u5355\u8BCD\uFF09" tabindex="-1">On multiple words \uFF08\u591A\u4E2A\u5355\u8BCD\uFF09 <a class="header-anchor" href="#on-multiple-words-\uFF08\u591A\u4E2A\u5355\u8BCD\uFF09" aria-hidden="true">#</a></h5><p>\u5BF9\u4E8E\u5018\u82E5\u9700\u8981\u4E24\u4E2A\u6216\u4EE5\u4E0A\u5355\u8BCD\u8868\u8FBE\u7684 <code>Elements</code> \u7C7B\u540D\uFF0C\u4E0D\u5E94\u4F7F\u7528\u4E2D\u5212\u7EBF\u548C\u4E0B\u5212\u7EBF\u8FDE\u63A5\uFF0C\u5E94<strong>\u76F4\u63A5\u8FDE\u63A5</strong>\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* prettier-ignore */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">profile-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; .firstname {</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">lastname</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">avatar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h5 id="avoid-tag-selectors-\uFF08\u907F\u514D\u6807\u7B7E\u9009\u62E9\u5668\uFF09" tabindex="-1">Avoid tag selectors \uFF08\u907F\u514D\u6807\u7B7E\u9009\u62E9\u5668\uFF09 <a class="header-anchor" href="#avoid-tag-selectors-\uFF08\u907F\u514D\u6807\u7B7E\u9009\u62E9\u5668\uFF09" aria-hidden="true">#</a></h5><p>\u4EFB\u4F55\u65F6\u5019\u5C3D\u53EF\u80FD\u4F7F\u7528 <code>classnames</code>\u3002\u6807\u7B7E\u9009\u62E9\u5668\u5728\u4F7F\u7528\u4E0A\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u5176\u6027\u80FD\u4E0A\u7A0D\u5F31\uFF0C\u5E76\u4E14\u8868\u610F\u4E0D\u660E\u786E\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* prettier-ignore */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">article-card</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; h3 { </span><span style="color:#676E95;font-style:italic;">/* \u2717 avoid */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* \u2713 better */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="variants-\uFF08\u53D8\u4F53\uFF09" tabindex="-1">Variants \uFF08\u53D8\u4F53\uFF09 <a class="header-anchor" href="#variants-\uFF08\u53D8\u4F53\uFF09" aria-hidden="true">#</a></h4><p><img src="https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/component-modifiers.png" alt="Variants"></p><p><code>Components</code> \u548C <code>Elements</code> \u53EF\u80FD\u90FD\u4F1A\u62E5\u6709 <code>Variants</code>\u3002</p><h5 id="naming-variants-\uFF08\u53D8\u4F53\u547D\u540D\uFF09" tabindex="-1">Naming variants \uFF08\u53D8\u4F53\u547D\u540D\uFF09 <a class="header-anchor" href="#naming-variants-\uFF08\u53D8\u4F53\u547D\u540D\uFF09" aria-hidden="true">#</a></h5><p><code>Variants</code> \u7684 <code>classname</code> \u5E94\u5E26\u6709\u524D\u7F00\u4E2D\u5212\u7EBF <code>-</code></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* prettier-ignore */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">like-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;.-wide { </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">-short</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">-disabled</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h5 id="element-variants-\uFF08\u5143\u7D20\u53D8\u4F53\uFF09" tabindex="-1">Element variants \uFF08\u5143\u7D20\u53D8\u4F53\uFF09 <a class="header-anchor" href="#element-variants-\uFF08\u5143\u7D20\u53D8\u4F53\uFF09" aria-hidden="true">#</a></h5><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* prettier-ignore */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">shopping-card</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; .title { </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">-small</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h5 id="dash-prefixes-\uFF08\u4E2D\u5212\u7EBF\u524D\u7F00\uFF09" tabindex="-1">Dash prefixes \uFF08\u4E2D\u5212\u7EBF\u524D\u7F00\uFF09 <a class="header-anchor" href="#dash-prefixes-\uFF08\u4E2D\u5212\u7EBF\u524D\u7F00\uFF09" aria-hidden="true">#</a></h5><p>\u4E3A\u4EC0\u4E48\u4F7F\u7528\u4E2D\u5212\u7EBF\u4F5C\u4E3A\u53D8\u4F53\u7684\u524D\u7F00\uFF1F</p><ul><li>\u5B83\u53EF\u4EE5\u907F\u514D\u6B67\u4E49\u4E0E <code>Elements</code></li><li>CSS class \u4EC5\u80FD\u4EE5\u5355\u8BCD\u548C <code>_</code> \u6216 <code>-</code> \u5F00\u5934</li><li>\u4E2D\u5212\u7EBF\u6BD4\u4E0B\u5212\u7EBF\u66F4\u5BB9\u6613\u8F93\u51FA</li></ul><h4 id="layout-\uFF08\u5E03\u5C40\uFF09" tabindex="-1">Layout \uFF08\u5E03\u5C40\uFF09 <a class="header-anchor" href="#layout-\uFF08\u5E03\u5C40\uFF09" aria-hidden="true">#</a></h4><p><img src="https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/layouts.png" alt="Layout"></p><h5 id="avoid-positioning-properties-\uFF08\u907F\u514D\u5B9A\u4F4D\u5C5E\u6027\uFF09" tabindex="-1">Avoid positioning properties \uFF08\u907F\u514D\u5B9A\u4F4D\u5C5E\u6027\uFF09 <a class="header-anchor" href="#avoid-positioning-properties-\uFF08\u907F\u514D\u5B9A\u4F4D\u5C5E\u6027\uFF09" aria-hidden="true">#</a></h5><p>Components \u5E94\u8BE5\u5728\u4E0D\u540C\u7684\u4E0A\u4E0B\u6587\u4E2D\u90FD\u53EF\u4EE5\u590D\u7528\uFF0C\u6240\u4EE5\u5E94\u907F\u514D\u8BBE\u7F6E\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><ul><li>Positioning (position, top, left, right, bottom)</li><li>Floats (float, clear)</li><li>Margins (margin)</li><li>Dimensions (width, height)</li></ul><h5 id="fixed-dimensions-\uFF08\u56FA\u5B9A\u5C3A\u5BF8\uFF09" tabindex="-1">Fixed dimensions \uFF08\u56FA\u5B9A\u5C3A\u5BF8\uFF09 <a class="header-anchor" href="#fixed-dimensions-\uFF08\u56FA\u5B9A\u5C3A\u5BF8\uFF09" aria-hidden="true">#</a></h5><p>\u5934\u50CF\u548C logos \u8FD9\u4E9B\u5143\u7D20\u5E94\u8BE5\u8BBE\u7F6E\u56FA\u5B9A\u5C3A\u5BF8\uFF08\u5BBD\u5EA6\uFF0C\u9AD8\u5EA6...\uFF09\u3002</p><h5 id="define-positioning-in-parents-\uFF08\u5728\u7236\u5143\u7D20\u4E2D\u8BBE\u7F6E\u5B9A\u4F4D\uFF09" tabindex="-1">Define positioning in parents \uFF08\u5728\u7236\u5143\u7D20\u4E2D\u8BBE\u7F6E\u5B9A\u4F4D\uFF09 <a class="header-anchor" href="#define-positioning-in-parents-\uFF08\u5728\u7236\u5143\u7D20\u4E2D\u8BBE\u7F6E\u5B9A\u4F4D\uFF09" aria-hidden="true">#</a></h5><p>\u5018\u82E5\u4F60\u9700\u8981\u4E3A\u7EC4\u4EF6\u8BBE\u7F6E\u5B9A\u4F4D\uFF0C\u5E94\u5C06\u5728\u7EC4\u4EF6\u7684\u4E0A\u4E0B\u6587\uFF08\u7236\u5143\u7D20\uFF09\u4E2D\u8FDB\u884C\u5904\u7406\uFF0C\u6BD4\u5982\u4EE5\u4E0B\u4F8B\u5B50\u4E2D\uFF0C\u5C06 <code>widths</code> \u548C <code>floats</code> \u5E94\u7528\u5728 <code>list component(.article-list)</code> \u5F53\u4E2D\uFF0C\u800C\u4E0D\u662F <code>component(.article-card)</code> \u81EA\u8EAB\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">article-list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @include clearfix</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">article-card</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">33.3%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* prettier-ignore */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">article-card</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp; { </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">image</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">category</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="avoid-over-nesting-\uFF08\u907F\u514D\u8FC7\u5206\u5D4C\u5957\uFF09" tabindex="-1">Avoid over-nesting \uFF08\u907F\u514D\u8FC7\u5206\u5D4C\u5957\uFF09 <a class="header-anchor" href="#avoid-over-nesting-\uFF08\u907F\u514D\u8FC7\u5206\u5D4C\u5957\uFF09" aria-hidden="true">#</a></h4><p>\u5F53\u51FA\u73B0\u591A\u4E2A\u5D4C\u5957\u7684\u65F6\u5019\u5BB9\u6613\u5931\u53BB\u63A7\u5236\uFF0C\u5E94\u4FDD\u6301\u4E0D\u8D85\u8FC7\u4E00\u4E2A\u5D4C\u5957\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* \u2717 Avoid: 3 levels of nesting */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">image-frame</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; .description {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    &gt; .</span><span style="color:#B2CCD6;">icon</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u2713 Better: 2 levels */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* prettier-ignore */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">image-frame</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; .description { </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">description</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="apprehensions-\uFF08\u987E\u8651\uFF09" tabindex="-1">Apprehensions \uFF08\u987E\u8651\uFF09 <a class="header-anchor" href="#apprehensions-\uFF08\u987E\u8651\uFF09" aria-hidden="true">#</a></h4><ul><li><strong>\u4E2D\u5212\u7EBF<code>-</code>\u662F\u4E00\u5768\u7CDF\u7CD5\u7684\u73A9\u610F</strong>\uFF1A\u5176\u5B9E\u4F60\u53EF\u4EE5\u9009\u62E9\u6027\u7684\u4F7F\u7528\uFF0C\u53EA\u8981\u5C06 <code>Components, Elements, Variants</code> \u8BB0\u5728\u5FC3\u4E0A\u5373\u53EF\u3002</li><li><strong>\u6211\u6709\u65F6\u5019\u60F3\u4E0D\u51FA\u4E24\u4E2A\u5355\u8BCD\u5509</strong>\uFF1A\u6709\u4E9B\u7EC4\u4EF6\u7684\u786E\u4F7F\u7528\u4E00\u4E2A\u5355\u8BCD\u5C31\u80FD\u8868\u610F\uFF0C\u6BD4\u5982 <code>aleter</code> \u3002\u4F46\u5176\u5B9E\u4F60\u53EF\u4EE5\u4F7F\u7528\u540E\u7F00\uFF0C\u4F7F\u5176\u610F\u8BC6\u66F4\u52A0\u660E\u786E\u3002</li></ul><p>\u6BD4\u5982\u5757\u7EA7\u5143\u7D20\uFF1A</p><ul><li>.alert-box</li><li>.alert-card</li><li>.alert-block</li></ul><p>\u6216\u884C\u5185\u7EA7\u5143\u7D20</p><ul><li>.link-button</li><li>.link-span</li></ul><h4 id="terminologies-\uFF08\u672F\u8BED\uFF09" tabindex="-1">Terminologies \uFF08\u672F\u8BED\uFF09 <a class="header-anchor" href="#terminologies-\uFF08\u672F\u8BED\uFF09" aria-hidden="true">#</a></h4><p>RSCSS \u4E0E\u5176\u4ED6 CSS \u6A21\u5757\u7EC4\u7EC7\u7CFB\u7EDF\u76F8\u4F3C\u7684\u6982\u5FF5</p><table><thead><tr><th>RSCSS</th><th>BEM</th><th>SMACSS</th></tr></thead><tbody><tr><td>Component</td><td>Block</td><td>Module</td></tr><tr><td>Element</td><td>Element</td><td>?</td></tr><tr><td>Layout</td><td>?</td><td>Layout</td></tr><tr><td>Variant</td><td>Modifier</td><td>Theme &amp; State</td></tr></tbody></table><h4 id="summary-\uFF08\u603B\u7ED3\uFF09" tabindex="-1">Summary \uFF08\u603B\u7ED3\uFF09 <a class="header-anchor" href="#summary-\uFF08\u603B\u7ED3\uFF09" aria-hidden="true">#</a></h4><ul><li>\u4EE5 <code>Components</code> \u7684\u89D2\u5EA6\u601D\u8003\uFF0C\u4EE5\u4E24\u4E2A\u5355\u8BCD\u547D\u540D\uFF08<code>.screenshot-image</code>\uFF09</li><li><code>Components</code> \u4E2D\u7684 <code>Elements</code>\uFF0C\u4EE5\u4E00\u4E2A\u5355\u8BCD\u547D\u540D\uFF08<code>.blog-post .title</code>\uFF09</li><li><code>Variants</code>\uFF0C\u4EE5\u4E2D\u5212\u7EBF<code>-</code>\u4F5C\u4E3A\u524D\u7F00\uFF08<code>.shop-banner.-with-icon</code>\uFF09</li><li><code>Components</code> \u53EF\u4EE5\u4E92\u76F8\u5D4C\u5957</li><li>\u8BB0\u4F4F\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7EE7\u627F\u8BA9\u4E8B\u60C5\u53D8\u5F97\u66F4\u7B80\u5355</li></ul><hr><p><a href="https://github.com/rstacruz/rscss#readme" target="_blank" rel="noopener noreferrer">\u8BD1\u81EA:Reasonable System for CSS Stylesheet Structure</a></p>`,59),p=[o];function t(c,r,i,d,y,D){return n(),a("div",null,p)}var A=s(e,[["render",t]]);export{F as __pageData,A as default};
