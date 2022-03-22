import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import User from 'App/Modules/User/Models/User'
import UsersRepository from 'App/Modules/User/Repositories/UsersRepository'

@injectable()
export class StoreUserService {
  constructor(
    @inject(UsersRepository)
    private usersRepository: UsersRepository
  ) {}

  public async init(data: IUser.DTO.Store): Promise<User> {
    return this.usersRepository.store<typeof User>(data)
  }
}
