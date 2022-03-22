import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreTokenValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ escape: true, trim: true }, []),
    code: schema.string({ escape: true, trim: true }, [
      rules.unique({ table: 'tokens', column: 'code' }),
    ]),
    type: schema.string.optional({ escape: true, trim: true }, []),
    is_lifetime: schema.boolean.optional([rules.requiredIfNotExists('expired_at')]),
    expired_at: schema.date.optional({}, [rules.requiredIfNotExists('is_lifetime')]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
