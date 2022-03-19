import { useTranslation } from 'next-i18next'
// local libs
import { Button } from 'src/components/generic/Button'
import { PaginationContainer, PageNavigation, PageItem } from './styles'

export const Pagination = () => {
  const { t } = useTranslation()

  return (
    <PaginationContainer>
      <PageNavigation>
        <Button
          borderRadius="5px 0px 0px 5px"
          size="s"
          notUppercase
          text="previous"
        >
          {t(`previous`)}
        </Button>
        <PageItem>0 to 20 of 1126</PageItem>
        <Button
          borderRadius="0px 5px 5px 0px"
          size="s"
          notUppercase
          text="next"
        >
          {t(`next`)}
        </Button>
      </PageNavigation>
    </PaginationContainer>
  )
}
