import { StorageTypes, LStorage } from './types'

const localStorageSupported =
  typeof window !== 'undefined' &&
  typeof window['localStorage'] != 'undefined' &&
  window['localStorage'] != null

export const lsGet = <T extends LStorage>(
  key: T,
): StorageTypes[T] | undefined => {
  const v = localStorageSupported && localStorage.getItem(key)
  return v ? (JSON.parse(v) as StorageTypes[T]) : undefined
}

export const lsSet = <T extends LStorage>(
  key: T,
  value: StorageTypes[T],
): void | false =>
  localStorageSupported && localStorage.setItem(key, JSON.stringify(value))

export const lsRemove = (key: keyof StorageTypes): void =>
  localStorage.removeItem(key)
