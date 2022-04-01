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
import { Button } from 'src/components/generic/Button'
import { useRequest } from 'src/utils/useRequest'
// types
import type { Data } from './types'
import type { ParsedUrlQuery } from 'querystring'

const getQueryStringForRequest = (query: ParsedUrlQuery): string => {
  const id = String(query.id)
  return `${id}`
}

export const PokemonInfo = () => {
  const { query } = useRouter()
  const qs = getQueryStringForRequest(query)
  const { data } = useRequest<Data>({ url: `/pokemon/${qs}/` })

  if (!data) return null

  const frontImage = data.sprites.front_default
  const backImage = data.sprites.back_default
  const isDefault = String(data.is_default)
  const type = data.types.map((x) => `${x.type.name}`)
  const abilities = data.abilities.map((x) => `${x.ability.name}`).join(', ')

  return (
    <PokemonInfoContainer>
      <PokemonImagesWrapper>
        <PokemonImage src={frontImage} alt="front image" />
        <PokemonImage src={backImage} alt="back image" />
      </PokemonImagesWrapper>
      <PokemonInfoWrapper>
        <PokemonName>{data.name}</PokemonName>
        <PokemonInfoItems>
          <PokemonInfoItem>Default character: {isDefault}</PokemonInfoItem>
          <PokemonInfoItem>Type: {type}</PokemonInfoItem>
          <PokemonInfoItem>
            Base experience: {data.base_experience}
          </PokemonInfoItem>
          <PokemonInfoItem>Height: {data.height}</PokemonInfoItem>
          <PokemonInfoItem>Weight: {data.weight}</PokemonInfoItem>
          <PokemonInfoItem>Abilities: {abilities}</PokemonInfoItem>
        </PokemonInfoItems>
        <PokemonNavigation>
          <Button size="s" text="previous">{`previous`}</Button>
          <Button size="s" text="next">{`next`}</Button>
        </PokemonNavigation>
      </PokemonInfoWrapper>
    </PokemonInfoContainer>
  )
}
