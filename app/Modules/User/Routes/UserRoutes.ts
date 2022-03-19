import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Modules/User/Controllers/Http/UsersController'

Route.group(() => {
  Route.post('/users', new UsersController().store).as('user.store')
})
