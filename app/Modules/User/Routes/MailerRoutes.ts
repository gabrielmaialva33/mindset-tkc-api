import Route from '@ioc:Adonis/Core/Route'

import MailersController from 'App/Modules/User/Controllers/Http/MailersController'

Route.group(() => {
  Route.get('/send/:id', new MailersController().send).as('mailer.send')
}).prefix('mailer')
