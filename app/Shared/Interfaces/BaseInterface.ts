import { ModelAdapterOptions, ModelAttributes } from '@ioc:Adonis/Lucid/Orm'
import BaseCustomModel from 'App/Shared/Model/BaseModel'

export default interface BaseInterface<Model extends typeof BaseCustomModel>
  extends Helpers<Model> {
  /**
   * Repository
   */
  store(
    this: Model,
    values: Partial<ModelAttributes<InstanceType<Model>>>
  ): Promise<InstanceType<Model>>
}

interface Helpers<Model extends typeof BaseCustomModel> {
  findBy(
    this: Model,
    key: string,
    value: any,
    options?: ModelAdapterOptions
  ): Promise<null | InstanceType<Model>>
}
