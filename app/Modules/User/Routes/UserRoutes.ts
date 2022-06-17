import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Modules/User/Controllers/Http/UsersController'

Route.group(() => {
  Route.get('/users', new UsersController().list).as('user.list')
  Route.post('/users', new UsersController().store).as('user.store')
  Route.put('/users/:id', new UsersController().edit).as('user.edit')
})
