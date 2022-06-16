import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import { IReply } from 'App/Modules/Question/Interfaces/ReplyInterface'
import Reply from 'App/Modules/Question/Models/Reply'

import DTO = IReply.DTO

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class EditReplyService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository,
    @inject('RepliesRepository')
    private repliesRepository: IReply.Repository
  ) {}

  public async init({ user_id, replies }: DTO.Edit): Promise<Array<InstanceType<typeof Reply>>> {
    const user = await this.usersRepository.findBy('id', user_id)
    if (!user) throw new NotFoundException('User not found or not available.')
    await Reply.query().where({ user_id: user.id }).delete()
    for (let i = 0; i < replies.length; i++) replies[i]['user_id'] = user_id
    return this.repliesRepository.storeMany(replies)
  }
}
