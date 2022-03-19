import { LucidModel, LucidRow, ModelAttributes } from '@ioc:Adonis/Lucid/Orm'

export default interface BaseInterface extends Helpers {
  /**
   * Repository
   */
  store<T extends LucidModel>(
    this: T,
    values: Partial<ModelAttributes<InstanceType<T>>>
  ): Promise<LucidRow>
}

/**
 * Helpers
 */
interface Helpers {
  findBy<T extends LucidModel>(this: T, key: string, value: any): Promise<LucidRow | null>
}
