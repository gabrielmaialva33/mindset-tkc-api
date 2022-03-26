import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreChoiceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    question_id: schema.string({ escape: true, trim: true }, [
      rules.exists({
        table: 'questions',
        column: 'id',
        whereNot: { is_deleted: true },
      }),
    ]),
    sentence: schema.string({ escape: true, trim: true }, []),
    value: schema.number([rules.unsigned()]),
    order: schema.number.optional([rules.unsigned()]),
  })

  public messages = {}
}
