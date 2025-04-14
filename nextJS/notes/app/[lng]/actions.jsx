'use server'

import { updateNote, addNote, delNote } from "@/lib/redis"; 
import { redirect } from "next/navigation";

export async function saveNote(noteId, title, body) {
  const data = JSON.stringify({ title, content: body, updateTime: new Date() });

  if (noteId) { // 更新笔记
    updateNote(noteId, data);
    redirect(`/note/${noteId}`);
  } else { // 新建笔记
    const res = await addNote(data);
    redirect(`/note/${res}`);
  }
}


export async function deleteNote(noteId) {
  await delNote(noteId);
  redirect('/');
}