import { ThemeProvider } from '@emotion/react'
import Axios from 'axios'
import { StoreContext } from 'storeon/react'
import { SWRConfig } from 'swr'
import { appWithTranslation } from 'next-i18next'
// local libs
import { store } from 'src/store'
import { globalStyles, theme } from 'src/theme'
import { BaseLayout, UpperLayer } from 'src/components/layouts'
// types
import type { AppProps } from 'next/app'

import '../i18n'

const baseURL = process.env.NEXT_PUBLIC_ENV_VARIABLE

Axios.defaults.baseURL = baseURL

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={store}>
          <SWRConfig
            value={{
              revalidateIfStale: false,
              dedupingInterval: 30000,
              errorRetryCount: 5,
              focusThrottleInterval: 30000,
            }}
          >
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </SWRConfig>
          <UpperLayer />
        </StoreContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
