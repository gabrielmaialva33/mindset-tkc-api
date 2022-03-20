import BaseInterface from 'App/Shared/Interfaces/BaseInterface'

import { ModelAttributes } from '@ioc:Adonis/Lucid/Orm'
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
  public async store(
    values: Partial<ModelAttributes<InstanceType<Model>>>
  ): Promise<InstanceType<Model>> {
    return this.model.create(values)
  }

  /**
   * Helpers
   */
  public async findBy(key: string, value: any): Promise<InstanceType<Model> | null> {
    return this.model.findBy(key, value)
  }
}
