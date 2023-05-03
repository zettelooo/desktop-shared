import {
  DesktopSettingsIpcInvokeResponse,
  DesktopSettingsIpcMessage,
  DesktopSettingsIpcMessageType,
} from './channels/DesktopSettingsIpcMessage'
import {
  DesktopSyncIpcInvokeResponse,
  DesktopSyncIpcMessage,
  DesktopSyncIpcMessageType,
} from './channels/DesktopSyncIpcMessage'
import { LauncherIpcInvokeResponse, LauncherIpcMessage, LauncherIpcMessageType } from './channels/LauncherIpcMessage'
import { MainIpcInvokeResponse, MainIpcMessage, MainIpcMessageType } from './channels/MainIpcMessage'
import { UpdateIpcInvokeResponse, UpdateIpcMessage, UpdateIpcMessageType } from './channels/UpdateIpcMessage'
import { WindowIpcInvokeResponse, WindowIpcMessage, WindowIpcMessageType } from './channels/WindowIpcMessage'

export enum IpcChannel {
  Window = 'WINDOW',
  Main = 'MAIN',
  Launcher = 'LAUNCHER',
  Update = 'UPDATE',
  DesktopSettings = 'DESKTOP_SETTINGS',
  DesktopSync = 'DESKTOP_SYNC',
}

export type IpcMessageType<C extends IpcChannel = IpcChannel> = {
  [IpcChannel.Window]: WindowIpcMessageType
  [IpcChannel.Main]: MainIpcMessageType
  [IpcChannel.Launcher]: LauncherIpcMessageType
  [IpcChannel.Update]: UpdateIpcMessageType
  [IpcChannel.DesktopSettings]: DesktopSettingsIpcMessageType
  [IpcChannel.DesktopSync]: DesktopSyncIpcMessageType
}[C]

export type IpcMessage<
  C extends IpcChannel = IpcChannel,
  T extends IpcMessageType<C> = IpcMessageType<C>
> = C extends IpcChannel.Window
  ? T extends IpcMessageType<IpcChannel.Window>
    ? WindowIpcMessage<T>
    : never
  : C extends IpcChannel.Main
  ? T extends IpcMessageType<IpcChannel.Main>
    ? MainIpcMessage<T>
    : never
  : C extends IpcChannel.Launcher
  ? T extends IpcMessageType<IpcChannel.Launcher>
    ? LauncherIpcMessage<T>
    : never
  : C extends IpcChannel.Update
  ? T extends IpcMessageType<IpcChannel.Update>
    ? UpdateIpcMessage<T>
    : never
  : C extends IpcChannel.DesktopSettings
  ? T extends IpcMessageType<IpcChannel.DesktopSettings>
    ? DesktopSettingsIpcMessage<T>
    : never
  : C extends IpcChannel.DesktopSync
  ? T extends IpcMessageType<IpcChannel.DesktopSync>
    ? DesktopSyncIpcMessage<T>
    : never
  : never

export type IpcInvokeResponse<
  C extends IpcChannel = IpcChannel,
  T extends IpcMessageType<C> = IpcMessageType<C>
> = C extends IpcChannel.Window
  ? T extends IpcMessageType<IpcChannel.Window>
    ? WindowIpcInvokeResponse<T>
    : never
  : C extends IpcChannel.Main
  ? T extends IpcMessageType<IpcChannel.Main>
    ? MainIpcInvokeResponse<T>
    : never
  : C extends IpcChannel.Launcher
  ? T extends IpcMessageType<IpcChannel.Launcher>
    ? LauncherIpcInvokeResponse<T>
    : never
  : C extends IpcChannel.Update
  ? T extends IpcMessageType<IpcChannel.Update>
    ? UpdateIpcInvokeResponse<T>
    : never
  : C extends IpcChannel.DesktopSettings
  ? T extends IpcMessageType<IpcChannel.DesktopSettings>
    ? DesktopSettingsIpcInvokeResponse<T>
    : never
  : C extends IpcChannel.DesktopSync
  ? T extends IpcMessageType<IpcChannel.DesktopSync>
    ? DesktopSyncIpcInvokeResponse<T>
    : never
  : never
