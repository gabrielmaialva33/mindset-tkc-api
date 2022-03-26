import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateChoiceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    question_id: schema.string.optional({ escape: true, trim: true }, [
      rules.exists({
        table: 'questions',
        column: 'id',
        whereNot: { is_deleted: true },
      }),
    ]),
    sentence: schema.string.optional({ escape: true, trim: true }, []),
    value: schema.number.optional([rules.unsigned()]),
    order: schema.number.optional([rules.unsigned()]),
  })

  public messages = {}
}
