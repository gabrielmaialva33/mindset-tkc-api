import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { AttachAnswerService, DetachAnswerService } from 'App/Modules/Question/Services/Answer'

import StoreAnswerValidator from 'App/Modules/Question/Validators/Answer/StoreAnswerValidator'
import UpdateAnswerValidator from 'App/Modules/Question/Validators/Answer/UpdateAnswerValidator'

export default class AnswersController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const answerDto = await request.validate(StoreAnswerValidator)

    const storeService = container.resolve(AttachAnswerService)
    await storeService.init(answerDto)

    return response.json({ message: 'Attached answer successfully' })
  }

  public async destroy({ request, response }: HttpContextContract): Promise<void> {
    const answerDto = await request.validate(UpdateAnswerValidator)

    const updateService = container.resolve(DetachAnswerService)
    await updateService.init(answerDto)

    return response.json({ message: 'Detached answer successfully' })
  }
}
