# project-lock

锁定一个项目依赖的运行环境、依赖包、npm源等关键配置信息。project-lock? env-lock?

> 保证项目开发维护的稳定性。

项目下 add `.npmrc` && `.nvmrc`, 并且将 deps lock 文件提交 git 库。

```bash
# 添加 node 版本控制(基于 nvm)
node -v > .nvmrc

# v16.15.0
```

```ini
# npm config set package-lock=true --location=project
engine-strict=true  # 严格检验 engines 中配置的 node 或 npm 版本
package-lock=true   # 要求项目生产 lock 文件
registry=https://registry.npmjs.org/ # 配置为公司内网
```

package.json 限定版本时，一般 **仅限制主版本号即可**。参考 [engines](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#engines)

- ~version: 相当于 1.2.x
- ^version: 相当于 1.x.x

```jsonc
  "scripts": {
    // 限定使用 npm, yarn 或 pnpm
    "preinstall": "nvm use && npx only-allow npm",
  },
  // 格式: >= xxx < 16 或 16.x 或 ~16.15.0
  "engines": {
    "node": "~16.15.0",
    "npm": "~8.5.0",
    "yarn": "1.x",
    "pnpm": ">=7"
  }
```

CI 流程应使用锁文件安装依赖，实现更快、更可靠的构建。同时还能校验不规范的 lock 文件等。

- [`npm ci`](https://docs.npmjs.com/cli/v8/commands/npm-ci)
- `yarn install --frozen-lockfile`
- `pnpm install --frozen-lockfile`

`npm ci` 与 `npm install` 的主要区别:

- 该项目必须具有现有的 `package-lock.json` 或 `npm-shrinkwrap.json`。
- 如果包锁中的依赖项不匹配 `package.json` 中的依赖项, `npm ci` 将退出并出现错误，而不是更新包锁。
- `npm ci` 一次只能安装整个项目: 无法使用此命令添加单个依赖项。
- 如果 `node_modules` 已经存在, 它将在 `npm ci` 开始安装之前自动删除。
- 它永远不会写入 `package.json` 或任何包锁: 安装基本上被冻结。

## 扩展

### 为什么需要这个？

背景: 同一个项目，A 同学能运行起来的项目，B 同学运行不起来？

原因分析是环境一致性问题，涉及内容如下:

- 开发者的机器
- 项目应用配置
- 依赖包
- 部署系统环境

### 自动切换脚本

跟随项目 `.nvmrc` 自动切换 node 版本, 可以在 `~/.zshrc` 添加以下脚本

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"


  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

### nexus 版本策略

私有源 nexus 系统需要设定 npm 包的版本策略设置为**禁止覆盖**

> nexus 版本策略：允许覆盖、禁止覆盖、只读。（向nexus服务发布NPM包时，使用的策略）

如果存在覆盖发布，会导致 lock 文件校验码验证不通过，可能遇到以下问题

```bash
npm install --no-optional --production
npm ERR! code EINTEGRITY
npm ERR! sha512-nADAsJGM8jw18ufzd8/a26rC/+JVJCpLFH3fUkkxaXyMvDoAK99BDdAL5UqN9XZUj85nwM/3Lxbw8N9BRppFGA== integrity checksum failed when using sha512: wanted sha512-nADAsJGM8jw18ufzd8/a26rC/+JVJCpLFH3fUkkxaXyMvDoAK99BDdAL5UqN9XZUj85nwM/3Lxbw8N9BRppFGA== but got sha512-s9YhDRKaBS2uLucU30Cy5td+81hr1Vj+rn0m7b1U7mpcUNPUNwil7ifZS6m5b1Jqy6jh86WrRr37GqCmd3Lpqw==. (7539 bytes)
```

- `--no-optional` 跳过可选包
- `--production` 只安装 dependencies
