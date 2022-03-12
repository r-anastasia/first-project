import { AnchorsEnum } from '../consts'

const getHref = (anchor: AnchorsEnum) => `/#${anchor}`

export const links = [
  {
    i18nKey: AnchorsEnum.link1,
    href: getHref(AnchorsEnum.link1),
  },
  {
    i18nKey: AnchorsEnum.link2,
    href: getHref(AnchorsEnum.link2),
  },
]
