import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Reply from 'App/Modules/Question/Models/Reply'

export namespace IReply {
  export interface Repository extends BaseInterface<typeof Reply> {}

  export namespace DTO {
    export interface Store {
      user_id: string
      reply_id: string
      value: string
    }

    export interface Update {
      user_id?: string
      reply_id?: string
      value?: string
    }
  }
}
