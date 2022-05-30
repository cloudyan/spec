# BEM

## 什么是 BEM 命名规范

Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。

- `-` 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号
- `__`双下划线：双下划线用来连接块和块的子元素
- `--` 双连字符：单下划线用来描述一个块或者块的子元素的一种状态

BEM 是一个简单又非常有用的命名约定。让你的前端代码更容易阅读和理解，更容易协作，更容易控制，更加健壮和明确，而且更加严密。

### BEM 命名模式

BEM 命名约定的模式是：

```css
/* prettier-ignore */
.block {}
.block__element {}
.block--modifier {}
.sub-block__element {}
.sub-block--modifier {}
```

每一个块(block)名应该有一个命名空间（前缀）

- `block` 代表了更高级别的抽象或组件。
- `block__element` 代表 .block 的后代，用于形成一个完整的 .block 的整体。
- `block--modifier` 代表 .block 的不同状态或不同版本。

使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定。如：

```css
/* prettier-ignore */
.sub-block__element {}

.sub-block--modifier {}
```

### BEM 命名法的好处

BEM 的关键是，可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。于是，通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。

## 如何使用 BEM 命名法

### 2.1 什么时候应该用 BEM 格式

使用 BEM 的诀窍是，你要知道什么时候哪些东西是应该写成 BEM 格式的。

并不是每个地方都应该使用 BEM 命名方式。当需要明确关联性的模块关系时，应当使用 BEM 格式。

比如只是一条公共的单独的样式，就没有使用 BEM 格式的意义：

```css
.hide {
  display: none !important;
}
```

### 2.2 在 CSS 预处理器中使用 BEM 格式

BEM 的一个槽点是，命名方式长而难看，书写不雅。相比 BEM 格式带来的便利来说，我们应客观看待。

而且，一般来说会使用通过 LESS/SASS 等预处理器语言来编写 CSS，利用其语言特性书写起来要简单很多。

参考：

- https://juejin.cn/post/6844903672162304013
