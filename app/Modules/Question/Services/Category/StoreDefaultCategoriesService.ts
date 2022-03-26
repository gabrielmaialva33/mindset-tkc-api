import { inject, singleton } from 'tsyringe'

import { ModelType } from 'App/Shared/Interfaces/BaseInterface'

import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import Category from 'App/Modules/Question/Models/Category'

import { CategoriesDefault } from 'App/Modules/Question/Defaults/CategoriesDefault'

@singleton()
export class StoreDefaultCategoriesService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init(): Promise<void> {
    for (let index = 0; index < CategoriesDefault.length; index++) {
      const category: ModelType<typeof Category> = CategoriesDefault[index]

      await this.categoriesRepository.firstOrCreate<typeof Category>(
        { name: category.name },
        category
      )
    }
  }
}
