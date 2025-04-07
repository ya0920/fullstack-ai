'use client'

import { useState, useTransition } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function SidebarNoteItemContent({ id, title, expandedChildren, children }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const selectedId = pathname?.split('/').pop()
  const isActive = id === selectedId  // 父组件传递的id是否等于当前页面的id
  

  return (
    <div className="sidebar-note-list-item">
      {children}

      <button 
        className="sidebar-note-open" 
        style={{
          backgroundColor: isPending ? 'var(--gray-80)' : isActive ? 'var(--tertiary-blue)' : '',
          border: isActive ? '1px solid var(--primary-blue)' : '1px solid transparent',
        }}
        onClick={() => {
          router.push(`/note/${id}`)
        }}
      >Open note for preview</button>

      <button className="sidebar-note-toggle-expand" onClick={(e) => {
        e.stopPropagation()
        setIsExpanded(!isExpanded)
      }}>
        {
          isExpanded ? (<img src="/chevron-down.svg" alt="" />) : (<img src="/chevron-up.svg" alt="" />)
        }
      </button>

      {isExpanded && expandedChildren}
    </div>
  )
}