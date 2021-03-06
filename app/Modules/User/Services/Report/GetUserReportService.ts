import { inject, injectable } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

import Database from '@ioc:Adonis/Lucid/Database'
import { average, maxArr, median, minArr, sum } from 'App/Shared/Utils/Math'

@injectable()
export class GetUserReportService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUser.Repository
  ) {}

  public async run(userId: string, category: string) {
    const user = await this.usersRepository.findBy('id', userId)
    if (!user) throw new NotFoundException('User not found or not available.')

    const reports = {
      impulsores: await this.impulsores(userId),
      motivadores: await this.motivadores(userId),
      assertividade: await this.assertividade(userId),
      gerencial: await this.gerencial(userId),
    }

    return reports[category.trim().toLowerCase()]
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

    return {
      potential: average(performance),
      average: avg,
      median: median(data),
      max: maxArr(data),
      min: minArr(data),
      groups,
      reports,
    }
  }

  public async motivadores(userId: string) {
    const groups: Array<string> = ['V', 'W', 'X', 'Y', 'Z']

    let data: Array<number> = []
    let reports: Array<{ group: string; sum: number; performance?: number }> = []
    for (const group of groups) {
      const { rows } = await Database.rawQuery(
        'select sum(d.value) from answers as a join questions as q on a.question_id = q.id join choices as c on a.choice_id = c.id join dependencies as d on a.dependency_id = d.id where c.group = :group and a.user_id = :user_id',
        {
          group,
          user_id: userId,
        }
      )

      data.push(Number(rows[0].sum))
      reports.push({ group, sum: Number(rows[0].sum) })
    }

    const total = sum(data)
    const performance = data.map((value) => {
      if (value / total > 1) return (1 - (value / total - 1)) * 100
      else return (value / total) * 100
    })

    for (let i = 0; i < performance.length; i++)
      reports[i].performance = Number(performance[i].toFixed(1))

    return {
      total,
      potential: average(performance),
      groups,
      reports,
    }
  }

  public async assertividade(userId: string) {
    const groups: Array<string> = [
      'MEDO',
      'AMOR',
      'RAIVA',
      'DEFESA',
      'TRISTEZA',
      'ALEGRIA',
      'NEGACAO',
    ]

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

    const max = maxArr(data)
    const performance = data.map((value) => {
      if (value / max > 1) return (1 - (value / max - 1)) * 100
      else return (value / max) * 100
    })

    for (let i = 0; i < performance.length; i++)
      reports[i].performance = Number(performance[i].toFixed(2))

    return {
      potential: Number(average(performance).toFixed(1)),
      need: Number(Number(100 - Number(average(performance).toFixed(1))).toFixed(1)),
      average: Math.round(average(data)),
      median: median(data),
      max,
      min: minArr(data),
      groups,
      reports,
    }
  }

  public async gerencial(userId: string) {
    const groups: Array<string> = ['CS', 'CR', 'CL', 'A', 'PN', 'PC']

    let data: Array<number> = []
    let reports: Array<{
      group: string
      sum: number
      current?: number
      ideal?: number
      avg?: number
    }> = []
    for (const group of groups) {
      const { rows } = await Database.rawQuery(
        'select sum(d.value) from answers as a join questions as q on a.question_id = q.id join choices as c on a.choice_id = c.id join dependencies as d on a.dependency_id = d.id where c.group = :group and a.user_id = :user_id',
        {
          group,
          user_id: userId,
        }
      )

      data.push(Number(rows[0].sum))
      reports.push({ group, sum: Number(rows[0].sum) })
    }

    const avgs = [8.8, 7.2, 11.5, 24.3, 12.7, 10.8]
    for (let i = 0; i < avgs.length; i++) reports[i].avg = avgs[i]

    const sub = data.map((value, i) => {
      if (Number((value - avgs[i]).toFixed(2)) < 0)
        return Number(((value - avgs[i]) * -1).toFixed(2))
      else return Number((value - avgs[i]).toFixed(2))
    })

    const currents = sub.map((value, i) => {
      if ((1 - value / avgs[i]) * 100 < 0) return 0
      else return Number(((1 - value / avgs[i]) * 100).toFixed(2))
    })
    for (let i = 0; i < currents.length; i++) reports[i].current = Number(currents[i].toFixed(0))

    const p = data.map((value, i) => Number(Number((value / avgs[i]) * 100).toFixed(2)))
    const ideals = p.map((value) => {
      if (value - 100 < 0) return Number(((value - 100) * -1).toFixed(2))
      else return Number((value - 100).toFixed(2))
    })
    for (let i = 0; i < ideals.length; i++) reports[i].ideal = Number(ideals[i].toFixed(0))

    return {
      total: Number(average(currents).toFixed(0)),
      groups,
      reports,
    }
  }
}
