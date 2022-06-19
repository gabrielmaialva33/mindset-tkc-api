import { container, inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import User from 'App/Modules/User/Models/User'

import { ValidateTokenService } from 'App/Modules/User/Services/Token'
import { AttachUserOnTokenService } from 'App/Modules/User/Services/User'

import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

@injectable()
export class StoreUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository
  ) {}

  private validate = container.resolve(ValidateTokenService)
  private attach = container.resolve(AttachUserOnTokenService)

  public async init(data: IUser.DTO.Store): Promise<User> {
    const { code, ...dto } = data
    const isValid = await this.validate.init(code)
    if (!isValid) throw new BadRequestException('Token invalid.', 401)

    const user = await this.usersRepository.store(dto)
    await this.attach.init(user, code)

    await user.refresh()
    await user.load('tokens')

    return user
  }
}
