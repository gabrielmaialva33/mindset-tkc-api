import { inject, singleton } from 'tsyringe'

import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import UsersRepository from 'App/Modules/User/Repositories/UsersRepository'
import ChoicesRepository from 'App/Modules/Question/Repositories/ChoicesRepository'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import DTO = IAnswer.DTO

@singleton()
export class DetachAnswerService {
  constructor(
    @inject(UsersRepository)
    private usersRepository: UsersRepository,
    @inject(ChoicesRepository)
    public choicesRepository: ChoicesRepository
  ) {}

  public async init({ user_id, choice_id }: DTO.Edit): Promise<void> {
    const user = await this.usersRepository.findBy('id', user_id)
    if (!user) throw new NotFoundException('User not found or not available.')

    const choice = await this.choicesRepository.findBy('id', choice_id)
    if (!choice) throw new NotFoundException('Choice not found or not available.')

    return user.related('choices').detach([choice.id])
  }
}
