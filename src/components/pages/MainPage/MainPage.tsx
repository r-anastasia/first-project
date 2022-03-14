import React from 'react'
import { ItemCards } from '../../layouts/ItemCards'
import { SWRConfig } from 'swr'
// types
import { IndexPageProps } from './types'

const IndexPage = ({ initialData }: IndexPageProps) => {
  return (
    // создаем кэш и передаем в конфиг SWR на уровне страницы
    // https://swr.vercel.app/docs/advanced/cache#create-cache-provider
    <SWRConfig value={{ provider: () => new Map(initialData) }}>
      <ItemCards />
    </SWRConfig>
  )
}

export default IndexPage
