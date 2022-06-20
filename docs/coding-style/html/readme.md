# HTML 编码规范

> 本规范设计 HTML 的编码风格和最佳实践，部分规则可通过 htmlhint 工具落地。

尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

## 概述

HTML 标签不区分大小写(仅适用于 ASCII 码)。

- `html` 文件后缀名统一为 `.html`
- 缩进使用 soft tab（2 个空格）
- 嵌套的节点应该缩进一次（2 个空格）
- 始终对属性使用双引号，而不是单引号
- 属性名全小写, 用连字符做分隔符
- **不要省略**自闭合标签(self-closing tag)结尾处斜线, [HTML5 规范](https://html.spec.whatwg.org/multipage/syntax.html#syntax-start-tag)中有说明斜线是可忽略的。
- **不要省略**可选的结束标签(closing tag), 例如 `</li>` 和 `</body>`
- 编写 HTML 代码时，尽量避免多余的父标签。
- 开发者偏好（meta元素）优先于Web服务器设置（HTTP头）
  - 和缓存相关的设置 `cache-cantrol`, `Pragma`, `Expires`，往往不生效，推荐使用 `http headers` 来配置缓存策略

属性顺序

HTML 属性顺序应当按照以下给出的顺序依次排列，确保代码的易读性。

1. class
2. id, name
3. data-*
4. src, for, type, href, value
5. title, alt
6. role, aria-*

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

设计稿转 code 相关产品产出的代码，无论结构还是名称，可维护性都比较差，不可在核心业务场景使用。

## 1 文档

### 1.1 文档类型

- 1.1.1【强制】使用 HTML5 DOCTYPE。

  在 HTML 文档的开头使用 [`<!DOCTYPE html>`](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype) 来添加 [Standards mode（标准模式）声明](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)。

  ```html
  <!-- bad - 非 HTML 5 DOCTYPE -->
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html>
  </html>

  <!-- good -->
  <!DOCTYPE html>
  <html>
  </html>
  ```

  HTML 仅限 `<!DOCTYPE html>` 中有使用大写，其他标签要求全部使用小写。

  不同 doctype 在不同浏览器下会触发不同的渲染模式（[这篇文章](https://hsivonen.fi/doctype/)总结的很到位）。

### 1.2 语言属性

- 1.2.1【推荐】指定 `html` 标签上的 `lang` 属性。

  [HTML5 规范](http://w3c.github.io/html/semantics.html#the-html-element)中提到：

  > 推荐开发者在 `html` 元素上指定 `lang` 属性，以指出文档的语言。这有助于读屏、翻译等工具的工作。

  `lang` 属性的值由 `language-subtags` 组成，在 [定义语言的标签(BCP47)](https://datatracker.ietf.org/doc/html/rfc5646) 规范中定义。

  ```html
  <html lang="zh-CN">
    <!-- ... -->
  </html>
  ```

  中文推荐使用 `zh-CN`, 因为历史原因, 标准是滞后的。参看下文了解更多

  1. [必读] 知乎 [使用 `zh` 还是 `zh-CN`](https://www.zhihu.com/question/20797118)
  2. mozilla [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)。
  3. W3C [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/)
  4. IETF [BCP 47 - Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646)
  5. IANA [Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

### 1.3 元数据

- 1.3.1【推荐】使用 UTF-8 字符编码。

  声明一个明确的字符编码，可以让浏览器更快速高效地确定适合网页内容的渲染方式。

  由于历史原因，不同浏览器采用了不同的字符编码。但对于新业务，如无特殊要求，统一使用 UTF-8 字符编码，以便统一。

  在 HTML 中使用 `<meta charset="utf-8" />` 声明文档的编码方式：

  ```html
  <head>
    <meta charset="utf-8" />
  </head>
  ```

  `utf-8` 大写还是小写? 按照字符集编码规范为大写, 而这里 HTML 是不区分大小写的, 从长远来看, 有人说趋势是转向小写.

  > From spec.whatwg.org (charset 的值**不区分大小写**)
  > The charset attribute specifies the character encoding used by the document. This is a character encoding declaration. If the attribute is present, its value must be an ASCII case-insensitive match for the string "utf-8".

  扩展阅读:

  - https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset
  - [Should HTML meta charset be lowercase or uppercase?](https://stackoverflow.com/questions/10888929/should-html-meta-charset-be-lowercase-or-uppercase)
  - [简述字符集与编码](https://segmentfault.com/a/1190000039368237)
  - 阮一峰: [字符编码笔记：ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
  - https://itindex.net/fr/detail/41279-html5-charset
  - https://www.w3.org/International/questions/qa-html-encoding-declarations#answer


- 1.3.2【推荐】页面提供给移动设备使用时，需要设置 [viewport](https://drafts.csswg.org/css-device-adapt/#viewport-meta)。

  设置 `viewport-fit` 设置为 "cover" 来兼容 iPhone X 的刘海屏，[了解更多](https://webkit.org/blog/7929/designing-websites-for-iphone-x/) 。


  ```html
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, viewport-fit=cover" />
  ```

  其他:

  - [iOS 10 viewport-fit 适配问题](https://github.com/RicoLiu/Blog/issues/17)，确保只在 iOS11+ 上添加改属性值。

- 1.3.3 IE 兼容模式

  用 `<meta>` 标签可以指定页面应该用什么版本的 IE 来渲染；

  除非你要兼容老版本 IE 浏览器(IE9 及以下), 否则无需添加此项.，了解更多，请阅读[这篇 Stack Overflow 文章](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)。

  ```html
  <!-- IE9 and below only -->
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  ```

  扩展阅读:

  - `x-ua-compatible` 标头不区分大小写
  - [搞懂X-UA-Compatible IE相容設定](https://blog.darkthread.net/blog/x-ua-compatible-setting)
    - X-UA-Compatible 是自从 IE8 新加的一个设置，对于 IE8 以下的浏览器是不识别的。
    - [Defining document compatibility](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/cc288325(v=vs.85)?redirectedfrom=MSDN)
    - [Specifying legacy document modes](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/jj676915(v=vs.85))
  - meta 中配置缓存头是不生效的。
    - `<meta http-equiv>` 仅允许使用 [HTML5 规范](https://html.spec.whatwg.org/multipage/semantics.html#pragma-directives)中枚举的这些值。
    - [How to control web page caching, across all browsers?](https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers/2068407#2068407)
    - 可使用官方验证器[验证有效性](https://validator.w3.org/)

### 1.4 资源加载

- 1.4.0【强制】配置 favicon 资源（必须项）。

  此项是必须项，必然会发一次请求(如果不配置，浏览器也仍然会发送此资源请求，请求根路径下 `/favicon.ico`)。最佳方案是

  1. 配置 favicon 且很小, 1k 以下。
  2. 配置支持缓存。

  ```html
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  ```

- 1.4.1【推荐】引入 CSS 和 JavaScript 时无需指定 type。

  根据 HTML5 规范，引入 CSS 和 JavaScript 时通常不需要指明 type，因为 [text/css](https://html.spec.whatwg.org/multipage/obsolete.html#attr-style-type) 和 [text/javascript](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type) 分别是他们的默认值。

  ```html
  <!-- bad -->
  <link type="text/css" rel="stylesheet" href="example.css" />
  <style type="text/css">
    /* ... */
  </style>
  <script type="text/javascript" src="example.js"></script>

  <!-- good -->
  <link rel="stylesheet" href="example.css" />
  <style>
    /* ... */
  </style>
  <script src="example.js"></script>
  ```

- 1.4.2【推荐】在 head 标签内引入 CSS，在 body 结束标签前引入 JS。

  在 `<body></body>` 中指定外部样式表和嵌入式样式块可能会导致页面的重排和重绘，对页面的渲染造成影响。因此，一般情况下，CSS 应在 `<head></head>` 标签里引入，[了解更多](https://developer.yahoo.com/performance/rules.html#css_top)。

  > 在 HTTP2（Chrome 浏览器 69 版本之后，Firefox 和 Edge）中可以在 body 中使用 link 标签引入样式文件，但不推荐在 body 中使用 `<style>` 标签的内联样式。**`<link rel="stylesheet">` 将会阻止后续内容的渲染，而不是整个页面**。

  除了基础库等必须要在 DOM 加载之前运行的 JavaScript 脚本，其他都在靠近 `body` 结束标签前引入，以防止出现页面渲染的阻塞，[了解更多](https://developer.yahoo.com/performance/rules.html#js_bottom)。

  ```html
  <!-- bad -->
  <!DOCTYPE html>
  <html>
    <head>
      <script src="mod-a.js"></script>
      <script src="jquery.js"></script>
    </head>
    <body>
      <style>
        .mod-example {
          padding-left: 15px;
        }
      </style>
    </body>
  </html>

  <!-- good -->
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        .mod-example {
          padding-left: 15px;
        }
      </style>
    </head>
    <body>
      ...
      <script src="path/to/my/script.js"></script>
    </body>
  </html>
  ```

- 1.4.3【推荐】外部资源的引用地址跟随页面协议，省略协议部分。

  ```html
  <link rel="stylesheet" href="//s.xcdn.com/lib/style/index-min.css" />
  ```

- 1.4.4【推荐】使用 preload 预加载关键资源，[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content)。

  ```html
  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />
  ```

  `preload`, `prefetch` 不要滥用。请注意以下事项

  1. `preload` 用于当前页面的关键资源，后续就要用到会优先加载。请求资源优先级为最高
  2. `prefetch` 用于将来可能会用到的资源，当页面空闲时才会加载。请求资源优先级为最低

- 1.4.5【推荐】使用 dns-prefetch 和 preconnect 处理 DNS 解析延迟问题，提高网页加载性能，[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/Performance/dns-prefetch)。

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
  ```

### 1.5 页面标题

- 1.5.1【强制】页面需要指定 title 标签，有且仅有 1 个。

  ```html
  <head>
    <meta charset="utf-8" />
    <title>淘宝网 - 淘！我喜欢</title>
  </head>
  ```

## 2 编码

### 2.1 缩进

- 2.1.1【推荐】统一使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Page title</title>
    </head>
    <body>
      <img src="images/company-logo.png" alt="Company" />
      <h1 class="hello-world">Hello, world!</h1>
    </body>
  </html>
  ```

### 2.2 注释

- 2.2.1【强制】在 HTML 注释代码中，不允许出现任何敏感信息。

  常见的敏感信息包括：

  - 业务相关敏感信息，例如业务规则
  - 员工个人隐私信息，例如邮箱、手机、身份证号码
  - AK（accessKey id, accesskey secret）
  - 证书、密码
  - 内网 IP、URL
  - 其他公司、员工相关的内部信息、敏感信息

- 2.2.2【推荐】单行注释，需在注释内容和注释符之间需留有一个空格，以增强可读性。

  ```html
  <!-- 单行注释 -->
  ```

- 2.2.3【推荐】多行注释，注释符单独占一行，注释内容 2 个空格缩进。

  ```html
  <!--
    多行注释
    多行注释
  -->
  ```

### 2.3 标签

- 2.3.1【强制】HTML 所有标签名统一使用小写。仅限 `<!DOCTYPE html>` 可有大写。

  ```html
  <!-- bad -->
  <H1>Hello, world!</H1>

  <!-- good -->
  <h1>Hello, world!</h1>
  ```

- 2.3.2【推荐】不要省略自闭合标签结尾处的斜线，且斜线前需留有一个空格。

  虽然 [HTML5 规范](https://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 中指出结尾的斜线是可选的，但保留它们可以明确表达该标签已闭合的语义，更易于维护和理解。

  同时，在 React 被广泛使用的今天，这与 [JSX 的规范](https://react-cn.github.io/react/tips/self-closing-tag.html) 相一致，JSX 中自闭合标签必须保留结尾的斜线。

  ```html
  <!-- bad -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <img src="images/foo.png" alt="foo">

  <!-- good -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <img src="images/foo.png" alt="foo" />
  ```

### 2.4 属性

- 2.4.1【强制】属性值使用双引号，不要使用单引号。

  ```html
  <!-- bad -->
  <link rel='stylesheet' href='example.css'>

  <!-- good -->
  <link rel="stylesheet" href="example.css" />
  ```

- 2.4.2【推荐】不要为 Boolean 属性添加取值。

  XHTML 需要每个属性声明取值，但是 HTML5 并不需要。一个元素中 Boolean 属性存在即表示取值 `true`，不存在则表示取值 `false`，[了解更多](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)。

  ```html
  <!-- bad -->
  <input type="text" disabled="disabled" />
  <input type="checkbox" value="1" checked="checked" />
  <select>
    <option value="1" selected="selected">1</option>
  </select>

  <!-- good -->
  <input type="text" disabled />
  <input type="checkbox" value="1" checked />
  <select>
    <option value="1" selected>1</option>
  </select>
  ```

  如果一定要为其赋值的话，请参考 WhatWG 规范：

  > 如果属性存在，其值必须是空字符串或 [...] 属性的规范名称，并且不要在首尾添加空白符。
  > 简单来说，就是别赋值

  <!-- js 对此操作有什么区别？ -->

- 2.4.3【推荐】自定义属性的命名：以 `data-` 为前缀。

  建议自定义属性的命名都以 `data-` 为前缀，以便区分。

  ```html
  <!-- bad -->
  <a modal="toggle" href="#">
    Example link
  </a>

  <!-- good -->
  <a data-modal="toggle" href="#">
    Example link
  </a>
  ```

### 2.5 语义化

- 2.5.1【参考】尽量根据语义使用 HTML 标签。

  HTML 标签（更严谨的叫法是 HTML 元素）都有其语义，例如 `p` 标签即 "paragraphs" 用于章节，`a` 标签即 "anchors" 用于锚点链接，[了解更多](https://www.w3.org/TR/2018/WD-html53-20181018/fullindex.html#index-elements)。

  我们应优先选取符合当下所需语义的标签，这既有助于[可访问性（Accessibility）](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility)，也可以在 CSS 加载失败时获得较好的展示效果。

  ```html
  <!-- bad -->
  <div class="list">
    <div class="list-item">1</div>
    <div class="list-item">2</div>
    <div class="list-item">3</div>
  </div>

  <!-- good -->
  <ul class="list">
    <li class="list-item">1</li>
    <li class="list-item">2</li>
    <li class="list-item">3</li>
  </ul>
  ```

### 2.6 可访问性

- 2.6.1【参考】注意 HTML 的可访问性（Accessibility）。

  网页可访问性使网页内容落实 "无障碍"，让不同程度或需求的用户可以顺畅的获取网站上的信息。传统上我们认为这只与残疾人士有关，但提升网站的可访问性也可以让其他用户群体受益，比如使用移动设备的人群或低速网络的人群。

  例如，为 img 标签设置 alt 属性：

  ```html
  <!-- bad - 缺少 alt 属性，无法被无障碍阅读器识别 -->
  <img src="hello.jpg" />

  <!-- good -->
  <img src="hello.jpg" alt="Welcome to visit!" />

  <!-- good - 图片无需被无障碍阅读器识别时 -->
  <img src="logo.jpg" alt="" />

  <!-- good - 图片无需被无障碍阅读器识别时 -->
  <img src="logo.jpg" role="presentation" />
  ```

  了解更多 HTML 可访问性的知识，可以阅读[这篇 MDN 的文章](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility)。

## 3. 脚手架模板

根据以上规范，建议的 HTML 脚手架模板如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="淘宝网 - 亚洲较大的网上交易平台" />
    <meta name="keyword" content="淘宝,掏宝,网上购物,C2C" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, viewport-fit=cover" />
    <title>淘宝网</title>
    <link rel="stylesheet" href="example.css" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="container"></div>
    <script src="example.js"></script>
  </body>
</html>
```

## 参考资料

- [Code Guide by @mdo](http://codeguide.co)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Code Guide by @AlloyTeam-materliu](http://materliu.github.io/code-guide/)
