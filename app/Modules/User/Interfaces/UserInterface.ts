import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import User from 'App/Modules/User/Models/User'

export namespace IUser {
  export interface Repository extends BaseInterface<typeof User> {}

  export namespace DTO {
    export type List = {
      page: number
      perPage: number
      search: string
    }

    export type Store = {
      name: string
      email: string
      password?: string
      code: string
    }

    export type Edit = {
      name?: string
      email?: string
      password?: string
    }
  }
}
