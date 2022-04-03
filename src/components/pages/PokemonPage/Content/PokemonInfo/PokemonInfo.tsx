import { useRouter } from 'next/router'
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
import { ItemsNavigation } from 'src/components/generic/ItemsNavigation'
import { useRequest } from 'src/utils/useRequest'
// types
import type { Data } from './types'

export const PokemonInfo = () => {
  const { query } = useRouter()
  const { data } = useRequest<Data>({ url: `/pokemon/${query.id}/` })

  if (!data) return null

  const {
    name,
    sprites,
    is_default,
    types,
    base_experience,
    height,
    weight,
    abilities,
  } = data

  const type = types.map((x) => `${x.type.name}`)
  const abilitiesList = abilities.map((x) => `${x.ability.name}`).join(', ')

  const next = Number(query.id) + 1
  const previous = Number(query.id) - 1

  return (
    <PokemonInfoContainer>
      <PokemonImagesWrapper>
        <PokemonImage src={sprites.front_default} alt="front image" />
        <PokemonImage src={sprites.back_default} alt="back image" />
      </PokemonImagesWrapper>
      <PokemonInfoWrapper>
        <PokemonName>{name}</PokemonName>
        <PokemonInfoItems>
          <PokemonInfoItem>
            Default character: {String(is_default)}
          </PokemonInfoItem>
          <PokemonInfoItem>Type: {type}</PokemonInfoItem>
          <PokemonInfoItem>Base experience: {base_experience}</PokemonInfoItem>
          <PokemonInfoItem>Height: {height}</PokemonInfoItem>
          <PokemonInfoItem>Weight: {weight}</PokemonInfoItem>
          <PokemonInfoItem>Abilities: {abilitiesList}</PokemonInfoItem>
        </PokemonInfoItems>
        <PokemonNavigation>
          <ItemsNavigation next={next} previous={previous} />
        </PokemonNavigation>
      </PokemonInfoWrapper>
    </PokemonInfoContainer>
  )
}
