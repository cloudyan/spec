/** @format */

// 文档 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 120, // default 80
  singleQuote: true, // default false
  trailingComma: 'all', // default es5
  // 以上为改动，其他选项都使用默认值

  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.{ejs,html}', // document.ejs
      options: {
        parser: 'html',
      },
    },
  ],
};
