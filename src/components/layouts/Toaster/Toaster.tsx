import { createPortal } from 'react-dom'
// local libs
import { ContentWrapper } from 'src/components/generic'
import { useStoreon } from 'src/store'
import { ToasterContainer } from './styles'
import { Toast } from './Toast'

export const Toaster = (): React.ReactPortal | null => {
  const { toaster } = useStoreon('toaster')

  return !toaster.length
    ? null
    : createPortal(
        <ToasterContainer>
          <ContentWrapper>
            {toaster.map((x) => (
              <Toast key={x.id} {...x} />
            ))}
          </ContentWrapper>
        </ToasterContainer>,
        document.body,
      )
}
