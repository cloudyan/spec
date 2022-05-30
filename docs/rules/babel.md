# babel

> eslint 需要 babel 配合, 按需配置

```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react
```

babel.config.js

```js
module.exports = {
  presets: ['@babel/preset-env'],
};
```
