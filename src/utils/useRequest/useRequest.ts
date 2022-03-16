import useSWR from 'swr'
import axios from 'axios'
// types
import type { SWRConfiguration } from 'swr'
import type { AxiosError } from 'axios'
import type { RequestConfig, Return } from './types'

export const useRequest = <Data = unknown, Error = unknown>(
  requestConfig: RequestConfig,
  SWRconfig: SWRConfiguration<Data, AxiosError<Error>> = {},
): Return<Data, Error> => {
  const { data, error, isValidating, mutate } = useSWR<Data, AxiosError<Error>>(
    [requestConfig],
    (req: RequestConfig) => {
      return axios.request<Data>(req).then((x) => x.data)
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
