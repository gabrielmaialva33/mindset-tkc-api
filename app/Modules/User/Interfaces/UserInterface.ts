import BaseInterface from 'App/Shared/Interfaces/BaseInterface'

export namespace IUser {
  export interface Repository extends BaseInterface {}

  export namespace DTO {
    export interface Store {
      name: string
      email: string
      password?: string
    }

    export interface Update {
      name?: string
      email?: string
      password?: string
    }
  }
}
