import { inject, singleton } from 'tsyringe'
import argon2 from '@phc/argon2'

import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@singleton()
export class ValidateTokenService {
  constructor(
    @inject(TokensRepository)
    private tokensRepository: TokensRepository
  ) {}

  public async init(code: string): Promise<boolean> {
    const token = await this.tokensRepository.findBy('code', code, { where: { is_revoked: false } })
    if (!token) throw new NotFoundException('Code não encontrado ou invalido.')

    return argon2.verify(token.hash, code)
  }
}
