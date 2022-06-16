import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  ListTokenService,
  StoreTokenService,
  GenerateTokenService,
  ValidateTokenService,
} from 'App/Modules/User/Services/Token'

import StoreTokenValidator from 'App/Modules/User/Validators/Token/StoreTokenValidator'
import BadRequestException from 'App/Shared/Exceptions/BadRequestException'

export default class TokensController {
  public async list({ request, response }: HttpContextContract): Promise<void> {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    const closer = request.input('closer', '')

    const listTokens = container.resolve(ListTokenService)
    const tokens = await listTokens.init({ page, perPage }, closer)

    return response.json(tokens)
  }

  public async store({ request, response }: HttpContextContract): Promise<void> {
    const tokenDTO = await request.validate(StoreTokenValidator)

    const storeToken = container.resolve(StoreTokenService)
    const token = await storeToken.init(tokenDTO)

    return response.json(token)
  }

  /**
   * Generate Tokens
   */
  public async generate({ request, response }: HttpContextContract): Promise<void> {
    const size = request.input('size', 3)
    const amount = request.input('amount', 1)

    const tokens = new GenerateTokenService().init(Number(size), Number(amount))

    return response.json(tokens)
  }

  /**
   * Validate Tokens
   */
  public async validate({ params, response }: HttpContextContract): Promise<void> {
    const { code } = params
    if (!code) throw new BadRequestException('Por favor passe um code a ser validado')

    const validateToken = container.resolve(ValidateTokenService)
    await validateToken.init(code)

    return response.json({
      message: 'Code está válido.',
      status: 200,
    })
  }
}
