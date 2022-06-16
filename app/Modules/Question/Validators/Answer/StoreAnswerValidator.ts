import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreAnswerValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    user_id: schema.string({ escape: true, trim: true }, [
      rules.exists({
        table: 'users',
        column: 'id',
        whereNot: { is_deleted: true },
      }),
    ]),
    choices: schema.array([]).members(
      schema.object([]).members({
        question_id: schema.string({ escape: true, trim: true }, [
          rules.exists({
            table: 'questions',
            column: 'id',
            whereNot: { is_deleted: true },
          }),
        ]),
        choice_id: schema.string({ escape: true, trim: true }, [
          rules.exists({
            table: 'choices',
            column: 'id',
            whereNot: { is_deleted: true },
          }),
        ]),
      })
    ),
  })

  public messages = {}
}
