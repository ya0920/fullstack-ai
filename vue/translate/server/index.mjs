import OpenAI from "openai";
import dotenv from "dotenv";
import http from "http";
import { log } from "console";

dotenv.config();//? 让 node 运行时读取.env文件
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});

//连接 LLM
const getCompletion = async (premot) => {
    // 用户说的话
    const messages = [{
        role: "user",
        content: premot
    }]
    // chat
    const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: messages,
        temperature: 0.1,
    });
    // 返回结果
    return response.choices[0].message.content;
}

//! 跟 ai 交互
const main = async (message) => {
    const user_message = message

    const prompt = `请帮我翻译以下的文字到"${user_message[2]}"，只需要给出以下内容的"${user_message[2]}",不需要其他的话："${user_message[0]}"`
    const result = await getCompletion(prompt)
    return result
};

const server = http.createServer(async (req, res) => {
    // 允许跨域
    res.writeHead(200, {
        "access-control-allow-origin": '*',
    });
    //获取到前端的参数
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const inputText = query.get("inputText");
    const from = query.get("from");
    const to = query.get("to");

    const message = [
        inputText,from,to
    ]

    const result = await main(message)
    res.end(result)
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});