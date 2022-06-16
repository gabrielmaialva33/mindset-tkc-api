import { inject, injectable } from 'tsyringe'

import { PaginateContractType, PaginateParams } from 'App/Shared/Interfaces/BaseInterface'
import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import Token from 'App/Modules/User/Models/Token'

@injectable()
export class ListTokenService {
  constructor(
    @inject('TokensRepository')
    private tokensRepository: IToken.Repository
  ) {}

  public async init(
    { page, perPage }: PaginateParams<typeof Token>,
    closer: string
  ): Promise<PaginateContractType<typeof Token>> {
    if (closer === 'revoked')
      return this.tokensRepository.listWithPagination({
        page,
        perPage,
        clauses: { where: { is_revoked: true } },
      })

    if (closer === 'lifetime')
      return this.tokensRepository.listWithPagination({
        page,
        perPage,
        clauses: { where: { is_lifetime: true } },
      })

    return this.tokensRepository.listWithPagination({ page, perPage })
  }
}
