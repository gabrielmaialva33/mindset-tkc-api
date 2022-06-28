import { inject, injectable } from 'tsyringe'
import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import Answer from 'App/Modules/Question/Models/Answer'

@injectable()
export class ListAnswerService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository,
    @inject('AnswersRepository')
    public answersRepository: IAnswer.Repository
  ) {}

  public async init(
    userId: string,
    categoryName: string
  ): Promise<{ user_id: string; choices: { question_id: string; choice_id: string }[] }> {
    const user = await this.usersRepository.findBy('id', userId)
    if (!user) throw new NotFoundException('User not found or not available.')

    const answers = await Answer.query()
      .where('user_id', userId)
      .whereHas('question', (q) =>
        q.whereHas('category', (c) => c.whereILike('name', `%${categoryName}%`))
      )

    return {
      user_id: user.id,
      choices: answers.map((answer) => ({
        question_id: answer.question_id,
        choice_id: answer.choice_id,
      })),
    }
  }
}
