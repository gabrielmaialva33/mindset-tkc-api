import { LucidRow, ModelAttributes, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import { SimplePaginatorContract } from '@ioc:Adonis/Lucid/Database'

import BaseCustomModel from 'App/Shared/Model/BaseModel'

export default interface BaseInterface<Model extends typeof BaseCustomModel>
  extends BaseHelpers<Model> {
  /**
   * Repository
   */
  index<T extends Model>({
    page,
    perPage,
    closers,
    order,
  }: PaginateContract<T>): Promise<
    ModelPaginatorContract<LucidRow & InstanceType<T>> | SimplePaginatorContract<InstanceType<T>>
  >

  store<T extends Model>(
    values: Partial<ModelAttributes<InstanceType<T>>>
  ): Promise<InstanceType<T>>

  update<T extends BaseCustomModel>(model: T): Promise<T>
}

/**
 * Helpers
 */
export interface BaseHelpers<Model extends typeof BaseCustomModel> {
  findBy<T extends Model>(key: string, value: any): Promise<null | InstanceType<T>>

  firstOrCreate<T extends Model>(
    searchPayload: ModelType<T>,
    savePayload: ModelType<T>
  ): Promise<InstanceType<T>>
}

export interface ModelClause<Model extends typeof BaseCustomModel> {
  where: ModelType<Model>
}

export interface OrderBy {
  column: string
  direction?: 'asc' | 'desc'
}

export type ModelType<Model extends typeof BaseCustomModel> = Partial<
  ModelAttributes<InstanceType<Model>>
>

export interface PaginateContract<Model extends typeof BaseCustomModel> {
  page: number
  perPage: number
  closers?: ModelClause<Model>
  order?: OrderBy
}
