import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import BaseCustomModel from 'App/Shared/Model/BaseModel'
import Question from 'App/Modules/Question/Models/Question'

export default class Choice extends BaseCustomModel {
  public static table = 'choices'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: string

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
   * - define Choice model relationships
   */
  @belongsTo(() => Question, { localKey: 'id', foreignKey: 'question_id' })
  public question: BelongsTo<typeof Question>
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
