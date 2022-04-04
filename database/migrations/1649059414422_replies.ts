import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class Replies extends BaseSchema {
  protected tableName = 'replies'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName)))
      this.schema.createTable(this.tableName, (table) => {
        table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)

        table
          .uuid('user_id')
          .references('id')
          .inTable('users')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

        table.string('reply_id')
        table.string('value')

        table.boolean('is_deleted').defaultTo(false)

        table.timestamp('created_at', { useTz: true })
        table.timestamp('updated_at', { useTz: true })
      })
    else Logger.info('Replies migration already running')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
