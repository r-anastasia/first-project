# Получение данных на этапе SSR, создание кэша для SWR

## Мидлвара для получения данных

Для получения данных
используется [мидлвара](src/middlewares/makeGetData/makeGetData.ts), в которую
с помощью каррирования привязывается контекст с request-конфигом (важно
использовать тот же `requestConfig`, что и передается непосредственно в
компоненте в `useRequest`, т.к. этот конфиг используется для ключа кэша)
[axios](https://github.com/axios/axios). Затем эта мидлвара передается в
функцию [compose](src/middlewares/compose/compose.ts) наряду с другими
необходимыми [мидлварами](src/middlewares/makeGetData/makeGetData.ts). В свою
очередь результат вызова функции `compose` экспортируется как
`getServerSideProps` на уровне страницы.

Внутри мидлвары подготовится массив кортэжей (ключ, значение), для последующей
передачи в `SWRConfig`

## SWRConfig

На уровне страницы все компоненты оборачиваются в `SWRConfig`, в `value`
передается `{ provider: () => new Map(initialData) }`, `initialData` получаем
из `props` компонента (они формируются в `getServerSideProps` и затем
доступны для страницы).

Пример использования всего что описано выше в этом документе:

```ts
import { SWRConfig } from 'swr'
// local libs
import {
  SomeComponent,
  someComponentRequestConfig,
  SomeAnotherComponent,
  someAnotherComponentRequestConfig,
} from 'src/components/pages/SomeComponent'
import { compose, getCookies, makeGetData } from 'src/middlewares'
// types
import { NextPageContext } from 'next'
import { SomeComponentData } from 'src/models'

type InitialData = Array<[string, SomeComponentData]>

type SomeComponentProps = { initialData: InitialData }

export const SomePage = ({ initialData }: SomeComponentProps) => {
  return (
    <SWRConfig value={{ provider: () => new Map(initialData) }}>
      <SomeComponent />
      <SomeAnotherComponent />
    </SWRConfig>
  )
}

const getData = makeGetData(
  someComponentRequestConfig,
  someAnotherComponentRequestConfig,
)

export const getServerSideProps = compose(getCookies, getData)
```

## Фетчинг данных на уровне компонента

Каких-то дополнительных действий на уровне компонента использующего кэш не
требуется. Страница корректно отработает на этапе SSR, все компоненты внутри
SWRConfig отрендерятся с данными из кэша. На клиент будет передана уже
полностью отрендеренная страница, после гидрации запросы на бэк заного
выполняться не будут уже с клиента (данное поведение настраивается в глобальном
`SWRConfig`)
