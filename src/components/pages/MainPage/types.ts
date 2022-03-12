import type { NextPageContext } from 'next'
import type {
  IntroductionModel,
  AboutUsModel,
  ValuesModel,
  ReviewsModel,
  JobsModel,
  HiringModel,
  BenefitsModel,
} from 'src/models'

type InitialData = Array<
  [
    string,
    (
      | IntroductionModel
      | AboutUsModel
      | ValuesModel
      | ReviewsModel
      | JobsModel
      | HiringModel
      | BenefitsModel
    ),
  ]
>

export type IndexPageProps = { initialData: InitialData } & Pick<
  NextPageContext,
  'query'
>
