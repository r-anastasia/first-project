// local libs
import { ContentWrapper } from 'src/components/generic'
import { ContentContainer } from './styles'
import { PokemonInfo } from './PokemonInfo'

export const Content = () => {
  return (
    <ContentWrapper>
      <ContentContainer>
        <PokemonInfo />
      </ContentContainer>
    </ContentWrapper>
  )
}
