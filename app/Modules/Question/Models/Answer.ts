import BaseCustomModel from 'App/Shared/Model/BaseModel'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from 'App/Modules/User/Models/User'
import Question from 'App/Modules/Question/Models/Question'
import Choice from 'App/Modules/Question/Models/Choice'
import Dependency from 'App/Modules/Question/Models/Dependency'

export default class Answer extends BaseCustomModel {
  public static table = 'answers'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: string

  @column({ serializeAs: null })
  public user_id: string

  @column()
  public question_id: string

  @column()
  public choice_id: string

  @column()
  public dependency_id?: string

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
  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Question, {
    localKey: 'id',
    foreignKey: 'question_id',
  })
  public question: BelongsTo<typeof Question>

  @belongsTo(() => Choice, {
    localKey: 'id',
    foreignKey: 'question_id',
  })
  public choice: BelongsTo<typeof Choice>

  @belongsTo(() => Dependency, {
    localKey: 'id',
    foreignKey: 'dependency_id',
  })
  public dependency: BelongsTo<typeof Dependency>

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
