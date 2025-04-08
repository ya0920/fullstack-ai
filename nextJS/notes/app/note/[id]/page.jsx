import { getNote } from "@/lib/redis.js";
import Note from "@/components/Note.jsx";

export default async function Page({ params }) {

  const { id } = await params;
  const note = await getNote(id)
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  await sleep(2000)

  if (!note) {
    return (
      <div>Note not found</div>
    )
  }

  return (
    <Note noteId={id} note={note} />
  )
}