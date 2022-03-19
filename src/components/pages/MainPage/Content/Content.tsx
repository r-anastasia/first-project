// local libs
import { PokemonList } from './PokemonList'
import { ContentWrapper } from 'src/components/generic'
import { ContentContainer } from './styles'

export const Content = () => {
  return (
    <ContentWrapper>
      <ContentContainer>
        <PokemonList></PokemonList>
      </ContentContainer>
    </ContentWrapper>
  )
}
