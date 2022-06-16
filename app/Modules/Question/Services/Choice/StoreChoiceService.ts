import { inject, injectable } from 'tsyringe'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import Choice from 'App/Modules/Question/Models/Choice'
import DTO = IChoice.DTO

@injectable()
export class StoreChoiceService {
  constructor(
    @inject('ChoicesRepository')
    public choicesRepository: IChoice.Repository
  ) {}

  public async init(data: DTO.Store): Promise<Choice> {
    return this.choicesRepository.store(data)
  }
}
