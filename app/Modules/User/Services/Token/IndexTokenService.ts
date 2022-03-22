import { inject, singleton } from 'tsyringe'

import Token from 'App/Modules/User/Models/Token'
import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'
import { PaginateParams } from 'App/Shared/Interfaces/BaseInterface'

@singleton()
export class IndexTokenService {
  constructor(
    @inject(TokensRepository)
    private tokensRepository: TokensRepository
  ) {}

  public async init({ page, perPage }: PaginateParams) {
    return this.tokensRepository.index<typeof Token>({ page, perPage })
  }
}
