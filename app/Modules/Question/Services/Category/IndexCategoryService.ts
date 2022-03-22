import { singleton, inject } from 'tsyringe'

import { PaginateParams } from 'App/Shared/Interfaces/BaseInterface'
import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import Category from 'App/Modules/Question/Models/Category'

@singleton()
export class IndexCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init(params: PaginateParams) {
    return this.categoriesRepository.index<typeof Category>(params)
  }
}
