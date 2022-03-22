import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ escape: true, trim: true }, [rules.minLength(3), rules.maxLength(80)]),
    email: schema.string({ trim: true }, [
      rules.email({}),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    code: schema.string({ escape: true, trim: true }, [
      rules.exists({ table: 'tokens', column: 'code', whereNot: { is_revoked: true } }),
    ]),
    password: schema.string.optional({ trim: true }, [rules.confirmed()]),
  })

  public messages = {
    'email': 'E-mail não é valido.',
    'unique': 'Já foi usado.',
    'minLength': 'Requer mais que 3 caracteres.',
    'maxLength': 'Não pode ter mais que 80 caracteres.',
    'required': 'Não pode ficar em branco.',
    'code.exists': 'Code não encontrado ou invalido.',
  }
}
