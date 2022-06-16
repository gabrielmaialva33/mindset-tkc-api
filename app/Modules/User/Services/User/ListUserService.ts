import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import DTO = IUser.DTO

@injectable()
export class ListUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository
  ) {}

  public async init({ page = 1, perPage = 10, search = '' }: DTO.List) {
    return this.usersRepository.listWithPagination({
      page,
      perPage,
      scopes: (scopes) => scopes.searchQueryScope(search),
    })
  }
}
