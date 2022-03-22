import { container, inject, singleton } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import User from 'App/Modules/User/Models/User'
import UsersRepository from 'App/Modules/User/Repositories/UsersRepository'

import { ValidateTokenService } from 'App/Modules/User/Services/Token'
import { AttachUserOnTokenService } from 'App/Modules/User/Services/User'

import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

@singleton()
export class StoreUserService {
  constructor(
    @inject(UsersRepository)
    private usersRepository: UsersRepository
  ) {}

  private validate = container.resolve(ValidateTokenService)
  private attach = container.resolve(AttachUserOnTokenService)

  public async init({ name, email, password, code }: IUser.DTO.Store): Promise<User> {
    const isValid = await this.validate.init(code)
    if (!isValid) throw new BadRequestException('Code inválido.', 404)

    const user = await this.usersRepository.store<typeof User>({ name, email, password })

    await this.attach.init(user, code)

    await user.refresh()
    await user.load('tokens')

    return user
  }
}
