import { LucidRow, ModelAttributes, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'

import BaseCustomModel from 'App/Shared/Model/BaseModel'
import { SimplePaginatorContract } from '@ioc:Adonis/Lucid/Database'

export default interface BaseInterface<Model extends typeof BaseCustomModel>
  extends BaseHelpers<Model> {
  /**
   * Repository
   */
  index<T extends Model>(
    this: Model,
    { page, perPage }: PaginateParams,
    closers?: ModelClause<T>
  ): Promise<
    ModelPaginatorContract<LucidRow & InstanceType<T>> | SimplePaginatorContract<InstanceType<T>>
  >

  store<T extends Model>(
    this: T,
    values: Partial<ModelAttributes<InstanceType<T>>>
  ): Promise<InstanceType<T>>
}

/**
 * Helpers
 */
export interface BaseHelpers<Model extends typeof BaseCustomModel> {
  findBy<T extends Model>(this: T, key: string, value: any): Promise<null | InstanceType<T>>
}

export interface ModelClause<Model extends typeof BaseCustomModel> {
  onWhere: ModelType<Model>
}

export type ModelType<Model extends typeof BaseCustomModel> = Partial<
  ModelAttributes<InstanceType<Model>>
>

export interface PaginateParams {
  page: number
  perPage: number
}
