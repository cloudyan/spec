# browserslist

The config to share target browsers and Node.js versions between different front-end tools. It is used in:

> 用于不通工具共享浏览器或 node 版本配置信息
>
> 国内情况复杂，如要精准配置，最好核实下用户覆盖统计数据

## 项目集成

`.browserslistrc` 独立配置文件

```conf
# .browserslistrc
# https://github.com/browserslist/browserslist#queries

defaults
last 2 versions
> 0.1%
not dead
ios >= 9
android >= 4.4

# npx browserslist "defaults, last 2 versions, > 0.1%, not dead, ios >= 9, android >= 4.4"
# https://browserslist.dev
```

如未查询到配置，Browserslist 将使用默认值，取值如下

```conf
# https://github.com/browserslist/browserslist#queries

> 0.5%
last 2 versions
Firefox ESR
not dead

# npx browserslist "> 0.5%, last 2 versions, Firefox ESR, not dead"
```

package.json 中配置

```json
  "browserslist": [
    "last 2 versions",
    "> 0.1%",
    "not dead",
    "android >= 4",
    "ios >= 9"
  ],
```

或

```json
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
```

测试预览

```bash
# 项目中
npx browserslist

# Use CLI tool instead of the website
npx browserslist "last 2 version, >1%"
# pc
npx browserslist "defaults, last 2 versions, > 0.1%, safari >= 9, ie >= 10"
# mobile
npx browserslist "defaults, last 2 versions, > 0.1%, safari >= 9, iOS >= 9, android >= 4.4"
```

注意: 浏览器分类是大小写不敏感的, [分类列表](https://github.com/browserslist/browserslist#browsers)

如果不想用 browserslsit 的默认设置 `defaults`，推荐使用`last 1 version`, `not dead, > 0.2%` 或 `not dead`，仅使用 `last n versions` 将添加太多的废弃浏览器到工程里面来, 同时也没有有效的覆盖那些占有率仍然很高的老版本浏览器。

如果独立配置和 package.json 同时配置优先级如何? 会报错

## 扩展

哪些工具在使用 browserslist

- Autoprefixer
- Babel
- postcss-preset-env
- eslint-plugin-compat
- stylelint-no-unsupported-browser-features
- postcss-normalize
- obsolete-webpack-plugin

一些资料

- browserslist 使用 Can I Use 网站的数据来查询浏览器版本范围。
- browserslist 提供在线的查询条件[练习网站](https://browserslist.dev)
- [browserslist 示例](https://github.com/browserslist/browserslist-example) 列举了每个工具是如何使用 browserslist 的。

### browserslist 衍生的工具

- [browserslist-ga](https://github.com/browserslist/browserslist-ga): 该工具能生成访问你运营的网站的浏览器的版本分布数据，以便用于类似> 0.5% in my stats 查询条件, 前提是你运营的网站部署有 Google Analytics。
- [browserslist-useragent](https://github.com/browserslist/browserslist-useragent): 检验给定的用户代理 user-agent 字符串是否匹配 browserslist 给出的浏览器范围。
- [caniuse-api](https://www.npmjs.com/package/caniuse-api): 返回支持指定特性的浏览器版本范围
- `npx browserslist`: 在前端工程目录下运行此命令，输出当前工程的目标浏览器列表。

参考

- [Browserslist](https://juejin.cn/post/6844903669524086797) (基于官方文档翻译）
