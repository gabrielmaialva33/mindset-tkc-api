import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Choice from 'App/Modules/Question/Models/Choice'

export namespace IChoice {
  export interface Repository extends BaseInterface<typeof Choice> {}

  export namespace DTO {
    export interface Store {
      question_id: string
      sentence: string
      label: string
      value: number
      order?: number
    }

    export interface Update {
      sentence?: string
      label?: string
      value?: number
      order?: number
    }
  }
}
