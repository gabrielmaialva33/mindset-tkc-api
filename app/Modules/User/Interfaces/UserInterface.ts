import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import User from 'App/Modules/User/Models/User'

export namespace IUser {
  export interface Repository extends BaseInterface<typeof User> {}

  export namespace DTO {
    export interface Store {
      name: string
      email: string
      password?: string
      code: string
    }

    export interface Update {
      name?: string
      email?: string
      password?: string
    }
  }
}
