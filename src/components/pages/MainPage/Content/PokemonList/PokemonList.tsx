import { theme } from 'src/theme'
import { ItemCard } from 'src/components/generic/ItemCard'
import { Pagination } from '../Pagination'
import { PokemonListContainer } from './styles'
import { useRequest } from 'src/utils/useRequest'
import { Data } from './types'

export const PokemonList = () => {
  const { data } = useRequest<Data>({ url: `/pokemon` })

  return (
    <PokemonListContainer>
      <Pagination />
      {data?.results.map((x) => (
        <ItemCard
          key={x.name}
          text={x.name}
          width="200px"
          margin={`0px 0px ${theme.indents.s}`}
        >
          {x.name}
        </ItemCard>
      ))}
      <Pagination />
    </PokemonListContainer>
  )
}
