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
          text="previous"
          onClick={handleClick(previousLink)}
        >{`previous`}</Button>
        <Button
          size="s"
          text={`next`}
          onClick={handleClick(nextLink)}
        >{`next`}</Button>
      </NavigationWrapper>
    </ItemsNavigationContainer>
  )
}
