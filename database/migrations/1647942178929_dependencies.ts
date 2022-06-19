import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class DependenciesSchema extends BaseSchema {
  protected tableName = 'dependencies'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName)))
      this.schema.createTable(this.tableName, (table) => {
        table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)

        table
          .uuid('choice_id')
          .references('id')
          .inTable('choices')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

        table.text('sentence').notNullable()
        table.text('label').nullable()
        table.integer('value').defaultTo(0)

        table.integer('order').defaultTo(0)

        table.boolean('is_deleted').defaultTo(false)
        table.timestamp('created_at', { useTz: true })
        table.timestamp('updated_at', { useTz: true })
      })
    else Logger.info('Dependencies migration already running')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
