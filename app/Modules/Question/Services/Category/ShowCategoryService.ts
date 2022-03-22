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
    if (!category) throw new NotFoundException('Categoria inválida ou nao encontrada.')

    return category
  }
}
