import { GetServerSidePropsContext } from 'next'
import { Middlewares, PageProps } from '../types'

export function compose<InitialData>(...middlewares: Middlewares<InitialData>) {
  return async function composer(
    ctx: GetServerSidePropsContext,
  ): Promise<PageProps<InitialData>> {
    // храним номер текущей мидлвары для runner
    let prevIndex = -1
    // мутабельные pageProps, доступны во всех мидлварах
    const pageProps = {
      props: {
        initialData: [] as unknown as InitialData,
        cookies: {},
        query: ctx.query,
      },
    }

    // раннер вызовет все переданные мидлвары поочереди
    const runner = async (index: number) => {
      // генерируем ошибку, если next() был вызван случайно несколько раз
      if (index === prevIndex) {
        throw new Error('next() was called multiple times')
      }

      // получаем текущую мидлвару
      const middleware = middlewares[index]
      // записываем во внешнее LexicalEnvironment номер текущей мидлвары
      prevIndex = index

      if (typeof middleware === 'function') {
        // после всех проверок запускаем текущую мидлвару
        await middleware(ctx, pageProps, () => {
          return runner(index + 1)
        })
      }
    }

    await runner(0)

    return pageProps
  }
}
