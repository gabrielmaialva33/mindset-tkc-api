import BaseRepository from 'App/Shared/Repositories/BaseRepository'

import { IReply } from 'App/Modules/Question/Interfaces/ReplyInterface'
import Reply from 'App/Modules/Question/Models/Reply'

export default class RepliesRepository
  extends BaseRepository<typeof Reply>
  implements IReply.Repository
{
  constructor() {
    super(Reply)
  }
}
