import { singleton, inject } from 'tsyringe'

import { IReply } from 'App/Modules/Question/Interfaces/ReplyInterface'
import RepliesRepository from 'App/Modules/Question/Repositories/RepliesRepository'
import Reply from 'App/Modules/Question/Models/Reply'

import DTO = IReply.DTO

@singleton()
export class StoreReplyService {
  constructor(
    @inject(RepliesRepository)
    private repliesRepository: RepliesRepository
  ) {}

  public async init(data: DTO.Store): Promise<Reply> {
    return this.repliesRepository.store<typeof Reply>(data)
  }
}
