import React from 'react'
import { ItemCardContainer } from './styles'
// types
import { ItemCardProps, ItemCardSizes, ItemCardVariants } from './types'

export const ItemCard = ({
  text,
  size = ItemCardSizes.m,
  variant = ItemCardVariants.primary,
  disabled = false,
  ...rest
}: ItemCardProps) => {
  return (
    <ItemCardContainer
      size={size}
      variant={variant}
      disabled={disabled}
      {...rest}
    >
      <>{text}</>
    </ItemCardContainer>
  )
}
