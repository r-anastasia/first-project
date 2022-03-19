// local libs
import { Pokemon } from './Pokemon'
import { PokemonListContainer } from './styles'
import { Pagination } from 'src/components/generic'
import { useRequest } from 'src/utils/useRequest'
// types
import type { Data } from './types'

export const PokemonList = () => {
  const { data } = useRequest<Data>({ url: `/pokemon` })

  return (
    <PokemonListContainer>
      <Pagination />
      {data?.results.map((x) => (
        <Pokemon key={x.name} text={x.name}>
          {x.name}
        </Pokemon>
      ))}
      <Pagination />
    </PokemonListContainer>
  )
}
