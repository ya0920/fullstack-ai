import SidebarNoteItem from '@/components/SidebarNoteItem'
import { getAllNotes } from '@/lib/redis'

export default async function SidebarNoteList() {
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  await sleep(1000)
  
  const notes = await getAllNotes()
  const arr = Object.entries(notes)

  if (arr.length === 0) {
    return <div className="notes-empty">
      {'No notes create yet!'}
    </div>
  }

  return (
    <ul className="notes-list">
      {
        arr.map(([noteId, note]) => {
          // const { title, updateTime } = JSON.parse(note)
          return (
            <li key={noteId}>
              {/* <header className="sidebar-note-header">
                <strong>{title}</strong>
                <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
              </header> */}

              <SidebarNoteItem noteId={noteId} note={JSON.parse(note)}/>
            </li>
          )
        })
      }
    </ul>
  )
}