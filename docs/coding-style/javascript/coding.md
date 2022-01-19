## 代码格式

1. 使用 2 个空格进行缩进

正例：

```js
if (x < y) {
  x += 10;
} else {
  x += 1;
}
```

不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性。

说明：任何情形，没有必要插入多个空行进行隔开。

## 字符串

统一使用单引号(‘)，不使用双引号(“)。这在创建 HTML 字符串非常有好处：

正例:

```js
let str = 'foo';
let testDiv = '<div id="test"></div>';
```

反例:

```js
let str = 'foo';
let testDiv = "<div id='test'></div>";
```

### 对象声明

使用字面值创建对象

正例： `let user = {};`

反例： `let user = new Object();`

使用字面量来代替对象构造器

正例：

```js
var user = {
  age: 0,
  name: 1,
  city: 3
};
```

反例：

```js
var user = new Object();
user.age = 0;
user.name = 0;
user.city = 0;
```
