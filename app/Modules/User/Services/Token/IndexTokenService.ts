import { inject, singleton } from 'tsyringe'

import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'
import { PaginateParams } from 'App/Shared/Interfaces/BaseInterface'

@singleton()
export class IndexTokenService {
  constructor(
    @inject(TokensRepository)
    private tokensRepository: TokensRepository
  ) {}

  public async init({ page, perPage }: PaginateParams, closer: string) {
    if (closer === 'revoked')
      return this.tokensRepository.index(
        { page, perPage },
        {
          where: { is_revoked: true },
        }
      )

    if (closer === 'lifetime')
      return this.tokensRepository.index(
        { page, perPage },
        {
          where: { is_lifetime: true },
        }
      )

    return this.tokensRepository.index({ page, perPage })
  }
}
