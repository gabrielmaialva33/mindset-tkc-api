import Route from '@ioc:Adonis/Core/Route'
import TokensController from 'App/Modules/User/Controllers/Http/TokensController'

Route.group(() => {
  Route.get('/generate', new TokensController().generate).as('token.generate')
  Route.post('/', new TokensController().store).as('token.store')
}).prefix('tokens')
