import { inject, injectable } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'

@injectable()
export class StoreCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
  ) {}

  public async init(data: ICategory.DTO.Store): Promise<Category> {
    return this.categoriesRepository.store<typeof Category>(data)
  }
}
