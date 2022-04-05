import {
  BaseModel,
  beforeFetch,
  beforeFind,
  beforePaginate,
  ModelQueryBuilderContract,
} from '@ioc:Adonis/Lucid/Orm'

export default class BaseCustomModel extends BaseModel {
  /**
   * Hooks
   */
  @beforeFind()
  @beforeFetch()
  public static async ignoreDeleted(
    query: ModelQueryBuilderContract<typeof BaseModel>
  ): Promise<void> {
    query.whereNot('is_deleted', true)
  }

  @beforePaginate()
  public static ignoreDeletedPaginate(
    queries: [
      countQuery: ModelQueryBuilderContract<typeof BaseModel>,
      query: ModelQueryBuilderContract<typeof BaseModel>
    ]
  ) {
    for (const query of queries) query.whereNot('is_deleted', true)
  }
}
