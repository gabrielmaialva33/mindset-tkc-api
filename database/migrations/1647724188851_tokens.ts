import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tokens extends BaseSchema {
  protected tableName = 'tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)

      table.string('name').nullable()
      table.string('token').notNullable()
      table.string('type').notNullable().defaultTo('common')

      table.string('is_revoked').notNullable().defaultTo(false)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.timestamp('expired_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
