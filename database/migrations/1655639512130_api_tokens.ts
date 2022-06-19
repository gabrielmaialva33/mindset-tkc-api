import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class ApiTokens extends BaseSchema {
  protected tableName = 'api_tokens'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName)))
      this.schema.createTable(this.tableName, (table) => {
        table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)

        table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
        table.string('name').notNullable()
        table.string('type').notNullable()
        table.string('token', 64).notNullable().unique()

        table.timestamp('expires_at', { useTz: true }).nullable()
        table.timestamp('created_at', { useTz: true }).notNullable()
      })
    else Logger.info('ApiTokens migration already running')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
