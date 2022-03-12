import type { SWRResponse } from 'swr'
import type { AxiosRequestConfig, AxiosError } from 'axios'

export type RequestConfig = AxiosRequestConfig

export type Return<Data, Error> = Pick<
  SWRResponse<Data, AxiosError<Error>>,
  'data' | 'isValidating' | 'error' | 'mutate'
>
