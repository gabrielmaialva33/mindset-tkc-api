import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BaseQueries extends BaseSchema {
  public async up() {
    await this.db.rawQuery('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').knexQuery
  }

  public async down() {
    await this.db.rawQuery('DROP EXTENSION "uuid-ossp";').knexQuery
  }
}
