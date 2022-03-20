import User from 'App/Modules/User/Models/User'

import BaseRepository from 'App/Shared/Repositories/BaseRepository'
import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

export default class UsersRepository
  extends BaseRepository<typeof User>
  implements IUser.Repository
{
  constructor() {
    super(User)
  }
}
