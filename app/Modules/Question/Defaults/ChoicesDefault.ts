import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'

export const LikertChoicesDefault: Array<IChoice.DTO.Update> = [
  {
    sentence: 'NUNCA',
    value: 0,
    order: 1,
  },
  {
    sentence: 'QUASE NUNCA',
    value: 1,
    order: 2,
  },
  {
    sentence: 'ALGUMAS VEZES',
    value: 2,
    order: 3,
  },
  {
    sentence: 'QUASE SEMPRE',
    value: 3,
    order: 4,
  },
  {
    sentence: 'SEMPRE',
    value: 4,
    order: 5,
  },
]

export const TimeChoicesDefault: Array<IChoice.DTO.Update> = [
  {
    sentence: 'NUNCA',
    value: 1,
    order: 1,
  },
  {
    sentence: 'ANUALMENTE',
    value: 2,
    order: 2,
  },
  {
    sentence: 'MENSALMENTE',
    value: 3,
    order: 3,
  },
  {
    sentence: 'SEMANALMENTE',
    value: 4,
    order: 4,
  },
  {
    sentence: 'DIARIAMENTE',
    value: 5,
    order: 5,
  },
]

export const OpinionChoicesDefault: Array<IChoice.DTO.Update> = [
  { sentence: 'DISCORDO TOTALMENTE', value: 1, order: 1 },
  { sentence: 'DISCORDO EM BOA PARTE', value: 2, order: 2 },
  { sentence: 'NÃO CONCORDO NEM DISCORDO', value: 3, order: 3 },
  { sentence: 'CONCORDO EM BOA PARTE', value: 4, order: 4 },
  { sentence: 'CONCORDO TOTALMENTE', value: 5, order: 5 },
]

export const BinaryChoicesDefault: Array<IChoice.DTO.Update> = [
  {
    sentence: 'SIM',
    value: 1,
    order: 1,
  },
  {
    sentence: 'NÃO',
    value: 0,
    order: 2,
  },
]

export const MeasurableChoicesDefault: Array<IChoice.DTO.Update> = [
  {
    sentence: 'Nada',
    value: 0,
    order: 1,
  },
  {
    sentence: 'Não muito',
    value: 1,
    order: 2,
  },
  {
    sentence: 'Um pouco',
    value: 2,
    order: 3,
  },
  {
    sentence: 'Bastante',
    value: 3,
    order: 4,
  },
  {
    sentence: 'Totalmente',
    value: 4,
    order: 5,
  },
]

export const NumberChoicesDefault: Array<IChoice.DTO.Update> = [
  {
    sentence: '0',
    value: 0,
    order: 1,
  },
  {
    sentence: '1',
    value: 1,
    order: 2,
  },
  {
    sentence: '2',
    value: 2,
    order: 3,
  },
  {
    sentence: '3',
    value: 3,
    order: 4,
  },
]
