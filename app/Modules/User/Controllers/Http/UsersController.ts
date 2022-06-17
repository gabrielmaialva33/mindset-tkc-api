import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { EditUserService, ListUserService, StoreUserService } from 'App/Modules/User/Services/User'
import StoreUserValidator from 'App/Modules/User/Validators/User/StoreUserValidator'
import EditUserValidator from 'App/Modules/User/Validators/User/EditUserValidator'

export default class UsersController {
  public async list({ request, response }: HttpContextContract): Promise<void> {
    const page = request.input('page', 1)
    const perPage = request.input('per_page', 10)
    const search = request.input('search', '')

    const listUsers = container.resolve(ListUserService)
    const users = await listUsers.init({ page, perPage, search })

    return response.json(users)
  }

  public async store({ request, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(StoreUserValidator)

    const storeUser = container.resolve(StoreUserService)
    const user = await storeUser.init(data)

    return response.json(user)
  }

  public async edit({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: userId } = params
    const userDto = await request.validate(EditUserValidator)

    const editUser = container.resolve(EditUserService)
    const user = await editUser.init(userId, userDto)

    return response.json(user)
  }
}
