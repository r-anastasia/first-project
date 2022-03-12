import React, { FC } from 'react'
// local libs
import { Header } from '../Header'
import { Footer } from '../Footer'
import { PageContent, BaseWrapper, BaseLayoutContainer } from './styles'
import { baseLayoutId } from './consts'
import { Toaster } from '../Toaster'

export const BaseLayout: FC = ({ children }) => {
  return (
    <BaseLayoutContainer id={baseLayoutId}>
      <BaseWrapper>
        <Header />
        <PageContent>{children}</PageContent>
        <Footer />
        <Toaster />
      </BaseWrapper>
    </BaseLayoutContainer>
  )
}
