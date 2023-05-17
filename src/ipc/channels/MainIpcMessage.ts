import { Id } from '@zettelooo/commons'

export enum MainIpcMessageType {
  ElectronSetState = 'ELECTRON_SET_STATE',
  ElectronSignOut = 'ELECTRON_SIGN_OUT',
  ElectronGetCurrentUser = 'ELECTRON_GET_CURRENT_USER',
  ElectronOpenSettingsBilling = 'ELECTRON_OPEN_SETTINGS_BILLING',
  ElectronOpenSettingsDesktop = 'ELECTRON_OPEN_SETTINGS_DESKTOP',
  MainRequestSignIn = 'MAIN_REQUEST_SIGN_IN',
  MainRequestBilling = 'MAIN_REQUEST_BILLING',
  MainSwitchTo = 'MAIN_SWITCH_TO',
}

export type MainIpcMessage<T extends MainIpcMessageType = MainIpcMessageType> = {
  [MainIpcMessageType.ElectronSetState]: {
    readonly type: MainIpcMessageType.ElectronSetState
    readonly pageId?: Id
    readonly cardId?: Id
  }
  [MainIpcMessageType.ElectronSignOut]: {
    readonly type: MainIpcMessageType.ElectronSignOut
  }
  [MainIpcMessageType.ElectronGetCurrentUser]: {
    readonly type: MainIpcMessageType.ElectronGetCurrentUser
  }
  [MainIpcMessageType.ElectronOpenSettingsBilling]: {
    readonly type: MainIpcMessageType.ElectronOpenSettingsBilling
  }
  [MainIpcMessageType.ElectronOpenSettingsDesktop]: {
    readonly type: MainIpcMessageType.ElectronOpenSettingsDesktop
  }
  [MainIpcMessageType.MainRequestSignIn]: {
    readonly type: MainIpcMessageType.MainRequestSignIn
    readonly url: string
  }
  [MainIpcMessageType.MainRequestBilling]: {
    readonly type: MainIpcMessageType.MainRequestBilling
    readonly url: string
  }
  [MainIpcMessageType.MainSwitchTo]: {
    readonly type: MainIpcMessageType.MainSwitchTo
    readonly target: 'launcher'
  }
}[T]

export type MainIpcInvokeResponse<T extends MainIpcMessageType = MainIpcMessageType> = {
  [MainIpcMessageType.ElectronSetState]: never
  [MainIpcMessageType.ElectronSignOut]: never
  [MainIpcMessageType.ElectronGetCurrentUser]: never
  [MainIpcMessageType.ElectronOpenSettingsBilling]: never
  [MainIpcMessageType.ElectronOpenSettingsDesktop]: never
  [MainIpcMessageType.MainRequestSignIn]: never
  [MainIpcMessageType.MainRequestBilling]: never
  [MainIpcMessageType.MainSwitchTo]: never
}[T]
