import styled from '@emotion/styled'
import { media } from 'src/theme'

export const FooterContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.indents.s};
`

export const LinksContainer = styled.div`
  display: flex;

  ${media.s} {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.indents.s};
  }
`

export const TextContainer = styled.div`
  color: ${({ theme }) => theme.textColors.basic};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 27px;
  text-align: justify;
`
