import { inject, injectable } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class DestroyCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
  ) {}

  public async init(categoryId: string): Promise<void> {
    const category = await this.categoriesRepository.findBy<typeof Category>('id', categoryId)
    if (!category) throw new NotFoundException('Category not found or not available.')

    category.merge({ is_deleted: true })

    await this.categoriesRepository.update<Category>(category)
  }
}
