import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  IndexCategoryService,
  ShowCategoryService,
  StoreCategoryService,
  DestroyCategoryService,
  UpdateCategoryService,
} from 'App/Modules/Question/Services/Category'

import StoreCategoryValidator from 'App/Modules/Question/Validators/Category/StoreCategoryValidator'
import UpdateCategoryValidator from 'App/Modules/Question/Validators/Category/UpdateCategoryValidator'

export default class CategoriesController {
  public async index({ request, response }: HttpContextContract): Promise<void> {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)

    const indexService = container.resolve(IndexCategoryService)
    const categories = await indexService.init({ page, perPage })

    return response.json(categories)
  }

  public async show({ params, response }: HttpContextContract): Promise<void> {
    const { id: categoryId } = params

    const showService = container.resolve(ShowCategoryService)
    const category = await showService.init(categoryId)

    return response.json(category)
  }

  public async store({ request, response }: HttpContextContract): Promise<void> {
    const categoryDTO = await request.validate(StoreCategoryValidator)

    const storeCategory = container.resolve(StoreCategoryService)
    const category = await storeCategory.init(categoryDTO)

    return response.json(category)
  }

  public async update({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: categoryId } = params
    const categoryDTO = await request.validate(UpdateCategoryValidator)

    const updateService = container.resolve(UpdateCategoryService)
    const category = await updateService.init(categoryId, categoryDTO)

    return response.json(category)
  }

  public async destroy({ params, response }: HttpContextContract): Promise<void> {
    const { id: categoryId } = params

    const destroyService = container.resolve(DestroyCategoryService)
    const category = await destroyService.init(categoryId)

    return response.json(category)
  }
}
