import { Note, NoteUid, NoteContent } from "../model/note"

import { StoreOption } from "./shared/option"

export interface NoteStore {
    CreateNote(content: NoteContent): StoreOption<Note>
    ReadNotesByCount(count: number): StoreOption<Array<Note>>
    UpdateNote(uid: NoteUid, content: NoteContent): StoreOption<Note>
    DeleteNote(uid: NoteUid): StoreOption<Note>
}
