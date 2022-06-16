import { injectable, inject } from 'tsyringe'

import Category from 'App/Modules/Question/Models/Category'
import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import { PaginateContractType, PaginateParams } from 'App/Shared/Interfaces/BaseInterface'

@injectable()
export class ListCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
  ) {}

  public async init(
    params: PaginateParams<typeof Category>
  ): Promise<PaginateContractType<typeof Category>> {
    return this.categoriesRepository.listWithPagination({
      ...params,
      clauses: { where: { is_deleted: false } },
      orders: [
        {
          column: 'order',
          direction: 'asc',
        },
      ],
    })
  }
}
