export enum UpdateIpcMessageType {
  ElectronIsChecking = 'ELECTRON_IS_CHECKING',
  ElectronNotAvailable = 'ELECTRON_NOT_AVAILABLE',
  ElectronAvailable = 'ELECTRON_AVAILABLE',
  ElectronDownloadProgress = 'ELECTRON_DOWNLOAD_PROGRESS',
  ElectronDownloaded = 'ELECTRON_DOWNLOADED',
  ElectronError = 'ELECTRON_ERROR',
  BrowserDownload = 'BROWSER_DOWNLOAD',
  BrowserInstall = 'BROWSER_INSTALL',
  BrowserLater = 'BROWSER_LATER',
}

export type UpdateIpcMessage<T extends UpdateIpcMessageType = UpdateIpcMessageType> = {
  [UpdateIpcMessageType.ElectronIsChecking]: {
    readonly type: UpdateIpcMessageType.ElectronIsChecking
  }
  [UpdateIpcMessageType.ElectronNotAvailable]: {
    readonly type: UpdateIpcMessageType.ElectronNotAvailable
  }
  [UpdateIpcMessageType.ElectronAvailable]: {
    readonly type: UpdateIpcMessageType.ElectronAvailable
    readonly newVersion: string
  }
  [UpdateIpcMessageType.ElectronDownloadProgress]: {
    readonly type: UpdateIpcMessageType.ElectronDownloadProgress
    readonly percent: number
  }
  [UpdateIpcMessageType.ElectronDownloaded]: {
    readonly type: UpdateIpcMessageType.ElectronDownloaded
    readonly newVersion: string
  }
  [UpdateIpcMessageType.ElectronError]: {
    readonly type: UpdateIpcMessageType.ElectronError
    readonly errorMessage: string
  }
  [UpdateIpcMessageType.BrowserDownload]: {
    readonly type: UpdateIpcMessageType.BrowserDownload
  }
  [UpdateIpcMessageType.BrowserInstall]: {
    readonly type: UpdateIpcMessageType.BrowserInstall
  }
  [UpdateIpcMessageType.BrowserLater]: {
    readonly type: UpdateIpcMessageType.BrowserLater
  }
}[T]

export type UpdateIpcInvokeResponse<T extends UpdateIpcMessageType = UpdateIpcMessageType> = {
  [UpdateIpcMessageType.ElectronIsChecking]: never
  [UpdateIpcMessageType.ElectronNotAvailable]: never
  [UpdateIpcMessageType.ElectronAvailable]: never
  [UpdateIpcMessageType.ElectronDownloadProgress]: never
  [UpdateIpcMessageType.ElectronDownloaded]: never
  [UpdateIpcMessageType.ElectronError]: never
  [UpdateIpcMessageType.BrowserDownload]: never
  [UpdateIpcMessageType.BrowserInstall]: never
  [UpdateIpcMessageType.BrowserLater]: never
}[T]
