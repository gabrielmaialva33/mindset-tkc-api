import Route from '@ioc:Adonis/Core/Route'

import QuestionsController from 'App/Modules/Question/Controllers/Http/QuestionsController'

Route.group(() => {
  Route.get('/:id', new QuestionsController().show).as('question.show')
  Route.post('/', new QuestionsController().store).as('question.store')
  Route.put('/:id', new QuestionsController().update).as('question.update')
  Route.delete('/:id', new QuestionsController().destroy).as('question.destroy')
}).prefix('questions')
