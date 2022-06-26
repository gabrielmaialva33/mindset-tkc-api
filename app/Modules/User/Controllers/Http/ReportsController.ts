import { container } from 'tsyringe'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { GetUserReportService } from 'App/Modules/User/Services/Report'

export default class ReportsController {
  public async list({ request, params, response }: HttpContextContract): Promise<void> {
    const { name } = params
    const userId = request.input('user_id', null)
    const getReport = container.resolve(GetUserReportService)
    const report = await getReport.run(userId, name)

    return response.json(report)
  }
}
