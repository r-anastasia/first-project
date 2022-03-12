import { StoreonModule } from 'storeon'
import { baseLayoutId } from 'src/components/layouts/BaseLayout/consts'

enum UpperLayerInternalActions {
  init = '@init',
  set = 'modal/set',
  doShitWithLayout = 'modal/doShitWithLayout',
}

export enum UpperLayerActions {
  open = 'modal/open',
  close = 'modal/close',
}

export enum UpperLayerEnum {
  modal = 'modal',
  drawer = 'drawer',
}

interface OpenedState {
  isOpen: true
  kind: keyof typeof UpperLayerEnum
  content: JSX.Element
  scrollY: number
}

interface ClosedState {
  isOpen: false
  kind: null
  content: null
  scrollY: number
}

export interface UpperLayerState {
  upperLayer: ClosedState | OpenedState
}

export interface UpperLayerEvents {
  [UpperLayerActions.open]: Pick<OpenedState, 'content' | 'kind'>
  [UpperLayerActions.close]: void
  [UpperLayerInternalActions.set]: UpperLayerState['upperLayer']
  [UpperLayerInternalActions.doShitWithLayout]: void
}

type UpperLayerModule = StoreonModule<UpperLayerState | null, UpperLayerEvents>

export const upperLayer: UpperLayerModule = (store) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    const keyCode = event.key || event.keyCode
    const isEscape = keyCode === 'Escape' || keyCode === 'Esc' || keyCode === 27
    if (isEscape) store.dispatch(UpperLayerActions.close)
  }

  store.on(UpperLayerInternalActions.init, () => ({
    upperLayer: {
      isOpen: false,
      content: null,
      kind: null,
      scrollY: 0,
    },
  }))

  store.on(UpperLayerActions.open, (_state, payload) => {
    // в состоянии всегда хранится текущий scrollY страницы на момент открытия модалки
    store.dispatch(UpperLayerInternalActions.set, {
      ...payload,
      isOpen: true,
      scrollY: window.pageYOffset,
    })
    store.dispatch(UpperLayerInternalActions.doShitWithLayout)
    document.body.addEventListener('keydown', handleKeyDown)
  })

  store.on(UpperLayerActions.close, (state) => {
    if (!state?.upperLayer.isOpen) return
    store.dispatch(UpperLayerInternalActions.set, {
      isOpen: false,
      content: null,
      kind: null,
      scrollY: state.upperLayer.scrollY,
    })
    store.dispatch(UpperLayerInternalActions.doShitWithLayout)
    document.body.removeEventListener('keydown', handleKeyDown)
  })

  store.on(UpperLayerInternalActions.set, (_state, payload) => {
    return { upperLayer: { ...payload } }
  })

  store.on(UpperLayerInternalActions.doShitWithLayout, (state) => {
    if (!state) return
    const { isOpen, scrollY } = state.upperLayer
    const mainContent = document.querySelector<HTMLDivElement>(
      `#${baseLayoutId}`,
    )

    if (!mainContent) return
    if (isOpen) {
      // блокируем и перематываем основной контент
      mainContent.style.position = 'fixed'
      mainContent.style.top = `-${scrollY}px`
    } else {
      // возвращаем все к прежнему состоянию
      mainContent.style.position = 'unset'
      window.scrollTo(0, scrollY)
    }
  })
}
