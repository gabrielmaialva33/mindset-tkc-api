import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class Answers extends BaseSchema {
  protected tableName = 'answers'

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

        table
          .uuid('question_id')
          .references('id')
          .inTable('questions')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

        table
          .uuid('choice_id')
          .references('id')
          .inTable('choices')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

        table
          .timestamp('created_at', { useTz: true })
          .defaultTo(this.db.rawQuery('now()').knexQuery)
        table
          .timestamp('updated_at', { useTz: true })
          .defaultTo(this.db.rawQuery('now()').knexQuery)
      })
    else Logger.info('Choices migration already running')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
