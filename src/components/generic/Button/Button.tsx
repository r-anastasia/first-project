import React from 'react'
// local libs
import { ButtonContainer, IconWrapper } from './styles'
// types
import type { ButtonProps } from './types'
import { ButtonSizes, ButtonVariants } from './types'

export const Button = ({
  text,
  size = ButtonSizes.m,
  variant = ButtonVariants.primary,
  icon,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer
      size={size}
      variant={variant}
      disabled={disabled}
      {...rest}
    >
      <>
        {text}
        {!icon ? null : !text ? icon : <IconWrapper>{icon}</IconWrapper>}
      </>
    </ButtonContainer>
  )
}
