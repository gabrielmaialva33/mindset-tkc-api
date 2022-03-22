import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateCategoryValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ escape: true, trim: true }, []),
    description: schema.string.optional({ escape: true, trim: true }, []),
    order: schema.number.optional([]),
  })

  public messages = {}
}
