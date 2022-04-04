import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreReplyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    user_id: schema.string({ escape: true, trim: true }, [
      rules.exists({
        table: 'users',
        column: 'id',
        whereNot: { is_deleted: true },
      }),
    ]),
    reply_id: schema.string({ escape: true, trim: true }, []),
    value: schema.string({ escape: true, trim: true }, []),
  })

  public messages = {}
}
