import { compose, makeGetData, makeGetI18nNamespaces } from 'src/middlewares'

export { default } from 'src/components/pages/MainPage'

// делаем мидлвару getI18nNamespaces (без параметров применится только 'common')
const getI18nNamespaces = makeGetI18nNamespaces()
// делаем мидлвару getData которая при выполнении зафетчит данные по всем
// переданным конфигам, а также сформирует начальный кэш SWR,
// после чего запишет все в initialData
const getData = makeGetData(/* */)
// передаем все необходимые мидлвары в compose, результат выполнения
// экспортируем как getServerSideProps
export const getServerSideProps = compose(getI18nNamespaces, getData)
