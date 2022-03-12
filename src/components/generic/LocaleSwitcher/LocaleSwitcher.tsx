import { useCallback } from 'react'
import { useRouter } from 'next/router'
// local libs
import { localesAbbreviationMapping, localesDecryptionMapping } from 'src/i18n'
import { Link } from '../Link'
import { theme } from 'src/theme'
import { LocaleSwitcherContainer } from './styles'
import { setCookie } from 'src/utils'
// types
import type { LocaleSwitcherProps } from './types'
import { LocationEnum } from './types'
import { LocalesEnum } from 'src/i18n'
import { CookiesEnum } from 'src/middlewares/types'
import { useStoreon } from 'src/store'
import { UpperLayerActions } from 'src/store/upperLayer'

const getNewLocaleAndLabel = (
  variant: LocaleSwitcherProps['location'],
  locale?: string,
): [string, string] => {
  const localesMapping: Record<LocalesEnum, string> =
    variant === LocationEnum.header
      ? localesAbbreviationMapping
      : localesDecryptionMapping
  const fallback: [string, string] =
    variant === LocationEnum.header
      ? [LocalesEnum.ru, localesAbbreviationMapping.ru]
      : [LocalesEnum.ru, localesDecryptionMapping.ru]

  return (
    Object.entries(localesMapping).find(([k, _]) => k !== locale) || fallback
  )
}

export const LocaleSwitcher = ({
  location,
  lineHeight,
}: LocaleSwitcherProps) => {
  const {
    dispatch,
    upperLayer: { isOpen },
  } = useStoreon('upperLayer')
  const { pathname, locale: currentLocale, query, push } = useRouter()

  // предполагается, что будет только две локали - en, ru
  // в случае если добавятся еще локаль,
  // то дизайн и логика для данного компонента станут не актуальными

  const [newLocale, newLabel] = getNewLocaleAndLabel(location, currentLocale)

  const changeLanguage = useCallback(
    (locale: string): void => {
      if (currentLocale !== locale) {
        isOpen && dispatch(UpperLayerActions.close)
        push({ pathname, query }, undefined, { locale })
        setCookie(CookiesEnum.locale, locale)
      }
    },
    [push, pathname, query, currentLocale],
  )

  return (
    <LocaleSwitcherContainer location={location}>
      <Link
        weight="bold"
        transform="uppercase"
        color={theme.colors.accent[700]}
        padding="0px"
        withoutNextLinkWrapper
        onClick={() => changeLanguage(newLocale)}
        lineHeight={lineHeight}
      >
        {newLabel}
      </Link>
    </LocaleSwitcherContainer>
  )
}
