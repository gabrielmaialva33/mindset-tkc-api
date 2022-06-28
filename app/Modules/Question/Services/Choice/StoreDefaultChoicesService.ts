import { inject, injectable } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import { IDependency } from 'App/Modules/Question/Interfaces/DependencyInterface'

import DTO = IChoice.DTO

type DTO = {
  sentence?: string
  label?: string
  value?: number
  order?: number
  group?: string
  question?: number
}

@injectable()
export class StoreDefaultChoicesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository,
    @inject('ChoicesRepository')
    private choicesRepository: IChoice.Repository,
    @inject('DependenciesRepository')
    private dependenciesRepository: IDependency.Repository
  ) {}

  public async init(
    ChoicesDefault: Array<DTO>,
    order: number,
    hasMany?: boolean,
    dependencies?: Array<DTO>
  ): Promise<void> {
    const category = await this.categoriesRepository.findBy('order', order)
    if (category) {
      await category.load('questions')
      const questions = category.questions

      if (hasMany)
        for (let i = 0; i < questions.length; i++)
          for (let j = 0; j < ChoicesDefault.length; j++) {
            if (ChoicesDefault[j].question === questions[i].order) {
              const { id: choiceId } = await this.choicesRepository.store({
                question_id: questions[i].id,
                sentence: ChoicesDefault[j].sentence,
                label: ChoicesDefault[j].label,
                value: ChoicesDefault[j].value,
                group: ChoicesDefault[j].group,
                order: ChoicesDefault[j].order,
              })

              if (dependencies)
                for (let k = 0; k < dependencies.length; k++) {
                  await this.dependenciesRepository.store({
                    choice_id: choiceId,
                    question_id: questions[i].id,
                    ...dependencies[k],
                  })
                }
            }
          }

      if (!hasMany)
        for (let i = 0; i < questions.length; i++)
          for (let j = 0; j < ChoicesDefault.length; j++)
            await this.choicesRepository.store({
              question_id: questions[i].id,
              sentence: ChoicesDefault[j].sentence,
              label: ChoicesDefault[j].label,
              value: ChoicesDefault[j].value,
              order: ChoicesDefault[j].order,
            })
    }
  }
}
