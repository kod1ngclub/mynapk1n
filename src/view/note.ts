import { ViewNoteUid, ViewNoteContent } from "./model/note"

export interface NoteView {
    AppendNote(content: ViewNoteContent): void
    UpdateNote(uid: ViewNoteUid, content: ViewNoteContent): void
    DeleteNote(uid: ViewNoteUid): void
}
