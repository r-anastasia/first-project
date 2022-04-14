import axios from 'axios'
import { unstable_serialize } from 'swr'
// local libs
import {
  getQueryStringForRequest,
  getRequestConfig,
} from 'src/components/pages/MainPage/Content/PokemonList'
import { compose, makeGetData, makeGetI18nNamespaces } from 'src/middlewares'
import { RequestLocalesEnum } from 'src/i18n'
// types
import type { GetServerSidePropsContext } from 'next'
import type { LocalesEnum } from 'src/i18n'
import type { Next, PageProps } from '../middlewares/types'
import type { InitialData } from '../middlewares/makeGetData/types'
import type { Data } from '../components/pages/MainPage/Content/PokemonList/types'

export { default } from 'src/components/pages/MainPage'

// делаем мидлвару getI18nNamespaces (без параметров применится только 'common')
const getI18nNamespaces = makeGetI18nNamespaces()
// делаем мидлвару getData которая при выполнении зафетчит данные по всем
// переданным конфигам, а также сформирует начальный кэш SWR,
// после чего запишет все в initialData
const getData = makeGetData(/* */)
// передаем все необходимые мидлвары в compose, результат выполнения
// экспортируем как getServerSideProps

const getPokemonList = async (
  ctx: GetServerSidePropsContext,
  pageProps: PageProps<InitialData<Data>>,
  next: Next,
): Promise<void> => {
  const locale = (ctx.locale || ctx.defaultLocale) as keyof typeof LocalesEnum

  const searchParams = new URLSearchParams()
  if (locale) searchParams.set('_locale', RequestLocalesEnum[locale])

  const { query } = pageProps.props.query
  const qs = getQueryStringForRequest(query)
  const requestConfig = getRequestConfig(qs)

  const initialData: InitialData<Data> = []

  try {
    const { url, ...rest } = requestConfig
    const { data } = await axios.request<Data>({
      url: `${url}?${searchParams.toString()}`,
      ...rest,
    })
    if (data)
      initialData.push([unstable_serialize([requestConfig, locale]), data])
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message)
    else console.error('Unknown error')
  }

  pageProps.props.initialData = initialData

  return next()
}

export const getServerSideProps = compose(
  getPokemonList,
  getI18nNamespaces,
  getData,
)
