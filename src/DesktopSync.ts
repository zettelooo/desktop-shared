import { Keyboard } from '@zettelyay/commons'
import { User } from './User'

export namespace DesktopSync {
  export interface BrowserBased {
    readonly themeType: 'system' | 'light' | 'dark'
    readonly currentUser: User | null
  }

  export interface ElectronBased {
    readonly captureShortcut: Keyboard.Combination | null
    readonly launcherShortcut: Keyboard.Combination | null
    readonly mainShortcut: Keyboard.Combination | null
  }
}
