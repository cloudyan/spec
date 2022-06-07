# API 设计最佳实践

任何 API 设计都遵循一种叫做“面向资源设计”的原则：

- 资源：资源是数据的一部分，例如：用户
- 集合：一组资源称为集合，例如：用户列表
- URL：标识资源或集合的位置，例如：/user

1. 对 URL 使用 `kebab-case`（短横线小写隔开形式）`/system-orders`
2. 参数使用 `camelCase`（驼峰形式）`/system-orders/{orderId}`
3. 指向集合的复数名称 `GET /users`
4. URL 以集合开始，以标识符结束 `GET /shops/:shopId/或GET /category/:categoryId`
   1. 保持概念的单一性和一致性
5. 让动词远离你的资源 URL `PUT /user/{userId}`
   1. 不要在 URL 中使用动词来表达你的意图。相反，使用适当的 HTTP 方法来描述操作。
6. 对非资源 URL 使用动词 `POST /alarm/245743/resend`
   1. 如果你有一个端点，它只返回一个操作。在这种情况下，你可以使用动词。例如，如果你想要向用户重新发送警报。
   2. 请记住，这些不是我们的 CRUD 操作。相反，它们被认为是在我们的系统中执行特定工作的函数。
7. JSON 属性使用 `camelCase` 驼峰形式
   1. 如果你正在构建一个请求体或响应体为 JSON 的系统，那么属性名应该使用驼峰大小写。
8. 监控
   1. RESTful HTTP 服务必须实现 `/health` 和 `/version` 和 `/metricsAPI` 端点。他们将提供以下信息。
   2. `/health` 用 200 OK 状态码响应对 `/health` 的请求。
   3. `/version` 用版本号响应对 `/version` 的请求。
   4. `/metrics` 这个端点将提供各种指标，如平均响应时间。
   5. 也强烈推荐使用 `/debug` 和 `/status` 端点。
9. 不要使用 `table_name` 作为资源名
   1. 不要只使用表名作为资源名。从长远来看，这种懒惰是有害的。
10. 使用 API 设计工具
11. 使用简单序数作为版本
12. 在你的响应体中包括总资源数
13. 接受 `limit` 和 `offset` 参数
14. 获取字段查询参数
15. 不要在 URL 中通过认证令牌
16. 验证内容类型
17. 对 CRUD 函数使用 HTTP 方法
18. 在嵌套资源的 URL 中使用关系
19. `CORS`（跨源资源共享）
20. 安全(强制并要求所有回调 url、推送通知端点和 `webhooks` 使用 HTTPS。)
21. 错误
    1. 当由于一个或多个服务错误而拒绝客户端请求时，一定要返回 4xx HTTP 错误代码。
    2. 考虑处理所有属性，然后在单个响应中返回多个验证问题。
22. 黄金法则
    1. 如果您对 API 格式的决定有疑问，这些黄金规则可以帮助我们做出正确的决定。
    2. 扁平比嵌套好。
    3. 简单胜于复杂。
    4. 字符串比数字好。
    5. 一致性比定制更好。

参考文档

- https://mp.weixin.qq.com/s/YgaYLyqCJQ-bXoA5F5ygxg
- https://r.bluethl.net/how-to-design-better-apis
- https://slack.engineering/how-we-design-our-apis-at-slack/
- https://quastor.substack.com/p/tech-dive-apis?s=r
