import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const DrawerContainer = styled.div`
  position: relative;
  pointer-events: auto;
  transition: opacity 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 100vh;
  width: 100%;
  z-index: 1;
`

const slide = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 300px;
  }
`

export const DrawerContent = styled.div`
  width: 300px;
  min-height: 100vh;
  padding: ${({ theme }) => theme.indents.s};
  background: ${({ theme }) => theme.colors.basicLight};
  z-index: 1;
  animation: ${slide};
  animation-duration: 0.2s;
  overflow: hidden;
  display: flex;
`
