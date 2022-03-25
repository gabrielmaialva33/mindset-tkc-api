import { LucidRow, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import { SimplePaginatorContract } from '@ioc:Adonis/Lucid/Database'

import BaseInterface, {
  ModelClause,
  ModelType,
  PaginateContract,
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
  public async findBy<T extends Model>(
    key: string,
    value: any,
    closers?: ModelClause<T>
  ): Promise<InstanceType<T> | null> {
    const model = this.model.query()
    model.where(key, value)

    if (closers) model.where({ ...closers.where })

    return model.first()
  }

  public async index<T extends Model>({
    page,
    perPage,
    closers,
    order,
  }: PaginateContract<T>): Promise<
    ModelPaginatorContract<LucidRow & InstanceType<T>> | SimplePaginatorContract<InstanceType<T>>
  > {
    const model = this.model.query()

    if (closers) model.where({ ...closers.where })
    if (order) model.orderBy(order.column, order.direction)

    return model.paginate(page, perPage)
  }

  public async update<T extends BaseCustomModel>(model: T): Promise<T> {
    return model.save()
  }
}
