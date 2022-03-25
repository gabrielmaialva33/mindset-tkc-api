import { inject, singleton } from 'tsyringe'

import { PaginateContract } from 'App/Shared/Interfaces/BaseInterface'
import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'
import Token from 'App/Modules/User/Models/Token'

@singleton()
export class IndexTokenService {
  constructor(
    @inject(TokensRepository)
    private tokensRepository: TokensRepository
  ) {}

  public async init({ page, perPage }: PaginateContract<typeof Token>, closer: string) {
    if (closer === 'revoked')
      return this.tokensRepository.index({
        page,
        perPage,
        closers: { where: { is_revoked: true } },
      })

    if (closer === 'lifetime')
      return this.tokensRepository.index({
        page,
        perPage,
        closers: { where: { is_lifetime: true } },
      })

    return this.tokensRepository.index({ page, perPage })
  }
}
