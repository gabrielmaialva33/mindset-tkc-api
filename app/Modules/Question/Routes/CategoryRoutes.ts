import Route from '@ioc:Adonis/Core/Route'

import CategoriesController from 'App/Modules/Question/Controllers/Http/CategoriesController'

Route.group(() => {
  Route.get('/', new CategoriesController().list).as('category.list')
  Route.get('/:id', new CategoriesController().get).as('category.get')
  Route.post('/', new CategoriesController().store).as('category.store')
  Route.put('/:id', new CategoriesController().edit).as('category.edit')
  Route.delete('/:id', new CategoriesController().delete).as('category.delete')
}).prefix('/categories')
