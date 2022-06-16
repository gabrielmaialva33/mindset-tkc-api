import Route from '@ioc:Adonis/Core/Route'

import ChoicesController from 'App/Modules/Question/Controllers/Http/ChoicesController'

Route.group(() => {
  Route.post('/', new ChoicesController().store).as('choice.store')
  Route.put('/:id', new ChoicesController().edit).as('choice.edit')
  Route.delete('/:id', new ChoicesController().delete).as('choice.delete')
}).prefix('choices')
