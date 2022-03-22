import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Choice from 'App/Modules/Question/Models/Choice'

export namespace IChoice {
  export interface Repository extends BaseInterface<typeof Choice> {}

  export namespace DTO {
    export interface Store {}

    export interface Update {}
  }
}
