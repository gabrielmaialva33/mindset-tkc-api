import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Dependency from 'App/Modules/Question/Models/Dependency'

export namespace IDependency {
  export interface Repository extends BaseInterface<typeof Dependency> {}

  export namespace DTO {
    export type Store = {
      choice_id: string
      question_id: string
      sentence: string
      label: string
      value: number
      order?: number
    }

    export type Edit = {
      sentence?: string
      label?: string
      value?: number
      order?: number
    }
  }
}
