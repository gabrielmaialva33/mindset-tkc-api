import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  AttachAnswerService,
  DetachAnswerService,
  ListAnswerService,
} from 'App/Modules/Question/Services/Answer'

import StoreAnswerValidator from 'App/Modules/Question/Validators/Answer/StoreAnswerValidator'
import UpdateAnswerValidator from 'App/Modules/Question/Validators/Answer/UpdateAnswerValidator'

export default class AnswersController {
  public async list({ request, response }: HttpContextContract): Promise<void> {
    const userId = request.input('user_id', null)
    const categoryName = request.input('category', '')

    const listAnswer = container.resolve(ListAnswerService)
    const answers = await listAnswer.init(userId, categoryName)

    return response.json(answers)
  }

  public async attach({ request, response }: HttpContextContract): Promise<void> {
    const answerDto = await request.validate(StoreAnswerValidator)

    const attachAnswer = container.resolve(AttachAnswerService)
    await attachAnswer.init(answerDto)

    return response.json({ message: 'Attached answer successfully.' })
  }

  public async detach({ request, response }: HttpContextContract): Promise<void> {
    const answerDto = await request.validate(UpdateAnswerValidator)

    const detachAnswer = container.resolve(DetachAnswerService)
    await detachAnswer.init(answerDto)

    return response.json({ message: 'Detached answer successfully.' })
  }
}
