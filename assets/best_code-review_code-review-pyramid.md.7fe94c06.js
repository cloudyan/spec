import{_ as e,c as i,o as l,a as t}from"./app.a721e852.js";const f=JSON.parse('{"title":"The Code Review Pyramid","description":"","frontmatter":{},"headers":[],"relativePath":"best/code-review/code-review-pyramid.md","lastUpdated":1655734594000}'),r={name:"best/code-review/code-review-pyramid.md"},s=t('<h1 id="the-code-review-pyramid" tabindex="-1">The Code Review Pyramid <a class="header-anchor" href="#the-code-review-pyramid" aria-hidden="true">#</a></h1><ul><li><a href="https://www.morling.dev/blog/the-code-review-pyramid/" target="_blank" rel="noopener noreferrer">https://www.morling.dev/blog/the-code-review-pyramid/</a></li></ul><p>Questions to ask:</p><p>Smaller effort for changes later on Automate here!</p><ul><li>Code Style <ul><li>Is the project&#39;s formatting style applied?</li><li>Does is adhere to agreed on naming conventions</li><li>Is it DRY?</li><li>Is the code sufficiently &quot;readable&quot;(method lengths, etc.)</li></ul></li><li>Tests <ul><li>Are all tests passing?</li><li>Are new features reasonably tested?</li><li>Are corner cases tested?</li><li>Is it using unit tests where possible, integration tests where necessary?</li><li>Are there tests for NFRs, e.g. performance?</li></ul></li><li>Documentation <ul><li>New features reasonably documented?</li><li>Are the relevant kinds of docs covered: README, API docs, user guide, reference docs, etc.?</li><li>Are docs understandable, are there no significant typos and grammar mistakes?</li></ul></li><li>Implementation Semantics <ul><li>Does it satisfy the original requirements?</li><li>Is it logically corrent?</li><li>Is there no unnecessary complexity?</li><li>Is it robust(no concurrency issues, proper error handling, etc.)?</li><li>Is it performant?</li><li>Is it secure(e.g. no SQL injections, etc.)</li><li>Do newly added dependencies pull their weight? Is their license acceptable?</li></ul></li><li>API Semantics <ul><li>API as small as possible, as large as needed?</li><li>Is there one way of doing one thing, not multiple ones?</li><li>Is it consistent, does it follow the principle of least surprises?</li><li>Clean split of API/internals, without internals leaking in the API?</li><li>Are there no breaking changes to user-facing parts(API classes, configuration, metrics, log formats, etc.)?</li><li>Is a new API generally useful and not overly specific?</li></ul></li></ul><p>Focus your review efforts here! Larger effort for changes later on</p><h1 id="\u4EE3\u7801\u5BA1\u67E5\u91D1\u5B57\u5854" tabindex="-1">\u4EE3\u7801\u5BA1\u67E5\u91D1\u5B57\u5854 <a class="header-anchor" href="#\u4EE3\u7801\u5BA1\u67E5\u91D1\u5B57\u5854" aria-hidden="true">#</a></h1><p>\u8981\u95EE\u7684\u95EE\u9898\uFF1A</p><p>\u4EE5\u540E\u66F4\u6539\u7684\u5DE5\u4F5C\u91CF\u8F83\u5C0F \u5728\u8FD9\u91CC\u81EA\u52A8\u5316\uFF01</p><ul><li>\u4EE3\u7801\u98CE\u683C <ul><li>\u662F\u5426\u5E94\u7528\u4E86\u9879\u76EE\u7684\u683C\u5F0F\u6837\u5F0F\uFF1F</li><li>\u662F\u5426\u9075\u5B88\u5546\u5B9A\u7684\u547D\u540D\u7EA6\u5B9A</li><li>\u662F\u5426\u91CD\u590D\u4E86\uFF1F</li><li>\u4EE3\u7801\u662F\u5426\u8DB3\u591F\u201C\u53EF\u8BFB\u201D\uFF08\u65B9\u6CD5\u3001\u957F\u5EA6\u7B49\uFF09</li></ul></li><li>\u6D4B\u8BD5 <ul><li>\u6240\u6709\u7684\u6D4B\u8BD5\u90FD\u901A\u8FC7\u4E86\u5417\uFF1F</li><li>\u65B0\u529F\u80FD\u662F\u5426\u7ECF\u8FC7\u5408\u7406\u6D4B\u8BD5\uFF1F</li><li>\u89D2\u843D\u6848\u4F8B\u662F\u5426\u7ECF\u8FC7\u6D4B\u8BD5\uFF1F</li><li>\u662F\u5426\u5C3D\u53EF\u80FD\u4F7F\u7528\u5355\u5143\u6D4B\u8BD5\uFF0C\u5FC5\u8981\u65F6\u4F7F\u7528\u96C6\u6210\u6D4B\u8BD5\uFF1F</li><li>\u662F\u5426\u6709\u9488\u5BF9 NFR \u7684\u6D4B\u8BD5\uFF0C\u4F8B\u5982\u8868\u73B0\uFF1F</li></ul></li><li>\u6587\u6863 <ul><li>\u5408\u7406\u8BB0\u5F55\u7684\u65B0\u529F\u80FD\uFF1F</li><li>\u662F\u5426\u6DB5\u76D6\u76F8\u5173\u7C7B\u578B\u7684\u6587\u6863\uFF1A\u81EA\u8FF0\u6587\u4EF6\u3001API \u6587\u6863\u3001\u7528\u6237\u6307\u5357\u3001\u53C2\u8003\u6587\u6863\u7B49\uFF1F</li><li>\u6587\u6863\u662F\u5426\u53EF\u4EE5\u7406\u89E3\uFF0C\u662F\u5426\u6CA1\u6709\u660E\u663E\u7684\u62FC\u5199\u9519\u8BEF\u548C\u8BED\u6CD5\u9519\u8BEF\uFF1F</li></ul></li><li>\u5B9E\u73B0\u8BED\u4E49 <ul><li>\u662F\u5426\u6EE1\u8DB3\u539F\u59CB\u8981\u6C42\uFF1F</li><li>\u903B\u8F91\u4E0A\u662F\u5426\u6B63\u786E\uFF1F</li><li>\u6CA1\u6709\u4E0D\u5FC5\u8981\u7684\u590D\u6742\u6027\u5417\uFF1F</li><li>\u5B83\u662F\u5426\u5065\u58EE\uFF08\u6CA1\u6709\u5E76\u53D1\u95EE\u9898\u3001\u6B63\u786E\u7684\u9519\u8BEF\u5904\u7406\u7B49\uFF09\uFF1F</li><li>\u6027\u80FD\u597D\u5417\uFF1F</li><li>\u662F\u5426\u5B89\u5168\uFF08\u4F8B\u5982\uFF0C\u6CA1\u6709 SQL \u6CE8\u5165\u7B49\uFF09</li><li>\u65B0\u6DFB\u52A0\u7684\u4F9D\u8D56\u9879\u662F\u5426\u4F1A\u53D1\u6325\u4F5C\u7528\uFF1F\u4ED6\u4EEC\u7684\u6267\u7167\u53EF\u4EE5\u63A5\u53D7\u5417\uFF1F</li></ul></li><li>API \u8BED\u4E49 <ul><li>API \u5C3D\u53EF\u80FD\u5C0F\uFF0C\u5C3D\u53EF\u80FD\u5927\uFF1F</li><li>\u662F\u5426\u6709\u4E00\u79CD\u65B9\u6CD5\u53EF\u4EE5\u505A\u4E00\u4EF6\u4E8B\uFF0C\u800C\u4E0D\u662F\u591A\u4E2A\uFF1F</li><li>\u662F\u5426\u4E00\u81F4\uFF0C\u662F\u5426\u9075\u5FAA\u6700\u5C0F\u610F\u5916\u539F\u5219\uFF1F</li><li>API/\u5185\u90E8\u7EC4\u4EF6\u7684\u5E72\u51C0\u62C6\u5206\uFF0CAPI \u4E2D\u6CA1\u6709\u5185\u90E8\u7EC4\u4EF6\u6CC4\u6F0F\uFF1F</li><li>\u9762\u5411\u7528\u6237\u7684\u90E8\u5206\uFF08API \u7C7B\u3001\u914D\u7F6E\u3001\u6307\u6807\u3001\u65E5\u5FD7\u683C\u5F0F\u7B49\uFF09\u662F\u5426\u6CA1\u6709\u91CD\u5927\u66F4\u6539\uFF1F</li><li>\u65B0\u7684 API \u662F\u5426\u666E\u904D\u6709\u7528\u4E14\u4E0D\u662F\u8FC7\u4E8E\u5177\u4F53\uFF1F</li></ul></li></ul><p>\u628A\u4F60\u7684\u5BA1\u67E5\u5DE5\u4F5C\u96C6\u4E2D\u5728\u8FD9\u91CC\uFF01 \u4EE5\u540E\u4E3A\u66F4\u6539\u4ED8\u51FA\u66F4\u5927\u7684\u52AA\u529B</p>',11),a=[s];function o(n,c,d,u,p,h){return l(),i("div",null,a)}var g=e(r,[["render",o]]);export{f as __pageData,g as default};
