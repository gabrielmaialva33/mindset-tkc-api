import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  StoreChoiceService,
  EditChoiceService,
  DeleteChoiceService,
} from 'App/Modules/Question/Services/Choice'

import StoreChoiceValidator from 'App/Modules/Question/Validators/Choice/StoreChoiceValidator'
import EditChoiceValidator from 'App/Modules/Question/Validators/Choice/EditChoiceValidator'

export default class ChoicesController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const choiceDTO = await request.validate(StoreChoiceValidator)

    const storeChoice = container.resolve(StoreChoiceService)
    const choice = await storeChoice.init(choiceDTO)

    return response.json(choice)
  }

  public async edit({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: choiceId } = params
    const choiceDTO = await request.validate(EditChoiceValidator)

    const editChoice = container.resolve(EditChoiceService)
    const choice = await editChoice.init(choiceId, choiceDTO)

    return response.json(choice)
  }

  public async delete({ params, response }: HttpContextContract): Promise<void> {
    const { id: choiceId } = params

    const deleteChoice = container.resolve(DeleteChoiceService)
    await deleteChoice.init(choiceId)

    return response.json({ message: 'Choice destroy successfully.' })
  }
}
