import { inject, injectable } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class EditCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
  ) {}

  public async init(categoryId: string, data: ICategory.DTO.Update): Promise<Category> {
    const category = await this.categoriesRepository.findBy('id', categoryId)
    if (!category) throw new NotFoundException('Category not found or not available.')

    category.merge(data)
    await this.categoriesRepository.save(category)

    return category
  }
}
