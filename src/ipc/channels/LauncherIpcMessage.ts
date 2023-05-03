import { Id } from '@zettelyay/commons'
import { BrowserSuggestion } from '../../BrowserSuggestion'
import { ClipboardContent } from '../../ClipboardContent'

export enum LauncherIpcMessageType {
  ElectronSetState = 'ELECTRON_SET_STATE',
  ElectronNoAccessibilityPermission = 'ELECTRON_NO_ACCESSIBILITY_PERMISSION',
  ElectronNoAutomationPermission = 'ELECTRON_NO_AUTOMATION_PERMISSION',
  ElectronSetBrowserSuggestions = 'ELECTRON_SET_BROWSER_SUGGESTIONS',
  LauncherUpdateSize = 'LAUNCHER_UPDATE_SIZE',
  LauncherOpenApp = 'LAUNCHER_OPEN_APP',
  LauncherOpenSettingsBilling = 'LAUNCHER_OPEN_SETTINGS_BILLING',
  LauncherPasteContent = 'LAUNCHER_PASTE_CONTENT',
  LauncherGoToAccessibilitySettings = 'LAUNCHER_GO_TO_ACCESSIBILITY_SETTINGS',
  LauncherGoToAutomationSettings = 'LAUNCHER_GO_TO_AUTOMATION_SETTINGS',
  LauncherGetBrowserSuggestions = 'LAUNCHER_GET_BROWSER_SUGGESTIONS',
  LauncherOpenUrl = 'LAUNCHER_OPEN_URL',
  LauncherSearchInBrowser = 'LAUNCHER_SEARCH_IN_BROWSER',
}

export type LauncherIpcMessage<T extends LauncherIpcMessageType = LauncherIpcMessageType> = {
  [LauncherIpcMessageType.ElectronSetState]: {
    readonly type: LauncherIpcMessageType.ElectronSetState
    readonly title: string
    readonly url: string
    readonly copiedContent?: ClipboardContent
  }
  [LauncherIpcMessageType.ElectronNoAccessibilityPermission]: {
    readonly type: LauncherIpcMessageType.ElectronNoAccessibilityPermission
  }
  [LauncherIpcMessageType.ElectronNoAutomationPermission]: {
    readonly type: LauncherIpcMessageType.ElectronNoAutomationPermission
  }
  [LauncherIpcMessageType.ElectronSetBrowserSuggestions]: {
    readonly type: LauncherIpcMessageType.ElectronSetBrowserSuggestions
    readonly version: number
    readonly query: string
    readonly suggestions: readonly BrowserSuggestion[]
    readonly searchEngine?: BrowserSuggestion.SearchEngine
  }
  [LauncherIpcMessageType.LauncherUpdateSize]: {
    readonly type: LauncherIpcMessageType.LauncherUpdateSize
    readonly width: number
    readonly height: number
  }
  [LauncherIpcMessageType.LauncherOpenApp]: {
    readonly type: LauncherIpcMessageType.LauncherOpenApp
    readonly pageId?: Id
    readonly cardId?: Id
  }
  [LauncherIpcMessageType.LauncherOpenSettingsBilling]: {
    readonly type: LauncherIpcMessageType.LauncherOpenSettingsBilling
  }
  [LauncherIpcMessageType.LauncherPasteContent]: {
    readonly type: LauncherIpcMessageType.LauncherPasteContent
    readonly content: ClipboardContent
  }
  [LauncherIpcMessageType.LauncherGoToAccessibilitySettings]: {
    readonly type: LauncherIpcMessageType.LauncherGoToAccessibilitySettings
  }
  [LauncherIpcMessageType.LauncherGoToAutomationSettings]: {
    readonly type: LauncherIpcMessageType.LauncherGoToAutomationSettings
  }
  [LauncherIpcMessageType.LauncherGetBrowserSuggestions]: {
    readonly type: LauncherIpcMessageType.LauncherGetBrowserSuggestions
    readonly input: string
  }
  [LauncherIpcMessageType.LauncherOpenUrl]: {
    readonly type: LauncherIpcMessageType.LauncherOpenUrl
    readonly url: string
  }
  [LauncherIpcMessageType.LauncherSearchInBrowser]: {
    readonly type: LauncherIpcMessageType.LauncherSearchInBrowser
    readonly query: string
  }
}[T]

export type LauncherIpcInvokeResponse<T extends LauncherIpcMessageType = LauncherIpcMessageType> = {
  [LauncherIpcMessageType.ElectronSetState]: never
  [LauncherIpcMessageType.ElectronNoAccessibilityPermission]: never
  [LauncherIpcMessageType.ElectronNoAutomationPermission]: never
  [LauncherIpcMessageType.ElectronSetBrowserSuggestions]: never
  [LauncherIpcMessageType.LauncherUpdateSize]: never
  [LauncherIpcMessageType.LauncherOpenApp]: never
  [LauncherIpcMessageType.LauncherOpenSettingsBilling]: never
  [LauncherIpcMessageType.LauncherPasteContent]: never
  [LauncherIpcMessageType.LauncherGoToAccessibilitySettings]: never
  [LauncherIpcMessageType.LauncherGoToAutomationSettings]: never
  [LauncherIpcMessageType.LauncherGetBrowserSuggestions]: never
  [LauncherIpcMessageType.LauncherOpenUrl]: never
  [LauncherIpcMessageType.LauncherSearchInBrowser]: never
}[T]
