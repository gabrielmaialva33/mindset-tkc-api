import { inject, singleton } from 'tsyringe'

import User from 'App/Modules/User/Models/User'
import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'

import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

@singleton()
export class AttachUserOnTokenService {
  constructor(
    @inject(TokensRepository)
    private tokensRepository: TokensRepository
  ) {}

  public async init(user: User, code: string): Promise<void> {
    const token = await this.tokensRepository.findBy('code', code, {
      where: { is_revoked: false },
    })

    if (!token) throw new BadRequestException('Code não encontrado ou invalido.')

    token.merge({ is_revoked: true })
    await token.save()

    return user.related('tokens').attach([token.id])
  }
}
