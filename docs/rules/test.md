# 测试代码

src 包含各类型的测试源代码, 用于测试验证，包括但不限于以下类型

- js
- ts
- jsx
- tsx
- json X
- json5
- md X
- css
- less
- scss
- yaml,yml
- ejs,html
- vue
- react

可以使用 jest 结合 lint-staged 只检测发生改动的文件

```json
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": ["npm run test:staged"]
  }
```

`"test:staged": "jest --bail --findRelatedTests",`

- bail: 只要遇到运行失败的单测用例即退出
- findRelatedTests: 检测指定的文件路径

```js
// jest.config.js
// https://jestjs.io/docs/cli
module.exports = {
  roots: ['<rootdir>/src'], // 查找src目录中的文件
  collectCoverage: true, // 统计覆盖率
  coverageDirectory: 'coverage', // 覆盖率结果输出的文件夹

  // collectCoverageFrom 会影响输出所有符合要求的文件的覆盖率, 改用排除法，只从被检测的文件中提取覆盖率
  collectCoverageFrom: ['!src/**/*.d.ts', '!src/**/*{.json,.snap,.less,.scss}'],
  coverageThreshold: {
    // 所有文件总的覆盖率要求
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
    // 匹配到的单个文件的覆盖率要求
    // 这里也支持通配符的配置
    './src/**/*.{ts,tsx}': {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  // 匹配单测用例的文件
  testMatch: ['<rootdir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootdir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  // 当前环境是jsdom还是node
  testEnvironment: 'jsdom',
  // 设置别名，若不设置，运行单测时会不认识@符号
  moduleNameMapper: {
    '^@/(.*)$': '<rootdir>/src/$1',
  },
};
```

- <https://www.cnblogs.com/xumengxuan/p/14921634.html>
