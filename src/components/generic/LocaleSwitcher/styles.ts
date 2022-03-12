import styled from '@emotion/styled'
import { media } from 'src/theme'
// types
import { LocaleSwitcherProps, LocationEnum } from './types'

export const LocaleSwitcherContainer = styled.div<LocaleSwitcherProps>`
  padding: ${({ theme, location }) =>
    location === LocationEnum.header ? theme.indents.xs : null};
  margin-left: ${({ location }) =>
    location === LocationEnum.footer ? 'auto' : null};

  ${media.m} {
    margin-left: ${({ location }) =>
      location === LocationEnum.header ? 'auto' : null};
  }

  ${media.s} {
    margin-left: ${({ location }) =>
      location === LocationEnum.header ? 'auto' : '0px'};
  }
`
