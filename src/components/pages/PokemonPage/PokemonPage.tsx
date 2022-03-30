import React from 'react'
import { Content } from './Content'
import { SWRConfig } from 'swr'
// types
import { PokemonPageProps } from './types'

const PokemonPage = ({ initialData }: PokemonPageProps) => {
  return (
    // создаем кэш и передаем в конфиг SWR на уровне страницы
    // https://swr.vercel.app/docs/advanced/cache#create-cache-provider
    <SWRConfig value={{ provider: () => new Map(initialData) }}>
      <Content />
    </SWRConfig>
  )
}

export default PokemonPage
