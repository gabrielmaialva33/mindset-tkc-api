import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import User from 'App/Modules/User/Models/User'
import DTO = IUser.DTO
import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class EditUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository
  ) {}

  public async init(userId: string, data: DTO.Edit): Promise<User> {
    const user = await this.usersRepository.findBy('id', userId)
    if (!user) throw new NotFoundException('User not found or not available.')

    user.merge(data)
    await this.usersRepository.save(user)

    return user
  }
}
