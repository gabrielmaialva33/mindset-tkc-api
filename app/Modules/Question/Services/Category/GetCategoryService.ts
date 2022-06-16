import { injectable, inject } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class GetCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
  ) {}

  public async init(categoryId: string): Promise<Category> {
    const category = await this.categoriesRepository.findBy('id', categoryId)
    if (!category) throw new NotFoundException('Category not found or not available.')

    /**
     * load category relationships
     */
    await category.load('questions', (questionsQuery) =>
      questionsQuery
        .whereNot({
          is_deleted: true,
        })
        .preload('choices', (choicesQuery) =>
          choicesQuery.whereNot({ is_deleted: true }).orderBy('order')
        )
        .orderBy('order')
    )

    return category
  }
}
