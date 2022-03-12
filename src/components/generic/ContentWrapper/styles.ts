import styled from '@emotion/styled'
import { media } from 'src/theme'

export const ContentWrapper = styled.div`
  max-width: calc(1140px + ${({ theme }) => theme.indents.s} * 2);
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.indents.s};
  color: ${({ theme }) => theme.textColors.basic};

  ${media.xs} {
    max-width: calc(1140px + ${({ theme }) => theme.indents.xs} * 2);
    padding: 0 ${({ theme }) => theme.indents.xs};
  }
`
