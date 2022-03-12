import styled from '@emotion/styled'
import { media } from 'src/theme'

export const ModalContainer = styled.div`
  position: relative;
  pointer-events: auto;
  transition: opacity 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: ${({ theme }) => theme.indents.l};
  z-index: 1;

  ${media.xs} {
    padding: 20vh 0 0;
  }
`

export const ModalContent = styled.div`
  width: 480px;
  padding: ${({ theme }) => theme.indents.s};
  background: ${({ theme }) => theme.colors.basicLight};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  z-index: 1;

  ${media.xs} {
    width: 100vw;
    border-radius: ${({ theme }) => theme.borderRadius.l}
      ${({ theme }) => theme.borderRadius.l} 0 0;
  }
`
