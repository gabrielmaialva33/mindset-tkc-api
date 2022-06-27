import { inject, injectable } from 'tsyringe'
import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class ListAnswerService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository,
    @inject('AnswersRepository')
    public answersRepository: IAnswer.Repository
  ) {}

  public async init(
    userId: string
  ): Promise<{ user_id: string; choices: { question_id: string; choice_id: string }[] }> {
    const user = await this.usersRepository.findBy('id', userId)
    if (!user) throw new NotFoundException('User not found or not available.')

    const answers = await this.answersRepository.list({
      clauses: {
        where: { user_id: userId },
      },
    })

    return {
      user_id: user.id,
      choices: answers.map((answer) => ({
        question_id: answer.question_id,
        choice_id: answer.choice_id,
      })),
    }
  }
}
