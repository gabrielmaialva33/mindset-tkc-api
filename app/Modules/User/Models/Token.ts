import { BaseModel, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import BaseCustomModel from 'App/Shared/Model/BaseModel'

export default class Token extends BaseCustomModel {
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

  @column({ serializeAs: null })
  public hash: string

  @column({})
  public type: string

  @column({})
  public is_revoked: boolean

  @column({})
  public is_lifetime: boolean

  @column({ serializeAs: null })
  public is_deleted: boolean

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
  @beforeFind()
  public static async ignoreRevoked(
    query: ModelQueryBuilderContract<typeof BaseModel>
  ): Promise<void> {
    query.whereNot('is_revoked', true)
  }

  /**
   * ------------------------------------------------------
   * Query Scopes
   * ------------------------------------------------------
   */
}
