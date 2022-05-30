# EditorConfig

> EditorConfig 编辑器编码规范, 是可移植自定义编辑器设置。
> 实现跨平台、编辑器和 IDE 统一编程风格, 提高代码阅读质量。

为什么需要？

即使团队统一编程风格、编辑器，仍不能保证历史遗留代码、第三方开源库等风格一致，还可能存在编码问题，非 utf-8 等

in `.editorconfig`

**精简配置(推荐)**

```ini
# .editorconfig
# https://editorconfig.org/

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

```

注意:

> EditorConfig 设置优先于全局 Visual Studio 文本编辑器设置
> 在 EditorConfig 文件中设置的约定当前无法在 CI/CD 管道中强制为生成错误或警告。

## 扩展

### config

更多配置项说明

> Unix-style newlines with a newline ending every file
> 根目录的配置文件，编辑器会由当前目录向上查找，如果找到 `roor = true` 的文件，则不再查找

```ini
# .editorconfig
# https://editorconfig.org/
# 更多详情 [editorConfig github WiKi](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)

# 根目录的配置文件，编辑器会由当前目录向上查找，如果找到 `roor = true` 的文件，则不再查找
root = true

# Unix-style newlines with a newline ending every file
# [*.{js,css}]
[*] # 匹配所有的文件
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 120 # 在指定的字符数量后强制强行换行, off 关闭此功能
trim_trailing_whitespace = true

[*.js] # 对所有的 js 文件生效
# 字符串使用单引号
quote_type = single

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab

```

### 通配符模式

| 通配符         | 作用                                                                                 |
| -------------- | ------------------------------------------------------------------------------------ |
| `*`            | 匹配除/之外的任意字符串                                                              |
| `**`           | 匹配任意字符串                                                                       |
| `?`            | 匹配任意单个字符                                                                     |
| `[name]`       | 匹配 name 中的任意一个单一字符                                                       |
| `[!name]`      | 匹配不存在 name 中的任意一个单一字符                                                 |
| `{s1,s2,s3}`   | 匹配给定的字符串中的任意一个(用逗号分隔)                                             |
| `{num1..num2}` | 匹配 num1 到 num2 之间的任意一个整数, 这里的 num1 和 num2 可以为正整数也可以为负整数 |

### 其他

EditorConfig 解决了编辑器配置层面的编码风格一致性问题。但代码风格的部分并未涉及，比如句尾分号、逗号、多行对象书写规范等

> 所有的属性都是大小写不敏感的。当他们被插件识别的时候，统一转为小写。
> 通常，如果一个属性没有被设置，编辑器将使用自身的默认设置，换句话说就是，如果有属性没被设置，EditorConfig 也不会应用自己的默认设置，只有明确设置了属性，这部分规范才会应用到编辑器。

参考

- 官站 <https://editorconfig.org/>
- [前端综合能力系列之 EditorConfig](https://juejin.cn/post/6844903590855704583)
