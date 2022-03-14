import { theme } from 'src/theme'
import { Button, ContentWrapper } from 'src/components/generic'
import { pokemonMapping } from './assets/fixtures'
import { ItemCardsContainer, CardsContainer } from './styles'

export const ItemCards = () => {
  return (
    <ContentWrapper>
      <ItemCardsContainer>
        <CardsContainer>
          {pokemonMapping.map((x) => (
            <Button
              key={x.name}
              text={x.name}
              width="200px"
              margin={`0px 0px ${theme.indents.xs}`}
            >
              {x.name}
            </Button>
          ))}
        </CardsContainer>
      </ItemCardsContainer>
    </ContentWrapper>
  )
}
