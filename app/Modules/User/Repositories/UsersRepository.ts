import User from 'App/Modules/User/Models/User'
import { IUser } from 'App/Modules/User/Interfaces/UserInterface'

import Repository = IUser.Repository
import BaseRepository from 'App/Shared/Repositories/BaseRepository'

export default class UsersRepository extends BaseRepository implements Repository {
  constructor() {
    super(User)
  }
}
