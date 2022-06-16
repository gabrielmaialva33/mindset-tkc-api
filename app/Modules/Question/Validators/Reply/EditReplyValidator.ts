import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EditReplyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    user_id: schema.string({ escape: true, trim: true }, [
      rules.exists({
        table: 'users',
        column: 'id',
        whereNot: { is_deleted: true },
      }),
    ]),
    replies: schema.array([]).members(
      schema.object([]).members({
        choice: schema.string({ trim: true, escape: true }, []),
        value: schema.number.optional([rules.unsigned()]),
      })
    ),
  })

  public messages = {}
}
