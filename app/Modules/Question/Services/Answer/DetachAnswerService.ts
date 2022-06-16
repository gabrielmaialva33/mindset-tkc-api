import { inject, singleton } from 'tsyringe'

import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import DTO = IAnswer.DTO
import Database from '@ioc:Adonis/Lucid/Database'

@singleton()
export class DetachAnswerService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository,
    @inject('ChoicesRepository')
    public choicesRepository: IChoice.Repository,
    @inject('AnswersRepository')
    public answersRepository: IAnswer.Repository
  ) {}

  public async init({ user_id, choices }: DTO.Edit): Promise<void> {
    const user = await this.usersRepository.findBy('id', user_id)
    if (!user) throw new NotFoundException('User not found or not available.')

    if (choices && choices.length > 0) {
      for (let i = 0; i < choices.length; i++) {
        const choice = await this.choicesRepository.findBy('id', choices[i].choice_id)
        if (!choice) throw new NotFoundException('Choice not found or not available.')

        const answer = await this.answersRepository.findBy('user_id', user.id, {
          clauses: {
            where: { question_id: choices[i].question_id },
          },
        })
        if (answer) {
          user.related('choices').detach([answer.choice_id])
          await Database.insertQuery().table('answers').insert({
            user_id: user_id,
            question_id: choices[i].question_id,
            choice_id: choices[i].choice_id,
          })
        }
      }
    }
  }
}
