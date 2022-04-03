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
  const previousLink = typeof previous === 'number' ? getLink(previous) : null

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
          disabled={typeof previous !== 'number'}
        />
        <PageItem>
          {next
            ? t('pagination.count', {
                start: `${next - 20}`,
                end: `${next}`,
                all: `${count}`,
              })
            : previous
            ? t('pagination.count', {
                start: `${previous + 20}`,
                end: `${previous + 40}`,
                all: `${count}`,
              })
            : null}
        </PageItem>
        <Button
          borderRadius="0px 5px 5px 0px"
          size="s"
          text={t('pagination.next')}
          onClick={handleClick(nextLink)}
          disabled={!Boolean(nextLink)}
        />
      </PageNavigation>
    </PaginationContainer>
  )
}
