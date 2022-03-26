import Route from '@ioc:Adonis/Core/Route'

import ChoicesController from 'App/Modules/Question/Controllers/Http/ChoicesController'

Route.group(() => {
  Route.post('/', new ChoicesController().store).as('choice.store')
  Route.put('/:id', new ChoicesController().update).as('choice.update')
  Route.delete('/:id', new ChoicesController().destroy).as('choice.destroy')
}).prefix('choices')
