import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class Tokens extends BaseSchema {
  protected tableName = 'tokens'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName)))
      this.schema.createTable(this.tableName, (table) => {
        table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)

        table.string('name').nullable()
        table.string('code').notNullable().unique()
        table.string('hash').notNullable()
        table.string('type').notNullable().defaultTo('common')

        table.boolean('is_revoked').notNullable().defaultTo(false)
        table.boolean('is_lifetime').notNullable().defaultTo(false)

        table.timestamp('created_at', { useTz: true })
        table.timestamp('updated_at', { useTz: true })
        table.timestamp('expired_at', { useTz: true }).nullable()
      })
    else Logger.info('Tokens migration already running')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
