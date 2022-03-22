import { singleton, inject } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'
import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'

@singleton()
export class StoreCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init(data: ICategory.DTO.Store): Promise<Category> {
    return this.categoriesRepository.store<typeof Category>(data)
  }
}
