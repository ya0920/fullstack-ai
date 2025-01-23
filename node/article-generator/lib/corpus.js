// 读取语料库
import { dirname, resolve } from 'path'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'  // 将 URL 对象转换为文件路径(在 node 中 url 和 path 是不同的)

if (typeof __dirname === 'undefined') {
  globalThis.__dirname = dirname(fileURLToPath(import.meta.url))
}


export function loadCorpus(src) {
  const path = resolve(__dirname, '..', src) // 语料库文件的绝对路径
  const data = readFileSync(path, {encoding: 'utf-8'}) // 读取语料库文件的内容
  return JSON.parse(data) // 将语料库文件的内容解析为 JSON 对象
}