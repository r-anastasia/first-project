import styled from '@emotion/styled'
import { media } from 'src/theme'
import { GridWrap } from 'emotion-flex-grid'
import { headerHeight, headerHeightMobile } from './consts'

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: ${({ theme }) => theme.indents.xs};
  z-index: 10;
  width: 100%;

  ${media.l} {
    top: 0;
  }
`

export const HeaderWrapper = styled(GridWrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.indents.s};
  width: 100%;
  height: ${headerHeight}px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background: ${({ theme }) => theme.colors.basicLightWithOpacity};
  backdrop-filter: blur(16px);

  @supports not (backdrop-filter: blur()) {
    background-color: rgba(255, 255, 255, 0.95);
  }

  ${media.xs} {
    top: 0;
    height: ${headerHeightMobile}px;
    padding: 0 ${({ theme }) => theme.indents.xs};
    border-radius: ${({ theme }) =>
      `0 0 ${theme.borderRadius.s} ${theme.borderRadius.s}`};
  }
`

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;

  ${media.m} {
    display: none;
  }
`

export const BurgerMenuIconWrapper = styled.div`
  display: none;

  ${media.m} {
    display: block;
  }
`

export const MobileNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin-top: auto;
`

export const Logo = styled.img`
  width: 103px;
  height: 32px;
`

export const MobileLink = styled.div`
  color: ${({ theme }) => theme.textColors.basic};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.indents.xs};
  text-transform: uppercase;
`
