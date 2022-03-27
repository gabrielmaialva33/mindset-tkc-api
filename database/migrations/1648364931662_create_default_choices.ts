import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { container } from 'tsyringe'

import { StoreDefaultChoicesService } from 'App/Modules/Question/Services/Choice'

import { LikertChoicesDefault } from 'App/Modules/Question/Defaults/ChoicesDefault'

export default class CreateDefaultChoices extends BaseSchema {
  public async up() {
    const storeDefaultChoices = container.resolve(StoreDefaultChoicesService)
    await storeDefaultChoices.init(LikertChoicesDefault, 1)
  }

  public async down() {
    this.db.rawQuery('truncate choices;').knexQuery
  }
}
