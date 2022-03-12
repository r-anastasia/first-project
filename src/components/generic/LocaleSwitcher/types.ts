import { LinkProps } from '../Link/types'

export enum LocationEnum {
  header = 'header',
  footer = 'footer',
}

export type LocaleSwitcherProps = {
  location: keyof typeof LocationEnum
  lineHeight?: LinkProps['lineHeight']
}
