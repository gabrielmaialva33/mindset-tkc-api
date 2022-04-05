import { inject, singleton } from 'tsyringe'

import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import UsersRepository from 'App/Modules/User/Repositories/UsersRepository'
import ChoicesRepository from 'App/Modules/Question/Repositories/ChoicesRepository'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import Database from '@ioc:Adonis/Lucid/Database'

@singleton()
export class AttachAnswerService {
  constructor(
    @inject(UsersRepository)
    private usersRepository: UsersRepository,

    @inject(ChoicesRepository)
    public choicesRepository: ChoicesRepository
  ) {}

  public async init({ user_id, choices }: IAnswer.DTO.Store): Promise<void> {
    const user = await this.usersRepository.findBy('id', user_id)
    if (!user) throw new NotFoundException('User not found or not available.')

    for (let i = 0; i < choices.length; i++) {
      const choice = await this.choicesRepository.findBy('id', choices[i].choice_id)
      if (!choice) throw new NotFoundException('Choice not found or not available.')

      await Database.insertQuery().table('answers').insert({
        user_id: user_id,
        question_id: choices[i].question_id,
        choice_id: choices[i].choice_id,
      })
    }
  }
}
