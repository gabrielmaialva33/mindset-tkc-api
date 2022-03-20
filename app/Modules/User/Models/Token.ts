import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Token extends BaseModel {
  public static table = 'tokens'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: string

  @column({})
  public name?: string

  @column({})
  public code: string

  @column({})
  public hash: string

  @column({})
  public type: string

  @column({})
  public is_revoked: boolean

  @column({})
  public is_lifetime: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updated_at: DateTime

  @column.dateTime({})
  public expired_at: DateTime

  /**
   * ------------------------------------------------------
   * Relationships
   * ------------------------------------------------------
   * - define Token model relationships
   */

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
