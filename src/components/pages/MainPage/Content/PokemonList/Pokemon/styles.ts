import styled from '@emotion/styled'
// types
import { PokemonContainerProps, PokemonVariants } from './types'

export const PokemonContainer = styled.button<PokemonContainerProps>`
  ${({ float }) =>
    !float
      ? null
      : Object.entries(float)
          .map(([k, v]) => `${k}: ${v}`)
          .join(';')};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 200px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.s};

  box-shadow: ${({ theme }) => theme.shadows.basicLite};

  background: ${({ theme, variant }) =>
    variant === PokemonVariants.primary ? theme.colors.basicLight : 'none'};

  color: ${({ theme, variant }) =>
    variant === PokemonVariants.primary ? theme.textColors.basic : 'none'};

  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  margin: ${({ theme }) => `0px 0px ${theme.indents.s}`};

  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme, variant }) =>
      variant === PokemonVariants.primary ? theme.colors.basicLight : 'none'};

    box-shadow: ${({ theme }) => theme.shadows.basic};

    color: ${({ theme, variant }) =>
      variant === PokemonVariants.primary ? theme.textColors.basic : 'none'};

    font-size: ${({ theme }) => theme.fontSize.s};
  }

  &:active:not(:disabled) {
    background: ${({ theme, variant }) =>
      variant === PokemonVariants.primary ? theme.colors.accent[400] : 'none'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
