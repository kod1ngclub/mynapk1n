import { ViewAlertMessage, ViewAlertTime } from "./model/alert"

export interface ViewAlert {
    Alert(message: ViewAlert): void
    AlertByTime(message: ViewAlertMessage, time: ViewAlertTime): void
}