import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { StoreReplyService, UpdateReplyService } from 'App/Modules/Question/Services/Reply'

import StoreReplyValidator from 'App/Modules/Question/Validators/Reply/StoreReplyValidator'
import UpdateReplyValidator from 'App/Modules/Question/Validators/Reply/UpdateReplyValidator'

export default class RepliesController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const replyDTO = await request.validate(StoreReplyValidator)

    const storeReply = container.resolve(StoreReplyService)
    const reply = await storeReply.init(replyDTO)

    return response.json(reply)
  }

  public async update({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: replyId } = params
    const replyDTO = await request.validate(UpdateReplyValidator)

    const updateReply = container.resolve(UpdateReplyService)
    const reply = await updateReply.init(replyId, replyDTO)

    return response.json(reply)
  }
}
