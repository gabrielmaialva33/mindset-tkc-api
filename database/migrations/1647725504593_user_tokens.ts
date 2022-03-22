import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserTokens extends BaseSchema {
  protected tableName = 'user_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)

      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .uuid('token_id')
        .references('id')
        .inTable('tokens')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.db.rawQuery('now()').knexQuery)
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.db.rawQuery('now()').knexQuery)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
