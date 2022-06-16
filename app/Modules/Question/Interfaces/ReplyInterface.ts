import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Reply from 'App/Modules/Question/Models/Reply'

export namespace IReply {
  export interface Repository extends BaseInterface<typeof Reply> {}

  export namespace DTO {
    export type Store = {
      user_id: string
      reply_id: string
      value: string
    }

    export type Edit = {
      user_id?: string
      reply_id?: string
      value?: string
    }
  }
}
