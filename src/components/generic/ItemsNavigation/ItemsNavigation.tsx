import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
// local libs
import { Button } from 'src/components/generic/Button'
import { ItemsNavigationContainer, NavigationWrapper } from './styles'
// types
import type { ItemsNavigationProps } from './types'

const getLink = (x: number): string => {
  const id = String(x)
  return `pokemon?${new URLSearchParams({ id }).toString()}`
}

export const ItemsNavigation = ({ next, previous }: ItemsNavigationProps) => {
  const { t } = useTranslation()
  const { push } = useRouter()

  const nextLink = next ? getLink(next) : null
  const previousLink = previous ? getLink(previous) : null

  const handleClick = (x: string | null) => (): void => {
    if (x) push(x)
  }

  return (
    <ItemsNavigationContainer>
      <NavigationWrapper>
        <Button
          size="s"
          text={t('navigation.previous')}
          onClick={handleClick(previousLink)}
        />
        <Button
          size="s"
          text={t('navigation.next')}
          onClick={handleClick(nextLink)}
        />
      </NavigationWrapper>
    </ItemsNavigationContainer>
  )
}
