import dayjs from "dayjs";
import EditButton from "./EditButton.jsx";
import NotePreview from "./NotePreview.jsx";

export default function Note({ noteId, note }) {
    return (
        <div className="note">
            <div className="note-headeer">
                <h1 className="note-title">{note.title}</h1>
                <div className="note-menu">
                    <small className="note-updated-at">
                        最近更新时间：{dayjs(note.updateTime).format('YYYY-MM-DD hh:mm:ss')}
                    </small>
                    <EditButton noteId={noteId}>Edit</EditButton>
                </div>
            </div>
            <NotePreview>{note.content}</NotePreview>
        </div>
    );
}