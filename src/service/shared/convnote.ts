import { NoteUid } from "../../model/note"
import { ViewNoteUid } from "../../view/model/note"

export class ConvNote {
    static ViewUidToUid(viewuid: ViewNoteUid): NoteUid {
        return { data: viewuid.data }
    }

    static UidToViewUid(uid: NoteUid): ViewNoteUid {
        return { data: uid.data }
    }
}
