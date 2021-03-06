import { useTranslation } from 'next-i18next'
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
import { ItemsNavigation, Loader } from 'src/components/generic'
import { useRequest } from 'src/utils/useRequest'
// types
import type { Data } from './types'

export const PokemonInfo = () => {
  const { t } = useTranslation()

  const { query } = useRouter()
  const { data } = useRequest<Data>({ url: `/pokemon/${query.id}/` })

  if (!data) return <Loader />

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
            {t(`pokemonInfo.item1`)} {String(is_default)}
          </PokemonInfoItem>
          <PokemonInfoItem>
            {t(`pokemonInfo.item2`)} {type}
          </PokemonInfoItem>
          <PokemonInfoItem>
            {t(`pokemonInfo.item3`)} {base_experience}
          </PokemonInfoItem>
          <PokemonInfoItem>
            {t(`pokemonInfo.item4`)} {height}
          </PokemonInfoItem>
          <PokemonInfoItem>
            {t(`pokemonInfo.item5`)} {weight}
          </PokemonInfoItem>
          <PokemonInfoItem>
            {t('pokemonInfo.item6')} {abilitiesList}
          </PokemonInfoItem>
        </PokemonInfoItems>
        <PokemonNavigation>
          <ItemsNavigation next={next} previous={previous} />
        </PokemonNavigation>
      </PokemonInfoWrapper>
    </PokemonInfoContainer>
  )
}
