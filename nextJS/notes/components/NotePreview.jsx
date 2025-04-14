import { marked } from "marked"
import sanitizeHtml from "sanitize-html"  // 过滤html标签

// 允许的标签
const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img',
  'h1',
  'h2',
  'h3',
])
// 内容中的标签上允许出现的属性
const allowedAttributes = Object.assign({}, sanitizeHtml.defaults.allowedAttributes, {
  img: ['src', 'alt'],
})


export default function NotePreview({ children }) {

  return (
    <div className="note-preview">
      <div className="text-width-markdown" dangerouslySetInnerHTML={{
        __html: sanitizeHtml(marked.parse(children || ''), {
          allowedAttributes,
          allowedTags
        })
      }}></div>
    </div>
  )
}