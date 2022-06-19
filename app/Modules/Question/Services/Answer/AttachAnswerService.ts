import { inject, injectable } from 'tsyringe'
import Database from '@ioc:Adonis/Lucid/Database'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import DTO = IAnswer.DTO

@injectable()
export class AttachAnswerService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository,
    @inject('ChoicesRepository')
    public choicesRepository: IChoice.Repository
  ) {}

  public async init({ user_id, choices }: DTO.Store): Promise<void> {
    const user = await this.usersRepository.findBy('id', user_id)
    if (!user) throw new NotFoundException('User not found or not available.')

    for (let i = 0; i < choices.length; i++)
      await Database.insertQuery()
        .table('answers')
        .insert({
          user_id: user_id,
          ...choices[i],
        })
  }
}
