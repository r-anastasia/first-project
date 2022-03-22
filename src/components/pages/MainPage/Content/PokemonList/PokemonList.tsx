// local libs
import { Pokemon } from './Pokemon'
import { PokemonListContainer } from './styles'
import { Pagination } from 'src/components/generic'
import { useRequest } from 'src/utils/useRequest'
// types
import type { Data } from './types'

const getLink = (next: string): string | null => {
  const url = new URL(next)
  const params = new URLSearchParams(url.search)
  const offset = params.get('offset')

  return offset ? new URLSearchParams({ offset }).toString() : null
}

export const PokemonList = () => {
  const { data } = useRequest<Data>({ url: `/pokemon` })

  if (!data) return

  const next = data.next ? getLink(data.next) : null
  const previous = data.previous ? getLink(data.previous) : null
  const count = data.count

  return (
    <PokemonListContainer>
      <Pagination next={next} previous={previous} count={count} />
      {data?.results.map((x) => (
        <Pokemon key={x.name} text={x.name}>
          {x.name}
        </Pokemon>
      ))}
      <Pagination next={next} previous={previous} count={count} />
    </PokemonListContainer>
  )
}
