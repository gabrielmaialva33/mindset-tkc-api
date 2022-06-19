import BaseRepository from 'App/Shared/Repositories/BaseRepository'

import { IDependency } from 'App/Modules/Question/Interfaces/DependencyInterface'
import Dependency from 'App/Modules/Question/Models/Dependency'

export default class DependenciesRepository
  extends BaseRepository<typeof Dependency>
  implements IDependency.Repository
{
  constructor() {
    super(Dependency)
  }
}
