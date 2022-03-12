import React from 'react'

type PropsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

export interface BoxOwnProps<E extends React.ElementType = React.ElementType> {
  as?: E
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<PropsOf<E>, keyof BoxOwnProps>

export type PolymorphicComponentProps<
  E extends React.ElementType,
  P = unknown,
> = P & BoxProps<E>

// eslint-disable-next-line @typescript-eslint/ban-types
export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => // eslint-disable-next-line @typescript-eslint/no-explicit-any
any
  ? R
  : never
