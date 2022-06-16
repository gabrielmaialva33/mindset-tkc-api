import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {
  ListCategoryService,
  GetCategoryService,
  StoreCategoryService,
  DeleteCategoryService,
  EditCategoryService,
} from 'App/Modules/Question/Services/Category'

import StoreCategoryValidator from 'App/Modules/Question/Validators/Category/StoreCategoryValidator'
import EditCategoryValidator from 'App/Modules/Question/Validators/Category/EditCategoryValidator'

export default class CategoriesController {
  public async list({ request, response }: HttpContextContract): Promise<void> {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)

    const listCategories = container.resolve(ListCategoryService)
    const categories = await listCategories.init({ page, perPage })

    return response.json(categories)
  }

  public async get({ params, response }: HttpContextContract): Promise<void> {
    const { id: categoryId } = params

    const getCategory = container.resolve(GetCategoryService)
    const category = await getCategory.init(categoryId)

    return response.json(category)
  }

  public async store({ request, response }: HttpContextContract): Promise<void> {
    const categoryDTO = await request.validate(StoreCategoryValidator)

    const storeCategory = container.resolve(StoreCategoryService)
    const category = await storeCategory.init(categoryDTO)

    return response.json(category)
  }

  public async edit({ request, params, response }: HttpContextContract): Promise<void> {
    const { id: categoryId } = params
    const categoryDTO = await request.validate(EditCategoryValidator)

    const editCategory = container.resolve(EditCategoryService)
    const category = await editCategory.init(categoryId, categoryDTO)

    return response.json(category)
  }

  public async delete({ params, response }: HttpContextContract): Promise<void> {
    const { id: categoryId } = params

    const deleteCategory = container.resolve(DeleteCategoryService)
    await deleteCategory.init(categoryId)

    return response.json({ message: 'Category deleted successfully.' })
  }
}
