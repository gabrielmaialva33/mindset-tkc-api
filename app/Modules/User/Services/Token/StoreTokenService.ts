import { inject, injectable } from 'tsyringe'
import { DateTime } from 'luxon'
import validator from 'validator'
import argon2 from '@phc/argon2'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import Token from 'App/Modules/User/Models/Token'

import isBefore = validator.isBefore
import Store = IToken.DTO.Store

import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

@injectable()
export class StoreTokenService {
  constructor(
    @inject('TokensRepository')
    private tokensRepository: IToken.Repository
  ) {}

  public async init(data: Store): Promise<Token> {
    if (data.expired_at)
      if (isBefore(data.expired_at.toString(), DateTime.now().toString()))
        throw new BadRequestException('The expiration date has passed. Please enter a valid date.')

    if (data.is_lifetime && data.expired_at)
      throw new BadRequestException('You cannot set an expiration date for a lifetime token.')

    const hash = await argon2.hash(data.code)

    return this.tokensRepository.store({ ...data, hash })
  }
}
