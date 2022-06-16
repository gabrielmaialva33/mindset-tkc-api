import Route from '@ioc:Adonis/Core/Route'
import TokensController from 'App/Modules/User/Controllers/Http/TokensController'

Route.group(() => {
  Route.get('/', new TokensController().list).as('token.list')
  Route.post('/', new TokensController().store).as('token.store')

  Route.get('/generate', new TokensController().generate).as('token.generate')
  Route.get('/validate/:code', new TokensController().validate).as('token.validate')
}).prefix('tokens')
