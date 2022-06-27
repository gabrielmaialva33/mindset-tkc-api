import Route from '@ioc:Adonis/Core/Route'
import AnswersController from 'App/Modules/Question/Controllers/Http/AnswersController'

Route.group(() => {
  Route.get('/', new AnswersController().list).as('answers.list')
  Route.post('/', new AnswersController().attach).as('answers.attach')
  Route.put('/', new AnswersController().detach).as('answers.detach')
}).prefix('answers')
