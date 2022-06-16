import { inject, injectable } from 'tsyringe'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class DeleteChoiceService {
  constructor(
    @inject('ChoicesRepository')
    public choicesRepository: IChoice.Repository
  ) {}

  public async init(choiceId): Promise<void> {
    const choice = await this.choicesRepository.findBy('id', choiceId)
    if (!choice) throw new NotFoundException('Choice not found or not available.')

    choice.merge({ is_deleted: true })
    await this.choicesRepository.save(choice)
  }
}
