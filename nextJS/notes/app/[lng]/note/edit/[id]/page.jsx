import NoteEditor from "@/components/NoteEditor";
import { getNote } from "@/lib/redis";

export default async function EditNote({ params }) {
  const { id } = await params;
  
  const note = await getNote(id);

  // sleep 模拟网络延迟
  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await sleep(2000); 

  if (!note) {
    return (
      <div className="note--empty-state">
        <div className="note-text--empty-state">
          当前没有笔记
        </div>
      </div>
    )
  }

  return (
    <NoteEditor noteId={id} initalTitle={note.title} initalBody={note.content}></NoteEditor>
  )
}