import Mail from '@ioc:Adonis/Addons/Mail'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Modules/User/Models/User'

export default class MailersController {
  public async send({ params, response }: HttpContextContract): Promise<void> {
    const { id: userId } = params
    const user = await User.query().where('id', userId).first()
    if (user) {
      user.was_sent_email = true
      await user.save()

      await Mail.send((message) => {
        message
          .subject('Relatório TCK')
          .from('mindset-tkc@mrootx.xyz', 'TKC')
          .to(user.email, user.name)
          .htmlView('emails/welcome', {
            name: user.name,
            email: user.email,
            birth_date: user.birth_date ? user.birth_date.toLocaleString().slice(0, 10) : null,
            daily_workload: user.daily_workload,
            retirement: user.retirement,
            url: `https://mindset-tkc.mrootx.xyz/feedback/${userId}`,
          })
      })

      return response.json({ message: 'Email enviado com sucesso' })
    }
  }
}
