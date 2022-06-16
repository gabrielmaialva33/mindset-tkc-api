import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  GetQuestionService,
  StoreQuestionService,
  EditQuestionService,
  DeleteQuestionService,
} from 'App/Modules/Question/Services/Question'

import StoreQuestionValidator from 'App/Modules/Question/Validators/Question/StoreQuestionValidator'
import EditQuestionValidator from 'App/Modules/Question/Validators/Question/EditQuestionValidator'

export default class QuestionsController {
  public async get({ params, response }: HttpContextContract): Promise<void> {
    const { id: questionId } = params

    const getQuestion = container.resolve(GetQuestionService)
    const question = await getQuestion.init(questionId)

    return response.json(question)
  }

  public async store({ request, response }: HttpContextContract): Promise<void> {
    const questionDTO = await request.validate(StoreQuestionValidator)

    const storeQuestion = container.resolve(StoreQuestionService)
    const question = await storeQuestion.init(questionDTO)

    return response.json(question)
  }

  public async edit({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: questionId } = params
    const questionDTO = await request.validate(EditQuestionValidator)

    const editQuestion = container.resolve(EditQuestionService)
    const question = await editQuestion.init(questionId, questionDTO)

    return response.json(question)
  }

  public async delete({ params, response }: HttpContextContract): Promise<void> {
    const { id: questionId } = params

    const deleteQuestion = container.resolve(DeleteQuestionService)
    await deleteQuestion.init(questionId)

    return response.json({ message: 'Question deleted successfully.' })
  }
}
