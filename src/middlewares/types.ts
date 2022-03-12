import type {
  GetServerSidePropsContext,
  Redirect as RedirectNext,
  NextPageContext,
} from 'next'
import type { RequestLocalesEnum } from 'src/i18n'

export enum CookiesEnum {
  locale = 'NEXT_LOCALE',
}

export type CookiesType = {
  [CookiesEnum.locale]: keyof typeof RequestLocalesEnum
}

export type Redirect = {
  redirect: RedirectNext
}

export type PageProps<InitialData> = {
  props: {
    initialData: InitialData
    cookies: Partial<CookiesType>
  } & Pick<NextPageContext, 'query'>
}

export type Next = () => Promise<void>

export type Middleware<InitialData> = (
  ctx: GetServerSidePropsContext,
  pageProps: PageProps<InitialData>,
  next: Next,
) => Promise<Redirect | PageProps<InitialData> | void>

export type Middlewares<InitialData> = Array<Middleware<InitialData>>
