import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Category from 'App/Modules/Question/Models/Category'

export namespace ICategory {
  export interface Repository extends BaseInterface<typeof Category> {}

  export namespace DTO {
    export interface Store {}

    export interface Update {}
  }
}
