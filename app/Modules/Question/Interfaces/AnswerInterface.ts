export namespace IAnswer {
  export namespace DTO {
    export type Store = {
      user_id: string
      choices: Array<{ question_id: string; choice_id: string }>
    }

    export type Edit = {
      user_id?: string
      choice_id?: string
    }
  }
}
