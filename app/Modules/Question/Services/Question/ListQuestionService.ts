import { inject, injectable } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import Category from 'App/Modules/Question/Models/Category'

@injectable()
export class ListQuestionService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository
  ) {}

  public async init(name: string): Promise<Category | null> {
    return this.categoriesRepository.getQuestionsByName(name)
  }
}
