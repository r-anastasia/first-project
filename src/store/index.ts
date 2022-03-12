import { createContext } from 'react'
import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
import { storeonLogger } from 'storeon/devtools'
// local libs
import { upperLayer } from './upperLayer'

import { toaster, ToasterState, ToasterEvents } from './toaster'
// types
import { UpperLayerState, UpperLayerEvents } from './upperLayer'

type State = UpperLayerState & ToasterState

export type Events = UpperLayerEvents & ToasterEvents

export const store = createStoreon<State, Events>([
  upperLayer,
  toaster,

  process.env.NODE_ENV !== 'production' && storeonLogger,
])

export const StoreonCustomContext = createContext(store)

export const useStoreon = customContext(StoreonCustomContext)
