import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { StoreUserService } from 'App/Modules/User/Services/User'
import { Store } from 'App/Modules/User/Validators/UsersValitator'

export default class UsersController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(Store)

    const storeService = container.resolve(StoreUserService)
    const user = await storeService.init(data)

    return response.json(user)
  }
}
