import { BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import BaseCustomModel from 'App/Shared/Model/BaseModel'
import Category from 'App/Modules/Question/Models/Category'
import Choice from 'App/Modules/Question/Models/Choice'

export default class Question extends BaseCustomModel {
  public static table = 'questions'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: string

  @column()
  public category_id: string

  @column()
  public sentence: string

  @column()
  public order: number

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
   * - define Question model relationships
   */
  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @hasMany(() => Choice)
  public choices: HasMany<typeof Choice>

  /**
   * ------------------------------------------------------
   * Hooks
   * ------------------------------------------------------
   * - define auto behaviors
   */

  /**
   * ------------------------------------------------------
   * Query Scopes
   * ------------------------------------------------------
   */
}
