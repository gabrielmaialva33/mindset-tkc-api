import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import { BaseModel, LucidModel, LucidRow, ModelAttributes } from '@ioc:Adonis/Lucid/Orm'

export default class BaseRepository implements BaseInterface {
  protected model: typeof BaseModel

  constructor(model: typeof BaseModel) {
    this.model = model
  }

  /**
   * Repository
   */
  public async store<T extends typeof BaseModel>(
    values: Partial<ModelAttributes<InstanceType<T>>>
  ): Promise<LucidRow> {
    return this.model.create(values)
  }

  /**
   * Helpers
   */
  public async findBy<T extends LucidModel>(
    key: Partial<ModelAttributes<InstanceType<T>>>,
    value: any
  ): Promise<LucidRow | null> {
    return this.model.findBy(String(key), value)
  }
}
