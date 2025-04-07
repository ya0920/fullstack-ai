import Link from "next/link"
// import { getAllNotes } from '@/lib/redis'
import SidebarNoteList from "@/components/SidebarNoteList";
import EditButton from "./EditButton";
import { Suspense } from 'react'
import NoteListSkeleton from "./NoteListSkeleton";

export default async function Sidebar() {
  // const notes = await getAllNotes()
  // console.log(notes);
  

  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src="/logo.svg" 
              alt="" />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu">
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList/>
          </Suspense>
          
        </nav>
      </section>
    </>
  )
}