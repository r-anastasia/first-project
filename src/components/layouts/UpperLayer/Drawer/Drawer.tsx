import { useStoreon } from 'src/store'
import { Overlay } from '../styles'
import { DrawerContainer, DrawerContent } from './styles'
// types
import { UpperLayerActions } from 'src/store/upperLayer'

export const Drawer = () => {
  const {
    dispatch,
    upperLayer: { content },
  } = useStoreon('upperLayer')

  return (
    <DrawerContainer
      aria-modal
      aria-labelledby={'modal'}
      tabIndex={-1}
      role="dialog"
    >
      <Overlay onClick={() => dispatch(UpperLayerActions.close)} />
      <DrawerContent>{content}</DrawerContent>
    </DrawerContainer>
  )
}
