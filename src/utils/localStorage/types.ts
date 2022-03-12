export enum LStorage {
  isCookieAccepted = 'isCookieAccepted',
  locale = 'locale',
}

export type StorageTypes = {
  [LStorage.isCookieAccepted]: boolean
  [LStorage.locale]: string
}
