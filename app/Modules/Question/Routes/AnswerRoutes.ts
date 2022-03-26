import Route from '@ioc:Adonis/Core/Route'
import AnswersController from 'App/Modules/Question/Controllers/Http/AnswersController'

Route.group(() => {
  Route.post('/', new AnswersController().store).as('answers.store')
  Route.delete('/', new AnswersController().destroy).as('answers.destroy')
}).prefix('answers')
