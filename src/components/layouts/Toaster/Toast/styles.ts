import styled from '@emotion/styled'
import { media } from 'src/theme'

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.indents.xs};
  margin-bottom: ${({ theme }) => theme.indents.xs};
  background: ${({ theme }) => theme.colors.basicLight};
  border-radius: ${({ theme }) => theme.borderRadius.m};

  &:last-of-type {
    margin-bottom: 0;
  }

  ${media.xs} {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  margin-right: ${({ theme }) => theme.indents.xxs};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.textColors.basic};

  ${media.xs} {
    margin: 0px 0px ${({ theme }) => theme.indents.xs} 0px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;

  ${media.xs} {
    width: 100%;
    margin-left: 0px;
  }
`
