// local libs
import {
  PokemonInfoContainer,
  PokemonImagesWrapper,
  PokemonImage,
  PokemonName,
  PokemonInfoWrapper,
  PokemonInfoItems,
  PokemonInfoItem,
  PokemonNavigation,
} from './styles'
import { Button } from 'src/components/generic/Button'
import { useRequest } from 'src/utils/useRequest'
// types
import type { Data } from './types'

export const PokemonInfo = () => {
  const { data } = useRequest<Data>({ url: `/pokemon/25/` })

  if (!data) return null

  const frontImage = data.sprites.front_default
  const backImage = data.sprites.back_default

  return (
    <PokemonInfoContainer>
      <PokemonImagesWrapper>
        <PokemonImage src={frontImage} alt="front image" />
        <PokemonImage src={backImage} alt="back image" />
      </PokemonImagesWrapper>
      <PokemonInfoWrapper>
        <PokemonName>{data.name}</PokemonName>
        <PokemonInfoItems>
          <PokemonInfoItem>Default character: </PokemonInfoItem>
          <PokemonInfoItem>
            Type:
            {data.types.map((x) => (
              <p key={x.type.name}>{x.type.name}</p>
            ))}
          </PokemonInfoItem>
          <PokemonInfoItem>
            Base experience: {data.base_experience}
          </PokemonInfoItem>
          <PokemonInfoItem>Height: {data.height}</PokemonInfoItem>
          <PokemonInfoItem>Weight: {data.weight}</PokemonInfoItem>
          <PokemonInfoItem>Abilities: </PokemonInfoItem>
        </PokemonInfoItems>
        <PokemonNavigation>
          <Button size="s" text="previous">{`previous`}</Button>
          <Button size="s" text="next">{`next`}</Button>
        </PokemonNavigation>
      </PokemonInfoWrapper>
    </PokemonInfoContainer>
  )
}
