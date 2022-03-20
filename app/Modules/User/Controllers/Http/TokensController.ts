import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { StoreTokenService, GenerateTokenService } from 'App/Modules/User/Services/Token'
import { Store } from 'App/Modules/User/Validators/TokensValidstor'

export default class TokensController {
  public async index({}: HttpContextContract): Promise<void> {}

  public async show({}: HttpContextContract): Promise<void> {}

  public async store({ request, response }: HttpContextContract): Promise<void> {
    const tokenDTO = await request.validate(Store)

    const storeService = container.resolve(StoreTokenService)
    const token = await storeService.init(tokenDTO)

    return response.json(token)
  }

  public async generate({ request, response }: HttpContextContract): Promise<void> {
    const size = request.input('size', 3)
    const amount = request.input('amount', 1)

    const tokens = new GenerateTokenService().init(Number(size), Number(amount))

    return response.json(tokens)
  }
}
