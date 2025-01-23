import { randomInt, createRandomPicker } from './random.js'

export function generate(title, {corpus, min=500, max=1000}) {
  const articleLength = randomInt(min, max)
  const { famous, bosh_before, bosh, conclude, said } = corpus
  const [pickFamous, pickBoshBefore, pickBosh, pickConclude, pickSaid] = [famous, bosh_before, bosh, conclude, said].map(createRandomPicker)

  // pickFamous() // 随机挑选一个名人名言

  const article = []
  let totalLength = 0
  while(totalLength < articleLength) {
    let section = ''
    const sectionLength = randomInt(200, 500)  // 每个段落的长度
    while (section.length < sectionLength || !/[。？]$/.test(section)) {
      const n = randomInt(0, 100)
      if (n < 20) {
        section += sentence(pickFamous, {said: pickSaid, conclude: pickConclude})
      } else if (n < 50) {
        section += sentence(pickBoshBefore, {title}) + sentence(pickBosh, {title})
      } else {
        section += sentence(pickBosh, {title})
      }
    }
    totalLength += section.length
    article.push(section)
  }

  return article
}

function sentence(pick, replacer) {
  let result = pick()
  for (const key in replacer) {
    let pre = new RegExp(`{{${key}}}`, 'g')
    let next = typeof replacer[key] === 'function' ? replacer[key]() : replacer[key]
    result = result.replace(pre, next)
  }
  return result
}