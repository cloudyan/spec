
参考文档

- [code-review-front-end](https://github.com/Jinjiang/code-review-front-end)
- [某一线前端小组长的 Code Review 分享](https://juejin.cn/post/7052570403029385253)
- [聊聊Code Review](https://www.jianshu.com/p/106c64b0631b)
- [Effective Code Review Checklist](https://engineerchirag.medium.com/effective-code-review-checklist-c735abbcd613)
- [Code Review Best Practices for 10x Engineers](https://engineerchirag.medium.com/code-review-best-practices-for-10x-engineers-84c2b1678db5)
- [有赞美业前端： 持续标准化 Code Review](https://segmentfault.com/a/1190000025141916)
- [代码评审清单](https://www.jdon.com/project/code-review-checklist.html)
- [对照审查点清单做代码审查可消除更多的bug](https://www.techug.com/post/increase-defect-detection-with-our-code-review-checklist-example/)
- https://time.geekbang.org/column/article/256316
- http://kaelzhang81.github.io/2020/07/29/%E4%BB%A3%E7%A0%81%E8%AF%84%E5%AE%A1Checklist/
- [Code Review 全面审查清单](https://xie.infoq.cn/article/0b326dbb9ec2d5e454caf4199)
  - 原文 https://hackernoon.com/the-comprehensive-code-review-checklist
  - [为什么代码审查很重要](https://www.atlassian.com/agile/software-development/code-reviews)
- [如何对 Code Review 的评论进行分级](https://xie.infoq.cn/article/cc38cf72300936ad3cac95c8b)
- [四步做好 Code Review](https://xie.infoq.cn/article/44b6c10ae7ddf6c7ce8056fb1)
- [有迹可循之 CheckList](https://xie.infoq.cn/article/5136abdb77f47e3317c0226b7)
- [phabricator + gitlab 强制 code review](https://xie.infoq.cn/article/3fcf04a46683a5b259421eca2)
- [Code Review 实践](https://xie.infoq.cn/article/2ab9c49a02dc9397f52262db7)
- [关于代码审查的一点体会](https://xie.infoq.cn/article/7c3c86feb9b04c8175860f00e)
- [8 行代码的 21 问题: 如何有效 Code Review?](https://xie.infoq.cn/article/a328a8ba1afce966a3102ec30)
- [如何在团队中做好 Code Review](https://xie.infoq.cn/article/0783c81847d7dd293fa07238f)
- [为什么要做 code review 及 需要关注的要点？](https://www.365seal.com/y/2rndjeN4Vj.html)
- [前端 Code Review 的最佳实践方案](https://www.cnblogs.com/dotey/p/11216430.html)
- [Code Review 与 结对编程](https://bbs.huaweicloud.com/blogs/110732)
- [大家的公司的 Code Review 都是怎么做的？遇到过哪些问题？](https://www.zhihu.com/question/41089988)
  - 首要目的是保证代码可读性，一致性，其次是设计讨论和知识分享。找错这事人类干不来。
  - 所有代码改动都要过code review, 就算你是代码owner. 过了review直接提交进统一代码树的head.
  - Review通过Web-based工具进行，但更重要的是有各种各样的工具作presubmit checks, 机器能找到问题（比如格式不符合style guide）连review请求都发不出去，或者直接在review上fix suggestion糊你一脸。人类可以专注于更难搞的问题。
- [code review](https://cloud.tencent.com/developer/article/1805602)
- [代码审查清单（Code Review Checklist）](https://www.jianshu.com/p/ecf2973c899f)


[《Modern Code Review: A Case Study at Google》](https://link.zhihu.com/?target=https%3A//sback.it/publications/icse2018seip.pdf) 有趣的是文章给了一些通过log分析拿到的量化指标：

- Google工程师每周发CL(代码改动单位）中位数是 3, 80% 工程师每周CL数不超过 7.（怎么显得我们好像很闲的样子……）
- 工程师每周review CL中位数是4, 80% 工程师每周CL数不超过 10. 读略多于写, 说明 reviewer 不会集中到少数几个 senior 队员而是相对平摊。
- review流程完成时间中位数 4 小时。35% 的改动只涉及 1 个文件，95% 的改动涉及不超过 10 个文件。修改行数中位数是 24, 超过 10% 的改动只改了 1 行。
- 75% 以上的改动只有一个 reviewer.


