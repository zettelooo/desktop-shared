import { MessageBoxVariant, MessageBoxStyle, MessageBoxPosition } from '../../message-box'
import { WindowType } from '../../WindowType'

export enum WindowIpcMessageType {
  ElectronRequestHide = 'MAIN_REQUEST_HIDE',
  WindowReady = 'WINDOW_READY',
  WindowHide = 'WINDOW_HIDE',
  WindowShowMessage = 'WINDOW_SHOW_MESSAGE',
  WindowReload = 'WINDOW_RELOAD',
}

export type WindowIpcMessage<T extends WindowIpcMessageType = WindowIpcMessageType> = {
  [WindowIpcMessageType.ElectronRequestHide]: {
    readonly type: WindowIpcMessageType.ElectronRequestHide
  }
  [WindowIpcMessageType.WindowReady]: {
    readonly type: WindowIpcMessageType.WindowReady
    readonly windowType: WindowType
  }
  [WindowIpcMessageType.WindowHide]: {
    readonly type: WindowIpcMessageType.WindowHide
    readonly windowType: WindowType
    readonly initiatedByElectron: boolean
  }
  [WindowIpcMessageType.WindowShowMessage]: {
    readonly type: WindowIpcMessageType.WindowShowMessage
    readonly windowType: WindowType
    readonly title?: string
    readonly variant?: MessageBoxVariant
    readonly style?: MessageBoxStyle
    readonly position?: MessageBoxPosition
    readonly timeoutSeconds?: number
    readonly alwaysOnTop?: boolean
  }
  [WindowIpcMessageType.WindowReload]: {
    readonly type: WindowIpcMessageType.WindowReload
    readonly windowType: WindowType
  }
}[T]

export type WindowIpcInvokeResponse<T extends WindowIpcMessageType = WindowIpcMessageType> = {
  readonly windowType: WindowType
} & {
  [WindowIpcMessageType.ElectronRequestHide]: never
  [WindowIpcMessageType.WindowReady]: never
  [WindowIpcMessageType.WindowHide]: never
  [WindowIpcMessageType.WindowShowMessage]: never
  [WindowIpcMessageType.WindowReload]: never
}[T]
