import Route from '@ioc:Adonis/Core/Route'
import AnswersController from 'App/Modules/Question/Controllers/Http/AnswersController'

Route.group(() => {
  Route.post('/', new AnswersController().attach).as('answers.attach')
  Route.delete('/', new AnswersController().detach).as('answers.detach')
}).prefix('answers')
