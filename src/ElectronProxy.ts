import { IpcRenderer, IpcRendererEvent } from './electron'
import { WindowType } from './WindowType'

export interface ElectronProxy {
  readonly windowType: WindowType
  readonly ipc: {
    on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): IpcRenderer
    removeListener(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): IpcRenderer
    send(channel: string, ...args: any[]): void
    invoke(channel: string, ...args: any[]): Promise<any>
  }
  readonly devMode: boolean
}
