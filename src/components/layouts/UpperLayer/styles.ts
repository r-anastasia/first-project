import styled from '@emotion/styled'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.overlay};
  cursor: pointer;
`
