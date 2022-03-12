import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// types
import type { GetServerSidePropsContext } from 'next'
import type { Next, PageProps } from '../types'

export const makeGetI18nNamespaces =
  (namespaces: Array<string> = []) =>
  async (
    ctx: GetServerSidePropsContext,
    pageProps: PageProps<unknown>,
    next: Next,
  ): Promise<void> => {
    pageProps.props = {
      ...pageProps.props,
      ...(await serverSideTranslations(
        ctx.locale || ctx.defaultLocale || 'ru',
        ['common', ...namespaces],
      )),
    }
    return next()
  }
