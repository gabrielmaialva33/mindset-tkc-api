import { singleton, inject } from 'tsyringe'

import Choice from 'App/Modules/Question/Models/Choice'
import ChoicesRepository from 'App/Modules/Question/Repositories/ChoicesRepository'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@singleton()
export class DestroyChoiceService {
  constructor(
    @inject(ChoicesRepository)
    public choicesRepository: ChoicesRepository
  ) {}

  public async init(choiceId): Promise<void> {
    const choice = await this.choicesRepository.findBy<typeof Choice>('id', choiceId)
    if (!choice) throw new NotFoundException('Choice not found or not available.')

    choice.merge({ is_deleted: true })
    await this.choicesRepository.update<Choice>(choice)
  }
}
