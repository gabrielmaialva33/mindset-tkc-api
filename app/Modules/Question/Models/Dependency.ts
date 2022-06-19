import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

import BaseCustomModel from 'App/Shared/Model/BaseModel'
import Choice from 'App/Modules/Question/Models/Choice'

export default class Dependency extends BaseCustomModel {
  public static table = 'dependencies'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: string

  @column()
  public choice_id: string

  @column()
  public question_id: string

  @column()
  public sentence: string

  @column()
  public label: string

  @column()
  public value: number

  @column()
  public order?: number

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
   * - define Dependency model relationships
   */
  @belongsTo(() => Choice, { localKey: 'id', foreignKey: 'choice_id' })
  public choice: BelongsTo<typeof Choice>

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
