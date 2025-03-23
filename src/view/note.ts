import { ViewNoteUid, ViewNoteContent } from "./model/note"

export interface NoteView {
    AppendNote(uid: ViewNoteUid, content: ViewNoteContent): void
    UpdateNote(uid: ViewNoteUid, content: ViewNoteContent): void
    DeleteNote(uid: ViewNoteUid): void
}
