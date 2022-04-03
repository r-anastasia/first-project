import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
// local libs
import { Button } from 'src/components/generic/Button'
import { PaginationContainer, PageNavigation, PageItem } from './styles'
// types
import type { PaginationProps } from './types'

const getLink = (x: number): string => {
  const offset = String(x)
  return `?${new URLSearchParams({ offset }).toString()}`
}

export const Pagination = ({ next, previous, count }: PaginationProps) => {
  const { t } = useTranslation()
  const { push } = useRouter()

  const nextLink = next ? getLink(next) : null
  const previousLink = previous ? getLink(previous) : null

  const handleClick = (x: string | null) => (): void => {
    if (x) push(x)
  }

  return (
    <PaginationContainer>
      <PageNavigation>
        <Button
          borderRadius="5px 0px 0px 5px"
          size="s"
          text={t('pagination.previous')}
          onClick={handleClick(previousLink)}
          disabled={!Boolean(previous)}
        ></Button>
        <PageItem>
          {next
            ? `${next - 20} to ${next} of ${count}`
            : previous
            ? `${previous + 20} to ${previous + 40} of ${count}`
            : null}
        </PageItem>
        <Button
          borderRadius="0px 5px 5px 0px"
          size="s"
          text="next"
          onClick={handleClick(nextLink)}
          disabled={!Boolean(nextLink)}
        >
          {t(`next`)}
        </Button>
      </PageNavigation>
    </PaginationContainer>
  )
}
