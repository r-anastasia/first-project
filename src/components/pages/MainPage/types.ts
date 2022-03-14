import type { NextPageContext } from 'next'

type InitialData = Array<[string, unknown]>

export type IndexPageProps = { initialData: InitialData } & Pick<
  NextPageContext,
  'query'
>
