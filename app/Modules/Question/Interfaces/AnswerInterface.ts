export namespace IAnswer {
  export namespace DTO {
    export interface Store {
      user_id: string
      choices: Array<{ question_id: string; choice_id: string }>
    }

    export interface Update {
      user_id?: string
      choice_id?: string
    }
  }
}
