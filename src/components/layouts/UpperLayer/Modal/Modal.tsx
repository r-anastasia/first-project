import { useStoreon } from 'src/store'
import { Overlay } from '../styles'
import { ModalContainer, ModalContent } from './styles'
// types
import { UpperLayerActions } from 'src/store/upperLayer'

export const Modal = () => {
  const {
    dispatch,
    upperLayer: { content },
  } = useStoreon('upperLayer')

  return (
    <ModalContainer
      aria-modal
      aria-labelledby={'modal'}
      tabIndex={-1}
      role="dialog"
    >
      <Overlay onClick={() => dispatch(UpperLayerActions.close)} />
      <ModalContent>{content}</ModalContent>
    </ModalContainer>
  )
}
