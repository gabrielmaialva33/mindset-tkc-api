import { injectable, inject } from 'tsyringe'
import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import argon2 from '@phc/argon2'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'

import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

import Store = IToken.DTO.Store
import validator from 'validator'
import isBefore = validator.isBefore

@injectable()
export class StoreTokenService {
  constructor(
    @inject(TokensRepository)
    private tokensRepository: TokensRepository
  ) {}

  public async init(data: Store): Promise<LucidRow> {
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
