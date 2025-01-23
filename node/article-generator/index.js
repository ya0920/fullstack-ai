// 生成文章
import { generate } from './lib/generator.js'
// 加载语料库
import { loadCorpus } from './lib/corpus.js'
import { createRandomPicker } from './lib/random.js'
import { writeFileSync } from 'fs'


const corpus = loadCorpus('./corpus/data.json')

function fn() {
  const title = createRandomPicker(corpus.title)()
  const res = generate(title, {corpus, min: 1000, max: 2000})
  writeFileSync(`./output/${title}.txt`, res.join('\n'))
}
export default fn
