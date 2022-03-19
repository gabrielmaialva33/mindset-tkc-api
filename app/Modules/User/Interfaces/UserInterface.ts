import BaseInterface from 'App/Shared/Interfaces/BaseInterface'

export namespace IUser {
  export interface Repository extends BaseInterface {}

  export namespace DTO {
    export interface Store {
      first_name: string
      last_name?: string
      email: string
      password?: string
    }

    export interface Update {
      first_name?: string
      last_name?: string
      email?: string
      password?: string
    }
  }
}
