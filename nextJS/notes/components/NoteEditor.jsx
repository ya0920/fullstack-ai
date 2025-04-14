'use client'

import { useState } from 'react'
import NotePreview from "./NotePreview.jsx";
import { deleteNote, saveNote } from "../app/[lng]/actions.jsx";

export default function NoteEditor({ noteId, initalTitle, initalBody }) {
  const [title, setTitle] = useState(initalTitle);
  const [body, setBody] = useState(initalBody);
  const isDraft = !noteId  // isDraft 为 true 时，为新建笔记

  return (
    <div className="note-editor">
      <form className='note-editor-form' autoComplete='off'>
        <label htmlFor="note-title-input" className='offscreen'>
          输入笔记标题
        </label>
        <input id="note-title-input" type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}></input>

        <label htmlFor="note-body-input" className='offscreen'>
          输入笔记内容
        </label>
        <textarea id="note-body-input" value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>

      </form>
      <div className="note-editor-preview">
        <form className='note-editor-menu'>
          <button className='note-editor-done' disabled={false} type='submit' formAction={() => saveNote(noteId, title, body)}> 
            <img width='14px' height='10px' src="/checkmark.svg" alt="" />
            Done
          </button>
          {/* delete button */}
          {
            !isDraft && (
              <button className='note-editor-delete' disabled={false} formAction={() => deleteNote(noteId)}>
                <img width='10px' height='10px' src="/cross.svg" alt="" />
                Delete
              </button>
            ) 
          }
        </form>
        <div className="label label--preview">
          Preview
        </div>
        <h1 className='note-title'>{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  )
}