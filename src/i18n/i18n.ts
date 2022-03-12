// используется для next-i18next, а также для i18n routing next.js
export enum LocalesEnum {
  en = 'en',
  ru = 'ru',
}
// используется для подстановки в запрос на API
export enum RequestLocalesEnum {
  en = 'en',
  ru = 'ru-RU',
}
// используется для сокращенных названий в свитчере локали
export const localesAbbreviationMapping: Record<LocalesEnum, string> = {
  [LocalesEnum.en]: 'ENG',
  [LocalesEnum.ru]: 'RUS',
}
// используется для полных названий в свитчере локали
export const localesDecryptionMapping: Record<LocalesEnum, string> = {
  [LocalesEnum.en]: 'English version',
  [LocalesEnum.ru]: 'Russian version',
}
