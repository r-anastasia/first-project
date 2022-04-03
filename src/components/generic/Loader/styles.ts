import styled from '@emotion/styled'

export const LoaderContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
`
export const LoaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textColors.basic};
  text-transform: uppercase;
`
