import React from 'react'
// local libs
import { PokemonContainer } from './styles'
// types
import type { PokemonProps } from './types'
import { PokemonVariants } from './types'

export const Pokemon = ({
  text,
  variant = PokemonVariants.primary,
  disabled = false,
  ...rest
}: PokemonProps) => {
  return (
    <PokemonContainer variant={variant} disabled={disabled} {...rest}>
      <>{text}</>
    </PokemonContainer>
  )
}
