import { inject, singleton } from 'tsyringe'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import Choice from 'App/Modules/Question/Models/Choice'
import ChoicesRepository from 'App/Modules/Question/Repositories/ChoicesRepository'

@singleton()
export class StoreChoiceService {
  constructor(
    @inject(ChoicesRepository)
    public choicesRepository: ChoicesRepository
  ) {}

  public async init(data: IChoice.DTO.Store): Promise<Choice> {
    return this.choicesRepository.store<typeof Choice>(data)
  }
}
