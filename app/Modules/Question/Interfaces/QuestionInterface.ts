import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Question from 'App/Modules/Question/Models/Question'

export namespace IQuestion {
  export interface Repository extends BaseInterface<typeof Question> {}

  export namespace DTO {
    export interface Store {
      category_id: string
      sentence: string
      type?: string
      min_choice?: number
      max_choice?: number
      order?: number
    }

    export interface Update {
      category_id?: string
      sentence?: string
      type?: string
      min_choice?: number
      max_choice?: number
      order?: number
    }
  }
}
