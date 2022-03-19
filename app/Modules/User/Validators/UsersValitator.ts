import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class Store {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ escape: true, trim: true }, [rules.minLength(3), rules.maxLength(80)]),
    email: schema.string({ trim: true }, [
      rules.email({}),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string.optional({ trim: true }),
  })

  public messages = {
    email: 'E-mail não é valido.',
    unique: 'Já foi usado.',
    minLength: 'Requer mais que 3 caracteres.',
    maxLength: 'Não pode ter mais que 80 caracteres.',
    required: 'Não pode ficar em branco.',
  }
}

export class Update {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ escape: true, trim: true }, [
      rules.minLength(3),
      rules.maxLength(80),
    ]),
    email: schema.string.optional({ trim: true }, [rules.email({})]),
    password: schema.string.optional({ trim: true }),
  })

  public messages = {
    email: 'E-mail não é valido.',
    unique: 'Já foi usado.',
    minLength: 'Requer mais que 3 caracteres.',
    maxLength: 'Não pode ter mais que 80 caracteres.',
    required: 'Não pode ficar em branco.',
  }
}
