import {
  afterFetch,
  afterFind,
  afterPaginate,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import BaseCustomModel from 'App/Shared/Model/BaseModel'
import Question from 'App/Modules/Question/Models/Question'
import Answer from './Answer'
import Dependency from 'App/Modules/Question/Models/Dependency'

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

  @hasMany(() => Answer, {
    localKey: 'id',
    foreignKey: 'choice_id',
  })
  public answers: HasMany<typeof Answer>

  @hasMany(() => Dependency, { localKey: 'id', foreignKey: 'choice_id' })
  public dependencies: HasMany<typeof Dependency>

  /**
   * ------------------------------------------------------
   * Hooks
   * ------------------------------------------------------
   * - define auto behaviors
   */
  @afterFind()
  public static async loadRelationsOnGet(choice: Choice): Promise<void> {
    await choice.load('dependencies', (builder) => builder.orderBy('order'))
  }

  @afterFetch()
  @afterPaginate()
  public static async loadRelationsOnPaginate(choices: Array<Choice>): Promise<void> {
    for (const choice of choices)
      await choice.load('dependencies', (builder) => builder.orderBy('order'))
  }

  /**
   * ------------------------------------------------------
   * Query Scopes
   * ------------------------------------------------------
   */
}
