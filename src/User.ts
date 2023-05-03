import { Id, Timestamp } from '@zettelyay/commons'

export interface User {
  readonly id: Id
  readonly email: string
  readonly backgroundColor: string
  readonly avatarFileUrl?: string
  readonly username: string
  readonly displayName: string
  readonly lastActive: Timestamp
  readonly extensionIds: readonly Id[]
  readonly isOnboarded: boolean
}
