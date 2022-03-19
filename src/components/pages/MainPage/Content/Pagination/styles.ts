import styled from '@emotion/styled'

export const PaginationContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.indents.s};
  display: flex;
  justify-content: center;
`
export const PageNavigation = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PageItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.indents.xs};

  background: 0 ${({ theme }) => theme.colors.basicLight};
  border: ${({ theme }) => `1px ${theme.colors.accent[700]}`};
  border-style: solid none;

  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.basic};
`
