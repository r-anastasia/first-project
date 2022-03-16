import { theme } from 'src/theme'
import { Button } from 'src/components/generic'
import { PokemonListContainer } from './styles'
import { useRequest } from 'src/utils/useRequest'
import { Data } from './types'

export const PokemonList = () => {
  const { data } = useRequest<Data>({ url: `/pokemon` })

  return (
    <PokemonListContainer>
      {data?.results.map((x) => (
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
