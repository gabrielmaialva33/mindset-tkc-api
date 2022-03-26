import { DateTime } from 'luxon'
import { column, beforeSave, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

import Token from 'App/Modules/User/Models/Token'
import BaseCustomModel from 'App/Shared/Model/BaseModel'
import Choice from 'App/Modules/Question/Models/Choice'

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

  /**
   * ------------------------------------------------------
   * Query Scopes
   * ------------------------------------------------------
   */
}
