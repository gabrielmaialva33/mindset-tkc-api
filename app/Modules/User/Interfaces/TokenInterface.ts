import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import { DateTime } from 'luxon'

import Token from 'App/Modules/User/Models/Token'

export namespace IToken {
  export interface Repository extends BaseInterface<typeof Token> {}

  export namespace DTO {
    export interface Store {
      name?: string
      code: string
      type?: string
      is_lifetime?: boolean
      expired_at?: DateTime
    }
  }
}
