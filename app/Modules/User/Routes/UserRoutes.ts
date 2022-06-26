import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Modules/User/Controllers/Http/UsersController'
import ReportsController from 'App/Modules/User/Controllers/Http/ReportsController'

Route.group(() => {
  Route.get('/', new UsersController().list).as('user.list')
  Route.post('/', new UsersController().store).as('user.store')
  Route.put('/:id', new UsersController().edit).as('user.edit')
}).prefix('users')

Route.group(() => {
  Route.get('/reports/:name', new ReportsController().list).as('user.reports.list')
}).prefix('users')
