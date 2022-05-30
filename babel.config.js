module.exports = {
  presets: [
    '@babel/preset-env',
    // '@babel/preset-react',
    // '@babel/preset-typescript',
  ],
  plugins: [
    // 此处顺序不能变，具体参看文档
    // https://babel.dev/docs/en/babel-plugin-proposal-decorators
    // ['@babel/plugin-proposal-decorators', { legacy: true }],
    // ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}
