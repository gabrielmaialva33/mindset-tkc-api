import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import { BaseModel, LucidRow, ModelAttributes } from '@ioc:Adonis/Lucid/Orm'

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
  public async findBy(key: string, value: any) {
    return this.model.findBy(key, value)
  }
}
