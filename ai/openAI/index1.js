import OpenAI from "openai";

// 在运行环境中读取 github 的 token
const token = "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" // process.env['GITHUB_TOKEN'];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o"

async function main() {
  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    model: modelName,
    temperature: 1.0,
    max_tokens: 1000,
    top_p: 1.0,
    messages: [
      {role: 'system', content: '你是一个艺术家'},
      {role: 'user', content: '我想开一家花店，请你帮我想一个好听的名字'},
    ]
  })

  console.log(response.choices[0].message.content);
}

main()