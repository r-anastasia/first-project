import React from 'react'
import FocusLock from 'react-focus-lock'
import { createPortal } from 'react-dom'
// local libs
import { useStoreon } from 'src/store'
import { Modal } from './Modal'
import { Drawer } from './Drawer'
// types
import { UpperLayerEnum } from 'src/store/upperLayer'

export const UpperLayer = (): React.ReactPortal | null => {
  const {
    upperLayer: { isOpen, kind },
  } = useStoreon('upperLayer')

  const kindMapping: Record<keyof typeof UpperLayerEnum, JSX.Element> = {
    [UpperLayerEnum.modal]: <Modal />,
    [UpperLayerEnum.drawer]: <Drawer />,
  }

  return !isOpen
    ? null
    : createPortal(
        <FocusLock>{kind && kindMapping[kind]}</FocusLock>,
        document.body,
      )
}
