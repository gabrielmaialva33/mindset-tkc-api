import { inject, injectable } from 'tsyringe'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import User from 'App/Modules/User/Models/User'
import Token from 'App/Modules/User/Models/Token'

import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

@injectable()
export class AttachUserOnTokenService {
  constructor(
    @inject('TokensRepository')
    private tokensRepository: IToken.Repository
  ) {}

  public async init(user: User, code: string): Promise<void> {
    const token = await this.tokensRepository.findBy<typeof Token>('code', code)

    if (!token) throw new BadRequestException('Code not found or not available.')

    token.merge({ is_revoked: true })
    await token.save()

    return user.related('tokens').attach([token.id])
  }
}
