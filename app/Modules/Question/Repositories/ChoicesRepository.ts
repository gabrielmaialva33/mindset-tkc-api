import BaseRepository from 'App/Shared/Repositories/BaseRepository'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import Choice from 'App/Modules/Question/Models/Choice'

export default class ChoicesRepository
  extends BaseRepository<typeof Choice>
  implements IChoice.Repository
{
  constructor() {
    super(Choice)
  }
}
