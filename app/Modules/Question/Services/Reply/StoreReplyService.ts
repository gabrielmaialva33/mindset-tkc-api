import { inject, injectable } from 'tsyringe'

import { IReply } from 'App/Modules/Question/Interfaces/ReplyInterface'
import Reply from 'App/Modules/Question/Models/Reply'

import DTO = IReply.DTO

@injectable()
export class StoreReplyService {
  constructor(
    @inject('RepliesRepository')
    private repliesRepository: IReply.Repository
  ) {}

  public async init(data: DTO.Store): Promise<Reply> {
    return this.repliesRepository.store(data)
  }
}
