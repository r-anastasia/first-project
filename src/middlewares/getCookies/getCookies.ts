import Cookies from 'cookies'
// types
import type { GetServerSidePropsContext } from 'next'
import type { Next, PageProps, CookiesType } from '../types'
import { CookiesEnum } from '../types'

export const getCookies = async (
  ctx: GetServerSidePropsContext,
  pageProps: PageProps<unknown>,
  next: Next,
): Promise<void> => {
  const { req, res } = ctx
  const cookies = req && res ? new Cookies(req, res) : null

  const setCookie = <T extends CookiesEnum>(x: T) => {
    const cookie = cookies?.get(x) as CookiesType[T]
    if (cookie) pageProps.props.cookies[x] = cookie
  }

  setCookie(CookiesEnum.locale)

  return next()
}
