import Link from "next/link";

export default function EditButton({ noteId, children }) {
  const isDraft = noteId == null  // 默认是新增状态
  return (
    <Link className="link--unstyled" href={`/note/edit/${noteId || ''}`}>
      <button className={['edit-button', isDraft ? 'edit-button--solid' : 'edit-button--outline'].join(' ')}>
        { children }
      </button>
    </Link>
  )
}