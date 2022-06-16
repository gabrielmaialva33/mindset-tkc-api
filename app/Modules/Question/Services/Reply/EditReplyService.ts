import { inject, injectable } from 'tsyringe'

import { IReply } from 'App/Modules/Question/Interfaces/ReplyInterface'
import Reply from 'App/Modules/Question/Models/Reply'

import DTO = IReply.DTO

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class EditReplyService {
  constructor(
    @inject('RepliesRepository')
    private repliesRepository: IReply.Repository
  ) {}

  public async init(replyId: string, data: DTO.Edit): Promise<Reply> {
    const reply = await this.repliesRepository.findBy('id', replyId)
    if (!reply) throw new NotFoundException('Question not found or not available.')

    reply.merge(data)
    return this.repliesRepository.store(data)
  }
}
