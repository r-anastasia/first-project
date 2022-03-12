import React from 'react'

import { BoxOwnProps, BoxProps } from './types'

const defaultElement = 'div'

export const Box = (({ as, ...rest }: BoxOwnProps) => {
  const Element = as || defaultElement
  return <Element {...rest} />
}) as <E extends React.ElementType = typeof defaultElement>(
  props: BoxProps<E>,
) => JSX.Element
