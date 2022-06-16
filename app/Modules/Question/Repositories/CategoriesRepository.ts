import BaseRepository from 'App/Shared/Repositories/BaseRepository'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'

export default class CategoriesRepository
  extends BaseRepository<typeof Category>
  implements ICategory.Repository
{
  constructor() {
    super(Category)
  }

  public async getQuestionsByName(name: string): Promise<Category | null> {
    return this.orm.query().where('name', 'ILIKE', `%${name}%`).first()
  }
}
