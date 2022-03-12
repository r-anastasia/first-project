import { StoreonModule } from 'storeon'

export enum ToasterActions {
  init = '@init',
  open = 'toaster/open',
  close = 'toaster/close',
}

export type Toast = {
  id: number
  text: string
  key?: string
  buttonText?: string
  duration?: number | 'infinitely'
  onButtonClick?: () => void
}

export type ToasterState = {
  toaster: Array<Toast>
}

export type ToasterEvents = {
  [ToasterActions.open]: Omit<Toast, 'id'>
  [ToasterActions.close]: number
}

type ToasterModule = StoreonModule<ToasterState | null, ToasterEvents>

export const toaster: ToasterModule = (store) => {
  store.on(ToasterActions.init, () => ({
    toaster: [],
  }))

  store.on(ToasterActions.open, (state, payload) => {
    if (!state) return
    const newToast: Toast = {
      id: Date.now(),
      ...payload,
    }

    // Если передан key, то ищется toast с таким же значением key,
    // чтобы затем заменить его на newToast
    const oldToast = state.toaster.find(
      ({ key }) => newToast.key && key === newToast.key,
    )

    if (oldToast) {
      return {
        toaster: state.toaster.map((x) =>
          x.key === oldToast.key ? newToast : x,
        ),
      }
    } else {
      return {
        toaster: [...state.toaster, newToast],
      }
    }
  })

  store.on(ToasterActions.close, (state, payload) => {
    if (!state) return

    return {
      toaster: state.toaster.filter(({ id }) => id !== payload),
    }
  })
}
