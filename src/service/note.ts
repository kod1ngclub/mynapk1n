import { NoteContent } from "../model/note"

import { NoteStore } from "../store/note"
import { NoteView } from "../view/note"
import { AlertView } from "../view/alert"

import { ViewNoteContent, ViewNoteUid } from "../view/model/note"

import { ConvNote } from "./shared/convnote"

export class NoteService {
    private notestore: NoteStore
    private noteview: NoteView
    private alertview: AlertView

    constructor(store: NoteStore, view: NoteView, alert: AlertView) {
        this.notestore = store
        this.noteview = view
        this.alertview = alert
    }

    OnInitLoad(): void {
        const option = this.notestore.ReadNotesByCount(30)

        if (!option.ok) {
            this.alertview.Alert({ data: `Failed to load notes (${option.message})` })
            return
        }

        option.data.map(note => {
            this.noteview.AppendNote(ConvNote.UidToViewUid(note.uid), { data: note.content.data })
        })
    }

    OnAddLoad(): void {
        const option = this.notestore.ReadNotesByCount(70)

        if (!option.ok) {
            this.alertview.Alert({ data: `Failed to load notes (${option.message})` })
            return
        }

        option.data.map(note => {
            this.noteview.AppendNote(ConvNote.UidToViewUid(note.uid), { data: note.content.data })
        })
    }

    OnCreateNote(content: NoteContent): void {
        const option = this.notestore.CreateNote({ data: content.data})

        if (!option.ok) {
            this.alertview.Alert({ data: `Failed to create note (${option.message})` })
            return
        }

        this.noteview.AppendNote(ConvNote.UidToViewUid(option.data.uid), { data: option.data.content.data })
    }

    OnUpdateNote(viewuid: ViewNoteUid, content: ViewNoteContent): void {
        const noteuid = ConvNote.ViewUidToUid(viewuid)

        const option = this.notestore.UpdateNote(noteuid, { data: content.data })

        if (!option.ok) {
            this.alertview.Alert({ data: `Failed to update note (${option.message})` })
            return
        }

        this.noteview.UpdateNote(viewuid, content)
    }

    OnDeleteNote(viewuid: ViewNoteUid): void {
        const noteuid = ConvNote.ViewUidToUid(viewuid)

        const option = this.notestore.DeleteNote(noteuid)

        if (!option.ok) {
            this.alertview.Alert({ data: `Failed to delete note (${option.message})` })
            return
        }

        this.noteview.DeleteNote(viewuid)
    }
}