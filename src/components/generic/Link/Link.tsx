import NextLink from 'next/link'
// local libs
import { StyledLink } from './styles'
// types
import { LinkProps } from './types'

export const Link: React.FC<LinkProps> = ({
  children,
  href = '/',
  withoutNextLinkWrapper,
  padding,
  margin,
  target,
  shallow,
  transform,
  weight,
  lineHeight,
  ...rest
}) => {
  const commonProps = {
    padding,
    margin,
    target,
    transform,
    weight,
    lineHeight,
  }

  return withoutNextLinkWrapper ? ( // для случаев, когда кнопка мимикрирует под ссылку
    <StyledLink
      as="button"
      type="button"
      withoutNextLinkWrapper
      {...commonProps}
      {...rest}
    >
      {children}
    </StyledLink>
  ) : (
    <NextLink href={href} passHref shallow={shallow}>
      <StyledLink {...commonProps} {...rest}>
        {children}
      </StyledLink>
    </NextLink>
  )
}
