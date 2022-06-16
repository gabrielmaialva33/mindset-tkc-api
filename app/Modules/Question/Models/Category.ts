import {
  afterFetch,
  afterFind,
  afterPaginate,
  column,
  HasMany,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import BaseCustomModel from 'App/Shared/Model/BaseModel'
import Question from 'App/Modules/Question/Models/Question'

export default class Category extends BaseCustomModel {
  public static table = 'categories'

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
  public description?: string

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
   * - define Question model relationships
   */
  @hasMany(() => Question, { localKey: 'id', foreignKey: 'category_id' })
  public questions: HasMany<typeof Question>
  /**
   * ------------------------------------------------------
   * Hooks
   * ------------------------------------------------------
   * - define auto behaviors
   */
  @afterFind()
  public static async loadRelationsOnGet(category: Category): Promise<void> {
    await category.load('questions', (builder) => builder.orderBy('order'))
  }

  @afterFetch()
  @afterPaginate()
  public static async loadRelationsOnPaginate(categories: Array<Category>): Promise<void> {
    for (const category of categories)
      await category.load('questions', (builder) => builder.orderBy('order'))
  }
  /**
   * ------------------------------------------------------
   * Query Scopes
   * ------------------------------------------------------
   */
}
