import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  StoreChoiceService,
  UpdateChoiceService,
  DestroyChoiceService,
} from 'App/Modules/Question/Services/Choice'

import StoreChoiceValidator from 'App/Modules/Question/Validators/Choice/StoreChoiceValidator'
import UpdateChoiceValidator from 'App/Modules/Question/Validators/Choice/UpdateChoiceValidator'

export default class ChoicesController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const choiceDTO = await request.validate(StoreChoiceValidator)

    const storeService = container.resolve(StoreChoiceService)
    const choice = await storeService.init(choiceDTO)

    return response.json(choice)
  }

  public async update({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: choiceId } = params
    const choiceDTO = await request.validate(UpdateChoiceValidator)

    const updateService = container.resolve(UpdateChoiceService)
    const choice = await updateService.init(choiceId, choiceDTO)

    return response.json(choice)
  }

  public async destroy({ params, response }: HttpContextContract): Promise<void> {
    const { id: choiceId } = params

    const destroyService = container.resolve(DestroyChoiceService)
    await destroyService.init(choiceId)

    return response.json({ message: 'Choice destroy successfully' })
  }
}
