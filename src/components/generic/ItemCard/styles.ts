import styled from '@emotion/styled'
// types
import {
  ItemCardContainerProps,
  ItemCardSizes,
  ItemCardVariants,
} from './types'

export const ItemCardContainer = styled.button<ItemCardContainerProps>`
  ${({ float }) =>
    !float
      ? null
      : Object.entries(float)
          .map(([k, v]) => `${k}: ${v}`)
          .join(';')};

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ size }) =>
    size === ItemCardSizes.s
      ? '40px'
      : size === ItemCardSizes.m
      ? '80px'
      : 'auto'};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.s};

  box-shadow: ${({ theme }) => theme.shadows.basicLite};

  background: ${({ theme, variant }) =>
    variant === ItemCardVariants.primary ? theme.colors.basicLight : 'none'};

  color: ${({ theme, variant }) =>
    variant === ItemCardVariants.primary ? theme.textColors.basic : 'none'};

  font-size: ${({ theme, size }) =>
    size === ItemCardSizes.m
      ? theme.fontSize.xs
      : size === ItemCardSizes.s
      ? theme.fontSize.xxs
      : theme.fontSize.xs};
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: ${({ notUppercase }) => (notUppercase ? null : 'uppercase')};

  ${({ width }) => (!width ? null : `width: ${width}`)};
  ${({ margin }) => (!margin ? null : `margin: ${margin}`)};

  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme, variant }) =>
      variant === ItemCardVariants.primary ? theme.colors.basicLight : 'none'};

    box-shadow: ${({ theme }) => theme.shadows.basic};

    color: ${({ theme, variant }) =>
      variant === ItemCardVariants.primary ? theme.textColors.basic : 'none'};

    font-size: ${({ theme, size }) =>
      size === ItemCardSizes.m
        ? theme.fontSize.s
        : size === ItemCardSizes.s
        ? theme.fontSize.xs
        : theme.fontSize.s};
  }

  &:active:not(:disabled) {
    background: ${({ theme, variant }) =>
      variant === ItemCardVariants.primary ? theme.colors.accent[400] : 'none'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
