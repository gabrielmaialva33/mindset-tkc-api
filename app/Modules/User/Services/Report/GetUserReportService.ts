import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

import Database from '@ioc:Adonis/Lucid/Database'
import { average, median } from 'App/Shared/Utils/Math'

@injectable()
export class GetUserReportService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository
  ) {}

  public async run(userId: string, category: string) {
    const user = await this.usersRepository.findBy('id', userId)
    if (!user) throw new NotFoundException('User not found or not available.')
    console.log(category)

    return this.impulsores(userId)
  }

  public async impulsores(userId: string) {
    const groups: Array<string> = ['P', 'E', 'F', 'AP', 'AG']

    let data: Array<number> = []
    let reports: Array<{ group: string; sum: number; performance?: number }> = []
    for (const group of groups) {
      const { rows } = await Database.rawQuery(
        'select sum(c.value) from answers as a join questions as q on a.question_id = q.id join choices as c on a.choice_id = c.id where q.group = :group and a.user_id = :user_id',
        {
          group,
          user_id: userId,
        }
      )

      data.push(Number(rows[0].sum))
      reports.push({ group, sum: Number(rows[0].sum) })
    }

    const avg = Math.round(average(data))
    const performance = data.map((value) => {
      if (value / avg > 1) return (1 - (value / avg - 1)) * 100
      else return (value / avg) * 100
    })

    for (let i = 0; i < performance.length; i++)
      reports[i].performance = Number(performance[i].toFixed(2))

    return { potential: average(performance), average: avg, median: median(data), reports }
  }
}
