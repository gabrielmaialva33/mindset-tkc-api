import { inject, injectable } from 'tsyringe'
import { LucidRow } from '@ioc:Adonis/Lucid/Orm'

import UsersRepository from 'App/Modules/User/Repositories/UsersRepository'
import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

@injectable()
export class StoreUserService {
  constructor(
    @inject(UsersRepository)
    private usersRepository: UsersRepository
  ) {}

  public async init(data: IUser.DTO.Store): Promise<LucidRow> {
    return this.usersRepository.store(data)
  }
}
