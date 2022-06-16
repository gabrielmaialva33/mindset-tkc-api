import { DateTime } from 'luxon'
import {
  column,
  beforeSave,
  manyToMany,
  ManyToMany,
  hasMany,
  HasMany,
  scope,
  afterFind,
  afterFetch,
  afterPaginate,
} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

import BaseCustomModel from 'App/Shared/Model/BaseModel'

import Token from 'App/Modules/User/Models/Token'
import Choice from 'App/Modules/Question/Models/Choice'
import Reply from 'App/Modules/Question/Models/Reply'

export default class User extends BaseCustomModel {
  public static table = 'users'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password?: string

  @column()
  public remember_me_token?: string

  @column()
  public was_sent_email: boolean

  @column({ serializeAs: null })
  public is_deleted: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updated_at: DateTime

  /**
   * ------------------------------------------------------
   * Relationships
   * ------------------------------------------------------
   * - define User model relationships
   */
  @manyToMany(() => Token, {
    localKey: 'id',
    pivotForeignKey: 'user_id',
    pivotTable: 'user_tokens',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'token_id',
  })
  public tokens: ManyToMany<typeof Token>

  @manyToMany(() => Choice, {
    localKey: 'id',
    pivotForeignKey: 'user_id',
    pivotTable: 'answers',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'choice_id',
  })
  public choices: ManyToMany<typeof Choice>

  @hasMany(() => Reply, { localKey: 'id', foreignKey: 'user_id' })
  public replies: HasMany<typeof Reply>

  /**
   * ------------------------------------------------------
   * Hooks
   * ------------------------------------------------------
   * - define auto behaviors
   */
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) if (user.password) user.password = await Hash.make(user.password)
  }

  @afterFind()
  public static async loadRelationsOnGet(user: User): Promise<void> {
    await user.load('tokens')
    await user.load('choices', (builder) => builder.orderBy('created_at'))
  }

  @afterFetch()
  @afterPaginate()
  public static async loadRelationsOnPaginate(users: Array<User>): Promise<void> {
    for (const user of users) {
      await user.load('tokens')
      await user.load('choices', (builder) => builder.orderBy('created_at'))
    }
  }

  /**
   * ------------------------------------------------------
   * Query Scopes
   * ------------------------------------------------------
   */
  public static searchQueryScope = scope((query, search) => {
    const fields = ['name', 'email']
    let sql = ''

    fields.forEach(
      (field, i) => (sql = `${sql} ${i !== 0 ? ' or ' : ' '} ${field} ilike '%${search}%'`)
    )

    return query.whereRaw(`(${sql})`)
  })
}
