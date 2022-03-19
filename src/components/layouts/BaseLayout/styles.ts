import styled from '@emotion/styled'
import { media } from 'src/theme'
import { pageTopIndent, pageTopIndentMobile } from './consts'

export const BaseWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;
  padding-top: ${pageTopIndent};

  ${media.xs} {
    padding-top: ${pageTopIndentMobile};
  }

  background-image: url('images/background.png');
  background-size: cover;
  background-position: center;
`

export const BaseLayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.basic};
  width: 100%;
`

export const PageContent = styled.div`
  flex: 1;
  width: 100%;

  ${media.xs} {
    padding-top: 0;
  }
`
