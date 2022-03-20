import BaseRepository from 'App/Shared/Repositories/BaseRepository'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import Token from 'App/Modules/User/Models/Token'

export default class TokensRepository
  extends BaseRepository<typeof Token>
  implements IToken.Repository
{
  constructor() {
    super(Token)
  }
}
