import { inject, singleton } from 'tsyringe'

import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import Category from 'App/Modules/Question/Models/Category'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@singleton()
export class DestroyCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init(categoryId: string): Promise<void> {
    const category = await this.categoriesRepository.findBy<typeof Category>('id', categoryId)
    if (!category) throw new NotFoundException('Categoria inválida ou nao encontrada.')

    category.merge({ is_deleted: true })

    await this.categoriesRepository.update<Category>(category)
  }
}
