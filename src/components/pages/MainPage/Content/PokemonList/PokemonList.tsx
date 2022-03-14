import { theme } from 'src/theme'
import { Button } from 'src/components/generic'
import { pokemonMapping } from './assets/fixtures'
import { PokemonListContainer } from './styles'

export const PokemonList = () => {
  return (
    <PokemonListContainer>
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
    </PokemonListContainer>
  )
}
