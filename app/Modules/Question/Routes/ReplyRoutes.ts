import Route from '@ioc:Adonis/Core/Route'
import RepliesController from 'App/Modules/Question/Controllers/Http/RepliesController'

Route.group(() => {
  Route.post('/', new RepliesController().store).as('reply.store')
  Route.put('/:id', new RepliesController().store).as('reply.update')
}).prefix('replies')