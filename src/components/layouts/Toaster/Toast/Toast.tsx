import { useTranslation } from 'react-i18next'
// local libs
import { Button } from 'src/components/generic'
import { useStoreon } from 'src/store'
import { ToasterActions } from 'src/store/toaster'
import { ToastContainer, ButtonContainer, TextContainer } from './styles'
// types
import type { ToastProps } from './types'

export const Toast = ({
  id,
  text,
  buttonText,
  duration,
  onButtonClick,
}: ToastProps) => {
  const { t } = useTranslation()
  const { dispatch } = useStoreon()

  const timeout =
    duration === 'infinitely'
      ? null
      : setTimeout(() => dispatch(ToasterActions.close, id), duration || 5000)

  const handleClose = () => {
    timeout && clearTimeout(timeout)
    onButtonClick && onButtonClick()
    dispatch(ToasterActions.close, id)
  }

  return (
    <ToastContainer>
      <TextContainer>{text}</TextContainer>

      <ButtonContainer>
        <Button
          text={buttonText || t('toast.button')}
          size="s"
          width="100%"
          onClick={handleClose}
        />
      </ButtonContainer>
    </ToastContainer>
  )
}
