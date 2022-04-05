import { inject, injectable } from 'tsyringe'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import Token from 'App/Modules/User/Models/Token'

import { PaginateContract } from 'App/Shared/Interfaces/BaseInterface'

@injectable()
export class IndexTokenService {
  constructor(
    @inject('TokensRepository')
    private tokensRepository: IToken.Repository
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
