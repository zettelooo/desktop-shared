import { Id, Timestamp } from '@zettelooo/commons'

export interface User {
  readonly id: Id
  readonly email: string
  readonly color: string
  readonly avatarFileUrl?: string
  readonly username: string
  readonly displayName: string
  readonly lastActive: Timestamp
  readonly extensionIds: readonly Id[]
  readonly isOnboarded: boolean
}
