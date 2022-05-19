# EditorConfig

in `.editorconfig`

## 精简配置(推荐)

```yaml
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

[*.{js,ts,jsx,tsx,css,less}]
quote_type = single
```


## 详细说明

```yaml
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
