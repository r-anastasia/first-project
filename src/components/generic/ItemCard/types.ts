import { CSSIndent } from 'src/types'

export enum ItemCardSizes {
  s = 's',
  m = 'm',
}

export enum ItemCardVariants {
  primary = 'primary',
  secondary = 'secondary',
}

type FloatProps = {
  position: 'fixed' | 'absolute'
  top?: `${number}px`
  right?: `${number}px`
  bottom?: `${number}px`
  left?: `${number}px`
}

export type ItemCardProps = React.ComponentPropsWithoutRef<'button'> & {
  text?: string
  size?: keyof typeof ItemCardSizes
  variant?: keyof typeof ItemCardVariants
  float?: FloatProps
  margin?: CSSIndent
  width?: string
  notUppercase?: boolean
}

export type ItemCardContainerProps = {
  size: keyof typeof ItemCardSizes
  variant: keyof typeof ItemCardVariants
  disabled: boolean
  float?: FloatProps
  margin?: string
  width?: string
  notUppercase?: boolean
}
