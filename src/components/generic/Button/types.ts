import { CSSIndent } from 'src/types'

export enum ButtonSizes {
  s = 's',
  m = 'm',
}

export enum ButtonVariants {
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

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  text?: string
  size?: keyof typeof ButtonSizes
  variant?: keyof typeof ButtonVariants
  icon?: JSX.Element
  float?: FloatProps
  margin?: CSSIndent
  borderRadius?: CSSIndent
  width?: string
  uppercase?: boolean
}

export type ButtonContainerProps = {
  size: keyof typeof ButtonSizes
  variant: keyof typeof ButtonVariants
  disabled: boolean
  float?: FloatProps
  margin?: string
  borderRadius?: string
  width?: string
  uppercase?: boolean
}
