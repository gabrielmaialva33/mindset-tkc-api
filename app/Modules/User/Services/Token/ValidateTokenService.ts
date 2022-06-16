import { inject, injectable } from 'tsyringe'
import argon2 from '@phc/argon2'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class ValidateTokenService {
  constructor(
    @inject('TokensRepository')
    private tokensRepository: IToken.Repository
  ) {}

  public async init(code: string): Promise<boolean> {
    const token = await this.tokensRepository.findBy('code', code)
    if (!token) throw new NotFoundException('Code not found or not available.')

    return argon2.verify(token.hash, code)
  }
}
