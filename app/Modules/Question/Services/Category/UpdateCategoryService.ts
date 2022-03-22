import { inject, singleton } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import Category from 'App/Modules/Question/Models/Category'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@singleton()
export class UpdateCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init(categoryId: string, data: ICategory.DTO.Update): Promise<Category> {
    const category = await this.categoriesRepository.findBy<typeof Category>('id', categoryId)
    if (!category) throw new NotFoundException('Categoria inválida ou nao encontrada.')

    category.merge(data)
    await this.categoriesRepository.update<Category>(category)

    return category
  }
}
