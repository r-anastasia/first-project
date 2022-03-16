import { useTranslation } from 'next-i18next'
import { Link } from 'src/components/generic/Link'
import { PaginationContainer, PageNavigation, PageItem } from './styles'

export const Pagination = () => {
  const { t } = useTranslation()

  return (
    <PaginationContainer>
      <PageNavigation>
        <PageItem>
          <Link href="/">{t(`previous`)}</Link>
        </PageItem>
        <PageItem>0 to 20 of 1126</PageItem>
        <PageItem>
          <Link href="/">{t(`next`)}</Link>
        </PageItem>
      </PageNavigation>
    </PaginationContainer>
  )
}
