import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { StoreReplyService, EditReplyService } from 'App/Modules/Question/Services/Reply'

import StoreReplyValidator from 'App/Modules/Question/Validators/Reply/StoreReplyValidator'
import EditReplyValidator from 'App/Modules/Question/Validators/Reply/EditReplyValidator'

export default class RepliesController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const replyDTO = await request.validate(StoreReplyValidator)

    const storeReply = container.resolve(StoreReplyService)
    const reply = await storeReply.init(replyDTO)

    return response.json(reply)
  }

  public async edit({ request, response }: HttpContextContract): Promise<void> {
    const replyDTO = await request.validate(EditReplyValidator)

    const editReply = container.resolve(EditReplyService)
    const reply = await editReply.init(replyDTO)

    return response.json(reply)
  }
}
