export interface ViewAlertMessage {
    data: string
}

export enum ViewAlertTime {
    SHORT,
    MEDIUM,
    LONG,
    PERMENENT
}

export interface ViewAlert {
    message: ViewAlertMessage
    time: ViewAlertTime
}