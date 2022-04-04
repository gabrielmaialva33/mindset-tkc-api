import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateReplyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    user_id: schema.string.optional({ escape: true, trim: true }, [
      rules.exists({
        table: 'users',
        column: 'id',
        whereNot: { is_deleted: true },
      }),
    ]),
    reply_id: schema.string.optional({ escape: true, trim: true }, []),
    value: schema.string.optional({ escape: true, trim: true }, []),
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
