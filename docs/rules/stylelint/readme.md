# stylelint

Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。

> 专注 CSS 语法格式化

- <https://stylelint.io/>
- <https://github.com/stylelint/stylelint-demo>
- 14.x 版本不支持 node@10

- [stylelint](#stylelint)
  - [项目集成](#项目集成)
  - [扩展](#扩展)
    - [一些共享配置](#一些共享配置)
    - [样式属性排序](#样式属性排序)
    - [异常处理](#异常处理)
      - [收到报错 `Unknown word (CssSyntaxError)`](#收到报错-unknown-word-csssyntaxerror)

## 项目集成

```bash
# 基础安装
npm i -D stylelint stylelint-config-standard stylelint-config-prettier

# 汇总安装依赖
npm i -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-config-css-modules stylelint-config-rational-order stylelint-no-unsupported-browser-features stylelint-order stylelint-declaration-block-no-ignored-properties

# 注意 stylelint-config-rational-order 有多项风险，需要执行 npx audit fix --force
```

添加配置 .stylelintrc.js

```js
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
};
```

更多配置详见 [.stylelintrc.js](./config.md)

package.json

```json
{
  "stylelint": "stylelint --cache --allow-empty-input 'src/**/*.{css,less,scss,sass}'",
  "stylelint:fix": "npm run stylelint -- --fix"
}
```

测试校验

```bash
npx stylelint "src/**/*.css"
npx stylelint 'src/**/*.less' --syntax less

npm run stylelint
```

配置 `.stylelintignore` 文件(默认是 node_modules, 不格式化)

## 扩展

### 一些共享配置

- stylelint-config-standard 标准配置，[详细](https://stylelint.io/user-guide/configure#extends)
  - stylelint-config-recommended 推荐配置(只打开避免错误的规则)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier) 解决与 prettier 规则冲突
  - 附带一个 cli 小工具，可以检查规则冲突 `./node_modules/.bin/stylelint-config-prettier-check`
- [prettier-stylelint](https://github.com/hugomrdias/prettier-stylelint)
  - 灵感来自 prettier-eslint
- 社区共享配置
  - [SCSS](https://sass-lang.com/)
    - [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)
      - 此配置包含
        - stylelint-config-standard [build-in rules](https://stylelint.io/user-guide/rules/list) for SCSS 以及
        - stylelint-config-recommended-scss
          - customSyntax `postcss-scss`
          - [stylelint-scss](https://www.npmjs.com/package/stylelint-scss) a collection of rules specific to SCSS
          - stylelint-config-recommended
      - `npx stylelint "**/*.scss"`
    - [stylelint-config-prettier-scss](https://www.npmjs.com/package/stylelint-config-prettier-scss)
  - [stylelint-config-css-modules](https://www.npmjs.com/package/stylelint-config-css-modules)
    - 包含 optionalDependencies: stylelint-scss，如不使用 SCSS，安装时可以使用 `--no-optional` 或 `--ignore-optional` 避免安装
  - [stylelint-config-rational-order](https://www.npmjs.com/package/stylelint-config-rational-order)
    - 13 vulnerabilities (1 moderate, 12 high) 需要 `npm audit fix`
    - 此配置包含
      - [stylelint-order](https://www.npmjs.com/package/stylelint-order) css 属性排序插件，合理的排序加快页面渲染
  - [stylelint-no-unsupported-browser-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)
    - 使用 [doiuse](https://github.com/anandthakker/doiuse) 来检测浏览器支持
    - 底层使用 [caniuse](http://caniuse.com/) 数据库
    - 使用 browserslist 判断浏览器支持列表
  - [stylelint-config-html](https://www.npmjs.com/package/stylelint-config-html)
  - [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue)
- customSyntax 使用自定义语法
  - [postcss-lit](https://www.npmjs.com/package/postcss-lit)
  - [postcss-markdown](https://www.npmjs.com/package/postcss-markdown)
  - [postcss-less](https://www.npmjs.com/package/postcss-less)
  - [postcss-scss](https://www.npmjs.com/package/postcss-sass)
  - [sugarss](https://www.npmjs.com/package/sugarss)
- 其他
  - [stylelint-find-rules](https://github.com/alexilyaev/stylelint-find-rules) Find stylelint rules that are not configured in your stylelint config
    - 东西挺好的，应该是未升级适配，所以运行报错
    - 灵感来自 [eslint-find-rules](https://github.com/sarbbottam/eslint-find-rules)

### 样式属性排序

1. Positioning
2. Box Model
3. Typography
4. Visual
5. Animation
6. Misc

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Box Model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```

更多排序属性说明

```js
rules: {
  // Specify the alphabetical order of the attributes in the declaration block
  'order/properties-order': [
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'z-index',
    'display',
    'float',
    'width',
    'height',
    'max-width',
    'max-height',
    'min-width',
    'min-height',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'margin-collapse',
    'margin-top-collapse',
    'margin-right-collapse',
    'margin-bottom-collapse',
    'margin-left-collapse',
    'overflow',
    'overflow-x',
    'overflow-y',
    'clip',
    'clear',
    'font',
    'font-family',
    'font-size',
    'font-smoothing',
    'osx-font-smoothing',
    'font-style',
    'font-weight',
    'hyphens',
    'src',
    'line-height',
    'letter-spacing',
    'word-spacing',
    'color',
    'text-align',
    'text-decoration',
    'text-indent',
    'text-overflow',
    'text-rendering',
    'text-size-adjust',
    'text-shadow',
    'text-transform',
    'word-break',
    'word-wrap',
    'white-space',
    'vertical-align',
    'list-style',
    'list-style-type',
    'list-style-position',
    'list-style-image',
    'pointer-events',
    'cursor',
    'background',
    'background-attachment',
    'background-color',
    'background-image',
    'background-position',
    'background-repeat',
    'background-size',
    'border',
    'border-collapse',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'border-color',
    'border-image',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',
    'border-spacing',
    'border-style',
    'border-top-style',
    'border-right-style',
    'border-bottom-style',
    'border-left-style',
    'border-width',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',
    'border-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
    'border-top-left-radius',
    'border-radius-topright',
    'border-radius-bottomright',
    'border-radius-bottomleft',
    'border-radius-topleft',
    'content',
    'quotes',
    'outline',
    'outline-offset',
    'opacity',
    'filter',
    'visibility',
    'size',
    'zoom',
    'transform',
    'box-align',
    'box-flex',
    'box-orient',
    'box-pack',
    'box-shadow',
    'box-sizing',
    'table-layout',
    'animation',
    'animation-delay',
    'animation-duration',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-timing-function',
    'animation-fill-mode',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'background-clip',
    'backface-visibility',
    'resize',
    'appearance',
    'user-select',
    'interpolation-mode',
    'direction',
    'marks',
    'page',
    'set-link-source',
    'unicode-bidi',
    'speak',
  ],
},
ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
```

### 异常处理

#### 收到报错 `Unknown word (CssSyntaxError)`

因为 stylelint@14 和 vscode stylelint 版本太新

```bash
npm i -D stylelint postcss-scss postcss-html stylelint-config-standard-scss stylelint-config-recommended-vue stylelint-config-recess-order
```

```jsonc
// stylelint 需要检查的文件
"stylelint.validate": [
  "css",
  "less",
  "postcss",
  "scss",
  "vue",
  "sass"
],
```

参考:

- https://github.com/ota-meshi/stylelint-config-recommended-vue
- https://github.com/stylelint/stylelint/blob/14.0.0/docs/migration-guide/to-14.md#syntax-option-and-automatic-inferral-of-syntax
