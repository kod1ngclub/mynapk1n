export interface ViewAlertMessage { data: string }
export interface ViewAlertClosable { data: boolean }
export enum ViewAlertTime { SHORT, MEDIUM, LONG }

export interface ViewAlert {
    message: ViewAlertMessage
    closable: ViewAlertClosable
    time: ViewAlertTime
}