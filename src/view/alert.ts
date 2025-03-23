import { ViewAlertMessage, ViewAlertTime } from "./model/alert"

export interface AlertView {
    Alert(message: ViewAlertMessage): void
    AlertByTime(message: ViewAlertMessage, time: ViewAlertTime): void
    AlertNonCloseable(message: ViewAlertMessage): void
}