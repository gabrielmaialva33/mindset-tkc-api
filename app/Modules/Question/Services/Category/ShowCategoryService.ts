import { singleton, inject } from 'tsyringe'

import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import Category from 'App/Modules/Question/Models/Category'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@singleton()
export class ShowCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init(categoryId: string): Promise<Category> {
    const category = await this.categoriesRepository.findBy<typeof Category>('id', categoryId)
    if (!category) throw new NotFoundException('Category not found or not available.')

    /**
     * load category relationships
     */
    await category.load('questions', (questionsQuery) => {
      questionsQuery
        .whereNot({
          is_deleted: true,
        })
        .preload('choices', (choicesQuery) =>
          choicesQuery.whereNot({ is_deleted: true }).orderBy('order')
        )
        .orderBy('order')
    })

    return category
  }
}
