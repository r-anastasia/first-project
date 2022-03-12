import axios from 'axios'
import { unstable_serialize } from 'swr'
// types
import type { GetServerSidePropsContext } from 'next'
import type { RequestConfig } from 'src/utils/useRequest'
import { RequestLocalesEnum } from 'src/i18n'
import type { Next, PageProps } from '../types'
import type { LocalesEnum } from 'src/i18n'
import type { GetRequestConfig, InitialData } from './types'

export const makeGetData =
  <ModelsUnion>(
    ...requestConfigsOrFunctionsThatReturnsRequestConfig: Array<
      RequestConfig | GetRequestConfig
    >
  ) =>
  async (
    ctx: GetServerSidePropsContext,
    pageProps: PageProps<InitialData<ModelsUnion>>,
    next: Next,
  ): Promise<void> => {
    const locale = (ctx.locale || ctx.defaultLocale) as keyof typeof LocalesEnum

    // формируем query string параметры для последующей подстановки в url
    const searchParams = new URLSearchParams()
    if (locale) searchParams.set('_locale', RequestLocalesEnum[locale])

    // подготавливаем список для кортежей вида
    // ['сериализованный ключ swr', 'данные']
    const initialData: InitialData<ModelsUnion> = []

    for (const r of requestConfigsOrFunctionsThatReturnsRequestConfig) {
      try {
        // для страниц с динамическим роутингом предполагается передача
        // параметра id в конфиг. Поэтому в таких случаях мы будем иметь
        // НЕ непосредственно конфиг, а функцию которая принимает id и
        // затем возвращает конфиг с уже подставленным id в url
        let requestConfig
        if (typeof r === 'function') requestConfig = r(pageProps.props.query.id)
        else requestConfig = r

        // получаем данные с помощью axios, важно использовать тот же конфиг,
        // что и передается в хук useRequest который будет использовать
        // кэшированные данные
        // (для ключа в кэше используется весь конфиг, а не только url)
        const { url, ...rest } = requestConfig
        const { data } = await axios.request<ModelsUnion>({
          url: `${url}?${searchParams.toString()}`,
          ...rest,
        })
        // если все ок, то пушим кортеж в список
        if (data)
          // набор зависимостей должен совпадать с набором
          // зависимостей для фетчера в src/utils/request,
          initialData.push([unstable_serialize([requestConfig, locale]), data])
      } catch (error: unknown) {
        if (error instanceof Error) console.error(error.message)
        else console.error('Unknown error')
      }
    }

    pageProps.props.initialData = initialData

    return next()
  }
