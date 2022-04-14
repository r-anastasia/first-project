import { useRouter } from 'next/router'
// local libs
import { Pokemon } from './Pokemon'
import { PokemonListContainer } from './styles'
import { Pagination, Loader } from 'src/components/generic'
import { useRequest } from 'src/utils/useRequest'
// types
import type { Data } from './types'
import type { ParsedUrlQuery } from 'querystring'
import type { RequestConfig } from 'src/utils/useRequest/types'

const getOffset = (x: string): number | null => {
  const url = new URL(x)
  const params = new URLSearchParams(url.search)
  const offset = params.get('offset')

  return offset ? Number(offset) : null
}

export const getQueryStringForRequest = (query: ParsedUrlQuery): string => {
  const offset = String(query.offset)
  return `?${new URLSearchParams({ offset })}`
}

export const getRequestConfig = (x: string): RequestConfig => {
  return { url: `/pokemon${x}` }
}

export const PokemonList = () => {
  const { query, push } = useRouter()
  const qs = getQueryStringForRequest(query)
  const { data } = useRequest<Data>(getRequestConfig(qs))

  if (!data) return <Loader />

  const next = data.next ? getOffset(data.next) : null
  const previous = data.previous ? getOffset(data.previous) : null
  const count = data.count

  const handleClick = (x: string) => (): void => {
    const y = x.match(/pokemon\/\d+/)?.[0]
    const id = y ? y.match(/\d+/)?.[0] : null
    const link = id ? `pokemon?${new URLSearchParams({ id }).toString()}` : null

    if (link) push(link)
  }

  return (
    <PokemonListContainer>
      <Pagination next={next} previous={previous} count={count} />
      {data?.results.map((x) => (
        <Pokemon key={x.name} text={x.name} onClick={handleClick(x.url)}>
          {x.name}
        </Pokemon>
      ))}
      <Pagination next={next} previous={previous} count={count} />
    </PokemonListContainer>
  )
}
