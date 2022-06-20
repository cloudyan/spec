import{_ as s,c as n,o as a,a as p}from"./app.a721e852.js";const d=JSON.parse('{"title":"\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9644\uFF1A \u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD","slug":"\u9644\uFF1A-\u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD"}],"relativePath":"coding-style/naming/example.md","lastUpdated":1655734594000}'),l={name:"coding-style/naming/example.md"},e=p(`<h1 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h1><ol><li><p>\u91C7\u7528\u5C0F\u5199\u9A7C\u5CF0\u547D\u540D lowerCamelCase\uFF0C\u4EE3\u7801\u4E2D\u7684\u547D\u540D\u5747\u4E0D\u80FD\u4EE5\u4E0B\u5212\u7EBF\uFF0C\u4E5F\u4E0D\u80FD\u4EE5\u4E0B\u5212\u7EBF\u6216\u7F8E\u5143\u7B26\u53F7\u7ED3\u675F</p><p>\u53CD\u4F8B: <code>_name</code> / <code>name_</code> / <code>name$</code></p></li><li><p>\u65B9\u6CD5\u540D\u3001\u53C2\u6570\u540D\u3001\u6210\u5458\u53D8\u91CF\u3001\u5C40\u90E8\u53D8\u91CF\u90FD\u7EDF\u4E00\u4F7F\u7528 lowerCamelCase \u98CE\u683C\uFF0C\u5FC5\u987B\u9075\u4ECE\u9A7C\u5CF0\u5F62\u5F0F\u3002</p><p>\u6B63\u4F8B: <code>localValue</code> / <code>getHttpMessage()</code> / <code>inputUserId</code></p><p>\u5176\u4E2D <code>method</code> \u65B9\u6CD5\u547D\u540D\u5FC5\u987B\u662F <code>\u52A8\u8BCD</code> \u6216\u8005 <code>\u52A8\u8BCD+\u540D\u8BCD</code> \u5F62\u5F0F</p><p>\u6B63\u4F8B: <code>saveShopCarData</code> / <code>openShopCarInfoDialog</code></p><p>\u53CD\u4F8B: <code>save</code> / <code>open</code> / <code>show</code> / <code>go</code></p><blockquote><p>\u7279\u6B64\u8BF4\u660E\uFF0C\u589E\u5220\u67E5\u6539\uFF0C\u8BE6\u60C5\u7EDF\u4E00\u4F7F\u7528\u5982\u4E0B 5 \u4E2A\u5355\u8BCD\uFF0C\u4E0D\u5F97\u4F7F\u7528\u5176\u4ED6\uFF08\u76EE\u7684\u662F\u4E3A\u4E86\u7EDF\u4E00\u5404\u4E2A\u7AEF\uFF09</p></blockquote><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">add </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> update </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> detail </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> get</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5E38\u91CF\u547D\u540D\u5168\u90E8\u5927\u5199\uFF0C\u5355\u8BCD\u95F4\u7528\u4E0B\u5212\u7EBF\u9694\u5F00\uFF0C\u529B\u6C42\u8BED\u4E49\u8868\u8FBE\u5B8C\u6574\u6E05\u695A\uFF0C\u4E0D\u8981\u5ACC\u540D\u5B57\u957F\u3002</p><p>\u6B63\u4F8B: <code>MAX_STOCK_COUNT</code></p><p>\u53CD\u4F8B: <code>MAX_COUNT</code></p></li></ol><h2 id="\u9644\uFF1A-\u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD" tabindex="-1">\u9644\uFF1A \u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD <a class="header-anchor" href="#\u9644\uFF1A-\u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">get \u83B7\u53D6</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">set \u8BBE\u7F6E</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">add \u589E\u52A0</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">remove \u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">create \u521B\u5EFA</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">destory \u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">start \u542F\u52A8</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">stop \u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">open \u6253\u5F00</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">close \u5173\u95ED</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">read \u8BFB\u53D6</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">write \u5199\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">load \u8F7D\u5165</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">save \u4FDD\u5B58</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">create \u521B\u5EFA</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">destroy \u9500\u6BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">begin \u5F00\u59CB</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">end \u7ED3\u675F</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">backup \u5907\u4EFD</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">restore \u6062\u590D</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> \u5BFC\u5165/export \u5BFC\u51FA</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">split \u5206\u5272/merge \u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">inject \u6CE8\u5165/extract \u63D0\u53D6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">attach \u9644\u7740/detach \u8131\u79BB</span></span>
<span class="line"><span style="color:#A6ACCD;">bind \u7ED1\u5B9A/separate \u5206\u79BB</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">view \u67E5\u770B/browse \u6D4F\u89C8</span></span>
<span class="line"><span style="color:#A6ACCD;">edit \u7F16\u8F91/modify \u4FEE\u6539</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">select \u9009\u53D6/mark \u6807\u8BB0</span></span>
<span class="line"><span style="color:#A6ACCD;">copy \u590D\u5236/paste \u7C98\u8D34</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">undo \u64A4\u9500/redo \u91CD\u505A</span></span>
<span class="line"><span style="color:#A6ACCD;">insert \u63D2\u5165/delete \u79FB\u9664</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">add \u52A0\u5165/append \u6DFB\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;">clean \u6E05\u7406/clear \u6E05\u9664</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">index \u7D22\u5F15/sort \u6392\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">find \u67E5\u627E/search \u641C\u7D22</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">increase \u589E\u52A0/decrease \u51CF\u5C11</span></span>
<span class="line"><span style="color:#A6ACCD;">play \u64AD\u653E/pause \u6682\u505C</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">launch \u542F\u52A8/run \u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">compile \u7F16\u8BD1/execute \u6267\u884C</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">debug \u8C03\u8BD5/trace \u8DDF\u8E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">observe \u89C2\u5BDF/listen \u76D1\u542C</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">build \u6784\u5EFA/publish \u53D1\u5E03</span></span>
<span class="line"><span style="color:#A6ACCD;">input \u8F93\u5165/output \u8F93\u51FA</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">encode \u7F16\u7801/decode \u89E3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">encrypt \u52A0\u5BC6/decrypt \u89E3\u5BC6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">compress \u538B\u7F29/decompress \u89E3\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">pack \u6253\u5305/unpack \u89E3\u5305</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">parse \u89E3\u6790/emit \u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">connect \u8FDE\u63A5/disconnect \u65AD\u5F00</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">send \u53D1\u9001/receive \u63A5\u6536</span></span>
<span class="line"><span style="color:#A6ACCD;">download \u4E0B\u8F7D/upload \u4E0A\u4F20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">refresh \u5237\u65B0/synchronize \u540C\u6B65</span></span>
<span class="line"><span style="color:#A6ACCD;">update \u66F4\u65B0/revert \u590D\u539F</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">lock \u9501\u5B9A/unlock \u89E3\u9501</span></span>
<span class="line"><span style="color:#A6ACCD;">check out \u7B7E\u51FA/check in \u7B7E\u5165</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">submit \u63D0\u4EA4/commit \u4EA4\u4ED8</span></span>
<span class="line"><span style="color:#A6ACCD;">push \u63A8/pull \u62C9</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">expand \u5C55\u5F00/collapse \u6298\u53E0</span></span>
<span class="line"><span style="color:#A6ACCD;">begin \u8D77\u59CB/end \u7ED3\u675F</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">start \u5F00\u59CB/finish \u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">enter \u8FDB\u5165/exit \u9000\u51FA</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">abort \u653E\u5F03/quit \u79BB\u5F00</span></span>
<span class="line"><span style="color:#A6ACCD;">obsolete \u5E9F\u5F03/depreciate \u5E9F\u65E7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">collect \u6536\u96C6/aggregate \u805A\u96C6</span></span>
<span class="line"></span></code></pre></div>`,4),o=[e];function c(t,r,D,C,A,i){return a(),n("div",null,o)}var F=s(l,[["render",c]]);export{d as __pageData,F as default};
