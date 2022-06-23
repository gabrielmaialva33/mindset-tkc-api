import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Choice from 'App/Modules/Question/Models/Choice'

export namespace IChoice {
  export interface Repository extends BaseInterface<typeof Choice> {}

  export namespace DTO {
    export type Store = {
      question_id: string
      sentence: string
      label: string
      value: number
      group?: string
      order?: number
    }

    export type Edit = {
      sentence?: string
      label?: string
      value?: number
      group?: string
      order?: number
    }
  }
}
