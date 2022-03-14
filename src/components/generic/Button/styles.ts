import styled from '@emotion/styled'
// types
import { ButtonContainerProps, ButtonSizes, ButtonVariants } from './types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ float }) =>
    !float
      ? null
      : Object.entries(float)
          .map(([k, v]) => `${k}: ${v}`)
          .join(';')};

  ${({ float, theme }) => (!float ? null : theme.shadows.basic)};

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ size }) =>
    size === ButtonSizes.s ? '40px' : size === ButtonSizes.m ? '60px' : 'auto'};

  padding: 0 ${({ theme }) => theme.indents.xs};
  border: ${({ theme, variant }) =>
    variant === ButtonVariants.primary
      ? `4px solid ${theme.colors.accent[700]}`
      : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius.s};

  background: ${({ theme, variant }) =>
    variant === ButtonVariants.secondary
      ? theme.colors.accent[400]
      : theme.colors.accent[700]};

  color: ${({ theme, variant }) =>
    variant === ButtonVariants.secondary
      ? theme.textColors.link
      : theme.textColors.inverted};

  font-size: ${({ theme, size }) =>
    size === ButtonSizes.m
      ? theme.fontSize.xs
      : size === ButtonSizes.s
      ? theme.fontSize.xxs
      : theme.fontSize.xs};
  font-weight: 700;
  text-transform: ${({ notUppercase }) => (notUppercase ? null : 'uppercase')};

  ${({ width }) => (!width ? null : `width: ${width}`)};
  ${({ margin }) => (!margin ? null : `margin: ${margin}`)};

  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme, variant }) =>
      variant === ButtonVariants.secondary
        ? theme.colors.accent[50]
        : theme.colors.accent[400]};
  }

  &:active:not(:disabled) {
    background: ${({ theme, variant }) =>
      variant === ButtonVariants.secondary
        ? theme.colors.accent[100]
        : theme.colors.accent[200]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // каскад для svg чтобы не заводить еще один файл
  // позже будет отдельный компонент спрайта для всех svg
  // с возможностью прокидывания пропса с цветом
  svg path {
    fill: black;
  }
  // TODO: добавить компонент svg-спрайта
`

export const IconWrapper = styled.span`
  margin-left: 11px;
`
