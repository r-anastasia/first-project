import styled from '@emotion/styled'

export const ToasterContainer = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.indents.xs};
  width: 100%;
  z-index: 10;
`
