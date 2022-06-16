import Route from '@ioc:Adonis/Core/Route'

import QuestionsController from 'App/Modules/Question/Controllers/Http/QuestionsController'

Route.group(() => {
  Route.get('/:id', new QuestionsController().get).as('question.get')
  Route.post('/', new QuestionsController().store).as('question.store')
  Route.put('/:id', new QuestionsController().edit).as('question.edit')
  Route.delete('/:id', new QuestionsController().delete).as('question.delete')
}).prefix('questions')
