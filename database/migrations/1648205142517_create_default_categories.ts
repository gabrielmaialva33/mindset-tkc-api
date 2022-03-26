import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { container } from 'tsyringe'

import { StoreDefaultCategoriesService } from 'App/Modules/Question/Services/Category/StoreDefaultCategoriesService'

export default class CreateDefaultCategories extends BaseSchema {
  public async up() {
    const storeDefaultCategories = container.resolve(StoreDefaultCategoriesService)
    await storeDefaultCategories.init()
  }

  public async down() {
    this.db.rawQuery('truncate categories;').knexQuery
  }
}
