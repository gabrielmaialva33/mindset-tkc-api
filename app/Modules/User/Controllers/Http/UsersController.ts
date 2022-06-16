import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { StoreUserService } from 'App/Modules/User/Services/User'
import StoreUserValidator from 'App/Modules/User/Validators/User/StoreUserValidator'

export default class UsersController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(StoreUserValidator)

    const storeUser = container.resolve(StoreUserService)
    const user = await storeUser.init(data)

    return response.json(user)
  }
}
