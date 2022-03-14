import { ContentWrapper } from 'src/components/generic'
import { PokemonList } from './PokemonList'
import { ContentContainer } from './styles'

export const Content = () => {
  return (
    <ContentWrapper>
      <ContentContainer>
        <PokemonList />
      </ContentContainer>
    </ContentWrapper>
  )
}
