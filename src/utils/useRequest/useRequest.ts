import useSWR from 'swr'
import axios from 'axios'
import { useTranslation } from 'next-i18next'
// types
import type { SWRConfiguration } from 'swr'
import type { AxiosError } from 'axios'
import type { RequestConfig, Return } from './types'
import { RequestLocalesEnum } from 'src/i18n'

export const useRequest = <Data = unknown, Error = unknown>(
  requestConfig: RequestConfig,
  SWRconfig: SWRConfiguration<Data, AxiosError<Error>> = {},
): Return<Data, Error> => {
  const {
    i18n: { language },
  } = useTranslation()

  const { data, error, isValidating, mutate } = useSWR<Data, AxiosError<Error>>(
    [requestConfig, language],
    (req: RequestConfig, lang) => {
      const { url, ...rest } = req
      const searchParams = new URLSearchParams()
      searchParams.set(
        '_locale',
        RequestLocalesEnum[lang as keyof typeof RequestLocalesEnum],
      )

      return axios
        .request<Data>({ url: `${url}?${searchParams.toString()}`, ...rest })
        .then((x) => x.data)
    },
    SWRconfig,
  )

  return {
    data,
    error,
    isValidating,
    mutate,
  }
}
