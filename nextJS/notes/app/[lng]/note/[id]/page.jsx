import { getNote } from "@/lib/redis.js";
import Note from "@/components/Note.jsx";

export default async function Page({params}) {
  const { id } = await params;
  const note = await getNote(id)

  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await sleep(2000);
  // console.log(note);

  if (!note) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Note not found 
        </span>
      </div>
    )
  }
  
  return (
    <Note noteId={id} note={note}></Note>
  )
}