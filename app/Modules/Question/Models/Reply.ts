import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import BaseCustomModel from 'App/Shared/Model/BaseModel'
import User from 'App/Modules/User/Models/User'

export default class Reply extends BaseCustomModel {
  public static table = 'replies'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: string

  @column()
  public user_id: string

  @column()
  public reply_id: string

  @column()
  public value: string

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
   * - define Reply model relationships
   */
  @belongsTo(() => User, { localKey: 'id', foreignKey: 'user_id' })
  public user: BelongsTo<typeof User>

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
