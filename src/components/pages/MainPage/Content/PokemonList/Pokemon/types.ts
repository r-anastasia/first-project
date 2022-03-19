export enum PokemonVariants {
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

export type PokemonProps = React.ComponentPropsWithoutRef<'button'> & {
  text?: string
  variant?: keyof typeof PokemonVariants
  float?: FloatProps
}

export type PokemonContainerProps = {
  variant: keyof typeof PokemonVariants
  disabled: boolean
  float?: FloatProps
}
