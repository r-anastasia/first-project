# Компонент UpperLayer

## Предусловие

Необходимо чтобы компонент был `UpperLayer` подключен
в [src/pages/App.ts](src/pages/App.ts).

## Использование

```ts
import { UpperLayerActions } from 'src/store/upperLayer'

const someComponent = () => {
  const { dispatch } = useStoreon()

  return (
    <button
      onClick={() =>
        dispatch(UpperLayerActions.open, {
          // указываем какого типа контент нам нужен (TypeScript подскажет какие
          // значения kind доступны на данный момент)
          kind: 'modal',

          // передаем контент который должен отобразиться в модальном окне
          content: <SomeContentForDrawer />,
        })
      }
    >
      открыть дровер
    </button>
  )
}
```

Предполагается, что `<SomeContentForDrawer />` это отдельный компонент, т.е.
имеет свое состояние и свои подписки.
Пример ниже будет работать **НЕ**корректно

```ts
import { useTranslation } from 'next-i18next'
import { UpperLayerActions } from 'src/store/upperLayer'

const someComponent = () => {
  const { t } = useTranslation()
  const { dispatch } = useStoreon()

  return (
    <button
      onClick={() =>
        dispatch(UpperLayerActions.open, {
          kind: 'modal',
          content: <div>{t('someI18nKey')}</div>, // НЕправильное использование
        })
      }
    >
      открыть дровер
    </button>
  )
}
```

## Фичи

- основной контент сайта блокируется корректным образом (скрол, фокус)
- в слое поверх основного присутствует возможность скрола,
  таким образом все корректно помещается независимо от размеров контента
  который мы показываем поверх основго контента
- доступность
- возможность управления с клавиатуры, без использования мыши
- возможность закрытия на клавишу `esc` или по клику на оверлей

## Особенности реализации компонента

[UpperLayer](src/components/layouts/UpperLayer/UpperLayer.tsx) достаточно прост
и предсталяет собой некоторый компонет который добавляется в `body`
с помощью `React.createPortal`. Для открытия модалки диспатчится
соответствующий экшен `open`, пэйлоадом передается `kind` и `content` и затем
внутри калбэка подписанного на основной экшен дергается ряд вспомогательных
экшенов этого модуля, которые отвечают за генерацию бойлерплейта для стейта и  
навешиванием обработчиков, а так же за блокировку
основного контента корректным образом. По такому же принципу работает
экшен `close`

[Посмотреть модуль](src/store/upperLayer/index.ts)
[storeon'a](https://github.com/storeon/storeon).
