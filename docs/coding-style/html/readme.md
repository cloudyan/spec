# HTML 代码规范

## 语法

- 缩进使用 soft tab(2个空格)
- 嵌套的节点应该缩进
- 在属性上, 使用上引号, 不要使用单引号
- 属性名全小写, 用连字符做分隔符
- 不要再自动闭合标签结尾处使用斜线
- 不要忽略可选的关闭标签, 例如 `</li>` 和 `</body>`

示例

```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
  </head>
</html>
```

## HTML5 doctype

统一使用 html5 `<!DOCTYPE html>`

虽然doctype不区分大小写，但是按照惯例，doctype大写

```html
<!DOCTYPE html>
```

## lang属性

根据HTML5规范：

> 应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

更多关于 lang 属性的说明[在这里](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

在sitepoint上可以查到[语言列表](http://reference.sitepoint.com/html/lang-codes)

但sitepoint只是给出了语言的大类，例如中文只给出了zh，但是没有区分香港，台湾，大陆。而微软给出了一份更加详细的语言列表，其中细分了zh-cn, zh-hk, zh-tw。

```html
<html lang="en-us">
</html>
```

## 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

```html
<meta charset="UTF-8">
```

## IE兼容模式

用 `<meta>` 标签可以指定页面应该用什么版本的IE来渲染；

如果你想要了解更多，请点击[这里](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)；

不同doctype在不同浏览器下会触发不同的渲染模式（[这篇文章](https://hsivonen.fi/doctype/)总结的很到位）。

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## 引入CSS, JS

根据HTML5规范, 通常在引入CSS和JS时不需要指明 `type`, 因为 `text/css` 和 `text/javascript` 分别是他们的默认值。

