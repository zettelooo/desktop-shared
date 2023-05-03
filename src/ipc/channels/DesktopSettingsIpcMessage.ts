export enum DesktopSettingsIpcMessageType {
  BrowserGotoAccessibility = 'BROWSER_GO_TO_ACCESSIBILITY',
  BrowserGotoAutomation = 'BROWSER_GO_TO_AUTOMATION',
}

export type DesktopSettingsIpcMessage<T extends DesktopSettingsIpcMessageType = DesktopSettingsIpcMessageType> = {
  [DesktopSettingsIpcMessageType.BrowserGotoAccessibility]: {
    readonly type: DesktopSettingsIpcMessageType.BrowserGotoAccessibility
  }
  [DesktopSettingsIpcMessageType.BrowserGotoAutomation]: {
    readonly type: DesktopSettingsIpcMessageType.BrowserGotoAutomation
  }
}[T]

export type DesktopSettingsIpcInvokeResponse<T extends DesktopSettingsIpcMessageType = DesktopSettingsIpcMessageType> =
  {
    [DesktopSettingsIpcMessageType.BrowserGotoAccessibility]: never
    [DesktopSettingsIpcMessageType.BrowserGotoAutomation]: never
  }[T]
