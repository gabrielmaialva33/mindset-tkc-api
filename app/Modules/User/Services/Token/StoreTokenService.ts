import { inject, singleton } from 'tsyringe'
import { DateTime } from 'luxon'
import validator from 'validator'
import argon2 from '@phc/argon2'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import Token from 'App/Modules/User/Models/Token'
import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'

import isBefore = validator.isBefore
import Store = IToken.DTO.Store

import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

@singleton()
export class StoreTokenService {
  constructor(
    @inject(TokensRepository)
    private tokensRepository: TokensRepository
  ) {}

  public async init(data: Store): Promise<Token> {
    if (data.expired_at)
      if (isBefore(data.expired_at.toString(), DateTime.now().toString()))
        throw new BadRequestException(
          'A data de expiração já passou. Por favor coloque uma data válida.'
        )

    if (data.is_lifetime && data.expired_at)
      throw new BadRequestException(
        'Você não pode definir uma data de expiração pata um token vitalício.'
      )

    const hash = await argon2.hash(data.code)

    return this.tokensRepository.store({ ...data, hash })
  }
}
