import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
// local libs
import { Link, Button, LocaleSwitcher } from 'src/components/generic'
import {
  HeaderContainer,
  HeaderWrapper,
  Navigation,
  BurgerMenuIconWrapper,
  MobileNavigationContainer,
  Logo,
  MobileLink,
} from './styles'
import { links } from './assets/fixtures'
import { theme } from 'src/theme'
import BurgerIcon from 'src/components/generic/Button/burger.svg'
import { useStoreon } from 'src/store'
// types
import { UpperLayerActions } from 'src/store/upperLayer'

const LinksList = (): JSX.Element => {
  const { t } = useTranslation()
  const { push } = useRouter()
  const { dispatch } = useStoreon()

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const href = e.currentTarget.dataset.href
    if (!href) return

    dispatch(UpperLayerActions.close)
    push(href)
  }

  return (
    <>
      {links.map(({ href, i18nKey }) => (
        <MobileLink key={href} data-href={href} onClick={handleClick}>
          {t(`header.navigation.${i18nKey}`)}
        </MobileLink>
      ))}
    </>
  )
}

export const Header = () => {
  const { t } = useTranslation()
  const { dispatch } = useStoreon()

  return (
    <HeaderContainer>
      <HeaderWrapper maxWidth={1140}>
        <Link href="/">
          <Logo src="/images/logo.png" alt="logo" />
        </Link>

        <Navigation>
          {links.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              padding={theme.indents.xs}
              weight="bold"
              transform="uppercase"
            >
              {t(`header.navigation.${x.i18nKey}`)}
            </Link>
          ))}
        </Navigation>

        <LocaleSwitcher location="header" />

        <BurgerMenuIconWrapper>
          <Button
            icon={<BurgerIcon />}
            style={{ background: 'transparent' }}
            onClick={() =>
              dispatch(UpperLayerActions.open, {
                kind: 'drawer',
                content: (
                  <MobileNavigationContainer>
                    <LinksList />
                    <LocaleSwitcher location="footer" />
                  </MobileNavigationContainer>
                ),
              })
            }
          />
        </BurgerMenuIconWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
