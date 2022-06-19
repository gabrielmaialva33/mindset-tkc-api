import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Answer from 'App/Modules/Question/Models/Answer'

export namespace IAnswer {
  export interface Repository extends BaseInterface<typeof Answer> {}

  export namespace DTO {
    export type Store = {
      user_id: string
      choices: Array<{ question_id: string; choice_id?: string; dependency_id?: string }>
    }

    export type Edit = {
      user_id: string
      choices: Array<{ question_id?: string; choice_id?: string; dependency_id?: string }>
    }
  }
}
