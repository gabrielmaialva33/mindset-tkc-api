import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName)))
      this.schema.createTable(this.tableName, (table) => {
        table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)

        table.string('name', 80).notNullable()
        table.string('email', 255).notNullable().unique({ indexName: 'email' })
        table.string('password', 180).nullable()

        table.date('birth_date').nullable()
        table.float('daily_workload').nullable()
        table.integer('retirement').nullable()

        table.string('remember_me_token').nullable()
        table.boolean('was_sent_email').defaultTo(false)

        table.boolean('is_deleted').defaultTo(false)

        table.timestamp('created_at', { useTz: true }).notNullable()
        table.timestamp('updated_at', { useTz: true }).notNullable()
      })
    else Logger.info('Users migration already running')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
