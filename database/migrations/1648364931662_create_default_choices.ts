import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { container } from 'tsyringe'

import { StoreDefaultChoicesService } from 'App/Modules/Question/Services/Choice'

import {
  AssertividadeChoicesDefault,
  CerebralChoicesDefault,
  GerencialChoicesDefault,
  LikertChoicesDefault,
  MotivadoresChoicesDefault,
} from 'App/Modules/Question/Defaults/ChoicesDefault'

export default class CreateDefaultChoices extends BaseSchema {
  public async up() {
    const storeDefaultChoices = container.resolve(StoreDefaultChoicesService)
    await storeDefaultChoices.init(LikertChoicesDefault, 1)
    await storeDefaultChoices.init(MotivadoresChoicesDefault, 2, true)
    await storeDefaultChoices.init(AssertividadeChoicesDefault, 3, true)
    await storeDefaultChoices.init(GerencialChoicesDefault, 4, true)
    await storeDefaultChoices.init(CerebralChoicesDefault, 5, true)
    await storeDefaultChoices.init(LikertChoicesDefault, 6)
  }

  public async down() {
    this.db.rawQuery('truncate choices;').knexQuery
  }
}
