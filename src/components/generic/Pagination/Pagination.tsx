import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
// local libs
import { Button } from 'src/components/generic/Button'
import { PaginationContainer, PageNavigation, PageItem } from './styles'
// types
import type { PaginationProps } from './types'

export const Pagination = ({ next, previous, count }: PaginationProps) => {
  const { t } = useTranslation()
  const { push } = useRouter()

  const handleClick = (x: string | null) => (): void => {
    if (x) push(x)
  }

  return (
    <PaginationContainer>
      <PageNavigation>
        <Button
          borderRadius="5px 0px 0px 5px"
          size="s"
          notUppercase
          text="previous"
          onClick={handleClick(previous)}
          disabled={!Boolean(previous)}
        >
          {t(`previous`)}
        </Button>
        <PageItem>{`0 to 20 of ${count}`}</PageItem>
        <Button
          borderRadius="0px 5px 5px 0px"
          size="s"
          notUppercase
          text="next"
          onClick={handleClick(next)}
          disabled={!Boolean(next)}
        >
          {t(`next`)}
        </Button>
      </PageNavigation>
    </PaginationContainer>
  )
}
