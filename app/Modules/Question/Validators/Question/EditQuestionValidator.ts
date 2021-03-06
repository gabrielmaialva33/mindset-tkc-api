import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EditQuestionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    category_id: schema.string.optional({ escape: true, trim: true }, [
      rules.exists({
        table: 'categories',
        column: 'id',
        whereNot: { is_deleted: true },
      }),
    ]),
    sentence: schema.string.optional({ escape: true, trim: true }, []),
    type: schema.enum.optional(['common', 'multiple'] as const),
    min_choice: schema.number.optional([rules.requiredWhen('type', '=', 'multiple')]),
    max_choice: schema.number.optional([rules.requiredWhen('type', '=', 'multiple')]),
    order: schema.number.optional([rules.unsigned()]),
  })

  public messages = {}
}
