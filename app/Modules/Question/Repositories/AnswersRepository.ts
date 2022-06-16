import BaseRepository from 'App/Shared/Repositories/BaseRepository'
import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import Answer from 'App/Modules/Question/Models/Answer'

export default class AnswersRepository
  extends BaseRepository<typeof Answer>
  implements IAnswer.Repository
{
  constructor() {
    super(Answer)
  }
}
