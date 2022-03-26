import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { container } from 'tsyringe'

import { StoreDefaultQuestionService } from 'App/Modules/Question/Services/Question'

import {
  AssertividadeQuestionsDefault,
  AutorresponsabilidadeQuestionsDefault,
  BurnoutQuestionsDefault,
  CerebralQuestionsDefault,
  ConexaoQuestionsDefault,
  DirecionalQuestionsDefault,
  GerencialQuestionsDefault,
  ImpulsoresQuestionsDefault,
  MotivadoresQuestionsDefault,
  TempoQuestionsDefault,
} from 'App/Modules/Question/Defaults/QuestionsDefault'

export default class CreateDefaultQuestions extends BaseSchema {
  public async up() {
    const storeDefaultQuestion = container.resolve(StoreDefaultQuestionService)
    await storeDefaultQuestion.init(ImpulsoresQuestionsDefault, 1)
    await storeDefaultQuestion.init(MotivadoresQuestionsDefault, 2)
    await storeDefaultQuestion.init(AssertividadeQuestionsDefault, 3)
    await storeDefaultQuestion.init(GerencialQuestionsDefault, 4)
    await storeDefaultQuestion.init(CerebralQuestionsDefault, 5)
    await storeDefaultQuestion.init(TempoQuestionsDefault, 6)
    await storeDefaultQuestion.init(BurnoutQuestionsDefault, 7)
    await storeDefaultQuestion.init(ConexaoQuestionsDefault, 8)
    await storeDefaultQuestion.init(AutorresponsabilidadeQuestionsDefault, 9)
    await storeDefaultQuestion.init(DirecionalQuestionsDefault, 10)
  }

  public async down() {
    this.db.rawQuery('truncate questions;').knexQuery
  }
}
