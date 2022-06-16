import { inject, injectable } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class DeleteCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
  ) {}

  public async init(categoryId: string): Promise<void> {
    const category = await this.categoriesRepository.findBy('id', categoryId)
    if (!category) throw new NotFoundException('Category not found or not available.')

    category.merge({ is_deleted: true })
    await this.categoriesRepository.save(category)
  }
}
