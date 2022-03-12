module.exports = {
  // проверка типов для TS файлов
  '**/*.(ts|tsx)': () => 'tsc --pretty --noEmit --incremental false',

  // проверка и форматирование JS и TS файлов с помощью eslint, а также
  // форматирование с помощью prettier
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // форматирование MarkDown и JSON файлов
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
