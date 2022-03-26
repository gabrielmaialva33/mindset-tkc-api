import Route from '@ioc:Adonis/Core/Route'

import CategoriesController from 'App/Modules/Question/Controllers/Http/CategoriesController'

Route.group(() => {
  Route.get('/', new CategoriesController().index).as('category.index')
  Route.get('/:id', new CategoriesController().show).as('category.show')
  Route.post('/', new CategoriesController().store).as('category.store')
  Route.put('/:id', new CategoriesController().update).as('category.update')
  Route.delete('/:id', new CategoriesController().destroy).as('category.destroy')
}).prefix('/categories')
