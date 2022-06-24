import Mail from '@ioc:Adonis/Addons/Mail'

export default class MailersController {
  public async send() {
    await Mail.send((message) => {
      message
        .subject('Relatório TCK')
        .from('gabriel.maia@yazo.com.br', 'TKC')
        .to('gabriel.maia@yazo.com.br', 'Gabriel Maia')
        .htmlView('emails/welcome', {})
    })
  }
}
