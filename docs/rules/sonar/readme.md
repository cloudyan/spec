# sonar

> SonarLint 在 IDE 编写代码时解决质量和安全问题
> SonarQube 在 CI 流程控制代码质量和安全问题

接入 SonarLint, SonarQube

- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-config-sonarqube](https://github.com/SonarSource/eslint-config-sonarqube)

一种实施方案

可以将 ESlint 规则导出为 JSON 以供 Sonar 导入（在构建期间）

> npm run eslint:report
> ./node_modules/.bin/eslint --output-file ./eslint-report.json --ext .js,.jsx,.ts,.tsx --format json ./src

在 `sonar-project.properties` 文件中或通过命令行参数设置此 Sonar 属性（其中 `eslint-report.json` 是上面生成的输出报告）

```yaml
sonar.eslint.reportPaths=eslint-report.json
```

ESLint 报告中的任何问题都将出现在标有 EsLint 徽章的 Sonar 问题中。

作为旁注，此命令对于 eslint 也很有用，可以输出任何错误的 HTML 报告，非常适合查看或共享：

```bash
./node_modules/.bin/eslint --output-file ./eslint-report.html --ext .js,.jsx,.ts,.tsx --format html ./src
```
