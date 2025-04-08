import { marked } from "marked"
import sanitizeHtml from "sanitize-html"

// 允许出现的标签
const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
    'img',
])

// 内容中的标签上允许的属性
const allowedAttributes = Object.assign({},
    sanitizeHtml.defaults.allowedAttributes,
    {
        'img': ['src', 'alt', 'title'],
    }
)

export default function NotePreview({ children }) {
    return (
        <div className="note-preview">
            <div className="text-width-markdown" dangerouslySetInnerHTML={{
                __html: sanitizeHtml(marked.parse(children || ''),
                {
                    allowedTags,
                    allowedAttributes,
                })
            }}>

            </div>
        </div>
    )
}