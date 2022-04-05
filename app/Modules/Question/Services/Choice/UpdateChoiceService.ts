import { inject, injectable } from 'tsyringe'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import Choice from 'App/Modules/Question/Models/Choice'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class UpdateChoiceService {
  constructor(
    @inject('ChoicesRepository')
    public choicesRepository: IChoice.Repository
  ) {}

  public async init(choiceId: string, data: IChoice.DTO.Update): Promise<Choice> {
    const choice = await this.choicesRepository.findBy<typeof Choice>('id', choiceId)
    if (!choice) throw new NotFoundException('Choice not found or not available.')

    choice.merge(data)
    await this.choicesRepository.update<Choice>(choice)

    return choice
  }
}
