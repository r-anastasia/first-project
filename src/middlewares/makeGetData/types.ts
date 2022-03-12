import type { RequestConfig } from 'src/utils/useRequest'

export type InitialData<ModelsUnion> = Array<[string, ModelsUnion]>

export type GetRequestConfig = (
  id: string | Array<string> | undefined,
) => RequestConfig
