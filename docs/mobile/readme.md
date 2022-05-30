# 移动端开发

这里汇总了**移动端开发常见的坑**, 并给出**坑产生的原理**以及**现阶段常规的填坑方案**.

## 问题汇总

- click 点击穿透与延迟
  - <https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away>
  - <https://webkit.org/blog/5610/more-responsive-tapping-on-ios/>
  - [5 Ways to Prevent the 300ms Click Delay on Mobile Devices](https://www.sitepoint.com/5-ways-prevent-300ms-click-delay-mobile-devices/)
- H5 调试相关方案与策略
- iOS 短信验证码重复输入问题
- iOS 日期格式转换问题
- iframe 跨域解决方案
- 空白屏监控方案

相关问题分类

- 踩坑
  - iOS
    - 滚动不流畅
    - 缩放不确定性
    - click 延迟与穿透
    - 上拉下来空白
    - iPhoneX 适配
    - iOS 产品上架审核问题
  - iOS & Android
    - 键盘顶起来, 不回滚
    - 1px 问题
      - 物理像素 vs 逻辑像素
    - 响应式布局
      - rem vs vw
  - 微信
    - 公众号分享
    - 保存页面为二维码/图片
  - DSBridge vs WebViewJavascriptBridge

## 菜单

- [移动端开发](#移动端开发)
  - [问题汇总](#问题汇总)
  - [菜单](#菜单)
    - [1px 问题](#1px-问题)
    - [响应式布局](#响应式布局)
    - [iOS 滚动不流畅](#ios-滚动不流畅)
    - [快速回弹滚动](#快速回弹滚动)
    - [iOS 上拉边界下拉出现白色空白](#ios-上拉边界下拉出现白色空白)
      - [监听事件禁止滑动](#监听事件禁止滑动)
      - [滚动妥协填充空白，装饰成其他功能](#滚动妥协填充空白装饰成其他功能)
    - [页面放大或缩小不确定性行为](#页面放大或缩小不确定性行为)
    - [click 点击事件延时与穿透](#click-点击事件延时与穿透)
      - [使用 touchstart 替换 click](#使用-touchstart-替换-click)
      - [使用 fastclick 库(推荐)](#使用-fastclick-库推荐)
    - [click 的 300ms 延迟响应](#click-的-300ms-延迟响应)
    - [软键盘将页面顶起来、收起未回落问题](#软键盘将页面顶起来收起未回落问题)
    - [iOS 中 position:fixed 的兼容性问题](#ios-中-positionfixed-的兼容性问题)
    - [iOS 中 position:fixed 吸底时滑动出现抖动](#ios-中-positionfixed-吸底时滑动出现抖动)
    - [fixed 与 input](#fixed-与-input)
    - [input 的 compositionstart 和 compositionend 事件](#input-的-compositionstart-和-compositionend-事件)
    - [iPhone X 系列安全区域适配问题](#iphone-x-系列安全区域适配问题)
    - [页面生成为图片和二维码问题](#页面生成为图片和二维码问题)
      - [生成二维码](#生成二维码)
      - [生成图片](#生成图片)
    - [微信公众号分享问题](#微信公众号分享问题)
    - [H5 调用 SDK 相关解决方案](#h5-调用-sdk-相关解决方案)
    - [H5 调试相关方案策略](#h5-调试相关方案策略)
    - [H5 唤起 APP](#h5-唤起-app)
    - [设备检测](#设备检测)
    - [获取滚动条值](#获取滚动条值)
    - [清除输入框内阴影](#清除输入框内阴影)
    - [Meta 相关](#meta-相关)
      - [页面窗口自动调整到设备宽度，并禁止用户缩放页面](#页面窗口自动调整到设备宽度并禁止用户缩放页面)
      - [电话号码识别](#电话号码识别)
      - [邮箱地址的识别](#邮箱地址的识别)
      - [指定 iOS 的 safari 顶端状态条的样式](#指定-ios-的-safari-顶端状态条的样式)

---

### 1px 问题

移动端 1px，说 1px 不够准确，应该说成 1 物理像素。

关于此问题及产生原因, 解决方案, 下文已讲解已经比较详尽

参考:

- [吃透移动端 1px ｜从基本原理到开源解决方案](https://juejin.cn/post/6844904023145857038)

方案

- 0.5px border
  - 从 iOS 8 开始，iOS 浏览器支持 0.5px 的 border，但是在 Android 上是不支持的，0.5px 会被认为是 0px，所以这种方法，兼容性是很差的。
- 背景渐变
  - `background-image:linear-gradient(180deg, $border-color, $border-color 50%, transparent 50%),`
  - 没有办法实现圆角
- 伪类 + transform 缩放

### 响应式布局

关于响应式布局, 使用 rem vs vw 的方案, 下面的文章介绍的比较全面了.

参考:

- [吃透移动端 H5 响应式布局 ｜深入原理到目前最佳实践方案](https://juejin.cn/post/6844904021552005128)

### iOS 滚动不流畅

- https://juejin.cn/post/6844904024790007815

### 快速回弹滚动

快速回弹滚动在手机浏览器上的发展历史：

1. 早期的时候，移动端的浏览器都不支持非 body 元素的滚动条，所以一般都借助 iScroll;
2. Android 3.0 / iOS 解决了非 body 元素的滚动问题，但滚动条不可见，同时 iOS 上只能通过 2 个手指进行滚动；
3. Android 4.0 解决了滚动条不可见及增加了快速回弹滚动效果，不过随后这个特性又被移除；
4. iOS 从 5.0 开始解决了滚动条不可见及增加了快速回弹滚动效果

如果想要为某个元素拥有 Native 般的滚动效果，可以这样操作：

```css
.element {
  overflow: auto; /* auto | scroll */
  -webkit-overflow-scrolling: touch;
}
```

除了 iScroll 之外，还有一个更加强大的滚动插件 [Swiper](http://www.idangero.us/swiper/#.VfaVk52qqko)，支持 3D 和内置滚动条等。

### iOS 上拉边界下拉出现白色空白

- https://juejin.cn/post/6844904024790007815

#### 监听事件禁止滑动

#### 滚动妥协填充空白，装饰成其他功能

### 页面放大或缩小不确定性行为

- https://juejin.cn/post/6844904024790007815

### click 点击事件延时与穿透

#### 使用 touchstart 替换 click

#### 使用 fastclick 库(推荐)

[fastclick 源码](https://github.com/ftlabs/fastclick/blob/main/lib/fastclick.js) 核心代码不长, 1000 行不到。有兴趣可以了解一下!

### click 的 300ms 延迟响应

click 的 300ms 延迟是由双击缩放(double tap to zoom)所导致的，由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，移动端浏览器就等待 300 毫秒，以判断用户是否再次点击了屏幕。

随着响应式网页逐渐增多，用户使用双击缩放机会减少，这 300ms 的延迟就更不可接受了。浏览器开发商也随之提供相应的解决方案。这些方案在[5 Ways to Prevent the 300ms Click Delay on Mobile Devices](http://www.sitepoint.com/5-ways-prevent-300ms-click-delay-mobile-devices/) 中，被提及的包括「禁用缩放」和「width=device-width」等方案，但这些方案并不完美，需要针对某些版本浏览器，又或仅在 Android 的浏览器上使用。

所以这时候就需要一个更简单通用的解决方案，其中 [FT Labs](http://labs.ft.com/) 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库 [FastClick](https://github.com/ftlabs/fastclick) 就是很好的选择。FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟 click 事件，并把浏览器在 300 毫秒之后真正触发的 click 事件阻止掉。

FastClick 的使用方法非常简单，在 window load 事件之后，在 `<body>` 上调用`FastClick.attach()` 即可。

```js
window.addEventListener(
  'load',
  function () {
    FastClick.attach(document.body);
  },
  false,
);
```

### 软键盘将页面顶起来、收起未回落问题

### iOS 中 position:fixed 的兼容性问题

- [谈一谈苹果手机关于 position:fixed 的兼容性](https://juejin.cn/post/6844903951855271949)
- https://hehuiyun.github.io/2019/02/19/%E8%A7%A3%E5%86%B3position-fixed%E5%9C%A8ios%E7%B3%BB%E7%BB%9F%E5%A4%B1%E6%95%88%E7%9A%84%E9%97%AE%E9%A2%98/
- https://www.cnblogs.com/xiahj/p/8036419.html

### iOS 中 position:fixed 吸底时滑动出现抖动

- https://blog.csdn.net/sinat_22209293/article/details/80854509
- https://www.cnblogs.com/xuniannian/p/8722393.html

### fixed 与 input

不要在有 input 标签的页面使用 fixed 定位，因为这两者在一起的时候，总是会有奇奇怪怪的问题。

在 iOS 上，当点击 input 标签获取焦点唤起软键盘的时候，fixed 定位会暂时失效，或者可以理解为变成了 absolute 定位，在含有滚动的页面，fixed 定位的节点和其他节点一起滚动。

但是除此之外，还有很多坑比较难以解决，例如 Android 软键盘唤起后遮挡住 input 标签，用户没法看到自己输入的字符串，iOS 则需要在输入至少一个字符之后，才能将对应的 input 标签滚动到合适的位置，所以为了避开这些难以解决的坑，在有表单输入的页面，尽量用 absolute 或者 flex 替换 fixed。

- https://juejin.cn/post/6844903473092231182

### input 的 compositionstart 和 compositionend 事件

在 iOS 中，input 事件会截断非直接输入，什么是非直接输入呢，在我们输入汉字的时候，比如说「喜茶」，中间过程中会输入拼音，每次输入一个字母都会触发 input 事件，然而在没有点选候选字或者点击「选定」按钮前，都属于非直接输入。

我们希望在直接输入之后才触发 input 事件，这就需要引出我要说的两个事件—— compositionstart 和 compositionend。
compositionstart 事件在用户开始进行非直接输入的时候触发，而在非直接输入结束，也即用户点选候选词或者点击「选定」按钮之后，会触发 compositionend 事件。

```js
var inputLock = false;
function do(inputElement) {
  var regex = /[^1-9a-zA-Z]/g;
  inputElement.value = inputElement.value.replace(regex, '');
}

inputElement.addEventListener('compositionstart', function() {
  inputLock = true;
});


inputElement.addEventListener('compositionend', function(event) {
  inputLock = false;
  do(event.target);
})


inputElement.addEventListener('input', function(event) {
  if (!inputLock) {
    do(event.target);
    event.returnValue = false;
  }
});
```

这里需要注意的一点是，compositionend 事件是在 input 事件后触发的，所以在 compositionend 事件触发时，也要调用 input 事件处理逻辑。

### iPhone X 系列安全区域适配问题

- `viewport-fit` iOS11 新增特性(默认: `contain`)
  - 苹果公司为了适配 iPhoneX 对现有 viewport meta 标签的一个扩展
  - `<meta name="viewport" content="width=device-width, viewport-fit=cover">`
- 注意：env() 跟 constant() 需要同时存在，而且顺序不能换。

```css
padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
```

参考:

- https://jelly.jd.com/article/6006b1055b6c6a01506c87fd
- 出处: https://webkit.org/blog/7929/designing-websites-for-iphone-x/

### 页面生成为图片和二维码问题

#### 生成二维码

可以使用 `qrcode` 库

- [qrcode 源码](https://github.com/davidshimjs/qrcodejs)

#### 生成图片

主要是使用 `htmlToCanvas` 生成 `canvas` 画布. 但由于是 `canvas` 的原因。移动端生成出来的图片比较模糊。

可以生成 2 倍图, 放入一倍容器中来实现更清晰的效果.

- [html2convas 源码](https://github.com/niklasvh/html2canvas)

### 微信公众号分享问题

解决方法：添加一层蒙层，做分享引导。

### H5 调用 SDK 相关解决方案

可以使用 `DSBridge` 同时支持 iOS 和 Android.

扩展

- [DSBridge 与 JSBridge 的区别](https://juejin.cn/post/6844903871823904781)
- [DSBridge-Android](https://github.com/wendux/DSBridge-Android) & [DSBridge-iOS](https://github.com/wendux/DSBridge-IOS)

### H5 调试相关方案策略

调试代码一般就是为了查看数据和定位 bug。分为两种场景，一种是开发和测试时调试，一种是生产环境上调试。

> 为什么有生产环境上调试呢？有些时候测试环境上没法复现这个 bug，测试环境和生产环境不一致，此时就需要紧急生产调试。

- vConsole
- 代理 + spy-debugger

### H5 唤起 APP

这里推荐一篇高质量总结, 非常全面

- [H5 唤起 APP 指南](https://suanmei.github.io/2018/08/23/h5_call_app/)

### 设备检测

```js
// 这段代码引用自：https://github.com/binnng/device.js

var WIN = window;
var LOC = WIN['location'];
var NA = WIN.navigator;
var UA = NA.userAgent.toLowerCase();

function test(needle) {
  return needle.test(UA);
}

var IsTouch = 'ontouchend' in WIN;
var IsAndroid = test(/android|htc/) || /linux/i.test(NA.platform + '');
var IsIPad = !IsAndroid && test(/ipad/);
var IsIPhone = !IsAndroid && test(/ipod|iphone/);
var IsIOS = IsIPad || IsIPhone;
var IsWinPhone = test(/windows phone/);
var IsWebapp = !!NA['standalone'];
var IsXiaoMi = IsAndroid && test(/mi\s+/);
var IsUC = test(/ucbrowser/);
var IsWeixin = test(/micromessenger/);
var IsBaiduBrowser = test(/baidubrowser/);
var IsChrome = !!WIN['chrome'];
var IsBaiduBox = test(/baiduboxapp/);
var IsPC = !IsAndroid && !IsIOS && !IsWinPhone;
var IsHTC = IsAndroid && test(/htc\s+/);
var IsBaiduWallet = test(/baiduwallet/);
```

### 获取滚动条值

PC 端滚动条的值是通过 `document.scrollTop` 和 `document.scrollLeft` 获得，但在 iOS 中并没有滚动条的概念，所以仅能通过 windows.scroll 获取，同时也能兼容 Android 。

```js
window.scrollY;
window.scrollX;
```

### 清除输入框内阴影

在 iOS 上，输入框默认有内部阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样操作：

```css
input,
textarea {
  border: 0; /* 方法1 */
  -webkit-appearance: none; /* 方法2 */
}
```

### Meta 相关

#### 页面窗口自动调整到设备宽度，并禁止用户缩放页面

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>
```

#### 电话号码识别

iOS Safari ( Android 或其他浏览器不会) 会自动识别看起来像电话号码的数字，将其处理为电话号码链接，比如：

- 7 位数字，形如：1234567
- 带括号及加号的数字，形如：(+86)123456789
- 双连接线的数字，形如：00-00-00111
- 11 位数字，形如：13800138000

```html
<!-- 关闭电话号码识别： -->
<meta name="format-detection" content="telephone=no" />

<!-- 开启电话功能： -->
<a href="tel:123456">123456</a>

<!-- 开启短信功能： -->
<a href="sms:123456">123456</a>
```

#### 邮箱地址的识别

在 Android （ iOS 不会）上，浏览器会自动识别看起来像邮箱地址的字符串，不论有你没有加上邮箱链接，当你在这个字符串上长按，会弹出发邮件的提示。

```html
<!-- 关闭邮箱地址识别： -->
<meta name="format-detection" content="email=no" />

<!-- 开启邮件发送： -->
<a mailto:>mobile@gmail.com">mobile@gmail.com</a>
```

#### 指定 iOS 的 safari 顶端状态条的样式

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 可选default、black、black-translucent -->
```

参考:

- [吃透移动端 H5 响应式布局 ｜深入原理到目前最佳实践方案](https://juejin.cn/post/6844904021552005128)
- [吃透移动端 H5 与 Hybrid | 实践踩坑 12 种问题汇总](https://juejin.cn/post/6844904024790007815)
