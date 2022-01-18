# 移动端开发

## 问题汇总

- 1px 问题，产生原因
- 移动端响应式布局实现方案
- iOS 滑动不流畅, 快速回弹滚动
- iOS 上拉边界下拉出现白色空白
- 页面件放大或缩小不确定性行为
- click 点击穿透与延迟
  - https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away
  - https://webkit.org/blog/5610/more-responsive-tapping-on-ios/
  - [5 Ways to Prevent the 300ms Click Delay on Mobile Devices](https://www.sitepoint.com/5-ways-prevent-300ms-click-delay-mobile-devices/)
- 软键盘弹出将页面顶起来、收起未回落问题
- iPhone X 底部栏适配问题
- 保存页面为图片和二维码问题和解决方案
- 微信公众号 H5 分享问题
- H5 调用 SDK 相关问题及解决方案
- H5 调试相关方案与策略
- iOS 短信验证码重复输入问题
- iOS 日期格式转换问题
- rem vs vw 方案

## 菜单

- [移动端开发](#移动端开发)
  - [问题汇总](#问题汇总)
  - [菜单](#菜单)
    - [click 的 300ms 延迟响应](#click-的-300ms-延迟响应)
    - [快速回弹滚动](#快速回弹滚动)
    - [设备检测](#设备检测)
    - [获取滚动条值](#获取滚动条值)
    - [清除输入框内阴影](#清除输入框内阴影)
    - [Meta 相关](#meta-相关)
      - [页面窗口自动调整到设备宽度，并禁止用户缩放页面](#页面窗口自动调整到设备宽度并禁止用户缩放页面)
      - [电话号码识别](#电话号码识别)
      - [邮箱地址的识别](#邮箱地址的识别)
      - [指定 iOS 的 safari 顶端状态条的样式](#指定-ios-的-safari-顶端状态条的样式)

---

### click 的 300ms 延迟响应

click 的 300ms 延迟是由双击缩放(double tap to zoom)所导致的，由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，移动端浏览器就等待 300 毫秒，以判断用户是否再次点击了屏幕。

随着响应式网页逐渐增多，用户使用双击缩放机会减少，这 300ms 的延迟就更不可接受了。浏览器开发商也随之提供相应的解决方案。这些方案在[5 Ways to Prevent the 300ms Click Delay on Mobile Devices](http://www.sitepoint.com/5-ways-prevent-300ms-click-delay-mobile-devices/) 中，被提及的包括「禁用缩放」和「width=device-width」等方案，但这些方案并不完美，需要针对某些版本浏览器，又或仅在 Android 的浏览器上使用。

所以这时候就需要一个更简单通用的解决方案，其中 [FT Labs](http://labs.ft.com/) 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库 [FastClick](https://github.com/ftlabs/fastclick) 就是很好的选择。FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟 click 事件，并把浏览器在 300 毫秒之后真正触发的 click 事件阻止掉。

FastClick 的使用方法非常简单，在 window load 事件之后，在 `<body>` 上调用`FastClick.attach()` 即可。

```js
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);
```

### 快速回弹滚动

快速回弹滚动在手机浏览器上的发展历史：

1. 早期的时候，移动端的浏览器都不支持非 body 元素的滚动条，所以一般都借助 iScroll;
2. Android 3.0 / iOS 解决了非 body 元素的滚动问题，但滚动条不可见，同时 iOS 上只能通过2个手指进行滚动；
3. Android 4.0 解决了滚动条不可见及增加了快速回弹滚动效果，不过随后这个特性又被移除；
4. iOS从5.0开始解决了滚动条不可见及增加了快速回弹滚动效果

如果想要为某个元素拥有 Native 般的滚动效果，可以这样操作：

```css
.element {
  overflow: auto; /* auto | scroll */
  -webkit-overflow-scrolling: touch;
}
```

除了 iScroll 之外，还有一个更加强大的滚动插件 [Swiper](http://www.idangero.us/swiper/#.VfaVk52qqko)，支持 3D 和内置滚动条等。

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
window.scrollY
window.scrollX
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
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

#### 电话号码识别

iOS Safari ( Android 或其他浏览器不会) 会自动识别看起来像电话号码的数字，将其处理为电话号码链接，比如：

- 7位数字，形如：1234567
- 带括号及加号的数字，形如：(+86)123456789
- 双连接线的数字，形如：00-00-00111
- 11位数字，形如：13800138000

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

- https://zhuanlan.zhihu.com/p/268677938
