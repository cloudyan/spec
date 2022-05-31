# The Code Review Pyramid

- https://www.morling.dev/blog/the-code-review-pyramid/

Questions to ask:

Smaller effort for changes later on
Automate here!

- Code Style
  - Is the project's formatting style applied?
  - Does is adhere to agreed on naming conventions
  - Is it DRY?
  - Is the code sufficiently "readable"(method lengths, etc.)
- Tests
  - Are all tests passing?
  - Are new features reasonably tested?
  - Are corner cases tested?
  - Is it using unit tests where possible, integration tests where necessary?
  - Are there tests for NFRs, e.g. performance?
- Documentation
  - New features reasonably documented?
  - Are the relevant kinds of docs covered: README, API docs, user guide, reference docs, etc.?
  - Are docs understandable, are there no significant typos and grammar mistakes?
- Implementation Semantics
  - Does it satisfy the original requirements?
  - Is it logically corrent?
  - Is there no unnecessary complexity?
  - Is it robust(no concurrency issues, proper error handling, etc.)?
  - Is it performant?
  - Is it secure(e.g. no SQL injections, etc.)
  - Do newly added dependencies pull their weight? Is their license acceptable?
- API Semantics
  - API as small as possible, as large as needed?
  - Is there one way of doing one thing, not multiple ones?
  - Is it consistent, does it follow the principle of least surprises?
  - Clean split of API/internals, without internals leaking in the API?
  - Are there no breaking changes to user-facing parts(API classes, configuration, metrics, log formats, etc.)?
  - Is a new API generally useful and not overly specific?

Focus your review efforts here!
Larger effort for changes later on

# 代码审查金字塔

要问的问题：

以后更改的工作量较小
在这里自动化！

- 代码风格
  - 是否应用了项目的格式样式？
  - 是否遵守商定的命名约定
  - 是否重复了？
  - 代码是否足够“可读”（方法、长度等）
- 测试
  - 所有的测试都通过了吗？
  - 新功能是否经过合理测试？
  - 角落案例是否经过测试？
  - 是否尽可能使用单元测试，必要时使用集成测试？
  - 是否有针对 NFR 的测试，例如表现？
- 文档
  - 合理记录的新功能？
  - 是否涵盖相关类型的文档：自述文件、API 文档、用户指南、参考文档等？
  - 文档是否可以理解，是否没有明显的拼写错误和语法错误？
- 实现语义
  - 是否满足原始要求？
  - 逻辑上是否正确？
  - 没有不必要的复杂性吗？
  - 它是否健壮（没有并发问题、正确的错误处理等）？
  - 性能好吗？
  - 是否安全（例如，没有 SQL 注入等）
  - 新添加的依赖项是否会发挥作用？他们的执照可以接受吗？
- API 语义
  - API 尽可能小，尽可能大？
  - 是否有一种方法可以做一件事，而不是多个？
  - 是否一致，是否遵循最小意外原则？
  - API/内部组件的干净拆分，API 中没有内部组件泄漏？
  - 面向用户的部分（API 类、配置、指标、日志格式等）是否没有重大更改？
  - 新的 API 是否普遍有用且不是过于具体？

把你的审查工作集中在这里！
以后为更改付出更大的努力
