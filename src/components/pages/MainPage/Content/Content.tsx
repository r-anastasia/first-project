import { ContentWrapper } from 'src/components/generic'
import { Pagination } from './Pagination'
import { PokemonList } from './PokemonList'
import { ContentContainer } from './styles'

export const Content = () => {
  return (
    <ContentWrapper>
      <ContentContainer>
        <Pagination></Pagination>
        <PokemonList></PokemonList>
        <Pagination></Pagination>
      </ContentContainer>
    </ContentWrapper>
  )
}
