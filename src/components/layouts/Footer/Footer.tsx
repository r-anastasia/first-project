import { useTranslation } from 'next-i18next'
// local libs
import { theme } from 'src/theme'
import { Link, LocaleSwitcher, ContentWrapper } from 'src/components/generic'
import { linksMapping } from './assets/fixtures'
import { FooterContainer, LinksContainer, TextContainer } from './styles'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <ContentWrapper>
      <FooterContainer>
        <LinksContainer>
          {linksMapping.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              margin={`0px ${theme.indents.s} ${theme.indents.s} 0px`}
              weight="bold"
              transform="uppercase"
              lineHeight="21px"
            >
              {t(`footer.navigation.${x.i18nKey}`)}
            </Link>
          ))}
          <LocaleSwitcher location="footer" lineHeight="21px" />
        </LinksContainer>

        <TextContainer>{t('footer.description')}</TextContainer>
      </FooterContainer>
    </ContentWrapper>
  )
}
