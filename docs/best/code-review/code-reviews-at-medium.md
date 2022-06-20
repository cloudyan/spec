Code Reviews at MediumMedium 的代码审查 - This is a great blog post that delves into some of the principles that Medium uses when conducting code reviews.- 这是一篇很棒的博文，深入探讨了 Medium 在进行代码审查时使用的一些原则。

Some of the guidelines are一些指导方针是

All changes require at least one approval before getting committed to the codebase.在提交到代码库之前，所有更改都需要至少获得一次批准。

Make pull requests small and digestible so code reviews can be done quickly. There shouldn’t be too many conceptual changes in a single PR.使拉取请求小而易消化，以便可以快速完成代码审查。单个 PR 不应该有太多的概念变化。

PRs should be reviewed within 4 hours (at least one reviewer should respond). If it’s been more than 4 hours, the engineer can add a comment to their pull request that will send a notification to all reviewers requesting feedback.PR 应在 4 小时内完成审核（至少应有一名审核者回复）。如果超过 4 小时，工程师可以在他们的拉取请求中添加评论，这将向所有请求反馈的审阅者发送通知。

Add context to the PR so a reviewer can easily understand what the PR is changing and why. If there are any changes that affect the UI, there should be screenshots of the UI that show the change.为 PR 添加上下文，以便审阅者可以轻松了解 PR 发生了什么变化以及原因。如果有任何影响 UI 的更改，应该有显示更改的 UI 屏幕截图。
