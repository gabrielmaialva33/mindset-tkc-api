import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'

export const LikertChoicesDefault: Array<IChoice.DTO.Edit> = [
  {
    sentence: 'NUNCA',
    label: '0',
    value: 0,
    order: 1,
  },
  {
    sentence: 'QUASE NUNCA',
    label: '1',
    value: 1,
    order: 2,
  },
  {
    sentence: 'ALGUMAS VEZES',
    label: '2',
    value: 2,
    order: 3,
  },
  {
    sentence: 'QUASE SEMPRE',
    label: '3',
    value: 3,
    order: 4,
  },
  {
    sentence: 'SEMPRE',
    label: '4',
    value: 4,
    order: 5,
  },
]

export const TimeChoicesDefault: Array<IChoice.DTO.Edit> = [
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

export const OpinionChoicesDefault: Array<IChoice.DTO.Edit> = [
  { sentence: 'DISCORDO TOTALMENTE', value: 1, order: 1 },
  { sentence: 'DISCORDO EM BOA PARTE', value: 2, order: 2 },
  { sentence: 'NÃO CONCORDO NEM DISCORDO', value: 3, order: 3 },
  { sentence: 'CONCORDO EM BOA PARTE', value: 4, order: 4 },
  { sentence: 'CONCORDO TOTALMENTE', value: 5, order: 5 },
]

export const BinaryChoicesDefault: Array<IChoice.DTO.Edit> = [
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

export const MeasurableChoicesDefault: Array<IChoice.DTO.Edit> = [
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

export const NumberChoicesDefault: Array<IChoice.DTO.Edit> = [
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

export const MotivadoresChoicesDefault: Array<IChoice.DTO.Edit & { question: number }> = [
  {
    sentence: 'um salário compatível com as minhas necessidades básicas e as de minha família.',
    value: 0,
    order: 1,
    question: 1,
  },
  {
    sentence:
      'a oportunidade de testar a minha própria capacidade de ter acesso aos meus resultados.',
    value: 0,
    order: 2,
    question: 1,
  },
  {
    sentence:
      'me oferecer normas de trabalho claramente definidas, sólidas garantias de estabilidade e assegurar-me privilégios mais amplos de assistência médico-hospitalar.',
    value: 0,
    order: 3,
    question: 2,
  },
  {
    sentence:
      'me proporcionar autonomia para criar liberdade para experimentar e autoridade para inovar.',
    value: 0,
    order: 4,
    question: 2,
  },
  {
    sentence:
      'não valoriza as boas condições ambientais de trabalho que lhe são oferecidas (instalações físicas confortáveis, bem iluminadas, restaurante interno, etc).',
    value: 0,
    order: 5,
    question: 3,
  },
  {
    sentence: 'não me confere o devido respeito e consideração.',
    value: 0,
    order: 6,
    question: 3,
  },
  {
    sentence: 'recebo um salário compatível com minhas necessidades básicas e as de minha família.',
    value: 0,
    order: 7,
    question: 4,
  },
  {
    sentence:
      'mantenho um relacionamento cordial e harmonioso com meus colegas, meus superiores e meus subordinados, bem como a convicção de que sou bem aceito por eles.',
    value: 0,
    order: 8,
    question: 4,
  },
  {
    sentence:
      'me oferecer normas de trabalho claramente definidas, sólidas garantias de estabilidade e assegurar-me privilégios mais amplos de assistência médico-hospitalar.',
    value: 0,
    order: 9,
    question: 5,
  },
  {
    sentence: 'me conferir maior prestígio e poder.',
    value: 0,
    order: 10,
    question: 5,
  },
  {
    sentence:
      'me delegam responsabilidade que exige minha dedicação pessoal, e fico privado de compartilhar os meus problemas e as minhas idéias com meus companheiros.',
    value: 0,
    order: 11,
    question: 6,
  },
  {
    sentence: 'as minhas responsabilidades atuais deixarem de representar um desafio.',
    value: 0,
    order: 12,
    question: 6,
  },
  {
    sentence:
      'um supervisor imediato em quem eu possa confiar, condições de trabalho bem organizadas, e um ambiente de trabalho onde quase tudo já foi previsto e planejado.',
    value: 0,
    order: 13,
    question: 7,
  },
  {
    sentence: 'o reconhecimento que me conferem exclusivamente em função dos meus méritos.',
    value: 0,
    order: 14,
    question: 7,
  },
  {
    sentence:
      'me oferecer boas condições de trabalho: ambiente confortável, amplo e limpo, com boa iluminação e temperatura agradável, restaurante interno com comida saborosa.',
    value: 0,
    order: 15,
    question: 8,
  },
  {
    sentence:
      'me convidar para fazer parte de uma equipe de trabalho, que mantém excelentes relações entre os seus membros.',
    value: 0,
    order: 16,
    question: 8,
  },
  {
    sentence: 'não me confere o devido respeito e consideração.',
    value: 0,
    order: 17,
    question: 9,
  },
  {
    sentence: 'resiste a colaborar comigo na experimentação de novas idéias.',
    value: 0,
    order: 18,
    question: 9,
  },
  {
    sentence:
      'tenho um supervisor imediato em quem eu possa confiar, condições de trabalho bem organizadas, e um ambiente de trabalho onde quase tudo já foi previsto e planejado.',
    value: 0,
    order: 19,
    question: 10,
  },
  {
    sentence:
      'me proporcionam a oportunidade de testar a minha própria capacidade e tenho acesso aos meus resultados.',
    value: 0,
    order: 20,
    question: 10,
  },
  {
    sentence:
      'me oferecer boas condições de trabalho: ambiente confortável, amplo e limpo, com boa iluminação e temperatura agradável, restaurante interno com comida saborosa.',
    value: 0,
    order: 21,
    question: 11,
  },
  {
    sentence: 'me conferir maior prestígio e poder.',
    value: 0,
    order: 22,
    question: 11,
  },
  {
    sentence:
      'sou excessivamente solicitado no exercício de minhas atribuições a ponto de ter que sacrificar sistematicamente o meu horário de almoço ou de saída.',
    value: 0,
    order: 23,
    question: 12,
  },
  {
    sentence: 'as minhas responsabilidades atuais deixarem de representar um desafio.',
    value: 0,
    order: 24,
    question: 12,
  },
  {
    sentence: 'um salário compatível com as minhas necessidades básicas e as de minha família.',
    value: 0,
    order: 25,
    question: 13,
  },
  {
    sentence:
      'um supervisor imediato em quem eu possa confiar, condições de trabalho bem organizadas, e um ambiente de trabalho onde quase tudo já foi previsto e planejado.',
    value: 0,
    order: 26,
    question: 13,
  },
  {
    sentence:
      'um supervisor imediato em quem eu possa confiar, condições de trabalho bem organizadas, e um ambiente de trabalho onde quase tudo já foi previsto e planejado.',
    value: 0,
    order: 27,
    question: 14,
  },
  {
    sentence:
      'me convidar para fazer parte de uma equipe de trabalho, que mantém excelentes relações entre os seus membros.',
    value: 0,
    order: 28,
    question: 14,
  },
  {
    sentence: 'não pensa no dia de amanhã.',
    value: 0,
    order: 29,
    question: 15,
  },
  {
    sentence: 'é anti-social e confunde qualquer iniciativa de sociabilidade com "puxa-saquismo".',
    value: 0,
    order: 30,
    question: 15,
  },
  {
    sentence: 'me conferem reconhecimento em função dos meus méritos exclusivamente.',
    value: 0,
    order: 31,
    question: 16,
  },
  {
    sentence:
      'me proporcionam a oportunidade de testar a minha própria capacidade e tenho acesso aos meus resultados.',
    value: 0,
    order: 32,
    question: 16,
  },
  {
    sentence:
      'me oferecer boas condições de trabalho: ambiente confortável, amplo e limpo, com boa iluminação e temperatura agradável, restaurante interno com comida saborosa.',
    value: 0,
    order: 33,
    question: 17,
  },
  {
    sentence:
      'me oferecer normas de trabalho claramente definidas, sólidas garantias de estabilidade e assegurar-me privilégios mais amplos de assistência médico-hospitalar.',
    value: 0,
    order: 34,
    question: 17,
  },
  {
    sentence:
      'me delegam responsabilidade que exige minha dedicação pessoal, e fico privado de compartilhar os meus problemas e as minhas idéias com meus companheiros.',
    value: 0,
    order: 35,
    question: 18,
  },
  {
    sentence:
      'outro executivo, sem as qualificações que possuo, for promovido por mero favoritismo para o cargo que eu estou planejando assumir no futuro próximo.',
    value: 0,
    order: 36,
    question: 18,
  },
  {
    sentence:
      'o relacionamento cordial e harmonioso com os meus colegas, meus superiores e meus subordinados, bem como a convicção de que sou bem aceito por eles.',
    value: 0,
    order: 37,
    question: 19,
  },
  {
    sentence: 'o reconhecimento que me conferem exclusivamente em função dos meus méritos.',
    value: 0,
    order: 38,
    question: 19,
  },
  {
    sentence: 'me oferecer um cargo que confira maior prestígio e poder.',
    value: 0,
    order: 39,
    question: 20,
  },
  {
    sentence:
      'me proporcionar autonomia para criar liberdade para experimentar e autoridade para inovar.',
    value: 0,
    order: 40,
    question: 20,
  },
  {
    sentence:
      'não valoriza as boas condições ambientais de trabalho que lhe são oferecidas (instalações físicas confortáveis, bem iluminadas, restaurante interno, etc).',
    value: 0,
    order: 41,
    question: 21,
  },
  {
    sentence: 'é anti-social e confunde qualquer iniciativa de sociabilidade com "puxa-saquismo".',
    value: 0,
    order: 42,
    question: 21,
  },
  {
    sentence:
      'mantenho um relacionamento cordial e harmonioso com meus colegas, meus superiores e meus subordinados, bem como a convicção de que sou bem aceito por eles.',
    value: 0,
    order: 43,
    question: 22,
  },
  {
    sentence:
      'me proporcionam a oportunidade de testar a minha própria capacidade e tenho acesso aos meus resultados.',
    value: 0,
    order: 44,
    question: 22,
  },
  {
    sentence:
      'me oferecer boas condições de trabalho: ambiente confortável, amplo e limpo, com boa iluminação e temperatura agradável, restaurante interno com comida saborosa.',
    value: 0,
    order: 45,
    question: 23,
  },
  {
    sentence:
      'me proporcionar autonomia para criar liberdade para experimentar e autoridade para inovar.',
    value: 0,
    order: 46,
    question: 23,
  },
  {
    sentence:
      'perco a confiança no meu chefe, desconfio da estabilidade do meu cargo, temo pela sobrevivência da minha organização.',
    value: 0,
    order: 47,
    question: 24,
  },
  {
    sentence:
      'outro executivo, sem as qualificações que possuo, for promovido por mero favoritismo para o cargo que eu estou planejando assumir no futuro próximo.',
    value: 0,
    order: 48,
    question: 24,
  },
  {
    sentence: 'um salário compatível com as minhas necessidades básicas e as de minha família.',
    value: 0,
    order: 49,
    question: 25,
  },
  {
    sentence: 'o reconhecimento que me conferem exclusivamente em função dos meus méritos.',
    value: 0,
    order: 50,
    question: 25,
  },
  {
    sentence: 'me oferecer um cargo que confira maior prestígio e poder.',
    value: 0,
    order: 51,
    question: 26,
  },
  {
    sentence:
      'me convidar para fazer parte de uma equipe de trabalho, que mantém excelentes relações entre os seus membros.',
    value: 0,
    order: 52,
    question: 26,
  },
  {
    sentence: 'não pensa no dia de amanhã.',
    value: 0,
    order: 53,
    question: 27,
  },
  {
    sentence: 'resiste a colaborar comigo na experimentação de novas idéias.',
    value: 0,
    order: 54,
    question: 27,
  },
  {
    sentence:
      'tenho um supervisor imediato em quem eu possa confiar, condições de trabalho bem organizadas, e um ambiente de trabalho onde quase tudo já foi previsto e planejado.',
    value: 0,
    order: 55,
    question: 28,
  },
  {
    sentence:
      'mantenho um relacionamento cordial e harmonioso com meus colegas, meus superiores e meus subordinados, bem como a convicção de que sou bem aceito por eles.',
    value: 0,
    order: 56,
    question: 28,
  },
  {
    sentence: 'trabalho que mantém excelentes relações entre os seus membros.',
    value: 0,
    order: 57,
    question: 29,
  },
  {
    sentence:
      'me proporcionar autonomia para criar liberdade para experimentar e autoridade para inovar.',
    value: 0,
    order: 58,
    question: 29,
  },
  {
    sentence:
      'sou excessivamente solicitado no exercício de minhas atribuições a ponto de ter que sacrificar sistematicamente o meu horário de almoço ou de saída.',
    value: 0,
    order: 59,
    question: 30,
  },
  {
    sentence:
      'perco a confiança no meu chefe, desconfio da estabilidade do meu cargo, temo pela sobrevivência da minha organização.',
    value: 0,
    order: 60,
    question: 30,
  },
]
