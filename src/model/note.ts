export interface NoteUid { data: number }
export interface NoteContent { data: string }

export interface Note {
    uid: NoteUid
    content: NoteContent
}