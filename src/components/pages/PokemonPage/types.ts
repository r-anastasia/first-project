import type { NextPageContext } from 'next'

type InitialData = Array<[string, unknown]>

export type PokemonPageProps = { initialData: InitialData } & Pick<
  NextPageContext,
  'query'
>
