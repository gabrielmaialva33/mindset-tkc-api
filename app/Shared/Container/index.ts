import { container, delay } from 'tsyringe'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import UsersRepository from 'App/Modules/User/Repositories/UsersRepository'

import { IToken } from 'App/Modules/User/Interfaces/TokenInterface'
import TokensRepository from 'App/Modules/User/Repositories/TokensRepository'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import QuestionsRepository from 'App/Modules/Question/Repositories/QuestionsRepository'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import ChoicesRepository from 'App/Modules/Question/Repositories/ChoicesRepository'

import { IDependency } from 'App/Modules/Question/Interfaces/DependencyInterface'
import DependenciesRepository from 'App/Modules/Question/Repositories/DependenciesRepository'

import { IAnswer } from 'App/Modules/Question/Interfaces/AnswerInterface'
import AnswersRepository from 'App/Modules/Question/Repositories/AnswersRepository'

import { IReply } from 'App/Modules/Question/Interfaces/ReplyInterface'
import RepliesRepository from 'App/Modules/Question/Repositories/RepliesRepository'

/**
 * User container
 */
container.registerSingleton<IUser.Repository>(
  'UsersRepository',
  delay(() => UsersRepository)
)

container.registerSingleton<IToken.Repository>(
  'TokensRepository',
  delay(() => TokensRepository)
)

/**
 * Questions container
 */
container.registerSingleton<ICategory.Repository>(
  'CategoriesRepository',
  delay(() => CategoriesRepository)
)

container.registerSingleton<IQuestion.Repository>(
  'QuestionsRepository',
  delay(() => QuestionsRepository)
)

container.registerSingleton<IChoice.Repository>(
  'ChoicesRepository',
  delay(() => ChoicesRepository)
)

container.registerSingleton<IDependency.Repository>(
  'DependenciesRepository',
  delay(() => DependenciesRepository)
)

container.registerSingleton<IAnswer.Repository>(
  'AnswersRepository',
  delay(() => AnswersRepository)
)

container.registerSingleton<IReply.Repository>(
  'RepliesRepository',
  delay(() => RepliesRepository)
)
