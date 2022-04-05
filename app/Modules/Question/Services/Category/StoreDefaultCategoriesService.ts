import { inject, injectable } from 'tsyringe'

import { ModelType } from 'App/Shared/Interfaces/BaseInterface'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'

import { CategoriesDefault } from 'App/Modules/Question/Defaults/CategoriesDefault'

@injectable()
export class StoreDefaultCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
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
