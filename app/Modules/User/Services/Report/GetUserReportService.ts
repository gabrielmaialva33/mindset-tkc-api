import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

import Database from '@ioc:Adonis/Lucid/Database'

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
    const groups: Array<string> = ['AG', 'AP', 'E', 'F', 'P']
    let report: Array<{ group: string; count: number }> = []

    for (const group of groups) {
      const { rows } = await Database.rawQuery(
        'select count(*) from answers as a join questions as q on a.question_id = q.id where q.group = :group and a.user_id = :user_id',
        {
          group,
          user_id: userId,
        }
      )
      report.push({ group, count: Number(rows[0].count) })
    }

    return report
  }
}
