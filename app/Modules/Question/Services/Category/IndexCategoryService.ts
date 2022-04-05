import { injectable, inject } from 'tsyringe'

import Category from 'App/Modules/Question/Models/Category'
import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'

import { PaginateContract } from 'App/Shared/Interfaces/BaseInterface'

@injectable()
export class IndexCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
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
