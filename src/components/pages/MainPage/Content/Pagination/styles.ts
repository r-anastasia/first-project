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
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.indents.xs};

  background: 0 ${({ theme }) => theme.colors.basicLight};
  border: ${({ theme }) => `1px ${theme.colors.accent[50]}`};
  border-style: solid none;

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.xs};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.xs};
    border-style: solid;
    cursor: pointer;
  }

  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius.xs};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.xs};
    border-style: solid;
    cursor: pointer;
  }
`
