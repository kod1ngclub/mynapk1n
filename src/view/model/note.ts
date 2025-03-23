export interface ViewNoteUid {
    data: number
}

export interface ViewNoteContent {
    data: string
}

export interface ViewNote {
    uid: ViewNoteUid
    content: ViewNoteContent
}