interface StoreOptionError {
    ok: false
    message: string
}

interface StoreOptionOk<T> {
    ok: true
    data: T
}

export type StoreOption<T> = StoreOptionError | StoreOptionOk<T>