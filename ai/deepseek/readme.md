# 春招
- 时间
  3 - 5

- 大厂面试
  1. 语言表达
  2. 面试能力 技能：js，vue，ai认知
  3. 算法


# deepseek
- 开源
  1. 用户增长快，多
  2. 生态会繁荣（可以定制化）

- 打造成本低
  1. openai 堆算力，需要很多 GPU 的开销
  2. 英伟达的 cuda 编程
  `3. 新的算法，绕开了英伟达的 cuda 编程`
  4. 英伟达股价大跌
  5. deepseek-v3 用了 2048 块 H800 显卡 ，总价值 557.6 万美元，meta llama3 用了 deepseek 的11倍，openai 闭源 No.1，llama3 开源 No.1


- 性价比高
  openai   百万 tokens 280 人民币
  deepseek 百万 tokens  1  人民币

# deepseek 全栈开发
 前端 + 后端 + LLM == AI fullstuck
 LLM 本地部署 = 离线

# ollama
 训练好的 LLM，是要有自己的运行环境的
 nlp + 机器学习(全球的知识点) + tansformers机制 => LLM

 const add = (x + y) => x + y
 LLM(巨大的参数)

# chatBot
 vue + koa + deepseek()
 - 本地运行的 deepseek，是可以被 ajax 通信的
 - 端口 11434
 - /api/chat
 - post