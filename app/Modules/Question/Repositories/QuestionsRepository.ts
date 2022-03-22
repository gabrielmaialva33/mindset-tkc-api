import BaseRepository from 'App/Shared/Repositories/BaseRepository'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import Question from 'App/Modules/Question/Models/Question'

export default class QuestionsRepository
  extends BaseRepository<typeof Question>
  implements IQuestion.Repository
{
  constructor() {
    super(Question)
  }
}
