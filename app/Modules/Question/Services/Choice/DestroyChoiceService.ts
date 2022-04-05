import { inject, injectable } from 'tsyringe'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import Choice from 'App/Modules/Question/Models/Choice'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class DestroyChoiceService {
  constructor(
    @inject('ChoicesRepository')
    public choicesRepository: IChoice.Repository
  ) {}

  public async init(choiceId): Promise<void> {
    const choice = await this.choicesRepository.findBy<typeof Choice>('id', choiceId)
    if (!choice) throw new NotFoundException('Choice not found or not available.')

    choice.merge({ is_deleted: true })
    await this.choicesRepository.update<Choice>(choice)
  }
}
