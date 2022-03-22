import { LucidRow, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import { SimplePaginatorContract } from '@ioc:Adonis/Lucid/Database'

import BaseInterface, {
  ModelClause,
  ModelType,
  PaginateParams,
} from 'App/Shared/Interfaces/BaseInterface'
import BaseCustomModel from 'App/Shared/Model/BaseModel'

export default class BaseRepository<Model extends typeof BaseCustomModel>
  implements BaseInterface<Model>
{
  protected model: Model

  constructor(model: Model) {
    this.model = model
  }

  /**
   * Repository
   */

  public async store<T extends Model>(values: ModelType<T>): Promise<InstanceType<T>> {
    return this.model.create(values)
  }

  /**
   * Helpers
   */
  public async findBy<T extends Model>(key: string, value: any): Promise<InstanceType<T> | null> {
    return this.model.findBy(key, value)
  }

  public async index<T extends Model>(
    { page, perPage }: PaginateParams,
    closers?: ModelClause<T>
  ): Promise<
    ModelPaginatorContract<LucidRow & InstanceType<T>> | SimplePaginatorContract<InstanceType<T>>
  > {
    const model = this.model.query()

    if (closers) model.where({ ...closers })
    return model.paginate(page, perPage)
  }
}
