import { singleton, inject } from 'tsyringe'

import { PaginateContract } from 'App/Shared/Interfaces/BaseInterface'
import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import Category from 'App/Modules/Question/Models/Category'

@singleton()
export class IndexCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async init(params: PaginateContract<typeof Category>) {
    return this.categoriesRepository.index({
      ...params,
      closers: { where: { is_deleted: false } },
      order: {
        column: 'order',
        direction: 'asc',
      },
    })
  }
}
