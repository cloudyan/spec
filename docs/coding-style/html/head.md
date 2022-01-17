# HEAD

## 文档类型

为每个 HTML 页面的第一行添加标准模式（standard mode）的声明， 这样能够确保在每个浏览器中拥有一致的表现。

统一使用 html5 `<!DOCTYPE html>`

虽然 DOCTYPE 不区分大小写, 但是按照惯例, DOCTYPE 大写

```html
<!DOCTYPE html>
```

## 语言属性

根据HTML5规范：

> 应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

为什么使用 lang="zh-cmn-Hans" 而不是我们通常写的 lang="zh-CN" 呢? 请参考知乎上的讨论: [网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](https://www.zhihu.com/question/20797118)

```html
<!-- 中文 -->
<html lang="zh-Hans">

<!-- 简体中文 -->
<html lang="zh-cmn-Hans">

<!-- 繁体中文 -->
<html lang="zh-cmn-Hant">

<!-- English -->
<html lang="en">
```

扩展阅读: 知乎-[网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](https://www.zhihu.com/question/20797118)

## 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

- 以无 BOM 的 utf-8 编码作为文件格式;
- 指定字符编码的 meta 必须是 head 的第一个直接子元素；请参考前端观察的博文： HTML5 Charset 能用吗？

```html
<meta charset="UTF-8">
```

大写还是小写? 按照字符集编码规范为大写, 而这里HTML 是不区分大小写的, 从长远来看, 有人说趋势是转向小写.

> From spec.whatwg.org (charset 的值**不区分大小写**)
> The charset attribute specifies the character encoding used by the document. This is a character encoding declaration. If the attribute is present, its value must be an ASCII case-insensitive match for the string "utf-8".

扩展阅读:

- https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset
- [Should HTML meta charset be lowercase or uppercase?](https://stackoverflow.com/questions/10888929/should-html-meta-charset-be-lowercase-or-uppercase)
- [简述字符集与编码](https://segmentfault.com/a/1190000039368237)
- 阮一峰: [字符编码笔记：ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
- https://itindex.net/fr/detail/41279-html5-charset
- https://www.w3.org/International/questions/qa-html-encoding-declarations#answer

## IE兼容模式

用 `<meta>` 标签可以指定页面应该用什么版本的IE来渲染；

如果你想要了解更多，请点击[这里](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)；

不同doctype在不同浏览器下会触发不同的渲染模式（[这篇文章](https://hsivonen.fi/doctype/)总结的很到位）。

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

除非你要兼容老版本 IE 浏览器(IE9 及以下), 否则无需添加此项.

扩展阅读:

- `X-UA-compatible` 标头不区分大小写
- [对http-equiv中"X-UA-Compatible"属性的理解](https://developer.aliyun.com/article/597356)
  - X-UA-Compatible是自从IE8新加的一个设置，对于IE8以下的浏览器是不识别的。
  - 在网页中指定的模式优先权高于服务器中(通过HTTP Header)所指定的模式? 待定

## SEO 优化

添加 TDK 信息

```html
<title>Style Guide</title>
<meta name="keywords" content="your keywords">
<meta name="description" content="your description">
<meta name="author" content="author,email address">
```

## viewport

为移动端设备优化，设置可见区域的宽度和初始缩放比例。

- `viewport`: 一般指的是浏览器窗口内容区的大小，不包含工具条、选项卡等内容；
- `width`: 浏览器宽度，输出设备中的页面可见区域宽度；
- `device-width`: 设备分辨率宽度，输出设备的屏幕可见宽度；
- `initial-scale`: 初始缩放比例；
- `maximum-scale`: 最大缩放比例；

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 桌面图标

- apple-touch-icon 图片自动处理成圆角和高光等效果;
- apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图;

```html
<!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">

<!-- iPad，72x72 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-72x72-precomposed.png" sizes="72x72">

<!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-114x114-precomposed.png" sizes="114x114">

<!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-144x144-precomposed.png" sizes="144x144">
```

## favicon

此项容易被忽略, 即使不配置，默认浏览器仍然会发送此请求.

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证 favicon 可访问，避免404，必须遵循以下两种方法之一：

- 在 Web Server 根目录放置 favicon.ico 文件；
- 使用 link 指定 favicon；

```html
<link rel="shortcut icon" href="path/to/favicon.ico">

<!-- 或 -->
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
```

## HEAD 模板

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Style Guide</title>
    <meta name="description" content="不超过150个字符">
    <meta name="keywords" content="">
    <meta name="author" content="name, email@gmail.com">

    <!-- 为移动设备添加 viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- iOS 图标 -->
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">

    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
    <link rel="shortcut icon" href="path/to/favicon.ico">
  </head>
  <body>

  </body>
</html>
```

## 引入CSS, JS

根据HTML5规范, 通常在引入CSS和JS时不需要指明 `type`, 因为 `text/css` 和 `text/javascript` 分别是他们的默认值。
