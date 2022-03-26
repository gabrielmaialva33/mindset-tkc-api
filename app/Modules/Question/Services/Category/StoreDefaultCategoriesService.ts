import { inject, singleton } from 'tsyringe'
import Logger from '@ioc:Adonis/Core/Logger'

import { CategoriesDefault } from 'App/Modules/Question/Defaults/CategoriesDefault'
import { ModelType } from 'App/Shared/Interfaces/BaseInterface'

import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import Category from 'App/Modules/Question/Models/Category'

@singleton()
export class StoreDefaultCategoriesService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init() {
    Logger.info('Creating categories')

    for (let index = 0; index < CategoriesDefault.length; index++) {
      const category: ModelType<typeof Category> = CategoriesDefault[index]

      await this.categoriesRepository.firstOrCreate<typeof Category>(
        { name: category.name },
        category
      )
    }
    Logger.info('Finished category creation')
  }
}
