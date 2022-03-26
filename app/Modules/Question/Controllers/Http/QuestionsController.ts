import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  DestroyQuestionService,
  StoreQuestionService,
  UpdateQuestionService,
} from 'App/Modules/Question/Services/Question'

import StoreQuestionValidator from 'App/Modules/Question/Validators/Question/StoreQuestionValidator'
import UpdateQuestionValidator from 'App/Modules/Question/Validators/Question/UpdateQuestionValidator'

export default class QuestionsController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const questionDTO = await request.validate(StoreQuestionValidator)

    const storeService = container.resolve(StoreQuestionService)
    const question = await storeService.init(questionDTO)

    return response.json(question)
  }

  public async update({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: questionId } = params
    const questionDTO = await request.validate(UpdateQuestionValidator)

    const updateService = container.resolve(UpdateQuestionService)
    const question = await updateService.init(questionId, questionDTO)

    return response.json(question)
  }

  public async destroy({ params, response }: HttpContextContract): Promise<void> {
    const { id: questionId } = params

    const destroyService = container.resolve(DestroyQuestionService)
    await destroyService.init(questionId)

    return response.json({ message: 'Question deleted successfully' })
  }
}
