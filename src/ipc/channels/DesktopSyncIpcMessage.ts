import { DesktopSync } from '../../DesktopSync'

export enum DesktopSyncIpcMessageType {
  BrowserGetElectronBased = 'BROWSER_GET_ELECTRON_BASED',
  BrowserSetBrowserBased = 'BROWSER_SET_BROWSER_BASED',
  BrowserSetElectronBased = 'BROWSER_SET_ELECTRON_BASED',
  ElectronSetBrowserBased = 'ELECTRON_SET_BROWSER_BASED',
  ElectronSetElectronBased = 'ELECTRON_SET_ELECTRON_BASED',
}

export type DesktopSyncIpcMessage<T extends DesktopSyncIpcMessageType = DesktopSyncIpcMessageType> = {
  [DesktopSyncIpcMessageType.BrowserGetElectronBased]: {
    readonly type: DesktopSyncIpcMessageType.BrowserGetElectronBased
  }
  [DesktopSyncIpcMessageType.BrowserSetBrowserBased]: {
    readonly type: DesktopSyncIpcMessageType.BrowserSetBrowserBased
    readonly updates: Partial<DesktopSync.BrowserBased>
  }
  [DesktopSyncIpcMessageType.BrowserSetElectronBased]: {
    readonly type: DesktopSyncIpcMessageType.BrowserSetElectronBased
    readonly updates: Partial<DesktopSync.ElectronBased>
  }
  [DesktopSyncIpcMessageType.ElectronSetBrowserBased]: {
    readonly type: DesktopSyncIpcMessageType.ElectronSetBrowserBased
    readonly updates: Partial<DesktopSync.BrowserBased>
  }
  [DesktopSyncIpcMessageType.ElectronSetElectronBased]: {
    readonly type: DesktopSyncIpcMessageType.ElectronSetElectronBased
    readonly updates: Partial<DesktopSync.ElectronBased>
  }
}[T]

export type DesktopSyncIpcInvokeResponse<T extends DesktopSyncIpcMessageType = DesktopSyncIpcMessageType> = {
  [DesktopSyncIpcMessageType.BrowserGetElectronBased]: DesktopSync.ElectronBased
  [DesktopSyncIpcMessageType.BrowserSetBrowserBased]: never
  [DesktopSyncIpcMessageType.BrowserSetElectronBased]: never
  [DesktopSyncIpcMessageType.ElectronSetBrowserBased]: never
  [DesktopSyncIpcMessageType.ElectronSetElectronBased]: never
}[T]
