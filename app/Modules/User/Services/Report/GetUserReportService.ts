import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

@injectable()
export class GetUserReportService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository
  ) {}

  public async run(userId: string): Promise<void> {
    console.log(userId, this.usersRepository)
  }
}
